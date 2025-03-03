n.d(t, { Z: () => b }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(642128),
    o = n(442837),
    a = n(481060),
    s = n(596454),
    c = n(607070),
    u = n(70956),
    d = n(456631),
    f = n(564535);
let m = 6 * u.Z.Millis.SECOND,
    p = 2 * u.Z.Millis.SECOND,
    h = 2 * u.Z.Millis.SECOND,
    v = (e) => 'scale('.concat(1 - -(e / 120), ') rotate(').concat(e, 'deg)');
function b(e) {
    let { userId: t, voiceChannelEffect: n, onComplete: u } = e,
        { emoji: b, sentAt: g } = n,
        y = (0, o.e7)([c.Z], () => c.Z.useReducedMotion),
        [E, O] = i.useState(!0),
        S = !y,
        x = (0, a.Yzy)(E, {
            from: { rotate: -120 },
            enter: { rotate: 0 },
            leave: { rotate: -120 },
            config: l.config.default,
            onRest: (e, t) => {
                let { phase: n } = t;
                'leave' === n && u();
            }
        });
    return (i.useEffect(() => {
        let e;
        return (
            Date.now() - g >= h
                ? (0, d.H)(t)
                : (e = setTimeout(
                      () => {
                          O(!1), S && (0, d.H)(t);
                      },
                      S ? p : m
                  )),
            () => {
                null != e && clearTimeout(e);
            }
        );
    }, [g, t, S]),
    S)
        ? null
        : x((e, t) => {
              var n;
              let { rotate: i } = e;
              return (
                  t &&
                  (0, r.jsx)(l.animated.div, {
                      className: f.voiceChannelEffectEmojiContainer,
                      style: { transform: i.to(v) },
                      children: (0, r.jsx)(s.Z, {
                          className: f.voiceChannelEffectEmoji,
                          emojiId: b.id,
                          emojiName: b.name,
                          animated: null !== (n = b.animated) && void 0 !== n && n
                      })
                  })
              );
          });
}
