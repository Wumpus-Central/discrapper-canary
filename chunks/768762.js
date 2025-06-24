n.d(t, { Z: () => E });
var r,
    i,
    l = n(255367),
    o = n(73800),
    a = n(120356),
    u = n.n(a),
    c = n(481060),
    s = n(974393);
let d = {
        UP: 'up',
        RIGHT: 'right',
        DOWN: 'down',
        LEFT: 'left'
    },
    p = {
        [d.UP]: '',
        [d.RIGHT]: s.right,
        [d.DOWN]: s.down,
        [d.LEFT]: s.left
    };
class f extends (i = o.PureComponent) {
    render() {
        let { direction: e, className: t } = this.props;
        return (0, l.jsx)(c.wj7, {
            size: 'md',
            color: 'currentColor',
            className: u()(t, { [p[e]]: !0 })
        });
    }
}
(r = 'Directions') in f
    ? Object.defineProperty(f, r, {
          value: d,
          enumerable: !0,
          configurable: !0,
          writable: !0
      })
    : (f[r] = d);
let E = f;
