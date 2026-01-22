n.d(t, {
    A: () => h,
}),
    n(896048);
var l = n(627968),
    r = n(64700),
    i = n(108531),
    a = n(311907),
    s = n(397927),
    o = n(565645),
    c = n(775602),
    u = n(927813),
    d = n(614518),
    f = n(804771);
let p = 6 * u.A.Millis.SECOND,
    b = 2 * u.A.Millis.SECOND,
    g = 2 * u.A.Millis.SECOND,
    m = (e) => "scale(".concat(1 - -(e / 120), ") rotate(").concat(e, "deg)");

function h(e) {
    let { userId: t, voiceChannelEffect: n, onComplete: u } = e,
        { emoji: h, sentAt: A } = n,
        y = (0, a.bG)([c.A], () => c.A.useReducedMotion),
        [_, E] = r.useState(!0),
        v = !y,
        O = (0, s.pnh)(_, {
            from: {
                rotate: -120,
            },
            enter: {
                rotate: 0,
            },
            leave: {
                rotate: -120,
            },
            config: i.config.default,
            onRest: (e, t) => {
                let { phase: n } = t;
                "leave" === n && u();
            },
        });
    return (r.useEffect(() => {
        let e;
        return (
            Date.now() - A >= g
                ? (0, d.a)(t)
                : (e = setTimeout(
                      () => {
                          E(!1), v && (0, d.a)(t);
                      },
                      v ? b : p,
                  )),
            () => {
                null != e && clearTimeout(e);
            }
        );
    }, [A, t, v]),
    v)
        ? null
        : O((e, t) => {
              var n;
              let { rotate: r } = e;
              return (
                  t &&
                  (0, l.jsx)(i.animated.div, {
                      className: f._,
                      style: {
                          transform: r.to(m),
                      },
                      children: (0, l.jsx)(o.A, {
                          className: f.F,
                          emojiId: h.id,
                          emojiName: h.name,
                          animated: null != (n = h.animated) && n,
                      }),
                  })
              );
          });
}
