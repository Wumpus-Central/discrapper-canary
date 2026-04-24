"use strict";
l.d(t, { Ay: () => ee, b_: () => $ });
var n = l(627968),
    i = l(64700),
    s = l(503698),
    a = l.n(s),
    r = l(284009),
    o = l.n(r),
    d = l(132500),
    c = l(837381),
    u = l(887129),
    h = l(317097),
    g = l(17928),
    m = l(661531),
    p = l(305866),
    x = l(138134),
    _ = l(602853),
    A = l(545442),
    f = l(187322),
    b = l(939249),
    C = l(789645),
    S = l(834730),
    v = l(922016),
    N = l(307301),
    j = l(442433),
    E = l(686956),
    I = l(456412),
    T = l(775602),
    y = l(87e3),
    R = l(235986),
    M = l(915089),
    L = l(201275),
    w = l(997509),
    O = l(967144),
    D = l(657048),
    G = l(1659),
    P = l(465738),
    k = l(34457),
    B = l(696451),
    U = l(317525),
    F = l(576705),
    H = l(287809),
    V = l(488926),
    z = l(652215),
    W = l(985018),
    Z = l(349887);
let J = () => Promise.resolve();
function Y(e) {
    let { userRoleIds: t, position: l, ...i } = e,
        s = (0, M.GV)();
    return (0, n.jsxs)(p.l, {
        className: a()(Z.Jo, { [Z.Vf]: "bottom" === l, [Z.vy]: "top" === l }),
        "aria-labelledby": s,
        children: [
            (0, n.jsx)("div", { className: Z.rF, children: (0, n.jsx)("div", { className: Z.QG }) }),
            (0, n.jsxs)(R.A, {
                className: Z.q0,
                align: R.A.Align.CENTER,
                children: [
                    (0, n.jsx)(x.i, { size: "xs", color: m.A.unsafe_rawColors.PRIMARY_400.css, className: Z.LP }),
                    (0, n.jsx)("div", {
                        className: Z.VT,
                        id: s,
                        children: W.intl.format(W.t.PCs0oo, { numRoles: t.length }),
                    }),
                ],
            }),
            (0, n.jsx)(q, { ...i, wrap: !0, userRoleIds: t }),
        ],
    });
}
let $ = i.forwardRef(function (e, t) {
    let s,
        {
            canRemove: r,
            className: o,
            role: d,
            onRemove: u,
            guildId: p,
            disableBorderColor: x,
            onMouseDown: v,
            guild: N,
        } = e,
        { tabIndex: E, ...I } = (0, c.rm)(d.id),
        R = (0, L.$7)({ roleId: d.id, size: 16, guildId: p, role: d, guild: N }),
        M = (0, g.bG)([T.A], () => T.A.roleStyle),
        w = (0, O.X_)(p, void 0, d.colorStrings),
        G = d.tags?.guild_connections === null,
        P = i.useCallback(
            (e) => {
                (0, j.L3)(e, async () => {
                    let { default: e } = await l.e("15687").then(l.bind(l, 646938));
                    return (t) => (0, n.jsx)(e, { ...t, id: d.id, label: W.intl.string(W.t.sMsaLg) });
                });
            },
            [d.id],
        ),
        k = (0, _.r)(m.A.unsafe_rawColors.PRIMARY_300).hsl(),
        B = d.colorString ?? k,
        U = (0, h.xp)(B, 0.6) ?? void 0,
        F = m.A.unsafe_rawColors.WHITE.css,
        H = (0, h.LX)(B);
    null != H && 0.3 > (0, h.OK)(H) && (F = m.A.unsafe_rawColors.PRIMARY_630.css),
        (s = G
            ? (0, n.jsx)(y.A, { className: Z.U4, iconClassName: r ? Z.gD : void 0, color: B, size: 14 })
            : "dot" === M
              ? (0, n.jsx)(A.W, { className: Z.m4, color: B, colors: w, background: !1, tooltip: !1 })
              : (0, n.jsx)(A.R, { color: B, colors: w }));
    let V = i.useMemo(() => ({ borderColor: x ? void 0 : U, ...(e.style ?? {}) }), [U, x, e.style]);
    return (0, n.jsx)(f.vN, {
        children: (0, n.jsxs)("div", {
            ref: t,
            className: a()(Z.JC, o),
            style: V,
            onContextMenu: P,
            onMouseDown: v,
            "aria-label": d.name,
            tabIndex: E,
            ...I,
            children: [
                (0, n.jsxs)(b.D, {
                    className: a()(r && Z.jH, Z.j1),
                    onClick: r ? u : void 0,
                    tabIndex: r ? E : -1,
                    focusProps: { focusClassName: Z.vZ },
                    "aria-hidden": !r,
                    "aria-label": W.intl.formatToPlainString(W.t.QrxwhY, { roleName: d.name }),
                    children: [
                        s,
                        r ? (0, n.jsx)(C.P, { size: "md", color: F, className: Z.s$, "aria-hidden": !0 }) : null,
                    ],
                }),
                null != R ? (0, n.jsx)(D.A, { className: Z.UT, ...R, enableTooltip: !1 }) : null,
                (0, n.jsx)("div", {
                    "aria-hidden": !0,
                    className: Z.S3,
                    children: (0, n.jsx)(S.E, { variant: "text-xs/medium", className: Z.sH, children: d.name }),
                }),
            ],
        }),
    });
});
function Q(e) {
    let { user: t, numRolesHidden: l, roleClassName: s } = e,
        r = (0, c.rm)(`overflow-more-roles-${t.id}`),
        o = i.useRef(null);
    return (0, n.jsx)(v.Y, {
        targetElementRef: o,
        renderPopout: (t) => {
            let { position: l } = t;
            return (0, n.jsx)(Y, { ...e, position: l ?? "top" });
        },
        position: "top",
        align: "center",
        children: (e) =>
            (0, n.jsx)(f.vN, {
                children: (0, n.jsx)("button", { ref: o, ...e, className: a()(Z.lv, s), ...r, children: `+${l}` }),
            }),
    });
}
function X(e) {
    let t = i.useRef(null),
        { guild: l, user: s, handleAddRole: r, roleClassName: o, addButtonClassName: d, addButtonIconClassName: u } = e,
        h = (0, c.rm)(`overflow-add-roles-${s.id}`),
        m = (0, g.bG)([T.A], () => T.A.roleStyle),
        p = F.A.getHighestRole(l),
        x = B.Ay.getMember(l.id, s.id),
        _ = (e) =>
            !(0, k.Oy)(e) && !e.managed && F.A.isRoleHigher(l, p, e) && (null == x || -1 === x.roles.indexOf(e.id));
    return (0, n.jsx)(v.Y, {
        targetElementRef: t,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, n.jsx)(P.A, { guild: l, roleStyle: m, roleFilter: _, onSelect: r, onClose: t });
        },
        position: "bottom",
        align: "center",
        children: (e) =>
            (0, n.jsx)(f.vN, {
                children: (0, n.jsx)("button", {
                    ref: t,
                    ...e,
                    className: a()(Z.c9, o, d),
                    "aria-label": W.intl.string(W.t.e3Wlyw),
                    type: "button",
                    ...h,
                    children: (0, n.jsx)(N.j, {
                        size: "md",
                        color: "currentColor",
                        className: a()(Z.hs, u),
                        "aria-hidden": !0,
                    }),
                }),
            }),
    });
}
function q(e) {
    let t,
        {
            user: l,
            guild: s,
            userRoleIds: r,
            wrap: h = !0,
            width: m,
            className: p,
            readOnly: x,
            roleClassName: _,
            disableBorderColor: A,
        } = e,
        f = i.useRef({}),
        b = i.useCallback(
            (e) => {
                let t = r.filter((t) => t !== e.id);
                e.tags?.guild_connections === null
                    ? E.A.unassignGuildRoleConnection(s.id, e.id)
                    : w.A.updateMemberRoles(s.id, l.id, t, [], [e.id]);
            },
            [r, s.id, l.id],
        ),
        C = i.useCallback(
            (e) => {
                let t = r;
                t.includes(e) || (t = [...t, e]), w.A.updateMemberRoles(s.id, l.id, t, [e], []);
            },
            [r, s.id, l.id],
        ),
        [S, v] = i.useState(null),
        N = (0, g.yK)([U.A], () => U.A.getManyRoles(s.id, r).sort(G.m)),
        j = i.useMemo(() => (null != S ? N.slice(0, S) : N), [N, S]),
        I = r.length - j.length;
    i.useLayoutEffect(() => {
        if (h) return;
        if ("number" != typeof m) throw Error("Unexpected null width");
        if (0 === m) return;
        let e = 0,
            t = 0,
            l = m - 30 - 4;
        for (let n = 0; n < j.length; n++) {
            let i = j[n],
                s = f.current[i.id];
            if (null != s) {
                if ((t += s.offsetWidth + 4) > l) break;
                e++;
            }
        }
        v((t) => (e < j.length ? e : t));
    }, [h, m, j]);
    let T = H.default.getCurrentUser();
    o()(null != T, "MemberRolesList: currentUser cannot be undefined");
    let y = !x && F.A.can(z.xBc.MANAGE_ROLES, s),
        R = V.HJ(s, T.id),
        M = i.useMemo(() => `roles-${(0, d.A)()}`, []),
        L = (0, u.Ay)({ id: M, isEnabled: !0, scrollToStart: J, scrollToEnd: J, wrap: !0 }),
        O = j.map((e) =>
            (0, n.jsx)(
                $,
                {
                    className: _,
                    role: e,
                    canRemove: e.tags?.guild_connections === null ? l.id === T.id : y && V.wO(s, T.id, R, e),
                    onRemove: () => b(e),
                    ref: (t) => {
                        var l;
                        return (l = e.id), void (null != t ? (f.current[l] = t) : delete f.current[l]);
                    },
                    guildId: s.id,
                    disableBorderColor: A,
                },
                e.id,
            ),
        );
    return (
        null != S && 0 !== I
            ? (t = (0, n.jsx)(Q, { ...e, numRolesHidden: I }))
            : y && (t = (0, n.jsx)(X, { ...e, handleAddRole: C })),
        (0, n.jsx)(c.hD, {
            navigator: L,
            children: (0, n.jsx)(c.PR, {
                children: (e) => {
                    let { ref: l, ...i } = e;
                    return (0, n.jsxs)("div", {
                        className: a()(Z.zr, p),
                        "aria-label": W.intl.formatToPlainString(W.t.PCs0oo, { numRoles: r.length }),
                        ref: l,
                        ...i,
                        children: [O, t],
                    });
                },
            }),
        })
    );
}
let K = (0, I.A)(q);
function ee(e) {
    return (
        (0, g.bG)([F.A], () => F.A.getGuildVersion(e.guild?.id)),
        !1 === e.wrap ? (0, n.jsx)(K, { ...e }) : (0, n.jsx)(q, { ...e })
    );
}
