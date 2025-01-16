n.d(t, {
    Z: function () {
        return g;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    a = n(772848),
    r = n(442837),
    s = n(570140),
    o = n(607070),
    c = n(367907),
    u = n(37091),
    d = n(721264),
    m = n(963838),
    f = n(39127),
    p = n(981631),
    h = n(972213);
function g(e) {
    let { channelId: t, guildId: n, userId: g, containerDimensions: v } = e,
        S = (0, r.e7)([o.Z], () => o.Z.useReducedMotion),
        [I, _] = l.useState([]),
        x = I.length < 50;
    l.useEffect(() => {
        function e(e) {
            var i;
            let { channelId: l, userId: r, emoji: s, animationType: o, animationId: f } = e;
            if ((null != g && g !== r) || (u.Z.getEnabled() && (0, d.Z)(null !== (i = null == s ? void 0 : s.name) && void 0 !== i ? i : ''))) return;
            let h = null != s && null != o && null != f;
            if (l === t && !S && x && h) {
                let e = (0, m._r)(s),
                    i = null != s.id && !s.animated,
                    l = {
                        id: (0, a.Z)(),
                        animationType: o,
                        animationId: f,
                        shouldResize: i,
                        url: e,
                        userId: r
                    };
                _((e) => [...e, l]),
                    c.ZP.trackWithMetadata(p.rMx.VOICE_CHANNEL_EFFECT_VIEWED, {
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
    }, [t, n, g, S, x]);
    let E = l.useCallback((e) => {
        _((t) => {
            let n = [...t],
                i = n.findIndex((t) => t.id === e);
            return n.splice(i, 1), n;
        });
    }, []);
    return S
        ? null
        : (0, i.jsx)('div', {
              className: h.effectsWrapper,
              style: { width: v.width },
              children: (0, i.jsx)('div', {
                  className: h.effects,
                  children: I.map((e) =>
                      (0, i.jsx)(
                          f.Z,
                          {
                              containerDimensions: v,
                              effect: e,
                              onComplete: E
                          },
                          e.id
                      )
                  )
              })
          });
}
