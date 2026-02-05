a.d(t, { A: () => c });
var s = a(627968),
    l = a(64700),
    i = a(830845),
    r = a(393285),
    n = a(134402);
class o extends l.Component {
    handleOnClick = () => {
        let { to: e, avoidRouter: t, onClick: a, history: s } = this.props;
        if (null != a) a();
        else if (t) {
            let t = "string" == typeof e ? (0, i.yJ)(e, null, void 0, s.location) : e,
                a = s.createHref(t);
            window.location = a;
        }
    };
    render() {
        let { to: e, from: t, isNavLink: a, children: l, tabIndex: i = 0, role: n, className: o } = this.props;
        if (null == e) throw Error("Missing 'to' route prop in TrackLink component");
        let c = "string" == typeof e ? e : e.pathname,
            d = "string" == typeof e ? "" : e.hash,
            _ = "string" == typeof e ? "" : e.search;
        return a
            ? (0, s.jsx)(r.k2, {
                  className: o,
                  tabIndex: i,
                  onClick: this.handleOnClick,
                  to: { pathname: c, hash: d, search: _, state: { previousLinkLocation: t } },
                  role: n,
                  children: l,
              })
            : (0, s.jsx)(r.N_, {
                  className: o,
                  tabIndex: i,
                  onClick: this.handleOnClick,
                  to: { pathname: c, hash: d, search: _, state: { previousLinkLocation: t } },
                  role: n,
                  children: l,
              });
    }
}
let c = (0, n.y)(o);
