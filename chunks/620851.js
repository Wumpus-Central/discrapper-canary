n.d(t, { A: () => _ });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(812729),
    o = n.n(l),
    d = n(419354),
    c = n(866323),
    u = n(939249),
    h = n(834730),
    m = n(259788),
    p = n(302614),
    g = n(639198);
let f = { mass: 1, tension: 600, friction: 60, clamp: !0 };
function _(e) {
    let { locked: t, pinned: n } = e,
        [a, l] = r.useState(0),
        [_, x] = r.useState(0),
        [A, E] = r.useState(0),
        S = r.useRef(0),
        [I, v] = r.useState(0),
        { timeToLiveMs: b, reappearTimeMs: C } = m.Ay.useState(
            (e) => ({ timeToLiveMs: e.timeToLiveMs, reappearTimeMs: e.reappearTimeMs }),
            o(),
        ),
        T = { timeToLiveMs: b, reappearTimeMs: C },
        j = r.useRef(T);
    r.useEffect(() => {
        j.current = T;
    }),
        r.useEffect(
            () => (
                (S.current = setInterval(() => {
                    let e = Date.now();
                    x(e),
                        E((t) => {
                            if (0 === t) return e;
                            let n = e - t,
                                i = j.current.timeToLiveMs,
                                r = i + j.current.reappearTimeMs;
                            return n > i ? t + r : t;
                        });
                }, 100)),
                () => {
                    clearInterval(S.current);
                }
            ),
            [],
        );
    let y = () => {
            l(Date.now()), v((e) => e + 1);
        },
        w = a > 0 && _ - a < 1e3,
        N = (0, c.p)(A > 0 && A < _ && _ - A < b, {
            from: { opacity: 0 },
            enter: { opacity: 1 },
            leave: { opacity: 0 },
            config: f,
        }),
        [R, M] = r.useState(!1);
    if (
        (r.useEffect(() => {
            I > 10 && M(!0);
        }, [I]),
        R)
    )
        throw Error("ClickZoneDebugWidget crashed, too many clicks");
    return t && !n
        ? null
        : (0, i.jsx)(i.Fragment, {
              children: N(
                  (e, t) =>
                      t &&
                      (0, i.jsx)(d.animated.div, {
                          style: e,
                          className: g.r2,
                          children: (0, i.jsx)(p.A, {
                              className: s()(g.VC, w && g.Nd),
                              children: (0, i.jsx)(u.D, {
                                  onClick: y,
                                  className: g.vk,
                                  children: (0, i.jsxs)(h.E, {
                                      variant: "text-md/semibold",
                                      color: "always-white",
                                      children: ["Click Me (", I, ")"],
                                  }),
                              }),
                          }),
                      }),
              ),
          });
}
