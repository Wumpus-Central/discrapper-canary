(n.d(t, { Z: () => _ }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(772848),
    a = n(442837),
    o = n(570140),
    s = n(607070),
    c = n(367907),
    u = n(37091),
    d = n(721264),
    p = n(963838),
    f = n(39127),
    m = n(981631),
    g = n(490650);
function _(e) {
    let { channelId: t, guildId: n, userId: _, containerDimensions: v } = e,
        b = (0, a.e7)([s.Z], () => s.Z.useReducedMotion),
        [h, y] = i.useState([]),
        O = h.length < 50;
    i.useEffect(() => {
        function e(e) {
            var r;
            let { channelId: i, userId: a, emoji: o, animationType: s, animationId: f } = e;
            if ((null != _ && _ !== a) || (u.Z.getEnabled() && (0, d.Z)(null != (r = null == o ? void 0 : o.name) ? r : ''))) return;
            let g = null != o && null != s && null != f;
            if (i === t && !b && O && g) {
                let e = (0, p._r)(o),
                    r = null != o.id && !o.animated,
                    i = {
                        id: (0, l.Z)(),
                        animationType: s,
                        animationId: f,
                        shouldResize: r,
                        url: e,
                        userId: a
                    };
                (y((e) => [...e, i]),
                    c.ZP.trackWithMetadata(m.rMx.VOICE_CHANNEL_EFFECT_VIEWED, {
                        channel_id: t,
                        guild_id: n
                    }));
            }
        }
        return (
            o.Z.subscribe('VOICE_CHANNEL_EFFECT_SEND', e),
            () => {
                o.Z.unsubscribe('VOICE_CHANNEL_EFFECT_SEND', e);
            }
        );
    }, [t, n, _, b, O]);
    let j = i.useCallback((e) => {
        y((t) => {
            let n = [...t],
                r = n.findIndex((t) => t.id === e);
            return (n.splice(r, 1), n);
        });
    }, []);
    return b
        ? null
        : (0, r.jsx)('div', {
              className: g.effectsWrapper,
              style: { width: v.width },
              children: (0, r.jsx)('div', {
                  className: g.effects,
                  children: h.map((e) =>
                      (0, r.jsx)(
                          f.Z,
                          {
                              containerDimensions: v,
                              effect: e,
                              onComplete: j
                          },
                          e.id
                      )
                  )
              })
          });
}
