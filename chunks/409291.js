a.d(t, { A: () => i }), a(896048);
var s,
    l = a(627968),
    r = a(64700);
function n(e, t, a) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: a,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = a),
        e
    );
}
class i extends (s = r.PureComponent) {
    render() {
        var e, t;
        let a = this.props,
            { tag: s, children: r, eventName: i, data: o, track: c, trackOutboundLink: d } = a,
            u = (function (e, t) {
                if (null == e) return {};
                var a,
                    s,
                    l,
                    r = {};
                if ("u" > typeof Reflect && Reflect.ownKeys) {
                    for (l = 0, a = Reflect.ownKeys(e); l < a.length; l++)
                        (s = a[l]),
                            !(t.indexOf(s) >= 0) && Object.prototype.propertyIsEnumerable.call(e, s) && (r[s] = e[s]);
                    return r;
                }
                if (
                    ((r = (function (e, t) {
                        if (null == e) return {};
                        var a,
                            s,
                            l = {},
                            r = Object.getOwnPropertyNames(e);
                        for (s = 0; s < r.length; s++)
                            (a = r[s]),
                                !(t.indexOf(a) >= 0) &&
                                    Object.prototype.propertyIsEnumerable.call(e, a) &&
                                    (l[a] = e[a]);
                        return l;
                    })(e, t)),
                    Object.getOwnPropertySymbols)
                )
                    for (l = 0, a = Object.getOwnPropertySymbols(e); l < a.length; l++)
                        (s = a[l]),
                            !(t.indexOf(s) >= 0) && Object.prototype.propertyIsEnumerable.call(e, s) && (r[s] = e[s]);
                return r;
            })(a, ["tag", "children", "eventName", "data", "track", "trackOutboundLink"]);
        return null == s
            ? null
            : (0, l.jsx)(
                  s,
                  ((e = (function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                          var a = null != arguments[t] ? arguments[t] : {},
                              s = Object.keys(a);
                          "function" == typeof Object.getOwnPropertySymbols &&
                              (s = s.concat(
                                  Object.getOwnPropertySymbols(a).filter(function (e) {
                                      return Object.getOwnPropertyDescriptor(a, e).enumerable;
                                  }),
                              )),
                              s.forEach(function (t) {
                                  n(e, t, a[t]);
                              });
                      }
                      return e;
                  })({}, u)),
                  (t = t =
                      {
                          onClick: this.handleClick,
                          children: r,
                      }),
                  Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                      : (function (e, t) {
                            var a = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var s = Object.getOwnPropertySymbols(e);
                                a.push.apply(a, s);
                            }
                            return a;
                        })(Object(t)).forEach(function (a) {
                            Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a));
                        }),
                  e),
              );
    }
    constructor(...e) {
        super(...e),
            n(this, "handleClick", (e) => {
                let { eventName: t, data: a, href: s, onClick: l, trackOutboundLink: r, track: n } = this.props;
                if (
                    (a.googleAnalytics &&
                        r &&
                        (null != s
                            ? r(s)
                            : console.warn("TrackClick.handleClick: No href provided when using data.googleAnalytics")),
                    l && l(e),
                    !t)
                )
                    return !1;
                n(t, a);
            });
    }
}
n(i, "defaultProps", {
    tag: "a",
    data: {},
});
