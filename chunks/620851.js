n.d(t, { A: () => m }), n(896048), n(65821);
var i = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
    o = n(812729),
    s = n.n(o),
    c = n(432022),
    u = n(397927),
    d = n(259788),
    p = n(302614),
    h = n(751747);
let f = {
    mass: 1,
    tension: 600,
    friction: 60,
    clamp: !0,
};
function m(e) {
    let { locked: t, pinned: n } = e,
        [l, o] = r.useState(0),
        [m, g] = r.useState(0),
        [y, A] = r.useState(0),
        O = r.useRef(0),
        [E, v] = r.useState(0),
        { timeToLiveMs: b, reappearTimeMs: S } = d.Ay.useState(
            (e) => ({
                timeToLiveMs: e.timeToLiveMs,
                reappearTimeMs: e.reappearTimeMs,
            }),
            s(),
        ),
        x = {
            timeToLiveMs: b,
            reappearTimeMs: S,
        },
        j = r.useRef(x);
    r.useEffect(() => {
        j.current = x;
    }),
        r.useEffect(
            () => (
                (O.current = setInterval(() => {
                    let e = Date.now();
                    g(e),
                        A((t) => {
                            if (0 === t) return e;
                            let n = e - t,
                                i = j.current.timeToLiveMs,
                                r = i + j.current.reappearTimeMs;
                            return n > i ? t + r : t;
                        });
                }, 100)),
                () => {
                    clearInterval(O.current);
                }
            ),
            [],
        );
    let I = () => {
            o(Date.now()), v((e) => e + 1);
        },
        N = l > 0 && m - l < 1000,
        w = (0, u.pnh)(y > 0 && y < m && m - y < b, {
            from: { opacity: 0 },
            enter: { opacity: 1 },
            leave: { opacity: 0 },
            config: f,
        }),
        [T, C] = r.useState(!1);
    if (
        (r.useEffect(() => {
            E > 10 && C(!0);
        }, [E]),
        T)
    )
        throw Error("ClickZoneDebugWidget crashed, too many clicks");
    return t && !n
        ? null
        : (0, i.jsx)(i.Fragment, {
              children: w(
                  (e, t) =>
                      t &&
                      (0, i.jsx)(c.animated.div, {
                          style: e,
                          className: h.r2,
                          children: (0, i.jsx)(p.A, {
                              className: a()(h.VC, N && h.Nd),
                              children: (0, i.jsx)(u.DUT, {
                                  onClick: I,
                                  className: h.vk,
                                  children: (0, i.jsxs)(u.Text, {
                                      variant: "text-md/semibold",
                                      color: "always-white",
                                      children: ["Click Me (", E, ")"],
                                  }),
                              }),
                          }),
                      }),
              ),
          });
}
