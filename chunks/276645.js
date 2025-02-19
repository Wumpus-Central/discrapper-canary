n.d(t, { Z: () => s });
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(970731),
    o = n(388032),
    a = n(536358);
function s(e) {
    let { guildId: t, markAsDismissed: s } = e;
    return (0, r.jsx)(l.ZP, {
        className: a.container,
        asset: (0, r.jsx)('img', {
            className: a.image,
            src: n(297806),
            alt: ''
        }),
        header: o.NW.string(o.t['2l9beX']),
        headerClassName: a.header,
        content: o.NW.string(o.t.gdqdND),
        buttonCTA: o.NW.string(o.t.RzWDqa),
        buttonProps: {
            color: i.Ttl.WHITE,
            innerClassName: a.primaryButton
        },
        onClick: () => {
            (0, i.ZDy)(async () => {
                let { default: e } = await Promise.all([n.e('5863'), n.e('82049')]).then(n.bind(n, 751212));
                return (n) => {
                    var i, l;
                    return (0, r.jsx)(
                        e,
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
                        (l = l = { guildId: t }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(l)).forEach(function (e) {
                                  Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                              }),
                        i)
                    );
                };
            });
        },
        secondaryButtonCTA: o.NW.string(o.t.TulDPj),
        secondaryButtonProps: {
            look: i.iLD.LINK,
            color: i.Ttl.WHITE
        },
        markAsDismissed: s
    });
}
