"use strict";
n.d(t, { A: () => p });
var r = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(397927),
    o = n(493405),
    l = n(812745),
    u = n(70142),
    c = n(825755),
    d = n(985018),
    _ = n(207382);
class f extends i.PureComponent {
    componentDidMount() {
        null != this.props.venmoClient && o.fB();
    }
    componentDidUpdate(e) {
        null == e.venmoClient && null != this.props.venmoClient && o.fB();
    }
    componentWillUnmount() {
        o._b().then(() => {
            null != u.A.getClient() && o.DD();
        });
    }
    render() {
        let { venmoUsername: e, className: t, venmoClient: n } = this.props,
            i = null != e && "" !== e;
        return (0, r.jsxs)("div", {
            className: t,
            children: [
                (0, r.jsx)(l.Ay, { type: l.Ay.Types.VENMO, size: l.y3.MEDIUM, className: _.Z }),
                i
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(a.Heading, {
                                  variant: e.length < 25 ? "heading-xl/bold" : "heading-lg/bold",
                                  className: _.y,
                                  children: d.intl.format(d.t.DowIre, { venmoUsername: e }),
                              }),
                              (0, r.jsx)(a.Text, {
                                  variant: "text-md/medium",
                                  className: _.y,
                                  children: d.intl.string(d.t.kmEvnR),
                              }),
                          ],
                      })
                    : (0, r.jsx)(a.Text, {
                          variant: "text-md/medium",
                          className: _.y,
                          children: null == n ? d.intl.string(d.t["2ouZDU"]) : d.intl.string(d.t.mIL6Jb),
                      }),
            ],
        });
    }
}
let p = s.Ay.connectStores([u.A, c.A], () => ({ venmoUsername: c.A.venmoUsername, venmoClient: u.A.getVenmoClient() }))(
    f,
);
