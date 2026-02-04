n.d(t, {
    l: () => c,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(397927),
    a = n(646881),
    s = n(92534),
    o = n(760799);

function c(e) {
    let { onOpen: t, onClose: n, children: c, popoutPosition: u, popoutAlign: d } = e,
        [p, h] = i.useState(!1),
        f = i.useRef(null),
        g = i.useCallback(() => {
            h(!1), null == n || n();
        }, [n]),
        { handlePrimaryAction: m, handleContextMenu: A } = (0, s.B)(g),
        _ = i.useCallback(() => {
            h((e) => {
                let r = !e;
                return r ? null == t || t() : null == n || n(), r;
            });
        }, [n, t]),
        b = i.useCallback(
            () =>
                (0, r.jsx)("div", {
                    className: o.k,
                    children: (0, r.jsx)(a.$, {
                        onPrimaryAction: m,
                        onContextMenu: A,
                    }),
                }),
            [A, m],
        );
    return (0, r.jsx)(l.YNO, {
        targetElementRef: f,
        animation: l.YNO.Animation.NONE,
        position: u,
        align: d,
        autoInvert: !1,
        shouldShow: p,
        onRequestClose: g,
        renderPopout: b,
        ignoreModalClicks: !0,
        clickTrap: !0,
        children: (e, t) => {
            let { isShown: n } = t;
            return c(_, n, e, f);
        },
    });
}
