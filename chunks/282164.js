n.d(t, { Z: () => p });
var i = n(200651),
    r = n(192379),
    a = n(442837),
    s = n(481060),
    o = n(873115),
    l = n(219929),
    u = n(618541),
    c = n(975060),
    d = n(388032),
    f = n(262249);
class _ extends r.PureComponent {
    componentDidMount() {
        null != this.props.paypalClient && o.f6();
    }
    componentWillUnmount() {
        o.Nj().then(() => o.Dz());
    }
    render() {
        let { braintreeEmail: e, className: t, paypalClient: n } = this.props;
        return (0, i.jsx)(s.hjN, {
            className: t,
            title: d.intl.string(d.t.QQBAoq),
            children: (0, i.jsxs)('div', {
                className: f.inputWrapper,
                children: [
                    (0, i.jsx)(l.ZP, {
                        type: l.ZP.Types.PAYPAL,
                        className: f.paypalIcon
                    }),
                    (0, i.jsx)(s.oil, {
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
let p = a.ZP.connectStores([u.Z, c.Z], () => ({
    braintreeEmail: c.Z.braintreeEmail,
    paypalClient: u.Z.getPayPalClient()
}))(_);
