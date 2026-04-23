"use strict";
n.d(t, { u: () => p });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(508382),
    l = n(573613),
    u = n(502939),
    d = n(563014),
    c = n(623646),
    _ = n(298063),
    f = n(885621),
    E = n(32271);
let h = i.createContext("right-start");
function p(e) {
    let t = i.useContext(h),
        { subMenuClassName: n, parentItem: s, isFocused: p, menuSubmenuProps: m, renderSubmenu: g } = e,
        { focusIndex: A, isUsingKeyboardNavigation: I, ...T } = m,
        S = i.useRef(null),
        y = i.useRef(null),
        N = i.useRef(null),
        [O, R] = i.useState(!1);
    i.useLayoutEffect(() => {
        R(!0);
    }, []),
        i.useLayoutEffect(() => {
            p && (0, d.Y)(S);
        }, [p]);
    let v = (0, r.jsx)("div", {
            className: E.submenuPaddingContainer,
            children: (0, r.jsx)("div", {
                className: a()(E.submenu, n),
                ...T,
                ref: N,
                children: (0, r.jsx)(l.Ip, { className: E.scroller, children: g() }),
            }),
        }),
        C = (0, u.D)("MenuSubmenuItem"),
        b = (0, _.Y)("MenuSubmenuItem"),
        [D, L] = i.useState(!1);
    if (C)
        return (0, r.jsx)(o.Ow, {
            open: D || p,
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
                return (0, r.jsx)(h.Provider, { value: t, children: v });
            },
            children: (e) => {
                let { ref: t, props: n } = e;
                return (0, r.jsx)("div", { ref: t, ...n, children: s });
            },
        });
    let w = (0, r.jsx)(c.Q, {
        targetRef: y,
        autoInvert: !0,
        nudgeAlignIntoViewport: !0,
        fixed: !0,
        spacing: 4,
        position: "right",
        align: "top",
        className: E.submenuLayer,
        children: () => v,
    });
    return (0, r.jsxs)("div", { ref: S, children: [(0, r.jsx)("div", { ref: y }), s, p && O ? w : null] });
}
