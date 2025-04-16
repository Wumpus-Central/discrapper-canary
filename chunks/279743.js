n.d(t, { Z: () => g }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    s = n(200100),
    a = n(748780),
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
        [y, _] = (0, c.q_F)(
            () => ({
                from: {
                    backgroundColor: f,
                    borderColor: f
                }
            }),
            'animate-never'
        ),
        v = {
            startColor: f,
            handleRest: (e) => {
                e.finished && (null == l || l());
            },
            endColor: m,
            targetBorderColor: b,
            targetColor: g,
            animationDelay: u
        },
        O = i.useRef(v);
    return (
        i.useEffect(() => {
            O.current = v;
        }),
        i.useEffect(() => {
            let { startColor: e, handleRest: t, endColor: n, targetBorderColor: r, targetColor: i, animationDelay: l } = O.current,
                { useReducedMotion: o } = d.Z,
                s = 200 * !o;
            _({
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
                _({
                    delay: l,
                    immediate: o,
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
                _({
                    delay: l + 200 + 200,
                    immediate: o,
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
        }, [_]),
        (0, r.jsx)(s.animated.div, {
            style: y,
            className: o()(p.settingsItemHighlight, n),
            children: t
        })
    );
}
function g(e) {
    let { children: t, scrollPosition: n, animationDelay: l } = e,
        o = (0, u.e7)([h.Z], () => h.Z.getScrollPosition() === n),
        [s, a] = i.useState(!1);
    return (i.useEffect(() => {
        o && a(!0);
    }, [o]),
    s)
        ? (0, r.jsx)(f, {
              animationDelay: l,
              onFlashEnd: () => a(!1),
              children: t
          })
        : t;
}
