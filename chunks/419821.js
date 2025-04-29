n.d(t, { u: () => f });
var i = n(255367),
    r = n(73800),
    s = n(512722),
    l = n.n(s),
    a = n(399606),
    o = n(481060),
    c = n(594174),
    d = n(933970),
    u = n(340453),
    m = n(292352),
    p = n(332495),
    g = n(388032),
    h = n(708734);
function f(e) {
    let { user: t } = e,
        s = (0, a.e7)([c.default], () => c.default.getCurrentUser()),
        f = r.useCallback(() => {
            l()(void 0 !== s, 'User must be logged in to accept a link request'),
                (0, o.ZDy)(async () => {
                    let { default: e } = await n.e('50872').then(n.bind(n, 442673));
                    return (n) => {
                        var r, l;
                        return (0, i.jsx)(
                            e,
                            ((r = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        i = Object.keys(n);
                                    'function' == typeof Object.getOwnPropertySymbols &&
                                        (i = i.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            })
                                        )),
                                        i.forEach(function (t) {
                                            var i;
                                            (i = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: i,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[t] = i);
                                        });
                                }
                                return e;
                            })({}, n)),
                            (l = l =
                                {
                                    currentUser: s,
                                    otherUser: t
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var i = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, i);
                                      }
                                      return n;
                                  })(Object(l)).forEach(function (e) {
                                      Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e));
                                  }),
                            r)
                        );
                    };
                });
        }, [s, t]);
    return (0, i.jsxs)('div', {
        className: h.container,
        children: [
            (0, i.jsx)('div', {
                className: h.details,
                children: (0, i.jsx)(u.Z, {
                    otherUser: t,
                    status: m.ne.ACTIVE
                })
            }),
            (0, i.jsx)('div', {
                className: h.actions,
                children: (0, i.jsx)(d.Z, {
                    icon: o.Dio,
                    tooltip: g.intl.string(p.default.l20ZZm),
                    onClick: f
                })
            })
        ]
    });
}
