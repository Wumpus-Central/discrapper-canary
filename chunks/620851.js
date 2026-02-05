n.d(t, { A: () => g });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(812729),
    o = n.n(r),
    d = n(563495),
    u = n(397927),
    c = n(259788),
    h = n(302614),
    A = n(751747);
let m = { mass: 1, tension: 600, friction: 60, clamp: !0 };
function g(e) {
    let { locked: t, pinned: n } = e,
        [a, r] = l.useState(0),
        [g, p] = l.useState(0),
        [f, _] = l.useState(0),
        E = l.useRef(0),
        [x, S] = l.useState(0),
        { timeToLiveMs: I, reappearTimeMs: T } = c.Ay.useState(
            (e) => ({ timeToLiveMs: e.timeToLiveMs, reappearTimeMs: e.reappearTimeMs }),
            o(),
        ),
        C = { timeToLiveMs: I, reappearTimeMs: T },
        v = l.useRef(C);
    l.useEffect(() => {
        v.current = C;
    }),
        l.useEffect(
            () => (
                (E.current = setInterval(() => {
                    let e = Date.now();
                    p(e),
                        _((t) => {
                            if (0 === t) return e;
                            let n = e - t,
                                i = v.current.timeToLiveMs,
                                l = i + v.current.reappearTimeMs;
                            return n > i ? t + l : t;
                        });
                }, 100)),
                () => {
                    clearInterval(E.current);
                }
            ),
            [],
        );
    let y = () => {
            r(Date.now()), S((e) => e + 1);
        },
        N = a > 0 && g - a < 1e3,
        O = (0, u.pnh)(f > 0 && f < g && g - f < I, {
            from: { opacity: 0 },
            enter: { opacity: 1 },
            leave: { opacity: 0 },
            config: m,
        }),
        [b, j] = l.useState(!1);
    if (
        (l.useEffect(() => {
            x > 10 && j(!0);
        }, [x]),
        b)
    )
        throw Error("ClickZoneDebugWidget crashed, too many clicks");
    return t && !n
        ? null
        : (0, i.jsx)(i.Fragment, {
              children: O(
                  (e, t) =>
                      t &&
                      (0, i.jsx)(d.animated.div, {
                          style: e,
                          className: A.r2,
                          children: (0, i.jsx)(h.A, {
                              className: s()(A.VC, N && A.Nd),
                              children: (0, i.jsx)(u.DUT, {
                                  onClick: y,
                                  className: A.vk,
                                  children: (0, i.jsxs)(u.Text, {
                                      variant: "text-md/semibold",
                                      color: "always-white",
                                      children: ["Click Me (", x, ")"],
                                  }),
                              }),
                          }),
                      }),
              ),
          });
}
