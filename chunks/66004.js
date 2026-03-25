"use strict";
n.d(t, { A: () => m });
var i = n(627968),
    s = n(64700),
    l = n(835245),
    r = n(311907),
    a = n(73153),
    o = n(775602),
    c = n(58149),
    d = n(667050),
    u = n(407781),
    h = n(652215),
    A = n(6694);
function m(e) {
    let { channelId: t, guildId: n, userId: m, containerDimensions: _ } = e,
        p = (0, r.bG)([o.A], () => o.A.useReducedMotion),
        [g, f] = s.useState([]),
        x = g.length < 50;
    s.useEffect(() => {
        function e(e) {
            let { channelId: i, userId: s, emoji: r, animationType: a, animationId: o } = e;
            if (null != m && m !== s) return;
            let u = null != r && null != a && null != o;
            if (i === t && !p && x && u) {
                let e = (0, d.Br)(r),
                    i = null != r.id && !r.animated,
                    u = { id: (0, l.A)(), animationType: a, animationId: o, shouldResize: i, url: e, userId: s };
                f((e) => [...e, u]),
                    c.Ay.trackWithMetadata(h.HAw.VOICE_CHANNEL_EFFECT_VIEWED, { channel_id: t, guild_id: n });
            }
        }
        return (
            a.h.subscribe("VOICE_CHANNEL_EFFECT_SEND", e),
            () => {
                a.h.unsubscribe("VOICE_CHANNEL_EFFECT_SEND", e);
            }
        );
    }, [t, n, m, p, x]);
    let C = s.useCallback((e) => {
        f((t) => {
            let n = [...t],
                i = n.findIndex((t) => t.id === e);
            return n.splice(i, 1), n;
        });
    }, []);
    return p
        ? null
        : (0, i.jsx)("div", {
              className: A.Y,
              style: { width: _.width },
              children: (0, i.jsx)("div", {
                  className: A.z,
                  children: g.map((e) => (0, i.jsx)(u.A, { containerDimensions: _, effect: e, onComplete: C }, e.id)),
              }),
          });
}
