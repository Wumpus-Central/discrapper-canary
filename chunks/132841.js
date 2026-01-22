n.d(t, { A: () => h }), n(896048);
var i = n(627968),
    r = n(64700),
    l = n(311907),
    s = n(397927),
    a = n(830382),
    o = n(67480),
    u = n(985018);
class c extends r.Component {
    componentDidMount() {
        let { applicationId: e, skus: t, selectedSkuId: n, onChange: i } = this.props;
        null == t || 0 === t.length ? (0, a.O1)(e, !1) : 1 === t.length && null == n && i(t[0].id);
    }
    componentDidUpdate() {
        let { skus: e, selectedSkuId: t, onChange: n } = this.props;
        null != e && 1 === e.length && null == t && n(e[0].id);
    }
    render() {
        let { skus: e, selectedSkuId: t, label: n } = this.props,
            r = null != e && 0 === e.length;
        return (0, i.jsx)(s.l6P, {
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
            placeholder: r ? u.intl.string(u.t.hKcgP5) : u.intl.string(u.t.QV60Uq),
            value: t,
            onSelectionChange: this.handleChange,
            disabled: r,
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
let h = l.Ay.connectStores([o.A], (e) => {
    let { applicationId: t } = e;
    return { skus: o.A.getForApplication(t) };
})(c);
