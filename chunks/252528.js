n.d(t, { ActivityAgeGateModal: () => s });
var r = n(200651);
n(192379);
var i = n(481060),
    c = n(480916),
    o = n(986035),
    a = n(388032),
    l = n(165862);
function s(e) {
    var t,
        n,
        { application: s, onAgree: u, onClose: p, onDisagree: g, channelId: f } = e,
        d = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        c = Object.keys(e);
                    for (r = 0; r < c.length; r++) (n = c[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var c = Object.getOwnPropertySymbols(e);
                for (r = 0; r < c.length; r++) (n = c[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
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
        })({}, d)),
        (n = n =
            {
                children: (0, r.jsx)('div', {
                    children: (0, r.jsx)(o.Z, {
                        modalType: c.it.NSFW_EMBEDDED_ACTIVITY,
                        channelId: f,
                        onAgree: () => {
                            u(), p();
                        },
                        onDisagree: () => {
                            g(), p();
                        },
                        title: a.NW.string(a.t.SSDPOD),
                        description: a.NW.formatToPlainString(a.t.OgmIq6, { applicationName: s.name }),
                        agreement: a.NW.string(a.t.wVq7ur),
                        disagreement: a.NW.string(a.t.hg1uxs),
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
