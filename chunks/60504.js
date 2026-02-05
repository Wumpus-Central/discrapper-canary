n.d(t, { A: () => u });
var i = n(627968),
    l = n(64700),
    s = n(453903),
    a = n(397927),
    r = n(421773),
    o = n(650583),
    d = n(342910);
function c(e) {
    let { renderPopout: t, onMouseEnter: n, onMouseLeave: s, closePopout: a, isHovered: r, ...o } = e;
    return (
        l.useEffect(() => {
            r || a();
        }, [a, r]),
        (0, i.jsx)("div", { onMouseEnter: n, onMouseLeave: s, children: t({ closePopout: a, ...o }) })
    );
}
let u = l.forwardRef(function (e, t) {
    let {
            renderPopout: n,
            popoutTargetRef: u,
            children: h,
            align: A = "left",
            isPopoutBlocked: g,
            onPopoutOpen: m,
            onPopoutClose: p,
            onRequestClose: _,
        } = e,
        [x, f] = l.useState(!1),
        { isHovered: E, setIsHovered: C, onMouseEnter: I, onMouseLeave: S, cancelTimers: b } = (0, r.A)(200, 300);
    function N(e) {
        "focus" === e.type || x || I();
    }
    function T() {
        x || S();
    }
    function j(e) {
        b(), f(!x), x ? p?.() : m?.(), (!E || x) && e();
    }
    l.useImperativeHandle(
        t,
        () => ({
            hidePopout() {
                C(!1), f(!1);
            },
        }),
        [C, f],
    );
    let v = (E && !g) || x;
    return (0, i.jsx)(a.YNO, {
        targetElementRef: u,
        animation: a.YNO.Animation.FADE,
        shouldShow: v,
        animationPosition: "top",
        position: "top",
        align: A,
        spacing: 16,
        onRequestClose: () => {
            if (_?.() === s.o) return s.o;
            C(!1), f(!1), p?.();
        },
        renderPopout: (e) =>
            (0, i.jsx)(c, {
                isHovered: v,
                onFocus: () => f(!0),
                onMouseEnter: I,
                onMouseLeave: T,
                renderPopout: n,
                ...e,
            }),
        children: (e) => {
            let { onClick: t, onKeyDown: n } = e;
            return (0, i.jsx)(i.Fragment, {
                children: h({
                    onClick: (e) => j(() => t(e)),
                    onKeyDown: (e) => {
                        (e.key === o.dh.ENTER || e.key === o.dh.SPACE) && j(() => n(e));
                    },
                    className: d.g,
                    onMouseEnter: N,
                    onMouseLeave: T,
                    isActive: x,
                }),
            });
        },
    });
});
