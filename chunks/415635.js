n.d(t, { Z: () => f }), n(47120);
var l = n(200651),
    i = n(192379),
    r = n(772848),
    a = n(442837),
    s = n(570140),
    o = n(607070),
    c = n(367907),
    u = n(37091),
    d = n(721264),
    m = n(963838),
    p = n(39127),
    h = n(981631),
    g = n(972213);
function f(e) {
    let { channelId: t, guildId: n, userId: f, containerDimensions: v } = e,
        S = (0, a.e7)([o.Z], () => o.Z.useReducedMotion),
        [x, I] = i.useState([]),
        y = x.length < 50;
    i.useEffect(() => {
        function e(e) {
            var l;
            let { channelId: i, userId: a, emoji: s, animationType: o, animationId: p } = e;
            if ((null != f && f !== a) || (u.Z.getEnabled() && (0, d.Z)(null !== (l = null == s ? void 0 : s.name) && void 0 !== l ? l : ''))) return;
            let g = null != s && null != o && null != p;
            if (i === t && !S && y && g) {
                let e = (0, m._r)(s),
                    l = null != s.id && !s.animated,
                    i = {
                        id: (0, r.Z)(),
                        animationType: o,
                        animationId: p,
                        shouldResize: l,
                        url: e,
                        userId: a
                    };
                I((e) => [...e, i]),
                    c.ZP.trackWithMetadata(h.rMx.VOICE_CHANNEL_EFFECT_VIEWED, {
                        channel_id: t,
                        guild_id: n
                    });
            }
        }
        return (
            s.Z.subscribe('VOICE_CHANNEL_EFFECT_SEND', e),
            () => {
                s.Z.unsubscribe('VOICE_CHANNEL_EFFECT_SEND', e);
            }
        );
    }, [t, n, f, S, y]);
    let T = i.useCallback((e) => {
        I((t) => {
            let n = [...t],
                l = n.findIndex((t) => t.id === e);
            return n.splice(l, 1), n;
        });
    }, []);
    return S
        ? null
        : (0, l.jsx)('div', {
              className: g.effectsWrapper,
              style: { width: v.width },
              children: (0, l.jsx)('div', {
                  className: g.effects,
                  children: x.map((e) =>
                      (0, l.jsx)(
                          p.Z,
                          {
                              containerDimensions: v,
                              effect: e,
                              onComplete: T
                          },
                          e.id
                      )
                  )
              })
          });
}
