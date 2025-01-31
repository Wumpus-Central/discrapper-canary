n.d(t, {
    G: () => p,
    Z: () => _
});
var i,
    l,
    r,
    a,
    s = n(200651),
    o = n(192379),
    c = n(442837),
    d = n(570140),
    u = n(16084),
    h = n(855775),
    m = n(388032),
    p = (((i = {}).SHORT = 'SHORT'), (i.LONG = 'LONG'), i);
class g extends (a = o.PureComponent) {
    getText(e, t) {
        if (429 === e.status)
            switch (t) {
                case 'SHORT':
                    return m.intl.string(m.t.T15lqq);
                case 'LONG':
                    return m.intl.string(m.t.XFShdH);
            }
        switch (t) {
            case 'SHORT':
                return m.intl.string(m.t['+XstBw']);
            case 'LONG':
                return m.intl.string(m.t.epyCur);
        }
    }
    componentWillUnmount() {
        null != this.props.purchaseError && d.Z.wait(() => u.pB());
    }
    render() {
        let { className: e, purchaseError: t, messageStyle: n } = this.props;
        return null == t
            ? null
            : (0, s.jsx)('div', {
                  className: e,
                  children: this.getText(t, n)
              });
    }
}
(r = { messageStyle: 'LONG' }),
    (l = 'defaultProps') in g
        ? Object.defineProperty(g, l, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (g[l] = r);
let _ = c.ZP.connectStores([h.Z], () => ({ purchaseError: h.Z.error }))(g);
