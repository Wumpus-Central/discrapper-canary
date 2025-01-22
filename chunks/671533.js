n(411104);
var r,
    l,
    o = n(200651);
n(192379);
var a = n(120356),
    i = n.n(a),
    c = n(331595),
    u = n(485270);
((l = r || (r = {})).LEFT = 'LEFT'), (l.RIGHT = 'RIGHT'), (l.UP = 'UP'), (l.DOWN = 'DOWN'), (l.UP_LEFT = 'UP_LEFT'), (l.DOWN_RIGHT = 'DOWN_RIGHT');
let s = (t) => {
    let { width: e = 24, height: n = 24, color: r = 'currentColor', direction: l, foreground: a, className: s, title: p, ...d } = t;
    return (0, o.jsxs)('svg', {
        ...(0, c.Z)(d),
        width: e,
        height: n,
        className: i()(
            s,
            (function (t) {
                switch (t) {
                    case 'LEFT':
                        return u.left;
                    case 'RIGHT':
                        return u.right;
                    case 'UP':
                        return null;
                    case 'DOWN':
                        return u.down;
                    case 'UP_LEFT':
                        return u.upLeft;
                    case 'DOWN_RIGHT':
                        return u.downRight;
                    default:
                        throw Error('Invalid Direction '.concat(t));
                }
            })(l)
        ),
        viewBox: '0 0 24 24',
        children: [
            null != p ? (0, o.jsx)('title', { children: p }) : null,
            (0, o.jsx)('polygon', {
                className: a,
                fill: r,
                fillRule: 'nonzero',
                points: '13 20 11 20 11 8 5.5 13.5 4.08 12.08 12 4.16 19.92 12.08 18.5 13.5 13 8'
            })
        ]
    });
};
(s.Directions = r), (e.Z = s);
