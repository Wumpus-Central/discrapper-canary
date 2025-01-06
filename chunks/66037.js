a(411104), a(47120);
var n = a(200651),
    s = a(192379),
    i = a(539528),
    r = a(81415),
    l = a(332009);
class o extends s.Component {
    render() {
        let { to: e, from: t, isNavLink: a, children: s, tabIndex: i = 0, role: l, className: o } = this.props;
        if (null == e) throw Error("Missing 'to' route prop in TrackLink component");
        let c = 'string' == typeof e ? e : e.pathname,
            d = 'string' == typeof e ? '' : e.hash,
            u = 'string' == typeof e ? '' : e.search;
        return a
            ? (0, n.jsx)(r.OL, {
                  className: o,
                  tabIndex: i,
                  onClick: this.handleOnClick,
                  to: {
                      pathname: c,
                      hash: d,
                      search: u,
                      state: { previousLinkLocation: t }
                  },
                  role: l,
                  children: s
              })
            : (0, n.jsx)(r.rU, {
                  className: o,
                  tabIndex: i,
                  onClick: this.handleOnClick,
                  to: {
                      pathname: c,
                      hash: d,
                      search: u,
                      state: { previousLinkLocation: t }
                  },
                  role: l,
                  children: s
              });
    }
    constructor(...e) {
        var t, a, n;
        super(...e),
            (t = this),
            (a = 'handleOnClick'),
            (n = () => {
                let { to: e, avoidRouter: t, onClick: a, history: n } = this.props;
                if (null != a) a();
                else if (t) {
                    let t = 'string' == typeof e ? (0, i.ob)(e, null, void 0, n.location) : e,
                        a = n.createHref(t);
                    window.location = a;
                }
            }),
            a in t
                ? Object.defineProperty(t, a, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[a] = n);
    }
}
t.Z = (0, l.EN)(o);
