n.d(t, {
    I: () => S,
    b: () => I,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(236726),
    l = n(481060),
    c = n(892071),
    u = n(84527);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function m() {
    return new Promise((e) => setTimeout(e, 1000));
}
let h = 0.25,
    g = 4,
    E = 1,
    b = 2.8,
    y = {
        config: {
            friction: 50,
            tension: 900,
            mass: 1,
        },
        unique: !0,
        initial: { dotPosition: 1 },
        from: { dotPosition: 0 },
        enter: { dotPosition: 1 },
        leave: { dotPosition: 0 },
    },
    O = {
        config: { duration: 2400 },
        from: { dotCycle: 2.8 },
        reset: !0,
    };
function v(e) {
    let t = e % 2;
    return t > 1 ? 1 - (t - 1) : t;
}
let S = i.memo(function (e) {
        let { dotRadius: t, dotPosition: n, fill: a = "currentColor", spacing: o = 2.5 } = e,
            { focused: u } = (0, c.vP)(),
            d = i.useRef(!0);
        i.useEffect(() => () => void (d.current = !1), []);
        let [p] = (0, l.q_F)(
                () =>
                    _(f({}, O), {
                        to: async (e) => {
                            let t = b;
                            for (; d.current; )
                                u
                                    ? ((t += E * g),
                                      await e({
                                          dotCycle: t,
                                          immediate: !1,
                                      }))
                                    : t !== b
                                      ? ((t = b),
                                        await e({
                                            dotCycle: t,
                                            immediate: !0,
                                        }))
                                      : await m();
                        },
                    }),
                "animate-always",
                [u],
            ),
            y = (2 * t * 3 + (t / 4) * 2) / 2;
        return (0, r.jsx)(r.Fragment, {
            children: [0, 1, 2].map((e) => {
                let i = h * e,
                    l = t + t * o * e;
                return (0, r.jsx)(
                    s.animated.circle,
                    {
                        cx: n ? n.to([0, 1], [y, l]) : l,
                        cy: t,
                        r: p.dotCycle
                            .to((e) => v(e - i))
                            .to([0, 0.4, 0.8, 1], [0.8 * t, 0.8 * t, t, t])
                            .to((e) => (u ? e : t)),
                        fill: a,
                        style: {
                            opacity: p.dotCycle
                                .to((e) => v(e - i))
                                .to([0, 0.4, 0.8, 1], [0.3, 0.3, 1, 1])
                                .to((e) => (u ? e : 1)),
                        },
                    },
                    e,
                );
            }),
        });
    }),
    I = i.memo(function (e) {
        let { dotRadius: t, x: n, y: i, hide: a = !1, themed: d = !1, className: p, ref: m } = e,
            { focused: h } = (0, c.vP)();
        return (0, l.Yzy)(
            a,
            _(f({}, y), { key: (e) => (e ? "true" : "false") }),
            h ? "animate-always" : "animate-never",
        )((e, a, l) => {
            let { dotPosition: c } = e,
                { key: f } = l;
            return a
                ? null
                : (0, r.jsx)(
                      "svg",
                      {
                          ref: m,
                          x: n,
                          y: i,
                          width: 2 * t * 3 + (t / 2) * 2,
                          height: 2 * t,
                          className: o()(p, u.dots, d ? u.themed : null),
                          children: (0, r.jsx)(s.animated.g, {
                              style: { opacity: c.to((e) => Math.min(1, Math.max(e, 0))) },
                              children: (0, r.jsx)(S, {
                                  dotRadius: t,
                                  dotPosition: c,
                              }),
                          }),
                      },
                      f,
                  );
        });
    });
