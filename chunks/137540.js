a.d(t, { A: () => c }), a(65821), a(747238), a(896048);
var s = a(627968),
    l = a(64700),
    r = a(830845),
    n = a(393285),
    i = a(134402);
class o extends l.Component {
    render() {
        let { to: e, from: t, isNavLink: a, children: l, tabIndex: r = 0, role: i, className: o } = this.props;
        if (null == e) throw Error("Missing 'to' route prop in TrackLink component");
        let c = "string" == typeof e ? e : e.pathname,
            d = "string" == typeof e ? "" : e.hash,
            u = "string" == typeof e ? "" : e.search;
        return a
            ? (0, s.jsx)(n.k2, {
                  className: o,
                  tabIndex: r,
                  onClick: this.handleOnClick,
                  to: {
                      pathname: c,
                      hash: d,
                      search: u,
                      state: { previousLinkLocation: t },
                  },
                  role: i,
                  children: l,
              })
            : (0, s.jsx)(n.N_, {
                  className: o,
                  tabIndex: r,
                  onClick: this.handleOnClick,
                  to: {
                      pathname: c,
                      hash: d,
                      search: u,
                      state: { previousLinkLocation: t },
                  },
                  role: i,
                  children: l,
              });
    }
    constructor(...e) {
        super(...e),
            (function (e, t, a) {
                t in e
                    ? Object.defineProperty(e, t, {
                          value: a,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (e[t] = a);
            })(this, "handleOnClick", () => {
                let { to: e, avoidRouter: t, onClick: a, history: s } = this.props;
                if (null != a) a();
                else if (t) {
                    let t = "string" == typeof e ? (0, r.yJ)(e, null, void 0, s.location) : e,
                        a = s.createHref(t);
                    window.location = a;
                }
            });
    }
}
let c = (0, i.y)(o);
