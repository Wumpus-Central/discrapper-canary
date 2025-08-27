r.d(t, { Z: () => s });
var n = r(951288),
    a = r(647438),
    i = r(481060),
    l = r(785717),
    o = r(388032),
    c = r(684066);
function s() {
    let { trackUserProfileAction: e } = (0, l.KZ)(),
        t = a.useCallback(() => {
            (0, i.ZDy)(
                async () => {
                    let { default: t } = await r.e("38576").then(r.bind(r, 925170));
                    return (r) => {
                        var a, i;
                        return (0, n.jsx)(
                            t,
                            ((a = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = null != arguments[t] ? arguments[t] : {},
                                        n = Object.keys(r);
                                    "function" == typeof Object.getOwnPropertySymbols &&
                                        (n = n.concat(
                                            Object.getOwnPropertySymbols(r).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                            }),
                                        )),
                                        n.forEach(function (t) {
                                            var n;
                                            (n = r[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: n,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0,
                                                      })
                                                    : (e[t] = n);
                                        });
                                }
                                return e;
                            })({}, r)),
                            (i = i = { trackUserProfileAction: e }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(i))
                                : (function (e, t) {
                                      var r = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var n = Object.getOwnPropertySymbols(e);
                                          r.push.apply(r, n);
                                      }
                                      return r;
                                  })(Object(i)).forEach(function (e) {
                                      Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(i, e));
                                  }),
                            a),
                        );
                    };
                },
                { stackingBehavior: "stack" },
            );
        }, [e]);
    return (0, n.jsxs)(i.P3F, {
        className: c.addWidgetButton,
        onClick: t,
        children: [
            (0, n.jsx)(i.qJs, {
                size: "sm",
                color: "currentColor",
            }),
            (0, n.jsx)(i.Text, {
                variant: "text-sm/medium",
                color: "text-default",
                children: o.intl.string(o.t.lBG2s7),
            }),
        ],
    });
}
