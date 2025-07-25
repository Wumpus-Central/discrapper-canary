(n.d(t, { Z: () => g }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(652141),
    s = n(748780),
    c = n(481060),
    u = n(442837),
    d = n(607070),
    h = n(663389),
    p = n(834166);
function f(e) {
    let { children: t, className: n, onFlashEnd: l, animationDelay: u = 500 } = e,
        h = c.TVs.colors.TEXT_LINK,
        f = (0, c.dQu)(h).spring({ opacity: 0 }),
        g = (0, c.dQu)(h).spring({ opacity: 0.1 }),
        m = (0, c.dQu)(h).spring({ opacity: 0 }),
        b = (0, c.dQu)(h).spring({ opacity: 1 }),
        [_, O] = (0, c.q_F)(
            () => ({
                from: {
                    backgroundColor: f,
                    borderColor: f
                }
            }),
            'animate-never'
        ),
        y = {
            startColor: f,
            handleRest: (e) => {
                e.finished && (null == l || l());
            },
            endColor: m,
            targetBorderColor: b,
            targetColor: g,
            animationDelay: u
        },
        v = i.useRef(y);
    return (
        i.useEffect(() => {
            v.current = y;
        }),
        i.useEffect(() => {
            let { startColor: e, handleRest: t, endColor: n, targetBorderColor: r, targetColor: i, animationDelay: l } = v.current,
                { useReducedMotion: o } = d.Z,
                a = 200 * !o;
            (O({
                reset: !0,
                immediate: !1,
                to: {
                    backgroundColor: e,
                    borderColor: e
                },
                config: {
                    duration: a,
                    easing: s.Z.Easing.ease
                }
            }),
                O({
                    delay: l,
                    immediate: o,
                    to: [
                        {
                            backgroundColor: i,
                            borderColor: r
                        }
                    ],
                    config: {
                        duration: a,
                        easing: s.Z.Easing.ease
                    }
                }),
                O({
                    delay: l + 200 + 200,
                    immediate: o,
                    to: [
                        {
                            backgroundColor: n,
                            borderColor: n
                        }
                    ],
                    config: {
                        duration: a,
                        easing: s.Z.Easing.ease
                    },
                    onRest: t
                }));
        }, [O]),
        (0, r.jsx)(a.animated.div, {
            style: _,
            className: o()(p.settingsItemHighlight, n),
            children: t
        })
    );
}
function g(e) {
    let { children: t, scrollPosition: n, animationDelay: l } = e,
        o = (0, u.e7)([h.Z], () => h.Z.getScrollPosition() === n),
        [a, s] = i.useState(!1);
    return (i.useEffect(() => {
        o && s(!0);
    }, [o]),
    a)
        ? (0, r.jsx)(f, {
              animationDelay: l,
              onFlashEnd: () => s(!1),
              children: t
          })
        : t;
}
