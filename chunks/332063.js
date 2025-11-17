n.d(t, { Z: () => p }), n(388685);
var i,
    r = n(54381),
    l = n(473749),
    s = n(442837),
    a = n(481060),
    o = n(274616),
    c = n(560587),
    u = n(388032);
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
class h extends (i = l.Component) {
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
        let {
            branches: e,
            selectedBranchId: t,
            applicationId: n,
            includeMaster: i,
            hide: l,
            className: s,
            label: o,
        } = this.props;
        if (0 === e.length || l) return null;
        let c = i ? e : e.filter((e) => e.id !== n);
        return (0, r.jsx)(a.q4e, {
            label: o,
            options: c.map((e) => ({
                label: e.getName(n),
                value: e.id,
            })),
            placeholder: u.intl.string(u.t.Sw7pHF),
            value: t,
            onChange: this.handleChange,
            className: s,
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
let p = s.ZP.connectStores([c.Z], (e) => {
    let { applicationId: t } = e;
    return { branches: c.Z.getBranches(t) };
})(h);
