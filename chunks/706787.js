n.d(t, { A: () => h });
var i = n(627968),
    l = n(64700),
    a = n(517738),
    r = n(311907),
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
        { emoji: h, sentAt: A } = n,
        x = (0, r.bG)([d.A], () => d.A.useReducedMotion),
        [v, I] = l.useState(!0),
        E = !x,
        C = (0, s.p)(v, {
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
            Date.now() - A >= p
                ? (0, u.a)(t)
                : (e = setTimeout(
                      () => {
                          I(!1), E && (0, u.a)(t);
                      },
                      E ? m : f,
                  )),
            () => {
                null != e && clearTimeout(e);
            }
        );
    }, [A, t, E]),
    E)
        ? null
        : C((e, t) => {
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
