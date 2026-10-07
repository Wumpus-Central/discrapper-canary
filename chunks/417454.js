s.d(l, { Ay: () => er, b_: () => Z });
var n = s(477900),
    r = s(582128),
    t = s(503698),
    o = s.n(t),
    i = s(284009),
    a = s.n(i),
    d = s(132500),
    c = s(837381),
    u = s(887129),
    m = s(317097),
    f = s(17928),
    x = s(661531),
    h = s(739187),
    g = s(857250),
    j = s(97483),
    b = s(305866),
    A = s(138134),
    R = s(834730),
    p = s(602853),
    v = s(545442),
    N = s(559106),
    C = s(939249),
    y = s(789645),
    w = s(922016),
    P = s(307301),
    E = s(442433),
    M = s(66834),
    _ = s(456412),
    S = s(775602),
    k = s(63104),
    I = s(235986),
    T = s(915089),
    G = s(468689),
    L = s(967144),
    H = s(69282),
    z = s(657048),
    U = s(1659),
    Y = s(465738),
    O = s(34457),
    $ = s(696451),
    D = s(317525),
    F = s(576705),
    J = s(287809),
    V = s(488926),
    W = s(652215),
    X = s(660183),
    B = s(371418);
let K = () => Promise.resolve();
function Q() {
    (0, h.P)((0, g.o)(X.intl.string(X.t.fEptJP), j.Ck.FAILURE));
}
function q(e) {
    let { userRoleIds: l, position: s, ...r } = e,
        t = (0, T.GV)();
    return (0, n.jsxs)(b.l, {
        className: o()(B.Jo, { [B.Vf]: "bottom" === s, [B.vy]: "top" === s }),
        "aria-labelledby": t,
        children: [
            (0, n.jsx)("div", { className: B.rF, children: (0, n.jsx)("div", { className: B.QG }) }),
            (0, n.jsxs)(I.A, {
                className: B.q0,
                align: I.A.Align.CENTER,
                children: [
                    (0, n.jsx)(A.FlagIcon, {
                        size: "xs",
                        color: x.A.unsafe_rawColors.PRIMARY_400.css,
                        className: B.LP,
                    }),
                    (0, n.jsx)(R.E, {
                        variant: "text-xs/bold",
                        color: "none",
                        className: B.VT,
                        id: t,
                        children: X.intl.format(X.t.PCs0oo, { numRoles: l.length }),
                    }),
                ],
            }),
            (0, n.jsx)(es, { ...r, wrap: !0, userRoleIds: l }),
        ],
    });
}
function Z(e) {
    let l,
        { ref: t, ...i } = e,
        {
            canRemove: a,
            className: d,
            role: u,
            onRemove: h,
            guildId: g,
            disableBorderColor: j,
            onMouseDown: b,
            guild: A,
        } = i,
        { tabIndex: w, ...P } = (0, c.rm)(u.id),
        M = (0, H.Xx)({ roleId: u.id, size: 16, guildId: g, role: u, guild: A }),
        _ = (0, f.bG)([S.Ay], () => S.Ay.roleStyle),
        I = (0, L.X_)(g, void 0, u.colorStrings),
        T = u.tags?.guild_connections === null,
        G = r.useCallback(
            (e) => {
                (0, E.L3)(e, async () => {
                    let { default: e } = await Promise.all([s.e("638221"), s.e("715687")]).then(s.bind(s, 646938));
                    return (l) => (0, n.jsx)(e, { ...l, id: u.id, label: X.intl.string(X.t.sMsaLg) });
                });
            },
            [u.id],
        ),
        U = (0, p.r)(x.A.unsafe_rawColors.PRIMARY_300).hsl(),
        Y = u.colorString ?? U,
        O = (0, m.xp)(Y, 0.6) ?? void 0,
        $ = x.A.unsafe_rawColors.WHITE.css,
        D = (0, m.LX)(Y);
    (null != D && 0.3 > (0, m.OK)(D) && ($ = x.A.unsafe_rawColors.PRIMARY_630.css),
        (l = T
            ? (0, n.jsx)(k.A, { className: B.U4, iconClassName: a ? B.gD : void 0, color: Y, size: 14 })
            : "dot" === _
              ? (0, n.jsx)(v.W, { className: B.m4, color: Y, colors: I, background: !1, tooltip: !1 })
              : (0, n.jsx)(v.R, { color: Y, colors: I })));
    let F = r.useMemo(() => ({ borderColor: j ? void 0 : O, ...(i.style ?? {}) }), [O, j, i.style]);
    return (0, n.jsx)(N.vN, {
        children: (0, n.jsxs)("div", {
            ref: t,
            className: o()(B.JC, d),
            style: F,
            onContextMenu: G,
            onMouseDown: b,
            "aria-label": u.name,
            tabIndex: w,
            ...P,
            children: [
                (0, n.jsxs)(C.D, {
                    className: o()(a && B.jH, B.j1),
                    onClick: a ? h : void 0,
                    tabIndex: a ? w : -1,
                    focusProps: { focusClassName: B.vZ },
                    "aria-hidden": !a,
                    "aria-label": X.intl.formatToPlainString(X.t.QrxwhY, { roleName: u.name }),
                    children: [
                        l,
                        a ? (0, n.jsx)(y.P, { size: "md", color: $, className: B.s$, "aria-hidden": !0 }) : null,
                    ],
                }),
                null != M ? (0, n.jsx)(z.A, { className: B.UT, ...M, enableTooltip: !1 }) : null,
                (0, n.jsx)("div", {
                    "aria-hidden": !0,
                    className: B.S3,
                    children: (0, n.jsx)(R.E, { variant: "text-xs/medium", className: B.sH, children: u.name }),
                }),
            ],
        }),
    });
}
function ee(e) {
    let { user: l, numRolesHidden: s, roleClassName: t } = e,
        i = (0, c.rm)(`overflow-more-roles-${l.id}`),
        a = r.useRef(null);
    return (0, n.jsx)(w.Y, {
        targetElementRef: a,
        renderPopout: (l) => {
            let { position: s } = l;
            return (0, n.jsx)(q, { ...e, position: s ?? "top" });
        },
        position: "top",
        align: "center",
        children: (e) =>
            (0, n.jsx)(N.vN, {
                children: (0, n.jsx)("button", { ref: a, ...e, className: o()(B.lv, t), ...i, children: `+${s}` }),
            }),
    });
}
function el(e) {
    let l = r.useRef(null),
        { guild: s, user: t, handleAddRole: i, roleClassName: a, addButtonClassName: d, addButtonIconClassName: u } = e,
        m = (0, c.rm)(`overflow-add-roles-${t.id}`),
        x = (0, f.bG)([S.Ay], () => S.Ay.roleStyle),
        h = F.A.getHighestRole(s),
        g = $.Ay.getMember(s.id, t.id);
    function j(e) {
        return !(0, O.Oy)(e) && !e.managed && F.A.isRoleHigher(s, h, e) && (null == g || -1 === g.roles.indexOf(e.id));
    }
    return (0, n.jsx)(w.Y, {
        targetElementRef: l,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, n.jsx)(Y.A, { guild: s, roleStyle: x, roleFilter: j, onSelect: i, onClose: l });
        },
        position: "bottom",
        align: "center",
        children: (e) =>
            (0, n.jsx)(N.vN, {
                children: (0, n.jsx)("button", {
                    ref: l,
                    ...e,
                    className: o()(B.c9, a, d),
                    "aria-label": X.intl.string(X.t.e3Wlyw),
                    type: "button",
                    ...m,
                    children: (0, n.jsx)(P.j, {
                        size: "md",
                        color: "currentColor",
                        className: o()(B.hs, u),
                        "aria-hidden": !0,
                    }),
                }),
            }),
    });
}
function es(e) {
    let l,
        {
            user: s,
            guild: t,
            userRoleIds: i,
            wrap: m = !0,
            width: x,
            className: h,
            readOnly: g,
            roleClassName: j,
            disableBorderColor: b,
        } = e,
        A = r.useRef({}),
        R = r.useCallback(
            (e) => {
                let l = i.filter((l) => l !== e.id);
                e.tags?.guild_connections === null
                    ? M.A.unassignGuildRoleConnection(t.id, e.id).catch(Q)
                    : G.default.updateMemberRoles(t.id, s.id, l, [], [e.id]).catch(Q);
            },
            [i, t.id, s.id],
        ),
        p = r.useCallback(
            (e) => {
                let l = i;
                (l.includes(e) || (l = [...l, e]), G.default.updateMemberRoles(t.id, s.id, l, [e], []).catch(Q));
            },
            [i, t.id, s.id],
        ),
        [v, N] = r.useState(null),
        C = (0, f.yK)([D.A], () => D.A.getManyRoles(t.id, i).sort(U.m)),
        y = r.useMemo(() => (null != v ? C.slice(0, v) : C), [C, v]),
        w = i.length - y.length;
    r.useLayoutEffect(() => {
        if (m) return;
        if ("number" != typeof x) throw Error("Unexpected null width");
        if (0 === x) return;
        let e = 0,
            l = 0,
            s = x - 30 - 4;
        for (let n = 0; n < y.length; n++) {
            let r = y[n],
                t = A.current[r.id];
            if (null != t) {
                if ((l += t.offsetWidth + 4) > s) break;
                e++;
            }
        }
        N((l) => (e < y.length ? e : l));
    }, [m, x, y]);
    let P = J.default.getCurrentUser();
    a()(null != P, "MemberRolesList: currentUser cannot be undefined");
    let E = !g && F.A.can(W.xBc.MANAGE_ROLES, t),
        _ = V.HJ(t, P.id),
        S = r.useMemo(() => `roles-${(0, d.A)()}`, []),
        k = (0, u.Ay)({ id: S, isEnabled: !0, scrollToStart: K, scrollToEnd: K, wrap: !0 }),
        I = y.map((e) =>
            (0, n.jsx)(
                Z,
                {
                    className: j,
                    role: e,
                    canRemove: e.tags?.guild_connections === null ? s.id === P.id : E && V.wO(t, P.id, _, e),
                    onRemove: () => R(e),
                    ref: (l) => {
                        var s;
                        return ((s = e.id), void (null != l ? (A.current[s] = l) : delete A.current[s]));
                    },
                    guildId: t.id,
                    disableBorderColor: b,
                },
                e.id,
            ),
        );
    return (
        null != v && 0 !== w
            ? (l = (0, n.jsx)(ee, { ...e, numRolesHidden: w }))
            : E && (l = (0, n.jsx)(el, { ...e, handleAddRole: p })),
        (0, n.jsx)(c.hD, {
            navigator: k,
            children: (0, n.jsx)(c.PR, {
                children: (e) => {
                    let { ref: s, ...r } = e;
                    return (0, n.jsxs)("div", {
                        className: o()(B.zr, h),
                        "aria-label": X.intl.formatToPlainString(X.t.PCs0oo, { numRoles: i.length }),
                        ref: s,
                        ...r,
                        children: [I, l],
                    });
                },
            }),
        })
    );
}
let en = (0, _.A)(es);
function er(e) {
    return (
        (0, f.bG)([F.A], () => F.A.getGuildVersion(e.guild?.id)),
        !1 === e.wrap ? (0, n.jsx)(en, { ...e }) : (0, n.jsx)(es, { ...e })
    );
}
