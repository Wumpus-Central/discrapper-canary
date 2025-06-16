n.d(t, { Z: () => p });
var r = n(255367),
    i = n(73800),
    a = n(442837),
    o = n(481060),
    s = n(873115),
    l = n(219929),
    c = n(618541),
    u = n(975060),
    d = n(388032),
    f = n(912296);
class _ extends i.PureComponent {
    componentDidMount() {
        null != this.props.paypalClient && s.f6();
    }
    componentWillUnmount() {
        s.Nj().then(() => s.Dz());
    }
    render() {
        let { braintreeEmail: e, className: t, paypalClient: n } = this.props;
        return (0, r.jsx)(o.hjN, {
            className: t,
            title: d.intl.string(d.t.QQBAoq),
            children: (0, r.jsxs)('div', {
                className: f.inputWrapper,
                children: [
                    (0, r.jsx)(l.ZP, {
                        type: l.ZP.Types.PAYPAL,
                        className: f.paypalIcon
                    }),
                    (0, r.jsx)(o.oil, {
                        value: e,
                        editable: !1,
                        readOnly: !0,
                        placeholder: null == n ? d.intl.string(d.t.dte2Mz) : d.intl.string(d.t.hopw7e),
                        inputClassName: f.paypalInput
                    })
                ]
            })
        });
    }
}
let p = a.ZP.connectStores([c.Z, u.Z], () => ({
    braintreeEmail: u.Z.braintreeEmail,
    paypalClient: c.Z.getPayPalClient()
}))(_);
