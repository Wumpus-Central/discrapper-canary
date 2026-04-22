n.d(t, { A: () => A });
var l = n(627968),
    i = n(64700),
    a = n(311907),
    r = n(534514),
    s = n(834730),
    o = n(493405),
    u = n(812745),
    c = n(70142),
    d = n(825755),
    p = n(985018),
    m = n(527142);
class h extends i.PureComponent {
    componentDidMount() {
        null != this.props.venmoClient && o.fB();
    }
    componentDidUpdate(e) {
        null == e.venmoClient && null != this.props.venmoClient && o.fB();
    }
    componentWillUnmount() {
        o._b().then(() => {
            null != c.A.getClient() && o.DD();
        });
    }
    render() {
        let { venmoUsername: e, className: t, venmoClient: n } = this.props,
            i = null != e && "" !== e;
        return (0, l.jsxs)("div", {
            className: t,
            children: [
                (0, l.jsx)(u.Ay, { type: u.Ay.Types.VENMO, size: u.y3.MEDIUM, className: m.Z }),
                i
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(r.D, {
                                  variant: e.length < 25 ? "heading-xl/bold" : "heading-lg/bold",
                                  className: m.y,
                                  children: p.intl.format(p.t.DowIre, { venmoUsername: e }),
                              }),
                              (0, l.jsx)(s.E, {
                                  variant: "text-md/medium",
                                  className: m.y,
                                  children: p.intl.string(p.t.kmEvnR),
                              }),
                          ],
                      })
                    : (0, l.jsx)(s.E, {
                          variant: "text-md/medium",
                          className: m.y,
                          children: null == n ? p.intl.string(p.t["2ouZDU"]) : p.intl.string(p.t.mIL6Jb),
                      }),
            ],
        });
    }
}
let A = a.Ay.connectStores([c.A, d.A], () => ({ venmoUsername: d.A.venmoUsername, venmoClient: c.A.getVenmoClient() }))(
    h,
);
