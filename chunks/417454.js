l.d(t, { Ay: () => ee, b_: () => z });
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
    S = l(827734),
    C = l(305866),
    h = l(138134),
    f = l(602853),
    A = l(545442),
    g = l(187322),
    p = l(939249),
    m = l(789645),
    R = l(834730),
    I = l(265872),
    D = l(307301),
    T = l(442433),
    O = l(686956),
    x = l(456412),
    G = l(775602),
    F = l(63104),
    v = l(235986),
    N = l(915089),
    y = l(201275),
    b = l(997509),
    j = l(967144),
    U = l(657048),
    L = l(1659),
    M = l(465738),
    w = l(34457),
    P = l(696451),
    k = l(317525),
    V = l(576705),
    H = l(287809),
    K = l(488926),
    W = l(652215),
    Y = l(985018),
    B = l(349887);
let J = () => Promise.resolve();
function $(e) {
    let { userRoleIds: t, position: l, ...r } = e,
        i = (0, N.GV)();
    return (0, n.jsxs)(C.l, {
        className: s()(B.Jo, { [B.Vf]: "bottom" === l, [B.vy]: "top" === l }),
        "aria-labelledby": i,
        children: [
            (0, n.jsx)("div", { className: B.rF, children: (0, n.jsx)("div", { className: B.QG }) }),
            (0, n.jsxs)(v.A, {
                className: B.q0,
                align: v.A.Align.CENTER,
                children: [
                    (0, n.jsx)(h.i, { size: "xs", color: S.A.unsafe_rawColors.PRIMARY_400.css, className: B.LP }),
                    (0, n.jsx)("div", {
                        className: B.VT,
                        id: i,
                        children: Y.intl.format(Y.t.PCs0oo, { numRoles: t.length }),
                    }),
                ],
            }),
            (0, n.jsx)(q, { ...r, wrap: !0, userRoleIds: t }),
        ],
    });
}
let z = r.forwardRef(function (e, t) {
    let i,
        {
            canRemove: o,
            className: a,
            role: d,
            onRemove: u,
            guildId: C,
            disableBorderColor: h,
            onMouseDown: I,
            guild: D,
        } = e,
        { tabIndex: O, ...x } = (0, c.rm)(d.id),
        v = (0, y.$7)({ roleId: d.id, size: 16, guildId: C, role: d, guild: D }),
        N = (0, _.bG)([G.A], () => G.A.roleStyle),
        b = (0, j.X_)(C, void 0, d.colorStrings),
        L = d.tags?.guild_connections === null,
        M = r.useCallback(
            (e) => {
                (0, T.L3)(e, async () => {
                    let { default: e } = await l.e("15687").then(l.bind(l, 646938));
                    return (t) => (0, n.jsx)(e, { ...t, id: d.id, label: Y.intl.string(Y.t.sMsaLg) });
                });
            },
            [d.id],
        ),
        w = (0, f.r)(S.A.unsafe_rawColors.PRIMARY_300).hsl(),
        P = d.colorString ?? w,
        k = (0, E.xp)(P, 0.6) ?? void 0,
        V = S.A.unsafe_rawColors.WHITE.css,
        H = (0, E.LX)(P);
    null != H && 0.3 > (0, E.OK)(H) && (V = S.A.unsafe_rawColors.PRIMARY_630.css),
        (i = L
            ? (0, n.jsx)(F.A, { className: B.U4, iconClassName: o ? B.gD : void 0, color: P, size: 14 })
            : "dot" === N
              ? (0, n.jsx)(A.W, { className: B.m4, color: P, colors: b, background: !1, tooltip: !1 })
              : (0, n.jsx)(A.R, { color: P, colors: b }));
    let K = r.useMemo(() => ({ borderColor: h ? void 0 : k, ...(e.style ?? {}) }), [k, h, e.style]);
    return (0, n.jsx)(g.vN, {
        children: (0, n.jsxs)("div", {
            ref: t,
            className: s()(B.JC, a),
            style: K,
            onContextMenu: M,
            onMouseDown: I,
            "aria-label": d.name,
            tabIndex: O,
            ...x,
            children: [
                (0, n.jsxs)(p.D, {
                    className: s()(o && B.jH, B.j1),
                    onClick: o ? u : void 0,
                    tabIndex: o ? O : -1,
                    focusProps: { focusClassName: B.vZ },
                    "aria-hidden": !o,
                    "aria-label": Y.intl.formatToPlainString(Y.t.QrxwhY, { roleName: d.name }),
                    children: [
                        i,
                        o ? (0, n.jsx)(m.P, { size: "md", color: V, className: B.s$, "aria-hidden": !0 }) : null,
                    ],
                }),
                null != v ? (0, n.jsx)(U.A, { className: B.UT, ...v, enableTooltip: !1 }) : null,
                (0, n.jsx)("div", {
                    "aria-hidden": !0,
                    className: B.S3,
                    children: (0, n.jsx)(R.E, { variant: "text-xs/medium", className: B.sH, children: d.name }),
                }),
            ],
        }),
    });
});
function Z(e) {
    let { user: t, numRolesHidden: l, roleClassName: i } = e,
        o = (0, c.rm)(`overflow-more-roles-${t.id}`),
        a = r.useRef(null);
    return (0, n.jsx)(I.Y, {
        targetElementRef: a,
        renderPopout: (t) => {
            let { position: l } = t;
            return (0, n.jsx)($, { ...e, position: l ?? "top" });
        },
        position: "top",
        align: "center",
        children: (e) =>
            (0, n.jsx)(g.vN, {
                children: (0, n.jsx)("button", { ref: a, ...e, className: s()(B.lv, i), ...o, children: `+${l}` }),
            }),
    });
}
function X(e) {
    let t = r.useRef(null),
        { guild: l, user: i, handleAddRole: o, roleClassName: a, addButtonClassName: d, addButtonIconClassName: u } = e,
        E = (0, c.rm)(`overflow-add-roles-${i.id}`),
        S = (0, _.bG)([G.A], () => G.A.roleStyle),
        C = V.A.getHighestRole(l),
        h = P.Ay.getMember(l.id, i.id),
        f = (e) =>
            !(0, w.Oy)(e) && !e.managed && V.A.isRoleHigher(l, C, e) && (null == h || -1 === h.roles.indexOf(e.id));
    return (0, n.jsx)(I.Y, {
        targetElementRef: t,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, n.jsx)(M.A, { guild: l, roleStyle: S, roleFilter: f, onSelect: o, onClose: t });
        },
        position: "bottom",
        align: "center",
        children: (e) =>
            (0, n.jsx)(g.vN, {
                children: (0, n.jsx)("button", {
                    ref: t,
                    ...e,
                    className: s()(B.c9, a, d),
                    "aria-label": Y.intl.string(Y.t.e3Wlyw),
                    type: "button",
                    ...E,
                    children: (0, n.jsx)(D.j, {
                        size: "md",
                        color: "currentColor",
                        className: s()(B.hs, u),
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
            guild: i,
            userRoleIds: o,
            wrap: E = !0,
            width: S,
            className: C,
            readOnly: h,
            roleClassName: f,
            disableBorderColor: A,
        } = e,
        g = r.useRef({}),
        p = r.useCallback(
            (e) => {
                let t = o.filter((t) => t !== e.id);
                e.tags?.guild_connections === null
                    ? O.A.unassignGuildRoleConnection(i.id, e.id)
                    : b.A.updateMemberRoles(i.id, l.id, t, [], [e.id]);
            },
            [o, i.id, l.id],
        ),
        m = r.useCallback(
            (e) => {
                let t = o;
                t.includes(e) || (t = [...t, e]), b.A.updateMemberRoles(i.id, l.id, t, [e], []);
            },
            [o, i.id, l.id],
        ),
        [R, I] = r.useState(null),
        D = (0, _.yK)([k.A], () => k.A.getManyRoles(i.id, o).sort(L.m)),
        T = r.useMemo(() => (null != R ? D.slice(0, R) : D), [D, R]),
        x = o.length - T.length;
    r.useLayoutEffect(() => {
        if (E) return;
        if ("number" != typeof S) throw Error("Unexpected null width");
        if (0 === S) return;
        let e = 0,
            t = 0,
            l = S - 30 - 4;
        for (let n = 0; n < T.length; n++) {
            let r = T[n],
                i = g.current[r.id];
            if (null != i) {
                if ((t += i.offsetWidth + 4) > l) break;
                e++;
            }
        }
        I((t) => (e < T.length ? e : t));
    }, [E, S, T]);
    let G = H.default.getCurrentUser();
    a()(null != G, "MemberRolesList: currentUser cannot be undefined");
    let F = !h && V.A.can(W.xBc.MANAGE_ROLES, i),
        v = K.HJ(i, G.id),
        N = r.useMemo(() => `roles-${(0, d.A)()}`, []),
        y = (0, u.Ay)({ id: N, isEnabled: !0, scrollToStart: J, scrollToEnd: J, wrap: !0 }),
        j = T.map((e) =>
            (0, n.jsx)(
                z,
                {
                    className: f,
                    role: e,
                    canRemove: e.tags?.guild_connections === null ? l.id === G.id : F && K.wO(i, G.id, v, e),
                    onRemove: () => p(e),
                    ref: (t) => {
                        var l;
                        return (l = e.id), void (null != t ? (g.current[l] = t) : delete g.current[l]);
                    },
                    guildId: i.id,
                    disableBorderColor: A,
                },
                e.id,
            ),
        );
    return (
        null != R && 0 !== x
            ? (t = (0, n.jsx)(Z, { ...e, numRolesHidden: x }))
            : F && (t = (0, n.jsx)(X, { ...e, handleAddRole: m })),
        (0, n.jsx)(c.hD, {
            navigator: y,
            children: (0, n.jsx)(c.PR, {
                children: (e) => {
                    let { ref: l, ...r } = e;
                    return (0, n.jsxs)("div", {
                        className: s()(B.zr, C),
                        "aria-label": Y.intl.formatToPlainString(Y.t.PCs0oo, { numRoles: o.length }),
                        ref: l,
                        ...r,
                        children: [j, t],
                    });
                },
            }),
        })
    );
}
let Q = (0, x.A)(q);
function ee(e) {
    return (
        (0, _.bG)([V.A], () => V.A.getGuildVersion(e.guild?.id)),
        !1 === e.wrap ? (0, n.jsx)(Q, { ...e }) : (0, n.jsx)(q, { ...e })
    );
}
