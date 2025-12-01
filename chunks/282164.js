n.d(t, { Z: () => p });
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(481060),
    s = n(873115),
    l = n(219929),
    c = n(618541),
    u = n(975060),
    d = n(388032);
class f extends i.PureComponent {
    componentDidMount() {
        null != this.props.paypalClient && s.f6();
    }
    componentWillUnmount() {
        s.Nj().then(() => s.Dz());
    }
    render() {
        let { braintreeEmail: e, paypalClient: t } = this.props;
        return (0, r.jsx)(o.oil, {
            label: d.intl.string(d.t.QQBAos),
            leading: {
                type: "image",
                src: (0, l.hx)(l.ZP.Types.PAYPAL),
            },
            value: e,
            readOnly: !0,
            placeholder: null == t ? d.intl.string(d.t.dte2M9) : d.intl.string(d.t.hopw7X),
        });
    }
}
let p = a.ZP.connectStores([c.Z, u.Z], () => ({
    braintreeEmail: u.Z.braintreeEmail,
    paypalClient: c.Z.getPayPalClient(),
}))(f);
