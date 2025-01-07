r.d(n, {
    I: function () {
        return T;
    },
    b: function () {
        return b;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(666912),
    c = r(481060),
    d = r(44429);
function f() {
    return new Promise((e) => setTimeout(e, 1000));
}
function _() {
    return document.hasFocus();
}
let h = 0.25,
    p = 4,
    m = 1,
    g = 2.8,
    E = {
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
    v = {
        config: { duration: 2400 },
        from: { dotCycle: 2.8 },
        reset: !0
    };
function I(e) {
    let n = e % 2;
    return n > 1 ? 1 - (n - 1) : n;
}
let T = s.memo(function (e) {
        let { dotRadius: n, dotPosition: r, fill: i = 'currentColor', spacing: o = 2.5 } = e,
            l = s.useRef(_()),
            d = s.useRef(!0);
        s.useEffect(() => () => void (d.current = !1), []);
        let [E] = (0, c.useSpring)(
                () => ({
                    ...v,
                    to: async (e) => {
                        let n = g;
                        for (; d.current; ) {
                            (l.current = _()),
                                l.current
                                    ? ((n += m * p),
                                      await e({
                                          dotCycle: n,
                                          immediate: !1
                                      }))
                                    : n !== g
                                      ? ((n = g),
                                        await e({
                                            dotCycle: n,
                                            immediate: !0
                                        }))
                                      : await f();
                        }
                    }
                }),
                'animate-always'
            ),
            T = (6 * n + (n / 4) * 2) / 2;
        return (0, a.jsx)(a.Fragment, {
            children: [0, 1, 2].map((e) => {
                let s = h * e,
                    c = n + n * o * e;
                return (0, a.jsx)(
                    u.animated.circle,
                    {
                        cx: r ? r.to([0, 1], [T, c]) : c,
                        cy: n,
                        r: E.dotCycle
                            .to((e) => I(e - s))
                            .to([0, 0.4, 0.8, 1], [0.8 * n, 0.8 * n, n, n])
                            .to((e) => (l.current ? e : n)),
                        fill: i,
                        style: {
                            opacity: E.dotCycle
                                .to((e) => I(e - s))
                                .to([0, 0.4, 0.8, 1], [0.3, 0.3, 1, 1])
                                .to((e) => (l.current ? e : 1))
                        }
                    },
                    e
                );
            })
        });
    }),
    b = s.memo(
        s.forwardRef(function (e, n) {
            let { dotRadius: r, x: i, y: s, hide: o = !1, themed: f = !1, className: h } = e;
            return (0, c.useTransition)(
                o,
                {
                    ...E,
                    key: (e) => (e ? 'true' : 'false')
                },
                _() ? 'animate-always' : 'animate-never'
            )((e, o, c) => {
                let { dotPosition: _ } = e,
                    { key: p } = c;
                return o
                    ? null
                    : (0, a.jsx)(
                          'svg',
                          {
                              ref: n,
                              x: i,
                              y: s,
                              width: 6 * r + (r / 2) * 2,
                              height: 2 * r,
                              className: l()(h, d.dots, f ? d.themed : null),
                              children: (0, a.jsx)(u.animated.g, {
                                  style: { opacity: _.to((e) => Math.min(1, Math.max(e, 0))) },
                                  children: (0, a.jsx)(T, {
                                      dotRadius: r,
                                      dotPosition: _
                                  })
                              })
                          },
                          p
                      );
            });
        })
    );
