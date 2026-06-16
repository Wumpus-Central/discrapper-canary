"use strict";
n.d(t, { A: () => s });
var i = n(64700);
function r(e, t, n) {
    return Math.min(Math.max(Math.floor(e / t), 1), n);
}
let s = (0, n(456412).A)(
    class extends i.Component {
        static defaultProps = { desiredItemWidth: 200 };
        static getDerivedStateFromProps(e, t) {
            let { width: n, desiredItemWidth: i, maxColumns: s } = e,
                a = r(n, i, s);
            return a !== t.columns ? { columns: a } : null;
        }
        state = { columns: r(this.props.width, this.props.desiredItemWidth, this.props.maxColumns) };
        render() {
            let { width: e, height: t, children: n } = this.props,
                { columns: i } = this.state;
            return n(i, e, t);
        }
    },
);
