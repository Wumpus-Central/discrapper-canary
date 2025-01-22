var i = r(200651);
r(192379);
var a = r(120356),
    o = r.n(a),
    s = r(481060),
    l = r(331595),
    u = r(754962);
let c = {
        UP: u.directionUp,
        RIGHT: u.directionRight,
        DOWN: u.directionDown,
        LEFT: u.directionLeft
    },
    d = (e) => {
        let { direction: n = c.DOWN, width: r = 24, height: a = 24, color: d = 'currentColor', transition: f = u.transition, className: p, foreground: h, expanded: _, ...m } = e,
            { enabled: g } = (0, s.useRedesignIconContext)(),
            E = n;
        if ((!0 === _ ? (E = c.DOWN) : !1 === _ && (E = c.RIGHT), g)) {
            let e = {
                [c.UP]: s.ChevronSmallUpIcon,
                [c.DOWN]: s.ChevronSmallDownIcon,
                [c.LEFT]: s.ChevronSmallLeftIcon,
                [c.RIGHT]: s.ChevronSmallRightIcon
            }[E];
            return (0, i.jsx)(e, {
                ...m,
                className: p,
                size: 'custom',
                width: r,
                height: a,
                color: null != d ? d : 'currentColor',
                colorClass: h
            });
        }
        return (0, i.jsx)('svg', {
            className: o()(p, f, E),
            width: r,
            height: a,
            viewBox: '0 0 24 24',
            ...(0, l.Z)(m),
            children: (0, i.jsx)('path', {
                className: h,
                fill: 'none',
                stroke: d,
                strokeWidth: '2',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                d: 'M7 10L12 15 17 10',
                'aria-hidden': !0
            })
        });
    };
(d.Directions = c), (n.Z = d);
