var l = n(477900),
    i = n(582128),
    r = n(156150),
    a = n(855986),
    s = n(866323),
    o = n(565645),
    u = n(775602),
    c = n(927813),
    d = n(614518),
    m = n(96969);
let p = 6 * c.A.Millis.SECOND,
    g = 2 * c.A.Millis.SECOND,
    f = 2 * c.A.Millis.SECOND;
function h(e) {
    return `scale(${1 - -(e / 120)}) rotate(${e}deg)`;
}
n.d(
    t,
    {},
    {
        A: function (e) {
            let { userId: t, voiceChannelEffect: n, onComplete: c } = e,
                { emoji: A, sentAt: x } = n,
                v = (0, a.bG)([u.Ay], () => u.Ay.useReducedMotion),
                [E, C] = i.useState(!0),
                j = !v,
                S = (0, s.p)(E, {
                    from: { rotate: -120 },
                    enter: { rotate: 0 },
                    leave: { rotate: -120 },
                    config: r.config.default,
                    onRest: (e, t) => {
                        let { phase: n } = t;
                        "leave" === n && c();
                    },
                });
            return (i.useEffect(() => {
                let e;
                return (
                    Date.now() - x >= f
                        ? (0, d.a)(t)
                        : (e = setTimeout(
                              () => {
                                  (C(!1), j && (0, d.a)(t));
                              },
                              j ? g : p,
                          )),
                    () => {
                        null != e && clearTimeout(e);
                    }
                );
            }, [x, t, j]),
            j)
                ? null
                : S((e, t) => {
                      let { rotate: n } = e;
                      return (
                          t &&
                          (0, l.jsx)(r.animated.div, {
                              className: m._,
                              style: { transform: n.to(h) },
                              children: (0, l.jsx)(o.A, {
                                  className: m.F,
                                  emojiId: A.id,
                                  emojiName: A.name,
                                  animated: A.animated ?? !1,
                              }),
                          })
                      );
                  });
        },
    },
);
