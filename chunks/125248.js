a.d(t, { A: () => f });
var i = a(627968),
    n = a(64700),
    s = a(503698),
    l = a.n(s),
    r = a(735438),
    o = a(132500),
    c = a(17928),
    d = a(228366),
    _ = a(565645),
    u = a(775602),
    m = a(885131);
let p = [m.u8, m.n$, m.uN, m.no],
    h = n.memo(function (e) {
        let { emoji: t, onAnimationEnd: a } = e,
            s = (0, r.sample)(p),
            o = n.useCallback(() => {
                a(t.key);
            }, [t.key, a]);
        return (0, i.jsx)("div", {
            className: l()(m.Zg, s),
            onAnimationEnd: o,
            children: (0, i.jsx)(_.A, { emojiId: t.id, emojiName: t.name, animated: t.animated ?? !1 }),
        });
    });
function f(e) {
    let { channelId: t, callHeight: a } = e,
        s = (0, c.bG)([u.A], () => u.A.useReducedMotion),
        [l, r] = n.useState([]);
    n.useEffect(() => {
        function e(e) {
            let { channelId: a, emoji: i } = e;
            a !== t || s || null == i || r((e) => [...e, { key: (0, o.A)(), ...i }]);
        }
        return (
            d.h.subscribe("VOICE_CHANNEL_EFFECT_SEND", e),
            () => {
                d.h.unsubscribe("VOICE_CHANNEL_EFFECT_SEND", e);
            }
        );
    }, [t, s]);
    let _ = n.useCallback((e) => {
        r((t) => t.filter((t) => t.key !== e));
    }, []);
    return s
        ? null
        : (0, i.jsx)("div", {
              className: m.kL,
              style: { top: a - 50, left: "52%" },
              "aria-hidden": !0,
              children: l.map((e) => (0, i.jsx)(h, { emoji: e, onAnimationEnd: _ }, e.key)),
          });
}
