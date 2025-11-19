n.d(t, { Z: () => b }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(790519),
    a = n(442837),
    o = n(481060),
    c = n(596454),
    s = n(607070),
    u = n(70956),
    d = n(456631),
    f = n(181201);
let p = 6 * u.Z.Millis.SECOND,
    m = 2 * u.Z.Millis.SECOND,
    _ = 2 * u.Z.Millis.SECOND,
    g = (e) => "scale(".concat(1 - -(e / 120), ") rotate(").concat(e, "deg)");
function b(e) {
    let { userId: t, voiceChannelEffect: n, onComplete: u } = e,
        { emoji: b, sentAt: v } = n,
        E = (0, a.e7)([s.Z], () => s.Z.useReducedMotion),
        [h, y] = i.useState(!0),
        S = !E,
        O = (0, o.Yzy)(h, {
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
            Date.now() - v >= _
                ? (0, d.H)(t)
                : (e = setTimeout(
                      () => {
                          y(!1), S && (0, d.H)(t);
                      },
                      S ? m : p,
                  )),
            () => {
                null != e && clearTimeout(e);
            }
        );
    }, [v, t, S]),
    S)
        ? null
        : O((e, t) => {
              var n;
              let { rotate: i } = e;
              return (
                  t &&
                  (0, r.jsx)(l.animated.div, {
                      className: f.voiceChannelEffectEmojiContainer,
                      style: { transform: i.to(g) },
                      children: (0, r.jsx)(c.Z, {
                          className: f.voiceChannelEffectEmoji,
                          emojiId: b.id,
                          emojiName: b.name,
                          animated: null != (n = b.animated) && n,
                      }),
                  })
              );
          });
}
