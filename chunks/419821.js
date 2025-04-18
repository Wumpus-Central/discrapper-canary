n.d(t, { u: () => f });
var r = n(200651),
    i = n(192379),
    s = n(512722),
    a = n.n(s),
    l = n(399606),
    o = n(481060),
    c = n(594174),
    d = n(933970),
    u = n(340453),
    m = n(292352),
    g = n(332495),
    p = n(388032),
    h = n(708734);
function f(e) {
    let { user: t } = e,
        s = (0, l.e7)([c.default], () => c.default.getCurrentUser()),
        f = i.useCallback(() => {
            a()(void 0 !== s, 'User must be logged in to accept a link request'),
                (0, o.ZDy)(async () => {
                    let { default: e } = await n.e('50872').then(n.bind(n, 442673));
                    return (n) => {
                        var i, a;
                        return (0, r.jsx)(
                            e,
                            ((i = (function (e) {
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
                            })({}, n)),
                            (a = a =
                                {
                                    currentUser: s,
                                    otherUser: t
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(a)).forEach(function (e) {
                                      Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(a, e));
                                  }),
                            i)
                        );
                    };
                });
        }, [s, t]);
    return (0, r.jsxs)('div', {
        className: h.container,
        children: [
            (0, r.jsx)('div', {
                className: h.details,
                children: (0, r.jsx)(u.Z, {
                    otherUser: t,
                    status: m.ne.ACTIVE
                })
            }),
            (0, r.jsx)('div', {
                className: h.actions,
                children: (0, r.jsx)(d.Z, {
                    icon: o.Dio,
                    tooltip: p.NW.string(g.Z.l20ZZm),
                    onClick: f
                })
            })
        ]
    });
}
