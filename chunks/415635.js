n.d(t, { Z: () => h }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(772848),
    o = n(442837),
    s = n(570140),
    l = n(607070),
    c = n(367907),
    u = n(963838),
    d = n(39127),
    f = n(981631),
    _ = n(57495);
let p = 50;
function h(e) {
    let { channelId: t, guildId: n, userId: h, containerDimensions: m } = e,
        g = (0, o.e7)([l.Z], () => l.Z.useReducedMotion),
        [E, b] = i.useState([]),
        y = E.length < p;
    i.useEffect(() => {
        function e(e) {
            let { channelId: r, userId: i, emoji: o, animationType: s, animationId: l } = e;
            if (null != h && h !== i) return;
            let d = null != o && null != s && null != l;
            if (r === t && !g && y && d) {
                let e = (0, u._r)(o),
                    r = null != o.id && !o.animated,
                    d = {
                        id: (0, a.Z)(),
                        animationType: s,
                        animationId: l,
                        shouldResize: r,
                        url: e,
                        userId: i,
                    };
                b((e) => [...e, d]),
                    c.ZP.trackWithMetadata(f.rMx.VOICE_CHANNEL_EFFECT_VIEWED, {
                        channel_id: t,
                        guild_id: n,
                    });
            }
        }
        return (
            s.Z.subscribe("VOICE_CHANNEL_EFFECT_SEND", e),
            () => {
                s.Z.unsubscribe("VOICE_CHANNEL_EFFECT_SEND", e);
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
              className: _.effectsWrapper,
              style: { width: m.width },
              children: (0, r.jsx)("div", {
                  className: _.effects,
                  children: E.map((e) =>
                      (0, r.jsx)(
                          d.Z,
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
