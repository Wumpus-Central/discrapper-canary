n.d(t, { A: () => g });
var l = n(627968),
    i = n(64700),
    s = n(835245),
    r = n(17928),
    a = n(228366),
    o = n(775602),
    u = n(95561),
    c = n(104142),
    d = n(407781),
    m = n(652215),
    p = n(718699);
function g(e) {
    let { channelId: t, guildId: n, userId: g, containerDimensions: h } = e,
        f = (0, r.bG)([o.Ay], () => o.Ay.useReducedMotion),
        [A, x] = i.useState([]),
        E = A.length < 50;
    i.useEffect(() => {
        function e(e) {
            let { channelId: l, userId: i, emoji: r, animationType: a, animationId: o } = e;
            if (null != g && g !== i) return;
            let d = null != r && null != a && null != o;
            if (l === t && !f && E && d) {
                let e = (0, c.Br)(r),
                    l = null != r.id && !r.animated,
                    d = { id: (0, s.A)(), animationType: a, animationId: o, shouldResize: l, url: e, userId: i };
                x((e) => [...e, d]),
                    u.Ay.trackWithMetadata(m.HAw.VOICE_CHANNEL_EFFECT_VIEWED, { channel_id: t, guild_id: n });
            }
        }
        return (
            a.h.subscribe("VOICE_CHANNEL_EFFECT_SEND", e),
            () => {
                a.h.unsubscribe("VOICE_CHANNEL_EFFECT_SEND", e);
            }
        );
    }, [t, n, g, f, E]);
    let v = i.useCallback((e) => {
        x((t) => {
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
                  children: A.map((e) => (0, l.jsx)(d.A, { containerDimensions: h, effect: e, onComplete: v }, e.id)),
              }),
          });
}
