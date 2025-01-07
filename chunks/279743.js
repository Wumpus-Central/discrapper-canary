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
    let { children: t, className: n, onFlashEnd: r, animationDelay: d = 500 } = e,
        m = c.tokens.colors.TEXT_LINK,
        g = (0, c.useToken)(m).spring({ opacity: 0 }),
        p = (0, c.useToken)(m).spring({ opacity: 0.1 }),
        x = (0, c.useToken)(m).spring({ opacity: 0 }),
        S = (0, c.useToken)(m).spring({ opacity: 1 }),
        [T, E] = (0, c.useSpring)(
            () => ({
                from: {
                    backgroundColor: g,
                    borderColor: g
                }
            }),
            'animate-never'
        ),
        C = {
            startColor: g,
            handleRest: (e) => {
                e.finished && (null == r || r());
            },
            endColor: x,
            targetBorderColor: S,
            targetColor: p,
            animationDelay: d
        },
        _ = s.useRef(C);
    return (
        s.useEffect(() => {
            _.current = C;
        }),
        s.useEffect(() => {
            let { startColor: e, handleRest: t, endColor: n, targetBorderColor: i, targetColor: s, animationDelay: r } = _.current,
                { useReducedMotion: l } = u.Z,
                a = l ? 0 : 200;
            E({
                reset: !0,
                immediate: !1,
                to: {
                    backgroundColor: e,
                    borderColor: e
                },
                config: {
                    duration: a,
                    easing: o.Z.Easing.ease
                }
            }),
                E({
                    delay: r,
                    immediate: l,
                    to: [
                        {
                            backgroundColor: s,
                            borderColor: i
                        }
                    ],
                    config: {
                        duration: a,
                        easing: o.Z.Easing.ease
                    }
                }),
                E({
                    delay: r + 200 + 200,
                    immediate: l,
                    to: [
                        {
                            backgroundColor: n,
                            borderColor: n
                        }
                    ],
                    config: {
                        duration: a,
                        easing: o.Z.Easing.ease
                    },
                    onRest: t
                });
        }, [E]),
        (0, i.jsx)(a.animated.div, {
            style: T,
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
