let r, i, l;
n.d(t, {
    Z: () => q,
    g: () => I,
}),
    n(388685),
    n(953529);
var a,
    s,
    o = n(392711),
    c = n.n(o),
    d = n(149765),
    u = n(866442),
    g = n(442837),
    m = n(570140),
    p = n(311929),
    f = n(561654),
    h = n(606318),
    b = n(402235),
    x = n(485386),
    j = n(990492),
    _ = n(823379),
    v = n(700785),
    O = n(999382),
    C = n(981631),
    y = n(141006);
function N(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                N(e, t, n[t]);
            });
    }
    return e;
}
var I = (((s = {}).SOLID = "solid"), (s.GRADIENT = "gradient"), (s.HOLOGRAPHIC = "holographic"), s);
let S = new Set(),
    T = C.QZA.CLOSED,
    P = !1,
    w = !1,
    Z = [],
    R = [],
    D = !1,
    A = new Set(),
    L = new Map(),
    k = new Map(),
    G = new Map();
function M() {
    return null == r || null == Z
        ? []
        : j.ZP.calculatePositionDeltas({
              oldOrdering: x.Z.getSortedRoles(r.id),
              newOrdering: Z,
              idGetter: (e) => e.id,
              existingPositionGetter: (e) => e.position,
              ascending: !1,
          });
}
function U(e) {
    let { section: t } = e;
    if (null != r || t !== C.pNK.ROLES) return !1;
    B();
}
function B() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    (r = O.Z.getProps().guild),
        (P = !1),
        (w = !1),
        (l = void 0),
        S.clear(),
        G.clear(),
        (T = C.QZA.OPEN),
        (R = [...(Z = null != r ? [...x.Z.getSortedRoles(r.id)] : [])]),
        F(null == r ? void 0 : r.id, R),
        (D = !1),
        e &&
            (k.clear(),
            L.forEach((e, t) => {
                k.set(t, [...e]);
            }));
}
function F(e, t) {
    t.forEach((t) => {
        let n = "solid",
            r = (0, b.zI)(e, t);
        null != t.colors &&
            r &&
            (null != t.colors.tertiary_color
                ? (n = "holographic")
                : null != t.colors.secondary_color && (n = "gradient"));
        let i = {
            solid: {
                primary_color: C.p6O,
                secondary_color: null,
                tertiary_color: null,
            },
            gradient: {
                primary_color: y.Eg.primary_color,
                secondary_color: y.Eg.secondary_color,
                tertiary_color: null,
            },
            holographic: {
                primary_color: y.SK.primary_color,
                secondary_color: y.SK.secondary_color,
                tertiary_color: y.SK.tertiary_color,
            },
        };
        if (null != t.colors) {
            var l, a, s;
            i[n] = {
                primary_color: null != (l = t.colors.primary_color) ? l : C.p6O,
                secondary_color: null != (a = t.colors.secondary_color) ? a : null,
                tertiary_color: null != (s = t.colors.tertiary_color) ? s : null,
            };
        }
        G.set(t.id, {
            currentStyle: n,
            styleColors: i,
        });
    });
}
let H = c().debounce(() => {
    let e = !1;
    w && ((w = M().length > 0) || (e = !0)),
        [...S].forEach((t) => {
            var n;
            c().isEqual(
                W(t),
                ((n = t),
                R.find((e) => {
                    let { id: t } = e;
                    return t === n;
                })),
            ) && (S.delete(t), (e = !0));
        }),
        0 === S.size && (P = !1),
        D && c().isEqual(L, k) && ((e = !0), (D = !1)),
        e && Y.emitChange();
}, 500);
function z(e, t) {
    let n = Z.indexOf(e);
    if (n < 0) return !1;
    let r = E({}, e, t),
        i = [...Z];
    (i[n] = r), (Z = i), (P = !0), S.add(r.id), H();
}
function W(e) {
    return Z.find((t) => {
        let { id: n } = t;
        return n === e;
    });
}
function V(e) {
    let { guildId: t } = e;
    if (null == (r = O.Z.getProps().guild) || t !== r.id || T === C.QZA.SUBMITTING) return !1;
    let n = [...x.Z.getSortedRoles(r.id)];
    S.forEach((e) => {
        let t = W(e),
            r = -1;
        null ==
            n.find((t, n) => {
                let { id: i } = t;
                if (i === e) return (r = n), !0;
            }) || null == t
            ? S.delete(e)
            : (n[r] = t);
    }),
        0 === S.size && (P = !1);
    let i = new Map();
    S.forEach((e) => {
        let t = G.get(e);
        null != t && i.set(e, t);
    }),
        G.clear(),
        F(t, n),
        i.forEach((e, t) => {
            G.set(t, e);
        }),
        (w = !1),
        (Z = [...n]);
}
class K extends (a = g.ZP.Store) {
    initialize() {
        this.waitFor(O.Z, f.Z, x.Z);
    }
    hasChanges() {
        return P || w || D;
    }
    getRoleStyleData(e) {
        return G.get(e);
    }
    get errorMessage() {
        return l;
    }
    get hasSortChanges() {
        return w;
    }
    get hasRoleConfigurationChanges() {
        return D;
    }
    get guild() {
        return r;
    }
    get editedRoleIds() {
        return Array.from(S);
    }
    get editedRoleIdsForConfigurations() {
        return A;
    }
    get roles() {
        return Z;
    }
    get formState() {
        return T;
    }
    getSortDeltas() {
        return M();
    }
    showNotice() {
        return this.hasChanges();
    }
    getRole(e) {
        return W(e);
    }
    getPermissionSearchQuery() {
        return i;
    }
    getEditedRoleConnectionConfigurationsMap() {
        return k;
    }
}
N(K, "displayName", "GuildSettingsRolesStore");
let Y = new K(
        m.Z,
        __OVERLAY__
            ? {}
            : {
                  GUILD_SETTINGS_ROLES_INIT: () => B(),
                  GUILD_SETTINGS_INIT: U,
                  GUILD_SETTINGS_SET_SECTION: U,
                  GUILD_SETTINGS_ROLES_SORT_UPDATE: function (e) {
                      let { roles: t } = e;
                      if (null != Z && t.length !== Z.length) return !1;
                      (Z = t.map((e) => W(e)).filter(_.lm)), (w = !0), H();
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_PERMISSIONS: function (e) {
                      let { id: t, flag: n, allow: r } = e,
                          i = W(t);
                      if (null == i) return !1;
                      let { permissions: l } = i;
                      return z(i, { permissions: (l = r ? d.IH(l, n) : d.Od(l, n)) });
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_PERMISSION_SET: function (e) {
                      let { id: t, permissions: n } = e,
                          r = W(t);
                      return null != r && z(r, { permissions: n });
                  },
                  GUILD_SETTINGS_ROLES_CLEAR_PERMISSIONS: function (e) {
                      let { id: t } = e,
                          n = W(t);
                      return null != n && z(n, { permissions: v.Hn });
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_NAME: function (e) {
                      let { id: t, name: n } = e,
                          r = W(t);
                      return null != r && z(r, { name: n });
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_DESCRIPTION: function (e) {
                      let { id: t, description: n } = e,
                          r = W(t);
                      return null != r && z(r, { description: n });
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_COLOR: function (e) {
                      let { id: t, color: n } = e,
                          r = 0 === n ? null : (0, u.Rf)(n),
                          i = W(t);
                      if (null == i) return !1;
                      let l = G.get(t);
                      return (
                          null != l &&
                          ((l.currentStyle = "solid"),
                          (l.styleColors.solid = {
                              primary_color: n,
                              secondary_color: null,
                              tertiary_color: null,
                          }),
                          G.set(t, E({}, l)),
                          z(i, {
                              color: n,
                              colorString: r,
                              colors: {
                                  primary_color: n,
                                  secondary_color: null,
                                  tertiary_color: null,
                              },
                              colorStrings:
                                  null != r
                                      ? {
                                            primaryColor: r,
                                            secondaryColor: null,
                                            tertiaryColor: null,
                                        }
                                      : null,
                          }))
                      );
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_COLORS: function (e) {
                      let { id: t, colors: n, currentStyle: r } = e,
                          i = W(t);
                      if (null == i) return !1;
                      let l = (0, h.DX)(n),
                          a = G.get(t);
                      return (
                          null != a &&
                          ((a.styleColors[r] = n),
                          (a.currentStyle = r),
                          G.set(t, E({}, a)),
                          z(i, {
                              color: n.primary_color,
                              colors: n,
                              colorString: l.primaryColor,
                              colorStrings: l,
                          }))
                      );
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_SETTINGS: function (e) {
                      let { id: t, hoist: n, mentionable: r } = e,
                          i = W(t);
                      return (
                          null != i &&
                          z(i, {
                              hoist: n,
                              mentionable: r,
                          })
                      );
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_ROLE_ICON: function (e) {
                      let { id: t, icon: n, unicodeEmoji: r } = e,
                          i = W(t);
                      return (
                          null != i &&
                          z(i, {
                              icon: n,
                              unicodeEmoji: r,
                          })
                      );
                  },
                  GUILD_SETTINGS_ROLE_SELECT: function (e) {
                      let { role: t, searchQuery: n } = e;
                      if (((i = n), null != t)) {
                          if (null != W(t.id)) return void z(t, t);
                          (Z = [...Z, t]), H();
                      }
                  },
                  GUILD_SETTINGS_ROLES_ROLE_STYLE_UPDATE: function (e) {
                      var t;
                      let { id: n, currentStyle: r } = e,
                          i = W(n);
                      if (null == i) return !1;
                      let l = G.get(n);
                      if (null == l) return !1;
                      G.set(n, {
                          currentStyle: r,
                          styleColors: l.styleColors,
                      });
                      let a = l.styleColors[r],
                          s = (0, h.DX)(a);
                      return z(i, {
                          color: null != (t = a.primary_color) ? t : void 0,
                          colors: a,
                          colorString: s.primaryColor,
                          colorStrings: s,
                      });
                  },
                  GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS: function (e) {
                      let { roleId: t, roleConnectionConfigurations: n } = e,
                          r = W(t);
                      if (null == r) return !1;
                      let i = L.get(r.id);
                      if (c().isEqual(i, n)) return !1;
                      k.set(r.id, n), L.set(r.id, n), H();
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_ROLE_CONNECTION_CONFIGURATIONS: function (e) {
                      let { roleId: t, roleConnectionConfigurations: n } = e,
                          r = W(t);
                      if (null == r) return !1;
                      (D = !0), A.add(r.id), k.set(r.id, n), H();
                  },
                  GUILD_SETTINGS_CLOSE: function () {
                      (r = null),
                          (R = Z = []),
                          L.clear(),
                          S.clear(),
                          G.clear(),
                          k.clear(),
                          (A = new Set()),
                          (P = !1),
                          (w = !1),
                          (D = !1),
                          (T = C.QZA.CLOSED);
                  },
                  GUILD_ROLE_CREATE: V,
                  GUILD_ROLE_UPDATE: V,
                  GUILD_ROLE_DELETE: function (e) {
                      return (
                          A.has(e.roleId) && (A.delete(e.roleId), L.delete(e.roleId), k.delete(e.roleId), (D = !1)),
                          V(e)
                      );
                  },
                  GUILD_SETTINGS_ROLES_SUBMITTING: function () {
                      T = C.QZA.SUBMITTING;
                  },
                  GUILD_SETTINGS_ROLES_SAVE_FAIL: function (e) {
                      let { message: t } = e;
                      (T = C.QZA.OPEN), (l = t);
                  },
                  GUILD_SETTINGS_ROLES_SAVE_SUCCESS: function () {
                      B(!1);
                  },
                  GUILD_SETTINGS_PIN_PERMISSION_MIGRATED: function (e) {
                      let { guildId: t } = e;
                      if (null == r || t !== r.id) return !1;
                      r = (0, p.t8)(
                          r,
                          "features",
                          new Set([...r.features, C.GuildFeatures.PIN_PERMISSION_MIGRATION_COMPLETE]),
                      );
                  },
                  GUILD_SETTINGS_SLOWMODE_PERMISSION_MIGRATED: function (e) {
                      let { guildId: t } = e;
                      if (null == r || t !== r.id) return !1;
                      r = (0, p.t8)(
                          r,
                          "features",
                          new Set([...r.features, C.GuildFeatures.BYPASS_SLOWMODE_PERMISSION_MIGRATION_COMPLETE]),
                      );
                  },
              },
    ),
    q = Y;
