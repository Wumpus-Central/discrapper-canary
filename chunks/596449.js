n.d(t, { Z: () => c });
var r = n(200651);
n(192379);
var i = n(692547),
    l = n(481060),
    o = n(576749),
    a = n(688641),
    s = n(388032);
function c(e) {
    let { className: t, guildId: c } = e,
        u = (0, o.Z)();
    return (0, r.jsx)(a.Z, {
        className: t,
        icon: (0, r.jsx)(l.Que, {
            size: 'custom',
            color: 'currentColor',
            height: 20,
            width: 20
        }),
        color: i.Z.unsafe_rawColors.BRAND_500.css,
        title: s.NW.string(s.t['60lJ0N']),
        description: s.NW.string(s.t['EYn7//']),
        onClick: function () {
            (0, l.ZDy)(async () => {
                let { default: e } = await Promise.all([n.e('22347'), n.e('82758'), n.e('58023'), n.e('53647')]).then(n.bind(n, 779250));
                return (t) => {
                    var n, i;
                    return (0, r.jsx)(
                        e,
                        ((n = (function (e) {
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
                        })({}, t)),
                        (i = i = { guildId: c }),
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
                        n)
                    );
                };
            }, u);
        }
    });
}
