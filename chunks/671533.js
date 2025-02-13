n.d(t, { Z: () => d }), n(411104);
var i,
    a = n(200651);
n(192379);
var o = n(120356),
    r = n.n(o),
    l = n(325767),
    c = n(571576),
    s = (((i = {}).LEFT = 'LEFT'), (i.RIGHT = 'RIGHT'), (i.UP = 'UP'), (i.DOWN = 'DOWN'), (i.UP_LEFT = 'UP_LEFT'), (i.DOWN_RIGHT = 'DOWN_RIGHT'), i);
let _ = (e) => {
    let { width: t = 24, height: n = 24, color: i = 'currentColor', direction: o, foreground: s, className: _, title: d, ...u } = e;
    return (0, a.jsxs)('svg', {
        ...(0, l.Z)(u),
        width: t,
        height: n,
        className: r()(
            _,
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
            })(o)
        ),
        viewBox: '0 0 24 24',
        children: [
            null != d ? (0, a.jsx)('title', { children: d }) : null,
            (0, a.jsx)('polygon', {
                className: s,
                fill: i,
                fillRule: 'nonzero',
                points: '13 20 11 20 11 8 5.5 13.5 4.08 12.08 12 4.16 19.92 12.08 18.5 13.5 13 8'
            })
        ]
    });
};
_.Directions = s;
let d = _;
