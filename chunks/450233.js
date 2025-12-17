n.d(t, {
    G: () => g,
    Z: () => m,
});
var r,
    i,
    l,
    a,
    o = n(54381),
    s = n(473749),
    c = n(442837),
    u = n(570140),
    d = n(16084),
    p = n(855775),
    f = n(388032),
    g = (((r = {}).SHORT = "SHORT"), (r.LONG = "LONG"), r);
class h extends (a = s.PureComponent) {
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
        null != this.props.purchaseError && u.Z.wait(() => d.pB());
    }
    render() {
        let { className: e, purchaseError: t, messageStyle: n } = this.props;
        return null == t
            ? null
            : (0, o.jsx)("div", {
                  className: e,
                  children: this.getText(t, n),
              });
    }
}
(l = { messageStyle: "LONG" }),
    (i = "defaultProps") in h
        ? Object.defineProperty(h, i, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0,
          })
        : (h[i] = l);
let m = c.ZP.connectStores([p.Z], () => ({ purchaseError: p.Z.error }))(h);
