n.d(t, { Z: () => d });
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(642128),
    s = n(481060),
    l = n(999710);
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
    let { selected: t = !1, hovered: n = !1, unread: i = !1, disabled: d = !1, className: f } = e;
    (t = !d && t), (n = !d && n), (i = !d && i);
    let p = {
            opacity: 1,
            height: t ? 40 : n ? 20 : 8,
            x: 0
        },
        _ = (0, s.Yzy)(
            t || n || i,
            {
                config: c,
                keys: (e) => (e ? 'pill' : 'empty'),
                initial: t || n || i ? p : null,
                from: u,
                leave: u,
                enter: p,
                update: p
            },
            n || document.hasFocus() ? 'animate-always' : 'animate-never'
        );
    return (0, r.jsx)('div', {
        className: o()(f, l.wrapper),
        'aria-hidden': !0,
        children: _(
            (e, t) =>
                t &&
                (0, r.jsx)(a.animated.span, {
                    className: l.item,
                    style: e
                })
        )
    });
}
