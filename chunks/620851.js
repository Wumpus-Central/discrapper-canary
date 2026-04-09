n.d(t, { A: () => p });
var i = n(627968),
    a = n(64700),
    r = n(503698),
    l = n.n(r),
    s = n(812729),
    o = n.n(s),
    d = n(687498),
    c = n(397927),
    u = n(259788),
    _ = n(302614),
    h = n(594446);
let m = { mass: 1, tension: 600, friction: 60, clamp: !0 };
function p(e) {
    let { locked: t, pinned: n } = e,
        [r, s] = a.useState(0),
        [p, g] = a.useState(0),
        [f, A] = a.useState(0),
        x = a.useRef(0),
        [I, E] = a.useState(0),
        { timeToLiveMs: b, reappearTimeMs: v } = u.Ay.useState(
            (e) => ({ timeToLiveMs: e.timeToLiveMs, reappearTimeMs: e.reappearTimeMs }),
            o(),
        ),
        C = { timeToLiveMs: b, reappearTimeMs: v },
        S = a.useRef(C);
    a.useEffect(() => {
        S.current = C;
    }),
        a.useEffect(
            () => (
                (x.current = setInterval(() => {
                    let e = Date.now();
                    g(e),
                        A((t) => {
                            if (0 === t) return e;
                            let n = e - t,
                                i = S.current.timeToLiveMs,
                                a = i + S.current.reappearTimeMs;
                            return n > i ? t + a : t;
                        });
                }, 100)),
                () => {
                    clearInterval(x.current);
                }
            ),
            [],
        );
    let y = () => {
            s(Date.now()), E((e) => e + 1);
        },
        T = r > 0 && p - r < 1e3,
        N = (0, c.pnh)(f > 0 && f < p && p - f < b, {
            from: { opacity: 0 },
            enter: { opacity: 1 },
            leave: { opacity: 0 },
            config: m,
        }),
        [w, L] = a.useState(!1);
    if (
        (a.useEffect(() => {
            I > 10 && L(!0);
        }, [I]),
        w)
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
                          className: h.r2,
                          children: (0, i.jsx)(_.A, {
                              className: l()(h.VC, T && h.Nd),
                              children: (0, i.jsx)(c.DUT, {
                                  onClick: y,
                                  className: h.vk,
                                  children: (0, i.jsxs)(c.Text, {
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
