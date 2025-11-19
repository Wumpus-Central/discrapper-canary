n.d(t, { Z: () => s });
var r = n(54381),
    i = n(473749),
    a = n(481060),
    l = n(785717),
    o = n(388032),
    c = n(684066);
function s() {
    let { trackUserProfileEditAction: e } = (0, l.KZ)(),
        t = i.useCallback(() => {
            e({ action: "PRESS_ADD_WIDGET" }),
                (0, a.ZDy)(
                    async () => {
                        let { default: t } = await n.e("38576").then(n.bind(n, 925170));
                        return (n) => {
                            var i, a;
                            return (0, r.jsx)(
                                t,
                                ((i = (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            r = Object.keys(n);
                                        "function" == typeof Object.getOwnPropertySymbols &&
                                            (r = r.concat(
                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                }),
                                            )),
                                            r.forEach(function (t) {
                                                var r;
                                                (r = n[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: r,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0,
                                                          })
                                                        : (e[t] = r);
                                            });
                                    }
                                    return e;
                                })({}, n)),
                                (a = a = { trackUserProfileEditAction: e }),
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
                                i),
                            );
                        };
                    },
                    { stackingBehavior: "stack" },
                );
        }, [e]);
    return (0, r.jsxs)(a.P3F, {
        className: c.addWidgetButton,
        onClick: t,
        children: [
            (0, r.jsx)(a.qJs, {
                size: "sm",
                color: "currentColor",
            }),
            (0, r.jsx)(a.Text, {
                variant: "text-sm/medium",
                color: "text-default",
                children: o.intl.string(o.t["lBG2s/"]),
            }),
        ],
    });
}
