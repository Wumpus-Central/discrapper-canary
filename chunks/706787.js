n.d(t, { A: () => p });
var i = n(627968),
    l = n(64700),
    a = n(407045),
    s = n(311907),
    r = n(397927),
    o = n(565645),
    c = n(775602),
    d = n(927813),
    u = n(614518),
    h = n(703302);
let m = 6 * d.A.Millis.SECOND,
    A = 2 * d.A.Millis.SECOND,
    g = 2 * d.A.Millis.SECOND,
    _ = (e) => `scale(${1 - -(e / 120)}) rotate(${e}deg)`;
function p(e) {
    let { userId: t, voiceChannelEffect: n, onComplete: d } = e,
        { emoji: p, sentAt: f } = n,
        E = (0, s.bG)([c.A], () => c.A.useReducedMotion),
        [C, x] = l.useState(!0),
        S = !E,
        I = (0, r.pnh)(C, {
            from: { rotate: -120 },
            enter: { rotate: 0 },
            leave: { rotate: -120 },
            config: a.config.default,
            onRest: (e, t) => {
                let { phase: n } = t;
                "leave" === n && d();
            },
        });
    return (l.useEffect(() => {
        let e;
        return (
            Date.now() - f >= g
                ? (0, u.a)(t)
                : (e = setTimeout(
                      () => {
                          x(!1), S && (0, u.a)(t);
                      },
                      S ? A : m,
                  )),
            () => {
                null != e && clearTimeout(e);
            }
        );
    }, [f, t, S]),
    S)
        ? null
        : I((e, t) => {
              let { rotate: n } = e;
              return (
                  t &&
                  (0, i.jsx)(a.animated.div, {
                      className: h._,
                      style: { transform: n.to(_) },
                      children: (0, i.jsx)(o.A, {
                          className: h.F,
                          emojiId: p.id,
                          emojiName: p.name,
                          animated: p.animated ?? !1,
                      }),
                  })
              );
          });
}
