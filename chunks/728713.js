n.d(t, { A: () => U });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(131346),
    o = n(744818),
    d = n(311907),
    c = n(990078),
    u = n(545442),
    m = n(761508),
    g = n(834730),
    h = n(939249),
    x = n(307301),
    _ = n(599319),
    p = n(442433),
    A = n(686956),
    E = n(964486),
    f = n(775602),
    j = n(63104),
    N = n(861197),
    I = n(967144),
    C = n(34457),
    b = n(576705),
    v = n(792831),
    S = n(396816),
    T = n(359837),
    y = n(533448),
    R = n(316506),
    L = n(927573),
    D = n(652215),
    O = n(985018),
    G = n(29504);
let M = "DRAGGABLE_ROLE";
function k(e) {
    let t,
        {
            guild: l,
            role: s,
            highestRole: d,
            selectedItem: c,
            onClick: h,
            currentPosition: x,
            onDragStart: _,
            onDragReset: A,
            onDragComplete: E,
            roleStyle: f,
        } = e,
        N = (0, T.c)(l, d, s),
        b = (0, C.Oy)(s),
        v = null == N && !b,
        S = s.tags?.guild_connections !== void 0,
        y = (0, I.X_)(l.id, s, s.colorStrings),
        [, R] = (0, a.i)({
            type: M,
            item: () => (_(s.id), { id: s.id, position: x }),
            canDrag: () => v,
            end: (e, t) => {
                let n = t.getDropResult();
                null == n ? A() : E(n.roleId);
            },
        }),
        [{ dragSourcePosition: L }, O] = (0, o.H)({
            accept: M,
            canDrop: () => v,
            collect: (e) => {
                let t = e.getItem();
                return null != t && e.isOver() && e.canDrop()
                    ? { dragSourcePosition: t.position }
                    : { dragSourcePosition: null };
            },
            drop: () => ({ roleId: s.id }),
        }),
        k = s.colorString ?? D.TpD;
    return (
        (t = S
            ? (0, i.jsx)(j.A, { size: 12, color: s.colorString, className: G.Ev })
            : "dot" === f
              ? (0, i.jsx)(u.W, { color: k, colors: y, background: !1, tooltip: !1 })
              : (0, i.jsx)(u.R, { color: k, colors: y })),
        (0, i.jsxs)(m.V.Item, {
            className: r()(G.nM, { [G.qo]: null !== L && x < L, [G.BP]: null !== L && x > L }),
            id: s.id,
            selectedItem: c,
            itemType: "side",
            onClick: h,
            onContextMenu: function (e) {
                (0, p.L3)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 665013));
                    return (t) => (0, i.jsx)(e, { ...t, role: s, guild: l });
                });
            },
            "aria-label": s.name,
            clickableRef: (e) => {
                R(O(e?.ref ?? null));
            },
            children: [
                t,
                null != N ? (0, i.jsx)(T.A, { className: G.s2, tooltipText: N }) : null,
                (0, i.jsx)(g.E, {
                    variant: "text-sm/medium",
                    color: b ? "text-strong" : "interactive-text-active",
                    lineClamp: 1,
                    children: s.name,
                }),
            ],
        })
    );
}
function U(e) {
    let { guild: t, currentRoleId: n, setCurrentRoleId: s, setSelectedSection: a } = e,
        o = (0, d.bG)([S.A], () => S.A.roles),
        u = (0, d.bG)([b.A], () => b.A.getHighestRole(t)),
        p = (0, d.bG)([f.A], () => f.A.roleStyle),
        [j, I] = l.useState(o.length),
        { scrolledToTop: C, handleScroll: T } = (0, R.u)(),
        { handleDragStart: D, handleDragReset: M, handleDragComplete: U } = (0, y.A)(o),
        w = l.useRef(null),
        P = l.useCallback(
            (e) => {
                let t = o.findIndex((t) => t.id === e);
                w.current?.getScrollerNode()?.scrollTo({ top: Math.max((t - 2) * 34, 0) });
            },
            [o],
        );
    return (
        (0, E.Ay)(() => {
            P(n);
        }),
        l.useEffect(() => {
            o.length > j && P(n), o.length !== j && I(o.length);
        }, [o.length, j, I, P, n]),
        (0, i.jsx)(N.Ay.Sidebar, {
            className: G.pz,
            children: (0, i.jsxs)("div", {
                className: G.kL,
                children: [
                    (0, i.jsxs)("div", {
                        className: r()(G.gn, { [G.P6]: !C }),
                        children: [
                            (0, i.jsxs)(h.D, {
                                className: G.DD,
                                onClick: () => s(null),
                                children: [
                                    (0, i.jsx)(v.A, { direction: v.A.Directions.LEFT }),
                                    (0, i.jsx)(g.E, {
                                        className: G.Qw,
                                        variant: "text-md/semibold",
                                        color: "none",
                                        children: O.intl.string(O.t["13/7kX"]),
                                    }),
                                ],
                            }),
                            (0, i.jsx)(c.m, {
                                position: "top",
                                "aria-label": O.intl.string(O.t.AbxKtv),
                                __unsupportedReactNodeAsText: (0, i.jsx)(g.E, {
                                    className: G.YL,
                                    variant: "text-sm/normal",
                                    children: O.intl.string(O.t.AbxKtv),
                                }),
                                children: (0, i.jsx)(h.D, {
                                    className: G.Cm,
                                    onClick: () => {
                                        A.A.createRole(t.id), a(L.T$.DISPLAY);
                                    },
                                    children: (0, i.jsx)(x.j, {
                                        size: "custom",
                                        color: "currentColor",
                                        width: 20,
                                        height: 20,
                                    }),
                                }),
                            }),
                        ],
                    }),
                    (0, i.jsx)(_.Ch, {
                        className: G.p_,
                        ref: w,
                        onScroll: T,
                        children: (0, i.jsx)(m.V, {
                            selectedItem: n,
                            onItemSelect: (e) => s(e),
                            orientation: "vertical",
                            children: o.map((e, l) =>
                                (0, i.jsx)(
                                    k,
                                    {
                                        guild: t,
                                        role: e,
                                        highestRole: u,
                                        selectedItem: n,
                                        onClick: () => s(e.id),
                                        currentPosition: l,
                                        onDragStart: D,
                                        onDragReset: M,
                                        onDragComplete: U,
                                        roleStyle: p,
                                    },
                                    e.id,
                                ),
                            ),
                        }),
                    }),
                ],
            }),
        })
    );
}
