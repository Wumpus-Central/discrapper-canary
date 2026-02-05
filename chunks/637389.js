"use strict";
n.d(t, { u: () => g });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(508382),
    l = n(158954),
    u = n(502939),
    c = n(563014),
    d = n(397927),
    _ = n(298063),
    f = n(885621),
    p = n(658122);
let h = "right-start",
    m = i.createContext(h);
function g(e) {
    let t = i.useContext(m),
        { subMenuClassName: n, parentItem: a, isFocused: h, menuSubmenuProps: g, renderSubmenu: E } = e,
        { focusIndex: A, isUsingKeyboardNavigation: I, ...T } = g,
        y = i.useRef(null),
        S = i.useRef(null),
        v = i.useRef(null),
        [C, b] = i.useState(!1);
    i.useLayoutEffect(() => {
        b(!0);
    }, []),
        i.useLayoutEffect(() => {
            h && (0, c.Y)(y);
        }, [h]);
    let N = (0, r.jsx)("div", {
            className: p.submenuPaddingContainer,
            children: (0, r.jsx)("div", {
                className: s()(p.submenu, n),
                ...T,
                ref: v,
                children: (0, r.jsx)(l.IpV, { className: p.scroller, children: E() }),
            }),
        }),
        R = (0, u.D)("MenuSubmenuItem"),
        O = (0, _.Y)("MenuSubmenuItem"),
        [D, L] = i.useState(!1);
    if (R)
        return (0, r.jsx)(o.Ow, {
            open: D || h,
            viewportPadding: f.FD,
            maxHeight: f.H0,
            onOpenChange: L,
            spacing: O ? -4 : 4,
            placement: t,
            portal: !1,
            crossAccessFlip: !1,
            trigger: "hover",
            renderLayer: (e) => {
                let { placement: t } = e;
                return (0, r.jsx)(m.Provider, { value: t, children: N });
            },
            children: (e) => {
                let { ref: t, props: n } = e;
                return (0, r.jsx)("div", { ref: t, ...n, children: a });
            },
        });
    let w = (0, r.jsx)(d.QCO, {
        targetRef: S,
        autoInvert: !0,
        nudgeAlignIntoViewport: !0,
        fixed: !0,
        spacing: 4,
        position: "right",
        align: "top",
        children: () => N,
    });
    return (0, r.jsxs)("div", { ref: y, children: [(0, r.jsx)("div", { ref: S }), a, h && C ? w : null] });
}
