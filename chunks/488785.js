n.d(t, { Z: () => b }), n(388685);
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(392711),
    l = n(772848),
    c = n(442837),
    u = n(570140),
    d = n(596454),
    f = n(607070),
    _ = n(134780);
function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function h(e) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}
let m = 50,
    g = [_.emoji1, _.emoji2, _.emoji3, _.emoji4],
    E = i.memo(function (e) {
        var t;
        let { emoji: n, onAnimationEnd: o } = e,
            l = (0, s.sample)(g),
            c = i.useCallback(() => {
                o(n.key);
            }, [n.key, o]);
        return (0, r.jsx)("div", {
            className: a()(_.emoji, l),
            onAnimationEnd: c,
            children: (0, r.jsx)(d.Z, {
                emojiId: n.id,
                emojiName: n.name,
                animated: null != (t = n.animated) && t,
            }),
        });
    });
function b(e) {
    let { channelId: t, callHeight: n } = e,
        o = (0, c.e7)([f.Z], () => f.Z.useReducedMotion),
        [a, s] = i.useState([]);
    i.useEffect(() => {
        function e(e) {
            let { channelId: n, emoji: r } = e;
            n !== t || o || null == r || s((e) => [...e, h({ key: (0, l.Z)() }, r)]);
        }
        return (
            u.Z.subscribe("VOICE_CHANNEL_EFFECT_SEND", e),
            () => {
                u.Z.unsubscribe("VOICE_CHANNEL_EFFECT_SEND", e);
            }
        );
    }, [t, o]);
    let d = i.useCallback((e) => {
        s((t) => t.filter((t) => t.key !== e));
    }, []);
    return o
        ? null
        : (0, r.jsx)("div", {
              className: _.container,
              style: {
                  top: n - m,
                  left: "52%",
              },
              "aria-hidden": !0,
              children: a.map((e) =>
                  (0, r.jsx)(
                      E,
                      {
                          emoji: e,
                          onAnimationEnd: d,
                      },
                      e.key,
                  ),
              ),
          });
}
