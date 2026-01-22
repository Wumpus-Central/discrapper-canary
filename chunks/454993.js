n.d(t, { A: () => p }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(432022),
    s = n(615300),
    o = n(397927),
    l = n(854987),
    c = n(639797);
let u = 400,
    d = s.A.Easing.bezier(0.4, 0, 0, 1),
    f = 500;
function p(e) {
    let { playEntryAnimation: t, children: n, isLeaving: s, onRest: p } = e,
        [_, h] = i.useState(!1),
        m = i.useContext(l.P),
        g = (0, o.rdh)(m.primaryColor).hex(),
        E = (0, o.zhh)({
            from: s
                ? {
                      height: "100%",
                      blurHeight: "110%",
                  }
                : {
                      height: "0%",
                      blurHeight: "0%",
                  },
            to: s
                ? {
                      height: "0%",
                      blurHeight: "0%",
                  }
                : {
                      height: "100%",
                      blurHeight: "110%",
                  },
            config: {
                duration: u,
                easing: d,
            },
            pause: !t,
        }),
        b = (0, o.zhh)({
            from: { background: s ? "rgba(0, 0, 0, 0.8)" : "rgba(0, 0, 0, 0)" },
            to: { background: s ? "rgba(0, 0, 0, 0)" : "rgba(0, 0, 0, 0.8)" },
            config: {
                duration: s ? u : u / 2,
                easing: d,
            },
            onRest: p,
        });
    return (
        i.useEffect(() => {
            if (t) return;
            let e = setTimeout(() => {
                h(!0);
            }, f);
            return () => clearTimeout(e);
        }, [t]),
        (0, r.jsx)(a.animated.div, {
            className: c.iE,
            style: { background: b.background },
            children: t
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(a.animated.div, {
                              className: c.Ge,
                              style: {
                                  height: E.blurHeight,
                                  color: g,
                              },
                          }),
                          (0, r.jsx)(a.animated.div, {
                              className: c.PJ,
                              style: { height: E.height },
                              children: (0, r.jsx)("div", {
                                  className: c.TQ,
                                  children: n,
                              }),
                          }),
                      ],
                  })
                : _
                  ? (0, r.jsx)(o.y$y, { className: c.u1 })
                  : null,
        })
    );
}
