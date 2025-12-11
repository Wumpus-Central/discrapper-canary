n.d(t, { Z: () => g });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    l = n.n(a),
    o = n(442837),
    c = n(481060),
    s = n(706454),
    u = n(785717),
    d = n(388032),
    f = n(395356);
function g(e) {
    let { className: t } = e,
        a = ["en-US", "en-GB"].includes((0, o.e7)([s.default], () => s.default.locale))
            ? d.intl.string(d.t.OYlggR)
            : d.intl.string(d.t.Y55Tua),
        { trackUserProfileEditAction: g } = (0, u.KZ)(),
        p = i.useCallback(() => {
            g({ action: "PRESS_ADD_WIDGET" }),
                (0, c.ZDy)(
                    async () => {
                        let { default: e } = await n.e("38576").then(n.bind(n, 925170));
                        return (t) => {
                            var n, i;
                            return (0, r.jsx)(
                                e,
                                ((n = (function (e) {
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
                                })({}, t)),
                                (i = i = { trackUserProfileEditAction: g }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var r = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, r);
                                          }
                                          return n;
                                      })(Object(i)).forEach(function (e) {
                                          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                                      }),
                                n),
                            );
                        };
                    },
                    { stackingBehavior: "stack" },
                );
        }, [g]);
    return (0, r.jsxs)("div", {
        className: l()(f.header, t),
        children: [
            (0, r.jsx)(c.Text, {
                variant: "text-xs/semibold",
                color: "text-subtle",
                children: a,
            }),
            (0, r.jsx)(c.Button, {
                icon: c.qJs,
                text: d.intl.string(d.t["lBG2s/"]),
                size: "sm",
                variant: "secondary",
                onClick: p,
            }),
        ],
    });
}
