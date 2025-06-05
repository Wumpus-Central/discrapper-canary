n.d(t, { ActivityAgeGateModal: () => s });
var r = n(255367);
n(73800);
var i = n(481060),
    o = n(480916),
    c = n(986035),
    a = n(388032),
    l = n(165862);
function s(e) {
    var t,
        n,
        { application: s, onAgree: u, onClose: p, onDisagree: g, channelId: d } = e,
        f = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['application', 'onAgree', 'onClose', 'onDisagree', 'channelId']);
    return (0, r.jsx)(
        i.Y0X,
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
        })({}, f)),
        (n = n =
            {
                parentComponent: 'ActivityAgeGateModal',
                children: (0, r.jsx)('div', {
                    children: (0, r.jsx)(c.Z, {
                        modalType: o.it.NSFW_EMBEDDED_ACTIVITY,
                        channelId: d,
                        onAgree: () => {
                            u(), p();
                        },
                        onDisagree: () => {
                            g(), p();
                        },
                        title: a.intl.string(a.t.SSDPOD),
                        description: a.intl.formatToPlainString(a.t.OgmIq6, { applicationName: s.name }),
                        agreement: a.intl.string(a.t.wVq7ur),
                        disagreement: a.intl.string(a.t.hg1uxs),
                        imageClassName: l.image
                    })
                })
            }),
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
