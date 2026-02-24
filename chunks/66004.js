n.d(e, { A: () => m });
var i = n(627968),
    l = n(64700),
    r = n(835245),
    a = n(311907),
    s = n(73153),
    o = n(775602),
    d = n(58149),
    u = n(667050),
    c = n(407781),
    A = n(652215),
    p = n(423200);
function m(t) {
    let { channelId: e, guildId: n, userId: m, containerDimensions: h } = t,
        g = (0, a.bG)([o.A], () => o.A.useReducedMotion),
        [f, E] = l.useState([]),
        C = f.length < 50;
    l.useEffect(() => {
        function t(t) {
            let { channelId: i, userId: l, emoji: a, animationType: s, animationId: o } = t;
            if (null != m && m !== l) return;
            let c = null != a && null != s && null != o;
            if (i === e && !g && C && c) {
                let t = (0, u.Br)(a),
                    i = null != a.id && !a.animated,
                    c = { id: (0, r.A)(), animationType: s, animationId: o, shouldResize: i, url: t, userId: l };
                E((t) => [...t, c]),
                    d.Ay.trackWithMetadata(A.HAw.VOICE_CHANNEL_EFFECT_VIEWED, { channel_id: e, guild_id: n });
            }
        }
        return (
            s.h.subscribe("VOICE_CHANNEL_EFFECT_SEND", t),
            () => {
                s.h.unsubscribe("VOICE_CHANNEL_EFFECT_SEND", t);
            }
        );
    }, [e, n, m, g, C]);
    let S = l.useCallback((t) => {
        E((e) => {
            let n = [...e],
                i = n.findIndex((e) => e.id === t);
            return n.splice(i, 1), n;
        });
    }, []);
    return g
        ? null
        : (0, i.jsx)("div", {
              className: p.Y,
              style: { width: h.width },
              children: (0, i.jsx)("div", {
                  className: p.z,
                  children: f.map((t) => (0, i.jsx)(c.A, { containerDimensions: h, effect: t, onComplete: S }, t.id)),
              }),
          });
}
