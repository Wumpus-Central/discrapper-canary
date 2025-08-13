n.d(t, { Z: () => M }), n(388685), n(539854), n(642613);
var r = n(255367),
    i = n(73800),
    o = n(772848),
    a = n(924826),
    s = n(91192),
    l = n(442837),
    c = n(481060),
    u = n(749210),
    d = n(434404),
    f = n(271383),
    _ = n(485386),
    p = n(496675),
    h = n(259580),
    m = n(700785),
    g = n(785717),
    E = n(635042),
    b = n(256226),
    y = n(314172),
    O = n(981631),
    v = n(388032),
    I = n(186798);
function T(e, t, n) {
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
function S(e) {
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
                T(e, t, n[t]);
            });
    }
    return e;
}
function A(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function N(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : A(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function C(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = R(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++)
            (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function R(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let P = 4,
    w = 268,
    D = 2,
    L = (e) => {
        if (null == e) return 0;
        let { width: t } = e.getBoundingClientRect();
        return t > 0 ? t + P : 0;
    };
function x(e) {
    let {
            user: t,
            currentUser: n,
            guild: l,
            guildMember: u,
            roles: d,
            highestRole: f,
            canManageRoles: _,
            onAddRole: p,
            onRemoveRole: E,
        } = e,
        T = i.useRef({}),
        A = (e, t) => {
            null != t ? (T.current[e] = t) : delete T.current[e];
        },
        [R, x] = i.useState(d),
        [M, j] = i.useState(w),
        [k, U] = i.useState(!1),
        G = i.useRef(null),
        B = i.useRef(null),
        Z = i.useRef(0);
    i.useLayoutEffect(() => {
        Z.current = 0;
    }, [d]),
        i.useLayoutEffect(() => {
            if (k) return;
            let e = L(G.current),
                t = L(B.current),
                n = [],
                r = w - e - t;
            for (let e = 0; e < D; e++) {
                let t = e === D - 1 ? r : w;
                for (let e = 0, r = n.length; r < d.length; r++) {
                    let i = d[r],
                        o = T.current[i.id];
                    if (null == o) {
                        0 === Z.current && n.push(i);
                        continue;
                    }
                    let a = Math.min(o.getBoundingClientRect().width, t);
                    if (e + a > t) break;
                    (e += a + P), n.push(i);
                }
            }
            x(n.length === R.length ? R : n), j(r), Z.current++;
        }, [d, R, k]);
    let F = i.useMemo(() => "roles-".concat((0, o.Z)()), []),
        V = (0, a.ZP)({
            id: F,
            isEnabled: !0,
            scrollToStart: O.Cyb,
            scrollToEnd: O.Cyb,
            wrap: !0,
        }),
        H = d.length,
        Y = 0 === H ? v.intl.string(v.t["vR7M+/"]) : v.intl.formatToPlainString(v.t.PCs0oq, { numRoles: H }),
        W = (k ? d : R).map((e, i) => {
            var o;
            return (0, r.jsx)(
                b.Z,
                {
                    role: e,
                    guildId: l.id,
                    style: { maxWidth: k || i !== R.length - 1 ? w : M },
                    disableBorderColor: !0,
                    ref: (t) => A(e.id, t),
                    onRemove: () => E(e),
                    canRemove:
                        (null == (o = e.tags) ? void 0 : o.guild_connections) === null
                            ? t.id === n.id
                            : _ && m.r6(l, n.id, f, e),
                },
                e.id,
            );
        }),
        { trackUserProfileAction: K } = (0, g.KZ)(),
        z = i.useCallback(() => {
            U(!0), K({ action: "EXPAND_ROLES" });
        }, [K]),
        q = i.useCallback(() => {
            U(!1), K({ action: "COLLAPSE_ROLES" });
        }, [K]);
    return (0, r.jsx)(s.bG, {
        navigator: V,
        children: (0, r.jsx)(s.SJ, {
            children: (e) => {
                var { ref: t } = e,
                    n = C(e, ["ref"]);
                return (0, r.jsxs)(
                    "div",
                    N(
                        S(
                            {
                                className: I.root,
                                "aria-label": Y,
                                ref: t,
                            },
                            n,
                        ),
                        {
                            children: [
                                W,
                                R.length < d.length
                                    ? k
                                        ? (0, r.jsx)(c.DY3, {
                                              text: v.intl.string(v.t.XnXtCg),
                                              children: (0, r.jsx)(c.P3F, {
                                                  onClick: q,
                                                  className: I.collapseButton,
                                                  children: (0, r.jsx)(h.Z, {
                                                      direction: h.Z.Directions.LEFT,
                                                      width: 12,
                                                      height: 12,
                                                  }),
                                              }),
                                          })
                                        : (0, r.jsx)(c.DY3, {
                                              text: v.intl.string(v.t.DY6n4u),
                                              children: (0, r.jsx)(c.P3F, {
                                                  innerRef: G,
                                                  onClick: z,
                                                  className: I.expandButton,
                                                  children: (0, r.jsx)(c.Text, {
                                                      variant: "text-xs/medium",
                                                      children: "+".concat(d.length - R.length),
                                                  }),
                                              }),
                                          })
                                    : null,
                                _ && null != u
                                    ? (0, r.jsx)(y.Z, {
                                          buttonRef: B,
                                          guild: l,
                                          guildMember: u,
                                          numRoles: H,
                                          highestRole: f,
                                          onAddRole: p,
                                      })
                                    : null,
                            ],
                        },
                    ),
                );
            },
        }),
    });
}
function M(e) {
    let { user: t, currentUser: n, guild: o } = e,
        { trackUserProfileAction: a } = (0, g.KZ)(),
        s = (0, l.e7)([f.ZP], () => f.ZP.getMember(o.id, t.id)),
        c = null == s ? void 0 : s.roles,
        h = (0, l.Wu)([_.Z], () => _.Z.getManyRoles(o.id, null != c ? c : []).sort(E.Z), [c, o.id]),
        b = m.e9(o, n.id),
        [y] = (0, l.Wu)([p.Z], () => [p.Z.can(O.Plq.MANAGE_ROLES, o), null != o ? p.Z.getGuildVersion(o.id) : null]),
        v = i.useCallback(
            (e) => {
                var n, r;
                a({ action: "REMOVE_ROLE" });
                let i = null != (r = null == c ? void 0 : c.filter((t) => t !== e.id)) ? r : [];
                (null == (n = e.tags) ? void 0 : n.guild_connections) === null
                    ? u.Z.unassignGuildRoleConnection(o.id, e.id)
                    : d.Z.updateMemberRoles(o.id, t.id, i, [], [e.id]);
            },
            [c, o.id, t.id, a],
        ),
        I = i.useCallback(
            (e) => {
                a({ action: "ADD_ROLE" });
                let n = null != c ? c : [];
                n.includes(e) || (n = [...n, e]), d.Z.updateMemberRoles(o.id, t.id, n, [e], []);
            },
            [c, o.id, t.id, a],
        ),
        T = y && null != s;
    return 0 !== h.length || T
        ? (0, r.jsx)(x, {
              user: t,
              currentUser: n,
              guild: o,
              guildMember: s,
              roles: h,
              highestRole: b,
              canManageRoles: y,
              onAddRole: I,
              onRemoveRole: v,
          })
        : null;
}
