n.d(t, { Z: () => l }), n(388685);
var r,
    i,
    a = n(73800);
function o(e, t, n) {
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
    ((i = class extends (r = a.Component) {
        static getDerivedStateFromProps(e, t) {
            let { width: n, desiredItemWidth: r, maxColumns: i } = e,
                a = s(n, r, i);
            return a !== t.columns ? { columns: a } : null;
        }
        render() {
            let { width: e, height: t, children: n } = this.props,
                { columns: r } = this.state;
            return n(r, e, t);
        }
        constructor(...e) {
            super(...e), o(this, 'state', { columns: s(this.props.width, this.props.desiredItemWidth, this.props.maxColumns) });
        }
    }),
    o(i, 'defaultProps', { desiredItemWidth: 200 }),
    i)
);
