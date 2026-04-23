"use strict";
n.d(t, { A: () => h });
var r = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(534514),
    o = n(834730),
    l = n(812745),
    u = n(825755),
    c = n(682449),
    d = n(490581),
    _ = n(985018),
    f = n(40417);
class p extends i.PureComponent {
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
            s = null != n && "" !== i;
        return (0, r.jsxs)("div", {
            className: e,
            children: [
                (0, r.jsx)(l.Ay, { type: l.Ay.Types.CASH_APP, size: l.y3.MEDIUM, className: f.K }),
                s
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(a.D, {
                                  variant: i.length < 25 ? "heading-xl/bold" : "heading-lg/bold",
                                  className: f.y,
                                  children: _.intl.format(_.t["ze/1yE"], { cashtag: i }),
                              }),
                              (0, r.jsx)(o.E, {
                                  variant: "text-md/medium",
                                  className: f.y,
                                  children: _.intl.string(_.t.VPOx7N),
                              }),
                          ],
                      })
                    : (0, r.jsx)(o.E, {
                          variant: "text-md/medium",
                          className: f.y,
                          children: null == t ? _.intl.string(_.t["CgVe/w"]) : _.intl.string(_.t["1MqcjI"]),
                      }),
            ],
        });
    }
}
let h = s.Ay.connectStores([d.A, u.A], () => ({
    cashAppPayComponent: d.A.cashAppPayComponent,
    adyenPaymentData: u.A.adyenPaymentData,
}))(p);
