(n.d(t, { Z: () => b }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(772848),
    o = n(442837),
    a = n(570140),
    s = n(607070),
    c = n(367907),
    u = n(37091),
    d = n(721264),
    p = n(963838),
    f = n(39127),
    m = n(981631),
    g = n(490650);
function b(e) {
    let { channelId: t, guildId: n, userId: b, containerDimensions: _ } = e,
        v = (0, o.e7)([s.Z], () => s.Z.useReducedMotion),
        [h, y] = i.useState([]),
        O = h.length < 50;
    i.useEffect(() => {
        function e(e) {
            var r;
            let { channelId: i, userId: o, emoji: a, animationType: s, animationId: f } = e;
            if ((null != b && b !== o) || (u.Z.getEnabled() && (0, d.Z)(null != (r = null == a ? void 0 : a.name) ? r : ''))) return;
            let g = null != a && null != s && null != f;
            if (i === t && !v && O && g) {
                let e = (0, p._r)(a),
                    r = null != a.id && !a.animated,
                    i = {
                        id: (0, l.Z)(),
                        animationType: s,
                        animationId: f,
                        shouldResize: r,
                        url: e,
                        userId: o
                    };
                (y((e) => [...e, i]),
                    c.ZP.trackWithMetadata(m.rMx.VOICE_CHANNEL_EFFECT_VIEWED, {
                        channel_id: t,
                        guild_id: n
                    }));
            }
        }
        return (
            a.Z.subscribe('VOICE_CHANNEL_EFFECT_SEND', e),
            () => {
                a.Z.unsubscribe('VOICE_CHANNEL_EFFECT_SEND', e);
            }
        );
    }, [t, n, b, v, O]);
    let j = i.useCallback((e) => {
        y((t) => {
            let n = [...t],
                r = n.findIndex((t) => t.id === e);
            return (n.splice(r, 1), n);
        });
    }, []);
    return v
        ? null
        : (0, r.jsx)('div', {
              className: g.effectsWrapper,
              style: { width: _.width },
              children: (0, r.jsx)('div', {
                  className: g.effects,
                  children: h.map((e) =>
                      (0, r.jsx)(
                          f.Z,
                          {
                              containerDimensions: _,
                              effect: e,
                              onComplete: j
                          },
                          e.id
                      )
                  )
              })
          });
}
