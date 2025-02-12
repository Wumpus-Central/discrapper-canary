n.d(t, { Z: () => p }), n(47120);
var l = n(200651),
    i = n(192379),
    r = n(772848),
    a = n(442837),
    s = n(570140),
    o = n(607070),
    u = n(367907),
    c = n(37091),
    d = n(721264),
    m = n(963838),
    h = n(39127),
    g = n(981631),
    f = n(893904);
function p(e) {
    let { channelId: t, guildId: n, userId: p, containerDimensions: v } = e,
        S = (0, a.e7)([o.Z], () => o.Z.useReducedMotion),
        [I, x] = i.useState([]),
        T = I.length < 50;
    i.useEffect(() => {
        function e(e) {
            var l;
            let { channelId: i, userId: a, emoji: s, animationType: o, animationId: h } = e;
            if ((null != p && p !== a) || (c.Z.getEnabled() && (0, d.Z)(null !== (l = null == s ? void 0 : s.name) && void 0 !== l ? l : ''))) return;
            let f = null != s && null != o && null != h;
            if (i === t && !S && T && f) {
                let e = (0, m._r)(s),
                    l = null != s.id && !s.animated,
                    i = {
                        id: (0, r.Z)(),
                        animationType: o,
                        animationId: h,
                        shouldResize: l,
                        url: e,
                        userId: a
                    };
                x((e) => [...e, i]),
                    u.ZP.trackWithMetadata(g.rMx.VOICE_CHANNEL_EFFECT_VIEWED, {
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
    }, [t, n, p, S, T]);
    let Z = i.useCallback((e) => {
        x((t) => {
            let n = [...t],
                l = n.findIndex((t) => t.id === e);
            return n.splice(l, 1), n;
        });
    }, []);
    return S
        ? null
        : (0, l.jsx)('div', {
              className: f.effectsWrapper,
              style: { width: v.width },
              children: (0, l.jsx)('div', {
                  className: f.effects,
                  children: I.map((e) =>
                      (0, l.jsx)(
                          h.Z,
                          {
                              containerDimensions: v,
                              effect: e,
                              onComplete: Z
                          },
                          e.id
                      )
                  )
              })
          });
}
