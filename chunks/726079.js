n.d(t, { l: () => d });
var i = n(627968),
    a = n(64700),
    r = n(397927),
    l = n(646881),
    s = n(92534),
    o = n(66510);
function d(e) {
    let { onOpen: t, onClose: n, children: d, popoutPosition: c, popoutAlign: u } = e,
        [A, _] = a.useState(!1),
        h = a.useRef(null),
        m = a.useCallback(() => {
            _(!1), n?.();
        }, [n]),
        { handlePrimaryAction: g, handleContextMenu: p } = (0, s.B)(m),
        E = a.useCallback(() => {
            _((e) => {
                let i = !e;
                return i ? t?.() : n?.(), i;
            });
        }, [n, t]),
        I = a.useCallback(
            () =>
                (0, i.jsx)("div", {
                    className: o.k,
                    children: (0, i.jsx)(l.$, { onPrimaryAction: g, onContextMenu: p }),
                }),
            [p, g],
        );
    return (0, i.jsx)(r.YNO, {
        targetElementRef: h,
        animation: r.YNO.Animation.NONE,
        position: c,
        align: u,
        autoInvert: !1,
        shouldShow: A,
        onRequestClose: m,
        renderPopout: I,
        ignoreModalClicks: !0,
        clickTrap: !0,
        children: (e, t) => {
            let { isShown: n } = t;
            return d(E, n, e, h);
        },
    });
}
