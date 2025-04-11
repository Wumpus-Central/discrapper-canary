n.d(t, { Z: () => f }), n(388685);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    l = n.n(o),
    s = n(200100),
    a = n(748780),
    c = n(481060),
    u = n(442837),
    d = n(607070),
    p = n(663389),
    _ = n(834166);
function h(e) {
    let { children: t, className: n, onFlashEnd: o, animationDelay: u = 500 } = e,
        p = c.TVs.colors.TEXT_LINK,
        h = (0, c.dQu)(p).spring({ opacity: 0 }),
        f = (0, c.dQu)(p).spring({ opacity: 0.1 }),
        m = (0, c.dQu)(p).spring({ opacity: 0 }),
        b = (0, c.dQu)(p).spring({ opacity: 1 }),
        [g, E] = (0, c.q_F)(
            () => ({
                from: {
                    backgroundColor: h,
                    borderColor: h
                }
            }),
            'animate-never'
        ),
        O = {
            startColor: h,
            handleRest: (e) => {
                e.finished && (null == o || o());
            },
            endColor: m,
            targetBorderColor: b,
            targetColor: f,
            animationDelay: u
        },
        y = i.useRef(O);
    return (
        i.useEffect(() => {
            y.current = O;
        }),
        i.useEffect(() => {
            let { startColor: e, handleRest: t, endColor: n, targetBorderColor: r, targetColor: i, animationDelay: o } = y.current,
                { useReducedMotion: l } = d.Z,
                s = 200 * !l;
            E({
                reset: !0,
                immediate: !1,
                to: {
                    backgroundColor: e,
                    borderColor: e
                },
                config: {
                    duration: s,
                    easing: a.Z.Easing.ease
                }
            }),
                E({
                    delay: o,
                    immediate: l,
                    to: [
                        {
                            backgroundColor: i,
                            borderColor: r
                        }
                    ],
                    config: {
                        duration: s,
                        easing: a.Z.Easing.ease
                    }
                }),
                E({
                    delay: o + 200 + 200,
                    immediate: l,
                    to: [
                        {
                            backgroundColor: n,
                            borderColor: n
                        }
                    ],
                    config: {
                        duration: s,
                        easing: a.Z.Easing.ease
                    },
                    onRest: t
                });
        }, [E]),
        (0, r.jsx)(s.animated.div, {
            style: g,
            className: l()(_.settingsItemHighlight, n),
            children: t
        })
    );
}
function f(e) {
    let { children: t, scrollPosition: n, animationDelay: o } = e,
        l = (0, u.e7)([p.Z], () => p.Z.getScrollPosition() === n),
        [s, a] = i.useState(!1);
    return (i.useEffect(() => {
        l && a(!0);
    }, [l]),
    s)
        ? (0, r.jsx)(h, {
              animationDelay: o,
              onFlashEnd: () => a(!1),
              children: t
          })
        : t;
}
