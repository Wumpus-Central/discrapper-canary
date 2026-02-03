n.d(t, {
    A: () => A,
}),
    n(896048);
var l = n(627968),
    r = n(64700),
    i = n(92674),
    a = n(311907),
    s = n(397927),
    o = n(565645),
    c = n(775602),
    u = n(927813),
    d = n(614518),
    h = n(804771);
let p = 6 * u.A.Millis.SECOND,
    f = 2 * u.A.Millis.SECOND,
    m = 2 * u.A.Millis.SECOND,
    g = (e) => "scale(".concat(1 - -(e / 120), ") rotate(").concat(e, "deg)");

function A(e) {
    let { userId: t, voiceChannelEffect: n, onComplete: u } = e,
        { emoji: A, sentAt: b } = n,
        _ = (0, a.bG)([c.A], () => c.A.useReducedMotion),
        [y, v] = r.useState(!0),
        E = !_,
        O = (0, s.pnh)(y, {
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
            Date.now() - b >= m
                ? (0, d.a)(t)
                : (e = setTimeout(
                      () => {
                          v(!1), E && (0, d.a)(t);
                      },
                      E ? f : p,
                  )),
            () => {
                null != e && clearTimeout(e);
            }
        );
    }, [b, t, E]),
    E)
        ? null
        : O((e, t) => {
              var n;
              let { rotate: r } = e;
              return (
                  t &&
                  (0, l.jsx)(i.animated.div, {
                      className: h._,
                      style: {
                          transform: r.to(g),
                      },
                      children: (0, l.jsx)(o.A, {
                          className: h.F,
                          emojiId: A.id,
                          emojiName: A.name,
                          animated: null != (n = A.animated) && n,
                      }),
                  })
              );
          });
}
