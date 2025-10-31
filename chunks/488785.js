n.d(t, { Z: () => g }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(392711),
    s = n(772848),
    c = n(442837),
    u = n(570140),
    d = n(596454),
    p = n(607070),
    f = n(604729);
let h = [f.emoji1, f.emoji2, f.emoji3, f.emoji4],
    m = i.memo(function (e) {
        var t;
        let { emoji: n, onAnimationEnd: l } = e,
            s = (0, o.sample)(h),
            c = i.useCallback(() => {
                l(n.key);
            }, [n.key, l]);
        return (0, r.jsx)("div", {
            className: a()(f.emoji, s),
            onAnimationEnd: c,
            children: (0, r.jsx)(d.Z, {
                emojiId: n.id,
                emojiName: n.name,
                animated: null != (t = n.animated) && t,
            }),
        });
    });
function g(e) {
    let { channelId: t, callHeight: n } = e,
        l = (0, c.e7)([p.Z], () => p.Z.useReducedMotion),
        [a, o] = i.useState([]);
    i.useEffect(() => {
        function e(e) {
            let { channelId: n, emoji: r } = e;
            n !== t ||
                l ||
                null == r ||
                o((e) => [
                    ...e,
                    (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (r = r.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    }),
                                )),
                                r.forEach(function (t) {
                                    var r;
                                    (r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = r);
                                });
                        }
                        return e;
                    })({ key: (0, s.Z)() }, r),
                ]);
        }
        return (
            u.Z.subscribe("VOICE_CHANNEL_EFFECT_SEND", e),
            () => {
                u.Z.unsubscribe("VOICE_CHANNEL_EFFECT_SEND", e);
            }
        );
    }, [t, l]);
    let d = i.useCallback((e) => {
        o((t) => t.filter((t) => t.key !== e));
    }, []);
    return l
        ? null
        : (0, r.jsx)("div", {
              className: f.container,
              style: {
                  top: n - 50,
                  left: "52%",
              },
              "aria-hidden": !0,
              children: a.map((e) =>
                  (0, r.jsx)(
                      m,
                      {
                          emoji: e,
                          onAnimationEnd: d,
                      },
                      e.key,
                  ),
              ),
          });
}
