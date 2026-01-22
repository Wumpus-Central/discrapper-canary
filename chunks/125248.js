n.d(t, { A: () => g }), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(735438),
    o = n(835245),
    c = n(311907),
    u = n(73153),
    d = n(565645),
    f = n(775602),
    p = n(213966);
let h = [p.u8, p.n$, p.uN, p.no],
    b = l.memo(function (e) {
        var t;
        let { emoji: n, onAnimationEnd: i } = e,
            o = (0, s.sample)(h),
            c = l.useCallback(() => {
                i(n.key);
            }, [n.key, i]);
        return (0, r.jsx)("div", {
            className: a()(p.Zg, o),
            onAnimationEnd: c,
            children: (0, r.jsx)(d.A, {
                emojiId: n.id,
                emojiName: n.name,
                animated: null != (t = n.animated) && t,
            }),
        });
    });
function g(e) {
    let { channelId: t, callHeight: n } = e,
        i = (0, c.bG)([f.A], () => f.A.useReducedMotion),
        [a, s] = l.useState([]);
    l.useEffect(() => {
        function e(e) {
            let { channelId: n, emoji: r } = e;
            n !== t ||
                i ||
                null == r ||
                s((e) => [
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
                    })({ key: (0, o.A)() }, r),
                ]);
        }
        return (
            u.h.subscribe("VOICE_CHANNEL_EFFECT_SEND", e),
            () => {
                u.h.unsubscribe("VOICE_CHANNEL_EFFECT_SEND", e);
            }
        );
    }, [t, i]);
    let d = l.useCallback((e) => {
        s((t) => t.filter((t) => t.key !== e));
    }, []);
    return i
        ? null
        : (0, r.jsx)("div", {
              className: p.kL,
              style: {
                  top: n - 50,
                  left: "52%",
              },
              "aria-hidden": !0,
              children: a.map((e) =>
                  (0, r.jsx)(
                      b,
                      {
                          emoji: e,
                          onAnimationEnd: d,
                      },
                      e.key,
                  ),
              ),
          });
}
