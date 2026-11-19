var l = n(477900),
    i = n(582128),
    r = n(115560),
    s = n(855986),
    a = n(73153),
    o = n(775602),
    u = n(149468),
    c = n(716365),
    d = n(407781),
    m = n(652215),
    p = n(983156);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { channelId: t, guildId: n, userId: g, containerDimensions: f } = e,
                h = (0, s.bG)([o.Ay], () => o.Ay.useReducedMotion),
                [A, x] = i.useState([]),
                v = A.length < 50;
            i.useEffect(() => {
                function e(e) {
                    let { channelId: l, userId: i, emoji: s, animationType: a, animationId: o } = e;
                    if (null != g && g !== i) return;
                    let d = null != s && null != a && null != o;
                    if (l === t && !h && v && d) {
                        let e = (0, c.Br)(s),
                            l = null != s.id && !s.animated,
                            d = {
                                id: (0, r.A)(),
                                animationType: a,
                                animationId: o,
                                shouldResize: l,
                                url: e,
                                userId: i,
                            };
                        (x((e) => [...e, d]),
                            u.Ay.trackWithMetadata(m.HAw.VOICE_CHANNEL_EFFECT_VIEWED, { channel_id: t, guild_id: n }));
                    }
                }
                return (
                    a.h.subscribe("VOICE_CHANNEL_EFFECT_SEND", e),
                    () => {
                        a.h.unsubscribe("VOICE_CHANNEL_EFFECT_SEND", e);
                    }
                );
            }, [t, n, g, h, v]);
            let E = i.useCallback((e) => {
                x((t) => {
                    let n = [...t],
                        l = n.findIndex((t) => t.id === e);
                    return (n.splice(l, 1), n);
                });
            }, []);
            return h
                ? null
                : (0, l.jsx)("div", {
                      className: p.Y,
                      style: { width: f.width },
                      children: (0, l.jsx)("div", {
                          className: p.z,
                          children: A.map((e) =>
                              (0, l.jsx)(d.A, { containerDimensions: f, effect: e, onComplete: E }, e.id),
                          ),
                      }),
                  });
        },
    },
);
