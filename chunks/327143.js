r.d(t, { A: () => n });
var s = r(64700);
function l(e, t, r) {
    return Math.min(Math.max(Math.floor(e / t), 1), r);
}
let n = (0, r(456412).A)(
    class extends s.Component {
        static defaultProps = { desiredItemWidth: 200 };
        static getDerivedStateFromProps(e, t) {
            let { width: r, desiredItemWidth: s, maxColumns: n } = e,
                i = l(r, s, n);
            return i !== t.columns ? { columns: i } : null;
        }
        state = { columns: l(this.props.width, this.props.desiredItemWidth, this.props.maxColumns) };
        render() {
            let { width: e, height: t, children: r } = this.props,
                { columns: s } = this.state;
            return r(s, e, t);
        }
    },
);
