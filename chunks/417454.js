l.d(t, { Ay: () => W, b_: () => V });
var n = l(627968),
    r = l(64700),
    i = l(503698),
    s = l.n(i),
    o = l(284009),
    a = l.n(o),
    d = l(835245),
    c = l(837381),
    u = l(884362),
    E = l(317097),
    _ = l(311907),
    C = l(827734),
    S = l(397927),
    h = l(442433),
    f = l(686956),
    A = l(456412),
    p = l(775602),
    g = l(63104),
    R = l(235986),
    m = l(915089),
    I = l(201275),
    D = l(997509),
    T = l(967144),
    O = l(657048),
    G = l(1659),
    x = l(465738),
    F = l(34457),
    N = l(696451),
    y = l(317525),
    U = l(576705),
    v = l(287809),
    b = l(488926),
    L = l(652215),
    j = l(985018),
    M = l(743630);
let w = () => Promise.resolve();
function P(e) {
    let { userRoleIds: t, position: l, ...r } = e,
        i = (0, m.GV)();
    return (0, n.jsxs)(S.lGe, {
        className: s()(M.Jo, { [M.Vf]: "bottom" === l, [M.vy]: "top" === l }),
        "aria-labelledby": i,
        children: [
            (0, n.jsx)("div", { className: M.rF, children: (0, n.jsx)("div", { className: M.QG }) }),
            (0, n.jsxs)(R.A, {
                className: M.q0,
                align: R.A.Align.CENTER,
                children: [
                    (0, n.jsx)(S.iFK, { size: "xs", color: C.A.unsafe_rawColors.PRIMARY_400.css, className: M.LP }),
                    (0, n.jsx)("div", {
                        className: M.VT,
                        id: i,
                        children: j.intl.format(j.t.PCs0oo, { numRoles: t.length }),
                    }),
                ],
            }),
            (0, n.jsx)(K, { ...r, wrap: !0, userRoleIds: t }),
        ],
    });
}
let V = r.forwardRef(function (e, t) {
    let i,
        {
            canRemove: o,
            className: a,
            role: d,
            onRemove: u,
            guildId: f,
            disableBorderColor: A,
            onMouseDown: R,
            guild: m,
        } = e,
        { tabIndex: D, ...G } = (0, c.rm)(d.id),
        x = (0, I.$7)({ roleId: d.id, size: 16, guildId: f, role: d, guild: m }),
        F = (0, _.bG)([p.A], () => p.A.roleStyle),
        N = (0, T.X_)(f, void 0, d.colorStrings),
        y = d.tags?.guild_connections === null,
        U = r.useCallback(
            (e) => {
                (0, h.L3)(e, async () => {
                    let { default: e } = await l.e("15687").then(l.bind(l, 646938));
                    return (t) => (0, n.jsx)(e, { ...t, id: d.id, label: j.intl.string(j.t.sMsaLg) });
                });
            },
            [d.id],
        ),
        v = (0, S.rdh)(C.A.unsafe_rawColors.PRIMARY_300).hsl(),
        b = d.colorString ?? v,
        L = (0, E.xp)(b, 0.6) ?? void 0,
        w = C.A.unsafe_rawColors.WHITE.css,
        P = (0, E.LX)(b);
    null != P && 0.3 > (0, E.OK)(P) && (w = C.A.unsafe_rawColors.PRIMARY_630.css),
        (i = y
            ? (0, n.jsx)(g.A, { className: M.U4, iconClassName: o ? M.gD : void 0, color: b, size: 14 })
            : "dot" === F
              ? (0, n.jsx)(S.WYI, { className: M.m4, color: b, colors: N, background: !1, tooltip: !1 })
              : (0, n.jsx)(S.RYH, { color: b, colors: N }));
    let V = r.useMemo(() => ({ borderColor: A ? void 0 : L, ...(e.style ?? {}) }), [L, A, e.style]);
    return (0, n.jsx)(S.vN3, {
        children: (0, n.jsxs)("div", {
            ref: t,
            className: s()(M.JC, a),
            style: V,
            onContextMenu: U,
            onMouseDown: R,
            "aria-label": d.name,
            tabIndex: D,
            ...G,
            children: [
                (0, n.jsxs)(S.DUT, {
                    className: s()(o && M.jH, M.j1),
                    onClick: o ? u : void 0,
                    tabIndex: o ? D : -1,
                    focusProps: { focusClassName: M.vZ },
                    "aria-hidden": !o,
                    "aria-label": j.intl.formatToPlainString(j.t.QrxwhY, { roleName: d.name }),
                    children: [
                        i,
                        o ? (0, n.jsx)(S.PGe, { size: "md", color: w, className: M.s$, "aria-hidden": !0 }) : null,
                    ],
                }),
                null != x ? (0, n.jsx)(O.A, { className: M.UT, ...x, enableTooltip: !1 }) : null,
                (0, n.jsx)("div", {
                    "aria-hidden": !0,
                    className: M.S3,
                    children: (0, n.jsx)(S.Text, { variant: "text-xs/medium", className: M.sH, children: d.name }),
                }),
            ],
        }),
    });
});
function k(e) {
    let { user: t, numRolesHidden: l, roleClassName: i } = e,
        o = (0, c.rm)(`overflow-more-roles-${t.id}`),
        a = r.useRef(null);
    return (0, n.jsx)(S.YNO, {
        targetElementRef: a,
        renderPopout: (t) => {
            let { position: l } = t;
            return (0, n.jsx)(P, { ...e, position: l ?? "top" });
        },
        position: "top",
        align: "center",
        children: (e) =>
            (0, n.jsx)(S.vN3, {
                children: (0, n.jsx)("button", { ref: a, ...e, className: s()(M.lv, i), ...o, children: `+${l}` }),
            }),
    });
}
function H(e) {
    let t = r.useRef(null),
        { guild: l, user: i, handleAddRole: o, roleClassName: a, addButtonClassName: d, addButtonIconClassName: u } = e,
        E = (0, c.rm)(`overflow-add-roles-${i.id}`),
        C = (0, _.bG)([p.A], () => p.A.roleStyle),
        h = U.A.getHighestRole(l),
        f = N.Ay.getMember(l.id, i.id),
        A = (e) =>
            !(0, F.Oy)(e) && !e.managed && U.A.isRoleHigher(l, h, e) && (null == f || -1 === f.roles.indexOf(e.id));
    return (0, n.jsx)(S.YNO, {
        targetElementRef: t,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, n.jsx)(x.A, { guild: l, roleStyle: C, roleFilter: A, onSelect: o, onClose: t });
        },
        position: "bottom",
        align: "center",
        children: (e) =>
            (0, n.jsx)(S.vN3, {
                children: (0, n.jsx)("button", {
                    ref: t,
                    ...e,
                    className: s()(M.c9, a, d),
                    "aria-label": j.intl.string(j.t.e3Wlyw),
                    type: "button",
                    ...E,
                    children: (0, n.jsx)(S.j96, {
                        size: "md",
                        color: "currentColor",
                        className: s()(M.hs, u),
                        "aria-hidden": !0,
                    }),
                }),
            }),
    });
}
function K(e) {
    let t,
        {
            user: l,
            guild: i,
            userRoleIds: o,
            wrap: E = !0,
            width: C,
            className: S,
            readOnly: h,
            roleClassName: A,
            disableBorderColor: p,
        } = e,
        g = r.useRef({}),
        R = r.useCallback(
            (e) => {
                let t = o.filter((t) => t !== e.id);
                e.tags?.guild_connections === null
                    ? f.A.unassignGuildRoleConnection(i.id, e.id)
                    : D.A.updateMemberRoles(i.id, l.id, t, [], [e.id]);
            },
            [o, i.id, l.id],
        ),
        m = r.useCallback(
            (e) => {
                let t = o;
                t.includes(e) || (t = [...t, e]), D.A.updateMemberRoles(i.id, l.id, t, [e], []);
            },
            [o, i.id, l.id],
        ),
        [I, T] = r.useState(null),
        O = (0, _.yK)([y.A], () => y.A.getManyRoles(i.id, o).sort(G.m)),
        x = r.useMemo(() => (null != I ? O.slice(0, I) : O), [O, I]),
        F = o.length - x.length;
    r.useLayoutEffect(() => {
        if (E) return;
        if ("number" != typeof C) throw Error("Unexpected null width");
        if (0 === C) return;
        let e = 0,
            t = 0,
            l = C - 30 - 4;
        for (let n = 0; n < x.length; n++) {
            let r = x[n],
                i = g.current[r.id];
            if (null != i) {
                if ((t += i.offsetWidth + 4) > l) break;
                e++;
            }
        }
        T((t) => (e < x.length ? e : t));
    }, [E, C, x]);
    let N = v.default.getCurrentUser();
    a()(null != N, "MemberRolesList: currentUser cannot be undefined");
    let P = !h && U.A.can(L.xBc.MANAGE_ROLES, i),
        K = b.HJ(i, N.id),
        Y = r.useMemo(() => `roles-${(0, d.A)()}`, []),
        W = (0, u.Ay)({ id: Y, isEnabled: !0, scrollToStart: w, scrollToEnd: w, wrap: !0 }),
        B = x.map((e) =>
            (0, n.jsx)(
                V,
                {
                    className: A,
                    role: e,
                    canRemove: e.tags?.guild_connections === null ? l.id === N.id : P && b.wO(i, N.id, K, e),
                    onRemove: () => R(e),
                    ref: (t) => {
                        var l;
                        return (l = e.id), void (null != t ? (g.current[l] = t) : delete g.current[l]);
                    },
                    guildId: i.id,
                    disableBorderColor: p,
                },
                e.id,
            ),
        );
    return (
        null != I && 0 !== F
            ? (t = (0, n.jsx)(k, { ...e, numRolesHidden: F }))
            : P && (t = (0, n.jsx)(H, { ...e, handleAddRole: m })),
        (0, n.jsx)(c.hD, {
            navigator: W,
            children: (0, n.jsx)(c.PR, {
                children: (e) => {
                    let { ref: l, ...r } = e;
                    return (0, n.jsxs)("div", {
                        className: s()(M.zr, S),
                        "aria-label": j.intl.formatToPlainString(j.t.PCs0oo, { numRoles: o.length }),
                        ref: l,
                        ...r,
                        children: [B, t],
                    });
                },
            }),
        })
    );
}
let Y = (0, A.A)(K);
function W(e) {
    return (
        (0, _.bG)([U.A], () => U.A.getGuildVersion(e.guild?.id)),
        !1 === e.wrap ? (0, n.jsx)(Y, { ...e }) : (0, n.jsx)(K, { ...e })
    );
}
