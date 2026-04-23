n.d(t, { A: () => A });
var i = n(627968),
    a = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(735438),
    o = n(835245),
    c = n(311907),
    d = n(73153),
    u = n(565645),
    p = n(775602),
    h = n(885131);
let _ = [h.u8, h.n$, h.uN, h.no],
    m = a.memo(function (e) {
        let { emoji: t, onAnimationEnd: n } = e,
            l = (0, r.sample)(_),
            o = a.useCallback(() => {
                n(t.key);
            }, [t.key, n]);
        return (0, i.jsx)("div", {
            className: s()(h.Zg, l),
            onAnimationEnd: o,
            children: (0, i.jsx)(u.A, { emojiId: t.id, emojiName: t.name, animated: t.animated ?? !1 }),
        });
    });
function A(e) {
    let { channelId: t, callHeight: n } = e,
        l = (0, c.bG)([p.A], () => p.A.useReducedMotion),
        [s, r] = a.useState([]);
    a.useEffect(() => {
        function e(e) {
            let { channelId: n, emoji: i } = e;
            n !== t || l || null == i || r((e) => [...e, { key: (0, o.A)(), ...i }]);
        }
        return (
            d.h.subscribe("VOICE_CHANNEL_EFFECT_SEND", e),
            () => {
                d.h.unsubscribe("VOICE_CHANNEL_EFFECT_SEND", e);
            }
        );
    }, [t, l]);
    let u = a.useCallback((e) => {
        r((t) => t.filter((t) => t.key !== e));
    }, []);
    return l
        ? null
        : (0, i.jsx)("div", {
              className: h.kL,
              style: { top: n - 50, left: "52%" },
              "aria-hidden": !0,
              children: s.map((e) => (0, i.jsx)(m, { emoji: e, onAnimationEnd: u }, e.key)),
          });
}
