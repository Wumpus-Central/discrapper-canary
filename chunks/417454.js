s.d(l, { Ay: () => ee, b_: () => K });
var n = s(627968),
    r = s(64700),
    o = s(503698),
    i = s.n(o),
    t = s(284009),
    a = s.n(t),
    d = s(132500),
    c = s(837381),
    u = s(887129),
    m = s(317097),
    x = s(17928),
    f = s(661531),
    h = s(305866),
    g = s(138134),
    j = s(834730),
    b = s(602853),
    A = s(545442),
    R = s(187322),
    p = s(939249),
    v = s(789645),
    N = s(922016),
    y = s(307301),
    C = s(442433),
    w = s(66834),
    M = s(456412),
    _ = s(775602),
    P = s(63104),
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
    let { userRoleIds: l, position: s, ...r } = e,
        o = (0, S.GV)();
    return (0, n.jsxs)(h.l, {
        className: i()(J.Jo, { [J.Vf]: "bottom" === s, [J.vy]: "top" === s }),
        "aria-labelledby": o,
        children: [
            (0, n.jsx)("div", { className: J.rF, children: (0, n.jsx)("div", { className: J.QG }) }),
            (0, n.jsxs)(E.A, {
                className: J.q0,
                align: E.A.Align.CENTER,
                children: [
                    (0, n.jsx)(g.i, { size: "xs", color: f.A.unsafe_rawColors.PRIMARY_400.css, className: J.LP }),
                    (0, n.jsx)(j.E, {
                        variant: "text-xs/bold",
                        color: "none",
                        className: J.VT,
                        id: o,
                        children: W.intl.format(W.t.PCs0oo, { numRoles: l.length }),
                    }),
                ],
            }),
            (0, n.jsx)(q, { ...r, wrap: !0, userRoleIds: l }),
        ],
    });
}
let K = r.forwardRef(function (e, l) {
    let o,
        {
            canRemove: t,
            className: a,
            role: d,
            onRemove: u,
            guildId: h,
            disableBorderColor: g,
            onMouseDown: N,
            guild: y,
        } = e,
        { tabIndex: w, ...M } = (0, c.rm)(d.id),
        E = (0, k.$7)({ roleId: d.id, size: 16, guildId: h, role: d, guild: y }),
        S = (0, x.bG)([_.Ay], () => _.Ay.roleStyle),
        I = (0, T.X_)(h, void 0, d.colorStrings),
        H = d.tags?.guild_connections === null,
        L = r.useCallback(
            (e) => {
                (0, C.L3)(e, async () => {
                    let { default: e } = await s.e("15687").then(s.bind(s, 646938));
                    return (l) => (0, n.jsx)(e, { ...l, id: d.id, label: W.intl.string(W.t.sMsaLg) });
                });
            },
            [d.id],
        ),
        z = (0, b.r)(f.A.unsafe_rawColors.PRIMARY_300).hsl(),
        Y = d.colorString ?? z,
        $ = (0, m.xp)(Y, 0.6) ?? void 0,
        O = f.A.unsafe_rawColors.WHITE.css,
        U = (0, m.LX)(Y);
    null != U && 0.3 > (0, m.OK)(U) && (O = f.A.unsafe_rawColors.PRIMARY_630.css),
        (o = H
            ? (0, n.jsx)(P.A, { className: J.U4, iconClassName: t ? J.gD : void 0, color: Y, size: 14 })
            : "dot" === S
              ? (0, n.jsx)(A.W, { className: J.m4, color: Y, colors: I, background: !1, tooltip: !1 })
              : (0, n.jsx)(A.R, { color: Y, colors: I }));
    let D = r.useMemo(() => ({ borderColor: g ? void 0 : $, ...(e.style ?? {}) }), [$, g, e.style]);
    return (0, n.jsx)(R.vN, {
        children: (0, n.jsxs)("div", {
            ref: l,
            className: i()(J.JC, a),
            style: D,
            onContextMenu: L,
            onMouseDown: N,
            "aria-label": d.name,
            tabIndex: w,
            ...M,
            children: [
                (0, n.jsxs)(p.D, {
                    className: i()(t && J.jH, J.j1),
                    onClick: t ? u : void 0,
                    tabIndex: t ? w : -1,
                    focusProps: { focusClassName: J.vZ },
                    "aria-hidden": !t,
                    "aria-label": W.intl.formatToPlainString(W.t.QrxwhY, { roleName: d.name }),
                    children: [
                        o,
                        t ? (0, n.jsx)(v.P, { size: "md", color: O, className: J.s$, "aria-hidden": !0 }) : null,
                    ],
                }),
                null != E ? (0, n.jsx)(G.A, { className: J.UT, ...E, enableTooltip: !1 }) : null,
                (0, n.jsx)("div", {
                    "aria-hidden": !0,
                    className: J.S3,
                    children: (0, n.jsx)(j.E, { variant: "text-xs/medium", className: J.sH, children: d.name }),
                }),
            ],
        }),
    });
});
function Q(e) {
    let { user: l, numRolesHidden: s, roleClassName: o } = e,
        t = (0, c.rm)(`overflow-more-roles-${l.id}`),
        a = r.useRef(null);
    return (0, n.jsx)(N.Y, {
        targetElementRef: a,
        renderPopout: (l) => {
            let { position: s } = l;
            return (0, n.jsx)(F, { ...e, position: s ?? "top" });
        },
        position: "top",
        align: "center",
        children: (e) =>
            (0, n.jsx)(R.vN, {
                children: (0, n.jsx)("button", { ref: a, ...e, className: i()(J.lv, o), ...t, children: `+${s}` }),
            }),
    });
}
function X(e) {
    let l = r.useRef(null),
        { guild: s, user: o, handleAddRole: t, roleClassName: a, addButtonClassName: d, addButtonIconClassName: u } = e,
        m = (0, c.rm)(`overflow-add-roles-${o.id}`),
        f = (0, x.bG)([_.Ay], () => _.Ay.roleStyle),
        h = O.A.getHighestRole(s),
        g = Y.Ay.getMember(s.id, o.id);
    function j(e) {
        return !(0, z.Oy)(e) && !e.managed && O.A.isRoleHigher(s, h, e) && (null == g || -1 === g.roles.indexOf(e.id));
    }
    return (0, n.jsx)(N.Y, {
        targetElementRef: l,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, n.jsx)(L.A, { guild: s, roleStyle: f, roleFilter: j, onSelect: t, onClose: l });
        },
        position: "bottom",
        align: "center",
        children: (e) =>
            (0, n.jsx)(R.vN, {
                children: (0, n.jsx)("button", {
                    ref: l,
                    ...e,
                    className: i()(J.c9, a, d),
                    "aria-label": W.intl.string(W.t.e3Wlyw),
                    type: "button",
                    ...m,
                    children: (0, n.jsx)(y.j, {
                        size: "md",
                        color: "currentColor",
                        className: i()(J.hs, u),
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
            guild: o,
            userRoleIds: t,
            wrap: m = !0,
            width: f,
            className: h,
            readOnly: g,
            roleClassName: j,
            disableBorderColor: b,
        } = e,
        A = r.useRef({}),
        R = r.useCallback(
            (e) => {
                let l = t.filter((l) => l !== e.id);
                e.tags?.guild_connections === null
                    ? w.A.unassignGuildRoleConnection(o.id, e.id)
                    : I.A.updateMemberRoles(o.id, s.id, l, [], [e.id]);
            },
            [t, o.id, s.id],
        ),
        p = r.useCallback(
            (e) => {
                let l = t;
                l.includes(e) || (l = [...l, e]), I.A.updateMemberRoles(o.id, s.id, l, [e], []);
            },
            [t, o.id, s.id],
        ),
        [v, N] = r.useState(null),
        y = (0, x.yK)([$.A], () => $.A.getManyRoles(o.id, t).sort(H.m)),
        C = r.useMemo(() => (null != v ? y.slice(0, v) : y), [y, v]),
        M = t.length - C.length;
    r.useLayoutEffect(() => {
        if (m) return;
        if ("number" != typeof f) throw Error("Unexpected null width");
        if (0 === f) return;
        let e = 0,
            l = 0,
            s = f - 30 - 4;
        for (let n = 0; n < C.length; n++) {
            let r = C[n],
                o = A.current[r.id];
            if (null != o) {
                if ((l += o.offsetWidth + 4) > s) break;
                e++;
            }
        }
        N((l) => (e < C.length ? e : l));
    }, [m, f, C]);
    let _ = U.default.getCurrentUser();
    a()(null != _, "MemberRolesList: currentUser cannot be undefined");
    let P = !g && O.A.can(V.xBc.MANAGE_ROLES, o),
        E = D.HJ(o, _.id),
        S = r.useMemo(() => `roles-${(0, d.A)()}`, []),
        k = (0, u.Ay)({ id: S, isEnabled: !0, scrollToStart: B, scrollToEnd: B, wrap: !0 }),
        T = C.map((e) =>
            (0, n.jsx)(
                K,
                {
                    className: j,
                    role: e,
                    canRemove: e.tags?.guild_connections === null ? s.id === _.id : P && D.wO(o, _.id, E, e),
                    onRemove: () => R(e),
                    ref: (l) => {
                        var s;
                        return (s = e.id), void (null != l ? (A.current[s] = l) : delete A.current[s]);
                    },
                    guildId: o.id,
                    disableBorderColor: b,
                },
                e.id,
            ),
        );
    return (
        null != v && 0 !== M
            ? (l = (0, n.jsx)(Q, { ...e, numRolesHidden: M }))
            : P && (l = (0, n.jsx)(X, { ...e, handleAddRole: p })),
        (0, n.jsx)(c.hD, {
            navigator: k,
            children: (0, n.jsx)(c.PR, {
                children: (e) => {
                    let { ref: s, ...r } = e;
                    return (0, n.jsxs)("div", {
                        className: i()(J.zr, h),
                        "aria-label": W.intl.formatToPlainString(W.t.PCs0oo, { numRoles: t.length }),
                        ref: s,
                        ...r,
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
        (0, x.bG)([O.A], () => O.A.getGuildVersion(e.guild?.id)),
        !1 === e.wrap ? (0, n.jsx)(Z, { ...e }) : (0, n.jsx)(q, { ...e })
    );
}
