n.d(t, { A: () => h });
var i = n(627968),
    l = n(64700),
    a = n(419354),
    r = n(17928),
    s = n(866323),
    o = n(565645),
    d = n(775602),
    c = n(927813),
    u = n(614518),
    _ = n(703302);
let f = 6 * c.A.Millis.SECOND,
    m = 2 * c.A.Millis.SECOND,
    p = 2 * c.A.Millis.SECOND,
    g = (e) => `scale(${1 - -(e / 120)}) rotate(${e}deg)`;
function h(e) {
    let { userId: t, voiceChannelEffect: n, onComplete: c } = e,
        { emoji: h, sentAt: x } = n,
        v = (0, r.bG)([d.A], () => d.A.useReducedMotion),
        [A, I] = l.useState(!0),
        C = !v,
        E = (0, s.p)(A, {
            from: { rotate: -120 },
            enter: { rotate: 0 },
            leave: { rotate: -120 },
            config: a.config.default,
            onRest: (e, t) => {
                let { phase: n } = t;
                "leave" === n && c();
            },
        });
    return (l.useEffect(() => {
        let e;
        return (
            Date.now() - x >= p
                ? (0, u.a)(t)
                : (e = setTimeout(
                      () => {
                          I(!1), C && (0, u.a)(t);
                      },
                      C ? m : f,
                  )),
            () => {
                null != e && clearTimeout(e);
            }
        );
    }, [x, t, C]),
    C)
        ? null
        : E((e, t) => {
              let { rotate: n } = e;
              return (
                  t &&
                  (0, i.jsx)(a.animated.div, {
                      className: _._,
                      style: { transform: n.to(g) },
                      children: (0, i.jsx)(o.A, {
                          className: _.F,
                          emojiId: h.id,
                          emojiName: h.name,
                          animated: h.animated ?? !1,
                      }),
                  })
              );
          });
}
