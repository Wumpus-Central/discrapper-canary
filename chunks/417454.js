s.d(l, { Ay: () => es, b_: () => Q });
var n = s(477900),
    r = s(582128),
    t = s(503698),
    i = s.n(t),
    o = s(284009),
    a = s.n(o),
    d = s(132500),
    c = s(837381),
    u = s(887129),
    m = s(317097),
    x = s(17928),
    f = s(661531),
    h = s(858899),
    g = s(305866),
    j = s(138134),
    b = s(834730),
    A = s(602853),
    p = s(545442),
    R = s(559106),
    v = s(939249),
    N = s(789645),
    y = s(922016),
    C = s(307301),
    w = s(442433),
    P = s(66834),
    M = s(456412),
    _ = s(775602),
    E = s(63104),
    S = s(235986),
    k = s(915089),
    I = s(468689),
    T = s(967144),
    G = s(69282),
    H = s(657048),
    L = s(1659),
    z = s(465738),
    Y = s(34457),
    O = s(696451),
    U = s(317525),
    $ = s(576705),
    D = s(287809),
    J = s(488926),
    V = s(652215),
    W = s(660183),
    F = s(371418);
let X = () => Promise.resolve();
function B() {
    (0, h.P0)({ text: W.intl.string(W.t.fEptJP), variant: "critical" });
}
function K(e) {
    let { userRoleIds: l, position: s, ...r } = e,
        t = (0, k.GV)();
    return (0, n.jsxs)(g.l, {
        className: i()(F.Jo, { [F.Vf]: "bottom" === s, [F.vy]: "top" === s }),
        "aria-labelledby": t,
        children: [
            (0, n.jsx)("div", { className: F.rF, children: (0, n.jsx)("div", { className: F.QG }) }),
            (0, n.jsxs)(S.A, {
                className: F.q0,
                align: S.A.Align.CENTER,
                children: [
                    (0, n.jsx)(j.FlagIcon, {
                        size: "xs",
                        color: f.A.unsafe_rawColors.PRIMARY_400.css,
                        className: F.LP,
                    }),
                    (0, n.jsx)(b.E, {
                        variant: "text-xs/bold",
                        color: "none",
                        className: F.VT,
                        id: t,
                        children: W.intl.format(W.t.PCs0oo, { numRoles: l.length }),
                    }),
                ],
            }),
            (0, n.jsx)(ee, { ...r, wrap: !0, userRoleIds: l }),
        ],
    });
}
function Q(e) {
    let l,
        { ref: t, ...o } = e,
        {
            canRemove: a,
            className: d,
            role: u,
            onRemove: h,
            guildId: g,
            disableBorderColor: j,
            onMouseDown: y,
            guild: C,
        } = o,
        { tabIndex: P, ...M } = (0, c.rm)(u.id),
        S = (0, G.Xx)({ roleId: u.id, size: 16, guildId: g, role: u, guild: C }),
        k = (0, x.bG)([_.Ay], () => _.Ay.roleStyle),
        I = (0, T.X_)(g, void 0, u.colorStrings),
        L = u.tags?.guild_connections === null,
        z = r.useCallback(
            (e) => {
                (0, w.L3)(e, async () => {
                    let { default: e } = await Promise.all([s.e("638221"), s.e("715687")]).then(s.bind(s, 646938));
                    return (l) => (0, n.jsx)(e, { ...l, id: u.id, label: W.intl.string(W.t.sMsaLg) });
                });
            },
            [u.id],
        ),
        Y = (0, A.r)(f.A.unsafe_rawColors.PRIMARY_300).hsl(),
        O = u.colorString ?? Y,
        U = (0, m.xp)(O, 0.6) ?? void 0,
        $ = f.A.unsafe_rawColors.WHITE.css,
        D = (0, m.LX)(O);
    (null != D && 0.3 > (0, m.OK)(D) && ($ = f.A.unsafe_rawColors.PRIMARY_630.css),
        (l = L
            ? (0, n.jsx)(E.A, { className: F.U4, iconClassName: a ? F.gD : void 0, color: O, size: 14 })
            : "dot" === k
              ? (0, n.jsx)(p.W, { className: F.m4, color: O, colors: I, background: !1, tooltip: !1 })
              : (0, n.jsx)(p.R, { color: O, colors: I })));
    let J = r.useMemo(() => ({ borderColor: j ? void 0 : U, ...(o.style ?? {}) }), [U, j, o.style]);
    return (0, n.jsx)(R.vN, {
        children: (0, n.jsxs)("div", {
            ref: t,
            className: i()(F.JC, d),
            style: J,
            onContextMenu: z,
            onMouseDown: y,
            "aria-label": u.name,
            tabIndex: P,
            ...M,
            children: [
                (0, n.jsxs)(v.D, {
                    className: i()(a && F.jH, F.j1),
                    onClick: a ? h : void 0,
                    tabIndex: a ? P : -1,
                    focusProps: { focusClassName: F.vZ },
                    "aria-hidden": !a,
                    "aria-label": W.intl.formatToPlainString(W.t.QrxwhY, { roleName: u.name }),
                    children: [
                        l,
                        a ? (0, n.jsx)(N.P, { size: "md", color: $, className: F.s$, "aria-hidden": !0 }) : null,
                    ],
                }),
                null != S ? (0, n.jsx)(H.A, { className: F.UT, ...S, enableTooltip: !1 }) : null,
                (0, n.jsx)("div", {
                    "aria-hidden": !0,
                    className: F.S3,
                    children: (0, n.jsx)(b.E, { variant: "text-xs/medium", className: F.sH, children: u.name }),
                }),
            ],
        }),
    });
}
function q(e) {
    let { user: l, numRolesHidden: s, roleClassName: t } = e,
        o = (0, c.rm)(`overflow-more-roles-${l.id}`),
        a = r.useRef(null);
    return (0, n.jsx)(y.Y, {
        targetElementRef: a,
        renderPopout: (l) => {
            let { position: s } = l;
            return (0, n.jsx)(K, { ...e, position: s ?? "top" });
        },
        position: "top",
        align: "center",
        children: (e) =>
            (0, n.jsx)(R.vN, {
                children: (0, n.jsx)("button", { ref: a, ...e, className: i()(F.lv, t), ...o, children: `+${s}` }),
            }),
    });
}
function Z(e) {
    let l = r.useRef(null),
        { guild: s, user: t, handleAddRole: o, roleClassName: a, addButtonClassName: d, addButtonIconClassName: u } = e,
        m = (0, c.rm)(`overflow-add-roles-${t.id}`),
        f = (0, x.bG)([_.Ay], () => _.Ay.roleStyle),
        h = $.A.getHighestRole(s),
        g = O.Ay.getMember(s.id, t.id);
    function j(e) {
        return !(0, Y.Oy)(e) && !e.managed && $.A.isRoleHigher(s, h, e) && (null == g || -1 === g.roles.indexOf(e.id));
    }
    return (0, n.jsx)(y.Y, {
        targetElementRef: l,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, n.jsx)(z.A, { guild: s, roleStyle: f, roleFilter: j, onSelect: o, onClose: l });
        },
        position: "bottom",
        align: "center",
        children: (e) =>
            (0, n.jsx)(R.vN, {
                children: (0, n.jsx)("button", {
                    ref: l,
                    ...e,
                    className: i()(F.c9, a, d),
                    "aria-label": W.intl.string(W.t.e3Wlyw),
                    type: "button",
                    ...m,
                    children: (0, n.jsx)(C.j, {
                        size: "md",
                        color: "currentColor",
                        className: i()(F.hs, u),
                        "aria-hidden": !0,
                    }),
                }),
            }),
    });
}
function ee(e) {
    let l,
        {
            user: s,
            guild: t,
            userRoleIds: o,
            wrap: m = !0,
            width: f,
            className: h,
            readOnly: g,
            roleClassName: j,
            disableBorderColor: b,
        } = e,
        A = r.useRef({}),
        p = r.useCallback(
            (e) => {
                let l = o.filter((l) => l !== e.id);
                e.tags?.guild_connections === null
                    ? P.A.unassignGuildRoleConnection(t.id, e.id).catch(B)
                    : I.default.updateMemberRoles(t.id, s.id, l, [], [e.id]).catch(B);
            },
            [o, t.id, s.id],
        ),
        R = r.useCallback(
            (e) => {
                let l = o;
                (l.includes(e) || (l = [...l, e]), I.default.updateMemberRoles(t.id, s.id, l, [e], []).catch(B));
            },
            [o, t.id, s.id],
        ),
        [v, N] = r.useState(null),
        y = (0, x.yK)([U.A], () => U.A.getManyRoles(t.id, o).sort(L.m)),
        C = r.useMemo(() => (null != v ? y.slice(0, v) : y), [y, v]),
        w = o.length - C.length;
    r.useLayoutEffect(() => {
        if (m) return;
        if ("number" != typeof f) throw Error("Unexpected null width");
        if (0 === f) return;
        let e = 0,
            l = 0,
            s = f - 30 - 4;
        for (let n = 0; n < C.length; n++) {
            let r = C[n],
                t = A.current[r.id];
            if (null != t) {
                if ((l += t.offsetWidth + 4) > s) break;
                e++;
            }
        }
        N((l) => (e < C.length ? e : l));
    }, [m, f, C]);
    let M = D.default.getCurrentUser();
    a()(null != M, "MemberRolesList: currentUser cannot be undefined");
    let _ = !g && $.A.can(V.xBc.MANAGE_ROLES, t),
        E = J.HJ(t, M.id),
        S = r.useMemo(() => `roles-${(0, d.A)()}`, []),
        k = (0, u.Ay)({ id: S, isEnabled: !0, scrollToStart: X, scrollToEnd: X, wrap: !0 }),
        T = C.map((e) =>
            (0, n.jsx)(
                Q,
                {
                    className: j,
                    role: e,
                    canRemove: e.tags?.guild_connections === null ? s.id === M.id : _ && J.wO(t, M.id, E, e),
                    onRemove: () => p(e),
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
            ? (l = (0, n.jsx)(q, { ...e, numRolesHidden: w }))
            : _ && (l = (0, n.jsx)(Z, { ...e, handleAddRole: R })),
        (0, n.jsx)(c.hD, {
            navigator: k,
            children: (0, n.jsx)(c.PR, {
                children: (e) => {
                    let { ref: s, ...r } = e;
                    return (0, n.jsxs)("div", {
                        className: i()(F.zr, h),
                        "aria-label": W.intl.formatToPlainString(W.t.PCs0oo, { numRoles: o.length }),
                        ref: s,
                        ...r,
                        children: [T, l],
                    });
                },
            }),
        })
    );
}
let el = (0, M.A)(ee);
function es(e) {
    return (
        (0, x.bG)([$.A], () => $.A.getGuildVersion(e.guild?.id)),
        !1 === e.wrap ? (0, n.jsx)(el, { ...e }) : (0, n.jsx)(ee, { ...e })
    );
}
