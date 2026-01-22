n.d(t, {
    Ay: () => J,
    b_: () => q,
}),
    n(896048),
    n(638769),
    n(65821);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(284009),
    l = n.n(o),
    c = n(835245),
    u = n(837381),
    d = n(884362),
    f = n(317097),
    p = n(311907),
    _ = n(827734),
    h = n(397927),
    m = n(442433),
    g = n(686956),
    E = n(456412),
    b = n(775602),
    y = n(63104),
    O = n(235986),
    A = n(915089),
    v = n(201275),
    S = n(997509),
    I = n(967144),
    T = n(657048),
    C = n(1659),
    N = n(465738),
    R = n(34457),
    w = n(696451),
    P = n(317525),
    D = n(576705),
    x = n(287809),
    L = n(488926),
    j = n(652215),
    M = n(985018),
    k = n(702632);
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
function V(e, t) {
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
            : V(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function B(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = H(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function H(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let Y = 30,
    W = 4,
    K = () => Promise.resolve();
function z(e) {
    let { userRoleIds: t, position: n } = e,
        i = B(e, ["userRoleIds", "position"]),
        a = (0, A.GV)();
    return (0, r.jsxs)(h.lGe, {
        className: s()(k.Jo, {
            [k.Vf]: "bottom" === n,
            [k.vy]: "top" === n,
        }),
        "aria-labelledby": a,
        children: [
            (0, r.jsx)("div", {
                className: k.rF,
                children: (0, r.jsx)("div", { className: k.QG }),
            }),
            (0, r.jsxs)(O.A, {
                className: k.q0,
                align: O.A.Align.CENTER,
                children: [
                    (0, r.jsx)(h.iFK, {
                        size: "xs",
                        color: _.A.unsafe_rawColors.PRIMARY_400.css,
                        className: k.LP,
                    }),
                    (0, r.jsx)("div", {
                        className: k.VT,
                        id: a,
                        children: M.intl.format(M.t.PCs0oo, { numRoles: t.length }),
                    }),
                ],
            }),
            (0, r.jsx)(
                Q,
                F(G({}, i), {
                    wrap: !0,
                    userRoleIds: t,
                }),
            ),
        ],
    });
}
let q = i.forwardRef(function (e, t) {
    var a, o, l;
    let c,
        {
            canRemove: d,
            className: g,
            role: E,
            onRemove: O,
            guildId: A,
            disableBorderColor: S,
            onMouseDown: C,
            guild: N,
        } = e,
        R = (0, u.rm)(E.id),
        { tabIndex: w } = R,
        P = B(R, ["tabIndex"]),
        D = (0, v.$7)({
            roleId: E.id,
            size: 16,
            guildId: A,
            role: E,
            guild: N,
        }),
        x = (0, p.bG)([b.A], () => b.A.roleStyle),
        L = (0, I.X_)(A, E, E.colorStrings),
        j = (null == (l = E.tags) ? void 0 : l.guild_connections) === null,
        U = i.useCallback(
            (e) => {
                (0, m.L3)(e, async () => {
                    let { default: e } = await n.e("15687").then(n.bind(n, 646938));
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
        V = (0, h.rdh)(_.A.unsafe_rawColors.PRIMARY_300).hsl(),
        H = null != (a = E.colorString) ? a : V,
        Y = null != (o = (0, f.xp)(H, 0.6)) ? o : void 0,
        W = _.A.unsafe_rawColors.WHITE.css,
        K = (0, f.LX)(H);
    null != K && 0.3 > (0, f.OK)(K) && (W = _.A.unsafe_rawColors.PRIMARY_630.css),
        (c = j
            ? (0, r.jsx)(y.A, {
                  className: k.U4,
                  iconClassName: d ? k.gD : void 0,
                  color: H,
                  size: 14,
              })
            : "dot" === x
              ? (0, r.jsx)(h.WYI, {
                    className: k.m4,
                    color: H,
                    colors: L,
                    background: !1,
                    tooltip: !1,
                })
              : (0, r.jsx)(h.RYH, {
                    color: H,
                    colors: L,
                }));
    let z = i.useMemo(() => {
        var t;
        return G({ borderColor: S ? void 0 : Y }, null != (t = e.style) ? t : {});
    }, [Y, S, e.style]);
    return (0, r.jsx)(h.vN3, {
        children: (0, r.jsxs)(
            "div",
            F(
                G(
                    {
                        ref: t,
                        className: s()(k.JC, g),
                        style: z,
                        onContextMenu: U,
                        onMouseDown: C,
                        "aria-label": E.name,
                        tabIndex: w,
                    },
                    P,
                ),
                {
                    children: [
                        (0, r.jsxs)(h.DUT, {
                            className: s()(d && k.jH, k.j1),
                            onClick: d ? O : void 0,
                            tabIndex: d ? w : -1,
                            focusProps: { focusClassName: k.vZ },
                            "aria-hidden": !d,
                            "aria-label": M.intl.formatToPlainString(M.t.QrxwhY, { roleName: E.name }),
                            children: [
                                c,
                                d
                                    ? (0, r.jsx)(h.PGe, {
                                          size: "md",
                                          color: W,
                                          className: k.s$,
                                          "aria-hidden": !0,
                                      })
                                    : null,
                            ],
                        }),
                        null != D ? (0, r.jsx)(T.A, F(G({ className: k.UT }, D), { enableTooltip: !1 })) : null,
                        (0, r.jsx)("div", {
                            "aria-hidden": !0,
                            className: k.S3,
                            children: (0, r.jsx)(h.Text, {
                                variant: "text-xs/medium",
                                className: k.sH,
                                children: E.name,
                            }),
                        }),
                    ],
                },
            ),
        ),
    });
});
function X(e) {
    let { user: t, numRolesHidden: n, roleClassName: a } = e,
        o = (0, u.rm)("overflow-more-roles-".concat(t.id)),
        l = i.useRef(null);
    return (0, r.jsx)(h.YNO, {
        targetElementRef: l,
        renderPopout: (t) => {
            let { position: n } = t;
            return (0, r.jsx)(z, F(G({}, e), { position: null != n ? n : "top" }));
        },
        position: "top",
        align: "center",
        children: (e) =>
            (0, r.jsx)(h.vN3, {
                children: (0, r.jsx)(
                    "button",
                    F(G(F(G({ ref: l }, e), { className: s()(k.lv, a) }), o), { children: "+".concat(n) }),
                ),
            }),
    });
}
function Z(e) {
    let t = i.useRef(null),
        { guild: n, user: a, handleAddRole: o, roleClassName: l, addButtonClassName: c, addButtonIconClassName: d } = e,
        f = (0, u.rm)("overflow-add-roles-".concat(a.id)),
        _ = (0, p.bG)([b.A], () => b.A.roleStyle),
        m = D.A.getHighestRole(n),
        g = w.Ay.getMember(n.id, a.id),
        E = (e) =>
            !(0, R.Oy)(e) && !e.managed && D.A.isRoleHigher(n, m, e) && (null == g || -1 === g.roles.indexOf(e.id));
    return (0, r.jsx)(h.YNO, {
        targetElementRef: t,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(N.A, {
                guild: n,
                roleStyle: _,
                roleFilter: E,
                onSelect: o,
                onClose: t,
            });
        },
        position: "bottom",
        align: "center",
        children: (e) =>
            (0, r.jsx)(h.vN3, {
                children: (0, r.jsx)(
                    "button",
                    F(
                        G(
                            F(G({ ref: t }, e), {
                                className: s()(k.c9, l, c),
                                "aria-label": M.intl.string(M.t.e3Wlyw),
                                type: "button",
                            }),
                            f,
                        ),
                        {
                            children: (0, r.jsx)(h.j96, {
                                size: "md",
                                color: "currentColor",
                                className: s()(k.hs, d),
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
            userRoleIds: o,
            wrap: f = !0,
            width: _,
            className: h,
            readOnly: m,
            roleClassName: E,
            disableBorderColor: b,
        } = e,
        y = i.useRef({});
    function O(e, t) {
        null != t ? (y.current[e] = t) : delete y.current[e];
    }
    let A = i.useCallback(
            (e) => {
                var t;
                let r = o.filter((t) => t !== e.id);
                (null == (t = e.tags) ? void 0 : t.guild_connections) === null
                    ? g.A.unassignGuildRoleConnection(a.id, e.id)
                    : S.A.updateMemberRoles(a.id, n.id, r, [], [e.id]);
            },
            [o, a.id, n.id],
        ),
        v = i.useCallback(
            (e) => {
                let t = o;
                t.includes(e) || (t = [...t, e]), S.A.updateMemberRoles(a.id, n.id, t, [e], []);
            },
            [o, a.id, n.id],
        ),
        [I, T] = i.useState(null),
        N = (0, p.yK)([P.A], () => P.A.getManyRoles(a.id, o).sort(C.m)),
        R = i.useMemo(() => (null != I ? N.slice(0, I) : N), [N, I]),
        w = o.length - R.length;
    i.useLayoutEffect(() => {
        if (f) return;
        if ("number" != typeof _) throw Error("Unexpected null width");
        let e = 0,
            t = 0,
            n = _ - Y - W;
        for (let r = 0; r < R.length; r++) {
            let i = R[r],
                a = y.current[i.id];
            if (null != a) {
                if ((t += a.offsetWidth + W) > n) break;
                e++;
            }
        }
        T((t) => (e < R.length ? e : t));
    }, [f, _, R]);
    let U = x.default.getCurrentUser();
    l()(null != U, "MemberRolesList: currentUser cannot be undefined");
    let V = !m && D.A.can(j.xBc.MANAGE_ROLES, a),
        H = L.HJ(a, U.id),
        z = i.useMemo(() => "roles-".concat((0, c.A)()), []),
        Q = (0, d.Ay)({
            id: z,
            isEnabled: !0,
            scrollToStart: K,
            scrollToEnd: K,
            wrap: !0,
        }),
        $ = R.map((e) => {
            var t;
            return (0, r.jsx)(
                q,
                {
                    className: E,
                    role: e,
                    canRemove:
                        (null == (t = e.tags) ? void 0 : t.guild_connections) === null
                            ? n.id === U.id
                            : V && L.wO(a, U.id, H, e),
                    onRemove: () => A(e),
                    ref: (t) => O(e.id, t),
                    guildId: a.id,
                    disableBorderColor: b,
                },
                e.id,
            );
        });
    return (
        null != I && 0 !== w
            ? (t = (0, r.jsx)(X, F(G({}, e), { numRolesHidden: w })))
            : V && (t = (0, r.jsx)(Z, F(G({}, e), { handleAddRole: v }))),
        (0, r.jsx)(u.hD, {
            navigator: Q,
            children: (0, r.jsx)(u.PR, {
                children: (e) => {
                    let { ref: n } = e,
                        i = B(e, ["ref"]);
                    return (0, r.jsxs)(
                        "div",
                        F(
                            G(
                                {
                                    className: s()(k.zr, h),
                                    "aria-label": M.intl.formatToPlainString(M.t.PCs0oo, { numRoles: o.length }),
                                    ref: n,
                                },
                                i,
                            ),
                            {
                                children: [$, t],
                            },
                        ),
                    );
                },
            }),
        })
    );
}
let $ = (0, E.A)(Q);
function J(e) {
    return (
        (0, p.bG)([D.A], () => {
            var t;
            return D.A.getGuildVersion(null == (t = e.guild) ? void 0 : t.id);
        }),
        !1 === e.wrap ? (0, r.jsx)($, G({}, e)) : (0, r.jsx)(Q, G({}, e))
    );
}
