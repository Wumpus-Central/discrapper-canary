"use strict";
n.d(t, { A: () => a });
var i = n(582128);
function r(e, t, n) {
    return Math.min(Math.max(Math.floor(e / t), 1), n);
}
let a = (0, n(456412).A)(
    class extends i.Component {
        static defaultProps = { desiredItemWidth: 200 };
        static getDerivedStateFromProps(e, t) {
            let { width: n, desiredItemWidth: i, maxColumns: a } = e,
                s = r(n, i, a);
            return s !== t.columns ? { columns: s } : null;
        }
        state = { columns: r(this.props.width, this.props.desiredItemWidth, this.props.maxColumns) };
        render() {
            let { width: e, height: t, children: n } = this.props,
                { columns: i } = this.state;
            return n(i, e, t);
        }
    },
);
