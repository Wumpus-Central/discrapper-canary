n.d(t, { Z: () => c });
var l = n(951288);
n(647438);
var r = n(755721),
    i = n(481060),
    a = n(388032),
    o = n(788931);
function c(e) {
    let { sendStartNotification: t, setSendStartNotification: n } = e,
        c = t ? a.intl.string(a.t.xAT8lJ) : a.intl.string(a.t["Y+18hY"]);
    return (0, l.jsx)("div", {
        className: o.notificationToggle,
        children: (0, l.jsx)(r.$q, {
            type: r.M0.INVERTED,
            size: 14,
            className: o.__invalid_checkbox,
            value: t,
            onChange: function () {
                n(!t);
            },
            children: (0, l.jsx)(i.Text, {
                color: "header-secondary",
                variant: "text-sm/normal",
                children: (0, l.jsx)(i.ua7, {
                    position: "bottom",
                    tooltipClassName: o.tooltip,
                    text: a.intl.string(a.t["4A/xnZ"]),
                    "aria-label": a.intl.string(a.t["4A/xnZ"]),
                    children: (e) => {
                        var t, n;
                        return (0, l.jsx)(
                            "span",
                            ((t = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        l = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols &&
                                        (l = l.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            }),
                                        )),
                                        l.forEach(function (t) {
                                            var l;
                                            (l = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: l,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0,
                                                      })
                                                    : (e[t] = l);
                                        });
                                }
                                return e;
                            })({}, e)),
                            (n = n = { children: c }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var l = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, l);
                                      }
                                      return n;
                                  })(Object(n)).forEach(function (e) {
                                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                  }),
                            t),
                        );
                    },
                }),
            }),
        }),
    });
}
