s.d(l, { Ay: () => es, b_: () => Q });
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
    x = s(17928),
    f = s(661531),
    h = s(376357),
    g = s(305866),
    j = s(138134),
    b = s(834730),
    A = s(602853),
    R = s(545442),
    p = s(559106),
    v = s(939249),
    N = s(789645),
    C = s(922016),
    y = s(307301),
    w = s(442433),
    P = s(66834),
    E = s(456412),
    M = s(775602),
    _ = s(63104),
    S = s(235986),
    k = s(915089),
    I = s(468689),
    T = s(967144),
    G = s(69282),
    L = s(657048),
    H = s(1659),
    z = s(465738),
    U = s(34457),
    Y = s(696451),
    O = s(317525),
    $ = s(576705),
    D = s(287809),
    F = s(488926),
    J = s(652215),
    V = s(660183),
    W = s(371418);
let X = () => Promise.resolve();
function B() {
    (0, h.P0)((0, h.ox)(V.intl.string(V.t.fEptJP), h.Ck.FAILURE));
}
function K(e) {
    let { userRoleIds: l, position: s, ...r } = e,
        t = (0, k.GV)();
    return (0, n.jsxs)(g.l, {
        className: o()(W.Jo, { [W.Vf]: "bottom" === s, [W.vy]: "top" === s }),
        "aria-labelledby": t,
        children: [
            (0, n.jsx)("div", { className: W.rF, children: (0, n.jsx)("div", { className: W.QG }) }),
            (0, n.jsxs)(S.A, {
                className: W.q0,
                align: S.A.Align.CENTER,
                children: [
                    (0, n.jsx)(j.FlagIcon, {
                        size: "xs",
                        color: f.A.unsafe_rawColors.PRIMARY_400.css,
                        className: W.LP,
                    }),
                    (0, n.jsx)(b.E, {
                        variant: "text-xs/bold",
                        color: "none",
                        className: W.VT,
                        id: t,
                        children: V.intl.format(V.t.PCs0oo, { numRoles: l.length }),
                    }),
                ],
            }),
            (0, n.jsx)(ee, { ...r, wrap: !0, userRoleIds: l }),
        ],
    });
}
function Q(e) {
    let l,
        { ref: t, ...i } = e,
        {
            canRemove: a,
            className: d,
            role: u,
            onRemove: h,
            guildId: g,
            disableBorderColor: j,
            onMouseDown: C,
            guild: y,
        } = i,
        { tabIndex: P, ...E } = (0, c.rm)(u.id),
        S = (0, G.Xx)({ roleId: u.id, size: 16, guildId: g, role: u, guild: y }),
        k = (0, x.bG)([M.Ay], () => M.Ay.roleStyle),
        I = (0, T.X_)(g, void 0, u.colorStrings),
        H = u.tags?.guild_connections === null,
        z = r.useCallback(
            (e) => {
                (0, w.L3)(e, async () => {
                    let { default: e } = await Promise.all([s.e("638221"), s.e("715687")]).then(s.bind(s, 646938));
                    return (l) => (0, n.jsx)(e, { ...l, id: u.id, label: V.intl.string(V.t.sMsaLg) });
                });
            },
            [u.id],
        ),
        U = (0, A.r)(f.A.unsafe_rawColors.PRIMARY_300).hsl(),
        Y = u.colorString ?? U,
        O = (0, m.xp)(Y, 0.6) ?? void 0,
        $ = f.A.unsafe_rawColors.WHITE.css,
        D = (0, m.LX)(Y);
    (null != D && 0.3 > (0, m.OK)(D) && ($ = f.A.unsafe_rawColors.PRIMARY_630.css),
        (l = H
            ? (0, n.jsx)(_.A, { className: W.U4, iconClassName: a ? W.gD : void 0, color: Y, size: 14 })
            : "dot" === k
              ? (0, n.jsx)(R.W, { className: W.m4, color: Y, colors: I, background: !1, tooltip: !1 })
              : (0, n.jsx)(R.R, { color: Y, colors: I })));
    let F = r.useMemo(() => ({ borderColor: j ? void 0 : O, ...(i.style ?? {}) }), [O, j, i.style]);
    return (0, n.jsx)(p.vN, {
        children: (0, n.jsxs)("div", {
            ref: t,
            className: o()(W.JC, d),
            style: F,
            onContextMenu: z,
            onMouseDown: C,
            "aria-label": u.name,
            tabIndex: P,
            ...E,
            children: [
                (0, n.jsxs)(v.D, {
                    className: o()(a && W.jH, W.j1),
                    onClick: a ? h : void 0,
                    tabIndex: a ? P : -1,
                    focusProps: { focusClassName: W.vZ },
                    "aria-hidden": !a,
                    "aria-label": V.intl.formatToPlainString(V.t.QrxwhY, { roleName: u.name }),
                    children: [
                        l,
                        a ? (0, n.jsx)(N.P, { size: "md", color: $, className: W.s$, "aria-hidden": !0 }) : null,
                    ],
                }),
                null != S ? (0, n.jsx)(L.A, { className: W.UT, ...S, enableTooltip: !1 }) : null,
                (0, n.jsx)("div", {
                    "aria-hidden": !0,
                    className: W.S3,
                    children: (0, n.jsx)(b.E, { variant: "text-xs/medium", className: W.sH, children: u.name }),
                }),
            ],
        }),
    });
}
function q(e) {
    let { user: l, numRolesHidden: s, roleClassName: t } = e,
        i = (0, c.rm)(`overflow-more-roles-${l.id}`),
        a = r.useRef(null);
    return (0, n.jsx)(C.Y, {
        targetElementRef: a,
        renderPopout: (l) => {
            let { position: s } = l;
            return (0, n.jsx)(K, { ...e, position: s ?? "top" });
        },
        position: "top",
        align: "center",
        children: (e) =>
            (0, n.jsx)(p.vN, {
                children: (0, n.jsx)("button", { ref: a, ...e, className: o()(W.lv, t), ...i, children: `+${s}` }),
            }),
    });
}
function Z(e) {
    let l = r.useRef(null),
        { guild: s, user: t, handleAddRole: i, roleClassName: a, addButtonClassName: d, addButtonIconClassName: u } = e,
        m = (0, c.rm)(`overflow-add-roles-${t.id}`),
        f = (0, x.bG)([M.Ay], () => M.Ay.roleStyle),
        h = $.A.getHighestRole(s),
        g = Y.Ay.getMember(s.id, t.id);
    function j(e) {
        return !(0, U.Oy)(e) && !e.managed && $.A.isRoleHigher(s, h, e) && (null == g || -1 === g.roles.indexOf(e.id));
    }
    return (0, n.jsx)(C.Y, {
        targetElementRef: l,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, n.jsx)(z.A, { guild: s, roleStyle: f, roleFilter: j, onSelect: i, onClose: l });
        },
        position: "bottom",
        align: "center",
        children: (e) =>
            (0, n.jsx)(p.vN, {
                children: (0, n.jsx)("button", {
                    ref: l,
                    ...e,
                    className: o()(W.c9, a, d),
                    "aria-label": V.intl.string(V.t.e3Wlyw),
                    type: "button",
                    ...m,
                    children: (0, n.jsx)(y.j, {
                        size: "md",
                        color: "currentColor",
                        className: o()(W.hs, u),
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
                    ? P.A.unassignGuildRoleConnection(t.id, e.id).catch(B)
                    : I.default.updateMemberRoles(t.id, s.id, l, [], [e.id]).catch(B);
            },
            [i, t.id, s.id],
        ),
        p = r.useCallback(
            (e) => {
                let l = i;
                (l.includes(e) || (l = [...l, e]), I.default.updateMemberRoles(t.id, s.id, l, [e], []).catch(B));
            },
            [i, t.id, s.id],
        ),
        [v, N] = r.useState(null),
        C = (0, x.yK)([O.A], () => O.A.getManyRoles(t.id, i).sort(H.m)),
        y = r.useMemo(() => (null != v ? C.slice(0, v) : C), [C, v]),
        w = i.length - y.length;
    r.useLayoutEffect(() => {
        if (m) return;
        if ("number" != typeof f) throw Error("Unexpected null width");
        if (0 === f) return;
        let e = 0,
            l = 0,
            s = f - 30 - 4;
        for (let n = 0; n < y.length; n++) {
            let r = y[n],
                t = A.current[r.id];
            if (null != t) {
                if ((l += t.offsetWidth + 4) > s) break;
                e++;
            }
        }
        N((l) => (e < y.length ? e : l));
    }, [m, f, y]);
    let E = D.default.getCurrentUser();
    a()(null != E, "MemberRolesList: currentUser cannot be undefined");
    let M = !g && $.A.can(J.xBc.MANAGE_ROLES, t),
        _ = F.HJ(t, E.id),
        S = r.useMemo(() => `roles-${(0, d.A)()}`, []),
        k = (0, u.Ay)({ id: S, isEnabled: !0, scrollToStart: X, scrollToEnd: X, wrap: !0 }),
        T = y.map((e) =>
            (0, n.jsx)(
                Q,
                {
                    className: j,
                    role: e,
                    canRemove: e.tags?.guild_connections === null ? s.id === E.id : M && F.wO(t, E.id, _, e),
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
            ? (l = (0, n.jsx)(q, { ...e, numRolesHidden: w }))
            : M && (l = (0, n.jsx)(Z, { ...e, handleAddRole: p })),
        (0, n.jsx)(c.hD, {
            navigator: k,
            children: (0, n.jsx)(c.PR, {
                children: (e) => {
                    let { ref: s, ...r } = e;
                    return (0, n.jsxs)("div", {
                        className: o()(W.zr, h),
                        "aria-label": V.intl.formatToPlainString(V.t.PCs0oo, { numRoles: i.length }),
                        ref: s,
                        ...r,
                        children: [T, l],
                    });
                },
            }),
        })
    );
}
let el = (0, E.A)(ee);
function es(e) {
    return (
        (0, x.bG)([$.A], () => $.A.getGuildVersion(e.guild?.id)),
        !1 === e.wrap ? (0, n.jsx)(el, { ...e }) : (0, n.jsx)(ee, { ...e })
    );
}
