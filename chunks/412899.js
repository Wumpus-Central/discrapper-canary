n.d(t, {
    UB: () => B,
    ZP: () => q,
}),
    n(388685),
    n(642613),
    n(415506);
var r = n(255367),
    l = n(73800),
    i = n(120356),
    s = n.n(i),
    a = n(512722),
    o = n.n(a),
    u = n(772848),
    c = n(91192),
    E = n(924826),
    d = n(866442),
    _ = n(442837),
    A = n(692547),
    T = n(481060),
    m = n(239091),
    I = n(749210),
    g = n(112724),
    N = n(607070),
    h = n(134433),
    f = n(600164),
    O = n(91218),
    p = n(313201),
    R = n(518738),
    S = n(434404),
    C = n(884902),
    D = n(635042),
    L = n(345162),
    U = n(271383),
    M = n(485386),
    v = n(496675),
    b = n(594174),
    x = n(700785),
    P = n(944613),
    j = n(981631),
    y = n(388032),
    w = n(85703);
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function k(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function F(e, t) {
    if (null == e) return {};
    var n,
        r,
        l = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = {},
                i = Object.keys(e);
            for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
            return l;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (r = 0; r < i.length; r++)
            (n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
    }
    return l;
}
let z = () => Promise.resolve();
function Z(e) {
    let { userRoleIds: t, position: n } = e,
        l = F(e, ["userRoleIds", "position"]),
        i = (0, p.Dt)();
    return (0, r.jsxs)(T.VqE, {
        className: s()(w.overflowRolesPopout, {
            [w.popoutBottom]: "bottom" === n,
            [w.popoutTop]: "top" === n,
        }),
        "aria-labelledby": i,
        children: [
            (0, r.jsx)("div", {
                className: w.overflowRolesPopoutArrowWrapper,
                children: (0, r.jsx)("div", { className: w.overflowRolesPopoutArrow }),
            }),
            (0, r.jsxs)(f.Z, {
                className: w.overflowRolesPopoutHeader,
                align: f.Z.Align.CENTER,
                children: [
                    (0, r.jsx)(T.U65, {
                        size: "xs",
                        color: A.Z.unsafe_rawColors.PRIMARY_400.css,
                        className: w.overflowRolesPopoutHeaderIcon,
                    }),
                    (0, r.jsx)("div", {
                        className: w.overflowRolesPopoutHeaderText,
                        id: i,
                        children: y.intl.format(y.t.PCs0oq, { numRoles: t.length }),
                    }),
                ],
            }),
            (0, r.jsx)(
                K,
                k(G({}, l), {
                    wrap: !0,
                    userRoleIds: t,
                }),
            ),
        ],
    });
}
let B = l.forwardRef(function (e, t) {
    var i, a, o;
    let u,
        { canRemove: E, className: I, role: g, onRemove: f, guildId: p, disableBorderColor: S, onMouseDown: D } = e,
        L = (0, c.JA)(g.id),
        { tabIndex: U } = L,
        M = F(L, ["tabIndex"]),
        v = (0, R.p9)({
            roleId: g.id,
            size: 16,
            guildId: p,
        }),
        b = (0, _.e7)([N.Z], () => N.Z.roleStyle),
        x = (0, C._f)(p, g, g.colorStrings),
        P = (null == (i = g.tags) ? void 0 : i.guild_connections) === null,
        j = l.useCallback(
            (e) => {
                (0, m.jW)(e, async () => {
                    let { default: e } = await n.e("5396").then(n.bind(n, 731646));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            k(G({}, t), {
                                id: g.id,
                                label: y.intl.string(y.t.sMsaLi),
                            }),
                        );
                });
            },
            [g.id],
        ),
        z = (0, T.dQu)(A.Z.unsafe_rawColors.PRIMARY_300).hsl(),
        Z = null != (a = g.colorString) ? a : z,
        B = null != (o = (0, d.wK)(Z, 0.6)) ? o : void 0,
        V = A.Z.unsafe_rawColors.WHITE_500.css,
        H = (0, d._i)(Z);
    null != H && 0.3 > (0, d.Bd)(H) && (V = A.Z.unsafe_rawColors.PRIMARY_630.css),
        (u = P
            ? (0, r.jsx)(h.Z, {
                  className: w.roleFlowerStar,
                  iconClassName: E ? w.roleVerifiedIcon : void 0,
                  color: Z,
                  size: 14,
              })
            : "dot" === b
              ? (0, r.jsx)(T.FhE, {
                    className: w.roleDot,
                    color: Z,
                    colors: x,
                    background: !1,
                    tooltip: !1,
                })
              : (0, r.jsx)(T.xko, {
                    color: Z,
                    colors: x,
                }));
    let K = l.useMemo(() => {
        var t;
        return G({ borderColor: S ? void 0 : B }, null != (t = e.style) ? t : {});
    }, [B, S, e.style]);
    return (0, r.jsx)(T.tEY, {
        children: (0, r.jsxs)(
            "div",
            k(
                G(
                    {
                        ref: t,
                        className: s()(w.role, I),
                        style: K,
                        onContextMenu: j,
                        onMouseDown: D,
                        "aria-label": g.name,
                        tabIndex: U,
                    },
                    M,
                ),
                {
                    children: [
                        (0, r.jsxs)(T.P3F, {
                            className: s()(E && w.roleRemoveButtonCanRemove, w.roleRemoveButton),
                            onClick: E ? f : void 0,
                            tabIndex: E ? U : -1,
                            focusProps: { focusClassName: w.roleRemoveIconFocused },
                            "aria-hidden": !E,
                            "aria-label": y.intl.formatToPlainString(y.t.QrxwhY, { roleName: g.name }),
                            children: [
                                u,
                                E
                                    ? (0, r.jsx)(T.Dio, {
                                          size: "md",
                                          color: V,
                                          className: w.roleRemoveIcon,
                                          "aria-hidden": !0,
                                      })
                                    : null,
                            ],
                        }),
                        null != v ? (0, r.jsx)(O.Z, k(G({ className: w.roleIcon }, v), { enableTooltip: !1 })) : null,
                        (0, r.jsx)("div", {
                            "aria-hidden": !0,
                            className: w.roleName,
                            children: (0, r.jsx)(T.Text, {
                                variant: "text-xs/medium",
                                className: w.roleNameOverflow,
                                children: g.name,
                            }),
                        }),
                    ],
                },
            ),
        ),
    });
});
function V(e) {
    let { user: t, numRolesHidden: n, roleClassName: i } = e,
        a = (0, c.JA)("overflow-more-roles-".concat(t.id)),
        o = l.useRef(null);
    return (0, r.jsx)(T.yRy, {
        targetElementRef: o,
        renderPopout: (t) => {
            let { position: n } = t;
            return (0, r.jsx)(Z, k(G({}, e), { position: null != n ? n : "top" }));
        },
        position: "top",
        align: "center",
        children: (e) =>
            (0, r.jsx)(T.tEY, {
                children: (0, r.jsx)(
                    "button",
                    k(G(k(G({ ref: o }, e), { className: s()(w.overflowButton, i) }), a), { children: "+".concat(n) }),
                ),
            }),
    });
}
function H(e) {
    let t = l.useRef(null),
        { guild: n, user: i, handleAddRole: a, roleClassName: o, addButtonClassName: u, addButtonIconClassName: E } = e,
        d = (0, c.JA)("overflow-add-roles-".concat(i.id)),
        A = (0, _.e7)([N.Z], () => N.Z.roleStyle),
        m = v.Z.getHighestRole(n),
        I = U.ZP.getMember(n.id, i.id),
        g = (e) =>
            !(0, L.fI)(e) && !e.managed && v.Z.isRoleHigher(n, m, e) && (null == I || -1 === I.roles.indexOf(e.id));
    return (0, r.jsx)(T.yRy, {
        targetElementRef: t,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(P.Z, {
                guild: n,
                roleStyle: A,
                roleFilter: g,
                onSelect: a,
                onClose: t,
            });
        },
        position: "bottom",
        align: "center",
        children: (e) =>
            (0, r.jsx)(T.tEY, {
                children: (0, r.jsx)(
                    "button",
                    k(
                        G(
                            k(G({ ref: t }, e), {
                                className: s()(w.addButton, o, u),
                                "aria-label": y.intl.string(y.t.e3Wly8),
                                type: "button",
                            }),
                            d,
                        ),
                        {
                            children: (0, r.jsx)(T.qJs, {
                                size: "md",
                                color: "currentColor",
                                className: s()(w.addButtonIcon, E),
                                "aria-hidden": !0,
                            }),
                        },
                    ),
                ),
            }),
    });
}
function K(e) {
    let t,
        {
            user: n,
            guild: i,
            userRoleIds: a,
            wrap: d = !0,
            width: A,
            className: T,
            readOnly: m,
            roleClassName: g,
            disableBorderColor: N,
        } = e,
        h = l.useRef({}),
        f = l.useCallback(
            (e) => {
                var t;
                let r = a.filter((t) => t !== e.id);
                (null == (t = e.tags) ? void 0 : t.guild_connections) === null
                    ? I.Z.unassignGuildRoleConnection(i.id, e.id)
                    : S.Z.updateMemberRoles(i.id, n.id, r, [], [e.id]);
            },
            [a, i.id, n.id],
        ),
        O = l.useCallback(
            (e) => {
                let t = a;
                t.includes(e) || (t = [...t, e]), S.Z.updateMemberRoles(i.id, n.id, t, [e], []);
            },
            [a, i.id, n.id],
        ),
        [p, R] = l.useState(null),
        C = (0, _.Wu)([M.Z], () => M.Z.getManyRoles(i.id, a).sort(D.Z)),
        L = l.useMemo(() => (null != p ? C.slice(0, p) : C), [C, p]),
        U = a.length - L.length;
    l.useLayoutEffect(() => {
        if (d) return;
        if ("number" != typeof A) throw Error("Unexpected null width");
        let e = 0,
            t = 0,
            n = A - 30 - 4;
        for (let r = 0; r < L.length; r++) {
            let l = L[r],
                i = h.current[l.id];
            if (null != i) {
                if ((t += i.offsetWidth + 4) > n) break;
                e++;
            }
        }
        R((t) => (e < L.length ? e : t));
    }, [d, A, L]);
    let P = b.default.getCurrentUser();
    o()(null != P, "MemberRolesList: currentUser cannot be undefined");
    let Z = !m && v.Z.can(j.Plq.MANAGE_ROLES, i),
        K = x.e9(i, P.id),
        W = l.useMemo(() => "roles-".concat((0, u.Z)()), []),
        q = (0, E.ZP)({
            id: W,
            isEnabled: !0,
            scrollToStart: z,
            scrollToEnd: z,
            wrap: !0,
        }),
        Y = L.map((e) => {
            var t;
            return (0, r.jsx)(
                B,
                {
                    className: g,
                    role: e,
                    canRemove:
                        (null == (t = e.tags) ? void 0 : t.guild_connections) === null
                            ? n.id === P.id
                            : Z && x.r6(i, P.id, K, e),
                    onRemove: () => f(e),
                    ref: (t) => {
                        var n;
                        return (n = e.id), void (null != t ? (h.current[n] = t) : delete h.current[n]);
                    },
                    guildId: i.id,
                    disableBorderColor: N,
                },
                e.id,
            );
        });
    return (
        null != p && 0 !== U
            ? (t = (0, r.jsx)(V, k(G({}, e), { numRolesHidden: U })))
            : Z && (t = (0, r.jsx)(H, k(G({}, e), { handleAddRole: O }))),
        (0, r.jsx)(c.bG, {
            navigator: q,
            children: (0, r.jsx)(c.SJ, {
                children: (e) => {
                    var { ref: n } = e,
                        l = F(e, ["ref"]);
                    return (0, r.jsxs)(
                        "div",
                        k(
                            G(
                                {
                                    className: s()(w.root, T),
                                    "aria-label": y.intl.formatToPlainString(y.t.PCs0oq, { numRoles: a.length }),
                                    ref: n,
                                },
                                l,
                            ),
                            {
                                children: [Y, t],
                            },
                        ),
                    );
                },
            }),
        })
    );
}
let W = (0, g.Z)(K);
function q(e) {
    return (
        (0, _.e7)([v.Z], () => {
            var t;
            return v.Z.getGuildVersion(null == (t = e.guild) ? void 0 : t.id);
        }),
        !1 === e.wrap ? (0, r.jsx)(W, G({}, e)) : (0, r.jsx)(K, G({}, e))
    );
}
