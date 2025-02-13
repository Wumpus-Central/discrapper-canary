n.d(t, { Z: () => d });
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(642128),
    o = n(481060),
    l = n(386472);
let u = Object.freeze({
        tension: 400,
        friction: 30
    }),
    c = Object.freeze({
        opacity: 0,
        height: 8,
        x: -4
    });
function d(e) {
    let { selected: t = !1, hovered: n = !1, unread: r = !1, disabled: d = !1, className: f } = e;
    (t = !d && t), (n = !d && n), (r = !d && r);
    let _ = {
            opacity: 1,
            height: t ? 40 : n ? 20 : 8,
            x: 0
        },
        p = (0, o.Yzy)(
            t || n || r,
            {
                config: u,
                keys: (e) => (e ? 'pill' : 'empty'),
                initial: t || n || r ? _ : null,
                from: c,
                leave: c,
                enter: _,
                update: _
            },
            n || document.hasFocus() ? 'animate-always' : 'animate-never'
        );
    return (0, i.jsx)('div', {
        className: a()(f, l.wrapper),
        'aria-hidden': !0,
        children: p(
            (e, t) =>
                t &&
                (0, i.jsx)(s.animated.span, {
                    className: l.item,
                    style: e
                })
        )
    });
}
