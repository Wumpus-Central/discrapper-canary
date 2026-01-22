n.d(t, {
    A: () => l,
}),
    n(896048);
var r,
    i,
    a = n(64700);

function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function o(e, t, n) {
    return Math.min(Math.max(Math.floor(e / t), 1), n);
}
let l = (0, n(456412).A)(
    ((i = class extends (r = a.Component) {
        static getDerivedStateFromProps(e, t) {
            let { width: n, desiredItemWidth: r, maxColumns: i } = e,
                a = o(n, r, i);
            return a !== t.columns
                ? {
                      columns: a,
                  }
                : null;
        }
        render() {
            let { width: e, height: t, children: n } = this.props,
                { columns: r } = this.state;
            return n(r, e, t);
        }
        constructor(...e) {
            super(...e),
                s(this, "state", {
                    columns: o(this.props.width, this.props.desiredItemWidth, this.props.maxColumns),
                });
        }
    }),
    s(i, "defaultProps", {
        desiredItemWidth: 200,
    }),
    i),
);
