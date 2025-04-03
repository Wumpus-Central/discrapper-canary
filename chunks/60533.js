n.d(t, { Z: () => c });
var r = n(200651);
n(192379);
var i = n(442837),
    s = n(481060),
    a = n(90815),
    l = n(594174),
    o = n(675968);
function c(e) {
    let { guild: t } = e,
        n = (0, i.e7)([l.default], () => {
            let e = l.default.getCurrentUser();
            return null != e && (null == t ? void 0 : t.isOwner(e)) === !0;
        }),
        c = () => {
            (0, a.q)(t.id, { demonetized: !0 });
        };
    return (0, r.jsxs)('div', {
        className: o.container,
        children: [
            (0, r.jsx)(s.X6q, {
                variant: 'heading-lg/semibold',
                color: 'header-primary',
                children: 'Monetization Temporarily Disabled'
            }),
            (0, r.jsx)(s.LZC, { size: 24 }),
            (0, r.jsx)(s.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                children: "This server is overdue for accepting our new terms of service so we've had to temporarily suspend monetization. Don't worry, existing subscribers can still access their benefits and renew their subscription. However, new subscriptions cannot be made until the owner accepts our new terms of service."
            }),
            (0, r.jsx)(s.LZC, { size: 24 }),
            (0, r.jsx)(s.ua7, {
                text: 'Only the server owner can accept new terms',
                shouldShow: !n,
                children: (e) => {
                    var t, i;
                    return (0, r.jsx)(
                        s.zxk,
                        ((t = (function (e) {
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
                        })({ disabled: !n }, e)),
                        (i = i =
                            {
                                onClick: c,
                                children: 'Accept New Terms'
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(i)).forEach(function (e) {
                                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
                              }),
                        t)
                    );
                }
            })
        ]
    });
}
