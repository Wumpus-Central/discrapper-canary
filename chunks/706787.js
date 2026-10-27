n.d(t, { A: () => h });
var i = n(477900),
    l = n(582128),
    s = n(399513),
    r = n(17928),
    a = n(866323),
    o = n(565645),
    u = n(775602),
    c = n(927813),
    d = n(614518),
    m = n(96969);
let p = 6 * c.A.Millis.SECOND,
    g = 2 * c.A.Millis.SECOND,
    x = 2 * c.A.Millis.SECOND;
function f(e) {
    return `scale(${1 - -(e / 120)}) rotate(${e}deg)`;
}
function h(e) {
    let { userId: t, voiceChannelEffect: n, onComplete: c } = e,
        { emoji: h, sentAt: A } = n,
        v = (0, r.bG)([u.Ay], () => u.Ay.useReducedMotion),
        [E, C] = l.useState(!0),
        j = !v,
        I = (0, a.p)(E, {
            from: { rotate: -120 },
            enter: { rotate: 0 },
            leave: { rotate: -120 },
            config: s.config.default,
            onRest: (e, t) => {
                let { phase: n } = t;
                "leave" === n && c();
            },
        });
    return (l.useEffect(() => {
        let e;
        return (
            Date.now() - A >= x
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
    }, [A, t, j]),
    j)
        ? null
        : I((e, t) => {
              let { rotate: n } = e;
              return (
                  t &&
                  (0, i.jsx)(s.animated.div, {
                      className: m._,
                      style: { transform: n.to(f) },
                      children: (0, i.jsx)(o.A, {
                          className: m.F,
                          emojiId: h.id,
                          emojiName: h.name,
                          animated: h.animated ?? !1,
                      }),
                  })
              );
          });
}
