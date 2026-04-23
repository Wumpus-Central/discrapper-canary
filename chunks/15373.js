"use strict";
n.d(t, { A: () => f });
var r = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(292666),
    o = n(493405),
    l = n(812745),
    u = n(70142),
    c = n(825755),
    d = n(985018);
class _ extends i.PureComponent {
    componentDidMount() {
        null != this.props.paypalClient && o.Rz();
    }
    componentDidUpdate(e) {
        null == e.paypalClient && null != this.props.paypalClient && o.Rz();
    }
    componentWillUnmount() {
        o.gm().then(() => {
            null != u.A.getClient() && o.LR();
        });
    }
    render() {
        let { braintreeEmail: e, paypalClient: t } = this.props;
        return (0, r.jsx)(a.k, {
            label: d.intl.string(d.t.QQBAos),
            leading: { type: "image", src: (0, l.Nj)(l.Ay.Types.PAYPAL) },
            value: e,
            readOnly: !0,
            placeholder: null == t ? d.intl.string(d.t.dte2M9) : d.intl.string(d.t.hopw7X),
        });
    }
}
let f = s.Ay.connectStores([u.A, c.A], () => ({
    braintreeEmail: c.A.braintreeEmail,
    paypalClient: u.A.getPayPalClient(),
}))(_);
