n.d(t, {
    Z: function () {
        return h;
    }
});
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    a = n(666912),
    s = n(481060),
    o = n(871499),
    c = n(388032),
    d = n(983351);
let u = (0, a.animated)((e) => {
    let { percentComplete: t } = e,
        n = 20;
    return (0, i.jsx)('svg', {
        className: d.countdown,
        width: 40,
        height: 40,
        viewBox: '0 0 '.concat(40, ' ').concat(40),
        children: (0, i.jsx)('circle', {
            style: { strokeDashoffset: Math.round(100 * t) },
            className: d.progress,
            cx: n,
            cy: n,
            r: n - 6,
            fill: 'none',
            stroke: '#4F545C',
            pathLength: '100'
        })
    });
});
function h(e) {
    let { totalCooldownSeconds: t, remainingCooldownSeconds: n, onClick: l, onKeyDown: h, onMouseEnter: p, onMouseLeave: m, isActive: f = !1, isCenterButton: g = !1, ...C } = e,
        x = n > 0,
        v = (0, s.useSpring)(
            {
                percentComplete: 0 !== n ? (t - n) / t : 0,
                config: {
                    ...a.config.molasses,
                    duration: 1000
                }
            },
            'animate-always'
        ),
        _ = x ? c.intl.formatToPlainString(c.t.D8Drx8, { seconds: n }) : void 0,
        I = g ? o.d : o.Z;
    return (0, i.jsxs)('div', {
        className: d.container,
        children: [
            x ? (0, i.jsx)(u, { percentComplete: v.percentComplete }) : null,
            (0, i.jsx)(I, {
                ...C,
                disabled: x,
                label: _,
                iconComponent: s.ReactionIcon,
                iconClassName: r()(d.iconHover, f && d.active),
                className: r()(C.className, d.button),
                onClick: l,
                onKeyDown: h,
                onMouseEnter: p,
                onMouseLeave: m,
                isActive: f,
                grow: !1
            })
        ]
    });
}
