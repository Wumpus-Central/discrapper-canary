n.d(t, { Z: () => b }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(358458),
    a = n(442837),
    o = n(481060),
    s = n(596454),
    c = n(607070),
    u = n(70956),
    d = n(456631),
    p = n(181201);
let f = 6 * u.Z.Millis.SECOND,
    h = 2 * u.Z.Millis.SECOND,
    m = 2 * u.Z.Millis.SECOND,
    g = (e) => "scale(".concat(1 - -(e / 120), ") rotate(").concat(e, "deg)");
function b(e) {
    let { userId: t, voiceChannelEffect: n, onComplete: u } = e,
        { emoji: b, sentAt: _ } = n,
        y = (0, a.e7)([c.Z], () => c.Z.useReducedMotion),
        [C, v] = i.useState(!0),
        x = !y,
        O = (0, o.Yzy)(C, {
            from: { rotate: -120 },
            enter: { rotate: 0 },
            leave: { rotate: -120 },
            config: l.config.default,
            onRest: (e, t) => {
                let { phase: n } = t;
                "leave" === n && u();
            },
        });
    return (i.useEffect(() => {
        let e;
        return (
            Date.now() - _ >= m
                ? (0, d.H)(t)
                : (e = setTimeout(
                      () => {
                          v(!1), x && (0, d.H)(t);
                      },
                      x ? h : f,
                  )),
            () => {
                null != e && clearTimeout(e);
            }
        );
    }, [_, t, x]),
    x)
        ? null
        : O((e, t) => {
              var n;
              let { rotate: i } = e;
              return (
                  t &&
                  (0, r.jsx)(l.animated.div, {
                      className: p.voiceChannelEffectEmojiContainer,
                      style: { transform: i.to(g) },
                      children: (0, r.jsx)(s.Z, {
                          className: p.voiceChannelEffectEmoji,
                          emojiId: b.id,
                          emojiName: b.name,
                          animated: null != (n = b.animated) && n,
                      }),
                  })
              );
          });
}
