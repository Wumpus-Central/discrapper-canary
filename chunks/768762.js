n.d(t, { Z: () => p });
var i,
    r = n(200651),
    a = n(192379),
    s = n(120356),
    o = n.n(s),
    l = n(481060),
    u = n(876848);
function c(e, t, n) {
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
        [d.UP]: u.up,
        [d.RIGHT]: u.right,
        [d.DOWN]: u.down,
        [d.LEFT]: u.left
    };
class _ extends (i = a.PureComponent) {
    render() {
        let { direction: e, className: t } = this.props;
        return (0, r.jsx)(l.wj7, {
            size: 'md',
            color: 'currentColor',
            className: o()(u.__invalid_arrow, t, { [f[e]]: !0 })
        });
    }
}
c(_, 'Directions', d);
let p = _;
