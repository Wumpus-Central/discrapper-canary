n.d(t, { A: () => g });
var l = n(477900),
    i = n(582128),
    s = n(132500),
    r = n(17928),
    a = n(228366),
    o = n(775602),
    u = n(95561),
    c = n(104142),
    d = n(407781),
    m = n(652215),
    p = n(983156);
function g(e) {
    let { channelId: t, guildId: n, userId: g, containerDimensions: h } = e,
        f = (0, r.bG)([o.Ay], () => o.Ay.useReducedMotion),
        [x, A] = i.useState([]),
        v = x.length < 50;
    i.useEffect(() => {
        function e(e) {
            let { channelId: l, userId: i, emoji: r, animationType: a, animationId: o } = e;
            if (null != g && g !== i) return;
            let d = null != r && null != a && null != o;
            if (l === t && !f && v && d) {
                let e = (0, c.Br)(r),
                    l = null != r.id && !r.animated,
                    d = { id: (0, s.A)(), animationType: a, animationId: o, shouldResize: l, url: e, userId: i };
                A((e) => [...e, d]),
                    u.Ay.trackWithMetadata(m.HAw.VOICE_CHANNEL_EFFECT_VIEWED, { channel_id: t, guild_id: n });
            }
        }
        return (
            a.h.subscribe("VOICE_CHANNEL_EFFECT_SEND", e),
            () => {
                a.h.unsubscribe("VOICE_CHANNEL_EFFECT_SEND", e);
            }
        );
    }, [t, n, g, f, v]);
    let E = i.useCallback((e) => {
        A((t) => {
            let n = [...t],
                l = n.findIndex((t) => t.id === e);
            return n.splice(l, 1), n;
        });
    }, []);
    return f
        ? null
        : (0, l.jsx)("div", {
              className: p.Y,
              style: { width: h.width },
              children: (0, l.jsx)("div", {
                  className: p.z,
                  children: x.map((e) => (0, l.jsx)(d.A, { containerDimensions: h, effect: e, onComplete: E }, e.id)),
              }),
          });
}
