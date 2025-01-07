n.d(t, {
    Z: function () {
        return I;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(666912),
    o = n(442837),
    c = n(481060),
    u = n(596454),
    d = n(607070),
    m = n(70956),
    f = n(456631),
    p = n(890913);
let g = 6 * m.Z.Millis.SECOND,
    h = 2 * m.Z.Millis.SECOND,
    v = 2 * m.Z.Millis.SECOND,
    S = (e) => 'scale('.concat(1 - -(e / 120), ') rotate(').concat(e, 'deg)');
function I(e) {
    let { userId: t, voiceChannelEffect: n, onComplete: a } = e,
        { emoji: m, sentAt: I } = n,
        _ = (0, o.e7)([d.Z], () => d.Z.useReducedMotion),
        [x, E] = l.useState(!0),
        C = !_,
        Z = (0, c.useTransition)(x, {
            from: { rotate: -120 },
            enter: { rotate: 0 },
            leave: { rotate: -120 },
            config: s.config.default,
            onRest: (e, t) => {
                let { phase: n } = t;
                'leave' === n && a();
            }
        });
    return (l.useEffect(() => {
        let e;
        return (
            Date.now() - I >= v
                ? (0, f.H)(t)
                : (e = setTimeout(
                      () => {
                          E(!1), C && (0, f.H)(t);
                      },
                      C ? h : g
                  )),
            () => {
                null != e && clearTimeout(e);
            }
        );
    }, [I, t, C]),
    C)
        ? null
        : Z((e, t) => {
              var n;
              let { rotate: l } = e;
              return (
                  t &&
                  (0, i.jsx)(s.animated.div, {
                      className: p.voiceChannelEffectEmojiContainer,
                      style: { transform: l.to(S) },
                      children: (0, i.jsx)(u.Z, {
                          className: r()(p.voiceChannelEffectEmoji),
                          emojiId: m.id,
                          emojiName: m.name,
                          animated: null !== (n = m.animated) && void 0 !== n && n
                      })
                  })
              );
          });
}
