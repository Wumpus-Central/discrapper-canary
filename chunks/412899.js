t.d(e, {
    UB: () => F,
    ZP: () => Y,
}),
    t(388685),
    t(642613),
    t(415506);
var n = t(951288),
    r = t(647438),
    l = t(120356),
    i = t.n(l),
    s = t(512722),
    a = t.n(s),
    o = t(772848),
    g = t(91192),
    c = t(924826),
    f = t(866442),
    v = t(442837),
    h = t(692547),
    u = t(481060),
    d = t(239091),
    E = t(749210),
    C = t(112724),
    B = t(607070),
    w = t(134433),
    D = t(600164),
    M = t(91218),
    p = t(313201),
    I = t(518738),
    H = t(434404),
    b = t(884902),
    Q = t(635042),
    O = t(345162),
    P = t(271383),
    V = t(485386),
    j = t(496675),
    m = t(594174),
    T = t(700785),
    y = t(944613),
    L = t(981631),
    x = t(388032),
    N = t(85703);
function Z(A) {
    for (var e = 1; e < arguments.length; e++) {
        var t = null != arguments[e] ? arguments[e] : {},
            n = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(t).filter(function (A) {
                    return Object.getOwnPropertyDescriptor(t, A).enumerable;
                }),
            )),
            n.forEach(function (e) {
                var n;
                (n = t[e]),
                    e in A
                        ? Object.defineProperty(A, e, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (A[e] = n);
            });
    }
    return A;
}
function S(A, e) {
    return (
        (e = null != e ? e : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(A, Object.getOwnPropertyDescriptors(e))
            : (function (A, e) {
                  var t = Object.keys(A);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(A);
                      t.push.apply(t, n);
                  }
                  return t;
              })(Object(e)).forEach(function (t) {
                  Object.defineProperty(A, t, Object.getOwnPropertyDescriptor(e, t));
              }),
        A
    );
}
function R(A, e) {
    if (null == A) return {};
    var t,
        n,
        r = (function (A, e) {
            if (null == A) return {};
            var t,
                n,
                r = {},
                l = Object.keys(A);
            for (n = 0; n < l.length; n++) (t = l[n]), e.indexOf(t) >= 0 || (r[t] = A[t]);
            return r;
        })(A, e);
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(A);
        for (n = 0; n < l.length; n++)
            (t = l[n]), !(e.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(A, t) && (r[t] = A[t]);
    }
    return r;
}
let G = () => Promise.resolve();
function U(A) {
    let { userRoleIds: e, position: t } = A,
        r = R(A, ["userRoleIds", "position"]),
        l = (0, p.Dt)();
    return (0, n.jsxs)(u.VqE, {
        className: i()(N.overflowRolesPopout, {
            [N.popoutBottom]: "bottom" === t,
            [N.popoutTop]: "top" === t,
        }),
        "aria-labelledby": l,
        children: [
            (0, n.jsx)("div", {
                className: N.overflowRolesPopoutArrowWrapper,
                children: (0, n.jsx)("div", { className: N.overflowRolesPopoutArrow }),
            }),
            (0, n.jsxs)(D.Z, {
                className: N.overflowRolesPopoutHeader,
                align: D.Z.Align.CENTER,
                children: [
                    (0, n.jsx)(u.U65, {
                        size: "xs",
                        color: h.Z.unsafe_rawColors.PRIMARY_400.css,
                        className: N.overflowRolesPopoutHeaderIcon,
                    }),
                    (0, n.jsx)("div", {
                        className: N.overflowRolesPopoutHeaderText,
                        id: l,
                        children: x.intl.format(x.t.PCs0oq, { numRoles: e.length }),
                    }),
                ],
            }),
            (0, n.jsx)(
                z,
                S(Z({}, r), {
                    wrap: !0,
                    userRoleIds: e,
                }),
            ),
        ],
    });
}
let F = r.forwardRef(function (A, e) {
    var l, s, a;
    let o,
        { canRemove: c, className: E, role: C, onRemove: D, guildId: p, disableBorderColor: H, onMouseDown: Q } = A,
        O = (0, g.JA)(C.id),
        { tabIndex: P } = O,
        V = R(O, ["tabIndex"]),
        j = (0, I.p9)({
            roleId: C.id,
            size: 16,
            guildId: p,
        }),
        m = (0, v.e7)([B.Z], () => B.Z.roleStyle),
        T = (0, b._f)(p, C, C.colorStrings),
        y = (null == (l = C.tags) ? void 0 : l.guild_connections) === null,
        L = r.useCallback(
            (A) => {
                (0, d.jW)(A, async () => {
                    let { default: A } = await t.e("5396").then(t.bind(t, 731646));
                    return (e) =>
                        (0, n.jsx)(
                            A,
                            S(Z({}, e), {
                                id: C.id,
                                label: x.intl.string(x.t.sMsaLi),
                            }),
                        );
                });
            },
            [C.id],
        ),
        G = (0, u.dQu)(h.Z.unsafe_rawColors.PRIMARY_300).hsl(),
        U = null != (s = C.colorString) ? s : G,
        F = null != (a = (0, f.wK)(U, 0.6)) ? a : void 0,
        k = h.Z.unsafe_rawColors.WHITE_500.css,
        X = (0, f._i)(U);
    null != X && 0.3 > (0, f.Bd)(X) && (k = h.Z.unsafe_rawColors.PRIMARY_630.css),
        (o = y
            ? (0, n.jsx)(w.Z, {
                  className: N.roleFlowerStar,
                  iconClassName: c ? N.roleVerifiedIcon : void 0,
                  color: U,
                  size: 14,
              })
            : "dot" === m
              ? (0, n.jsx)(u.FhE, {
                    className: N.roleDot,
                    color: U,
                    colors: T,
                    background: !1,
                    tooltip: !1,
                })
              : (0, n.jsx)(u.xko, {
                    color: U,
                    colors: T,
                }));
    let z = r.useMemo(() => {
        var e;
        return Z({ borderColor: H ? void 0 : F }, null != (e = A.style) ? e : {});
    }, [F, H, A.style]);
    return (0, n.jsx)(u.tEY, {
        children: (0, n.jsxs)(
            "div",
            S(
                Z(
                    {
                        ref: e,
                        className: i()(N.role, E),
                        style: z,
                        onContextMenu: L,
                        onMouseDown: Q,
                        "aria-label": C.name,
                        tabIndex: P,
                    },
                    V,
                ),
                {
                    children: [
                        (0, n.jsxs)(u.P3F, {
                            className: i()(c && N.roleRemoveButtonCanRemove, N.roleRemoveButton),
                            onClick: c ? D : void 0,
                            tabIndex: c ? P : -1,
                            focusProps: { focusClassName: N.roleRemoveIconFocused },
                            "aria-hidden": !c,
                            "aria-label": x.intl.formatToPlainString(x.t.QrxwhY, { roleName: C.name }),
                            children: [
                                o,
                                c
                                    ? (0, n.jsx)(u.Dio, {
                                          size: "md",
                                          color: k,
                                          className: N.roleRemoveIcon,
                                          "aria-hidden": !0,
                                      })
                                    : null,
                            ],
                        }),
                        null != j ? (0, n.jsx)(M.Z, S(Z({ className: N.roleIcon }, j), { enableTooltip: !1 })) : null,
                        (0, n.jsx)("div", {
                            "aria-hidden": !0,
                            className: N.roleName,
                            children: (0, n.jsx)(u.Text, {
                                variant: "text-xs/medium",
                                className: N.roleNameOverflow,
                                children: C.name,
                            }),
                        }),
                    ],
                },
            ),
        ),
    });
});
function k(A) {
    let { user: e, numRolesHidden: t, roleClassName: l } = A,
        s = (0, g.JA)("overflow-more-roles-".concat(e.id)),
        a = r.useRef(null);
    return (0, n.jsx)(u.yRy, {
        targetElementRef: a,
        renderPopout: (e) => {
            let { position: t } = e;
            return (0, n.jsx)(U, S(Z({}, A), { position: null != t ? t : "top" }));
        },
        position: "top",
        align: "center",
        children: (A) =>
            (0, n.jsx)(u.tEY, {
                children: (0, n.jsx)(
                    "button",
                    S(Z(S(Z({ ref: a }, A), { className: i()(N.overflowButton, l) }), s), { children: "+".concat(t) }),
                ),
            }),
    });
}
function X(A) {
    let e = r.useRef(null),
        { guild: t, user: l, handleAddRole: s, roleClassName: a, addButtonClassName: o, addButtonIconClassName: c } = A,
        f = (0, g.JA)("overflow-add-roles-".concat(l.id)),
        h = (0, v.e7)([B.Z], () => B.Z.roleStyle),
        d = j.Z.getHighestRole(t),
        E = P.ZP.getMember(t.id, l.id),
        C = (A) =>
            !(0, O.fI)(A) && !A.managed && j.Z.isRoleHigher(t, d, A) && (null == E || -1 === E.roles.indexOf(A.id));
    return (0, n.jsx)(u.yRy, {
        targetElementRef: e,
        renderPopout: (A) => {
            let { closePopout: e } = A;
            return (0, n.jsx)(y.Z, {
                guild: t,
                roleStyle: h,
                roleFilter: C,
                onSelect: s,
                onClose: e,
            });
        },
        position: "bottom",
        align: "center",
        children: (A) =>
            (0, n.jsx)(u.tEY, {
                children: (0, n.jsx)(
                    "button",
                    S(
                        Z(
                            S(Z({ ref: e }, A), {
                                className: i()(N.addButton, a, o),
                                "aria-label": x.intl.string(x.t.e3Wly8),
                                type: "button",
                            }),
                            f,
                        ),
                        {
                            children: (0, n.jsx)(u.qJs, {
                                size: "md",
                                color: "currentColor",
                                className: i()(N.addButtonIcon, c),
                                "aria-hidden": !0,
                            }),
                        },
                    ),
                ),
            }),
    });
}
function z(A) {
    let e,
        {
            user: t,
            guild: l,
            userRoleIds: s,
            wrap: f = !0,
            width: h,
            className: u,
            readOnly: d,
            roleClassName: C,
            disableBorderColor: B,
        } = A,
        w = r.useRef({}),
        D = r.useCallback(
            (A) => {
                var e;
                let n = s.filter((e) => e !== A.id);
                (null == (e = A.tags) ? void 0 : e.guild_connections) === null
                    ? E.Z.unassignGuildRoleConnection(l.id, A.id)
                    : H.Z.updateMemberRoles(l.id, t.id, n, [], [A.id]);
            },
            [s, l.id, t.id],
        ),
        M = r.useCallback(
            (A) => {
                let e = s;
                e.includes(A) || (e = [...e, A]), H.Z.updateMemberRoles(l.id, t.id, e, [A], []);
            },
            [s, l.id, t.id],
        ),
        [p, I] = r.useState(null),
        b = (0, v.Wu)([V.Z], () => V.Z.getManyRoles(l.id, s).sort(Q.Z)),
        O = r.useMemo(() => (null != p ? b.slice(0, p) : b), [b, p]),
        P = s.length - O.length;
    r.useLayoutEffect(() => {
        if (f) return;
        if ("number" != typeof h) throw Error("Unexpected null width");
        let A = 0,
            e = 0,
            t = h - 30 - 4;
        for (let n = 0; n < O.length; n++) {
            let r = O[n],
                l = w.current[r.id];
            if (null != l) {
                if ((e += l.offsetWidth + 4) > t) break;
                A++;
            }
        }
        I((e) => (A < O.length ? A : e));
    }, [f, h, O]);
    let y = m.default.getCurrentUser();
    a()(null != y, "MemberRolesList: currentUser cannot be undefined");
    let U = !d && j.Z.can(L.Plq.MANAGE_ROLES, l),
        z = T.e9(l, y.id),
        K = r.useMemo(() => "roles-".concat((0, o.Z)()), []),
        Y = (0, c.ZP)({
            id: K,
            isEnabled: !0,
            scrollToStart: G,
            scrollToEnd: G,
            wrap: !0,
        }),
        W = O.map((A) => {
            var e;
            return (0, n.jsx)(
                F,
                {
                    className: C,
                    role: A,
                    canRemove:
                        (null == (e = A.tags) ? void 0 : e.guild_connections) === null
                            ? t.id === y.id
                            : U && T.r6(l, y.id, z, A),
                    onRemove: () => D(A),
                    ref: (e) => {
                        var t;
                        return (t = A.id), void (null != e ? (w.current[t] = e) : delete w.current[t]);
                    },
                    guildId: l.id,
                    disableBorderColor: B,
                },
                A.id,
            );
        });
    return (
        null != p && 0 !== P
            ? (e = (0, n.jsx)(k, S(Z({}, A), { numRolesHidden: P })))
            : U && (e = (0, n.jsx)(X, S(Z({}, A), { handleAddRole: M }))),
        (0, n.jsx)(g.bG, {
            navigator: Y,
            children: (0, n.jsx)(g.SJ, {
                children: (A) => {
                    var { ref: t } = A,
                        r = R(A, ["ref"]);
                    return (0, n.jsxs)(
                        "div",
                        S(
                            Z(
                                {
                                    className: i()(N.root, u),
                                    "aria-label": x.intl.formatToPlainString(x.t.PCs0oq, { numRoles: s.length }),
                                    ref: t,
                                },
                                r,
                            ),
                            {
                                children: [W, e],
                            },
                        ),
                    );
                },
            }),
        })
    );
}
let K = (0, C.Z)(z);
function Y(A) {
    return (
        (0, v.e7)([j.Z], () => {
            var e;
            return j.Z.getGuildVersion(null == (e = A.guild) ? void 0 : e.id);
        }),
        !1 === A.wrap ? (0, n.jsx)(K, Z({}, A)) : (0, n.jsx)(z, Z({}, A))
    );
}
