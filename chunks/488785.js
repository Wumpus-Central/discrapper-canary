n.d(t, { Z: () => g }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(392711),
    s = n(772848),
    c = n(442837),
    u = n(570140),
    d = n(596454),
    p = n(607070),
    h = n(301222);
let f = [h.emoji1, h.emoji2, h.emoji3, h.emoji4],
    m = i.memo(function (e) {
        var t;
        let { emoji: n, onAnimationEnd: l } = e,
            s = (0, a.sample)(f),
            c = i.useCallback(() => {
                l(n.key);
            }, [n.key, l]);
        return (0, r.jsx)('div', {
            className: o()(h.emoji, s),
            onAnimationEnd: c,
            children: (0, r.jsx)(d.Z, {
                emojiId: n.id,
                emojiName: n.name,
                animated: null != (t = n.animated) && t
            })
        });
    });
function g(e) {
    let { channelId: t, callHeight: n } = e,
        l = (0, c.e7)([p.Z], () => p.Z.useReducedMotion),
        [o, a] = i.useState([]);
    i.useEffect(() => {
        function e(e) {
            let { channelId: n, emoji: r } = e;
            n !== t ||
                l ||
                null == r ||
                a((e) => [
                    ...e,
                    (function (e) {
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
                    })({ key: (0, s.Z)() }, r)
                ]);
        }
        return (
            u.Z.subscribe('VOICE_CHANNEL_EFFECT_SEND', e),
            () => {
                u.Z.unsubscribe('VOICE_CHANNEL_EFFECT_SEND', e);
            }
        );
    }, [t, l]);
    let d = i.useCallback((e) => {
        a((t) => t.filter((t) => t.key !== e));
    }, []);
    return l
        ? null
        : (0, r.jsx)('div', {
              className: h.container,
              style: {
                  top: n - 50,
                  left: '52%'
              },
              'aria-hidden': !0,
              children: o.map((e) =>
                  (0, r.jsx)(
                      m,
                      {
                          emoji: e,
                          onAnimationEnd: d
                      },
                      e.key
                  )
              )
          });
}
