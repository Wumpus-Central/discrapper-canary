n.d(t, {
    A: () => p,
});
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(397927),
    o = n(493405),
    l = n(812745),
    c = n(70142),
    u = n(825755),
    d = n(985018);
class f extends i.PureComponent {
    componentDidMount() {
        null != this.props.paypalClient && o.Rz();
    }
    componentDidUpdate(e) {
        null == e.paypalClient && null != this.props.paypalClient && o.Rz();
    }
    componentWillUnmount() {
        o.gm().then(() => {
            null != c.A.getClient() && o.LR();
        });
    }
    render() {
        let { braintreeEmail: e, paypalClient: t } = this.props;
        return (0, r.jsx)(s.ksK, {
            label: d.intl.string(d.t.QQBAos),
            leading: {
                type: "image",
                src: (0, l.Nj)(l.Ay.Types.PAYPAL),
            },
            value: e,
            readOnly: !0,
            placeholder: null == t ? d.intl.string(d.t.dte2M9) : d.intl.string(d.t.hopw7X),
        });
    }
}
let p = a.Ay.connectStores([c.A, u.A], () => ({
    braintreeEmail: u.A.braintreeEmail,
    paypalClient: c.A.getPayPalClient(),
}))(f);
