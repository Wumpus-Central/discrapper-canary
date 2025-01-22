var i,
    a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(481060),
    c = r(51474);
function d(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let f = {
        UP: 'up',
        RIGHT: 'right',
        DOWN: 'down',
        LEFT: 'left'
    },
    p = {
        [f.UP]: c.up,
        [f.RIGHT]: c.right,
        [f.DOWN]: c.down,
        [f.LEFT]: c.left
    };
class h extends (i = o.PureComponent) {
    render() {
        let { direction: e, className: n } = this.props;
        return (0, a.jsx)(u.ArrowSmallUpIcon, {
            size: 'md',
            color: 'currentColor',
            className: l()(c.__invalid_arrow, n, { [p[e]]: !0 })
        });
    }
}
d(h, 'Directions', f), (n.Z = h);
