"use strict";
n.d(t, { A: () => M });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(131346),
    o = n(522437),
    d = n(311907),
    c = n(36075),
    u = n(990078),
    m = n(397927),
    g = n(442433),
    x = n(361739),
    h = n(63104),
    _ = n(163013),
    p = n(665013),
    A = n(201275),
    f = n(35275),
    j = n(676608),
    N = n(657048),
    E = n(576705),
    C = n(954571),
    b = n(545868),
    T = n(642133),
    I = n(856644),
    v = n(359837),
    S = n(533448),
    y = n(927573),
    R = n(652215),
    O = n(985018),
    G = n(546010),
    L = n(512672);
let D = "DRAGGABLE_ROLE";
function M(e) {
    let {
            setEditRoleId: t,
            guild: n,
            everyoneRole: l,
            otherRoles: r,
            setSelectedSection: a,
            renderHeader: o,
            headerHeight: c,
            query: u,
        } = e,
        m = (0, d.bG)([T.A], () => T.A.getRoleMemberCount(n.id), [n.id]),
        g = (0, d.bG)([E.A], () => E.A.getHighestRole(n), [n]),
        h = u.trim();
    s.useEffect(() => {
        (0, b.L)(n.id);
    }, [n.id]);
    let _ = s.useRef(!1);
    s.useEffect(() => {
        _.current ||
            "" === u.trimStart() ||
            (C.default.track(R.HAw.SEARCH_STARTED, { search_type: "Roles" }), (_.current = !0));
    }, [u]);
    let p = s.useMemo(() => r.filter((e) => (0, I.Vh)(e, h)), [r, h]),
        A = s.useMemo(() => [...r, l], [r, l]),
        { draggingId: f, handleDragStart: j, handleDragReset: N, handleDragComplete: v } = (0, S.A)(A),
        y = s.useCallback(
            (e) => {
                let { row: s } = e;
                if (0 === p.length) return (0, i.jsx)(k, {}, "empty-role");
                let l = p[s];
                return (0, i.jsx)(
                    U,
                    {
                        role: l,
                        guild: n,
                        highestRole: g,
                        currentPosition: s,
                        memberCount: m?.[l.id] ?? 0,
                        onDragStart: j,
                        onDragReset: N,
                        onDragComplete: v,
                        disableHover: null != f,
                        disableDrag: r.length !== p.length,
                        setEditRoleId: t,
                        setSelectedSection: a,
                    },
                    l.id,
                );
            },
            [p, n, g, m, j, N, v, f, r, t, a],
        );
    return (0, i.jsx)(x.ic, {
        sections: [Math.max(p.length, 1)],
        sectionHeight: c,
        renderSection: o,
        rowHeight: 61,
        renderRow: y,
    });
}
function k() {
    return (0, i.jsxs)("div", {
        className: G.tp,
        children: [
            (0, i.jsx)("div", { className: L._M }),
            (0, i.jsx)(m.nFg, { size: "md", color: "currentColor" }),
            (0, i.jsx)(m.Text, {
                className: G.Gm,
                variant: "text-md/semibold",
                color: "text-muted",
                children: O.intl.string(O.t["vR7M+y"]),
            }),
        ],
    });
}
function U(e) {
    let {
            role: t,
            guild: l,
            highestRole: d,
            currentPosition: c,
            memberCount: x,
            onDragStart: A,
            onDragReset: j,
            onDragComplete: N,
            disableHover: E,
            disableDrag: C,
            setEditRoleId: b,
            setSelectedSection: T,
        } = e,
        I = (0, v.c)(l, d, t),
        S = null != I,
        [R, M] = s.useState(!1),
        k = s.useMemo(
            () => ({
                type: D,
                item: () => (A(t.id), { id: t.id, position: c }),
                canDrag: () => R && !S,
                collect: (e) => ({ isDragging: e.isDragging() }),
                end: (e, t) => {
                    let n = t.getDropResult();
                    null == n ? j() : N(n.roleId);
                },
            }),
            [t, A, j, N, S, R, c],
        ),
        [{ isDragging: U }, w] = (0, a.i)(k),
        B = s.useMemo(
            () => ({
                accept: D,
                canDrop: () => !S,
                collect: (e) => {
                    let t = e.getItem();
                    return null != t && e.isOver() && e.canDrop()
                        ? { dragSourcePosition: t.position }
                        : { dragSourcePosition: null };
                },
                drop: () => ({ roleId: t.id }),
            }),
            [S, t],
        ),
        [{ dragSourcePosition: F }, H] = (0, o.H)(B),
        V = s.useCallback(
            (e) => {
                (0, g.L3)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 665013));
                    return (n) => (0, i.jsx)(e, { ...n, role: t, guild: l });
                });
            },
            [l, t],
        ),
        z = (0, p.x)(l, t);
    if (U)
        return (0, i.jsx)("div", {
            ref: (e) => {
                w(e);
            },
            className: r()(G.xf, G.Ao),
        });
    function W() {
        b(t.id);
    }
    return (0, i.jsxs)(m.DUT, {
        className: r()(G.xf, { [G.F2]: E, [G.TR]: null != F && c < F, [G.mU]: null != F && c > F }),
        onClick: W,
        onContextMenu: V,
        innerRef: (e) => {
            w(H(e));
        },
        "data-dnd-name": t.name,
        "aria-label": O.intl.formatToPlainString(O.t.Vu0Acc, { name: t.name, count: `${x}` }),
        children: [
            (0, i.jsx)("div", {
                className: r()(G.co, L._M, { [G.Y6]: S || C }),
                onMouseEnter: () => M(!0),
                onMouseLeave: () => M(!1),
                children: (0, i.jsx)(m.WP0, { size: "xs", color: "currentColor" }),
            }),
            (0, i.jsxs)("div", {
                className: r()(G.Ji, L.N5),
                children: [
                    t.tags?.guild_connections === null
                        ? (0, i.jsx)(h.A, { className: G.U4, color: t.colorString, size: 24 })
                        : (0, i.jsx)(P, {
                              guildId: l.id,
                              role: t,
                              size: 24,
                              className: G.UT,
                              defaultIconClassName: G.a,
                          }),
                    null != I ? (0, i.jsx)(v.A, { className: G.s2, tooltipText: I }) : null,
                    (0, i.jsx)(m.Text, {
                        className: G.S3,
                        color: "text-strong",
                        variant: "text-md/medium",
                        children: t.name,
                    }),
                    t.tags?.subscription_listing_id != null &&
                        (0, i.jsx)(f.A, { className: G.tU, "aria-label": O.intl.string(O.t.a2Ak8b) }),
                    t.tags?.is_guild_product_role === !0 && (0, i.jsx)(_.A, {}),
                ],
            }),
            (0, i.jsx)(u.m, {
                text: O.intl.string(O.t.CW75t0),
                "aria-label": O.intl.formatToPlainString(O.t.Fgs8fD, { count: `${x}` }),
                position: "right",
                children: (0, i.jsxs)(m.DUT, {
                    className: r()(G.Tb, L.Hp),
                    onClick: function () {
                        W(), T(y.T$.MEMBERS);
                    },
                    children: [
                        (0, i.jsx)(m.Text, { variant: "text-md/normal", color: "none", children: x }),
                        (0, i.jsx)(m.nys, {
                            size: "custom",
                            color: "currentColor",
                            className: G.MV,
                            width: 20,
                            height: 20,
                        }),
                    ],
                }),
            }),
            (0, i.jsxs)("div", {
                className: r()(G.NC, L.DE),
                children: [
                    (0, i.jsx)(u.m, {
                        text: S ? O.intl.string(O.t["HO/oXl"]) : O.intl.string(O.t.bt75uw),
                        children: (0, i.jsx)(m.K0, {
                            variant: "secondary",
                            "aria-label": S ? O.intl.string(O.t["HO/oXl"]) : O.intl.string(O.t.bt75uw),
                            icon: S ? m.bMW : m.R2l,
                            onClick: W,
                        }),
                    }),
                    (0, i.jsx)(u.m, {
                        text: O.intl.string(O.t["UKOtz+"]),
                        shouldShow: z,
                        children: (0, i.jsx)(m.K0, {
                            variant: "secondary",
                            "aria-label": O.intl.string(O.t["UKOtz+"]),
                            icon: m.jNK,
                            onClick: V,
                            disabled: !z,
                        }),
                    }),
                ],
            }),
        ],
    });
}
function P(e) {
    let { guildId: t, role: n, size: s, enableTooltip: l, className: a, defaultIconClassName: o } = e,
        {
            hasGradient: d,
            stops: u,
            gradientId: g,
        } = (0, c.RM)(n.colorStrings?.primaryColor, n.colorStrings?.secondaryColor, n.colorStrings?.tertiaryColor),
        x = (0, j.jV)(t, n),
        h = (0, A.$7)({ guildId: t, roleId: n.id, size: s });
    if (null != h) return (0, i.jsx)(N.A, { ...h, className: a, enableTooltip: l });
    let _ = n.colorString ?? R.TpD;
    return (
        x && d && (_ = `url(#${g})`),
        (0, i.jsxs)(i.Fragment, {
            children: [
                x &&
                    d &&
                    (0, i.jsx)("svg", {
                        width: "0",
                        height: "0",
                        style: { position: "absolute" },
                        children: (0, i.jsx)("linearGradient", {
                            id: g,
                            x1: "0%",
                            y1: "0%",
                            x2: "0%",
                            y2: "100%",
                            children: u,
                        }),
                    }),
                (0, i.jsx)(m.iTF, { size: "custom", className: r()(a, o), color: _, width: s, height: s }),
            ],
        })
    );
}
