let i, l, s;
n.d(t, { A: () => K, y: () => C }), n(321073);
var r,
    a = n(735438),
    o = n.n(a),
    d = n(136722),
    c = n(317097),
    u = n(17928),
    m = n(228366),
    g = n(867051),
    x = n(145643),
    h = n(176201),
    E = n(676608),
    j = n(317525),
    N = n(111613),
    f = n(403362),
    p = n(488926),
    A = n(913758),
    I = n(652215),
    S = n(178758),
    C = (((r = {}).SOLID = "solid"), (r.GRADIENT = "gradient"), (r.HOLOGRAPHIC = "holographic"), r);
let v = new Set(),
    _ = I.XlH.CLOSED,
    T = !1,
    b = !1,
    y = [],
    R = [],
    L = !1,
    G = new Set(),
    D = new Map(),
    O = new Map(),
    M = new Map();
function k() {
    return null == i || null == y
        ? []
        : N.Ay.calculatePositionDeltas({
              oldOrdering: j.A.getSortedRoles(i.id),
              newOrdering: y,
              idGetter: (e) => e.id,
              existingPositionGetter: (e) => e.position,
              ascending: !1,
          });
}
function U(e) {
    let { section: t } = e;
    if (null != i || t !== I.BEX.ROLES) return !1;
    P();
}
function P() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    (i = A.A.getProps().guild),
        (T = !1),
        (b = !1),
        (s = void 0),
        v.clear(),
        M.clear(),
        (_ = I.XlH.OPEN),
        (R = [...(y = null != i ? [...j.A.getSortedRoles(i.id)] : [])]),
        w(i?.id, R),
        (L = !1),
        e &&
            (O.clear(),
            D.forEach((e, t) => {
                O.set(t, [...e]);
            }));
}
function w(e, t) {
    t.forEach((t) => {
        let n = "solid",
            i = (0, E.aF)(e, t);
        null != t.colors &&
            i &&
            (null != t.colors.tertiary_color
                ? (n = "holographic")
                : null != t.colors.secondary_color && (n = "gradient"));
        let l = {
            solid: { primary_color: I.TGz, secondary_color: null, tertiary_color: null },
            gradient: {
                primary_color: S.lO.primary_color,
                secondary_color: S.lO.secondary_color,
                tertiary_color: null,
            },
            holographic: {
                primary_color: S.jl.primary_color,
                secondary_color: S.jl.secondary_color,
                tertiary_color: S.jl.tertiary_color,
            },
        };
        null != t.colors &&
            (l[n] = {
                primary_color: t.colors.primary_color ?? I.TGz,
                secondary_color: t.colors.secondary_color ?? null,
                tertiary_color: t.colors.tertiary_color ?? null,
            }),
            M.set(t.id, { currentStyle: n, styleColors: l });
    });
}
let F = o().debounce(() => {
    let e = !1;
    b && ((b = k().length > 0) || (e = !0)),
        [...v].forEach((t) => {
            var n;
            o().isEqual(
                V(t),
                ((n = t),
                R.find((e) => {
                    let { id: t } = e;
                    return t === n;
                })),
            ) && (v.delete(t), (e = !0));
        }),
        0 === v.size && (T = !1),
        L && o().isEqual(D, O) && ((e = !0), (L = !1)),
        e && W.emitChange();
}, 500);
function B(e, t) {
    let n = t.map((t) => e.get(t)).filter(f.Vq),
        i = new Set(t);
    e.forEach((e, t) => {
        i.has(t) || n.push(e);
    });
    let l = n.length;
    return n.map((e, t) => ({ ...e, position: l - 1 - t }));
}
function H(e, t) {
    let n = y.indexOf(e);
    if (n < 0) return !1;
    let i = { ...e, ...t },
        l = [...y];
    (l[n] = i), (y = l), (T = !0), v.add(i.id), F();
}
function V(e) {
    return y.find((t) => {
        let { id: n } = t;
        return n === e;
    });
}
function z(e) {
    let { guildId: t } = e;
    if (null == (i = A.A.getProps().guild) || t !== i.id || _ === I.XlH.SUBMITTING) return !1;
    let n = [...j.A.getSortedRoles(i.id)];
    v.forEach((e) => {
        let t = V(e),
            i = -1;
        null ==
            n.find((t, n) => {
                let { id: l } = t;
                if (l === e) return (i = n), !0;
            }) || null == t
            ? v.delete(e)
            : (n[i] = t);
    }),
        0 === v.size && (T = !1);
    let l = new Map();
    v.forEach((e) => {
        let t = M.get(e);
        null != t && l.set(e, t);
    }),
        M.clear(),
        w(t, n),
        l.forEach((e, t) => {
            M.set(t, e);
        }),
        (b = !1),
        (y = [...n]);
}
class Y extends u.Ay.Store {
    static displayName = "GuildSettingsRolesStore";
    initialize() {
        this.waitFor(A.A, x.A, j.A);
    }
    hasChanges() {
        return T || b || L;
    }
    isRoleEdited(e) {
        return v.has(e) || G.has(e);
    }
    getRoleStyleData(e) {
        return M.get(e);
    }
    get errorMessage() {
        return s;
    }
    get hasSortChanges() {
        return b;
    }
    get hasRoleConfigurationChanges() {
        return L;
    }
    get guild() {
        return i;
    }
    get editedRoleIds() {
        return Array.from(v);
    }
    get editedRoleIdsForConfigurations() {
        return G;
    }
    get roles() {
        return y;
    }
    get formState() {
        return _;
    }
    getSortDeltas() {
        return k();
    }
    showNotice() {
        return this.hasChanges();
    }
    getRole(e) {
        return V(e);
    }
    getPermissionSearchQuery() {
        return l;
    }
    getEditedRoleConnectionConfigurationsMap() {
        return O;
    }
}
let W = new Y(
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
                      (y = t.map((e) => V(e)).filter(f.Vq)), (b = !0), F();
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_PERMISSIONS: function (e) {
                      let { id: t, flag: n, allow: i } = e,
                          l = V(t);
                      if (null == l) return !1;
                      let { permissions: s } = l;
                      return H(l, { permissions: (s = i ? d.WQ(s, n) : d.TF(s, n)) });
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_PERMISSION_SET: function (e) {
                      let { id: t, permissions: n } = e,
                          i = V(t);
                      return null != i && H(i, { permissions: n });
                  },
                  GUILD_SETTINGS_ROLES_CLEAR_PERMISSIONS: function (e) {
                      let { id: t } = e,
                          n = V(t);
                      return null != n && H(n, { permissions: p.x3 });
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_NAME: function (e) {
                      let { id: t, name: n } = e,
                          i = V(t);
                      return null != i && H(i, { name: n });
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_DESCRIPTION: function (e) {
                      let { id: t, description: n } = e,
                          i = V(t);
                      return null != i && H(i, { description: n });
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_COLOR: function (e) {
                      let { id: t, color: n } = e,
                          i = 0 === n ? null : (0, c.Hl)(n),
                          l = V(t);
                      if (null == l) return !1;
                      let s = M.get(t);
                      return (
                          null != s &&
                          ((s.currentStyle = "solid"),
                          (s.styleColors.solid = { primary_color: n, secondary_color: null, tertiary_color: null }),
                          M.set(t, { ...s }),
                          H(l, {
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
                          l = V(t);
                      if (null == l) return !1;
                      let s = (0, h.K3)(n),
                          r = M.get(t);
                      return (
                          null != r &&
                          ((r.styleColors[i] = n),
                          (r.currentStyle = i),
                          M.set(t, { ...r }),
                          H(l, { color: n.primary_color, colors: n, colorString: s.primaryColor, colorStrings: s }))
                      );
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_SETTINGS: function (e) {
                      let { id: t, hoist: n, mentionable: i } = e,
                          l = V(t);
                      return null != l && H(l, { hoist: n, mentionable: i });
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_ROLE_ICON: function (e) {
                      let { id: t, icon: n, unicodeEmoji: i } = e,
                          l = V(t);
                      return null != l && H(l, { icon: n, unicodeEmoji: i });
                  },
                  GUILD_SETTINGS_ROLE_SELECT: function (e) {
                      let { role: t, searchQuery: n } = e;
                      if (((l = n), null != t)) {
                          if (null != V(t.id)) return void H(t, t);
                          (y = [...y, t]), F();
                      }
                  },
                  GUILD_SETTINGS_ROLES_DUPLICATE_SUCCESS: function (e) {
                      let { role: t, roles: n } = e,
                          l = new Map(y.map((e) => [e.id, e]));
                      l.set(t.id, t), (y = B(l, n));
                      let s = new Map(R.map((e) => [e.id, e]));
                      s.set(t.id, t), (R = B(s, n)), w(i?.id, [t]);
                  },
                  GUILD_SETTINGS_ROLES_ROLE_STYLE_UPDATE: function (e) {
                      let { id: t, currentStyle: n } = e,
                          i = V(t);
                      if (null == i) return !1;
                      let l = M.get(t);
                      if (null == l) return !1;
                      M.set(t, { currentStyle: n, styleColors: l.styleColors });
                      let s = l.styleColors[n],
                          r = (0, h.K3)(s);
                      return H(i, {
                          color: s.primary_color ?? void 0,
                          colors: s,
                          colorString: r.primaryColor,
                          colorStrings: r,
                      });
                  },
                  GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS: function (e) {
                      let { roleId: t, roleConnectionConfigurations: n } = e,
                          i = V(t);
                      if (null == i) return !1;
                      let l = D.get(i.id);
                      if (o().isEqual(l, n)) return !1;
                      O.set(i.id, n), D.set(i.id, n), F();
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_ROLE_CONNECTION_CONFIGURATIONS: function (e) {
                      let { roleId: t, roleConnectionConfigurations: n } = e,
                          i = V(t);
                      if (null == i) return !1;
                      (L = !0), G.add(i.id), O.set(i.id, n), F();
                  },
                  GUILD_SETTINGS_CLOSE: function () {
                      (i = null),
                          (R = y = []),
                          D.clear(),
                          v.clear(),
                          M.clear(),
                          O.clear(),
                          (G = new Set()),
                          (T = !1),
                          (b = !1),
                          (L = !1),
                          (_ = I.XlH.CLOSED);
                  },
                  GUILD_ROLE_CREATE: z,
                  GUILD_ROLE_UPDATE: z,
                  GUILD_ROLE_DELETE: function (e) {
                      return (
                          G.has(e.roleId) && (G.delete(e.roleId), D.delete(e.roleId), O.delete(e.roleId), (L = !1)),
                          z(e)
                      );
                  },
                  GUILD_SETTINGS_ROLES_SUBMITTING: function () {
                      _ = I.XlH.SUBMITTING;
                  },
                  GUILD_SETTINGS_ROLES_SAVE_FAIL: function (e) {
                      let { message: t } = e;
                      (_ = I.XlH.OPEN), (s = t);
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
                          new Set([...i.features, I.GuildFeatures.PIN_PERMISSION_MIGRATION_COMPLETE]),
                      );
                  },
                  GUILD_SETTINGS_SLOWMODE_PERMISSION_MIGRATED: function (e) {
                      let { guildId: t } = e;
                      if (null == i || t !== i.id) return !1;
                      i = (0, g.hZ)(
                          i,
                          "features",
                          new Set([...i.features, I.GuildFeatures.BYPASS_SLOWMODE_PERMISSION_MIGRATION_COMPLETE]),
                      );
                  },
              },
    ),
    K = W;
