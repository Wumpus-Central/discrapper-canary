n.d(t, { Z: () => _ });
var r = n(255367);
n(73800);
var i = n(120356),
    a = n.n(i),
    o = n(626415),
    s = n(481060),
    l = n(821020),
    c = n(736670),
    u = n(527018);
let d = Object.freeze({
        tension: 400,
        friction: 30
    }),
    f = Object.freeze({
        opacity: 0,
        height: 8,
        x: -4
    });
function _(e) {
    let { selected: t = !1, hovered: n = !1, unread: i = !1, disabled: _ = !1, className: p } = e;
    ((t = !_ && t), (n = !_ && n), (i = !_ && i));
    let h = {
            opacity: 1,
            height: t ? 40 : n ? 20 : 8,
            x: 0
        },
        m = (0, s.Yzy)(
            t || n || i,
            {
                config: d,
                keys: (e) => (e ? 'pill' : 'empty'),
                initial: t || n || i ? h : null,
                from: f,
                leave: f,
                enter: h,
                update: h
            },
            n || document.hasFocus() ? 'animate-always' : 'animate-never'
        ),
        g = l.Lk.useExperiment({ location: 'AnimatedHalfPill' }),
        E = (0, c.Z)((e) => e.isOpen) && g.notificationCenterVariant === l.jP.POPOUT && g.entrypoint === l.u3.TITLE_BAR_LEFT;
    return (0, r.jsx)('div', {
        className: a()(p, u.wrapper, { [u.dimmed]: E }),
        'aria-hidden': !0,
        children: m(
            (e, t) =>
                t &&
                (0, r.jsx)(o.animated.span, {
                    className: u.item,
                    style: e
                })
        )
    });
}
