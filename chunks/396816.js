let i, l, s;
n.d(t, { A: () => Y, y: () => I });
var a,
    r = n(735438),
    o = n.n(r),
    d = n(136722),
    c = n(317097),
    u = n(17928),
    m = n(228366),
    g = n(867051),
    h = n(145643),
    x = n(176201),
    _ = n(676608),
    p = n(317525),
    E = n(111613),
    f = n(403362),
    j = n(488926),
    N = n(555337),
    A = n(652215),
    C = n(178758),
    I = (((a = {}).SOLID = "solid"), (a.GRADIENT = "gradient"), (a.HOLOGRAPHIC = "holographic"), a);
let b = new Set(),
    S = A.XlH.CLOSED,
    v = !1,
    T = !1,
    y = [],
    R = [],
    L = !1,
    D = new Set(),
    O = new Map(),
    G = new Map(),
    M = new Map();
function k() {
    return null == i || null == y
        ? []
        : E.Ay.calculatePositionDeltas({
              oldOrdering: p.A.getSortedRoles(i.id),
              newOrdering: y,
              idGetter: (e) => e.id,
              existingPositionGetter: (e) => e.position,
              ascending: !1,
          });
}
function U(e) {
    let { section: t } = e;
    if (null != i || t !== A.BEX.ROLES) return !1;
    w();
}
function w() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    (i = N.A.getProps().guild),
        (v = !1),
        (T = !1),
        (s = void 0),
        b.clear(),
        M.clear(),
        (S = A.XlH.OPEN),
        (R = [...(y = null != i ? [...p.A.getSortedRoles(i.id)] : [])]),
        P(i?.id, R),
        (L = !1),
        e &&
            (G.clear(),
            O.forEach((e, t) => {
                G.set(t, [...e]);
            }));
}
function P(e, t) {
    t.forEach((t) => {
        let n = "solid",
            i = (0, _.aF)(e, t);
        null != t.colors &&
            i &&
            (null != t.colors.tertiary_color
                ? (n = "holographic")
                : null != t.colors.secondary_color && (n = "gradient"));
        let l = {
            solid: { primary_color: A.TGz, secondary_color: null, tertiary_color: null },
            gradient: {
                primary_color: C.lO.primary_color,
                secondary_color: C.lO.secondary_color,
                tertiary_color: null,
            },
            holographic: {
                primary_color: C.jl.primary_color,
                secondary_color: C.jl.secondary_color,
                tertiary_color: C.jl.tertiary_color,
            },
        };
        null != t.colors &&
            (l[n] = {
                primary_color: t.colors.primary_color ?? A.TGz,
                secondary_color: t.colors.secondary_color ?? null,
                tertiary_color: t.colors.tertiary_color ?? null,
            }),
            M.set(t.id, { currentStyle: n, styleColors: l });
    });
}
let B = o().debounce(() => {
    let e = !1;
    T && ((T = k().length > 0) || (e = !0)),
        [...b].forEach((t) => {
            var n;
            o().isEqual(
                H(t),
                ((n = t),
                R.find((e) => {
                    let { id: t } = e;
                    return t === n;
                })),
            ) && (b.delete(t), (e = !0));
        }),
        0 === b.size && (v = !1),
        L && o().isEqual(O, G) && ((e = !0), (L = !1)),
        e && W.emitChange();
}, 500);
function F(e, t) {
    let n = y.indexOf(e);
    if (n < 0) return !1;
    let i = { ...e, ...t },
        l = [...y];
    (l[n] = i), (y = l), (v = !0), b.add(i.id), B();
}
function H(e) {
    return y.find((t) => {
        let { id: n } = t;
        return n === e;
    });
}
function V(e) {
    let { guildId: t } = e;
    if (null == (i = N.A.getProps().guild) || t !== i.id || S === A.XlH.SUBMITTING) return !1;
    let n = [...p.A.getSortedRoles(i.id)];
    b.forEach((e) => {
        let t = H(e),
            i = -1;
        null ==
            n.find((t, n) => {
                let { id: l } = t;
                if (l === e) return (i = n), !0;
            }) || null == t
            ? b.delete(e)
            : (n[i] = t);
    }),
        0 === b.size && (v = !1);
    let l = new Map();
    b.forEach((e) => {
        let t = M.get(e);
        null != t && l.set(e, t);
    }),
        M.clear(),
        P(t, n),
        l.forEach((e, t) => {
            M.set(t, e);
        }),
        (T = !1),
        (y = [...n]);
}
class z extends u.Ay.Store {
    static displayName = "GuildSettingsRolesStore";
    initialize() {
        this.waitFor(N.A, h.A, p.A);
    }
    hasChanges() {
        return v || T || L;
    }
    getRoleStyleData(e) {
        return M.get(e);
    }
    get errorMessage() {
        return s;
    }
    get hasSortChanges() {
        return T;
    }
    get hasRoleConfigurationChanges() {
        return L;
    }
    get guild() {
        return i;
    }
    get editedRoleIds() {
        return Array.from(b);
    }
    get editedRoleIdsForConfigurations() {
        return D;
    }
    get roles() {
        return y;
    }
    get formState() {
        return S;
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
        return l;
    }
    getEditedRoleConnectionConfigurationsMap() {
        return G;
    }
}
let W = new z(
        m.h,
        __OVERLAY__
            ? {}
            : {
                  GUILD_SETTINGS_ROLES_INIT: () => w(),
                  GUILD_SETTINGS_INIT: U,
                  GUILD_SETTINGS_SET_SECTION: U,
                  GUILD_SETTINGS_ROLES_SORT_UPDATE: function (e) {
                      let { roles: t } = e;
                      if (null != y && t.length !== y.length) return !1;
                      (y = t.map((e) => H(e)).filter(f.Vq)), (T = !0), B();
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_PERMISSIONS: function (e) {
                      let { id: t, flag: n, allow: i } = e,
                          l = H(t);
                      if (null == l) return !1;
                      let { permissions: s } = l;
                      return F(l, { permissions: (s = i ? d.WQ(s, n) : d.TF(s, n)) });
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
                          l = H(t);
                      if (null == l) return !1;
                      let s = M.get(t);
                      return (
                          null != s &&
                          ((s.currentStyle = "solid"),
                          (s.styleColors.solid = { primary_color: n, secondary_color: null, tertiary_color: null }),
                          M.set(t, { ...s }),
                          F(l, {
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
                          l = H(t);
                      if (null == l) return !1;
                      let s = (0, x.K3)(n),
                          a = M.get(t);
                      return (
                          null != a &&
                          ((a.styleColors[i] = n),
                          (a.currentStyle = i),
                          M.set(t, { ...a }),
                          F(l, { color: n.primary_color, colors: n, colorString: s.primaryColor, colorStrings: s }))
                      );
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_SETTINGS: function (e) {
                      let { id: t, hoist: n, mentionable: i } = e,
                          l = H(t);
                      return null != l && F(l, { hoist: n, mentionable: i });
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_ROLE_ICON: function (e) {
                      let { id: t, icon: n, unicodeEmoji: i } = e,
                          l = H(t);
                      return null != l && F(l, { icon: n, unicodeEmoji: i });
                  },
                  GUILD_SETTINGS_ROLE_SELECT: function (e) {
                      let { role: t, searchQuery: n } = e;
                      if (((l = n), null != t)) {
                          if (null != H(t.id)) return void F(t, t);
                          (y = [...y, t]), B();
                      }
                  },
                  GUILD_SETTINGS_ROLES_ROLE_STYLE_UPDATE: function (e) {
                      let { id: t, currentStyle: n } = e,
                          i = H(t);
                      if (null == i) return !1;
                      let l = M.get(t);
                      if (null == l) return !1;
                      M.set(t, { currentStyle: n, styleColors: l.styleColors });
                      let s = l.styleColors[n],
                          a = (0, x.K3)(s);
                      return F(i, {
                          color: s.primary_color ?? void 0,
                          colors: s,
                          colorString: a.primaryColor,
                          colorStrings: a,
                      });
                  },
                  GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS: function (e) {
                      let { roleId: t, roleConnectionConfigurations: n } = e,
                          i = H(t);
                      if (null == i) return !1;
                      let l = O.get(i.id);
                      if (o().isEqual(l, n)) return !1;
                      G.set(i.id, n), O.set(i.id, n), B();
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_ROLE_CONNECTION_CONFIGURATIONS: function (e) {
                      let { roleId: t, roleConnectionConfigurations: n } = e,
                          i = H(t);
                      if (null == i) return !1;
                      (L = !0), D.add(i.id), G.set(i.id, n), B();
                  },
                  GUILD_SETTINGS_CLOSE: function () {
                      (i = null),
                          (R = y = []),
                          O.clear(),
                          b.clear(),
                          M.clear(),
                          G.clear(),
                          (D = new Set()),
                          (v = !1),
                          (T = !1),
                          (L = !1),
                          (S = A.XlH.CLOSED);
                  },
                  GUILD_ROLE_CREATE: V,
                  GUILD_ROLE_UPDATE: V,
                  GUILD_ROLE_DELETE: function (e) {
                      return (
                          D.has(e.roleId) && (D.delete(e.roleId), O.delete(e.roleId), G.delete(e.roleId), (L = !1)),
                          V(e)
                      );
                  },
                  GUILD_SETTINGS_ROLES_SUBMITTING: function () {
                      S = A.XlH.SUBMITTING;
                  },
                  GUILD_SETTINGS_ROLES_SAVE_FAIL: function (e) {
                      let { message: t } = e;
                      (S = A.XlH.OPEN), (s = t);
                  },
                  GUILD_SETTINGS_ROLES_SAVE_SUCCESS: function () {
                      w(!1);
                  },
                  GUILD_SETTINGS_PIN_PERMISSION_MIGRATED: function (e) {
                      let { guildId: t } = e;
                      if (null == i || t !== i.id) return !1;
                      i = (0, g.hZ)(
                          i,
                          "features",
                          new Set([...i.features, A.GuildFeatures.PIN_PERMISSION_MIGRATION_COMPLETE]),
                      );
                  },
                  GUILD_SETTINGS_SLOWMODE_PERMISSION_MIGRATED: function (e) {
                      let { guildId: t } = e;
                      if (null == i || t !== i.id) return !1;
                      i = (0, g.hZ)(
                          i,
                          "features",
                          new Set([...i.features, A.GuildFeatures.BYPASS_SLOWMODE_PERMISSION_MIGRATION_COMPLETE]),
                      );
                  },
              },
    ),
    Y = W;
