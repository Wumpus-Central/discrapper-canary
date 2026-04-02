n.d(t, { A: () => p });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(812729),
    o = n.n(a),
    d = n(687498),
    u = n(397927),
    c = n(259788),
    h = n(302614),
    g = n(594446);
let m = { mass: 1, tension: 600, friction: 60, clamp: !0 };
function p(e) {
    let { locked: t, pinned: n } = e,
        [l, a] = s.useState(0),
        [p, A] = s.useState(0),
        [x, f] = s.useState(0),
        E = s.useRef(0),
        [S, I] = s.useState(0),
        { timeToLiveMs: T, reappearTimeMs: v } = c.Ay.useState(
            (e) => ({ timeToLiveMs: e.timeToLiveMs, reappearTimeMs: e.reappearTimeMs }),
            o(),
        ),
        C = { timeToLiveMs: T, reappearTimeMs: v },
        j = s.useRef(C);
    s.useEffect(() => {
        j.current = C;
    }),
        s.useEffect(
            () => (
                (E.current = setInterval(() => {
                    let e = Date.now();
                    A(e),
                        f((t) => {
                            if (0 === t) return e;
                            let n = e - t,
                                i = j.current.timeToLiveMs,
                                s = i + j.current.reappearTimeMs;
                            return n > i ? t + s : t;
                        });
                }, 100)),
                () => {
                    clearInterval(E.current);
                }
            ),
            [],
        );
    let y = () => {
            a(Date.now()), I((e) => e + 1);
        },
        w = l > 0 && p - l < 1e3,
        _ = (0, u.pnh)(x > 0 && x < p && p - x < T, {
            from: { opacity: 0 },
            enter: { opacity: 1 },
            leave: { opacity: 0 },
            config: m,
        }),
        [O, N] = s.useState(!1);
    if (
        (s.useEffect(() => {
            S > 10 && N(!0);
        }, [S]),
        O)
    )
        throw Error("ClickZoneDebugWidget crashed, too many clicks");
    return t && !n
        ? null
        : (0, i.jsx)(i.Fragment, {
              children: _(
                  (e, t) =>
                      t &&
                      (0, i.jsx)(d.animated.div, {
                          style: e,
                          className: g.r2,
                          children: (0, i.jsx)(h.A, {
                              className: r()(g.VC, w && g.Nd),
                              children: (0, i.jsx)(u.DUT, {
                                  onClick: y,
                                  className: g.vk,
                                  children: (0, i.jsxs)(u.Text, {
                                      variant: "text-md/semibold",
                                      color: "always-white",
                                      children: ["Click Me (", S, ")"],
                                  }),
                              }),
                          }),
                      }),
              ),
          });
}
