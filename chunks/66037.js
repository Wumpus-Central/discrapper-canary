a.d(t, { Z: () => c }), a(411104), a(47120);
var n = a(200651),
    s = a(192379),
    l = a(539528),
    i = a(81415),
    r = a(332009);
class o extends s.Component {
    render() {
        let { to: e, from: t, isNavLink: a, children: s, tabIndex: l = 0, role: r, className: o } = this.props;
        if (null == e) throw Error("Missing 'to' route prop in TrackLink component");
        let c = 'string' == typeof e ? e : e.pathname,
            d = 'string' == typeof e ? '' : e.hash,
            u = 'string' == typeof e ? '' : e.search;
        return a
            ? (0, n.jsx)(i.OL, {
                  className: o,
                  tabIndex: l,
                  onClick: this.handleOnClick,
                  to: {
                      pathname: c,
                      hash: d,
                      search: u,
                      state: { previousLinkLocation: t }
                  },
                  role: r,
                  children: s
              })
            : (0, n.jsx)(i.rU, {
                  className: o,
                  tabIndex: l,
                  onClick: this.handleOnClick,
                  to: {
                      pathname: c,
                      hash: d,
                      search: u,
                      state: { previousLinkLocation: t }
                  },
                  role: r,
                  children: s
              });
    }
    constructor(...e) {
        var t, a;
        super(...e),
            (t = 'handleOnClick'),
            (a = () => {
                let { to: e, avoidRouter: t, onClick: a, history: n } = this.props;
                if (null != a) a();
                else if (t) {
                    let t = 'string' == typeof e ? (0, l.ob)(e, null, void 0, n.location) : e,
                        a = n.createHref(t);
                    window.location = a;
                }
            }),
            t in this
                ? Object.defineProperty(this, t, {
                      value: a,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (this[t] = a);
    }
}
let c = (0, r.EN)(o);
