n.d(t, { A: () => g });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(812729),
    o = n.n(r),
    d = n(40153),
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
        y = l.useRef(C);
    l.useEffect(() => {
        y.current = C;
    }),
        l.useEffect(
            () => (
                (E.current = setInterval(() => {
                    let e = Date.now();
                    p(e),
                        _((t) => {
                            if (0 === t) return e;
                            let n = e - t,
                                i = y.current.timeToLiveMs,
                                l = i + y.current.reappearTimeMs;
                            return n > i ? t + l : t;
                        });
                }, 100)),
                () => {
                    clearInterval(E.current);
                }
            ),
            [],
        );
    let v = () => {
            r(Date.now()), S((e) => e + 1);
        },
        N = a > 0 && g - a < 1e3,
        O = (0, u.pnh)(f > 0 && f < g && g - f < I, {
            from: { opacity: 0 },
            enter: { opacity: 1 },
            leave: { opacity: 0 },
            config: m,
        }),
        [j, b] = l.useState(!1);
    if (
        (l.useEffect(() => {
            x > 10 && b(!0);
        }, [x]),
        j)
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
                                  onClick: v,
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
