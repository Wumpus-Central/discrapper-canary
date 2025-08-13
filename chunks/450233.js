n.d(t, {
    G: () => h,
    Z: () => m,
});
var r,
    i,
    l,
    a,
    o = n(255367),
    s = n(73800),
    c = n(442837),
    u = n(570140),
    d = n(16084),
    p = n(855775),
    f = n(388032),
    h = (((r = {}).SHORT = "SHORT"), (r.LONG = "LONG"), r);
class g extends (a = s.PureComponent) {
    getText(e, t) {
        if (429 === e.status)
            switch (t) {
                case "SHORT":
                    return f.intl.string(f.t.T15lqq);
                case "LONG":
                    return f.intl.string(f.t.XFShdH);
            }
        switch (t) {
            case "SHORT":
                return f.intl.string(f.t["+XstBw"]);
            case "LONG":
                return f.intl.string(f.t.epyCur);
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
    (i = "defaultProps") in g
        ? Object.defineProperty(g, i, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0,
          })
        : (g[i] = l);
let m = c.ZP.connectStores([p.Z], () => ({ purchaseError: p.Z.error }))(g);
