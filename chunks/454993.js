n.d(t, {
    A: () => d,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    a = n(108531),
    i = n(615300),
    s = n(397927),
    o = n(854987),
    c = n(639797);
let u = i.A.Easing.bezier(0.4, 0, 0, 1);

function d(e) {
    let { playEntryAnimation: t, children: n, isLeaving: i, onRest: d } = e,
        [m, f] = l.useState(!1),
        p = l.useContext(o.P),
        h = (0, s.rdh)(p.primaryColor).hex(),
        b = (0, s.zhh)({
            from: i
                ? {
                      height: "100%",
                      blurHeight: "110%",
                  }
                : {
                      height: "0%",
                      blurHeight: "0%",
                  },
            to: i
                ? {
                      height: "0%",
                      blurHeight: "0%",
                  }
                : {
                      height: "100%",
                      blurHeight: "110%",
                  },
            config: {
                duration: 400,
                easing: u,
            },
            pause: !t,
        }),
        g = (0, s.zhh)({
            from: {
                background: i ? "rgba(0, 0, 0, 0.8)" : "rgba(0, 0, 0, 0)",
            },
            to: {
                background: i ? "rgba(0, 0, 0, 0)" : "rgba(0, 0, 0, 0.8)",
            },
            config: {
                duration: i ? 400 : 200,
                easing: u,
            },
            onRest: d,
        });
    return (
        l.useEffect(() => {
            if (t) return;
            let e = setTimeout(() => {
                f(!0);
            }, 500);
            return () => clearTimeout(e);
        }, [t]),
        (0, r.jsx)(a.animated.div, {
            className: c.iE,
            style: {
                background: g.background,
            },
            children: t
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(a.animated.div, {
                              className: c.Ge,
                              style: {
                                  height: b.blurHeight,
                                  color: h,
                              },
                          }),
                          (0, r.jsx)(a.animated.div, {
                              className: c.PJ,
                              style: {
                                  height: b.height,
                              },
                              children: (0, r.jsx)("div", {
                                  className: c.TQ,
                                  children: n,
                              }),
                          }),
                      ],
                  })
                : m
                  ? (0, r.jsx)(s.y$y, {
                        className: c.u1,
                    })
                  : null,
        })
    );
}
