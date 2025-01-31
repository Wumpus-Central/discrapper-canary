n.d(t, { Z: () => d }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(481060),
    r = n(579185),
    s = n(420212),
    o = n(638411);
function c(e) {
    let { renderPopout: t, onMouseEnter: n, onMouseLeave: a, closePopout: r, isHovered: s, ...o } = e;
    return (
        l.useEffect(() => {
            s || r();
        }, [r, s]),
        (0, i.jsx)('div', {
            onMouseEnter: n,
            onMouseLeave: a,
            children: t({
                closePopout: r,
                ...o
            })
        })
    );
}
let d = l.forwardRef(function (e, t) {
    let { renderPopout: n, children: d, align: u = 'left', isPopoutBlocked: h, onPopoutOpen: p, onPopoutClose: m } = e,
        [f, g] = l.useState(!1),
        { isHovered: _, setIsHovered: C, onMouseEnter: x, onMouseLeave: v, cancelTimers: E } = (0, r.Z)(200, 300);
    function I(e) {
        'focus' === e.type || f || x();
    }
    function b() {
        f || v();
    }
    function Z(e) {
        E(), g(!f), f ? null == m || m() : null == p || p(), (!_ || f) && e();
    }
    l.useImperativeHandle(
        t,
        () => ({
            hidePopout() {
                C(!1), g(!1);
            }
        }),
        [C, g]
    );
    let N = (_ && !h) || f;
    return (0, i.jsx)(a.yRy, {
        animation: a.yRy.Animation.FADE,
        shouldShow: N,
        animationPosition: 'top',
        position: 'top',
        align: u,
        spacing: 16,
        onRequestClose: () => {
            C(!1), g(!1), null == m || m();
        },
        renderPopout: (e) =>
            (0, i.jsx)(c, {
                isHovered: N,
                onFocus: () => g(!0),
                onMouseEnter: x,
                onMouseLeave: b,
                renderPopout: n,
                ...e
            }),
        children: (e) => {
            let { onClick: t, onKeyDown: n } = e;
            return (0, i.jsx)(i.Fragment, {
                children: d({
                    onClick: (e) => Z(() => t(e)),
                    onKeyDown: (e) => {
                        (e.key === s.vn.ENTER || e.key === s.vn.SPACE) && Z(() => n(e));
                    },
                    className: o.actionBarButton,
                    onMouseEnter: I,
                    onMouseLeave: b,
                    isActive: f
                })
            });
        }
    });
});
