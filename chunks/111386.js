n.d(t, { Z: () => m }), n(47120);
var r = n(200651),
    a = n(192379),
    l = n(704215),
    i = n(481060),
    o = n(243778),
    s = n(388032),
    c = n(945554),
    u = n(442937);
let d = () =>
        (0, r.jsxs)('div', {
            className: c.coachtipInner,
            children: [
                (0, r.jsx)('img', {
                    src: u,
                    alt: s.NW.string(s.t['9wkT19']),
                    className: c.coachtipAsset
                }),
                (0, r.jsxs)('div', {
                    className: c.coachtipTextContainer,
                    children: [
                        (0, r.jsx)(i.X6q, {
                            variant: 'heading-lg/semibold',
                            children: s.NW.string(s.t.V5y3qa)
                        }),
                        (0, r.jsx)(i.Text, {
                            variant: 'text-md/normal',
                            color: 'text-secondary',
                            children: s.NW.string(s.t.eSDHDg)
                        })
                    ]
                })
            ]
        }),
    m = (e) => {
        let { children: t } = e,
            [n] = (0, o.US)([l.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP]),
            [s, u] = a.useState(!1);
        return (a.useEffect(() => {
            setTimeout(() => {
                u(!0);
            }, 300);
        }),
        n !== l.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP)
            ? t
            : (0, r.jsx)(i.ua7, {
                  text: (0, r.jsx)(d, {}),
                  tooltipClassName: c.coachtip,
                  tooltipContentClassName: c.coachtipContent,
                  position: 'left',
                  allowOverflow: !0,
                  forceOpen: s,
                  shouldShow: s,
                  hideOnClick: !1,
                  'aria-label': 'test',
                  children: (e) => {
                      var n, a;
                      return (0, r.jsx)(
                          'div',
                          ((n = (function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var n = null != arguments[t] ? arguments[t] : {},
                                      r = Object.keys(n);
                                  'function' == typeof Object.getOwnPropertySymbols &&
                                      (r = r.concat(
                                          Object.getOwnPropertySymbols(n).filter(function (e) {
                                              return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                          })
                                      )),
                                      r.forEach(function (t) {
                                          var r;
                                          (r = n[t]),
                                              t in e
                                                  ? Object.defineProperty(e, t, {
                                                        value: r,
                                                        enumerable: !0,
                                                        configurable: !0,
                                                        writable: !0
                                                    })
                                                  : (e[t] = r);
                                      });
                              }
                              return e;
                          })({}, e)),
                          (a = a = { children: t }),
                          Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a))
                              : (function (e, t) {
                                    var n = Object.keys(e);
                                    if (Object.getOwnPropertySymbols) {
                                        var r = Object.getOwnPropertySymbols(e);
                                        n.push.apply(n, r);
                                    }
                                    return n;
                                })(Object(a)).forEach(function (e) {
                                    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(a, e));
                                }),
                          n)
                      );
                  }
              });
    };
