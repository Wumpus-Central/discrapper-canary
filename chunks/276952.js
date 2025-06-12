n.d(t, { Z: () => d });
var r = n(255367);
n(73800);
var i = n(120356),
    a = n.n(i),
    o = n(524979),
    s = n(481060),
    l = n(527018);
let c = Object.freeze({
        tension: 400,
        friction: 30
    }),
    u = Object.freeze({
        opacity: 0,
        height: 8,
        x: -4
    });
function d(e) {
    let { selected: t = !1, hovered: n = !1, unread: i = !1, disabled: d = !1, className: _ } = e;
    (t = !d && t), (n = !d && n), (i = !d && i);
    let f = {
            opacity: 1,
            height: t ? 40 : n ? 20 : 8,
            x: 0
        },
        p = (0, s.Yzy)(
            t || n || i,
            {
                config: c,
                keys: (e) => (e ? 'pill' : 'empty'),
                initial: t || n || i ? f : null,
                from: u,
                leave: u,
                enter: f,
                update: f
            },
            n || document.hasFocus() ? 'animate-always' : 'animate-never'
        );
    return (0, r.jsx)('div', {
        className: a()(_, l.wrapper),
        'aria-hidden': !0,
        children: p(
            (e, t) =>
                t &&
                (0, r.jsx)(o.animated.span, {
                    className: l.item,
                    style: e
                })
        )
    });
}
