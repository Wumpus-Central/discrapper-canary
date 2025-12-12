n.d(t, { Z: () => m }), n(388685);
var r = n(54381),
    i = n(473749),
    o = n(772848),
    a = n(442837),
    s = n(570140),
    l = n(607070),
    c = n(367907),
    u = n(963838),
    d = n(39127),
    f = n(981631),
    p = n(57495);
let _ = 50;
function m(e) {
    let { channelId: t, guildId: n, userId: m, containerDimensions: h } = e,
        g = (0, a.e7)([l.Z], () => l.Z.useReducedMotion),
        [E, b] = i.useState([]),
        y = E.length < _;
    i.useEffect(() => {
        function e(e) {
            let { channelId: r, userId: i, emoji: a, animationType: s, animationId: l } = e;
            if (null != m && m !== i) return;
            let d = null != a && null != s && null != l;
            if (r === t && !g && y && d) {
                let e = (0, u._r)(a),
                    r = null != a.id && !a.animated,
                    d = {
                        id: (0, o.Z)(),
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
    }, [t, n, m, g, y]);
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
              className: p.effectsWrapper,
              style: { width: h.width },
              children: (0, r.jsx)("div", {
                  className: p.effects,
                  children: E.map((e) =>
                      (0, r.jsx)(
                          d.Z,
                          {
                              containerDimensions: h,
                              effect: e,
                              onComplete: O,
                          },
                          e.id,
                      ),
                  ),
              }),
          });
}
