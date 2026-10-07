s.d(l, { Ay: () => ee, b_: () => B });
var n = s(477900),
    r = s(582128),
    o = s(503698),
    t = s.n(o),
    i = s(284009),
    a = s.n(i),
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
    R = s(559106),
    p = s(939249),
    v = s(789645),
    N = s(922016),
    y = s(307301),
    C = s(442433),
    w = s(66834),
    M = s(456412),
    P = s(775602),
    _ = s(63104),
    E = s(235986),
    S = s(915089),
    k = s(468689),
    I = s(967144),
    T = s(69282),
    G = s(657048),
    H = s(1659),
    L = s(465738),
    z = s(34457),
    Y = s(696451),
    O = s(317525),
    U = s(576705),
    $ = s(287809),
    D = s(488926),
    V = s(652215),
    W = s(375708),
    F = s(371418);
let J = () => Promise.resolve();
function X(e) {
    let { userRoleIds: l, position: s, ...r } = e,
        o = (0, S.GV)();
    return (0, n.jsxs)(h.l, {
        className: t()(F.Jo, { [F.Vf]: "bottom" === s, [F.vy]: "top" === s }),
        "aria-labelledby": o,
        children: [
            (0, n.jsx)("div", { className: F.rF, children: (0, n.jsx)("div", { className: F.QG }) }),
            (0, n.jsxs)(E.A, {
                className: F.q0,
                align: E.A.Align.CENTER,
                children: [
                    (0, n.jsx)(g.FlagIcon, {
                        size: "xs",
                        color: f.A.unsafe_rawColors.PRIMARY_400.css,
                        className: F.LP,
                    }),
                    (0, n.jsx)(j.E, {
                        variant: "text-xs/bold",
                        color: "none",
                        className: F.VT,
                        id: o,
                        children: W.intl.format(W.t.PCs0oo, { numRoles: l.length }),
                    }),
                ],
            }),
            (0, n.jsx)(q, { ...r, wrap: !0, userRoleIds: l }),
        ],
    });
}
function B(e) {
    let l,
        { ref: o, ...i } = e,
        {
            canRemove: a,
            className: d,
            role: u,
            onRemove: h,
            guildId: g,
            disableBorderColor: N,
            onMouseDown: y,
            guild: w,
        } = i,
        { tabIndex: M, ...E } = (0, c.rm)(u.id),
        S = (0, T.Xx)({ roleId: u.id, size: 16, guildId: g, role: u, guild: w }),
        k = (0, x.bG)([P.Ay], () => P.Ay.roleStyle),
        H = (0, I.X_)(g, void 0, u.colorStrings),
        L = u.tags?.guild_connections === null,
        z = r.useCallback(
            (e) => {
                (0, C.L3)(e, async () => {
                    let { default: e } = await Promise.all([s.e("638221"), s.e("715687")]).then(s.bind(s, 646938));
                    return (l) => (0, n.jsx)(e, { ...l, id: u.id, label: W.intl.string(W.t.sMsaLg) });
                });
            },
            [u.id],
        ),
        Y = (0, b.r)(f.A.unsafe_rawColors.PRIMARY_300).hsl(),
        O = u.colorString ?? Y,
        U = (0, m.xp)(O, 0.6) ?? void 0,
        $ = f.A.unsafe_rawColors.WHITE.css,
        D = (0, m.LX)(O);
    (null != D && 0.3 > (0, m.OK)(D) && ($ = f.A.unsafe_rawColors.PRIMARY_630.css),
        (l = L
            ? (0, n.jsx)(_.A, { className: F.U4, iconClassName: a ? F.gD : void 0, color: O, size: 14 })
            : "dot" === k
              ? (0, n.jsx)(A.W, { className: F.m4, color: O, colors: H, background: !1, tooltip: !1 })
              : (0, n.jsx)(A.R, { color: O, colors: H })));
    let V = r.useMemo(() => ({ borderColor: N ? void 0 : U, ...(i.style ?? {}) }), [U, N, i.style]);
    return (0, n.jsx)(R.vN, {
        children: (0, n.jsxs)("div", {
            ref: o,
            className: t()(F.JC, d),
            style: V,
            onContextMenu: z,
            onMouseDown: y,
            "aria-label": u.name,
            tabIndex: M,
            ...E,
            children: [
                (0, n.jsxs)(p.D, {
                    className: t()(a && F.jH, F.j1),
                    onClick: a ? h : void 0,
                    tabIndex: a ? M : -1,
                    focusProps: { focusClassName: F.vZ },
                    "aria-hidden": !a,
                    "aria-label": W.intl.formatToPlainString(W.t.QrxwhY, { roleName: u.name }),
                    children: [
                        l,
                        a ? (0, n.jsx)(v.P, { size: "md", color: $, className: F.s$, "aria-hidden": !0 }) : null,
                    ],
                }),
                null != S ? (0, n.jsx)(G.A, { className: F.UT, ...S, enableTooltip: !1 }) : null,
                (0, n.jsx)("div", {
                    "aria-hidden": !0,
                    className: F.S3,
                    children: (0, n.jsx)(j.E, { variant: "text-xs/medium", className: F.sH, children: u.name }),
                }),
            ],
        }),
    });
}
function K(e) {
    let { user: l, numRolesHidden: s, roleClassName: o } = e,
        i = (0, c.rm)(`overflow-more-roles-${l.id}`),
        a = r.useRef(null);
    return (0, n.jsx)(N.Y, {
        targetElementRef: a,
        renderPopout: (l) => {
            let { position: s } = l;
            return (0, n.jsx)(X, { ...e, position: s ?? "top" });
        },
        position: "top",
        align: "center",
        children: (e) =>
            (0, n.jsx)(R.vN, {
                children: (0, n.jsx)("button", { ref: a, ...e, className: t()(F.lv, o), ...i, children: `+${s}` }),
            }),
    });
}
function Q(e) {
    let l = r.useRef(null),
        { guild: s, user: o, handleAddRole: i, roleClassName: a, addButtonClassName: d, addButtonIconClassName: u } = e,
        m = (0, c.rm)(`overflow-add-roles-${o.id}`),
        f = (0, x.bG)([P.Ay], () => P.Ay.roleStyle),
        h = U.A.getHighestRole(s),
        g = Y.Ay.getMember(s.id, o.id);
    function j(e) {
        return !(0, z.Oy)(e) && !e.managed && U.A.isRoleHigher(s, h, e) && (null == g || -1 === g.roles.indexOf(e.id));
    }
    return (0, n.jsx)(N.Y, {
        targetElementRef: l,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, n.jsx)(L.A, { guild: s, roleStyle: f, roleFilter: j, onSelect: i, onClose: l });
        },
        position: "bottom",
        align: "center",
        children: (e) =>
            (0, n.jsx)(R.vN, {
                children: (0, n.jsx)("button", {
                    ref: l,
                    ...e,
                    className: t()(F.c9, a, d),
                    "aria-label": W.intl.string(W.t.e3Wlyw),
                    type: "button",
                    ...m,
                    children: (0, n.jsx)(y.j, {
                        size: "md",
                        color: "currentColor",
                        className: t()(F.hs, u),
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
            userRoleIds: i,
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
                let l = i.filter((l) => l !== e.id);
                e.tags?.guild_connections === null
                    ? w.A.unassignGuildRoleConnection(o.id, e.id)
                    : k.default.updateMemberRoles(o.id, s.id, l, [], [e.id]);
            },
            [i, o.id, s.id],
        ),
        p = r.useCallback(
            (e) => {
                let l = i;
                (l.includes(e) || (l = [...l, e]), k.default.updateMemberRoles(o.id, s.id, l, [e], []));
            },
            [i, o.id, s.id],
        ),
        [v, N] = r.useState(null),
        y = (0, x.yK)([O.A], () => O.A.getManyRoles(o.id, i).sort(H.m)),
        C = r.useMemo(() => (null != v ? y.slice(0, v) : y), [y, v]),
        M = i.length - C.length;
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
    let P = $.default.getCurrentUser();
    a()(null != P, "MemberRolesList: currentUser cannot be undefined");
    let _ = !g && U.A.can(V.xBc.MANAGE_ROLES, o),
        E = D.HJ(o, P.id),
        S = r.useMemo(() => `roles-${(0, d.A)()}`, []),
        I = (0, u.Ay)({ id: S, isEnabled: !0, scrollToStart: J, scrollToEnd: J, wrap: !0 }),
        T = C.map((e) =>
            (0, n.jsx)(
                B,
                {
                    className: j,
                    role: e,
                    canRemove: e.tags?.guild_connections === null ? s.id === P.id : _ && D.wO(o, P.id, E, e),
                    onRemove: () => R(e),
                    ref: (l) => {
                        var s;
                        return ((s = e.id), void (null != l ? (A.current[s] = l) : delete A.current[s]));
                    },
                    guildId: o.id,
                    disableBorderColor: b,
                },
                e.id,
            ),
        );
    return (
        null != v && 0 !== M
            ? (l = (0, n.jsx)(K, { ...e, numRolesHidden: M }))
            : _ && (l = (0, n.jsx)(Q, { ...e, handleAddRole: p })),
        (0, n.jsx)(c.hD, {
            navigator: I,
            children: (0, n.jsx)(c.PR, {
                children: (e) => {
                    let { ref: s, ...r } = e;
                    return (0, n.jsxs)("div", {
                        className: t()(F.zr, h),
                        "aria-label": W.intl.formatToPlainString(W.t.PCs0oo, { numRoles: i.length }),
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
        (0, x.bG)([U.A], () => U.A.getGuildVersion(e.guild?.id)),
        !1 === e.wrap ? (0, n.jsx)(Z, { ...e }) : (0, n.jsx)(q, { ...e })
    );
}
