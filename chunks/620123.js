n.d(t, { Z: () => c }), n(47120);
var s = n(200651),
    l = n(192379),
    i = n(442837),
    r = n(481060),
    a = n(16084),
    o = n(55563),
    d = n(388032);
class h extends l.Component {
    componentDidMount() {
        let { applicationId: e, skus: t, selectedSkuId: n, onChange: s } = this.props;
        null == t || 0 === t.length ? (0, a.uE)(e, !1) : 1 === t.length && null == n && s(t[0].id);
    }
    componentDidUpdate() {
        let { skus: e, selectedSkuId: t, onChange: n } = this.props;
        null != e && 1 === e.length && null == t && n(e[0].id);
    }
    render() {
        let { skus: e, selectedSkuId: t, className: n } = this.props,
            l = null != e && 0 === e.length;
        return (0, s.jsx)(r.q4e, {
            options:
                null != e
                    ? e.map((e) => ({
                          label: e.name,
                          value: e.id
                      }))
                    : [],
            placeholder: l ? d.intl.string(d.t.hKcgPz) : d.intl.string(d.t.QV60Ul),
            value: t,
            onChange: this.handleChange,
            className: n,
            isDisabled: l
        });
    }
    constructor(...e) {
        var t, n;
        super(...e),
            (t = 'handleChange'),
            (n = (e) => {
                this.props.onChange(e);
            }),
            t in this
                ? Object.defineProperty(this, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (this[t] = n);
    }
}
let c = i.ZP.connectStores([o.Z], (e) => {
    let { applicationId: t } = e;
    return { skus: o.Z.getForApplication(t) };
})(h);
