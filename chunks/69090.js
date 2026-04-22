n.d(t, { A: () => z });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(131346),
    o = n(744818),
    d = n(311907),
    c = n(36075),
    u = n(990078),
    m = n(177953),
    g = n(834730),
    h = n(939249),
    x = n(772838),
    _ = n(950305),
    p = n(408278),
    A = n(39623),
    E = n(22231),
    f = n(365199),
    j = n(179866),
    N = n(442433),
    I = n(361739),
    C = n(63104),
    b = n(163013),
    v = n(665013),
    S = n(201275),
    T = n(35275),
    y = n(676608),
    R = n(657048),
    L = n(576705),
    D = n(954571),
    O = n(545868),
    G = n(642133),
    M = n(856644),
    k = n(359837),
    U = n(533448),
    w = n(927573),
    P = n(652215),
    B = n(985018),
    F = n(938001),
    H = n(823059);
let V = "DRAGGABLE_ROLE";
function z(e) {
    let {
            setEditRoleId: t,
            guild: n,
            everyoneRole: s,
            otherRoles: r,
            setSelectedSection: a,
            renderHeader: o,
            headerHeight: c,
            query: u,
        } = e,
        m = (0, d.bG)([G.A], () => G.A.getRoleMemberCount(n.id), [n.id]),
        g = (0, d.bG)([L.A], () => L.A.getHighestRole(n), [n]),
        h = u.trim();
    l.useEffect(() => {
        (0, O.L)(n.id);
    }, [n.id]);
    let x = l.useRef(!1);
    l.useEffect(() => {
        x.current ||
            "" === u.trimStart() ||
            (D.default.track(P.HAw.SEARCH_STARTED, { search_type: "Roles" }), (x.current = !0));
    }, [u]);
    let _ = l.useMemo(() => r.filter((e) => (0, M.Vh)(e, h)), [r, h]),
        p = l.useMemo(() => [...r, s], [r, s]),
        { draggingId: A, handleDragStart: E, handleDragReset: f, handleDragComplete: j } = (0, U.A)(p),
        N = l.useCallback(
            (e) => {
                let { row: l } = e;
                if (0 === _.length) return (0, i.jsx)(W, {}, "empty-role");
                let s = _[l];
                return (0, i.jsx)(
                    Y,
                    {
                        role: s,
                        guild: n,
                        highestRole: g,
                        currentPosition: l,
                        memberCount: m?.[s.id] ?? 0,
                        onDragStart: E,
                        onDragReset: f,
                        onDragComplete: j,
                        disableHover: null != A,
                        disableDrag: r.length !== _.length,
                        setEditRoleId: t,
                        setSelectedSection: a,
                    },
                    s.id,
                );
            },
            [_, n, g, m, E, f, j, A, r, t, a],
        );
    return (0, i.jsx)(I.ic, {
        sections: [Math.max(_.length, 1)],
        sectionHeight: c,
        renderSection: o,
        rowHeight: 61,
        renderRow: N,
    });
}
function W() {
    return (0, i.jsxs)("div", {
        className: F.tp,
        children: [
            (0, i.jsx)("div", { className: H._M }),
            (0, i.jsx)(m.n, { size: "md", color: "currentColor" }),
            (0, i.jsx)(g.E, {
                className: F.Gm,
                variant: "text-md/semibold",
                color: "text-muted",
                children: B.intl.string(B.t["vR7M+y"]),
            }),
        ],
    });
}
function Y(e) {
    let {
            role: t,
            guild: s,
            highestRole: d,
            currentPosition: c,
            memberCount: m,
            onDragStart: j,
            onDragReset: I,
            onDragComplete: S,
            disableHover: y,
            disableDrag: R,
            setEditRoleId: L,
            setSelectedSection: D,
        } = e,
        O = (0, k.c)(s, d, t),
        G = null != O,
        [M, U] = l.useState(!1),
        P = l.useMemo(
            () => ({
                type: V,
                item: () => (j(t.id), { id: t.id, position: c }),
                canDrag: () => M && !G,
                collect: (e) => ({ isDragging: e.isDragging() }),
                end: (e, t) => {
                    let n = t.getDropResult();
                    null == n ? I() : S(n.roleId);
                },
            }),
            [t, j, I, S, G, M, c],
        ),
        [{ isDragging: z }, W] = (0, a.i)(P),
        Y = l.useMemo(
            () => ({
                accept: V,
                canDrop: () => !G,
                collect: (e) => {
                    let t = e.getItem();
                    return null != t && e.isOver() && e.canDrop()
                        ? { dragSourcePosition: t.position }
                        : { dragSourcePosition: null };
                },
                drop: () => ({ roleId: t.id }),
            }),
            [G, t],
        ),
        [{ dragSourcePosition: X }, Z] = (0, o.H)(Y),
        J = l.useCallback(
            (e) => {
                (0, N.L3)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 665013));
                    return (n) => (0, i.jsx)(e, { ...n, role: t, guild: s });
                });
            },
            [s, t],
        ),
        q = (0, v.x)(s, t);
    if (z)
        return (0, i.jsx)("div", {
            ref: (e) => {
                W(e);
            },
            className: r()(F.xf, F.Ao),
        });
    function Q() {
        L(t.id);
    }
    return (0, i.jsxs)(h.D, {
        className: r()(F.xf, { [F.F2]: y, [F.TR]: null != X && c < X, [F.mU]: null != X && c > X }),
        onClick: Q,
        onContextMenu: J,
        innerRef: (e) => {
            W(Z(e));
        },
        "data-dnd-name": t.name,
        "aria-label": B.intl.formatToPlainString(B.t.Vu0Acc, { name: t.name, count: `${m}` }),
        children: [
            (0, i.jsx)("div", {
                className: r()(F.co, H._M, { [F.Y6]: G || R }),
                onMouseEnter: () => U(!0),
                onMouseLeave: () => U(!1),
                children: (0, i.jsx)(x.W, { size: "xs", color: "currentColor" }),
            }),
            (0, i.jsxs)("div", {
                className: r()(F.Ji, H.N5),
                children: [
                    t.tags?.guild_connections === null
                        ? (0, i.jsx)(C.A, { className: F.U4, color: t.colorString, size: 24 })
                        : (0, i.jsx)(K, {
                              guildId: s.id,
                              role: t,
                              size: 24,
                              className: F.UT,
                              defaultIconClassName: F.a,
                          }),
                    null != O ? (0, i.jsx)(k.A, { className: F.s2, tooltipText: O }) : null,
                    (0, i.jsx)(g.E, {
                        className: F.S3,
                        color: "text-strong",
                        variant: "text-md/medium",
                        children: t.name,
                    }),
                    t.tags?.subscription_listing_id != null &&
                        (0, i.jsx)(T.A, { className: F.tU, "aria-label": B.intl.string(B.t.a2Ak8b) }),
                    t.tags?.is_guild_product_role === !0 && (0, i.jsx)(b.A, {}),
                ],
            }),
            (0, i.jsx)(u.m, {
                text: B.intl.string(B.t.CW75t0),
                "aria-label": B.intl.formatToPlainString(B.t.Fgs8fD, { count: `${m}` }),
                position: "right",
                children: (0, i.jsxs)(h.D, {
                    className: r()(F.Tb, H.Hp),
                    onClick: function () {
                        Q(), D(w.T$.MEMBERS);
                    },
                    children: [
                        (0, i.jsx)(g.E, { variant: "text-md/normal", color: "none", children: m }),
                        (0, i.jsx)(_.n, {
                            size: "custom",
                            color: "currentColor",
                            className: F.MV,
                            width: 20,
                            height: 20,
                        }),
                    ],
                }),
            }),
            (0, i.jsxs)("div", {
                className: r()(F.NC, H.DE),
                children: [
                    (0, i.jsx)(u.m, {
                        text: G ? B.intl.string(B.t["HO/oXl"]) : B.intl.string(B.t.bt75uw),
                        children: (0, i.jsx)(p.K, {
                            variant: "secondary",
                            "aria-label": G ? B.intl.string(B.t["HO/oXl"]) : B.intl.string(B.t.bt75uw),
                            icon: G ? A.b : E.R,
                            onClick: Q,
                        }),
                    }),
                    (0, i.jsx)(u.m, {
                        text: B.intl.string(B.t["UKOtz+"]),
                        shouldShow: q,
                        children: (0, i.jsx)(p.K, {
                            variant: "secondary",
                            "aria-label": B.intl.string(B.t["UKOtz+"]),
                            icon: f.j,
                            onClick: J,
                            disabled: !q,
                        }),
                    }),
                ],
            }),
        ],
    });
}
function K(e) {
    let { guildId: t, role: n, size: l, enableTooltip: s, className: a, defaultIconClassName: o } = e,
        {
            hasGradient: d,
            stops: u,
            gradientId: m,
        } = (0, c.RM)(n.colorStrings?.primaryColor, n.colorStrings?.secondaryColor, n.colorStrings?.tertiaryColor),
        g = (0, y.jV)(t, n),
        h = (0, S.$7)({ guildId: t, roleId: n.id, size: l });
    if (null != h) return (0, i.jsx)(R.A, { ...h, className: a, enableTooltip: s });
    let x = n.colorString ?? P.TpD;
    return (
        g && d && (x = `url(#${m})`),
        (0, i.jsxs)(i.Fragment, {
            children: [
                g &&
                    d &&
                    (0, i.jsx)("svg", {
                        width: "0",
                        height: "0",
                        style: { position: "absolute" },
                        children: (0, i.jsx)("linearGradient", {
                            id: m,
                            x1: "0%",
                            y1: "0%",
                            x2: "0%",
                            y2: "100%",
                            children: u,
                        }),
                    }),
                (0, i.jsx)(j.i, { size: "custom", className: r()(a, o), color: x, width: l, height: l }),
            ],
        })
    );
}
