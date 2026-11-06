let i, l, s;
n(321073);
var r,
    a = n(435558),
    o = n.n(a),
    d = n(136722),
    c = n(317097),
    u = n(855986),
    m = n(73153),
    g = n(867051),
    h = n(145643),
    x = n(176201),
    E = n(676608),
    j = n(34457),
    f = n(317525),
    N = n(111613),
    p = n(403362),
    A = n(488926),
    I = n(555337),
    b = n(927573),
    C = n(652215),
    S = n(178758),
    _ = (((r = {}).SOLID = "solid"), (r.GRADIENT = "gradient"), (r.HOLOGRAPHIC = "holographic"), r);
let v = {
        [b.T$.DISPLAY]: [
            "name",
            "hoist",
            "mentionable",
            "color",
            "colors",
            "colorString",
            "colorStrings",
            "icon",
            "unicodeEmoji",
        ],
        [b.T$.PERMISSIONS]: ["permissions"],
        [b.T$.MEMBERS]: [],
        [b.T$.VERIFICATIONS]: [],
    },
    T = new Set(),
    y = C.XlH.CLOSED,
    R = !1,
    G = !1,
    L = [],
    D = [],
    O = !1,
    M = new Set(),
    k = new Map(),
    P = new Map(),
    U = new Map();
