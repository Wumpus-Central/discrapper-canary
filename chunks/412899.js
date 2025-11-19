n.d(t, {
    UB: () => z,
    ZP: () => $,
}),
    n(388685),
    n(642613),
    n(415506);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(512722),
    l = n.n(s),
    c = n(772848),
    u = n(91192),
    d = n(924826),
    f = n(866442),
    _ = n(442837),
    p = n(692547),
    h = n(481060),
    m = n(239091),
    g = n(749210),
    E = n(112724),
    b = n(607070),
    y = n(134433),
    O = n(600164),
    v = n(313201),
    I = n(518738),
    T = n(434404),
    S = n(884902),
    A = n(48950),
    C = n(635042),
    N = n(608798),
    R = n(345162),
    P = n(271383),
    D = n(485386),
    w = n(496675),
    L = n(594174),
    x = n(700785),
    M = n(981631),
    k = n(388032),
    j = n(85703);
function U(e, t, n) {
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
function G(e) {
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
                U(e, t, n[t]);
            });
    }
    return e;
}
function B(e, t) {
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
function Z(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : B(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function F(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = V(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function V(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let H = 30,
    Y = 4,
    W = () => Promise.resolve();
function K(e) {
    let { userRoleIds: t, position: n } = e,
        i = F(e, ["userRoleIds", "position"]),
        a = (0, v.Dt)();
    return (0, r.jsxs)(h.VqE, {
        className: o()(j.overflowRolesPopout, {
            [j.popoutBottom]: "bottom" === n,
            [j.popoutTop]: "top" === n,
        }),
        "aria-labelledby": a,
        children: [
            (0, r.jsx)("div", {
                className: j.overflowRolesPopoutArrowWrapper,
                children: (0, r.jsx)("div", { className: j.overflowRolesPopoutArrow }),
            }),
            (0, r.jsxs)(O.Z, {
                className: j.overflowRolesPopoutHeader,
                align: O.Z.Align.CENTER,
                children: [
                    (0, r.jsx)(h.U65, {
                        size: "xs",
                        color: p.Z.unsafe_rawColors.PRIMARY_400.css,
                        className: j.overflowRolesPopoutHeaderIcon,
                    }),
                    (0, r.jsx)("div", {
                        className: j.overflowRolesPopoutHeaderText,
                        id: a,
                        children: k.intl.format(k.t.PCs0oo, { numRoles: t.length }),
                    }),
                ],
            }),
            (0, r.jsx)(
                Q,
                Z(G({}, i), {
                    wrap: !0,
                    userRoleIds: t,
                }),
            ),
        ],
    });
}
let z = i.forwardRef(function (e, t) {
    var a, s, l;
    let c,
        { canRemove: d, className: g, role: E, onRemove: O, guildId: v, disableBorderColor: T, onMouseDown: C } = e,
        N = (0, u.JA)(E.id),
        { tabIndex: R } = N,
        P = F(N, ["tabIndex"]),
        D = (0, I.p9)({
            roleId: E.id,
            size: 16,
            guildId: v,
        }),
        w = (0, _.e7)([b.Z], () => b.Z.roleStyle),
        L = (0, S._f)(v, E, E.colorStrings),
        x = (null == (a = E.tags) ? void 0 : a.guild_connections) === null,
        M = i.useCallback(
            (e) => {
                (0, m.jW)(e, async () => {
                    let { default: e } = await n.e("5396").then(n.bind(n, 731646));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            Z(G({}, t), {
                                id: E.id,
                                label: k.intl.string(k.t.sMsaLg),
                            }),
                        );
                });
            },
            [E.id],
        ),
        U = (0, h.dQu)(p.Z.unsafe_rawColors.PRIMARY_300).hsl(),
        B = null != (s = E.colorString) ? s : U,
        V = null != (l = (0, f.wK)(B, 0.6)) ? l : void 0,
        H = p.Z.unsafe_rawColors.WHITE_500.css,
        Y = (0, f._i)(B);
    null != Y && 0.3 > (0, f.Bd)(Y) && (H = p.Z.unsafe_rawColors.PRIMARY_630.css),
        (c = x
            ? (0, r.jsx)(y.Z, {
                  className: j.roleFlowerStar,
                  iconClassName: d ? j.roleVerifiedIcon : void 0,
                  color: B,
                  size: 14,
              })
            : "dot" === w
              ? (0, r.jsx)(h.FhE, {
                    className: j.roleDot,
                    color: B,
                    colors: L,
                    background: !1,
                    tooltip: !1,
                })
              : (0, r.jsx)(h.xko, {
                    color: B,
                    colors: L,
                }));
    let W = i.useMemo(() => {
        var t;
        return G({ borderColor: T ? void 0 : V }, null != (t = e.style) ? t : {});
    }, [V, T, e.style]);
    return (0, r.jsx)(h.tEY, {
        children: (0, r.jsxs)(
            "div",
            Z(
                G(
                    {
                        ref: t,
                        className: o()(j.role, g),
                        style: W,
                        onContextMenu: M,
                        onMouseDown: C,
                        "aria-label": E.name,
                        tabIndex: R,
                    },
                    P,
                ),
                {
                    children: [
                        (0, r.jsxs)(h.P3F, {
                            className: o()(d && j.roleRemoveButtonCanRemove, j.roleRemoveButton),
                            onClick: d ? O : void 0,
                            tabIndex: d ? R : -1,
                            focusProps: { focusClassName: j.roleRemoveIconFocused },
                            "aria-hidden": !d,
                            "aria-label": k.intl.formatToPlainString(k.t.QrxwhY, { roleName: E.name }),
                            children: [
                                c,
                                d
                                    ? (0, r.jsx)(h.Dio, {
                                          size: "md",
                                          color: H,
                                          className: j.roleRemoveIcon,
                                          "aria-hidden": !0,
                                      })
                                    : null,
                            ],
                        }),
                        null != D ? (0, r.jsx)(A.Z, Z(G({ className: j.roleIcon }, D), { enableTooltip: !1 })) : null,
                        (0, r.jsx)("div", {
                            "aria-hidden": !0,
                            className: j.roleName,
                            children: (0, r.jsx)(h.Text, {
                                variant: "text-xs/medium",
                                className: j.roleNameOverflow,
                                children: E.name,
                            }),
                        }),
                    ],
                },
            ),
        ),
    });
});
function q(e) {
    let { user: t, numRolesHidden: n, roleClassName: a } = e,
        s = (0, u.JA)("overflow-more-roles-".concat(t.id)),
        l = i.useRef(null);
    return (0, r.jsx)(h.yRy, {
        targetElementRef: l,
        renderPopout: (t) => {
            let { position: n } = t;
            return (0, r.jsx)(K, Z(G({}, e), { position: null != n ? n : "top" }));
        },
        position: "top",
        align: "center",
        children: (e) =>
            (0, r.jsx)(h.tEY, {
                children: (0, r.jsx)(
                    "button",
                    Z(G(Z(G({ ref: l }, e), { className: o()(j.overflowButton, a) }), s), { children: "+".concat(n) }),
                ),
            }),
    });
}
function X(e) {
    let t = i.useRef(null),
        { guild: n, user: a, handleAddRole: s, roleClassName: l, addButtonClassName: c, addButtonIconClassName: d } = e,
        f = (0, u.JA)("overflow-add-roles-".concat(a.id)),
        p = (0, _.e7)([b.Z], () => b.Z.roleStyle),
        m = w.Z.getHighestRole(n),
        g = P.ZP.getMember(n.id, a.id),
        E = (e) =>
            !(0, R.fI)(e) && !e.managed && w.Z.isRoleHigher(n, m, e) && (null == g || -1 === g.roles.indexOf(e.id));
    return (0, r.jsx)(h.yRy, {
        targetElementRef: t,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(N.Z, {
                guild: n,
                roleStyle: p,
                roleFilter: E,
                onSelect: s,
                onClose: t,
            });
        },
        position: "bottom",
        align: "center",
        children: (e) =>
            (0, r.jsx)(h.tEY, {
                children: (0, r.jsx)(
                    "button",
                    Z(
                        G(
                            Z(G({ ref: t }, e), {
                                className: o()(j.addButton, l, c),
                                "aria-label": k.intl.string(k.t.e3Wlyw),
                                type: "button",
                            }),
                            f,
                        ),
                        {
                            children: (0, r.jsx)(h.qJs, {
                                size: "md",
                                color: "currentColor",
                                className: o()(j.addButtonIcon, d),
                                "aria-hidden": !0,
                            }),
                        },
                    ),
                ),
            }),
    });
}
function Q(e) {
    let t,
        {
            user: n,
            guild: a,
            userRoleIds: s,
            wrap: f = !0,
            width: p,
            className: h,
            readOnly: m,
            roleClassName: E,
            disableBorderColor: b,
        } = e,
        y = i.useRef({});
    function O(e, t) {
        null != t ? (y.current[e] = t) : delete y.current[e];
    }
    let v = i.useCallback(
            (e) => {
                var t;
                let r = s.filter((t) => t !== e.id);
                (null == (t = e.tags) ? void 0 : t.guild_connections) === null
                    ? g.Z.unassignGuildRoleConnection(a.id, e.id)
                    : T.Z.updateMemberRoles(a.id, n.id, r, [], [e.id]);
            },
            [s, a.id, n.id],
        ),
        I = i.useCallback(
            (e) => {
                let t = s;
                t.includes(e) || (t = [...t, e]), T.Z.updateMemberRoles(a.id, n.id, t, [e], []);
            },
            [s, a.id, n.id],
        ),
        [S, A] = i.useState(null),
        N = (0, _.Wu)([D.Z], () => D.Z.getManyRoles(a.id, s).sort(C.Z)),
        R = i.useMemo(() => (null != S ? N.slice(0, S) : N), [N, S]),
        P = s.length - R.length;
    i.useLayoutEffect(() => {
        if (f) return;
        if ("number" != typeof p) throw Error("Unexpected null width");
        let e = 0,
            t = 0,
            n = p - H - Y;
        for (let r = 0; r < R.length; r++) {
            let i = R[r],
                a = y.current[i.id];
            if (null != a) {
                if ((t += a.offsetWidth + Y) > n) break;
                e++;
            }
        }
        A((t) => (e < R.length ? e : t));
    }, [f, p, R]);
    let U = L.default.getCurrentUser();
    l()(null != U, "MemberRolesList: currentUser cannot be undefined");
    let B = !m && w.Z.can(M.Plq.MANAGE_ROLES, a),
        V = x.e9(a, U.id),
        K = i.useMemo(() => "roles-".concat((0, c.Z)()), []),
        Q = (0, d.ZP)({
            id: K,
            isEnabled: !0,
            scrollToStart: W,
            scrollToEnd: W,
            wrap: !0,
        }),
        J = R.map((e) => {
            var t;
            return (0, r.jsx)(
                z,
                {
                    className: E,
                    role: e,
                    canRemove:
                        (null == (t = e.tags) ? void 0 : t.guild_connections) === null
                            ? n.id === U.id
                            : B && x.r6(a, U.id, V, e),
                    onRemove: () => v(e),
                    ref: (t) => O(e.id, t),
                    guildId: a.id,
                    disableBorderColor: b,
                },
                e.id,
            );
        });
    return (
        null != S && 0 !== P
            ? (t = (0, r.jsx)(q, Z(G({}, e), { numRolesHidden: P })))
            : B && (t = (0, r.jsx)(X, Z(G({}, e), { handleAddRole: I }))),
        (0, r.jsx)(u.bG, {
            navigator: Q,
            children: (0, r.jsx)(u.SJ, {
                children: (e) => {
                    var { ref: n } = e,
                        i = F(e, ["ref"]);
                    return (0, r.jsxs)(
                        "div",
                        Z(
                            G(
                                {
                                    className: o()(j.root, h),
                                    "aria-label": k.intl.formatToPlainString(k.t.PCs0oo, { numRoles: s.length }),
                                    ref: n,
                                },
                                i,
                            ),
                            {
                                children: [J, t],
                            },
                        ),
                    );
                },
            }),
        })
    );
}
let J = (0, E.Z)(Q);
function $(e) {
    return (
        (0, _.e7)([w.Z], () => {
            var t;
            return w.Z.getGuildVersion(null == (t = e.guild) ? void 0 : t.id);
        }),
        !1 === e.wrap ? (0, r.jsx)(J, G({}, e)) : (0, r.jsx)(Q, G({}, e))
    );
}
