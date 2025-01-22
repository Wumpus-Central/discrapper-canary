r.d(n, {
    o: function () {
        return f;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(120356),
    s = r.n(o),
    l = r(1561),
    u = r(743236),
    c = r(939350),
    d = r(450793);
function f(e) {
    let { children: n, color: r = 'default', isFocused: o = !1, disabled: f = !1, keepItemStyles: p = !1, menuItemProps: h, action: _, dontCloseOnActionIfHoldingShiftKey: m, dontCloseOnAction: g, onClose: E } = e,
        v = a.useRef(null);
    a.useEffect(() => {
        o && (0, u.F)(v);
    }, [o]);
    let y = a.useCallback(
            (e) => {
                if (null == _) return !1;
                !(e.shiftKey && m) && !g && E(), e.persist(), requestAnimationFrame(() => _(e));
            },
            [_, E, m, g]
        ),
        b = p ? s()(d.item, c._[r], { [d.focused]: o }) : d.customItem;
    return (0, i.jsx)(l.P, {
        innerRef: v,
        className: b,
        onClick: f ? void 0 : y,
        'aria-disabled': f,
        ...h,
        children: n({
            color: r,
            disabled: f,
            isFocused: o
        })
    });
}
