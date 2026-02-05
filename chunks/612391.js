n.d(t, { A: () => h, g: () => u });
var i,
    r = n(627968),
    a = n(64700),
    l = n(311907),
    s = n(73153),
    o = n(830382),
    d = n(79387),
    c = n(985018),
    u = (((i = {}).SHORT = "SHORT"), (i.LONG = "LONG"), i);
class A extends a.PureComponent {
    static defaultProps = { messageStyle: "LONG" };
    getText(e, t) {
        if (429 === e.status)
            switch (t) {
                case "SHORT":
                    return c.intl.string(c.t.T15lqn);
                case "LONG":
                    return c.intl.string(c.t.XFShdK);
            }
        switch (t) {
            case "SHORT":
                return c.intl.string(c.t["+XstB0"]);
            case "LONG":
                return c.intl.string(c.t.epyCuh);
        }
    }
    componentWillUnmount() {
        null != this.props.purchaseError && s.h.wait(() => o.T3());
    }
    render() {
        let { className: e, purchaseError: t, messageStyle: n } = this.props;
        return null == t ? null : (0, r.jsx)("div", { className: e, children: this.getText(t, n) });
    }
}
let h = l.Ay.connectStores([d.A], () => ({ purchaseError: d.A.error }))(A);
