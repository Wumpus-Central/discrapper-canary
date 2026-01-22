n.d(t, { A: () => p }), n(896048);
var i,
    r = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(397927),
    o = n(781763),
    u = n(65204),
    c = n(985018);
function h(e, t, n) {
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
class d extends (i = l.Component) {
    componentDidMount() {
        let { applicationId: e, branches: t, onHasBranchesChange: n } = this.props;
        (0, o.w)(e), null == n || n(t.length > 0);
    }
    componentDidUpdate(e) {
        let { onHasBranchesChange: t, branches: n } = this.props,
            i = n.length > 0;
        null != t && i !== e.branches.length > 0 && t(i);
    }
    render() {
        let { branches: e, selectedBranchId: t, applicationId: n, includeMaster: i, hide: l, label: s } = this.props;
        if (0 === e.length || l) return null;
        let o = i ? e : e.filter((e) => e.id !== n);
        return (0, r.jsx)(a.l6P, {
            label: s,
            options: o.map((e) => ({
                id: e.id,
                label: e.getName(n),
                value: e.id,
            })),
            placeholder: c.intl.string(c.t.Sw7pHF),
            value: t,
            onSelectionChange: this.handleChange,
            selectionMode: "single",
            fullWidth: !0,
        });
    }
    constructor(...e) {
        super(...e),
            h(this, "handleChange", (e) => {
                this.props.onChange(e);
            });
    }
}
h(d, "defaultProps", { includeMaster: !1 });
let p = s.Ay.connectStores([u.A], (e) => {
    let { applicationId: t } = e;
    return { branches: u.A.getBranches(t) };
})(d);
