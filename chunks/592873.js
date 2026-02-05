"use strict";
n.d(t, { c: () => _ });
var r = n(627968),
    i = n(64700),
    a = n(508382),
    s = n(502939),
    o = n(563014),
    l = n(397927),
    u = n(962125),
    c = n(885621),
    d = n(658122);
function _(e) {
    let { parentItem: t, isFocused: n, menuSubmenuProps: _, rows: f, rowHeight: p, onScroll: h, listClassName: m } = e,
        g = i.useRef(null),
        E = i.useRef(null),
        A = i.useRef(null),
        I = i.useRef(null),
        { isUsingKeyboardNavigation: T, focusIndex: y, ...S } = _;
    i.useLayoutEffect(() => {
        n && ((0, o.Y)(g), A.current?.focus());
    }, [n]),
        i.useEffect(() => {
            n && y >= 0 && T && I.current?.scrollRowIntoView(y);
        }, [n, T, y]);
    let v = i.useCallback((e) => f[e], [f]),
        C = (0, s.D)("MenuSubmenuListItem"),
        b = () =>
            f.length > 0 &&
            (0, r.jsx)("div", {
                className: d.submenuPaddingContainer,
                children: (0, r.jsx)("div", {
                    className: d.submenu,
                    ...S,
                    ref: A,
                    children: (0, r.jsx)(u.A, {
                        ref: I,
                        className: m,
                        listPadding: [6, 0, 6, 8],
                        onScroll: h,
                        renderRow: v,
                        rowCount: f.length,
                        rowHeight: p,
                    }),
                }),
            });
    if (C)
        return (0, r.jsx)(a.Ow, {
            spacing: 4,
            placement: "right-start",
            autoFlip: !0,
            portal: !1,
            viewportPadding: c.FD,
            maxHeight: c.H0,
            renderLayer: b,
            children: (e) => {
                let { ref: n, props: i } = e;
                return (0, r.jsx)("div", { ref: n, ...i, children: t });
            },
        });
    let N = (0, r.jsx)(l.QCO, {
        targetRef: E,
        autoInvert: !0,
        nudgeAlignIntoViewport: !0,
        fixed: !0,
        spacing: 4,
        position: "right",
        align: "top",
        children: b,
    });
    return (0, r.jsxs)("div", { ref: g, children: [(0, r.jsx)("div", { ref: E }), t, n ? N : null] });
}
