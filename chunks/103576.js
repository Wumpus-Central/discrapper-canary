let r, i, l;
n.d(t, {
    Z: () => q,
    g: () => S,
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
    f = n(570140),
    m = n(311929),
    b = n(561654),
    p = n(606318),
    h = n(402235),
    x = n(485386),
    j = n(990492),
    v = n(823379),
    O = n(700785),
    C = n(999382),
    y = n(981631),
    N = n(141006);
function E(e, t, n) {
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
function I(e) {
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
                E(e, t, n[t]);
            });
    }
    return e;
}
var S = (((s = {}).SOLID = "solid"), (s.GRADIENT = "gradient"), (s.HOLOGRAPHIC = "holographic"), s);
let _ = new Set(),
    T = y.QZA.CLOSED,
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
    if (null != r || t !== y.pNK.ROLES) return !1;
    B();
}
function B() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    (r = C.Z.getProps().guild),
        (P = !1),
        (w = !1),
        (l = void 0),
        _.clear(),
        G.clear(),
        (T = y.QZA.OPEN),
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
            r = (0, h.zI)(e, t);
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
                primary_color: N.Eg.primary_color,
                secondary_color: N.Eg.secondary_color,
                tertiary_color: null,
            },
            holographic: {
                primary_color: N.SK.primary_color,
                secondary_color: N.SK.secondary_color,
                tertiary_color: N.SK.tertiary_color,
            },
        };
        if (null != t.colors) {
            var l, a, s;
            i[n] = {
                primary_color: null != (l = t.colors.primary_color) ? l : y.p6O,
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
        [..._].forEach((t) => {
            var n;
            c().isEqual(
                z(t),
                ((n = t),
                R.find((e) => {
                    let { id: t } = e;
                    return t === n;
                })),
            ) && (_.delete(t), (e = !0));
        }),
        0 === _.size && (P = !1),
        D && c().isEqual(L, k) && ((e = !0), (D = !1)),
        e && Y.emitChange();
}, 500);
function W(e, t) {
    let n = Z.indexOf(e);
    if (n < 0) return !1;
    let r = I({}, e, t),
        i = [...Z];
    (i[n] = r), (Z = i), (P = !0), _.add(r.id), H();
}
function z(e) {
    return Z.find((t) => {
        let { id: n } = t;
        return n === e;
    });
}
function V(e) {
    let { guildId: t } = e;
    if (null == (r = C.Z.getProps().guild) || t !== r.id || T === y.QZA.SUBMITTING) return !1;
    let n = [...x.Z.getSortedRoles(r.id)];
    _.forEach((e) => {
        let t = z(e),
            r = -1;
        null ==
            n.find((t, n) => {
                let { id: i } = t;
                if (i === e) return (r = n), !0;
            }) || null == t
            ? _.delete(e)
            : (n[r] = t);
    }),
        0 === _.size && (P = !1);
    let i = new Map();
    _.forEach((e) => {
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
        this.waitFor(C.Z, b.Z, x.Z);
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
        return Array.from(_);
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
        return z(e);
    }
    getPermissionSearchQuery() {
        return i;
    }
    getEditedRoleConnectionConfigurationsMap() {
        return k;
    }
}
E(K, "displayName", "GuildSettingsRolesStore");
let Y = new K(
        f.Z,
        __OVERLAY__
            ? {}
            : {
                  GUILD_SETTINGS_ROLES_INIT: () => B(),
                  GUILD_SETTINGS_INIT: U,
                  GUILD_SETTINGS_SET_SECTION: U,
                  GUILD_SETTINGS_ROLES_SORT_UPDATE: function (e) {
                      let { roles: t } = e;
                      if (null != Z && t.length !== Z.length) return !1;
                      (Z = t.map((e) => z(e)).filter(v.lm)), (w = !0), H();
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_PERMISSIONS: function (e) {
                      let { id: t, flag: n, allow: r } = e,
                          i = z(t);
                      if (null == i) return !1;
                      let { permissions: l } = i;
                      return W(i, { permissions: (l = r ? d.IH(l, n) : d.Od(l, n)) });
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_PERMISSION_SET: function (e) {
                      let { id: t, permissions: n } = e,
                          r = z(t);
                      return null != r && W(r, { permissions: n });
                  },
                  GUILD_SETTINGS_ROLES_CLEAR_PERMISSIONS: function (e) {
                      let { id: t } = e,
                          n = z(t);
                      return null != n && W(n, { permissions: O.Hn });
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_NAME: function (e) {
                      let { id: t, name: n } = e,
                          r = z(t);
                      return null != r && W(r, { name: n });
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_DESCRIPTION: function (e) {
                      let { id: t, description: n } = e,
                          r = z(t);
                      return null != r && W(r, { description: n });
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_COLOR: function (e) {
                      let { id: t, color: n } = e,
                          r = 0 === n ? null : (0, u.Rf)(n),
                          i = z(t);
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
                          G.set(t, I({}, l)),
                          W(i, {
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
                          i = z(t);
                      if (null == i) return !1;
                      let l = (0, p.DX)(n),
                          a = G.get(t);
                      return (
                          null != a &&
                          ((a.styleColors[r] = n),
                          (a.currentStyle = r),
                          G.set(t, I({}, a)),
                          W(i, {
                              color: n.primary_color,
                              colors: n,
                              colorString: l.primaryColor,
                              colorStrings: l,
                          }))
                      );
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_SETTINGS: function (e) {
                      let { id: t, hoist: n, mentionable: r } = e,
                          i = z(t);
                      return (
                          null != i &&
                          W(i, {
                              hoist: n,
                              mentionable: r,
                          })
                      );
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_ROLE_ICON: function (e) {
                      let { id: t, icon: n, unicodeEmoji: r } = e,
                          i = z(t);
                      return (
                          null != i &&
                          W(i, {
                              icon: n,
                              unicodeEmoji: r,
                          })
                      );
                  },
                  GUILD_SETTINGS_ROLE_SELECT: function (e) {
                      let { role: t, searchQuery: n } = e;
                      if (((i = n), null != t)) {
                          if (null != z(t.id)) return void W(t, t);
                          (Z = [...Z, t]), H();
                      }
                  },
                  GUILD_SETTINGS_ROLES_ROLE_STYLE_UPDATE: function (e) {
                      var t;
                      let { id: n, currentStyle: r } = e,
                          i = z(n);
                      if (null == i) return !1;
                      let l = G.get(n);
                      if (null == l) return !1;
                      G.set(n, {
                          currentStyle: r,
                          styleColors: l.styleColors,
                      });
                      let a = l.styleColors[r],
                          s = (0, p.DX)(a);
                      return W(i, {
                          color: null != (t = a.primary_color) ? t : void 0,
                          colors: a,
                          colorString: s.primaryColor,
                          colorStrings: s,
                      });
                  },
                  GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS: function (e) {
                      let { roleId: t, roleConnectionConfigurations: n } = e,
                          r = z(t);
                      if (null == r) return !1;
                      let i = L.get(r.id);
                      if (c().isEqual(i, n)) return !1;
                      k.set(r.id, n), L.set(r.id, n), H();
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_ROLE_CONNECTION_CONFIGURATIONS: function (e) {
                      let { roleId: t, roleConnectionConfigurations: n } = e,
                          r = z(t);
                      if (null == r) return !1;
                      (D = !0), A.add(r.id), k.set(r.id, n), H();
                  },
                  GUILD_SETTINGS_CLOSE: function () {
                      (r = null),
                          (R = Z = []),
                          L.clear(),
                          _.clear(),
                          G.clear(),
                          k.clear(),
                          (A = new Set()),
                          (P = !1),
                          (w = !1),
                          (D = !1),
                          (T = y.QZA.CLOSED);
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
                      if (null == r || t !== r.id) return !1;
                      r = (0, m.t8)(
                          r,
                          "features",
                          new Set([...r.features, y.GuildFeatures.PIN_PERMISSION_MIGRATION_COMPLETE]),
                      );
                  },
                  GUILD_SETTINGS_SLOWMODE_PERMISSION_MIGRATED: function (e) {
                      let { guildId: t } = e;
                      if (null == r || t !== r.id) return !1;
                      r = (0, m.t8)(
                          r,
                          "features",
                          new Set([...r.features, y.GuildFeatures.BYPASS_SLOWMODE_PERMISSION_MIGRATION_COMPLETE]),
                      );
                  },
              },
    ),
    q = Y;
