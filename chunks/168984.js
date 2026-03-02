"use strict";
n.d(t, { A: () => p });
var r = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(397927),
    o = n(812745),
    l = n(825755),
    u = n(682449),
    c = n(490581),
    d = n(985018),
    _ = n(985022);
class f extends i.PureComponent {
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
        null == this.props.adyenPaymentData && null != this.props.cashAppPayComponent && u.uy();
    }
    render() {
        let { className: e, cashAppPayComponent: t } = this.props,
            n = this.props.adyenPaymentData,
            i = n?.paymentMethod?.cashtag ?? "",
            s = null != n && "" !== i;
        return (0, r.jsxs)("div", {
            className: e,
            children: [
                (0, r.jsx)(o.Ay, { type: o.Ay.Types.CASH_APP, size: o.y3.MEDIUM, className: _.K }),
                s
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(a.Heading, {
                                  variant: i.length < 25 ? "heading-xl/bold" : "heading-lg/bold",
                                  className: _.y,
                                  children: d.intl.format(d.t["ze/1yE"], { cashtag: i }),
                              }),
                              (0, r.jsx)(a.Text, {
                                  variant: "text-md/medium",
                                  className: _.y,
                                  children: d.intl.string(d.t.VPOx7N),
                              }),
                          ],
                      })
                    : (0, r.jsx)(a.Text, {
                          variant: "text-md/medium",
                          className: _.y,
                          children: null == t ? d.intl.string(d.t["CgVe/w"]) : d.intl.string(d.t["1MqcjI"]),
                      }),
            ],
        });
    }
}
let p = s.Ay.connectStores([c.A, l.A], () => ({
    cashAppPayComponent: c.A.cashAppPayComponent,
    adyenPaymentData: l.A.adyenPaymentData,
}))(f);
