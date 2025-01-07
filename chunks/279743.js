n.d(t, {
    Z: function () {
        return p;
    }
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(666912),
    o = n(748780),
    c = n(481060),
    d = n(442837),
    u = n(607070),
    m = n(663389),
    h = n(770082);
function g(e) {
    let { children: t, className: n, onFlashEnd: r, animationDelay: m = 500 } = e,
        g = c.tokens.colors.TEXT_LINK,
        p = (0, d.e7)([u.Z], () => u.Z.useReducedMotion),
        x = (0, c.useToken)(g).spring({ opacity: 0 }),
        S = (0, c.useToken)(g).spring({ opacity: 0.1 }),
        T = (0, c.useToken)(g).spring({ opacity: 0 }),
        E = (0, c.useToken)(g).spring({ opacity: 1 }),
        C = (e) => {
            e.finished && (null == r || r());
        },
        [_, f] = (0, c.useSpring)(
            () => ({
                from: {
                    backgroundColor: x,
                    borderColor: x
                }
            }),
            'animate-never'
        ),
        I = m + 200 + 200,
        N = p ? 0 : 200;
    return (
        s.useEffect(() => {
            f({
                reset: !0,
                immediate: !1,
                to: {
                    backgroundColor: x,
                    borderColor: x
                },
                config: {
                    duration: N,
                    easing: o.Z.Easing.ease
                }
            }),
                f({
                    delay: m,
                    immediate: p,
                    to: [
                        {
                            backgroundColor: S,
                            borderColor: E
                        }
                    ],
                    config: {
                        duration: N,
                        easing: o.Z.Easing.ease
                    }
                }),
                f({
                    delay: I,
                    immediate: p,
                    to: [
                        {
                            backgroundColor: T,
                            borderColor: T
                        }
                    ],
                    config: {
                        duration: N,
                        easing: o.Z.Easing.ease
                    },
                    onRest: C
                });
        }, [f]),
        (0, i.jsx)(a.animated.div, {
            style: _,
            className: l()(h.settingsItemHighlight, n),
            children: t
        })
    );
}
function p(e) {
    let { children: t, scrollPosition: n, animationDelay: r } = e,
        l = (0, d.e7)([m.Z], () => m.Z.getScrollPosition() === n),
        [a, o] = s.useState(!1);
    return (s.useEffect(() => {
        l && o(!0);
    }, [l]),
    a)
        ? (0, i.jsx)(g, {
              animationDelay: r,
              onFlashEnd: () => o(!1),
              children: t
          })
        : (0, i.jsx)(i.Fragment, { children: t });
}
