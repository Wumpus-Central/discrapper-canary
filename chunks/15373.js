n.d(t, { A: () => m });
var l = n(627968),
    i = n(64700),
    a = n(311907),
    r = n(292666),
    s = n(493405),
    o = n(812745),
    u = n(70142),
    c = n(825755),
    d = n(985018);
class p extends i.PureComponent {
    componentDidMount() {
        null != this.props.paypalClient && s.Rz();
    }
    componentDidUpdate(e) {
        null == e.paypalClient && null != this.props.paypalClient && s.Rz();
    }
    componentWillUnmount() {
        s.gm().then(() => {
            null != u.A.getClient() && s.LR();
        });
    }
    render() {
        let { braintreeEmail: e, paypalClient: t } = this.props;
        return (0, l.jsx)(r.k, {
            label: d.intl.string(d.t.QQBAos),
            leading: { type: "image", src: (0, o.Nj)(o.Ay.Types.PAYPAL) },
            value: e,
            readOnly: !0,
            placeholder: null == t ? d.intl.string(d.t.dte2M9) : d.intl.string(d.t.hopw7X),
        });
    }
}
let m = a.Ay.connectStores([u.A, c.A], () => ({
    braintreeEmail: c.A.braintreeEmail,
    paypalClient: u.A.getPayPalClient(),
}))(p);
