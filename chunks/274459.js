n.d(t, { Z: () => Z }), n(47120);
var l = n(200651),
    i = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(642128),
    o = n(442837),
    u = n(481060),
    c = n(596454),
    d = n(607070),
    m = n(70956),
    f = n(456631),
    h = n(890913);
let p = 6 * m.Z.Millis.SECOND,
    v = 2 * m.Z.Millis.SECOND,
    g = 2 * m.Z.Millis.SECOND,
    E = (e) => 'scale('.concat(1 - -(e / 120), ') rotate(').concat(e, 'deg)');
function Z(e) {
    let { userId: t, voiceChannelEffect: n, onComplete: r } = e,
        { emoji: m, sentAt: Z } = n,
        x = (0, o.e7)([d.Z], () => d.Z.useReducedMotion),
        [S, C] = i.useState(!0),
        b = !x,
        I = (0, u.Yzy)(S, {
            from: { rotate: -120 },
            enter: { rotate: 0 },
            leave: { rotate: -120 },
            config: s.config.default,
            onRest: (e, t) => {
                let { phase: n } = t;
                'leave' === n && r();
            }
        });
    return (i.useEffect(() => {
        let e;
        return (
            Date.now() - Z >= g
                ? (0, f.H)(t)
                : (e = setTimeout(
                      () => {
                          C(!1), b && (0, f.H)(t);
                      },
                      b ? v : p
                  )),
            () => {
                null != e && clearTimeout(e);
            }
        );
    }, [Z, t, b]),
    b)
        ? null
        : I((e, t) => {
              var n;
              let { rotate: i } = e;
              return (
                  t &&
                  (0, l.jsx)(s.animated.div, {
                      className: h.voiceChannelEffectEmojiContainer,
                      style: { transform: i.to(E) },
                      children: (0, l.jsx)(c.Z, {
                          className: a()(h.voiceChannelEffectEmoji),
                          emojiId: m.id,
                          emojiName: m.name,
                          animated: null !== (n = m.animated) && void 0 !== n && n
                      })
                  })
              );
          });
}
