n.d(t, { Z: () => l }), n(47120);
var r,
    i,
    o = n(192379);
function a(e, t, n) {
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
function s(e, t, n) {
    return Math.min(Math.max(Math.floor(e / t), 1), n);
}
let l = (0, n(112724).Z)(
    ((i = class extends (r = o.Component) {
        static getDerivedStateFromProps(e, t) {
            let { width: n, desiredItemWidth: r, maxColumns: i } = e,
                o = s(n, r, i);
            return o !== t.columns ? { columns: o } : null;
        }
        render() {
            let { width: e, height: t, children: n } = this.props,
                { columns: r } = this.state;
            return n(r, e, t);
        }
        constructor(...e) {
            super(...e), a(this, 'state', { columns: s(this.props.width, this.props.desiredItemWidth, this.props.maxColumns) });
        }
    }),
    a(i, 'defaultProps', { desiredItemWidth: 200 }),
    i)
);
