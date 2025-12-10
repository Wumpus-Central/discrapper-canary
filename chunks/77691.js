n.d(t, { Z: () => p }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(467721),
    o = n(748780),
    s = n(481060),
    l = n(324060),
    c = n(49809);
let u = 400,
    d = o.Z.Easing.bezier(0.4, 0, 0, 1),
    f = 500;
function p(e) {
    let { playEntryAnimation: t, children: n, isLeaving: o, onRest: p } = e,
        [_, m] = i.useState(!1),
        h = i.useContext(l.Q),
        g = (0, s.dQu)(h.primaryColor).hex(),
        E = (0, s.q_F)({
            from: o
                ? {
                      height: "100%",
                      blurHeight: "110%",
                  }
                : {
                      height: "0%",
                      blurHeight: "0%",
                  },
            to: o
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
        b = (0, s.q_F)({
            from: { background: o ? "rgba(0, 0, 0, 0.8)" : "rgba(0, 0, 0, 0)" },
            to: { background: o ? "rgba(0, 0, 0, 0)" : "rgba(0, 0, 0, 0.8)" },
            config: {
                duration: o ? u : u / 2,
                easing: d,
            },
            onRest: p,
        });
    return (
        i.useEffect(() => {
            if (t) return;
            let e = setTimeout(() => {
                m(!0);
            }, f);
            return () => clearTimeout(e);
        }, [t]),
        (0, r.jsx)(a.animated.div, {
            className: c.wrapper,
            style: { background: b.background },
            children: t
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(a.animated.div, {
                              className: c.blur,
                              style: {
                                  height: E.blurHeight,
                                  color: g,
                              },
                          }),
                          (0, r.jsx)(a.animated.div, {
                              className: c.introAnimation,
                              style: { height: E.height },
                              children: (0, r.jsx)("div", {
                                  className: c.introInner,
                                  children: n,
                              }),
                          }),
                      ],
                  })
                : _
                  ? (0, r.jsx)(s.$jN, { className: c.spinner })
                  : null,
        })
    );
}
