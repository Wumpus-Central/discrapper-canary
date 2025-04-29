n.d(t, { Z: () => p }), n(388685);
var s,
    i = n(255367),
    l = n(73800),
    r = n(442837),
    a = n(481060),
    o = n(274616),
    d = n(560587),
    c = n(388032);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class u extends (s = l.Component) {
    componentDidMount() {
        let { applicationId: e, branches: t, onHasBranchesChange: n } = this.props;
        (0, o.Z)(e), null == n || n(t.length > 0);
    }
    componentDidUpdate(e) {
        let { onHasBranchesChange: t, branches: n } = this.props,
            s = n.length > 0;
        null != t && s !== e.branches.length > 0 && t(s);
    }
    render() {
        let { branches: e, selectedBranchId: t, applicationId: n, includeMaster: s, hide: l, className: r } = this.props;
        if (0 === e.length || l) return null;
        let o = s ? e : e.filter((e) => e.id !== n);
        return (0, i.jsx)(a.q4e, {
            options: o.map((e) => ({
                label: e.getName(n),
                value: e.id
            })),
            placeholder: c.intl.string(c.t.Sw7pHB),
            value: t,
            onChange: this.handleChange,
            className: r
        });
    }
    constructor(...e) {
        super(...e),
            h(this, 'handleChange', (e) => {
                this.props.onChange(e);
            });
    }
}
h(u, 'defaultProps', { includeMaster: !1 });
let p = r.ZP.connectStores([d.Z], (e) => {
    let { applicationId: t } = e;
    return { branches: d.Z.getBranches(t) };
})(u);
