n.d(t, { Z: () => h }), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(81239),
    a = n(442837),
    o = n(481060),
    c = n(596454),
    s = n(607070),
    u = n(70956),
    d = n(456631),
    f = n(516846);
let p = 6 * u.Z.Millis.SECOND,
    g = 2 * u.Z.Millis.SECOND,
    b = 2 * u.Z.Millis.SECOND,
    m = (e) => "scale(".concat(1 - -(e / 120), ") rotate(").concat(e, "deg)");
function h(e) {
    let { userId: t, voiceChannelEffect: n, onComplete: u } = e,
        { emoji: h, sentAt: E } = n,
        v = (0, a.e7)([s.Z], () => s.Z.useReducedMotion),
        [_, y] = l.useState(!0),
        O = !v,
        C = (0, o.Yzy)(_, {
            from: { rotate: -120 },
            enter: { rotate: 0 },
            leave: { rotate: -120 },
            config: i.config.default,
            onRest: (e, t) => {
                let { phase: n } = t;
                "leave" === n && u();
            },
        });
    return (l.useEffect(() => {
        let e;
        return (
            Date.now() - E >= b
                ? (0, d.H)(t)
                : (e = setTimeout(
                      () => {
                          y(!1), O && (0, d.H)(t);
                      },
                      O ? g : p,
                  )),
            () => {
                null != e && clearTimeout(e);
            }
        );
    }, [E, t, O]),
    O)
        ? null
        : C((e, t) => {
              var n;
              let { rotate: l } = e;
              return (
                  t &&
                  (0, r.jsx)(i.animated.div, {
                      className: f.voiceChannelEffectEmojiContainer,
                      style: { transform: l.to(m) },
                      children: (0, r.jsx)(c.Z, {
                          className: f.voiceChannelEffectEmoji,
                          emojiId: h.id,
                          emojiName: h.name,
                          animated: null != (n = h.animated) && n,
                      }),
                  })
              );
          });
}
