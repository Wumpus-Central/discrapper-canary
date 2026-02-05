"use strict";
n.d(t, { a: () => d });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(158954),
    l = n(563014),
    u = n(885621),
    c = n(658122);
function d(e) {
    let {
            children: t,
            color: n = "default",
            isFocused: a = !1,
            disabled: d = !1,
            keepItemStyles: _ = !1,
            menuItemProps: f,
            action: p,
            dontCloseOnActionIfHoldingShiftKey: h,
            dontCloseOnAction: m,
            onClose: g,
        } = e,
        E = i.useRef(null);
    i.useEffect(() => {
        a && (0, l.Y)(E);
    }, [a]);
    let A = i.useCallback(
            (e) => {
                if (null == p) return !1;
                (e.shiftKey && h) || m || g(), e.persist(), requestAnimationFrame(() => p(e));
            },
            [p, g, h, m],
        ),
        I = _ ? s()(c.item, u.jV[n], { [c.focused]: a }) : c.customItem;
    return (0, r.jsx)(o.DUT, {
        innerRef: E,
        className: I,
        onClick: d ? void 0 : A,
        "aria-disabled": d,
        ...f,
        children: t({ color: n, disabled: d, isFocused: a }),
    });
}
