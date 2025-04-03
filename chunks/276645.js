n.d(t, { Z: () => s });
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(970731),
    a = n(388032),
    o = n(212314);
function s(e) {
    let { guildId: t, markAsDismissed: s } = e;
    return (0, r.jsx)(l.ZP, {
        className: o.container,
        asset: (0, r.jsx)('img', {
            className: o.image,
            src: n(297806),
            alt: ''
        }),
        header: a.NW.string(a.t['2l9beX']),
        headerClassName: o.header,
        content: a.NW.string(a.t.gdqdND),
        buttonCTA: a.NW.string(a.t.RzWDqa),
        buttonProps: {
            color: i.Ttl.WHITE,
            innerClassName: o.primaryButton
        },
        onClick: () => {
            (0, i.ZDy)(async () => {
                let { default: e } = await Promise.all([n.e('5863'), n.e('95626')]).then(n.bind(n, 751212));
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
        secondaryButtonCTA: a.NW.string(a.t.TulDPj),
        secondaryButtonProps: {
            look: i.iLD.LINK,
            color: i.Ttl.WHITE
        },
        markAsDismissed: s
    });
}
