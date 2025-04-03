n.d(t, { Z: () => h }), n(47120);
var r = n(200651),
    l = n(192379),
    i = n(642128),
    a = n(442837),
    o = n(481060),
    s = n(596454),
    u = n(607070),
    c = n(70956),
    d = n(456631),
    f = n(209767);
let m = 6 * c.Z.Millis.SECOND,
    p = 2 * c.Z.Millis.SECOND,
    g = 2 * c.Z.Millis.SECOND,
    E = (e) => 'scale('.concat(1 - -(e / 120), ') rotate(').concat(e, 'deg)');
function h(e) {
    let { userId: t, voiceChannelEffect: n, onComplete: c } = e,
        { emoji: h, sentAt: v } = n,
        b = (0, a.e7)([u.Z], () => u.Z.useReducedMotion),
        [S, y] = l.useState(!0),
        O = !b,
        Z = (0, o.Yzy)(S, {
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
            Date.now() - v >= g
                ? (0, d.H)(t)
                : (e = setTimeout(
                      () => {
                          y(!1), O && (0, d.H)(t);
                      },
                      O ? p : m
                  )),
            () => {
                null != e && clearTimeout(e);
            }
        );
    }, [v, t, O]),
    O)
        ? null
        : Z((e, t) => {
              var n;
              let { rotate: l } = e;
              return (
                  t &&
                  (0, r.jsx)(i.animated.div, {
                      className: f.voiceChannelEffectEmojiContainer,
                      style: { transform: l.to(E) },
                      children: (0, r.jsx)(s.Z, {
                          className: f.voiceChannelEffectEmoji,
                          emojiId: h.id,
                          emojiName: h.name,
                          animated: null != (n = h.animated) && n
                      })
                  })
              );
          });
}
