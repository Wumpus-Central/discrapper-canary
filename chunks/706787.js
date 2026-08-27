n.d(t, { A: () => x });
var l = n(477900),
    i = n(582128),
    s = n(221877),
    r = n(17928),
    a = n(866323),
    o = n(565645),
    u = n(775602),
    c = n(927813),
    d = n(614518),
    m = n(96969);
let p = 6 * c.A.Millis.SECOND,
    g = 2 * c.A.Millis.SECOND,
    h = 2 * c.A.Millis.SECOND;
function f(e) {
    return `scale(${1 - -(e / 120)}) rotate(${e}deg)`;
}
function x(e) {
    let { userId: t, voiceChannelEffect: n, onComplete: c } = e,
        { emoji: x, sentAt: A } = n,
        v = (0, r.bG)([u.Ay], () => u.Ay.useReducedMotion),
        [E, C] = i.useState(!0),
        I = !v,
        j = (0, a.p)(E, {
            from: { rotate: -120 },
            enter: { rotate: 0 },
            leave: { rotate: -120 },
            config: s.config.default,
            onRest: (e, t) => {
                let { phase: n } = t;
                "leave" === n && c();
            },
        });
    return (i.useEffect(() => {
        let e;
        return (
            Date.now() - A >= h
                ? (0, d.a)(t)
                : (e = setTimeout(
                      () => {
                          C(!1), I && (0, d.a)(t);
                      },
                      I ? g : p,
                  )),
            () => {
                null != e && clearTimeout(e);
            }
        );
    }, [A, t, I]),
    I)
        ? null
        : j((e, t) => {
              let { rotate: n } = e;
              return (
                  t &&
                  (0, l.jsx)(s.animated.div, {
                      className: m._,
                      style: { transform: n.to(f) },
                      children: (0, l.jsx)(o.A, {
                          className: m.F,
                          emojiId: x.id,
                          emojiName: x.name,
                          animated: x.animated ?? !1,
                      }),
                  })
              );
          });
}
