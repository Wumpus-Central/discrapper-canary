n.d(t, {
    A: () => h,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(835245),
    s = n(311907),
    o = n(73153),
    l = n(775602),
    c = n(58149),
    u = n(667050),
    d = n(407781),
    f = n(652215),
    p = n(6694);
let _ = 50;

function h(e) {
    let { channelId: t, guildId: n, userId: h, containerDimensions: m } = e,
        g = (0, s.bG)([l.A], () => l.A.useReducedMotion),
        [E, b] = i.useState([]),
        y = E.length < _;
    i.useEffect(() => {
        function e(e) {
            let { channelId: r, userId: i, emoji: s, animationType: o, animationId: l } = e;
            if (null != h && h !== i) return;
            let d = null != s && null != o && null != l;
            if (r === t && !g && y && d) {
                let e = (0, u.Br)(s),
                    r = null != s.id && !s.animated,
                    d = {
                        id: (0, a.A)(),
                        animationType: o,
                        animationId: l,
                        shouldResize: r,
                        url: e,
                        userId: i,
                    };
                b((e) => [...e, d]),
                    c.Ay.trackWithMetadata(f.HAw.VOICE_CHANNEL_EFFECT_VIEWED, {
                        channel_id: t,
                        guild_id: n,
                    });
            }
        }
        return (
            o.h.subscribe("VOICE_CHANNEL_EFFECT_SEND", e),
            () => {
                o.h.unsubscribe("VOICE_CHANNEL_EFFECT_SEND", e);
            }
        );
    }, [t, n, h, g, y]);
    let O = i.useCallback((e) => {
        b((t) => {
            let n = [...t],
                r = n.findIndex((t) => t.id === e);
            return n.splice(r, 1), n;
        });
    }, []);
    return g
        ? null
        : (0, r.jsx)("div", {
              className: p.Y,
              style: {
                  width: m.width,
              },
              children: (0, r.jsx)("div", {
                  className: p.z,
                  children: E.map((e) =>
                      (0, r.jsx)(
                          d.A,
                          {
                              containerDimensions: m,
                              effect: e,
                              onComplete: O,
                          },
                          e.id,
                      ),
                  ),
              }),
          });
}
