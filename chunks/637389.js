"use strict";
n.d(t, { u: () => E });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(508382),
    l = n(158954),
    u = n(502939),
    c = n(563014),
    d = n(397927),
    _ = n(298063),
    f = n(885621),
    p = n(32271);
let h = "right-start",
    m = i.createContext(h);
function E(e) {
    let t = i.useContext(m),
        { subMenuClassName: n, parentItem: s, isFocused: h, menuSubmenuProps: E, renderSubmenu: g } = e,
        { focusIndex: A, isUsingKeyboardNavigation: I, ...T } = E,
        S = i.useRef(null),
        y = i.useRef(null),
        v = i.useRef(null),
        [N, C] = i.useState(!1);
    i.useLayoutEffect(() => {
        C(!0);
    }, []),
        i.useLayoutEffect(() => {
            h && (0, c.Y)(S);
        }, [h]);
    let R = (0, r.jsx)("div", {
            className: p.submenuPaddingContainer,
            children: (0, r.jsx)("div", {
                className: a()(p.submenu, n),
                ...T,
                ref: v,
                children: (0, r.jsx)(l.IpV, { className: p.scroller, children: g() }),
            }),
        }),
        O = (0, u.D)("MenuSubmenuItem"),
        b = (0, _.Y)("MenuSubmenuItem"),
        [D, L] = i.useState(!1);
    if (O)
        return (0, r.jsx)(o.Ow, {
            open: D || h,
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
                return (0, r.jsx)(m.Provider, { value: t, children: R });
            },
            children: (e) => {
                let { ref: t, props: n } = e;
                return (0, r.jsx)("div", { ref: t, ...n, children: s });
            },
        });
    let w = (0, r.jsx)(d.QCO, {
        targetRef: y,
        autoInvert: !0,
        nudgeAlignIntoViewport: !0,
        fixed: !0,
        spacing: 4,
        position: "right",
        align: "top",
        className: p.submenuLayer,
        children: () => R,
    });
    return (0, r.jsxs)("div", { ref: S, children: [(0, r.jsx)("div", { ref: y }), s, h && N ? w : null] });
}