function w(e) {
    (T.delete(e), 0 === T.size && (R = !1));
}
function F(e) {
    (M.delete(e), 0 === M.size && (O = !1));
}
function B() {
    return null == i || null == L
        ? []
        : N.Ay.calculatePositionDeltas({
              oldOrdering: f.A.getSortedRoles(i.id),
              newOrdering: L,
              idGetter: (e) => e.id,
              existingPositionGetter: (e) => e.position,
              ascending: !1,
          });
}
function H(e) {
    let { section: t } = e;
    if (null != i || t !== C.BEX.ROLES) return !1;
    V();
}
function V() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    ((i = I.A.getProps().guild),
        (R = !1),
        (G = !1),
        (s = void 0),
        T.clear(),
        U.clear(),
        (y = C.XlH.OPEN),
        (D = [...(L = null != i ? [...f.A.getSortedRoles(i.id)] : [])]),
        z(i?.id, D),
        (O = !1),
        e &&
            (P.clear(),
            k.forEach((e, t) => {
                P.set(t, [...e]);
            })));
}
function z(e, t) {
    t.forEach((t) => {
        let n = "solid",
            i = (0, E.aF)(e, t);
        null != t.colors &&
            i &&
            (null != t.colors.tertiary_color
                ? (n = "holographic")
                : null != t.colors.secondary_color && (n = "gradient"));
        let l = {
            solid: { primary_color: C.TGz, secondary_color: null, tertiary_color: null },
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
        (null != t.colors &&
            (l[n] = {
                primary_color: t.colors.primary_color ?? C.TGz,
                secondary_color: t.colors.secondary_color ?? null,
                tertiary_color: t.colors.tertiary_color ?? null,
            }),
            U.set(t.id, { currentStyle: n, styleColors: l }));
    });
}
function Y(e, t) {
    let n = v[t];
    if (null == n || 0 === n.length) return null;
    let i = q(e),
        l = J(e);
    return null == i || null == l ? null : { fields: n, role: i, original: l };
}
let W = o().debounce(() => {
    let e = !1;
    (G && ((G = B().length > 0) || (e = !0)),
        [...T].forEach((t) => {
            (0, j.nk)(q(t), J(t)) && (w(t), (e = !0));
        }),
        [...M].forEach((t) => {
            o().isEqual(P.get(t), k.get(t)) && (F(t), (e = !0));
        }),
        e && $.emitChange());
}, 500);
function K(e, t) {
    let n = t.map((t) => e.get(t)).filter(p.Vq),
        i = new Set(t);
    e.forEach((e, t) => {
        i.has(t) || n.push(e);
    });
    let l = n.length;
    return n.map((e, t) => ({ ...e, position: l - 1 - t }));
}
function X(e, t) {
    let n = L.indexOf(e);
    if (n < 0) return !1;
    let i = { ...e, ...t },
        l = [...L];
    ((l[n] = i), (L = l), (R = !0), T.add(i.id), W());
}
function q(e) {
    return L.find((t) => {
        let { id: n } = t;
        return n === e;
    });
}
function J(e) {
    return D.find((t) => {
        let { id: n } = t;
        return n === e;
    });
}
function Z(e) {
    let { guildId: t } = e;
    if (null == (i = I.A.getProps().guild) || t !== i.id || y === C.XlH.SUBMITTING) return !1;
    let n = [...f.A.getSortedRoles(i.id)];
    T.forEach((e) => {
        let t = q(e),
            i = -1;
        null ==
            n.find((t, n) => {
                let { id: l } = t;
                if (l === e) return ((i = n), !0);
            }) || null == t
            ? w(e)
            : (n[i] = t);
    });
    let l = new Map();
    (T.forEach((e) => {
        let t = U.get(e);
        null != t && l.set(e, t);
    }),
        U.clear(),
        z(t, n),
        l.forEach((e, t) => {
            U.set(t, e);
        }),
        (G = !1),
        (L = [...n]));
}
class Q extends u.Ay.Store {
    static displayName = "GuildSettingsRolesStore";
    initialize() {
        this.waitFor(I.A, h.A, f.A);
    }
    hasChanges() {
        return R || G || O;
    }
    hasSectionChanges(e, t) {
        if (t === b.T$.VERIFICATIONS) return M.has(e);
        let n = Y(e, t);
        return null != n && !(0, j.nk)(o().pick(n.role, n.fields), o().pick(n.original, n.fields));
    }
    getRoleStyleData(e) {
        return U.get(e);
    }
    get errorMessage() {
        return s;
    }
    get hasSortChanges() {
        return G;
    }
    get hasRoleConfigurationChanges() {
        return O;
    }
    get guild() {
        return i;
    }
    get editedRoleIds() {
        return Array.from(T);
    }
    get editedRoleIdsForConfigurations() {
        return M;
    }
    get roles() {
        return L;
    }
    get formState() {
        return y;
    }
    getSortDeltas() {
        return B();
    }
    showNotice() {
        return this.hasChanges();
    }
    getRole(e) {
        return q(e);
    }
    getPermissionSearchQuery() {
        return l;
    }
    getEditedRoleConnectionConfigurationsMap() {
        return P;
    }
}
let $ = new Q(
    m.h,
    __OVERLAY__
        ? {}
        : {
              GUILD_SETTINGS_ROLES_INIT: () => V(),
              GUILD_SETTINGS_INIT: H,
              GUILD_SETTINGS_SET_SECTION: H,
              GUILD_SETTINGS_ROLES_SORT_UPDATE: function (e) {
                  let { roles: t } = e;
                  if (null != L && t.length !== L.length) return !1;
                  ((L = t.map((e) => q(e)).filter(p.Vq)), (G = !0), W());
              },
              GUILD_SETTINGS_ROLES_UPDATE_PERMISSIONS: function (e) {
                  let { id: t, flag: n, allow: i } = e,
                      l = q(t);
                  if (null == l) return !1;
                  let { permissions: s } = l;
                  return X(l, { permissions: (s = i ? d.WQ(s, n) : d.TF(s, n)) });
              },
              GUILD_SETTINGS_ROLES_UPDATE_PERMISSION_SET: function (e) {
                  let { id: t, permissions: n } = e,
                      i = q(t);
                  return null != i && X(i, { permissions: n });
              },
              GUILD_SETTINGS_ROLES_CLEAR_PERMISSIONS: function (e) {
                  let { id: t } = e,
                      n = q(t);
                  return null != n && X(n, { permissions: A.x3 });
              },
              GUILD_SETTINGS_ROLES_UPDATE_NAME: function (e) {
                  let { id: t, name: n } = e,
                      i = q(t);
                  return null != i && X(i, { name: n });
              },
              GUILD_SETTINGS_ROLES_UPDATE_DESCRIPTION: function (e) {
                  let { id: t, description: n } = e,
                      i = q(t);
                  return null != i && X(i, { description: n });
              },
              GUILD_SETTINGS_ROLES_UPDATE_COLOR: function (e) {
                  let { id: t, color: n } = e,
                      i = 0 === n ? null : (0, c.Hl)(n),
                      l = q(t);
                  if (null == l) return !1;
                  let s = U.get(t);
                  return (
                      null != s &&
                      ((s.currentStyle = "solid"),
                      (s.styleColors.solid = { primary_color: n, secondary_color: null, tertiary_color: null }),
                      U.set(t, { ...s }),
                      X(l, {
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
                      l = q(t);
                  if (null == l) return !1;
                  let s = (0, x.K3)(n),
                      r = U.get(t);
                  return (
                      null != r &&
                      ((r.styleColors[i] = n),
                      (r.currentStyle = i),
                      U.set(t, { ...r }),
                      X(l, { color: n.primary_color, colors: n, colorString: s.primaryColor, colorStrings: s }))
                  );
              },
              GUILD_SETTINGS_ROLES_UPDATE_SETTINGS: function (e) {
                  let { id: t, hoist: n, mentionable: i } = e,
                      l = q(t);
                  return null != l && X(l, { hoist: n, mentionable: i });
              },
              GUILD_SETTINGS_ROLES_UPDATE_ROLE_ICON: function (e) {
                  let { id: t, icon: n, unicodeEmoji: i } = e,
                      l = q(t);
                  return null != l && X(l, { icon: n, unicodeEmoji: i });
              },
              GUILD_SETTINGS_ROLES_DISCARD_SECTION_CHANGES: function (e) {
                  let { id: t, section: n } = e,
                      l = Y(t, n);
                  if (null == l) return !1;
                  let { fields: s, role: r, original: a } = l;
                  (X(r, o().pick(a, s)), (s.includes("color") || s.includes("colors")) && z(i?.id, [a]));
              },
              GUILD_SETTINGS_ROLES_DISCARD_CONNECTIONS_CHANGES: function (e) {
                  let { id: t } = e,
                      n = k.get(t);
                  (null == n ? P.delete(t) : P.set(t, [...n]), F(t));
              },
              GUILD_SETTINGS_ROLES_COMMIT_SECTION_CHANGES: function (e) {
                  let { id: t, section: n } = e,
                      i = Y(t, n);
                  if (null == i) return !1;
                  let { fields: l, role: s, original: r } = i,
                      a = { ...r, ...o().pick(s, l) };
                  ((D = D.map((e) => (e.id === t ? a : e))), (0, j.nk)(s, a) && w(t));
              },
              GUILD_SETTINGS_ROLE_SELECT: function (e) {
                  let { role: t, searchQuery: n } = e;
                  if (((l = n), null != t)) {
                      if (null != q(t.id)) return void X(t, t);
                      ((L = [...L, t]), W());
                  }
              },
              GUILD_SETTINGS_ROLES_DUPLICATE_SUCCESS: function (e) {
                  let { role: t, roles: n } = e,
                      l = new Map(L.map((e) => [e.id, e]));
                  (l.set(t.id, t), (L = K(l, n)));
                  let s = new Map(D.map((e) => [e.id, e]));
                  (s.set(t.id, t), (D = K(s, n)), z(i?.id, [t]));
              },
              GUILD_SETTINGS_ROLES_ROLE_STYLE_UPDATE: function (e) {
                  let { id: t, currentStyle: n } = e,
                      i = q(t);
                  if (null == i) return !1;
                  let l = U.get(t);
                  if (null == l) return !1;
                  U.set(t, { currentStyle: n, styleColors: l.styleColors });
                  let s = l.styleColors[n],
                      r = (0, x.K3)(s);
                  return X(i, {
                      color: s.primary_color ?? void 0,
                      colors: s,
                      colorString: r.primaryColor,
                      colorStrings: r,
                  });
              },
              GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS: function (e) {
                  let { roleId: t, roleConnectionConfigurations: n } = e,
                      i = q(t);
                  if (null == i) return !1;
                  let l = k.get(i.id);
                  if (o().isEqual(l, n)) return !1;
                  (P.set(i.id, n), k.set(i.id, n), F(i.id), W());
              },
              GUILD_SETTINGS_ROLES_UPDATE_ROLE_CONNECTION_CONFIGURATIONS: function (e) {
                  let { roleId: t, roleConnectionConfigurations: n } = e,
                      i = q(t);
                  if (null == i) return !1;
                  ((O = !0), M.add(i.id), P.set(i.id, n), W());
              },
              GUILD_SETTINGS_CLOSE: function () {
                  ((i = null),
                      (D = L = []),
                      k.clear(),
                      T.clear(),
                      U.clear(),
                      P.clear(),
                      (M = new Set()),
                      (R = !1),
                      (G = !1),
                      (O = !1),
                      (y = C.XlH.CLOSED));
              },
              GUILD_ROLE_CREATE: Z,
              GUILD_ROLE_UPDATE: Z,
              GUILD_ROLE_DELETE: function (e) {
                  return (M.has(e.roleId) && (k.delete(e.roleId), P.delete(e.roleId), F(e.roleId)), Z(e));
              },
              GUILD_SETTINGS_ROLES_SUBMITTING: function () {
                  y = C.XlH.SUBMITTING;
              },
              GUILD_SETTINGS_ROLES_SAVE_FAIL: function (e) {
                  let { message: t } = e;
                  ((y = C.XlH.OPEN), (s = t));
              },
              GUILD_SETTINGS_ROLES_SAVE_SUCCESS: function () {
                  V(!1);
              },
              GUILD_SETTINGS_PIN_PERMISSION_MIGRATED: function (e) {
                  let { guildId: t } = e;
                  if (null == i || t !== i.id) return !1;
                  i = (0, g.hZ)(
                      i,
                      "features",
                      new Set([...i.features, C.GuildFeatures.PIN_PERMISSION_MIGRATION_COMPLETE]),
                  );
              },
              GUILD_SETTINGS_SLOWMODE_PERMISSION_MIGRATED: function (e) {
                  let { guildId: t } = e;
                  if (null == i || t !== i.id) return !1;
                  i = (0, g.hZ)(
                      i,
                      "features",
                      new Set([...i.features, C.GuildFeatures.BYPASS_SLOWMODE_PERMISSION_MIGRATION_COMPLETE]),
                  );
              },
          },
);
n.d(t, {}, { A: $, y: _ });
