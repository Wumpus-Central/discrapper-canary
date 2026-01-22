n.d(t, {
    A: () => _,
});
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(397927),
    o = n(812745),
    l = n(825755),
    c = n(682449),
    u = n(490581),
    d = n(985018),
    f = n(985022);
class p extends i.PureComponent {
    componentDidMount() {
        null == this.props.adyenPaymentData && null != this.props.cashAppPayComponent && c.uy();
    }
    render() {
        var e, t;
        let { className: n, cashAppPayComponent: i } = this.props,
            a = this.props.adyenPaymentData,
            l = null != (e = null == a || null == (t = a.paymentMethod) ? void 0 : t.cashtag) ? e : "",
            c = null != a && "" !== l;
        return (0, r.jsxs)("div", {
            className: n,
            children: [
                (0, r.jsx)(o.Ay, {
                    type: o.Ay.Types.CASH_APP,
                    size: o.y3.MEDIUM,
                    className: f.K,
                }),
                c
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(s.Heading, {
                                  variant: l.length < 25 ? "heading-xl/bold" : "heading-lg/bold",
                                  className: f.y,
                                  children: d.intl.format(d.t["ze/1yE"], {
                                      cashtag: l,
                                  }),
                              }),
                              (0, r.jsx)(s.Text, {
                                  variant: "text-md/medium",
                                  className: f.y,
                                  children: d.intl.string(d.t.VPOx7N),
                              }),
                          ],
                      })
                    : (0, r.jsx)(s.Text, {
                          variant: "text-md/medium",
                          className: f.y,
                          children: null == i ? d.intl.string(d.t["CgVe/w"]) : d.intl.string(d.t["1MqcjI"]),
                      }),
            ],
        });
    }
}
let _ = a.Ay.connectStores([u.A, l.A], () => ({
    cashAppPayComponent: u.A.cashAppPayComponent,
    adyenPaymentData: l.A.adyenPaymentData,
}))(p);
