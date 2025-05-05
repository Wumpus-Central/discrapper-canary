n.d(t, { P: () => c });
var r = n(255367),
    i = n(73800),
    l = n(442837),
    s = n(481060),
    a = n(594174),
    o = n(981631);
function c(e) {
    let t = (null == e ? void 0 : e.hasFeature(o.oNc.CREATOR_MONETIZABLE_PENDING_NEW_OWNER_ONBOARDING)) === !0,
        c = (null == e ? void 0 : e.hasFeature(o.oNc.ROLE_SUBSCRIPTIONS_ENABLED)) === !0,
        u = (0, l.e7)([a.default], () => a.default.getCurrentUser()),
        d = (null == e ? void 0 : e.isOwner(u)) === !0;
    i.useEffect(() => {
        null != e &&
            t &&
            d &&
            (0, s.ZDy)(async () => {
                let { default: t } = await n.e('710').then(n.bind(n, 32342));
                return (n) => {
                    var i, l;
                    return (0, r.jsx)(
                        t,
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
                        (l = l =
                            {
                                guildId: e.id,
                                requireTeamSetup: c
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(l)).forEach(function (e) {
                                  Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                              }),
                        i)
                    );
                };
            });
    }, [t, c, e, d]);
}
