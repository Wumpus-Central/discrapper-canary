"use strict";
n.d(t, { c: () => _ });
var r = n(627968),
    i = n(64700),
    s = n(508382),
    a = n(502939),
    o = n(563014),
    l = n(623646),
    u = n(962125),
    d = n(885621),
    c = n(359823);
function _(e) {
    let { parentItem: t, isFocused: n, menuSubmenuProps: _, rows: f, rowHeight: E, onScroll: h, listClassName: p } = e,
        m = i.useRef(null),
        g = i.useRef(null),
        A = i.useRef(null),
        I = i.useRef(null),
        { isUsingKeyboardNavigation: T, focusIndex: S, ...y } = _;
    i.useLayoutEffect(() => {
        n && ((0, o.Y)(m), A.current?.focus());
    }, [n]),
        i.useEffect(() => {
            n && S >= 0 && T && I.current?.scrollRowIntoView(S);
        }, [n, T, S]);
    let N = i.useCallback((e) => f[e], [f]),
        O = (0, a.D)("MenuSubmenuListItem"),
        R = () =>
            f.length > 0 &&
            (0, r.jsx)("div", {
                className: c.submenuPaddingContainer,
                children: (0, r.jsx)("div", {
                    className: c.submenu,
                    ...y,
                    ref: A,
                    children: (0, r.jsx)(u.A, {
                        ref: I,
                        className: p,
                        listPadding: [6, 0, 6, 8],
                        onScroll: h,
                        renderRow: N,
                        rowCount: f.length,
                        rowHeight: E,
                    }),
                }),
            });
    if (O)
        return (0, r.jsx)(s.Ow, {
            spacing: 4,
            placement: "right-start",
            autoFlip: !0,
            portal: !1,
            viewportPadding: d.FD,
            maxHeight: d.H0,
            renderLayer: R,
            children: (e) => {
                let { ref: n, props: i } = e;
                return (0, r.jsx)("div", { ref: n, ...i, children: t });
            },
        });
    let v = (0, r.jsx)(l.Q, {
        targetRef: g,
        autoInvert: !0,
        nudgeAlignIntoViewport: !0,
        fixed: !0,
        spacing: 4,
        position: "right",
        align: "top",
        className: c.submenuLayer,
        children: R,
    });
    return (0, r.jsxs)("div", { ref: m, children: [(0, r.jsx)("div", { ref: g }), t, n ? v : null] });
}
