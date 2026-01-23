n.d(t, {
    A: () => _,
});
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(397927),
    o = n(493405),
    l = n(812745),
    c = n(70142),
    u = n(825755),
    d = n(985018),
    f = n(666491);
class p extends i.PureComponent {
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
        return (0, r.jsxs)("div", {
            className: t,
            children: [
                (0, r.jsx)(l.Ay, {
                    type: l.Ay.Types.VENMO,
                    size: l.y3.MEDIUM,
                    className: f.Z,
                }),
                i
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(s.Heading, {
                                  variant: e.length < 25 ? "heading-xl/bold" : "heading-lg/bold",
                                  className: f.y,
                                  children: d.intl.format(d.t.DowIre, {
                                      venmoUsername: e,
                                  }),
                              }),
                              (0, r.jsx)(s.Text, {
                                  variant: "text-md/medium",
                                  className: f.y,
                                  children: d.intl.string(d.t.kmEvnR),
                              }),
                          ],
                      })
                    : (0, r.jsx)(s.Text, {
                          variant: "text-md/medium",
                          className: f.y,
                          children: null == n ? d.intl.string(d.t["2ouZDU"]) : d.intl.string(d.t.mIL6Jb),
                      }),
            ],
        });
    }
}
let _ = a.Ay.connectStores([c.A, u.A], () => ({
    venmoUsername: u.A.venmoUsername,
    venmoClient: c.A.getVenmoClient(),
}))(p);
