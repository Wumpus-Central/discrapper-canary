var n = a(477900),
    l = a(582128),
    i = a(503698),
    s = a.n(i),
    r = a(862482),
    o = a(939249),
    d = a(165862),
    c = a(477782),
    u = a(265872),
    m = a(765671),
    h = a(949091),
    p = a(61780),
    g = a(403362),
    x = a(867041),
    b = a(786574),
    v = a(730441);
function j(e) {
    let { id: t, selected: a, onClick: l, children: i, ref: r } = e;
    return (0, n.jsx)(o.D, {
        className: s()(v.V3, { [v.wH]: a }),
        "data-tab-id": t,
        innerRef: r,
        onClick: l,
        children: i,
    });
}
function f(e) {
    let { tabs: t, selectedTabId: a, onSelectTab: i } = e,
        s = l.useRef(new Map()),
        [o, f] = l.useState(() => new Set()),
        { ref: y, width: E } = (0, m.Ay)(),
        C = l.useRef(null),
        S = (0, b.N)(t, i),
        _ = (0, h.A)();
    l.useEffect(() => {
        if (null == E) return;
        let e = new Set(),
            n = E ?? 0;
        for (let l of ((n -= s.current.get(a)?.getBoundingClientRect().width ?? 0), t))
            l.id !== a && (n -= s.current.get(l.id)?.getBoundingClientRect().width ?? 0) < 0 && e.add(l.id);
        f(e);
    }, [t, E, y, a]);
    let N = l.useCallback(
        (e) => {
            let { closePopout: t } = e;
            return (0, n.jsxs)(d.W, {
                "data-menu-migrated": !0,
                navId: "devtools-overflow",
                variant: "fixed",
                onClose: t,
                "aria-label": "Overflowed DevTools Tabs",
                onSelect: t,
                children: [S, null != _ && (0, n.jsx)(c.rX, { "aria-label": "Playgrounds", children: _ })],
            });
        },
        [S, _],
    );
    return (0, n.jsxs)("div", {
        className: v.Mv,
        children: [
            (0, n.jsxs)("div", {
                className: v.$H,
                ref: y,
                children: [
                    t
                        .map((e) => {
                            let { id: t, name: l } = e;
                            if (!o.has(t))
                                return (0, n.jsx)(
                                    j,
                                    { id: t, selected: a === t, onClick: a !== t ? () => i(t) : void 0, children: l },
                                    t,
                                );
                        })
                        .filter(g.Vq),
                    (0, n.jsx)("div", {
                        className: v.g,
                        children: t.map((e) => {
                            let { id: t, name: l } = e;
                            return (0, n.jsx)(
                                j,
                                {
                                    id: t,
                                    selected: a === t,
                                    ref: (e) => {
                                        s.current.set(t, e);
                                    },
                                    onClick: a !== t ? () => i(t) : void 0,
                                    children: l,
                                },
                                t,
                            );
                        }),
                    }),
                ],
            }),
            (0, n.jsx)("div", {
                className: v.MK,
                children:
                    (o.size > 0 || null != _) &&
                    (0, n.jsx)(u.Y, {
                        targetElementRef: C,
                        layerContext: x.He,
                        renderPopout: N,
                        position: "bottom",
                        align: "right",
                        autoInvert: !1,
                        spacing: 0,
                        children: (e) =>
                            (0, n.jsx)(r.$n, {
                                ...e,
                                buttonRef: C,
                                className: v.Iq,
                                size: r.$n.Sizes.ICON,
                                look: r.$n.Looks.BLANK,
                                children: (0, n.jsx)(p.A, {
                                    className: v.__invalid_overflowIcon,
                                    width: 16,
                                    height: 16,
                                }),
                            }),
                    }),
            }),
        ],
    });
}
a.d(
    t,
    {},
    {
        A: function (e, t) {
            let { tabs: a, initialSelectedTabId: i, onChangeTab: s } = e,
                [r, o] = l.useState(i ?? a[0]?.id);
            return {
                TabBar: l.useCallback(
                    () =>
                        (0, n.jsx)(f, {
                            tabs: a,
                            selectedTabId: r,
                            onSelectTab: (e) => {
                                (o(e), s?.(e));
                            },
                        }),
                    [r, o, s, ...t],
                ),
                renderSelectedTab: a.find((e) => e.id === r)?.render ?? (() => null),
                selectedTabId: r,
                setSelectedTabId: o,
            };
        },
    },
);
