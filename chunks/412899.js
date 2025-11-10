n.d(t, {
    UB: () => z,
    ZP: () => $,
}),
    n(388685),
    n(642613),
    n(415506);
var r = n(951288),
    i = n(647438),
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
    S = n(434404),
    T = n(884902),
    A = n(48950),
    C = n(635042),
    N = n(608798),
    R = n(345162),
    P = n(271383),
    w = n(485386),
    D = n(496675),
    x = n(594174),
    L = n(700785),
    M = n(981631),
    j = n(388032),
    k = n(85703);
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
                    (0, r.jsx)(h.U65, {
                        size: "xs",
                        color: p.Z.unsafe_rawColors.PRIMARY_400.css,
                        className: k.overflowRolesPopoutHeaderIcon,
                    }),
                    (0, r.jsx)("div", {
                        className: k.overflowRolesPopoutHeaderText,
                        id: a,
                        children: j.intl.format(j.t.PCs0oo, { numRoles: t.length }),
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
        { canRemove: d, className: g, role: E, onRemove: O, guildId: v, disableBorderColor: S, onMouseDown: C } = e,
        N = (0, u.JA)(E.id),
        { tabIndex: R } = N,
        P = F(N, ["tabIndex"]),
        w = (0, I.p9)({
            roleId: E.id,
            size: 16,
            guildId: v,
        }),
        D = (0, _.e7)([b.Z], () => b.Z.roleStyle),
        x = (0, T._f)(v, E, E.colorStrings),
        L = (null == (a = E.tags) ? void 0 : a.guild_connections) === null,
        M = i.useCallback(
            (e) => {
                (0, m.jW)(e, async () => {
                    let { default: e } = await n.e("5396").then(n.bind(n, 999588));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            Z(G({}, t), {
                                id: E.id,
                                label: j.intl.string(j.t.sMsaLg),
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
        (c = L
            ? (0, r.jsx)(y.Z, {
                  className: k.roleFlowerStar,
                  iconClassName: d ? k.roleVerifiedIcon : void 0,
                  color: B,
                  size: 14,
              })
            : "dot" === D
              ? (0, r.jsx)(h.FhE, {
                    className: k.roleDot,
                    color: B,
                    colors: x,
                    background: !1,
                    tooltip: !1,
                })
              : (0, r.jsx)(h.xko, {
                    color: B,
                    colors: x,
                }));
    let W = i.useMemo(() => {
        var t;
        return G({ borderColor: S ? void 0 : V }, null != (t = e.style) ? t : {});
    }, [V, S, e.style]);
    return (0, r.jsx)(h.tEY, {
        children: (0, r.jsxs)(
            "div",
            Z(
                G(
                    {
                        ref: t,
                        className: o()(k.role, g),
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
                            className: o()(d && k.roleRemoveButtonCanRemove, k.roleRemoveButton),
                            onClick: d ? O : void 0,
                            tabIndex: d ? R : -1,
                            focusProps: { focusClassName: k.roleRemoveIconFocused },
                            "aria-hidden": !d,
                            "aria-label": j.intl.formatToPlainString(j.t.QrxwhY, { roleName: E.name }),
                            children: [
                                c,
                                d
                                    ? (0, r.jsx)(h.Dio, {
                                          size: "md",
                                          color: H,
                                          className: k.roleRemoveIcon,
                                          "aria-hidden": !0,
                                      })
                                    : null,
                            ],
                        }),
                        null != w ? (0, r.jsx)(A.Z, Z(G({ className: k.roleIcon }, w), { enableTooltip: !1 })) : null,
                        (0, r.jsx)("div", {
                            "aria-hidden": !0,
                            className: k.roleName,
                            children: (0, r.jsx)(h.Text, {
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
                    Z(G(Z(G({ ref: l }, e), { className: o()(k.overflowButton, a) }), s), { children: "+".concat(n) }),
                ),
            }),
    });
}
function X(e) {
    let t = i.useRef(null),
        { guild: n, user: a, handleAddRole: s, roleClassName: l, addButtonClassName: c, addButtonIconClassName: d } = e,
        f = (0, u.JA)("overflow-add-roles-".concat(a.id)),
        p = (0, _.e7)([b.Z], () => b.Z.roleStyle),
        m = D.Z.getHighestRole(n),
        g = P.ZP.getMember(n.id, a.id),
        E = (e) =>
            !(0, R.fI)(e) && !e.managed && D.Z.isRoleHigher(n, m, e) && (null == g || -1 === g.roles.indexOf(e.id));
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
                                className: o()(k.addButton, l, c),
                                "aria-label": j.intl.string(j.t.e3Wlyw),
                                type: "button",
                            }),
                            f,
                        ),
                        {
                            children: (0, r.jsx)(h.qJs, {
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
                    : S.Z.updateMemberRoles(a.id, n.id, r, [], [e.id]);
            },
            [s, a.id, n.id],
        ),
        I = i.useCallback(
            (e) => {
                let t = s;
                t.includes(e) || (t = [...t, e]), S.Z.updateMemberRoles(a.id, n.id, t, [e], []);
            },
            [s, a.id, n.id],
        ),
        [T, A] = i.useState(null),
        N = (0, _.Wu)([w.Z], () => w.Z.getManyRoles(a.id, s).sort(C.Z)),
        R = i.useMemo(() => (null != T ? N.slice(0, T) : N), [N, T]),
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
    let U = x.default.getCurrentUser();
    l()(null != U, "MemberRolesList: currentUser cannot be undefined");
    let B = !m && D.Z.can(M.Plq.MANAGE_ROLES, a),
        V = L.e9(a, U.id),
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
                            : B && L.r6(a, U.id, V, e),
                    onRemove: () => v(e),
                    ref: (t) => O(e.id, t),
                    guildId: a.id,
                    disableBorderColor: b,
                },
                e.id,
            );
        });
    return (
        null != T && 0 !== P
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
                                    className: o()(k.root, h),
                                    "aria-label": j.intl.formatToPlainString(j.t.PCs0oo, { numRoles: s.length }),
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
        (0, _.e7)([D.Z], () => {
            var t;
            return D.Z.getGuildVersion(null == (t = e.guild) ? void 0 : t.id);
        }),
        !1 === e.wrap ? (0, r.jsx)(J, G({}, e)) : (0, r.jsx)(Q, G({}, e))
    );
}
