var i,
    a,
    o = r(47120);
var s = r(192379),
    l = r(112724);
function u(e, n, r) {
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
function c(e, n, r) {
    return Math.min(Math.max(Math.floor(e / n), 1), r);
}
n.Z = (0, l.Z)(
    ((a = class extends (i = s.Component) {
        static getDerivedStateFromProps(e, n) {
            let { width: r, desiredItemWidth: i, maxColumns: a } = e,
                o = c(r, i, a);
            return o !== n.columns ? { columns: o } : null;
        }
        render() {
            let { width: e, height: n, children: r } = this.props,
                { columns: i } = this.state;
            return r(i, e, n);
        }
        constructor(...e) {
            super(...e), u(this, 'state', { columns: c(this.props.width, this.props.desiredItemWidth, this.props.maxColumns) });
        }
    }),
    u(a, 'defaultProps', { desiredItemWidth: 200 }),
    a)
);
