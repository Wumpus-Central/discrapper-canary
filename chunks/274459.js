(n.d(t, { Z: () => E }), n(388685));
var r = n(255367),
    i = n(73800),
    o = n(126663),
    a = n(442837),
    s = n(481060),
    l = n(596454),
    c = n(607070),
    u = n(70956),
    d = n(456631),
    f = n(209767);
let _ = -120,
    p = 6 * u.Z.Millis.SECOND,
    h = 2 * u.Z.Millis.SECOND,
    m = 2 * u.Z.Millis.SECOND,
    g = (e) => 'scale('.concat(1 - e / _, ') rotate(').concat(e, 'deg)');
function E(e) {
    let { userId: t, voiceChannelEffect: n, onComplete: u } = e,
        { emoji: E, sentAt: b } = n,
        y = (0, a.e7)([c.Z], () => c.Z.useReducedMotion),
        [O, v] = i.useState(!0),
        I = !y,
        T = (0, s.Yzy)(O, {
            from: { rotate: _ },
            enter: { rotate: 0 },
            leave: { rotate: _ },
            config: o.config.default,
            onRest: (e, t) => {
                let { phase: n } = t;
                'leave' === n && u();
            }
        });
    return (i.useEffect(() => {
        let e;
        return (
            Date.now() - b >= m
                ? (0, d.H)(t)
                : (e = setTimeout(
                      () => {
                          (v(!1), I && (0, d.H)(t));
                      },
                      I ? h : p
                  )),
            () => {
                null != e && clearTimeout(e);
            }
        );
    }, [b, t, I]),
    I)
        ? null
        : T((e, t) => {
              var n;
              let { rotate: i } = e;
              return (
                  t &&
                  (0, r.jsx)(o.animated.div, {
                      className: f.voiceChannelEffectEmojiContainer,
                      style: { transform: i.to(g) },
                      children: (0, r.jsx)(l.Z, {
                          className: f.voiceChannelEffectEmoji,
                          emojiId: E.id,
                          emojiName: E.name,
                          animated: null != (n = E.animated) && n
                      })
                  })
              );
          });
}
