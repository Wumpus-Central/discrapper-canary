n.d(t, {
    I: () => v,
    b: () => y
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(642128),
    l = n(481060),
    u = n(162617);
function c() {
    return new Promise((e) => setTimeout(e, 1000));
}
function d() {
    return document.hasFocus();
}
let f = 0.25,
    _ = 4,
    p = 1,
    h = 2.8,
    m = {
        config: {
            friction: 50,
            tension: 900,
            mass: 1
        },
        unique: !0,
        initial: { dotPosition: 1 },
        from: { dotPosition: 0 },
        enter: { dotPosition: 1 },
        leave: { dotPosition: 0 }
    },
    g = {
        config: { duration: 2400 },
        from: { dotCycle: 2.8 },
        reset: !0
    };
function E(e) {
    let t = e % 2;
    return t > 1 ? 1 - (t - 1) : t;
}
let v = r.memo(function (e) {
        let { dotRadius: t, dotPosition: n, fill: a = 'currentColor', spacing: s = 2.5 } = e,
            u = r.useRef(d()),
            m = r.useRef(!0);
        r.useEffect(() => () => void (m.current = !1), []);
        let [v] = (0, l.q_F)(
                () => ({
                    ...g,
                    to: async (e) => {
                        let t = h;
                        for (; m.current; )
                            (u.current = d()),
                                u.current
                                    ? ((t += p * _),
                                      await e({
                                          dotCycle: t,
                                          immediate: !1
                                      }))
                                    : t !== h
                                      ? ((t = h),
                                        await e({
                                            dotCycle: t,
                                            immediate: !0
                                        }))
                                      : await c();
                    }
                }),
                'animate-always'
            ),
            y = (6 * t + (t / 4) * 2) / 2;
        return (0, i.jsx)(i.Fragment, {
            children: [0, 1, 2].map((e) => {
                let r = f * e,
                    l = t + t * s * e;
                return (0, i.jsx)(
                    o.animated.circle,
                    {
                        cx: n ? n.to([0, 1], [y, l]) : l,
                        cy: t,
                        r: v.dotCycle
                            .to((e) => E(e - r))
                            .to([0, 0.4, 0.8, 1], [0.8 * t, 0.8 * t, t, t])
                            .to((e) => (u.current ? e : t)),
                        fill: a,
                        style: {
                            opacity: v.dotCycle
                                .to((e) => E(e - r))
                                .to([0, 0.4, 0.8, 1], [0.3, 0.3, 1, 1])
                                .to((e) => (u.current ? e : 1))
                        }
                    },
                    e
                );
            })
        });
    }),
    y = r.memo(
        r.forwardRef(function (e, t) {
            let { dotRadius: n, x: r, y: a, hide: c = !1, themed: f = !1, className: _ } = e;
            return (0, l.Yzy)(
                c,
                {
                    ...m,
                    key: (e) => (e ? 'true' : 'false')
                },
                d() ? 'animate-always' : 'animate-never'
            )((e, l, c) => {
                let { dotPosition: d } = e,
                    { key: p } = c;
                return l
                    ? null
                    : (0, i.jsx)(
                          'svg',
                          {
                              ref: t,
                              x: r,
                              y: a,
                              width: 6 * n + (n / 2) * 2,
                              height: 2 * n,
                              className: s()(_, u.dots, f ? u.themed : null),
                              children: (0, i.jsx)(o.animated.g, {
                                  style: { opacity: d.to((e) => Math.min(1, Math.max(e, 0))) },
                                  children: (0, i.jsx)(v, {
                                      dotRadius: n,
                                      dotPosition: d
                                  })
                              })
                          },
                          p
                      );
            });
        })
    );
