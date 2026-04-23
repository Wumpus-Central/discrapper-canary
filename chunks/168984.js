n.d(t, { A: () => A });
var l = n(627968),
    i = n(64700),
    a = n(311907),
    r = n(534514),
    s = n(834730),
    o = n(812745),
    u = n(825755),
    c = n(682449),
    d = n(490581),
    p = n(985018),
    m = n(40417);
class h extends i.PureComponent {
    componentDidMount() {
        this.maybeOpenCashAppOverlay();
    }
    componentDidUpdate(e) {
        null == e.cashAppPayComponent &&
            null != this.props.cashAppPayComponent &&
            null == this.props.adyenPaymentData &&
            this.maybeOpenCashAppOverlay();
    }
    maybeOpenCashAppOverlay() {
        null == this.props.adyenPaymentData && null != this.props.cashAppPayComponent && c.uy();
    }
    render() {
        let { className: e, cashAppPayComponent: t } = this.props,
            n = this.props.adyenPaymentData,
            i = n?.paymentMethod?.cashtag ?? "",
            a = null != n && "" !== i;
        return (0, l.jsxs)("div", {
            className: e,
            children: [
                (0, l.jsx)(o.Ay, { type: o.Ay.Types.CASH_APP, size: o.y3.MEDIUM, className: m.K }),
                a
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(r.D, {
                                  variant: i.length < 25 ? "heading-xl/bold" : "heading-lg/bold",
                                  className: m.y,
                                  children: p.intl.format(p.t["ze/1yE"], { cashtag: i }),
                              }),
                              (0, l.jsx)(s.E, {
                                  variant: "text-md/medium",
                                  className: m.y,
                                  children: p.intl.string(p.t.VPOx7N),
                              }),
                          ],
                      })
                    : (0, l.jsx)(s.E, {
                          variant: "text-md/medium",
                          className: m.y,
                          children: null == t ? p.intl.string(p.t["CgVe/w"]) : p.intl.string(p.t["1MqcjI"]),
                      }),
            ],
        });
    }
}
let A = a.Ay.connectStores([d.A, u.A], () => ({
    cashAppPayComponent: d.A.cashAppPayComponent,
    adyenPaymentData: u.A.adyenPaymentData,
}))(h);
