n.d(t, { Z: () => h }), n(388685);
var r = n(255367),
    l = n(73800),
    i = n(524979),
    a = n(442837),
    u = n(481060),
    o = n(596454),
    s = n(607070),
    c = n(70956),
    d = n(456631),
    f = n(209767);
let m = 6 * c.Z.Millis.SECOND,
    p = 2 * c.Z.Millis.SECOND,
    E = 2 * c.Z.Millis.SECOND,
    g = (e) => 'scale('.concat(1 - -(e / 120), ') rotate(').concat(e, 'deg)');
function h(e) {
    let { userId: t, voiceChannelEffect: n, onComplete: c } = e,
        { emoji: h, sentAt: S } = n,
        O = (0, a.e7)([s.Z], () => s.Z.useReducedMotion),
        [v, b] = l.useState(!0),
        I = !O,
        _ = (0, u.Yzy)(v, {
            from: { rotate: -120 },
            enter: { rotate: 0 },
            leave: { rotate: -120 },
            config: i.config.default,
            onRest: (e, t) => {
                let { phase: n } = t;
                'leave' === n && c();
            }
        });
    return (l.useEffect(() => {
        let e;
        return (
            Date.now() - S >= E
                ? (0, d.H)(t)
                : (e = setTimeout(
                      () => {
                          b(!1), I && (0, d.H)(t);
                      },
                      I ? p : m
                  )),
            () => {
                null != e && clearTimeout(e);
            }
        );
    }, [S, t, I]),
    I)
        ? null
        : _((e, t) => {
              var n;
              let { rotate: l } = e;
              return (
                  t &&
                  (0, r.jsx)(i.animated.div, {
                      className: f.voiceChannelEffectEmojiContainer,
                      style: { transform: l.to(g) },
                      children: (0, r.jsx)(o.Z, {
                          className: f.voiceChannelEffectEmoji,
                          emojiId: h.id,
                          emojiName: h.name,
                          animated: null != (n = h.animated) && n
                      })
                  })
              );
          });
}
