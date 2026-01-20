n.d(t, { Z: () => d }), n(388685);
var i = n(54381),
    l = n(473749),
    r = n(442837),
    s = n(481060),
    a = n(16084),
    o = n(55563),
    u = n(388032);
class c extends l.Component {
    componentDidMount() {
        let { applicationId: e, skus: t, selectedSkuId: n, onChange: i } = this.props;
        null == t || 0 === t.length ? (0, a.uE)(e, !1) : 1 === t.length && null == n && i(t[0].id);
    }
    componentDidUpdate() {
        let { skus: e, selectedSkuId: t, onChange: n } = this.props;
        null != e && 1 === e.length && null == t && n(e[0].id);
    }
    render() {
        let { skus: e, selectedSkuId: t, label: n } = this.props,
            l = null != e && 0 === e.length;
        return (0, i.jsx)(s.PhF, {
            selectionMode: "single",
            label: n,
            options:
                null != e
                    ? e.map((e) => ({
                          id: e.id,
                          label: e.name,
                          value: e.id,
                      }))
                    : [],
            placeholder: l ? u.intl.string(u.t.hKcgP5) : u.intl.string(u.t.QV60Uq),
            value: t,
            onSelectionChange: this.handleChange,
            disabled: l,
        });
    }
    constructor(...e) {
        super(...e),
            (function (e, t, n) {
                t in e
                    ? Object.defineProperty(e, t, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (e[t] = n);
            })(this, "handleChange", (e) => {
                this.props.onChange(e);
            });
    }
}
let d = r.ZP.connectStores([o.Z], (e) => {
    let { applicationId: t } = e;
    return { skus: o.Z.getForApplication(t) };
})(c);
