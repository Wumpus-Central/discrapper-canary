s.d(l, { Ay: () => ee, b_: () => K });
var r = s(627968),
    n = s(64700),
    i = s(503698),
    o = s.n(i),
    t = s(284009),
    a = s.n(t),
    d = s(835245),
    c = s(837381),
    u = s(887129),
    m = s(317097),
    f = s(17928),
    x = s(661531),
    h = s(305866),
    g = s(138134),
    j = s(602853),
    b = s(545442),
    A = s(187322),
    R = s(939249),
    p = s(789645),
    v = s(834730),
    N = s(922016),
    C = s(307301),
    w = s(442433),
    y = s(66834),
    M = s(456412),
    _ = s(775602),
    P = s(87e3),
    E = s(235986),
    S = s(915089),
    k = s(201275),
    I = s(468689),
    T = s(967144),
    G = s(657048),
    H = s(1659),
    L = s(465738),
    z = s(34457),
    Y = s(696451),
    $ = s(317525),
    O = s(576705),
    U = s(287809),
    D = s(488926),
    V = s(652215),
    W = s(375708),
    J = s(349887);
let B = () => Promise.resolve();
function F(e) {
    let { userRoleIds: l, position: s, ...n } = e,
        i = (0, S.GV)();
    return (0, r.jsxs)(h.l, {
        className: o()(J.Jo, { [J.Vf]: "bottom" === s, [J.vy]: "top" === s }),
        "aria-labelledby": i,
        children: [
            (0, r.jsx)("div", { className: J.rF, children: (0, r.jsx)("div", { className: J.QG }) }),
            (0, r.jsxs)(E.A, {
                className: J.q0,
                align: E.A.Align.CENTER,
                children: [
                    (0, r.jsx)(g.i, { size: "xs", color: x.A.unsafe_rawColors.PRIMARY_400.css, className: J.LP }),
                    (0, r.jsx)("div", {
                        className: J.VT,
                        id: i,
                        children: W.intl.format(W.t.PCs0oo, { numRoles: l.length }),
                    }),
                ],
            }),
            (0, r.jsx)(q, { ...n, wrap: !0, userRoleIds: l }),
        ],
    });
}
let K = n.forwardRef(function (e, l) {
    let i,
        {
            canRemove: t,
            className: a,
            role: d,
            onRemove: u,
            guildId: h,
            disableBorderColor: g,
            onMouseDown: N,
            guild: C,
        } = e,
        { tabIndex: y, ...M } = (0, c.rm)(d.id),
        E = (0, k.$7)({ roleId: d.id, size: 16, guildId: h, role: d, guild: C }),
        S = (0, f.bG)([_.A], () => _.A.roleStyle),
        I = (0, T.X_)(h, void 0, d.colorStrings),
        H = d.tags?.guild_connections === null,
        L = n.useCallback(
            (e) => {
                (0, w.L3)(e, async () => {
                    let { default: e } = await s.e("15687").then(s.bind(s, 646938));
                    return (l) => (0, r.jsx)(e, { ...l, id: d.id, label: W.intl.string(W.t.sMsaLg) });
                });
            },
            [d.id],
        ),
        z = (0, j.r)(x.A.unsafe_rawColors.PRIMARY_300).hsl(),
        Y = d.colorString ?? z,
        $ = (0, m.xp)(Y, 0.6) ?? void 0,
        O = x.A.unsafe_rawColors.WHITE.css,
        U = (0, m.LX)(Y);
    null != U && 0.3 > (0, m.OK)(U) && (O = x.A.unsafe_rawColors.PRIMARY_630.css),
        (i = H
            ? (0, r.jsx)(P.A, { className: J.U4, iconClassName: t ? J.gD : void 0, color: Y, size: 14 })
            : "dot" === S
              ? (0, r.jsx)(b.W, { className: J.m4, color: Y, colors: I, background: !1, tooltip: !1 })
              : (0, r.jsx)(b.R, { color: Y, colors: I }));
    let D = n.useMemo(() => ({ borderColor: g ? void 0 : $, ...(e.style ?? {}) }), [$, g, e.style]);
    return (0, r.jsx)(A.vN, {
        children: (0, r.jsxs)("div", {
            ref: l,
            className: o()(J.JC, a),
            style: D,
            onContextMenu: L,
            onMouseDown: N,
            "aria-label": d.name,
            tabIndex: y,
            ...M,
            children: [
                (0, r.jsxs)(R.D, {
                    className: o()(t && J.jH, J.j1),
                    onClick: t ? u : void 0,
                    tabIndex: t ? y : -1,
                    focusProps: { focusClassName: J.vZ },
                    "aria-hidden": !t,
                    "aria-label": W.intl.formatToPlainString(W.t.QrxwhY, { roleName: d.name }),
                    children: [
                        i,
                        t ? (0, r.jsx)(p.P, { size: "md", color: O, className: J.s$, "aria-hidden": !0 }) : null,
                    ],
                }),
                null != E ? (0, r.jsx)(G.A, { className: J.UT, ...E, enableTooltip: !1 }) : null,
                (0, r.jsx)("div", {
                    "aria-hidden": !0,
                    className: J.S3,
                    children: (0, r.jsx)(v.E, { variant: "text-xs/medium", className: J.sH, children: d.name }),
                }),
            ],
        }),
    });
});
function Q(e) {
    let { user: l, numRolesHidden: s, roleClassName: i } = e,
        t = (0, c.rm)(`overflow-more-roles-${l.id}`),
        a = n.useRef(null);
    return (0, r.jsx)(N.Y, {
        targetElementRef: a,
        renderPopout: (l) => {
            let { position: s } = l;
            return (0, r.jsx)(F, { ...e, position: s ?? "top" });
        },
        position: "top",
        align: "center",
        children: (e) =>
            (0, r.jsx)(A.vN, {
                children: (0, r.jsx)("button", { ref: a, ...e, className: o()(J.lv, i), ...t, children: `+${s}` }),
            }),
    });
}
function X(e) {
    let l = n.useRef(null),
        { guild: s, user: i, handleAddRole: t, roleClassName: a, addButtonClassName: d, addButtonIconClassName: u } = e,
        m = (0, c.rm)(`overflow-add-roles-${i.id}`),
        x = (0, f.bG)([_.A], () => _.A.roleStyle),
        h = O.A.getHighestRole(s),
        g = Y.Ay.getMember(s.id, i.id),
        j = (e) =>
            !(0, z.Oy)(e) && !e.managed && O.A.isRoleHigher(s, h, e) && (null == g || -1 === g.roles.indexOf(e.id));
    return (0, r.jsx)(N.Y, {
        targetElementRef: l,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, r.jsx)(L.A, { guild: s, roleStyle: x, roleFilter: j, onSelect: t, onClose: l });
        },
        position: "bottom",
        align: "center",
        children: (e) =>
            (0, r.jsx)(A.vN, {
                children: (0, r.jsx)("button", {
                    ref: l,
                    ...e,
                    className: o()(J.c9, a, d),
                    "aria-label": W.intl.string(W.t.e3Wlyw),
                    type: "button",
                    ...m,
                    children: (0, r.jsx)(C.j, {
                        size: "md",
                        color: "currentColor",
                        className: o()(J.hs, u),
                        "aria-hidden": !0,
                    }),
                }),
            }),
    });
}
function q(e) {
    let l,
        {
            user: s,
            guild: i,
            userRoleIds: t,
            wrap: m = !0,
            width: x,
            className: h,
            readOnly: g,
            roleClassName: j,
            disableBorderColor: b,
        } = e,
        A = n.useRef({}),
        R = n.useCallback(
            (e) => {
                let l = t.filter((l) => l !== e.id);
                e.tags?.guild_connections === null
                    ? y.A.unassignGuildRoleConnection(i.id, e.id)
                    : I.A.updateMemberRoles(i.id, s.id, l, [], [e.id]);
            },
            [t, i.id, s.id],
        ),
        p = n.useCallback(
            (e) => {
                let l = t;
                l.includes(e) || (l = [...l, e]), I.A.updateMemberRoles(i.id, s.id, l, [e], []);
            },
            [t, i.id, s.id],
        ),
        [v, N] = n.useState(null),
        C = (0, f.yK)([$.A], () => $.A.getManyRoles(i.id, t).sort(H.m)),
        w = n.useMemo(() => (null != v ? C.slice(0, v) : C), [C, v]),
        M = t.length - w.length;
    n.useLayoutEffect(() => {
        if (m) return;
        if ("number" != typeof x) throw Error("Unexpected null width");
        if (0 === x) return;
        let e = 0,
            l = 0,
            s = x - 30 - 4;
        for (let r = 0; r < w.length; r++) {
            let n = w[r],
                i = A.current[n.id];
            if (null != i) {
                if ((l += i.offsetWidth + 4) > s) break;
                e++;
            }
        }
        N((l) => (e < w.length ? e : l));
    }, [m, x, w]);
    let _ = U.default.getCurrentUser();
    a()(null != _, "MemberRolesList: currentUser cannot be undefined");
    let P = !g && O.A.can(V.xBc.MANAGE_ROLES, i),
        E = D.HJ(i, _.id),
        S = n.useMemo(() => `roles-${(0, d.A)()}`, []),
        k = (0, u.Ay)({ id: S, isEnabled: !0, scrollToStart: B, scrollToEnd: B, wrap: !0 }),
        T = w.map((e) =>
            (0, r.jsx)(
                K,
                {
                    className: j,
                    role: e,
                    canRemove: e.tags?.guild_connections === null ? s.id === _.id : P && D.wO(i, _.id, E, e),
                    onRemove: () => R(e),
                    ref: (l) => {
                        var s;
                        return (s = e.id), void (null != l ? (A.current[s] = l) : delete A.current[s]);
                    },
                    guildId: i.id,
                    disableBorderColor: b,
                },
                e.id,
            ),
        );
    return (
        null != v && 0 !== M
            ? (l = (0, r.jsx)(Q, { ...e, numRolesHidden: M }))
            : P && (l = (0, r.jsx)(X, { ...e, handleAddRole: p })),
        (0, r.jsx)(c.hD, {
            navigator: k,
            children: (0, r.jsx)(c.PR, {
                children: (e) => {
                    let { ref: s, ...n } = e;
                    return (0, r.jsxs)("div", {
                        className: o()(J.zr, h),
                        "aria-label": W.intl.formatToPlainString(W.t.PCs0oo, { numRoles: t.length }),
                        ref: s,
                        ...n,
                        children: [T, l],
                    });
                },
            }),
        })
    );
}
let Z = (0, M.A)(q);
function ee(e) {
    return (
        (0, f.bG)([O.A], () => O.A.getGuildVersion(e.guild?.id)),
        !1 === e.wrap ? (0, r.jsx)(Z, { ...e }) : (0, r.jsx)(q, { ...e })
    );
}
