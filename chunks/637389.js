"use strict";
n.d(t, { u: () => E });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(508382),
    l = n(573613),
    u = n(502939),
    c = n(563014),
    d = n(623646),
    _ = n(298063),
    f = n(885621),
    p = n(32271);
let h = i.createContext("right-start");
function E(e) {
    let t = i.useContext(h),
        { subMenuClassName: n, parentItem: s, isFocused: E, menuSubmenuProps: m, renderSubmenu: g } = e,
        { focusIndex: A, isUsingKeyboardNavigation: I, ...T } = m,
        S = i.useRef(null),
        y = i.useRef(null),
        N = i.useRef(null),
        [v, C] = i.useState(!1);
    i.useLayoutEffect(() => {
        C(!0);
    }, []),
        i.useLayoutEffect(() => {
            E && (0, c.Y)(S);
        }, [E]);
    let O = (0, r.jsx)("div", {
            className: p.submenuPaddingContainer,
            children: (0, r.jsx)("div", {
                className: a()(p.submenu, n),
                ...T,
                ref: N,
                children: (0, r.jsx)(l.Ip, { className: p.scroller, children: g() }),
            }),
        }),
        R = (0, u.D)("MenuSubmenuItem"),
        b = (0, _.Y)("MenuSubmenuItem"),
        [D, L] = i.useState(!1);
    if (R)
        return (0, r.jsx)(o.Ow, {
            open: D || E,
            viewportPadding: f.FD,
            maxHeight: f.H0,
            onOpenChange: L,
            spacing: b ? -4 : 4,
            placement: t,
            portal: !1,
            crossAccessFlip: !1,
            trigger: "hover",
            renderLayer: (e) => {
                let { placement: t } = e;
                return (0, r.jsx)(h.Provider, { value: t, children: O });
            },
            children: (e) => {
                let { ref: t, props: n } = e;
                return (0, r.jsx)("div", { ref: t, ...n, children: s });
            },
        });
    let w = (0, r.jsx)(d.Q, {
        targetRef: y,
        autoInvert: !0,
        nudgeAlignIntoViewport: !0,
        fixed: !0,
        spacing: 4,
        position: "right",
        align: "top",
        className: p.submenuLayer,
        children: () => O,
    });
    return (0, r.jsxs)("div", { ref: S, children: [(0, r.jsx)("div", { ref: y }), s, E && v ? w : null] });
}
