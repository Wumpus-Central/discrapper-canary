n.d(t, { Z: () => l }), n(47120);
var i,
    r,
    a = n(192379);
function s(e, t, n) {
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
function o(e, t, n) {
    return Math.min(Math.max(Math.floor(e / t), 1), n);
}
let l = (0, n(112724).Z)(
    ((r = class extends (i = a.Component) {
        static getDerivedStateFromProps(e, t) {
            let { width: n, desiredItemWidth: i, maxColumns: r } = e,
                a = o(n, i, r);
            return a !== t.columns ? { columns: a } : null;
        }
        render() {
            let { width: e, height: t, children: n } = this.props,
                { columns: i } = this.state;
            return n(i, e, t);
        }
        constructor(...e) {
            super(...e), s(this, 'state', { columns: o(this.props.width, this.props.desiredItemWidth, this.props.maxColumns) });
        }
    }),
    s(r, 'defaultProps', { desiredItemWidth: 200 }),
    r)
);
