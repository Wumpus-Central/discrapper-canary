n.d(t, { Z: () => f });
var r,
    i,
    l = n(255367),
    a = n(73800),
    o = n(120356),
    s = n.n(o),
    c = n(481060),
    u = n(974393);
let d = {
        UP: 'up',
        RIGHT: 'right',
        DOWN: 'down',
        LEFT: 'left'
    },
    p = {
        [d.UP]: '',
        [d.RIGHT]: u.right,
        [d.DOWN]: u.down,
        [d.LEFT]: u.left
    };
class m extends (i = a.PureComponent) {
    render() {
        let { direction: e, className: t } = this.props;
        return (0, l.jsx)(c.wj7, {
            size: 'md',
            color: 'currentColor',
            className: s()(t, { [p[e]]: !0 })
        });
    }
}
(r = 'Directions') in m
    ? Object.defineProperty(m, r, {
          value: d,
          enumerable: !0,
          configurable: !0,
          writable: !0
      })
    : (m[r] = d);
let f = m;
