n.d(t, { Z: () => u }), n(411104);
var i,
    o = n(200651);
n(192379);
var a = n(120356),
    l = n.n(a),
    r = n(325767),
    c = n(485270),
    _ = (((i = {}).LEFT = 'LEFT'), (i.RIGHT = 'RIGHT'), (i.UP = 'UP'), (i.DOWN = 'DOWN'), (i.UP_LEFT = 'UP_LEFT'), (i.DOWN_RIGHT = 'DOWN_RIGHT'), i);
let d = (e) => {
    let { width: t = 24, height: n = 24, color: i = 'currentColor', direction: a, foreground: _, className: d, title: u, ...s } = e;
    return (0, o.jsxs)('svg', {
        ...(0, r.Z)(s),
        width: t,
        height: n,
        className: l()(
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
            })(a)
        ),
        viewBox: '0 0 24 24',
        children: [
            null != u ? (0, o.jsx)('title', { children: u }) : null,
            (0, o.jsx)('polygon', {
                className: _,
                fill: i,
                fillRule: 'nonzero',
                points: '13 20 11 20 11 8 5.5 13.5 4.08 12.08 12 4.16 19.92 12.08 18.5 13.5 13 8'
            })
        ]
    });
};
d.Directions = _;
let u = d;
