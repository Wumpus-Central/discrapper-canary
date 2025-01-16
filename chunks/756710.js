r.d(n, {
    o: function () {
        return f;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(120356),
    o = r.n(s),
    l = r(1561),
    u = r(743236),
    c = r(939350),
    d = r(450793);
function f(e) {
    let { children: n, color: r = 'default', isFocused: s = !1, disabled: f = !1, keepItemStyles: _ = !1, menuItemProps: h, action: p, dontCloseOnActionIfHoldingShiftKey: m, dontCloseOnAction: g, onClose: E } = e,
        v = a.useRef(null);
    a.useEffect(() => {
        s && (0, u.F)(v);
    }, [s]);
    let I = a.useCallback(
            (e) => {
                if (null == p) return !1;
                !(e.shiftKey && m) && !g && E(), e.persist(), requestAnimationFrame(() => p(e));
            },
            [p, E, m, g]
        ),
        T = _ ? o()(d.item, c._[r], { [d.focused]: s }) : d.customItem;
    return (0, i.jsx)(l.P, {
        innerRef: v,
        className: T,
        onClick: f ? void 0 : I,
        'aria-disabled': f,
        ...h,
        children: n({
            color: r,
            disabled: f,
            isFocused: s
        })
    });
}
