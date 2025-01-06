t(411104);
var c,
    l,
    a = t(200651);
t(192379);
var o = t(120356),
    i = t.n(o),
    r = t(325767),
    s = t(485270);
((l = c || (c = {})).LEFT = 'LEFT'), (l.RIGHT = 'RIGHT'), (l.UP = 'UP'), (l.DOWN = 'DOWN'), (l.UP_LEFT = 'UP_LEFT'), (l.DOWN_RIGHT = 'DOWN_RIGHT');
let u = (e) => {
    let { width: n = 24, height: t = 24, color: c = 'currentColor', direction: l, foreground: o, className: u, title: d, ...T } = e;
    return (0, a.jsxs)('svg', {
        ...(0, r.Z)(T),
        width: n,
        height: t,
        className: i()(
            u,
            (function (e) {
                switch (e) {
                    case 'LEFT':
                        return s.left;
                    case 'RIGHT':
                        return s.right;
                    case 'UP':
                        return null;
                    case 'DOWN':
                        return s.down;
                    case 'UP_LEFT':
                        return s.upLeft;
                    case 'DOWN_RIGHT':
                        return s.downRight;
                    default:
                        throw Error('Invalid Direction '.concat(e));
                }
            })(l)
        ),
        viewBox: '0 0 24 24',
        children: [
            null != d ? (0, a.jsx)('title', { children: d }) : null,
            (0, a.jsx)('polygon', {
                className: o,
                fill: c,
                fillRule: 'nonzero',
                points: '13 20 11 20 11 8 5.5 13.5 4.08 12.08 12 4.16 19.92 12.08 18.5 13.5 13 8'
            })
        ]
    });
};
(u.Directions = c), (n.Z = u);
