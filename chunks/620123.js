n.d(t, { Z: () => h }), n(388685);
var r = n(951288),
    i = n(647438),
    s = n(442837),
    l = n(481060),
    a = n(16084),
    o = n(55563),
    c = n(388032);
class d extends i.Component {
    componentDidMount() {
        let { applicationId: e, skus: t, selectedSkuId: n, onChange: r } = this.props;
        null == t || 0 === t.length ? (0, a.uE)(e, !1) : 1 === t.length && null == n && r(t[0].id);
    }
    componentDidUpdate() {
        let { skus: e, selectedSkuId: t, onChange: n } = this.props;
        null != e && 1 === e.length && null == t && n(e[0].id);
    }
    render() {
        let { skus: e, selectedSkuId: t, className: n, label: i } = this.props,
            s = null != e && 0 === e.length;
        return (0, r.jsx)(l.q4e, {
            label: i,
            options:
                null != e
                    ? e.map((e) => ({
                          label: e.name,
                          value: e.id,
                      }))
                    : [],
            placeholder: s ? c.intl.string(c.t.hKcgP5) : c.intl.string(c.t.QV60Uq),
            value: t,
            onChange: this.handleChange,
            className: n,
            isDisabled: s,
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
let h = s.ZP.connectStores([o.Z], (e) => {
    let { applicationId: t } = e;
    return { skus: o.Z.getForApplication(t) };
})(d);
