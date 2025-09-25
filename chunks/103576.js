let r, i, l;
n.d(t, {
    Z: () => q,
    g: () => I,
}),
    n(388685),
    n(953529);
var s,
    a,
    o = n(392711),
    c = n.n(o),
    d = n(149765),
    u = n(866442),
    m = n(442837),
    g = n(570140),
    p = n(311929),
    f = n(561654),
    h = n(606318),
    x = n(402235),
    b = n(485386),
    j = n(990492),
    v = n(823379),
    _ = n(700785),
    O = n(999382),
    y = n(981631),
    C = n(141006);
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
var I = (((a = {}).SOLID = "solid"), (a.GRADIENT = "gradient"), (a.HOLOGRAPHIC = "holographic"), a);
let S = new Set(),
    T = y.QZA.CLOSED,
    P = !1,
    w = !1,
    R = [],
    D = [],
    Z = !1,
    A = new Set(),
    L = new Map(),
    k = new Map(),
    G = new Map();
function M() {
    return null == r || null == R
        ? []
        : j.ZP.calculatePositionDeltas({
              oldOrdering: b.Z.getSortedRoles(r.id),
              newOrdering: R,
              idGetter: (e) => e.id,
              existingPositionGetter: (e) => e.position,
              ascending: !1,
          });
}
function U(e) {
    let { section: t } = e;
    if (null != r || t !== y.pNK.ROLES) return !1;
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
        (T = y.QZA.OPEN),
        (D = [...(R = null != r ? [...b.Z.getSortedRoles(r.id)] : [])]),
        F(null == r ? void 0 : r.id, D),
        (Z = !1),
        e &&
            (k.clear(),
            L.forEach((e, t) => {
                k.set(t, [...e]);
            }));
}
function F(e, t) {
    t.forEach((t) => {
        let n = "solid",
            r = (0, x.zI)(e, t);
        null != t.colors &&
            r &&
            (null != t.colors.tertiary_color
                ? (n = "holographic")
                : null != t.colors.secondary_color && (n = "gradient"));
        let i = {
            solid: {
                primary_color: y.p6O,
                secondary_color: null,
                tertiary_color: null,
            },
            gradient: {
                primary_color: C.Eg.primary_color,
                secondary_color: C.Eg.secondary_color,
                tertiary_color: null,
            },
            holographic: {
                primary_color: C.SK.primary_color,
                secondary_color: C.SK.secondary_color,
                tertiary_color: C.SK.tertiary_color,
            },
        };
        if (null != t.colors) {
            var l, s, a;
            i[n] = {
                primary_color: null != (l = t.colors.primary_color) ? l : y.p6O,
                secondary_color: null != (s = t.colors.secondary_color) ? s : null,
                tertiary_color: null != (a = t.colors.tertiary_color) ? a : null,
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
                V(t),
                ((n = t),
                D.find((e) => {
                    let { id: t } = e;
                    return t === n;
                })),
            ) && (S.delete(t), (e = !0));
        }),
        0 === S.size && (P = !1),
        Z && c().isEqual(L, k) && ((e = !0), (Z = !1)),
        e && Y.emitChange();
}, 500);
function z(e, t) {
    let n = R.indexOf(e);
    if (n < 0) return !1;
    let r = E({}, e, t),
        i = [...R];
    (i[n] = r), (R = i), (P = !0), S.add(r.id), H();
}
function V(e) {
    return R.find((t) => {
        let { id: n } = t;
        return n === e;
    });
}
function W(e) {
    let { guildId: t } = e;
    if (null == (r = O.Z.getProps().guild) || t !== r.id || T === y.QZA.SUBMITTING) return !1;
    let n = [...b.Z.getSortedRoles(r.id)];
    S.forEach((e) => {
        let t = V(e),
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
        (R = [...n]);
}
class K extends (s = m.ZP.Store) {
    initialize() {
        this.waitFor(O.Z, f.Z, b.Z);
    }
    hasChanges() {
        return P || w || Z;
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
        return Z;
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
        return R;
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
        return V(e);
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
        g.Z,
        __OVERLAY__
            ? {}
            : {
                  GUILD_SETTINGS_ROLES_INIT: () => B(),
                  GUILD_SETTINGS_INIT: U,
                  GUILD_SETTINGS_SET_SECTION: U,
                  GUILD_SETTINGS_ROLES_SORT_UPDATE: function (e) {
                      let { roles: t } = e;
                      if (null != R && t.length !== R.length) return !1;
                      (R = t.map((e) => V(e)).filter(v.lm)), (w = !0), H();
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_PERMISSIONS: function (e) {
                      let { id: t, flag: n, allow: r } = e,
                          i = V(t);
                      if (null == i) return !1;
                      let { permissions: l } = i;
                      return z(i, { permissions: (l = r ? d.IH(l, n) : d.Od(l, n)) });
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_PERMISSION_SET: function (e) {
                      let { id: t, permissions: n } = e,
                          r = V(t);
                      return null != r && z(r, { permissions: n });
                  },
                  GUILD_SETTINGS_ROLES_CLEAR_PERMISSIONS: function (e) {
                      let { id: t } = e,
                          n = V(t);
                      return null != n && z(n, { permissions: _.Hn });
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_NAME: function (e) {
                      let { id: t, name: n } = e,
                          r = V(t);
                      return null != r && z(r, { name: n });
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_DESCRIPTION: function (e) {
                      let { id: t, description: n } = e,
                          r = V(t);
                      return null != r && z(r, { description: n });
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_COLOR: function (e) {
                      let { id: t, color: n } = e,
                          r = 0 === n ? null : (0, u.Rf)(n),
                          i = V(t);
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
                          i = V(t);
                      if (null == i) return !1;
                      let l = (0, h.DX)(n),
                          s = G.get(t);
                      return (
                          null != s &&
                          ((s.styleColors[r] = n),
                          (s.currentStyle = r),
                          G.set(t, E({}, s)),
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
                          i = V(t);
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
                          i = V(t);
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
                          if (null != V(t.id)) return void z(t, t);
                          (R = [...R, t]), H();
                      }
                  },
                  GUILD_SETTINGS_ROLES_ROLE_STYLE_UPDATE: function (e) {
                      var t;
                      let { id: n, currentStyle: r } = e,
                          i = V(n);
                      if (null == i) return !1;
                      let l = G.get(n);
                      if (null == l) return !1;
                      G.set(n, {
                          currentStyle: r,
                          styleColors: l.styleColors,
                      });
                      let s = l.styleColors[r],
                          a = (0, h.DX)(s);
                      return z(i, {
                          color: null != (t = s.primary_color) ? t : void 0,
                          colors: s,
                          colorString: a.primaryColor,
                          colorStrings: a,
                      });
                  },
                  GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS: function (e) {
                      let { roleId: t, roleConnectionConfigurations: n } = e,
                          r = V(t);
                      if (null == r) return !1;
                      let i = L.get(r.id);
                      if (c().isEqual(i, n)) return !1;
                      k.set(r.id, n), L.set(r.id, n), H();
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_ROLE_CONNECTION_CONFIGURATIONS: function (e) {
                      let { roleId: t, roleConnectionConfigurations: n } = e,
                          r = V(t);
                      if (null == r) return !1;
                      (Z = !0), A.add(r.id), k.set(r.id, n), H();
                  },
                  GUILD_SETTINGS_CLOSE: function () {
                      (r = null),
                          (D = R = []),
                          L.clear(),
                          S.clear(),
                          G.clear(),
                          k.clear(),
                          (A = new Set()),
                          (P = !1),
                          (w = !1),
                          (Z = !1),
                          (T = y.QZA.CLOSED);
                  },
                  GUILD_ROLE_CREATE: W,
                  GUILD_ROLE_UPDATE: W,
                  GUILD_ROLE_DELETE: function (e) {
                      return (
                          A.has(e.roleId) && (A.delete(e.roleId), L.delete(e.roleId), k.delete(e.roleId), (Z = !1)),
                          W(e)
                      );
                  },
                  GUILD_SETTINGS_ROLES_SUBMITTING: function () {
                      T = y.QZA.SUBMITTING;
                  },
                  GUILD_SETTINGS_ROLES_SAVE_FAIL: function (e) {
                      let { message: t } = e;
                      (T = y.QZA.OPEN), (l = t);
                  },
                  GUILD_SETTINGS_ROLES_SAVE_SUCCESS: function () {
                      B(!1);
                  },
                  GUILD_SETTINGS_PIN_PERMISSION_MIGRATED: function (e) {
                      let { guildId: t } = e;
                      null != r &&
                          t === r.id &&
                          (r = (0, p.t8)(
                              r,
                              "features",
                              r.features.union(new Set([y.oNc.PIN_PERMISSION_MIGRATION_COMPLETE])),
                          ));
                  },
              },
    ),
    q = Y;
