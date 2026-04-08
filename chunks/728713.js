"use strict";
n.d(t, { A: () => G });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(131346),
    o = n(522437),
    d = n(311907),
    c = n(990078),
    u = n(397927),
    m = n(442433),
    g = n(686956),
    x = n(964486),
    h = n(775602),
    _ = n(63104),
    p = n(861197),
    A = n(967144),
    f = n(34457),
    j = n(576705),
    N = n(792831),
    E = n(396816),
    C = n(359837),
    T = n(533448),
    I = n(316506),
    b = n(927573),
    v = n(652215),
    S = n(985018),
    y = n(87024);
let R = "DRAGGABLE_ROLE";
function O(e) {
    let t,
        {
            guild: s,
            role: l,
            highestRole: d,
            selectedItem: c,
            onClick: g,
            currentPosition: x,
            onDragStart: h,
            onDragReset: p,
            onDragComplete: j,
            roleStyle: N,
        } = e,
        E = (0, C.c)(s, d, l),
        T = (0, f.Oy)(l),
        I = null == E && !T,
        b = l.tags?.guild_connections !== void 0,
        S = (0, A.X_)(s.id, l, l.colorStrings),
        [, O] = (0, a.i)({
            type: R,
            item: () => (h(l.id), { id: l.id, position: x }),
            canDrag: () => I,
            end: (e, t) => {
                let n = t.getDropResult();
                null == n ? p() : j(n.roleId);
            },
        }),
        [{ dragSourcePosition: G }, L] = (0, o.H)({
            accept: R,
            canDrop: () => I,
            collect: (e) => {
                let t = e.getItem();
                return null != t && e.isOver() && e.canDrop()
                    ? { dragSourcePosition: t.position }
                    : { dragSourcePosition: null };
            },
            drop: () => ({ roleId: l.id }),
        }),
        D = l.colorString ?? v.TpD;
    return (
        (t = b
            ? (0, i.jsx)(_.A, { size: 12, color: l.colorString, className: y.Ev })
            : "dot" === N
              ? (0, i.jsx)(u.WYI, { color: D, colors: S, background: !1, tooltip: !1 })
              : (0, i.jsx)(u.RYH, { color: D, colors: S })),
        (0, i.jsxs)(u.VQ0.Item, {
            className: r()(y.nM, { [y.qo]: null !== G && x < G, [y.BP]: null !== G && x > G }),
            id: l.id,
            selectedItem: c,
            itemType: "side",
            onClick: g,
            onContextMenu: function (e) {
                (0, m.L3)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 665013));
                    return (t) => (0, i.jsx)(e, { ...t, role: l, guild: s });
                });
            },
            "aria-label": l.name,
            clickableRef: (e) => {
                O(L(e?.ref ?? null));
            },
            children: [
                t,
                null != E ? (0, i.jsx)(C.A, { className: y.s2, tooltipText: E }) : null,
                (0, i.jsx)(u.Text, {
                    variant: "text-sm/medium",
                    color: T ? "text-strong" : "interactive-text-active",
                    lineClamp: 1,
                    children: l.name,
                }),
            ],
        })
    );
}
function G(e) {
    let { guild: t, currentRoleId: n, setCurrentRoleId: l, setSelectedSection: a } = e,
        o = (0, d.bG)([E.A], () => E.A.roles),
        m = (0, d.bG)([j.A], () => j.A.getHighestRole(t)),
        _ = (0, d.bG)([h.A], () => h.A.roleStyle),
        [A, f] = s.useState(o.length),
        { scrolledToTop: C, handleScroll: v } = (0, I.u)(),
        { handleDragStart: R, handleDragReset: G, handleDragComplete: L } = (0, T.A)(o),
        D = s.useRef(null),
        M = s.useCallback(
            (e) => {
                let t = o.findIndex((t) => t.id === e);
                D.current?.getScrollerNode()?.scrollTo({ top: Math.max((t - 2) * 34, 0) });
            },
            [o],
        );
    return (
        (0, x.Ay)(() => {
            M(n);
        }),
        s.useEffect(() => {
            o.length > A && M(n), o.length !== A && f(o.length);
        }, [o.length, A, f, M, n]),
        (0, i.jsx)(p.Ay.Sidebar, {
            className: y.pz,
            children: (0, i.jsxs)("div", {
                className: y.kL,
                children: [
                    (0, i.jsxs)("div", {
                        className: r()(y.gn, { [y.P6]: !C }),
                        children: [
                            (0, i.jsxs)(u.DUT, {
                                className: y.DD,
                                onClick: () => l(null),
                                children: [
                                    (0, i.jsx)(N.A, { direction: N.A.Directions.LEFT }),
                                    (0, i.jsx)(u.Text, {
                                        className: y.Qw,
                                        variant: "text-md/semibold",
                                        color: "none",
                                        children: S.intl.string(S.t["13/7kX"]),
                                    }),
                                ],
                            }),
                            (0, i.jsx)(c.m, {
                                position: "top",
                                "aria-label": S.intl.string(S.t.AbxKtv),
                                __unsupportedReactNodeAsText: (0, i.jsx)(u.Text, {
                                    className: y.YL,
                                    variant: "text-sm/normal",
                                    children: S.intl.string(S.t.AbxKtv),
                                }),
                                children: (0, i.jsx)(u.DUT, {
                                    className: y.Cm,
                                    onClick: () => {
                                        g.A.createRole(t.id), a(b.T$.DISPLAY);
                                    },
                                    children: (0, i.jsx)(u.j96, {
                                        size: "custom",
                                        color: "currentColor",
                                        width: 20,
                                        height: 20,
                                    }),
                                }),
                            }),
                        ],
                    }),
                    (0, i.jsx)(u.T7Y, {
                        className: y.p_,
                        ref: D,
                        onScroll: v,
                        children: (0, i.jsx)(u.VQ0, {
                            selectedItem: n,
                            onItemSelect: (e) => l(e),
                            orientation: "vertical",
                            children: o.map((e, s) =>
                                (0, i.jsx)(
                                    O,
                                    {
                                        guild: t,
                                        role: e,
                                        highestRole: m,
                                        selectedItem: n,
                                        onClick: () => l(e.id),
                                        currentPosition: s,
                                        onDragStart: R,
                                        onDragReset: G,
                                        onDragComplete: L,
                                        roleStyle: _,
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
