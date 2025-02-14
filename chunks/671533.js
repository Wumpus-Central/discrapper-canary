n.d(t, { Z: () => u }), n(411104);
var a,
    r = n(200651);
n(192379);
var l = n(120356),
    i = n.n(l),
    o = n(325767),
    s = n(571576),
    c = (((a = {}).LEFT = 'LEFT'), (a.RIGHT = 'RIGHT'), (a.UP = 'UP'), (a.DOWN = 'DOWN'), (a.UP_LEFT = 'UP_LEFT'), (a.DOWN_RIGHT = 'DOWN_RIGHT'), a);
let d = (e) => {
    let { width: t = 24, height: n = 24, color: a = 'currentColor', direction: l, foreground: c, className: d, title: u, ...h } = e;
    return (0, r.jsxs)('svg', {
        ...(0, o.Z)(h),
        width: t,
        height: n,
        className: i()(
            d,
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
            null != u ? (0, r.jsx)('title', { children: u }) : null,
            (0, r.jsx)('polygon', {
                className: c,
                fill: a,
                fillRule: 'nonzero',
                points: '13 20 11 20 11 8 5.5 13.5 4.08 12.08 12 4.16 19.92 12.08 18.5 13.5 13 8'
            })
        ]
    });
};
d.Directions = c;
let u = d;
