r.d(n, {
    Z: function () {
        return f;
    }
});
var i = r(200651);
r(192379);
var a = r(120356),
    o = r.n(a),
    s = r(642128),
    l = r(481060),
    u = r(583350);
let c = Object.freeze({
        tension: 400,
        friction: 30
    }),
    d = Object.freeze({
        opacity: 0,
        height: 8,
        x: -4
    });
function f(e) {
    let { selected: n = !1, hovered: r = !1, unread: a = !1, disabled: f = !1, className: p } = e;
    (n = !f && n), (r = !f && r), (a = !f && a);
    let h = {
            opacity: 1,
            height: n ? 40 : r ? 20 : 8,
            x: 0
        },
        _ = (0, l.useTransition)(
            n || r || a,
            {
                config: c,
                keys: (e) => (e ? 'pill' : 'empty'),
                initial: n || r || a ? h : null,
                from: d,
                leave: d,
                enter: h,
                update: h
            },
            r || document.hasFocus() ? 'animate-always' : 'animate-never'
        );
    return (0, i.jsx)('div', {
        className: o()(p, u.wrapper),
        'aria-hidden': !0,
        children: _(
            (e, n) =>
                n &&
                (0, i.jsx)(s.animated.span, {
                    className: u.item,
                    style: e
                })
        )
    });
}
