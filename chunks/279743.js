t.d(n, { Z: () => g }), t(47120);
var o = t(200651),
    i = t(192379),
    a = t(120356),
    r = t.n(a),
    l = t(642128),
    s = t(748780),
    c = t(481060),
    _ = t(442837),
    d = t(607070),
    u = t(663389),
    b = t(934855);
function E(e) {
    let { children: n, className: t, onFlashEnd: a, animationDelay: _ = 500 } = e,
        u = c.TVs.colors.TEXT_LINK,
        E = (0, c.dQu)(u).spring({ opacity: 0 }),
        g = (0, c.dQu)(u).spring({ opacity: 0.1 }),
        m = (0, c.dQu)(u).spring({ opacity: 0 }),
        R = (0, c.dQu)(u).spring({ opacity: 1 }),
        [f, S] = (0, c.q_F)(
            () => ({
                from: {
                    backgroundColor: E,
                    borderColor: E
                }
            }),
            'animate-never'
        ),
        C = {
            startColor: E,
            handleRest: (e) => {
                e.finished && (null == a || a());
            },
            endColor: m,
            targetBorderColor: R,
            targetColor: g,
            animationDelay: _
        },
        T = i.useRef(C);
    return (
        i.useEffect(() => {
            T.current = C;
        }),
        i.useEffect(() => {
            let { startColor: e, handleRest: n, endColor: t, targetBorderColor: o, targetColor: i, animationDelay: a } = T.current,
                { useReducedMotion: r } = d.Z,
                l = r ? 0 : 200;
            S({
                reset: !0,
                immediate: !1,
                to: {
                    backgroundColor: e,
                    borderColor: e
                },
                config: {
                    duration: l,
                    easing: s.Z.Easing.ease
                }
            }),
                S({
                    delay: a,
                    immediate: r,
                    to: [
                        {
                            backgroundColor: i,
                            borderColor: o
                        }
                    ],
                    config: {
                        duration: l,
                        easing: s.Z.Easing.ease
                    }
                }),
                S({
                    delay: a + 200 + 200,
                    immediate: r,
                    to: [
                        {
                            backgroundColor: t,
                            borderColor: t
                        }
                    ],
                    config: {
                        duration: l,
                        easing: s.Z.Easing.ease
                    },
                    onRest: n
                });
        }, [S]),
        (0, o.jsx)(l.animated.div, {
            style: f,
            className: r()(b.settingsItemHighlight, t),
            children: n
        })
    );
}
function g(e) {
    let { children: n, scrollPosition: t, animationDelay: a } = e,
        r = (0, _.e7)([u.Z], () => u.Z.getScrollPosition() === t),
        [l, s] = i.useState(!1);
    return (i.useEffect(() => {
        r && s(!0);
    }, [r]),
    l)
        ? (0, o.jsx)(E, {
              animationDelay: a,
              onFlashEnd: () => s(!1),
              children: n
          })
        : (0, o.jsx)(o.Fragment, { children: n });
}
