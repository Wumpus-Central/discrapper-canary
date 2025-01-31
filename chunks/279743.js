i.d(e, { Z: () => g }), i(47120);
var n = i(200651),
    r = i(192379),
    s = i(120356),
    o = i.n(s),
    l = i(642128),
    a = i(748780),
    c = i(481060),
    d = i(442837),
    h = i(607070),
    u = i(663389),
    E = i(770082);
function _(t) {
    let { children: e, className: i, onFlashEnd: s, animationDelay: d = 500 } = t,
        u = c.TVs.colors.TEXT_LINK,
        _ = (0, c.dQu)(u).spring({ opacity: 0 }),
        g = (0, c.dQu)(u).spring({ opacity: 0.1 }),
        L = (0, c.dQu)(u).spring({ opacity: 0 }),
        C = (0, c.dQu)(u).spring({ opacity: 1 }),
        [m, p] = (0, c.q_F)(
            () => ({
                from: {
                    backgroundColor: _,
                    borderColor: _
                }
            }),
            'animate-never'
        ),
        O = {
            startColor: _,
            handleRest: (t) => {
                t.finished && (null == s || s());
            },
            endColor: L,
            targetBorderColor: C,
            targetColor: g,
            animationDelay: d
        },
        k = r.useRef(O);
    return (
        r.useEffect(() => {
            k.current = O;
        }),
        r.useEffect(() => {
            let { startColor: t, handleRest: e, endColor: i, targetBorderColor: n, targetColor: r, animationDelay: s } = k.current,
                { useReducedMotion: o } = h.Z,
                l = o ? 0 : 200;
            p({
                reset: !0,
                immediate: !1,
                to: {
                    backgroundColor: t,
                    borderColor: t
                },
                config: {
                    duration: l,
                    easing: a.Z.Easing.ease
                }
            }),
                p({
                    delay: s,
                    immediate: o,
                    to: [
                        {
                            backgroundColor: r,
                            borderColor: n
                        }
                    ],
                    config: {
                        duration: l,
                        easing: a.Z.Easing.ease
                    }
                }),
                p({
                    delay: s + 200 + 200,
                    immediate: o,
                    to: [
                        {
                            backgroundColor: i,
                            borderColor: i
                        }
                    ],
                    config: {
                        duration: l,
                        easing: a.Z.Easing.ease
                    },
                    onRest: e
                });
        }, [p]),
        (0, n.jsx)(l.animated.div, {
            style: m,
            className: o()(E.settingsItemHighlight, i),
            children: e
        })
    );
}
function g(t) {
    let { children: e, scrollPosition: i, animationDelay: s } = t,
        o = (0, d.e7)([u.Z], () => u.Z.getScrollPosition() === i),
        [l, a] = r.useState(!1);
    return (r.useEffect(() => {
        o && a(!0);
    }, [o]),
    l)
        ? (0, n.jsx)(_, {
              animationDelay: s,
              onFlashEnd: () => a(!1),
              children: e
          })
        : (0, n.jsx)(n.Fragment, { children: e });
}
