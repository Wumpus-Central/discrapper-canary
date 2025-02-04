n.d(t, { Z: () => p }), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    s = n.n(r),
    o = n(642128),
    a = n(748780),
    c = n(481060),
    d = n(442837),
    u = n(607070),
    _ = n(663389),
    E = n(770082);
function h(e) {
    let { children: t, className: n, onFlashEnd: r, animationDelay: d = 500 } = e,
        _ = c.TVs.colors.TEXT_LINK,
        h = (0, c.dQu)(_).spring({ opacity: 0 }),
        p = (0, c.dQu)(_).spring({ opacity: 0.1 }),
        I = (0, c.dQu)(_).spring({ opacity: 0 }),
        m = (0, c.dQu)(_).spring({ opacity: 1 }),
        [T, C] = (0, c.q_F)(
            () => ({
                from: {
                    backgroundColor: h,
                    borderColor: h
                }
            }),
            'animate-never'
        ),
        N = {
            startColor: h,
            handleRest: (e) => {
                e.finished && (null == r || r());
            },
            endColor: I,
            targetBorderColor: m,
            targetColor: p,
            animationDelay: d
        },
        g = l.useRef(N);
    return (
        l.useEffect(() => {
            g.current = N;
        }),
        l.useEffect(() => {
            let { startColor: e, handleRest: t, endColor: n, targetBorderColor: i, targetColor: l, animationDelay: r } = g.current,
                { useReducedMotion: s } = u.Z,
                o = s ? 0 : 200;
            C({
                reset: !0,
                immediate: !1,
                to: {
                    backgroundColor: e,
                    borderColor: e
                },
                config: {
                    duration: o,
                    easing: a.Z.Easing.ease
                }
            }),
                C({
                    delay: r,
                    immediate: s,
                    to: [
                        {
                            backgroundColor: l,
                            borderColor: i
                        }
                    ],
                    config: {
                        duration: o,
                        easing: a.Z.Easing.ease
                    }
                }),
                C({
                    delay: r + 200 + 200,
                    immediate: s,
                    to: [
                        {
                            backgroundColor: n,
                            borderColor: n
                        }
                    ],
                    config: {
                        duration: o,
                        easing: a.Z.Easing.ease
                    },
                    onRest: t
                });
        }, [C]),
        (0, i.jsx)(o.animated.div, {
            style: T,
            className: s()(E.settingsItemHighlight, n),
            children: t
        })
    );
}
function p(e) {
    let { children: t, scrollPosition: n, animationDelay: r } = e,
        s = (0, d.e7)([_.Z], () => _.Z.getScrollPosition() === n),
        [o, a] = l.useState(!1);
    return (l.useEffect(() => {
        s && a(!0);
    }, [s]),
    o)
        ? (0, i.jsx)(h, {
              animationDelay: r,
              onFlashEnd: () => a(!1),
              children: t
          })
        : (0, i.jsx)(i.Fragment, { children: t });
}
