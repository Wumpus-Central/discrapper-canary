var n = s(477900),
    r = s(582128),
    i = s(503698),
    o = s.n(i),
    t = s(284009),
    a = s.n(t),
    d = s(115560),
    c = s(837381),
    u = s(116903),
    m = s(317097),
    x = s(855986),
    f = s(646514),
    h = s(858899),
    g = s(305866),
    b = s(138134),
    j = s(834730),
    A = s(602853),
    p = s(545442),
    R = s(559106),
    v = s(939249),
    N = s(789645),
    y = s(265872),
    C = s(307301),
    w = s(442433),
    P = s(778858),
    M = s(456412),
    _ = s(775602),
    E = s(63104),
    S = s(235986),
    I = s(915089),
    k = s(727419),
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
    W = s(792996),
    X = s(371418);
let F = () => Promise.resolve();
function B() {
    (0, h.P0)({ text: W.intl.string(W.t.fEptJP), variant: "critical" });
}
function K(e) {
    let { userRoleIds: l, position: s, ...r } = e,
        i = (0, I.GV)();
    return (0, n.jsxs)(g.l, {
        className: o()(X.Jo, { [X.Vf]: "bottom" === s, [X.vy]: "top" === s }),
        "aria-labelledby": i,
        children: [
            (0, n.jsx)("div", { className: X.rF, children: (0, n.jsx)("div", { className: X.QG }) }),
            (0, n.jsxs)(S.A, {
                className: X.q0,
                align: S.A.Align.CENTER,
                children: [
                    (0, n.jsx)(b.FlagIcon, {
                        size: "xs",
                        color: f.A.unsafe_rawColors.PRIMARY_400.css,
                        className: X.LP,
                    }),
                    (0, n.jsx)(j.E, {
                        variant: "body-xs/semibold",
                        color: "none",
                        className: X.VT,
                        id: i,
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
        { ref: i, ...t } = e,
        {
            canRemove: a,
            className: d,
            role: u,
            onRemove: h,
            guildId: g,
            disableBorderColor: b,
            onMouseDown: y,
            guild: C,
        } = t,
        { tabIndex: P, ...M } = (0, c.rm)(u.id),
        S = (0, G.Xx)({ roleId: u.id, size: 16, guildId: g, role: u, guild: C }),
        I = (0, x.bG)([_.Ay], () => _.Ay.roleStyle),
        k = (0, T.X_)(g, void 0, u.colorStrings),
        L = u.tags?.guild_connections === null,
        z = r.useCallback(
            (e) => {
                (0, w.L3)(e, async () => {
                    let { default: e } = await Promise.all([s.e(638221), s.e(715687)]).then(s.bind(s, 646938));
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
            ? (0, n.jsx)(E.A, { className: X.U4, iconClassName: a ? X.gD : void 0, color: O, size: 14 })
            : "dot" === I
              ? (0, n.jsx)(p.W, { className: X.m4, color: O, colors: k, background: !1, tooltip: !1 })
              : (0, n.jsx)(p.R, { color: O, colors: k })));
    let J = r.useMemo(() => ({ borderColor: b ? void 0 : U, ...(t.style ?? {}) }), [U, b, t.style]);
    return (0, n.jsx)(R.vN, {
        children: (0, n.jsxs)("div", {
            ref: i,
            className: o()(X.JC, d),
            style: J,
            onContextMenu: z,
            onMouseDown: y,
            "aria-label": u.name,
            tabIndex: P,
            ...M,
            children: [
                (0, n.jsxs)(v.D, {
                    className: o()(a && X.jH, X.j1),
                    onClick: a ? h : void 0,
                    tabIndex: a ? P : -1,
                    focusProps: { focusClassName: X.vZ },
                    "aria-hidden": !a,
                    "aria-label": W.intl.formatToPlainString(W.t.QrxwhY, { roleName: u.name }),
                    children: [
                        l,
                        a
                            ? (0, n.jsx)(N.XSmallIcon, { size: "md", color: $, className: X.s$, "aria-hidden": !0 })
                            : null,
                    ],
                }),
                null != S ? (0, n.jsx)(H.A, { className: X.UT, ...S, enableTooltip: !1 }) : null,
                (0, n.jsx)("div", {
                    "aria-hidden": !0,
                    className: X.S3,
                    children: (0, n.jsx)(j.E, { variant: "body-xs/medium", className: X.sH, children: u.name }),
                }),
            ],
        }),
    });
}
function q(e) {
    let { user: l, numRolesHidden: s, roleClassName: i } = e,
        t = (0, c.rm)(`overflow-more-roles-${l.id}`),
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
                children: (0, n.jsx)("button", { ref: a, ...e, className: o()(X.lv, i), ...t, children: `+${s}` }),
            }),
    });
}
function Z(e) {
    let l = r.useRef(null),
        { guild: s, user: i, handleAddRole: t, roleClassName: a, addButtonClassName: d, addButtonIconClassName: u } = e,
        m = (0, c.rm)(`overflow-add-roles-${i.id}`),
        f = (0, x.bG)([_.Ay], () => _.Ay.roleStyle),
        h = $.A.getHighestRole(s),
        g = O.Ay.getMember(s.id, i.id);
    function b(e) {
        return !(0, Y.Oy)(e) && !e.managed && $.A.isRoleHigher(s, h, e) && (null == g || -1 === g.roles.indexOf(e.id));
    }
    return (0, n.jsx)(y.Y, {
        targetElementRef: l,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, n.jsx)(z.A, { guild: s, roleStyle: f, roleFilter: b, onSelect: t, onClose: l });
        },
        position: "bottom",
        align: "center",
        children: (e) =>
            (0, n.jsx)(R.vN, {
                children: (0, n.jsx)("button", {
                    ref: l,
                    ...e,
                    className: o()(X.c9, a, d),
                    "aria-label": W.intl.string(W.t.e3Wlyw),
                    type: "button",
                    ...m,
                    children: (0, n.jsx)(C.PlusSmallIcon, {
                        size: "md",
                        color: "currentColor",
                        className: o()(X.hs, u),
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
            guild: i,
            userRoleIds: t,
            wrap: m = !0,
            width: f,
            className: h,
            readOnly: g,
            roleClassName: b,
            disableBorderColor: j,
        } = e,
        A = r.useRef({}),
        p = r.useCallback(
            (e) => {
                let l = t.filter((l) => l !== e.id);
                e.tags?.guild_connections === null
                    ? P.A.unassignGuildRoleConnection(i.id, e.id).catch(B)
                    : k.A.updateMemberRoles(i.id, s.id, l, [], [e.id]).catch(B);
            },
            [t, i.id, s.id],
        ),
        R = r.useCallback(
            (e) => {
                let l = t;
                (l.includes(e) || (l = [...l, e]), k.A.updateMemberRoles(i.id, s.id, l, [e], []).catch(B));
            },
            [t, i.id, s.id],
        ),
        [v, N] = r.useState(null),
        y = (0, x.yK)([U.A], () => U.A.getManyRoles(i.id, t).sort(L.m)),
        C = r.useMemo(() => (null != v ? y.slice(0, v) : y), [y, v]),
        w = t.length - C.length;
    r.useLayoutEffect(() => {
        if (m) return;
        if ("number" != typeof f) throw Error("Unexpected null width");
        if (0 === f) return;
        let e = 0,
            l = 0,
            s = f - 30 - 4;
        for (let n = 0; n < C.length; n++) {
            let r = C[n],
                i = A.current[r.id];
            if (null != i) {
                if ((l += i.offsetWidth + 4) > s) break;
                e++;
            }
        }
        N((l) => (e < C.length ? e : l));
    }, [m, f, C]);
    let M = D.default.getCurrentUser();
    a()(null != M, "MemberRolesList: currentUser cannot be undefined");
    let _ = !g && $.A.can(V.xBc.MANAGE_ROLES, i),
        E = J.HJ(i, M.id),
        S = r.useMemo(() => `roles-${(0, d.A)()}`, []),
        I = (0, u.Ay)({ id: S, isEnabled: !0, scrollToStart: F, scrollToEnd: F, wrap: !0 }),
        T = C.map((e) =>
            (0, n.jsx)(
                Q,
                {
                    className: b,
                    role: e,
                    canRemove: e.tags?.guild_connections === null ? s.id === M.id : _ && J.wO(i, M.id, E, e),
                    onRemove: () => p(e),
                    ref: (l) => {
                        var s;
                        return ((s = e.id), void (null != l ? (A.current[s] = l) : delete A.current[s]));
                    },
                    guildId: i.id,
                    disableBorderColor: j,
                },
                e.id,
            ),
        );
    return (
        null != v && 0 !== w
            ? (l = (0, n.jsx)(q, { ...e, numRolesHidden: w }))
            : _ && (l = (0, n.jsx)(Z, { ...e, handleAddRole: R })),
        (0, n.jsx)(c.hD, {
            navigator: I,
            children: (0, n.jsx)(c.PR, {
                children: (e) => {
                    let { ref: s, ...r } = e;
                    return (0, n.jsxs)("div", {
                        className: o()(X.zr, h),
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
let el = (0, M.A)(ee);
s.d(
    l,
    {},
    {
        Ay: function (e) {
            return (
                (0, x.bG)([$.A], () => $.A.getGuildVersion(e.guild?.id)),
                !1 === e.wrap ? (0, n.jsx)(el, { ...e }) : (0, n.jsx)(ee, { ...e })
            );
        },
        b_: Q,
    },
);
