s.d(t, { Z: () => c }), s(411104), s(47120);
var a = s(200651),
    n = s(192379),
    i = s(539528),
    r = s(81415),
    o = s(332009);
class l extends n.Component {
    render() {
        let { to: e, from: t, isNavLink: s, children: n, tabIndex: i = 0, role: o, className: l } = this.props;
        if (null == e) throw Error("Missing 'to' route prop in TrackLink component");
        let c = 'string' == typeof e ? e : e.pathname,
            d = 'string' == typeof e ? '' : e.hash,
            u = 'string' == typeof e ? '' : e.search;
        return s
            ? (0, a.jsx)(r.OL, {
                  className: l,
                  tabIndex: i,
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
            : (0, a.jsx)(r.rU, {
                  className: l,
                  tabIndex: i,
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
        var t, s;
        super(...e),
            (t = 'handleOnClick'),
            (s = () => {
                let { to: e, avoidRouter: t, onClick: s, history: a } = this.props;
                if (null != s) s();
                else if (t) {
                    let t = 'string' == typeof e ? (0, i.ob)(e, null, void 0, a.location) : e,
                        s = a.createHref(t);
                    window.location = s;
                }
            }),
            t in this
                ? Object.defineProperty(this, t, {
                      value: s,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (this[t] = s);
    }
}
let c = (0, o.EN)(l);
