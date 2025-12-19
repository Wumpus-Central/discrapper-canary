n.d(t, { Z: () => v }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(620792),
    a = n(442837),
    o = n(481060),
    c = n(596454),
    s = n(607070),
    u = n(70956),
    d = n(456631),
    f = n(516846);
let p = 6 * u.Z.Millis.SECOND,
    b = 2 * u.Z.Millis.SECOND,
    m = 2 * u.Z.Millis.SECOND,
    g = (e) => "scale(".concat(1 - -(e / 120), ") rotate(").concat(e, "deg)");
function v(e) {
    let { userId: t, voiceChannelEffect: n, onComplete: u } = e,
        { emoji: v, sentAt: h } = n,
        E = (0, a.e7)([s.Z], () => s.Z.useReducedMotion),
        [_, y] = i.useState(!0),
        S = !E,
        O = (0, o.Yzy)(_, {
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
            Date.now() - h >= m
                ? (0, d.H)(t)
                : (e = setTimeout(
                      () => {
                          y(!1), S && (0, d.H)(t);
                      },
                      S ? b : p,
                  )),
            () => {
                null != e && clearTimeout(e);
            }
        );
    }, [h, t, S]),
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
                          emojiId: v.id,
                          emojiName: v.name,
                          animated: null != (n = v.animated) && n,
                      }),
                  })
              );
          });
}
