"use strict";
n.d(t, { a: () => d });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(939249),
    l = n(563014),
    u = n(885621),
    c = n(32271);
function d(e) {
    let {
            children: t,
            color: n = "default",
            isFocused: s = !1,
            disabled: d = !1,
            keepItemStyles: _ = !1,
            menuItemProps: f,
            action: p,
            dontCloseOnActionIfHoldingShiftKey: h,
            dontCloseOnAction: E,
            onClose: m,
        } = e,
        g = i.useRef(null);
    i.useEffect(() => {
        s && (0, l.Y)(g);
    }, [s]);
    let A = i.useCallback(
            (e) => {
                if (null == p) return !1;
                (e.shiftKey && h) || E || m(), e.persist(), requestAnimationFrame(() => p(e));
            },
            [p, m, h, E],
        ),
        I = _ ? a()(c.item, u.jV[n], { [c.focused]: s }) : c.customItem;
    return (0, r.jsx)(o.D, {
        innerRef: g,
        className: I,
        onClick: d ? void 0 : A,
        "aria-disabled": d,
        ...f,
        children: t({ color: n, disabled: d, isFocused: s }),
    });
}
