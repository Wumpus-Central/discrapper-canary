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
    p = n(442837),
    _ = n(692547),
    m = n(481060),
    h = n(239091),
    g = n(749210),
    E = n(112724),
    b = n(607070),
    y = n(134433),
    O = n(600164),
    v = n(313201),
    S = n(518738),
    I = n(434404),
    T = n(884902),
    C = n(48950),
    A = n(635042),
    N = n(608798),
    P = n(345162),
    R = n(271383),
    w = n(485386),
    D = n(496675),
    x = n(594174),
    L = n(700785),
    j = n(981631),
    M = n(388032),
    k = n(975614);
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
function Z(e, t) {
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
function F(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : Z(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function B(e, t) {
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
        i = B(e, ["userRoleIds", "position"]),
        a = (0, v.Dt)();
    return (0, r.jsxs)(m.VqE, {
        className: o()(k.overflowRolesPopout, {
            [k.popoutBottom]: "bottom" === n,
            [k.popoutTop]: "top" === n,
        }),
        "aria-labelledby": a,
        children: [
            (0, r.jsx)("div", {
                className: k.overflowRolesPopoutArrowWrapper,
                children: (0, r.jsx)("div", { className: k.overflowRolesPopoutArrow }),
            }),
            (0, r.jsxs)(O.Z, {
                className: k.overflowRolesPopoutHeader,
                align: O.Z.Align.CENTER,
                children: [
                    (0, r.jsx)(m.U65, {
                        size: "xs",
                        color: _.Z.unsafe_rawColors.PRIMARY_400.css,
                        className: k.overflowRolesPopoutHeaderIcon,
                    }),
                    (0, r.jsx)("div", {
                        className: k.overflowRolesPopoutHeaderText,
                        id: a,
                        children: M.intl.format(M.t.PCs0oo, { numRoles: t.length }),
                    }),
                ],
            }),
            (0, r.jsx)(
                X,
                F(G({}, i), {
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
        {
            canRemove: d,
            className: g,
            role: E,
            onRemove: O,
            guildId: v,
            disableBorderColor: I,
            onMouseDown: A,
            guild: N,
        } = e,
        P = (0, u.JA)(E.id),
        { tabIndex: R } = P,
        w = B(P, ["tabIndex"]),
        D = (0, S.p9)({
            roleId: E.id,
            size: 16,
            guildId: v,
            role: E,
            guild: N,
        }),
        x = (0, p.e7)([b.Z], () => b.Z.roleStyle),
        L = (0, T._f)(v, E, E.colorStrings),
        j = (null == (a = E.tags) ? void 0 : a.guild_connections) === null,
        U = i.useCallback(
            (e) => {
                (0, h.jW)(e, async () => {
                    let { default: e } = await n.e("5396").then(n.bind(n, 731646));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            F(G({}, t), {
                                id: E.id,
                                label: M.intl.string(M.t.sMsaLg),
                            }),
                        );
                });
            },
            [E.id],
        ),
        Z = (0, m.dQu)(_.Z.unsafe_rawColors.PRIMARY_300).hsl(),
        V = null != (s = E.colorString) ? s : Z,
        H = null != (l = (0, f.wK)(V, 0.6)) ? l : void 0,
        Y = _.Z.unsafe_rawColors.WHITE_500.css,
        W = (0, f._i)(V);
    null != W && 0.3 > (0, f.Bd)(W) && (Y = _.Z.unsafe_rawColors.PRIMARY_630.css),
        (c = j
            ? (0, r.jsx)(y.Z, {
                  className: k.roleFlowerStar,
                  iconClassName: d ? k.roleVerifiedIcon : void 0,
                  color: V,
                  size: 14,
              })
            : "dot" === x
              ? (0, r.jsx)(m.FhE, {
                    className: k.roleDot,
                    color: V,
                    colors: L,
                    background: !1,
                    tooltip: !1,
                })
              : (0, r.jsx)(m.xko, {
                    color: V,
                    colors: L,
                }));
    let K = i.useMemo(() => {
        var t;
        return G({ borderColor: I ? void 0 : H }, null != (t = e.style) ? t : {});
    }, [H, I, e.style]);
    return (0, r.jsx)(m.tEY, {
        children: (0, r.jsxs)(
            "div",
            F(
                G(
                    {
                        ref: t,
                        className: o()(k.role, g),
                        style: K,
                        onContextMenu: U,
                        onMouseDown: A,
                        "aria-label": E.name,
                        tabIndex: R,
                    },
                    w,
                ),
                {
                    children: [
                        (0, r.jsxs)(m.P3F, {
                            className: o()(d && k.roleRemoveButtonCanRemove, k.roleRemoveButton),
                            onClick: d ? O : void 0,
                            tabIndex: d ? R : -1,
                            focusProps: { focusClassName: k.roleRemoveIconFocused },
                            "aria-hidden": !d,
                            "aria-label": M.intl.formatToPlainString(M.t.QrxwhY, { roleName: E.name }),
                            children: [
                                c,
                                d
                                    ? (0, r.jsx)(m.Dio, {
                                          size: "md",
                                          color: Y,
                                          className: k.roleRemoveIcon,
                                          "aria-hidden": !0,
                                      })
                                    : null,
                            ],
                        }),
                        null != D ? (0, r.jsx)(C.Z, F(G({ className: k.roleIcon }, D), { enableTooltip: !1 })) : null,
                        (0, r.jsx)("div", {
                            "aria-hidden": !0,
                            className: k.roleName,
                            children: (0, r.jsx)(m.Text, {
                                variant: "text-xs/medium",
                                className: k.roleNameOverflow,
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
    return (0, r.jsx)(m.yRy, {
        targetElementRef: l,
        renderPopout: (t) => {
            let { position: n } = t;
            return (0, r.jsx)(K, F(G({}, e), { position: null != n ? n : "top" }));
        },
        position: "top",
        align: "center",
        children: (e) =>
            (0, r.jsx)(m.tEY, {
                children: (0, r.jsx)(
                    "button",
                    F(G(F(G({ ref: l }, e), { className: o()(k.overflowButton, a) }), s), { children: "+".concat(n) }),
                ),
            }),
    });
}
function Q(e) {
    let t = i.useRef(null),
        { guild: n, user: a, handleAddRole: s, roleClassName: l, addButtonClassName: c, addButtonIconClassName: d } = e,
        f = (0, u.JA)("overflow-add-roles-".concat(a.id)),
        _ = (0, p.e7)([b.Z], () => b.Z.roleStyle),
        h = D.Z.getHighestRole(n),
        g = R.ZP.getMember(n.id, a.id),
        E = (e) =>
            !(0, P.fI)(e) && !e.managed && D.Z.isRoleHigher(n, h, e) && (null == g || -1 === g.roles.indexOf(e.id));
    return (0, r.jsx)(m.yRy, {
        targetElementRef: t,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(N.Z, {
                guild: n,
                roleStyle: _,
                roleFilter: E,
                onSelect: s,
                onClose: t,
            });
        },
        position: "bottom",
        align: "center",
        children: (e) =>
            (0, r.jsx)(m.tEY, {
                children: (0, r.jsx)(
                    "button",
                    F(
                        G(
                            F(G({ ref: t }, e), {
                                className: o()(k.addButton, l, c),
                                "aria-label": M.intl.string(M.t.e3Wlyw),
                                type: "button",
                            }),
                            f,
                        ),
                        {
                            children: (0, r.jsx)(m.qJs, {
                                size: "md",
                                color: "currentColor",
                                className: o()(k.addButtonIcon, d),
                                "aria-hidden": !0,
                            }),
                        },
                    ),
                ),
            }),
    });
}
function X(e) {
    let t,
        {
            user: n,
            guild: a,
            userRoleIds: s,
            wrap: f = !0,
            width: _,
            className: m,
            readOnly: h,
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
                    : I.Z.updateMemberRoles(a.id, n.id, r, [], [e.id]);
            },
            [s, a.id, n.id],
        ),
        S = i.useCallback(
            (e) => {
                let t = s;
                t.includes(e) || (t = [...t, e]), I.Z.updateMemberRoles(a.id, n.id, t, [e], []);
            },
            [s, a.id, n.id],
        ),
        [T, C] = i.useState(null),
        N = (0, p.Wu)([w.Z], () => w.Z.getManyRoles(a.id, s).sort(A.Z)),
        P = i.useMemo(() => (null != T ? N.slice(0, T) : N), [N, T]),
        R = s.length - P.length;
    i.useLayoutEffect(() => {
        if (f) return;
        if ("number" != typeof _) throw Error("Unexpected null width");
        let e = 0,
            t = 0,
            n = _ - H - Y;
        for (let r = 0; r < P.length; r++) {
            let i = P[r],
                a = y.current[i.id];
            if (null != a) {
                if ((t += a.offsetWidth + Y) > n) break;
                e++;
            }
        }
        C((t) => (e < P.length ? e : t));
    }, [f, _, P]);
    let U = x.default.getCurrentUser();
    l()(null != U, "MemberRolesList: currentUser cannot be undefined");
    let Z = !h && D.Z.can(j.Plq.MANAGE_ROLES, a),
        V = L.e9(a, U.id),
        K = i.useMemo(() => "roles-".concat((0, c.Z)()), []),
        X = (0, d.ZP)({
            id: K,
            isEnabled: !0,
            scrollToStart: W,
            scrollToEnd: W,
            wrap: !0,
        }),
        J = P.map((e) => {
            var t;
            return (0, r.jsx)(
                z,
                {
                    className: E,
                    role: e,
                    canRemove:
                        (null == (t = e.tags) ? void 0 : t.guild_connections) === null
                            ? n.id === U.id
                            : Z && L.r6(a, U.id, V, e),
                    onRemove: () => v(e),
                    ref: (t) => O(e.id, t),
                    guildId: a.id,
                    disableBorderColor: b,
                },
                e.id,
            );
        });
    return (
        null != T && 0 !== R
            ? (t = (0, r.jsx)(q, F(G({}, e), { numRolesHidden: R })))
            : Z && (t = (0, r.jsx)(Q, F(G({}, e), { handleAddRole: S }))),
        (0, r.jsx)(u.bG, {
            navigator: X,
            children: (0, r.jsx)(u.SJ, {
                children: (e) => {
                    var { ref: n } = e,
                        i = B(e, ["ref"]);
                    return (0, r.jsxs)(
                        "div",
                        F(
                            G(
                                {
                                    className: o()(k.root, m),
                                    "aria-label": M.intl.formatToPlainString(M.t.PCs0oo, { numRoles: s.length }),
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
let J = (0, E.Z)(X);
function $(e) {
    return (
        (0, p.e7)([D.Z], () => {
            var t;
            return D.Z.getGuildVersion(null == (t = e.guild) ? void 0 : t.id);
        }),
        !1 === e.wrap ? (0, r.jsx)(J, G({}, e)) : (0, r.jsx)(X, G({}, e))
    );
}
