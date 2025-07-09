(n.d(t, { Z: () => p }), n(388685));
var i,
    s = n(255367),
    r = n(73800),
    l = n(442837),
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
class u extends (i = r.Component) {
    componentDidMount() {
        let { applicationId: e, branches: t, onHasBranchesChange: n } = this.props;
        ((0, o.Z)(e), null == n || n(t.length > 0));
    }
    componentDidUpdate(e) {
        let { onHasBranchesChange: t, branches: n } = this.props,
            i = n.length > 0;
        null != t && i !== e.branches.length > 0 && t(i);
    }
    render() {
        let { branches: e, selectedBranchId: t, applicationId: n, includeMaster: i, hide: r, className: l } = this.props;
        if (0 === e.length || r) return null;
        let o = i ? e : e.filter((e) => e.id !== n);
        return (0, s.jsx)(a.q4e, {
            options: o.map((e) => ({
                label: e.getName(n),
                value: e.id
            })),
            placeholder: c.intl.string(c.t.Sw7pHB),
            value: t,
            onChange: this.handleChange,
            className: l
        });
    }
    constructor(...e) {
        (super(...e),
            h(this, 'handleChange', (e) => {
                this.props.onChange(e);
            }));
    }
}
h(u, 'defaultProps', { includeMaster: !1 });
let p = l.ZP.connectStores([d.Z], (e) => {
    let { applicationId: t } = e;
    return { branches: d.Z.getBranches(t) };
})(u);
