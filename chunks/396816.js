"use strict";
let i, s, l;
n.d(t, { A: () => K, y: () => T });
var r,
    a = n(735438),
    o = n.n(a),
    d = n(136722),
    c = n(317097),
    u = n(311907),
    m = n(73153),
    g = n(867051),
    x = n(145643),
    h = n(176201),
    _ = n(676608),
    A = n(317525),
    p = n(111613),
    f = n(403362),
    j = n(488926),
    N = n(555337),
    E = n(652215),
    b = n(178758),
    T = (((r = {}).SOLID = "solid"), (r.GRADIENT = "gradient"), (r.HOLOGRAPHIC = "holographic"), r);
let C = new Set(),
    I = E.XlH.CLOSED,
    v = !1,
    S = !1,
    y = [],
    R = [],
    O = !1,
    G = new Set(),
    L = new Map(),
    D = new Map(),
    M = new Map();
function k() {
    return null == i || null == y
        ? []
        : p.Ay.calculatePositionDeltas({
              oldOrdering: A.A.getSortedRoles(i.id),
              newOrdering: y,
              idGetter: (e) => e.id,
              existingPositionGetter: (e) => e.position,
              ascending: !1,
          });
}
function U(e) {
    let { section: t } = e;
    if (null != i || t !== E.BEX.ROLES) return !1;
    P();
}
function P() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    (i = N.A.getProps().guild),
        (v = !1),
        (S = !1),
        (l = void 0),
        C.clear(),
        M.clear(),
        (I = E.XlH.OPEN),
        (R = [...(y = null != i ? [...A.A.getSortedRoles(i.id)] : [])]),
        w(i?.id, R),
        (O = !1),
        e &&
            (D.clear(),
            L.forEach((e, t) => {
                D.set(t, [...e]);
            }));
}
function w(e, t) {
    t.forEach((t) => {
        let n = "solid",
            i = (0, _.aF)(e, t);
        null != t.colors &&
            i &&
            (null != t.colors.tertiary_color
                ? (n = "holographic")
                : null != t.colors.secondary_color && (n = "gradient"));
        let s = {
            solid: { primary_color: E.TGz, secondary_color: null, tertiary_color: null },
            gradient: {
                primary_color: b.lO.primary_color,
                secondary_color: b.lO.secondary_color,
                tertiary_color: null,
            },
            holographic: {
                primary_color: b.jl.primary_color,
                secondary_color: b.jl.secondary_color,
                tertiary_color: b.jl.tertiary_color,
            },
        };
        null != t.colors &&
            (s[n] = {
                primary_color: t.colors.primary_color ?? E.TGz,
                secondary_color: t.colors.secondary_color ?? null,
                tertiary_color: t.colors.tertiary_color ?? null,
            }),
            M.set(t.id, { currentStyle: n, styleColors: s });
    });
}
let B = o().debounce(() => {
    let e = !1;
    S && ((S = k().length > 0) || (e = !0)),
        [...C].forEach((t) => {
            var n;
            o().isEqual(
                H(t),
                ((n = t),
                R.find((e) => {
                    let { id: t } = e;
                    return t === n;
                })),
            ) && (C.delete(t), (e = !0));
        }),
        0 === C.size && (v = !1),
        O && o().isEqual(L, D) && ((e = !0), (O = !1)),
        e && W.emitChange();
}, 500);
function F(e, t) {
    let n = y.indexOf(e);
    if (n < 0) return !1;
    let i = { ...e, ...t },
        s = [...y];
    (s[n] = i), (y = s), (v = !0), C.add(i.id), B();
}
function H(e) {
    return y.find((t) => {
        let { id: n } = t;
        return n === e;
    });
}
function V(e) {
    let { guildId: t } = e;
    if (null == (i = N.A.getProps().guild) || t !== i.id || I === E.XlH.SUBMITTING) return !1;
    let n = [...A.A.getSortedRoles(i.id)];
    C.forEach((e) => {
        let t = H(e),
            i = -1;
        null ==
            n.find((t, n) => {
                let { id: s } = t;
                if (s === e) return (i = n), !0;
            }) || null == t
            ? C.delete(e)
            : (n[i] = t);
    }),
        0 === C.size && (v = !1);
    let s = new Map();
    C.forEach((e) => {
        let t = M.get(e);
        null != t && s.set(e, t);
    }),
        M.clear(),
        w(t, n),
        s.forEach((e, t) => {
            M.set(t, e);
        }),
        (S = !1),
        (y = [...n]);
}
class z extends u.Ay.Store {
    static displayName = "GuildSettingsRolesStore";
    initialize() {
        this.waitFor(N.A, x.A, A.A);
    }
    hasChanges() {
        return v || S || O;
    }
    getRoleStyleData(e) {
        return M.get(e);
    }
    get errorMessage() {
        return l;
    }
    get hasSortChanges() {
        return S;
    }
    get hasRoleConfigurationChanges() {
        return O;
    }
    get guild() {
        return i;
    }
    get editedRoleIds() {
        return Array.from(C);
    }
    get editedRoleIdsForConfigurations() {
        return G;
    }
    get roles() {
        return y;
    }
    get formState() {
        return I;
    }
    getSortDeltas() {
        return k();
    }
    showNotice() {
        return this.hasChanges();
    }
    getRole(e) {
        return H(e);
    }
    getPermissionSearchQuery() {
        return s;
    }
    getEditedRoleConnectionConfigurationsMap() {
        return D;
    }
}
let W = new z(
        m.h,
        __OVERLAY__
            ? {}
            : {
                  GUILD_SETTINGS_ROLES_INIT: () => P(),
                  GUILD_SETTINGS_INIT: U,
                  GUILD_SETTINGS_SET_SECTION: U,
                  GUILD_SETTINGS_ROLES_SORT_UPDATE: function (e) {
                      let { roles: t } = e;
                      if (null != y && t.length !== y.length) return !1;
                      (y = t.map((e) => H(e)).filter(f.Vq)), (S = !0), B();
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_PERMISSIONS: function (e) {
                      let { id: t, flag: n, allow: i } = e,
                          s = H(t);
                      if (null == s) return !1;
                      let { permissions: l } = s;
                      return F(s, { permissions: (l = i ? d.WQ(l, n) : d.TF(l, n)) });
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_PERMISSION_SET: function (e) {
                      let { id: t, permissions: n } = e,
                          i = H(t);
                      return null != i && F(i, { permissions: n });
                  },
                  GUILD_SETTINGS_ROLES_CLEAR_PERMISSIONS: function (e) {
                      let { id: t } = e,
                          n = H(t);
                      return null != n && F(n, { permissions: j.x3 });
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_NAME: function (e) {
                      let { id: t, name: n } = e,
                          i = H(t);
                      return null != i && F(i, { name: n });
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_DESCRIPTION: function (e) {
                      let { id: t, description: n } = e,
                          i = H(t);
                      return null != i && F(i, { description: n });
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_COLOR: function (e) {
                      let { id: t, color: n } = e,
                          i = 0 === n ? null : (0, c.Hl)(n),
                          s = H(t);
                      if (null == s) return !1;
                      let l = M.get(t);
                      return (
                          null != l &&
                          ((l.currentStyle = "solid"),
                          (l.styleColors.solid = { primary_color: n, secondary_color: null, tertiary_color: null }),
                          M.set(t, { ...l }),
                          F(s, {
                              color: n,
                              colorString: i,
                              colors: { primary_color: n, secondary_color: null, tertiary_color: null },
                              colorStrings:
                                  null != i ? { primaryColor: i, secondaryColor: null, tertiaryColor: null } : null,
                          }))
                      );
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_COLORS: function (e) {
                      let { id: t, colors: n, currentStyle: i } = e,
                          s = H(t);
                      if (null == s) return !1;
                      let l = (0, h.K3)(n),
                          r = M.get(t);
                      return (
                          null != r &&
                          ((r.styleColors[i] = n),
                          (r.currentStyle = i),
                          M.set(t, { ...r }),
                          F(s, { color: n.primary_color, colors: n, colorString: l.primaryColor, colorStrings: l }))
                      );
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_SETTINGS: function (e) {
                      let { id: t, hoist: n, mentionable: i } = e,
                          s = H(t);
                      return null != s && F(s, { hoist: n, mentionable: i });
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_ROLE_ICON: function (e) {
                      let { id: t, icon: n, unicodeEmoji: i } = e,
                          s = H(t);
                      return null != s && F(s, { icon: n, unicodeEmoji: i });
                  },
                  GUILD_SETTINGS_ROLE_SELECT: function (e) {
                      let { role: t, searchQuery: n } = e;
                      if (((s = n), null != t)) {
                          if (null != H(t.id)) return void F(t, t);
                          (y = [...y, t]), B();
                      }
                  },
                  GUILD_SETTINGS_ROLES_ROLE_STYLE_UPDATE: function (e) {
                      let { id: t, currentStyle: n } = e,
                          i = H(t);
                      if (null == i) return !1;
                      let s = M.get(t);
                      if (null == s) return !1;
                      M.set(t, { currentStyle: n, styleColors: s.styleColors });
                      let l = s.styleColors[n],
                          r = (0, h.K3)(l);
                      return F(i, {
                          color: l.primary_color ?? void 0,
                          colors: l,
                          colorString: r.primaryColor,
                          colorStrings: r,
                      });
                  },
                  GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS: function (e) {
                      let { roleId: t, roleConnectionConfigurations: n } = e,
                          i = H(t);
                      if (null == i) return !1;
                      let s = L.get(i.id);
                      if (o().isEqual(s, n)) return !1;
                      D.set(i.id, n), L.set(i.id, n), B();
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_ROLE_CONNECTION_CONFIGURATIONS: function (e) {
                      let { roleId: t, roleConnectionConfigurations: n } = e,
                          i = H(t);
                      if (null == i) return !1;
                      (O = !0), G.add(i.id), D.set(i.id, n), B();
                  },
                  GUILD_SETTINGS_CLOSE: function () {
                      (i = null),
                          (R = y = []),
                          L.clear(),
                          C.clear(),
                          M.clear(),
                          D.clear(),
                          (G = new Set()),
                          (v = !1),
                          (S = !1),
                          (O = !1),
                          (I = E.XlH.CLOSED);
                  },
                  GUILD_ROLE_CREATE: V,
                  GUILD_ROLE_UPDATE: V,
                  GUILD_ROLE_DELETE: function (e) {
                      return (
                          G.has(e.roleId) && (G.delete(e.roleId), L.delete(e.roleId), D.delete(e.roleId), (O = !1)),
                          V(e)
                      );
                  },
                  GUILD_SETTINGS_ROLES_SUBMITTING: function () {
                      I = E.XlH.SUBMITTING;
                  },
                  GUILD_SETTINGS_ROLES_SAVE_FAIL: function (e) {
                      let { message: t } = e;
                      (I = E.XlH.OPEN), (l = t);
                  },
                  GUILD_SETTINGS_ROLES_SAVE_SUCCESS: function () {
                      P(!1);
                  },
                  GUILD_SETTINGS_PIN_PERMISSION_MIGRATED: function (e) {
                      let { guildId: t } = e;
                      if (null == i || t !== i.id) return !1;
                      i = (0, g.hZ)(
                          i,
                          "features",
                          new Set([...i.features, E.GuildFeatures.PIN_PERMISSION_MIGRATION_COMPLETE]),
                      );
                  },
                  GUILD_SETTINGS_SLOWMODE_PERMISSION_MIGRATED: function (e) {
                      let { guildId: t } = e;
                      if (null == i || t !== i.id) return !1;
                      i = (0, g.hZ)(
                          i,
                          "features",
                          new Set([...i.features, E.GuildFeatures.BYPASS_SLOWMODE_PERMISSION_MIGRATION_COMPLETE]),
                      );
                  },
              },
    ),
    K = W;
