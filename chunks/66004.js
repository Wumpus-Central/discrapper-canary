i.d(t, { A: () => m });
var n = i(627968),
    l = i(64700),
    r = i(835245),
    s = i(311907),
    a = i(73153),
    o = i(775602),
    d = i(58149),
    u = i(667050),
    c = i(407781),
    A = i(652215),
    h = i(384187);
function m(e) {
    let { channelId: t, guildId: i, userId: m, containerDimensions: p } = e,
        g = (0, s.bG)([o.A], () => o.A.useReducedMotion),
        [f, T] = l.useState([]),
        S = f.length < 50;
    l.useEffect(() => {
        function e(e) {
            let { channelId: n, userId: l, emoji: s, animationType: a, animationId: o } = e;
            if (null != m && m !== l) return;
            let c = null != s && null != a && null != o;
            if (n === t && !g && S && c) {
                let e = (0, u.Br)(s),
                    n = null != s.id && !s.animated,
                    c = { id: (0, r.A)(), animationType: a, animationId: o, shouldResize: n, url: e, userId: l };
                T((e) => [...e, c]),
                    d.Ay.trackWithMetadata(A.HAw.VOICE_CHANNEL_EFFECT_VIEWED, { channel_id: t, guild_id: i });
            }
        }
        return (
            a.h.subscribe("VOICE_CHANNEL_EFFECT_SEND", e),
            () => {
                a.h.unsubscribe("VOICE_CHANNEL_EFFECT_SEND", e);
            }
        );
    }, [t, i, m, g, S]);
    let E = l.useCallback((e) => {
        T((t) => {
            let i = [...t],
                n = i.findIndex((t) => t.id === e);
            return i.splice(n, 1), i;
        });
    }, []);
    return g
        ? null
        : (0, n.jsx)("div", {
              className: h.Y,
              style: { width: p.width },
              children: (0, n.jsx)("div", {
                  className: h.z,
                  children: f.map((e) => (0, n.jsx)(c.A, { containerDimensions: p, effect: e, onComplete: E }, e.id)),
              }),
          });
}
