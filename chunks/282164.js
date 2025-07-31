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
    _ = n(388032),
    f = n(912296);
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
            title: _.intl.string(_.t.QQBAoq),
            children: (0, r.jsxs)('div', {
                className: f.inputWrapper,
                children: [
                    (0, r.jsx)(c.ZP, {
                        type: c.ZP.Types.PAYPAL,
                        className: f.paypalIcon
                    }),
                    (0, r.jsx)(o.Is, {
                        value: e,
                        editable: !1,
                        readOnly: !0,
                        placeholder: null == n ? _.intl.string(_.t.dte2Mz) : _.intl.string(_.t.hopw7e),
                        inputClassName: f.paypalInput
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
