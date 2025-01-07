t(411104);
var i,
    l,
    r = t(200651);
t(192379);
var o = t(120356),
    s = t.n(o),
    a = t(325767),
    c = t(485270);
((l = i || (i = {})).LEFT = 'LEFT'), (l.RIGHT = 'RIGHT'), (l.UP = 'UP'), (l.DOWN = 'DOWN'), (l.UP_LEFT = 'UP_LEFT'), (l.DOWN_RIGHT = 'DOWN_RIGHT');
let d = (e) => {
    let { width: n = 24, height: t = 24, color: i = 'currentColor', direction: l, foreground: o, className: d, title: u, ...g } = e;
    return (0, r.jsxs)('svg', {
        ...(0, a.Z)(g),
        width: n,
        height: t,
        className: s()(
            d,
            (function (e) {
                switch (e) {
                    case 'LEFT':
                        return c.left;
                    case 'RIGHT':
                        return c.right;
                    case 'UP':
                        return null;
                    case 'DOWN':
                        return c.down;
                    case 'UP_LEFT':
                        return c.upLeft;
                    case 'DOWN_RIGHT':
                        return c.downRight;
                    default:
                        throw Error('Invalid Direction '.concat(e));
                }
            })(l)
        ),
        viewBox: '0 0 24 24',
        children: [
            null != u ? (0, r.jsx)('title', { children: u }) : null,
            (0, r.jsx)('polygon', {
                className: o,
                fill: i,
                fillRule: 'nonzero',
                points: '13 20 11 20 11 8 5.5 13.5 4.08 12.08 12 4.16 19.92 12.08 18.5 13.5 13 8'
            })
        ]
    });
};
(d.Directions = i), (n.Z = d);
