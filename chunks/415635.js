n.d(t, { Z: () => b }), n(47120);
var r = n(200651),
    l = n(192379),
    i = n(772848),
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
    let { channelId: t, guildId: n, userId: b, containerDimensions: O } = e,
        y = (0, o.e7)([s.Z], () => s.Z.useReducedMotion),
        [h, v] = l.useState([]),
        j = h.length < 50;
    l.useEffect(() => {
        function e(e) {
            var r;
            let { channelId: l, userId: o, emoji: a, animationType: s, animationId: f } = e;
            if ((null != b && b !== o) || (u.Z.getEnabled() && (0, d.Z)(null != (r = null == a ? void 0 : a.name) ? r : ''))) return;
            let g = null != a && null != s && null != f;
            if (l === t && !y && j && g) {
                let e = (0, p._r)(a),
                    r = null != a.id && !a.animated,
                    l = {
                        id: (0, i.Z)(),
                        animationType: s,
                        animationId: f,
                        shouldResize: r,
                        url: e,
                        userId: o
                    };
                v((e) => [...e, l]),
                    c.ZP.trackWithMetadata(m.rMx.VOICE_CHANNEL_EFFECT_VIEWED, {
                        channel_id: t,
                        guild_id: n
                    });
            }
        }
        return (
            a.Z.subscribe('VOICE_CHANNEL_EFFECT_SEND', e),
            () => {
                a.Z.unsubscribe('VOICE_CHANNEL_EFFECT_SEND', e);
            }
        );
    }, [t, n, b, y, j]);
    let S = l.useCallback((e) => {
        v((t) => {
            let n = [...t],
                r = n.findIndex((t) => t.id === e);
            return n.splice(r, 1), n;
        });
    }, []);
    return y
        ? null
        : (0, r.jsx)('div', {
              className: g.effectsWrapper,
              style: { width: O.width },
              children: (0, r.jsx)('div', {
                  className: g.effects,
                  children: h.map((e) =>
                      (0, r.jsx)(
                          f.Z,
                          {
                              containerDimensions: O,
                              effect: e,
                              onComplete: S
                          },
                          e.id
                      )
                  )
              })
          });
}
