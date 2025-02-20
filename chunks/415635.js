n.d(t, { Z: () => y }), n(47120);
var r = n(200651),
    l = n(192379),
    i = n(772848),
    a = n(442837),
    o = n(570140),
    s = n(607070),
    c = n(367907),
    u = n(37091),
    d = n(721264),
    f = n(963838),
    p = n(39127),
    m = n(981631),
    g = n(133521);
function y(e) {
    let { channelId: t, guildId: n, userId: y, containerDimensions: b } = e,
        h = (0, a.e7)([s.Z], () => s.Z.useReducedMotion),
        [v, O] = l.useState([]),
        j = v.length < 50;
    l.useEffect(() => {
        function e(e) {
            var r;
            let { channelId: l, userId: a, emoji: o, animationType: s, animationId: p } = e;
            if ((null != y && y !== a) || (u.Z.getEnabled() && (0, d.Z)(null !== (r = null == o ? void 0 : o.name) && void 0 !== r ? r : ''))) return;
            let g = null != o && null != s && null != p;
            if (l === t && !h && j && g) {
                let e = (0, f._r)(o),
                    r = null != o.id && !o.animated,
                    l = {
                        id: (0, i.Z)(),
                        animationType: s,
                        animationId: p,
                        shouldResize: r,
                        url: e,
                        userId: a
                    };
                O((e) => [...e, l]),
                    c.ZP.trackWithMetadata(m.rMx.VOICE_CHANNEL_EFFECT_VIEWED, {
                        channel_id: t,
                        guild_id: n
                    });
            }
        }
        return (
            o.Z.subscribe('VOICE_CHANNEL_EFFECT_SEND', e),
            () => {
                o.Z.unsubscribe('VOICE_CHANNEL_EFFECT_SEND', e);
            }
        );
    }, [t, n, y, h, j]);
    let S = l.useCallback((e) => {
        O((t) => {
            let n = [...t],
                r = n.findIndex((t) => t.id === e);
            return n.splice(r, 1), n;
        });
    }, []);
    return h
        ? null
        : (0, r.jsx)('div', {
              className: g.effectsWrapper,
              style: { width: b.width },
              children: (0, r.jsx)('div', {
                  className: g.effects,
                  children: v.map((e) =>
                      (0, r.jsx)(
                          p.Z,
                          {
                              containerDimensions: b,
                              effect: e,
                              onComplete: S
                          },
                          e.id
                      )
                  )
              })
          });
}
