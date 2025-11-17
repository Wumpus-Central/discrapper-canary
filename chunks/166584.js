n.d(t, { Z: () => k }), n(388685), n(539854), n(642613);
var r = n(54381),
    i = n(473749),
    a = n(772848),
    o = n(924826),
    s = n(91192),
    l = n(442837),
    c = n(28664),
    u = n(481060),
    d = n(749210),
    f = n(434404),
    _ = n(271383),
    p = n(485386),
    h = n(496675),
    m = n(259580),
    g = n(700785),
    E = n(785717),
    b = n(635042),
    y = n(256226),
    O = n(314172),
    v = n(981631),
    I = n(388032),
    T = n(641984);
function S(e, t, n) {
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
function A(e) {
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
                S(e, t, n[t]);
            });
    }
    return e;
}
function C(e, t) {
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
            : C(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function R(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = P(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function P(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let D = 4,
    w = 268,
    x = 2,
    L = (e) => {
        if (null == e) return 0;
        let { width: t } = e.getBoundingClientRect();
        return t > 0 ? t + D : 0;
    };
function M(e) {
    let {
            user: t,
            currentUser: n,
            guild: l,
            guildMember: d,
            roles: f,
            highestRole: _,
            canManageRoles: p,
            onAddRole: h,
            onRemoveRole: b,
            onRoleClick: S,
        } = e,
        C = i.useRef({}),
        P = (e, t) => {
            null != t ? (C.current[e] = t) : delete C.current[e];
        },
        [M, k] = i.useState(f),
        [j, U] = i.useState(w),
        [G, B] = i.useState(!1),
        Z = i.useRef(null),
        F = i.useRef(null),
        V = i.useRef(0);
    i.useLayoutEffect(() => {
        V.current = 0;
    }, [f]),
        i.useLayoutEffect(() => {
            if (G) return;
            let e = L(Z.current),
                t = L(F.current),
                n = [],
                r = w - e - t;
            for (let e = 0; e < x; e++) {
                let t = e === x - 1 ? r : w;
                for (let e = 0, r = n.length; r < f.length; r++) {
                    let i = f[r],
                        a = C.current[i.id];
                    if (null == a) {
                        0 === V.current && n.push(i);
                        continue;
                    }
                    let o = Math.min(a.getBoundingClientRect().width, t);
                    if (e + o > t) break;
                    (e += o + D), n.push(i);
                }
            }
            k(n.length === M.length ? M : n), U(r), V.current++;
        }, [f, M, G]);
    let H = i.useMemo(() => "roles-".concat((0, a.Z)()), []),
        Y = (0, o.ZP)({
            id: H,
            isEnabled: !0,
            scrollToStart: v.Cyb,
            scrollToEnd: v.Cyb,
            wrap: !0,
        }),
        W = f.length,
        K = 0 === W ? I.intl.string(I.t["vR7M+y"]) : I.intl.formatToPlainString(I.t.PCs0oo, { numRoles: W }),
        z = (G ? f : M).map((e, i) => {
            var a;
            return (0, r.jsx)(
                y.Z,
                {
                    role: e,
                    guildId: l.id,
                    style: { maxWidth: G || i !== M.length - 1 ? w : j },
                    disableBorderColor: !0,
                    ref: (t) => P(e.id, t),
                    onRemove: () => b(e),
                    canRemove:
                        (null == (a = e.tags) ? void 0 : a.guild_connections) === null
                            ? t.id === n.id
                            : p && g.r6(l, n.id, _, e),
                    onRoleClick: S,
                },
                e.id,
            );
        }),
        { trackUserProfileAction: q } = (0, E.KZ)(),
        X = i.useCallback(() => {
            B(!0), q({ action: "EXPAND_ROLES" });
        }, [q]),
        Q = i.useCallback(() => {
            B(!1), q({ action: "COLLAPSE_ROLES" });
        }, [q]);
    return (0, r.jsx)(s.bG, {
        navigator: Y,
        children: (0, r.jsx)(s.SJ, {
            children: (e) => {
                var { ref: t } = e,
                    n = R(e, ["ref"]);
                return (0, r.jsxs)(
                    "div",
                    N(
                        A(
                            {
                                className: T.root,
                                "aria-label": K,
                                ref: t,
                            },
                            n,
                        ),
                        {
                            children: [
                                z,
                                M.length < f.length
                                    ? G
                                        ? (0, r.jsx)(c.u, {
                                              asContainer: !0,
                                              text: I.intl.string(I.t.XnXtCt),
                                              children: (0, r.jsx)(u.P3F, {
                                                  onClick: Q,
                                                  className: T.collapseButton,
                                                  children: (0, r.jsx)(m.Z, {
                                                      direction: m.Z.Directions.LEFT,
                                                      width: 12,
                                                      height: 12,
                                                  }),
                                              }),
                                          })
                                        : (0, r.jsx)(c.u, {
                                              asContainer: !0,
                                              text: I.intl.string(I.t.DY6n4q),
                                              children: (0, r.jsx)(u.P3F, {
                                                  innerRef: Z,
                                                  onClick: X,
                                                  className: T.expandButton,
                                                  children: (0, r.jsx)(u.Text, {
                                                      variant: "text-xs/medium",
                                                      children: "+".concat(f.length - M.length),
                                                  }),
                                              }),
                                          })
                                    : null,
                                p && null != d
                                    ? (0, r.jsx)(O.Z, {
                                          buttonRef: F,
                                          guild: l,
                                          guildMember: d,
                                          numRoles: W,
                                          highestRole: _,
                                          onAddRole: h,
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
function k(e) {
    let { user: t, currentUser: n, guild: a, onRoleClick: o } = e,
        { trackUserProfileAction: s } = (0, E.KZ)(),
        c = (0, l.e7)([_.ZP], () => _.ZP.getMember(a.id, t.id)),
        u = null == c ? void 0 : c.roles,
        m = (0, l.Wu)([p.Z], () => p.Z.getManyRoles(a.id, null != u ? u : []).sort(b.Z), [u, a.id]),
        y = g.e9(a, n.id),
        [O] = (0, l.Wu)([h.Z], () => [h.Z.can(v.Plq.MANAGE_ROLES, a), null != a ? h.Z.getGuildVersion(a.id) : null]),
        I = i.useCallback(
            (e) => {
                var n, r;
                s({ action: "REMOVE_ROLE" });
                let i = null != (r = null == u ? void 0 : u.filter((t) => t !== e.id)) ? r : [];
                (null == (n = e.tags) ? void 0 : n.guild_connections) === null
                    ? d.Z.unassignGuildRoleConnection(a.id, e.id)
                    : f.Z.updateMemberRoles(a.id, t.id, i, [], [e.id]);
            },
            [u, a.id, t.id, s],
        ),
        T = i.useCallback(
            (e) => {
                s({ action: "ADD_ROLE" });
                let n = null != u ? u : [];
                n.includes(e) || (n = [...n, e]), f.Z.updateMemberRoles(a.id, t.id, n, [e], []);
            },
            [u, a.id, t.id, s],
        ),
        S = O && null != c;
    return 0 !== m.length || S
        ? (0, r.jsx)(M, {
              user: t,
              currentUser: n,
              guild: a,
              guildMember: c,
              roles: m,
              highestRole: y,
              canManageRoles: O,
              onAddRole: T,
              onRemoveRole: I,
              onRoleClick: o,
          })
        : null;
}
