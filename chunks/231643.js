a.d(t, { A: () => y });
var n = a(477900),
    l = a(582128),
    s = a(503698),
    i = a.n(s),
    r = a(862482),
    o = a(939249),
    d = a(980707),
    c = a(477782),
    u = a(922016),
    m = a(765671),
    h = a(949091),
    x = a(61780),
    p = a(403362),
    g = a(867041),
    v = a(786574),
    j = a(730441);
let f = l.forwardRef(function (e, t) {
    let { id: a, selected: l, onClick: s, children: r } = e;
    return (0, n.jsx)(o.D, {
        className: i()(j.V3, { [j.wH]: l }),
        "data-tab-id": a,
        innerRef: t,
        onClick: s,
        children: r,
    });
});
function b(e) {
    let { tabs: t, selectedTabId: a, onSelectTab: s } = e,
        i = l.useRef(new Map()),
        [o, b] = l.useState(() => new Set()),
        { ref: y, width: E } = (0, m.Ay)(),
        C = l.useRef(null),
        _ = (0, v.N)(t, s),
        S = (0, h.A)();
    l.useEffect(() => {
        if (null == E) return;
        let e = new Set(),
            n = E ?? 0;
        for (let l of ((n -= i.current.get(a)?.getBoundingClientRect().width ?? 0), t))
            l.id !== a && (n -= i.current.get(l.id)?.getBoundingClientRect().width ?? 0) < 0 && e.add(l.id);
        b(e);
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
                children: [_, null != S && (0, n.jsx)(c.rX, { "aria-label": "Playgrounds", children: S })],
            });
        },
        [_, S],
    );
    return (0, n.jsxs)("div", {
        className: j.Mv,
        children: [
            (0, n.jsxs)("div", {
                className: j.$H,
                ref: y,
                children: [
                    t
                        .map((e) => {
                            let { id: t, name: l } = e;
                            if (!o.has(t))
                                return (0, n.jsx)(
                                    f,
                                    { id: t, selected: a === t, onClick: a !== t ? () => s(t) : void 0, children: l },
                                    t,
                                );
                        })
                        .filter(p.Vq),
                    (0, n.jsx)("div", {
                        className: j.g,
                        children: t.map((e) => {
                            let { id: t, name: l } = e;
                            return (0, n.jsx)(
                                f,
                                {
                                    id: t,
                                    selected: a === t,
                                    ref: (e) => {
                                        i.current.set(t, e);
                                    },
                                    onClick: a !== t ? () => s(t) : void 0,
                                    children: l,
                                },
                                t,
                            );
                        }),
                    }),
                ],
            }),
            (0, n.jsx)("div", {
                className: j.MK,
                children:
                    (o.size > 0 || null != S) &&
                    (0, n.jsx)(u.Y, {
                        targetElementRef: C,
                        layerContext: g.He,
                        renderPopout: N,
                        position: "bottom",
                        align: "right",
                        autoInvert: !1,
                        spacing: 0,
                        children: (e) =>
                            (0, n.jsx)(r.$n, {
                                ...e,
                                buttonRef: C,
                                className: j.Iq,
                                size: r.$n.Sizes.ICON,
                                look: r.$n.Looks.BLANK,
                                children: (0, n.jsx)(x.A, {
                                    className: j.__invalid_overflowIcon,
                                    width: 16,
                                    height: 16,
                                }),
                            }),
                    }),
            }),
        ],
    });
}
function y(e, t) {
    let { tabs: a, initialSelectedTabId: s, onChangeTab: i } = e,
        [r, o] = l.useState(s ?? a[0]?.id);
    return {
        TabBar: l.useCallback(
            () =>
                (0, n.jsx)(b, {
                    tabs: a,
                    selectedTabId: r,
                    onSelectTab: (e) => {
                        (o(e), i?.(e));
                    },
                }),
            [r, o, i, ...t],
        ),
        renderSelectedTab: a.find((e) => e.id === r)?.render ?? (() => null),
        selectedTabId: r,
    };
}
