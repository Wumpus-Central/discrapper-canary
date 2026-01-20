n.d(t, { Z: () => p }), n(388685);
var i,
    l = n(54381),
    r = n(473749),
    s = n(442837),
    a = n(481060),
    o = n(274616),
    u = n(560587),
    c = n(388032);
function d(e, t, n) {
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
class h extends (i = r.Component) {
    componentDidMount() {
        let { applicationId: e, branches: t, onHasBranchesChange: n } = this.props;
        (0, o.Z)(e), null == n || n(t.length > 0);
    }
    componentDidUpdate(e) {
        let { onHasBranchesChange: t, branches: n } = this.props,
            i = n.length > 0;
        null != t && i !== e.branches.length > 0 && t(i);
    }
    render() {
        let { branches: e, selectedBranchId: t, applicationId: n, includeMaster: i, hide: r, label: s } = this.props;
        if (0 === e.length || r) return null;
        let o = i ? e : e.filter((e) => e.id !== n);
        return (0, l.jsx)(a.PhF, {
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
            d(this, "handleChange", (e) => {
                this.props.onChange(e);
            });
    }
}
d(h, "defaultProps", { includeMaster: !1 });
let p = s.ZP.connectStores([u.Z], (e) => {
    let { applicationId: t } = e;
    return { branches: u.Z.getBranches(t) };
})(h);
