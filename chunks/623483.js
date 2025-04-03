n.d(t, { Z: () => a });
var r = n(200651);
n(192379);
var i = n(481060),
    o = n(117984),
    c = n(388032);
function a(e) {
    return (0, r.jsx)(i.sNh, {
        id: 'delete-channel',
        label: c.NW.string(c.t.Jg0R7e),
        subtext: c.NW.string(c.t['+mNKMz']),
        color: 'danger',
        action: () =>
            (0, i.ZDy)(async () => {
                let { default: t } = await n.e('37720').then(n.bind(n, 357632));
                return (n) => {
                    var i, c;
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
                        (c = c =
                            {
                                onConfirm: () => {
                                    n.onClose(), (0, o.xh)(e.id);
                                },
                                channel: e
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(c))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(c)).forEach(function (e) {
                                  Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(c, e));
                              }),
                        i)
                    );
                };
            })
    });
}
