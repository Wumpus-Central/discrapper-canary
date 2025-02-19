n.d(t, { Z: () => l });
var r = n(200651);
n(192379);
var a = n(481060),
    i = n(388032),
    o = n(330927);
function l(e) {
    let { sendStartNotification: t, setSendStartNotification: n } = e,
        l = t ? i.NW.string(i.t.xAT8lJ) : i.NW.string(i.t['Y+18hY']);
    return (0, r.jsx)('div', {
        className: o.notificationToggle,
        children: (0, r.jsx)(a.XZJ, {
            type: a.XZJ.Types.INVERTED,
            size: 14,
            className: o.__invalid_checkbox,
            value: t,
            onChange: function () {
                n(!t);
            },
            children: (0, r.jsx)(a.Text, {
                color: 'header-secondary',
                variant: 'text-sm/normal',
                children: (0, r.jsx)(a.ua7, {
                    position: 'bottom',
                    tooltipClassName: o.tooltip,
                    text: i.NW.string(i.t['4A/xnZ']),
                    'aria-label': i.NW.string(i.t['4A/xnZ']),
                    children: (e) => {
                        var t, n;
                        return (0, r.jsx)(
                            'span',
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
                            })({}, e)),
                            (n = n = { children: l }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(n)).forEach(function (e) {
                                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                  }),
                            t)
                        );
                    }
                })
            })
        })
    });
}
