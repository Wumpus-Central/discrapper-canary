n.d(t, { Z: () => p });
var r,
    i = n(200651),
    o = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(481060),
    c = n(974393);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let d = {
        UP: 'up',
        RIGHT: 'right',
        DOWN: 'down',
        LEFT: 'left'
    },
    f = {
        [d.UP]: c.up,
        [d.RIGHT]: c.right,
        [d.DOWN]: c.down,
        [d.LEFT]: c.left
    };
class _ extends (r = o.PureComponent) {
    render() {
        let { direction: e, className: t } = this.props;
        return (0, i.jsx)(l.wj7, {
            size: 'md',
            color: 'currentColor',
            className: s()(c.__invalid_arrow, t, { [f[e]]: !0 })
        });
    }
}
u(_, 'Directions', d);
let p = _;
