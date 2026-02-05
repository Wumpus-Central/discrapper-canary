n.d(t, { A: () => p });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(735438),
    o = n(835245),
    d = n(311907),
    c = n(73153),
    u = n(565645),
    h = n(775602),
    A = n(213966);
let g = [A.u8, A.n$, A.uN, A.no],
    m = l.memo(function (e) {
        let { emoji: t, onAnimationEnd: n } = e,
            s = (0, r.sample)(g),
            o = l.useCallback(() => {
                n(t.key);
            }, [t.key, n]);
        return (0, i.jsx)("div", {
            className: a()(A.Zg, s),
            onAnimationEnd: o,
            children: (0, i.jsx)(u.A, { emojiId: t.id, emojiName: t.name, animated: t.animated ?? !1 }),
        });
    });
function p(e) {
    let { channelId: t, callHeight: n } = e,
        s = (0, d.bG)([h.A], () => h.A.useReducedMotion),
        [a, r] = l.useState([]);
    l.useEffect(() => {
        function e(e) {
            let { channelId: n, emoji: i } = e;
            n !== t || s || null == i || r((e) => [...e, { key: (0, o.A)(), ...i }]);
        }
        return (
            c.h.subscribe("VOICE_CHANNEL_EFFECT_SEND", e),
            () => {
                c.h.unsubscribe("VOICE_CHANNEL_EFFECT_SEND", e);
            }
        );
    }, [t, s]);
    let u = l.useCallback((e) => {
        r((t) => t.filter((t) => t.key !== e));
    }, []);
    return s
        ? null
        : (0, i.jsx)("div", {
              className: A.kL,
              style: { top: n - 50, left: "52%" },
              "aria-hidden": !0,
              children: a.map((e) => (0, i.jsx)(m, { emoji: e, onAnimationEnd: u }, e.key)),
          });
}
