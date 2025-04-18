n.d(t, { Z: () => o });
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(388032),
    a = n(865096);
function o(e) {
    let { sendStartNotification: t, setSendStartNotification: n } = e,
        o = t ? l.NW.string(l.t.xAT8lJ) : l.NW.string(l.t['Y+18hY']);
    return (0, r.jsx)('div', {
        className: a.notificationToggle,
        children: (0, r.jsx)(i.XZJ, {
            type: i.XZJ.Types.INVERTED,
            size: 14,
            className: a.__invalid_checkbox,
            value: t,
            onChange: function () {
                n(!t);
            },
            children: (0, r.jsx)(i.Text, {
                color: 'header-secondary',
                variant: 'text-sm/normal',
                children: (0, r.jsx)(i.ua7, {
                    position: 'bottom',
                    tooltipClassName: a.tooltip,
                    text: l.NW.string(l.t['4A/xnZ']),
                    'aria-label': l.NW.string(l.t['4A/xnZ']),
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
                            (n = n = { children: o }),
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
