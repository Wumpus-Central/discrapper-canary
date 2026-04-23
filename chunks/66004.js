n.d(t, { A: () => m });
var i = n(627968),
    l = n(64700),
    a = n(835245),
    r = n(311907),
    s = n(73153),
    o = n(775602),
    d = n(58149),
    c = n(667050),
    u = n(407781),
    _ = n(652215),
    f = n(718699);
function m(e) {
    let { channelId: t, guildId: n, userId: m, containerDimensions: p } = e,
        g = (0, r.bG)([o.A], () => o.A.useReducedMotion),
        [h, A] = l.useState([]),
        x = h.length < 50;
    l.useEffect(() => {
        function e(e) {
            let { channelId: i, userId: l, emoji: r, animationType: s, animationId: o } = e;
            if (null != m && m !== l) return;
            let u = null != r && null != s && null != o;
            if (i === t && !g && x && u) {
                let e = (0, c.Br)(r),
                    i = null != r.id && !r.animated,
                    u = { id: (0, a.A)(), animationType: s, animationId: o, shouldResize: i, url: e, userId: l };
                A((e) => [...e, u]),
                    d.Ay.trackWithMetadata(_.HAw.VOICE_CHANNEL_EFFECT_VIEWED, { channel_id: t, guild_id: n });
            }
        }
        return (
            s.h.subscribe("VOICE_CHANNEL_EFFECT_SEND", e),
            () => {
                s.h.unsubscribe("VOICE_CHANNEL_EFFECT_SEND", e);
            }
        );
    }, [t, n, m, g, x]);
    let v = l.useCallback((e) => {
        A((t) => {
            let n = [...t],
                i = n.findIndex((t) => t.id === e);
            return n.splice(i, 1), n;
        });
    }, []);
    return g
        ? null
        : (0, i.jsx)("div", {
              className: f.Y,
              style: { width: p.width },
              children: (0, i.jsx)("div", {
                  className: f.z,
                  children: h.map((e) => (0, i.jsx)(u.A, { containerDimensions: p, effect: e, onComplete: v }, e.id)),
              }),
          });
}
