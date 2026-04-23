n.d(t, { A: () => u });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    r = n(691885),
    a = n(781763),
    o = n(65204),
    d = n(985018);
class h extends l.Component {
    static defaultProps = { includeMaster: !1 };
    componentDidMount() {
        let { applicationId: e, branches: t, onHasBranchesChange: n } = this.props;
        (0, a.w)(e), n?.(t.length > 0);
    }
    componentDidUpdate(e) {
        let { onHasBranchesChange: t, branches: n } = this.props,
            i = n.length > 0;
        null != t && i !== e.branches.length > 0 && t(i);
    }
    handleChange = (e) => {
        this.props.onChange(e);
    };
    render() {
        let { branches: e, selectedBranchId: t, applicationId: n, includeMaster: l, hide: s, label: a } = this.props;
        if (0 === e.length || s) return null;
        let o = l ? e : e.filter((e) => e.id !== n);
        return (0, i.jsx)(r.l, {
            label: a,
            options: o.map((e) => ({ id: e.id, label: e.getName(n), value: e.id })),
            placeholder: d.intl.string(d.t.Sw7pHF),
            value: t,
            onSelectionChange: this.handleChange,
            selectionMode: "single",
            fullWidth: !0,
        });
    }
}
let u = s.Ay.connectStores([o.A], (e) => {
    let { applicationId: t } = e;
    return { branches: o.A.getBranches(t) };
})(h);
