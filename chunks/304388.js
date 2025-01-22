n(47120);
var i = n(200651),
    l = n(192379),
    r = n(481060),
    a = n(579185),
    s = n(420212),
    o = n(638411);
function c(e) {
    let { renderPopout: t, onMouseEnter: n, onMouseLeave: r, closePopout: a, isHovered: s, ...o } = e;
    return (
        l.useEffect(() => {
            !s && a();
        }, [a, s]),
        (0, i.jsx)('div', {
            onMouseEnter: n,
            onMouseLeave: r,
            children: t({
                closePopout: a,
                ...o
            })
        })
    );
}
t.Z = l.forwardRef(function (e, t) {
    let { renderPopout: n, children: d, align: u = 'left', isPopoutBlocked: h, onPopoutOpen: p, onPopoutClose: m } = e,
        [f, g] = l.useState(!1),
        { isHovered: C, setIsHovered: x, onMouseEnter: v, onMouseLeave: _, cancelTimers: I } = (0, a.Z)(200, 300);
    function E(e) {
        'focus' !== e.type && !f && v();
    }
    function b() {
        !f && _();
    }
    function Z(e) {
        I(), g(!f), f ? null == m || m() : null == p || p(), (!C || f) && e();
    }
    l.useImperativeHandle(
        t,
        () => ({
            hidePopout() {
                x(!1), g(!1);
            }
        }),
        [x, g]
    );
    let N = (C && !h) || f;
    return (0, i.jsx)(r.Popout, {
        animation: r.Popout.Animation.FADE,
        shouldShow: N,
        animationPosition: 'top',
        position: 'top',
        align: u,
        spacing: 16,
        onRequestClose: () => {
            x(!1), g(!1), null == m || m();
        },
        renderPopout: (e) =>
            (0, i.jsx)(c, {
                isHovered: N,
                onFocus: () => g(!0),
                onMouseEnter: v,
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
                        var t, i;
                        return (t = e), (i = n), void ((t.key === s.vn.ENTER || t.key === s.vn.SPACE) && Z(() => i(t)));
                    },
                    className: o.actionBarButton,
                    onMouseEnter: E,
                    onMouseLeave: b,
                    isActive: f
                })
            });
        }
    });
});
