n.d(t, { Z: () => h });
var r = n(255367),
    i = n(73800),
    a = n(442837),
    o = n(755721),
    s = n(481060),
    l = n(873115),
    c = n(219929),
    u = n(618541),
    d = n(975060),
    f = n(388032),
    _ = n(912296);
class p extends i.PureComponent {
    componentDidMount() {
        null != this.props.paypalClient && l.f6();
    }
    componentWillUnmount() {
        l.Nj().then(() => l.Dz());
    }
    render() {
        let { braintreeEmail: e, className: t, paypalClient: n } = this.props;
        return (0, r.jsx)(s.hjN, {
            className: t,
            title: f.intl.string(f.t.QQBAoq),
            children: (0, r.jsxs)('div', {
                className: _.inputWrapper,
                children: [
                    (0, r.jsx)(c.ZP, {
                        type: c.ZP.Types.PAYPAL,
                        className: _.paypalIcon
                    }),
                    (0, r.jsx)(o.Is, {
                        value: e,
                        editable: !1,
                        readOnly: !0,
                        placeholder: null == n ? f.intl.string(f.t.dte2Mz) : f.intl.string(f.t.hopw7e),
                        inputClassName: _.paypalInput
                    })
                ]
            })
        });
    }
}
let h = a.ZP.connectStores([u.Z, d.Z], () => ({
    braintreeEmail: d.Z.braintreeEmail,
    paypalClient: u.Z.getPayPalClient()
}))(p);
