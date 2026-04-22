n.d(t, { A: () => u });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    r = n(691885),
    a = n(830382),
    o = n(67480),
    d = n(985018);
class h extends l.Component {
    componentDidMount() {
        let { applicationId: e, skus: t, selectedSkuId: n, onChange: i } = this.props;
        null == t || 0 === t.length ? (0, a.O1)(e, !1) : 1 === t.length && null == n && i(t[0].id);
    }
    componentDidUpdate() {
        let { skus: e, selectedSkuId: t, onChange: n } = this.props;
        null != e && 1 === e.length && null == t && n(e[0].id);
    }
    handleChange = (e) => {
        this.props.onChange(e);
    };
    render() {
        let { skus: e, selectedSkuId: t, label: n } = this.props,
            l = null != e && 0 === e.length;
        return (0, i.jsx)(r.l, {
            selectionMode: "single",
            label: n,
            options: null != e ? e.map((e) => ({ id: e.id, label: e.name, value: e.id })) : [],
            placeholder: l ? d.intl.string(d.t.hKcgP5) : d.intl.string(d.t.QV60Uq),
            value: t,
            onSelectionChange: this.handleChange,
            disabled: l,
        });
    }
}
let u = s.Ay.connectStores([o.A], (e) => {
    let { applicationId: t } = e;
    return { skus: o.A.getForApplication(t) };
})(h);
