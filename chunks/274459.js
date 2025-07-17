(n.d(t, { Z: () => v }), n(388685));
var r = n(255367),
    l = n(73800),
    i = n(71347),
    a = n(442837),
    o = n(481060),
    u = n(596454),
    s = n(607070),
    c = n(70956),
    d = n(456631),
    f = n(209767);
let p = 6 * c.Z.Millis.SECOND,
    m = 2 * c.Z.Millis.SECOND,
    E = 2 * c.Z.Millis.SECOND,
    g = (e) => 'scale('.concat(1 - -(e / 120), ') rotate(').concat(e, 'deg)');
function v(e) {
    let { userId: t, voiceChannelEffect: n, onComplete: c } = e,
        { emoji: v, sentAt: h } = n,
        S = (0, a.e7)([s.Z], () => s.Z.useReducedMotion),
        [b, O] = l.useState(!0),
        y = !S,
        Z = (0, o.Yzy)(b, {
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
            Date.now() - h >= E
                ? (0, d.H)(t)
                : (e = setTimeout(
                      () => {
                          (O(!1), y && (0, d.H)(t));
                      },
                      y ? m : p
                  )),
            () => {
                null != e && clearTimeout(e);
            }
        );
    }, [h, t, y]),
    y)
        ? null
        : Z((e, t) => {
              var n;
              let { rotate: l } = e;
              return (
                  t &&
                  (0, r.jsx)(i.animated.div, {
                      className: f.voiceChannelEffectEmojiContainer,
                      style: { transform: l.to(g) },
                      children: (0, r.jsx)(u.Z, {
                          className: f.voiceChannelEffectEmoji,
                          emojiId: v.id,
                          emojiName: v.name,
                          animated: null != (n = v.animated) && n
                      })
                  })
              );
          });
}
