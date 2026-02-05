i.d(t, { A: () => A });
var n = i(627968),
    a = i(64700),
    l = i(835245),
    r = i(311907),
    s = i(73153),
    o = i(775602),
    d = i(58149),
    c = i(667050),
    u = i(407781),
    m = i(652215),
    _ = i(6694);
function A(e) {
    let { channelId: t, guildId: i, userId: A, containerDimensions: g } = e,
        h = (0, r.bG)([o.A], () => o.A.useReducedMotion),
        [f, p] = a.useState([]),
        S = f.length < 50;
    a.useEffect(() => {
        function e(e) {
            let { channelId: n, userId: a, emoji: r, animationType: s, animationId: o } = e;
            if (null != A && A !== a) return;
            let u = null != r && null != s && null != o;
            if (n === t && !h && S && u) {
                let e = (0, c.Br)(r),
                    n = null != r.id && !r.animated,
                    u = { id: (0, l.A)(), animationType: s, animationId: o, shouldResize: n, url: e, userId: a };
                p((e) => [...e, u]),
                    d.Ay.trackWithMetadata(m.HAw.VOICE_CHANNEL_EFFECT_VIEWED, { channel_id: t, guild_id: i });
            }
        }
        return (
            s.h.subscribe("VOICE_CHANNEL_EFFECT_SEND", e),
            () => {
                s.h.unsubscribe("VOICE_CHANNEL_EFFECT_SEND", e);
            }
        );
    }, [t, i, A, h, S]);
    let I = a.useCallback((e) => {
        p((t) => {
            let i = [...t],
                n = i.findIndex((t) => t.id === e);
            return i.splice(n, 1), i;
        });
    }, []);
    return h
        ? null
        : (0, n.jsx)("div", {
              className: _.Y,
              style: { width: g.width },
              children: (0, n.jsx)("div", {
                  className: _.z,
                  children: f.map((e) => (0, n.jsx)(u.A, { containerDimensions: g, effect: e, onComplete: I }, e.id)),
              }),
          });
}
