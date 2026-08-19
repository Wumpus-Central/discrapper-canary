r.d(t, { A: () => l });
var n = r(582128);
function s(e, t, r) {
    return Math.min(Math.max(Math.floor(e / t), 1), r);
}
let l = (0, r(456412).A)(
    class extends n.Component {
        static defaultProps = { desiredItemWidth: 200 };
        static getDerivedStateFromProps(e, t) {
            let { width: r, desiredItemWidth: n, maxColumns: l } = e,
                i = s(r, n, l);
            return i !== t.columns ? { columns: i } : null;
        }
        state = { columns: s(this.props.width, this.props.desiredItemWidth, this.props.maxColumns) };
        render() {
            let { width: e, height: t, children: r } = this.props,
                { columns: n } = this.state;
            return r(n, e, t);
        }
    },
);
