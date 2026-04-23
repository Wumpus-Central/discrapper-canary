"use strict";
n.d(t, { A: () => h });
var r = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(534514),
    o = n(834730),
    l = n(493405),
    u = n(812745),
    c = n(70142),
    d = n(825755),
    _ = n(985018),
    f = n(527142);
class p extends i.PureComponent {
    componentDidMount() {
        null != this.props.venmoClient && l.fB();
    }
    componentDidUpdate(e) {
        null == e.venmoClient && null != this.props.venmoClient && l.fB();
    }
    componentWillUnmount() {
        l._b().then(() => {
            null != c.A.getClient() && l.DD();
        });
    }
    render() {
        let { venmoUsername: e, className: t, venmoClient: n } = this.props,
            i = null != e && "" !== e;
        return (0, r.jsxs)("div", {
            className: t,
            children: [
                (0, r.jsx)(u.Ay, { type: u.Ay.Types.VENMO, size: u.y3.MEDIUM, className: f.Z }),
                i
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(a.D, {
                                  variant: e.length < 25 ? "heading-xl/bold" : "heading-lg/bold",
                                  className: f.y,
                                  children: _.intl.format(_.t.DowIre, { venmoUsername: e }),
                              }),
                              (0, r.jsx)(o.E, {
                                  variant: "text-md/medium",
                                  className: f.y,
                                  children: _.intl.string(_.t.kmEvnR),
                              }),
                          ],
                      })
                    : (0, r.jsx)(o.E, {
                          variant: "text-md/medium",
                          className: f.y,
                          children: null == n ? _.intl.string(_.t["2ouZDU"]) : _.intl.string(_.t.mIL6Jb),
                      }),
            ],
        });
    }
}
let h = s.Ay.connectStores([c.A, d.A], () => ({ venmoUsername: d.A.venmoUsername, venmoClient: c.A.getVenmoClient() }))(
    p,
);
