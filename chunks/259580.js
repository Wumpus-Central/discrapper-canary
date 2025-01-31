n.d(t, { Z: () => d });
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(481060),
    o = n(325767),
    l = n(754962);
let u = {
        UP: l.directionUp,
        RIGHT: l.directionRight,
        DOWN: l.directionDown,
        LEFT: l.directionLeft
    },
    c = (e) => {
        let { direction: t = u.DOWN, width: n = 24, height: r = 24, color: c = 'currentColor', transition: d = l.transition, className: f, foreground: _, expanded: p, ...h } = e,
            { enabled: m } = (0, s.bWb)(),
            g = t;
        if ((!0 === p ? (g = u.DOWN) : !1 === p && (g = u.RIGHT), m)) {
            let e = {
                [u.UP]: s.u04,
                [u.DOWN]: s.CJ0,
                [u.LEFT]: s.V7D,
                [u.RIGHT]: s.Fbu
            }[g];
            return (0, i.jsx)(e, {
                ...h,
                className: f,
                size: 'custom',
                width: n,
                height: r,
                color: null != c ? c : 'currentColor',
                colorClass: _
            });
        }
        return (0, i.jsx)('svg', {
            className: a()(f, d, g),
            width: n,
            height: r,
            viewBox: '0 0 24 24',
            ...(0, o.Z)(h),
            children: (0, i.jsx)('path', {
                className: _,
                fill: 'none',
                stroke: c,
                strokeWidth: '2',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                d: 'M7 10L12 15 17 10',
                'aria-hidden': !0
            })
        });
    };
c.Directions = u;
let d = c;
