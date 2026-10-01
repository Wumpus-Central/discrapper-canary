s.d(t, { A: () => l });
var r = s(582128);
function n(e, t, s) {
    return Math.min(Math.max(Math.floor(e / t), 1), s);
}
let l = (0, s(456412).A)(
    class extends r.Component {
        static defaultProps = { desiredItemWidth: 200 };
        static getDerivedStateFromProps(e, t) {
            let { width: s, desiredItemWidth: r, maxColumns: l } = e,
                i = n(s, r, l);
            return i !== t.columns ? { columns: i } : null;
        }
        state = { columns: n(this.props.width, this.props.desiredItemWidth, this.props.maxColumns) };
        render() {
            let { width: e, height: t, children: s } = this.props,
                { columns: r } = this.state;
            return s(r, e, t);
        }
    },
);
