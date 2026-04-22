"use strict";
n.d(t, { a: () => c });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(939249),
    l = n(563014),
    u = n(885621),
    d = n(359823);
function c(e) {
    let {
            children: t,
            color: n = "default",
            isFocused: s = !1,
            disabled: c = !1,
            keepItemStyles: _ = !1,
            menuItemProps: f,
            action: E,
            dontCloseOnActionIfHoldingShiftKey: h,
            dontCloseOnAction: p,
            onClose: m,
        } = e,
        g = i.useRef(null);
    i.useEffect(() => {
        s && (0, l.Y)(g);
    }, [s]);
    let A = i.useCallback(
            (e) => {
                if (null == E) return !1;
                (e.shiftKey && h) || p || m(), e.persist(), requestAnimationFrame(() => E(e));
            },
            [E, m, h, p],
        ),
        I = _ ? a()(d.item, u.jV[n], { [d.focused]: s }) : d.customItem;
    return (0, r.jsx)(o.D, {
        innerRef: g,
        className: I,
        onClick: c ? void 0 : A,
        "aria-disabled": c,
        ...f,
        children: t({ color: n, disabled: c, isFocused: s }),
    });
}
