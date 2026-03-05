i.d(e, { A: () => h });
var n = i(627968),
    l = i(64700),
    r = i(835245),
    s = i(311907),
    a = i(73153),
    o = i(775602),
    d = i(58149),
    u = i(667050),
    c = i(407781),
    m = i(652215),
    p = i(423200);
function h(t) {
    let { channelId: e, guildId: i, userId: h, containerDimensions: A } = t,
        g = (0, s.bG)([o.A], () => o.A.useReducedMotion),
        [f, T] = l.useState([]),
        v = f.length < 50;
    l.useEffect(() => {
        function t(t) {
            let { channelId: n, userId: l, emoji: s, animationType: a, animationId: o } = t;
            if (null != h && h !== l) return;
            let c = null != s && null != a && null != o;
            if (n === e && !g && v && c) {
                let t = (0, u.Br)(s),
                    n = null != s.id && !s.animated,
                    c = { id: (0, r.A)(), animationType: a, animationId: o, shouldResize: n, url: t, userId: l };
                T((t) => [...t, c]),
                    d.Ay.trackWithMetadata(m.HAw.VOICE_CHANNEL_EFFECT_VIEWED, { channel_id: e, guild_id: i });
            }
        }
        return (
            a.h.subscribe("VOICE_CHANNEL_EFFECT_SEND", t),
            () => {
                a.h.unsubscribe("VOICE_CHANNEL_EFFECT_SEND", t);
            }
        );
    }, [e, i, h, g, v]);
    let C = l.useCallback((t) => {
        T((e) => {
            let i = [...e],
                n = i.findIndex((e) => e.id === t);
            return i.splice(n, 1), i;
        });
    }, []);
    return g
        ? null
        : (0, n.jsx)("div", {
              className: p.Y,
              style: { width: A.width },
              children: (0, n.jsx)("div", {
                  className: p.z,
                  children: f.map((t) => (0, n.jsx)(c.A, { containerDimensions: A, effect: t, onComplete: C }, t.id)),
              }),
          });
}
