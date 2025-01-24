n.d(t, {
    Z: function () {
        return I;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(642128),
    o = n(442837),
    c = n(481060),
    u = n(596454),
    d = n(607070),
    m = n(70956),
    f = n(456631),
    p = n(890913);
let h = 6 * m.Z.Millis.SECOND,
    g = 2 * m.Z.Millis.SECOND,
    v = 2 * m.Z.Millis.SECOND,
    S = (e) => 'scale('.concat(1 - -(e / 120), ') rotate(').concat(e, 'deg)');
function I(e) {
    let { userId: t, voiceChannelEffect: n, onComplete: r } = e,
        { emoji: m, sentAt: I } = n,
        x = (0, o.e7)([d.Z], () => d.Z.useReducedMotion),
        [_, C] = l.useState(!0),
        b = !x,
        E = (0, c.useTransition)(_, {
            from: { rotate: -120 },
            enter: { rotate: 0 },
            leave: { rotate: -120 },
            config: s.config.default,
            onRest: (e, t) => {
                let { phase: n } = t;
                'leave' === n && r();
            }
        });
    return (l.useEffect(() => {
        let e;
        return (
            Date.now() - I >= v
                ? (0, f.H)(t)
                : (e = setTimeout(
                      () => {
                          C(!1), b && (0, f.H)(t);
                      },
                      b ? g : h
                  )),
            () => {
                null != e && clearTimeout(e);
            }
        );
    }, [I, t, b]),
    b)
        ? null
        : E((e, t) => {
              var n;
              let { rotate: l } = e;
              return (
                  t &&
                  (0, i.jsx)(s.animated.div, {
                      className: p.voiceChannelEffectEmojiContainer,
                      style: { transform: l.to(S) },
                      children: (0, i.jsx)(u.Z, {
                          className: a()(p.voiceChannelEffectEmoji),
                          emojiId: m.id,
                          emojiName: m.name,
                          animated: null !== (n = m.animated) && void 0 !== n && n
                      })
                  })
              );
          });
}
