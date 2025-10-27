n.d(t, { Z: () => p }), n(388685);
var r,
    i = n(951288),
    s = n(647438),
    l = n(442837),
    a = n(481060),
    o = n(274616),
    c = n(560587),
    d = n(388032);
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
class u extends (r = s.Component) {
    componentDidMount() {
        let { applicationId: e, branches: t, onHasBranchesChange: n } = this.props;
        (0, o.Z)(e), null == n || n(t.length > 0);
    }
    componentDidUpdate(e) {
        let { onHasBranchesChange: t, branches: n } = this.props,
            r = n.length > 0;
        null != t && r !== e.branches.length > 0 && t(r);
    }
    render() {
        let {
            branches: e,
            selectedBranchId: t,
            applicationId: n,
            includeMaster: r,
            hide: s,
            className: l,
            label: o,
        } = this.props;
        if (0 === e.length || s) return null;
        let c = r ? e : e.filter((e) => e.id !== n);
        return (0, i.jsx)(a.q4e, {
            label: o,
            options: c.map((e) => ({
                label: e.getName(n),
                value: e.id,
            })),
            placeholder: d.intl.string(d.t.Sw7pHF),
            value: t,
            onChange: this.handleChange,
            className: l,
        });
    }
    constructor(...e) {
        super(...e),
            h(this, "handleChange", (e) => {
                this.props.onChange(e);
            });
    }
}
h(u, "defaultProps", { includeMaster: !1 });
let p = l.ZP.connectStores([c.Z], (e) => {
    let { applicationId: t } = e;
    return { branches: c.Z.getBranches(t) };
})(u);
