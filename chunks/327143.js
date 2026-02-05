"use strict";
n.d(t, { A: () => a });
var r = n(64700);
function i(e, t, n) {
    return Math.min(Math.max(Math.floor(e / t), 1), n);
}
let a = (0, n(456412).A)(
    class extends r.Component {
        static defaultProps = { desiredItemWidth: 200 };
        static getDerivedStateFromProps(e, t) {
            let { width: n, desiredItemWidth: r, maxColumns: a } = e,
                s = i(n, r, a);
            return s !== t.columns ? { columns: s } : null;
        }
        state = { columns: i(this.props.width, this.props.desiredItemWidth, this.props.maxColumns) };
        render() {
            let { width: e, height: t, children: n } = this.props,
                { columns: r } = this.state;
            return n(r, e, t);
        }
    },
);
