n.d(t, { Z: () => h });
var i = n(200651);
n(192379);
var l = n(120356),
    a = n.n(l),
    r = n(642128),
    s = n(481060),
    o = n(871499),
    c = n(388032),
    d = n(983351);
let u = (0, r.animated)((e) => {
    let { percentComplete: t } = e;
    return (0, i.jsx)('svg', {
        className: d.countdown,
        width: 40,
        height: 40,
        viewBox: '0 0 '.concat(40, ' ').concat(40),
        children: (0, i.jsx)('circle', {
            style: { strokeDashoffset: Math.round(100 * t) },
            className: d.progress,
            cx: 20,
            cy: 20,
            r: 14,
            fill: 'none',
            stroke: '#4F545C',
            pathLength: '100'
        })
    });
});
function h(e) {
    let { totalCooldownSeconds: t, remainingCooldownSeconds: n, onClick: l, onKeyDown: h, onMouseEnter: p, onMouseLeave: m, isActive: f = !1, isCenterButton: g = !1, ..._ } = e,
        C = n > 0,
        x = (0, s.q_F)(
            {
                percentComplete: 0 !== n ? (t - n) / t : 0,
                config: {
                    ...r.config.molasses,
                    duration: 1000
                }
            },
            'animate-always'
        ),
        v = C ? c.intl.formatToPlainString(c.t.D8Drx8, { seconds: n }) : void 0,
        E = g ? o.d : o.Z;
    return (0, i.jsxs)('div', {
        className: d.container,
        children: [
            C ? (0, i.jsx)(u, { percentComplete: x.percentComplete }) : null,
            (0, i.jsx)(E, {
                ..._,
                disabled: C,
                label: v,
                iconComponent: s.EO4,
                iconClassName: a()(d.iconHover, f && d.active),
                className: a()(_.className, d.button),
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
