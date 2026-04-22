a.d(n, { l: () => c });
var t = a(627968),
    r = a(64700),
    l = a(265872),
    i = a(646881),
    o = a(92534),
    _ = a(383614);
function c(e) {
    let { onOpen: n, onClose: a, children: c, popoutPosition: d, popoutAlign: s } = e,
        [u, I] = r.useState(!1),
        f = r.useRef(null),
        p = r.useCallback(() => {
            I(!1), a?.();
        }, [a]),
        { handlePrimaryAction: h, handleContextMenu: C } = (0, o.B)(p),
        E = r.useCallback(() => {
            I((e) => {
                let t = !e;
                return t ? n?.() : a?.(), t;
            });
        }, [a, n]),
        N = r.useCallback(
            () =>
                (0, t.jsx)("div", {
                    className: _.k,
                    children: (0, t.jsx)(i.$, { onPrimaryAction: h, onContextMenu: C }),
                }),
            [C, h],
        );
    return (0, t.jsx)(l.Y, {
        targetElementRef: f,
        animation: l.Y.Animation.NONE,
        position: d,
        align: s,
        autoInvert: !1,
        shouldShow: u,
        onRequestClose: p,
        renderPopout: N,
        ignoreModalClicks: !0,
        clickTrap: !0,
        children: (e, n) => {
            let { isShown: a } = n;
            return c(E, a, e, f);
        },
    });
}
