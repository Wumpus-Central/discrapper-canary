var i = n(477900),
    l = n(582128),
    s = n(115560),
    r = n(855986),
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
                h = (0, r.bG)([o.Ay], () => o.Ay.useReducedMotion),
                [x, A] = l.useState([]),
                v = x.length < 50;
            l.useEffect(() => {
                function e(e) {
                    let { channelId: i, userId: l, emoji: r, animationType: a, animationId: o } = e;
                    if (null != g && g !== l) return;
                    let d = null != r && null != a && null != o;
                    if (i === t && !h && v && d) {
                        let e = (0, c.Br)(r),
                            i = null != r.id && !r.animated,
                            d = {
                                id: (0, s.A)(),
                                animationType: a,
                                animationId: o,
                                shouldResize: i,
                                url: e,
                                userId: l,
                            };
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
            }, [t, n, g, h, v]);
            let E = l.useCallback((e) => {
                A((t) => {
                    let n = [...t],
                        i = n.findIndex((t) => t.id === e);
                    return (n.splice(i, 1), n);
                });
            }, []);
            return h
                ? null
                : (0, i.jsx)("div", {
                      className: p.Y,
                      style: { width: f.width },
                      children: (0, i.jsx)("div", {
                          className: p.z,
                          children: x.map((e) =>
                              (0, i.jsx)(d.A, { containerDimensions: f, effect: e, onComplete: E }, e.id),
                          ),
                      }),
                  });
        },
    },
);
