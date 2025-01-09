s(411104), s(47120);
var a = s(200651),
    n = s(192379),
    r = s(539528),
    i = s(81415),
    o = s(332009);
class l extends n.Component {
    render() {
        let { to: e, from: t, isNavLink: s, children: n, tabIndex: r = 0, role: o, className: l } = this.props;
        if (null == e) throw Error("Missing 'to' route prop in TrackLink component");
        let c = 'string' == typeof e ? e : e.pathname,
            d = 'string' == typeof e ? '' : e.hash,
            u = 'string' == typeof e ? '' : e.search;
        return s
            ? (0, a.jsx)(i.OL, {
                  className: l,
                  tabIndex: r,
                  onClick: this.handleOnClick,
                  to: {
                      pathname: c,
                      hash: d,
                      search: u,
                      state: { previousLinkLocation: t }
                  },
                  role: o,
                  children: n
              })
            : (0, a.jsx)(i.rU, {
                  className: l,
                  tabIndex: r,
                  onClick: this.handleOnClick,
                  to: {
                      pathname: c,
                      hash: d,
                      search: u,
                      state: { previousLinkLocation: t }
                  },
                  role: o,
                  children: n
              });
    }
    constructor(...e) {
        var t, s, a;
        super(...e),
            (t = this),
            (s = 'handleOnClick'),
            (a = () => {
                let { to: e, avoidRouter: t, onClick: s, history: a } = this.props;
                if (null != s) s();
                else if (t) {
                    let t = 'string' == typeof e ? (0, r.ob)(e, null, void 0, a.location) : e,
                        s = a.createHref(t);
                    window.location = s;
                }
            }),
            s in t
                ? Object.defineProperty(t, s, {
                      value: a,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[s] = a);
    }
}
t.Z = (0, o.EN)(l);
