n.d(t, { A: () => f });
var i = n(627968),
    l = n(64700),
    s = n(880013),
    a = n(311907),
    r = n(397927),
    o = n(565645),
    c = n(775602),
    d = n(927813),
    u = n(614518),
    h = n(964701);
let m = 6 * d.A.Millis.SECOND,
    A = 2 * d.A.Millis.SECOND,
    g = 2 * d.A.Millis.SECOND,
    p = (e) => `scale(${1 - -(e / 120)}) rotate(${e}deg)`;
function f(e) {
    let { userId: t, voiceChannelEffect: n, onComplete: d } = e,
        { emoji: f, sentAt: _ } = n,
        E = (0, a.bG)([c.A], () => c.A.useReducedMotion),
        [x, C] = l.useState(!0),
        S = !E,
        I = (0, r.pnh)(x, {
            from: { rotate: -120 },
            enter: { rotate: 0 },
            leave: { rotate: -120 },
            config: s.config.default,
            onRest: (e, t) => {
                let { phase: n } = t;
                "leave" === n && d();
            },
        });
    return (l.useEffect(() => {
        let e;
        return (
            Date.now() - _ >= g
                ? (0, u.a)(t)
                : (e = setTimeout(
                      () => {
                          C(!1), S && (0, u.a)(t);
                      },
                      S ? A : m,
                  )),
            () => {
                null != e && clearTimeout(e);
            }
        );
    }, [_, t, S]),
    S)
        ? null
        : I((e, t) => {
              let { rotate: n } = e;
              return (
                  t &&
                  (0, i.jsx)(s.animated.div, {
                      className: h._,
                      style: { transform: n.to(p) },
                      children: (0, i.jsx)(o.A, {
                          className: h.F,
                          emojiId: f.id,
                          emojiName: f.name,
                          animated: f.animated ?? !1,
                      }),
                  })
              );
          });
}
