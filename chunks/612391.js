n.d(t, {
    A: () => g,
    g: () => h,
});
var r,
    i,
    l,
    a,
    s = n(627968),
    o = n(64700),
    c = n(311907),
    u = n(73153),
    d = n(830382),
    p = n(79387),
    f = n(985018),
    h = (((r = {}).SHORT = "SHORT"), (r.LONG = "LONG"), r);
class A extends (a = o.PureComponent) {
    getText(e, t) {
        if (429 === e.status)
            switch (t) {
                case "SHORT":
                    return f.intl.string(f.t.T15lqn);
                case "LONG":
                    return f.intl.string(f.t.XFShdK);
            }
        switch (t) {
            case "SHORT":
                return f.intl.string(f.t["+XstB0"]);
            case "LONG":
                return f.intl.string(f.t.epyCuh);
        }
    }
    componentWillUnmount() {
        null != this.props.purchaseError && u.h.wait(() => d.T3());
    }
    render() {
        let { className: e, purchaseError: t, messageStyle: n } = this.props;
        return null == t
            ? null
            : (0, s.jsx)("div", {
                  className: e,
                  children: this.getText(t, n),
              });
    }
}
(l = {
    messageStyle: "LONG",
}),
    (i = "defaultProps") in A
        ? Object.defineProperty(A, i, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0,
          })
        : (A[i] = l);
let g = c.Ay.connectStores([p.A], () => ({
    purchaseError: p.A.error,
}))(A);
