n.d(t, { A: () => g });
var i = n(477900),
    l = n(582128),
    s = n(132500),
    r = n(17928),
    a = n(73153),
    o = n(775602),
    u = n(666860),
    c = n(104142),
    d = n(407781),
    m = n(652215),
    p = n(983156);
function g(e) {
    let { channelId: t, guildId: n, userId: g, containerDimensions: h } = e,
        x = (0, r.bG)([o.Ay], () => o.Ay.useReducedMotion),
        [f, A] = l.useState([]),
        v = f.length < 50;
    l.useEffect(() => {
        function e(e) {
            let { channelId: i, userId: l, emoji: r, animationType: a, animationId: o } = e;
            if (null != g && g !== l) return;
            let d = null != r && null != a && null != o;
            if (i === t && !x && v && d) {
                let e = (0, c.Br)(r),
                    i = null != r.id && !r.animated,
                    d = { id: (0, s.A)(), animationType: a, animationId: o, shouldResize: i, url: e, userId: l };
                (A((e) => [...e, d]),
                    u.Ay.trackWithMetadata(m.HAw.VOICE_CHANNEL_EFFECT_VIEWED, { channel_id: t, guild_id: n }));
            }
        }
        return (
            a.h.subscribe("VOICE_CHANNEL_EFFECT_SEND", e),
            () => {
                a.h.unsubscribe("VOICE_CHANNEL_EFFECT_SEND", e);
            }
        );
    }, [t, n, g, x, v]);
    let E = l.useCallback((e) => {
        A((t) => {
            let n = [...t],
                i = n.findIndex((t) => t.id === e);
            return (n.splice(i, 1), n);
        });
    }, []);
    return x
        ? null
        : (0, i.jsx)("div", {
              className: p.Y,
              style: { width: h.width },
              children: (0, i.jsx)("div", {
                  className: p.z,
                  children: f.map((e) => (0, i.jsx)(d.A, { containerDimensions: h, effect: e, onComplete: E }, e.id)),
              }),
          });
}
