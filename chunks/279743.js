n.d(t, {
    Z: function () {
        return p;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(476183),
    o = n(748780),
    c = n(481060),
    d = n(442837),
    u = n(607070),
    m = n(663389),
    g = n(770082);
function h(e) {
    let { children: t, className: n, onFlashEnd: s, animationDelay: d = 500 } = e,
        m = c.tokens.colors.TEXT_LINK,
        h = (0, c.useToken)(m).spring({ opacity: 0 }),
        p = (0, c.useToken)(m).spring({ opacity: 0.1 }),
        x = (0, c.useToken)(m).spring({ opacity: 0 }),
        f = (0, c.useToken)(m).spring({ opacity: 1 }),
        [_, E] = (0, c.useSpring)(
            () => ({
                from: {
                    backgroundColor: h,
                    borderColor: h
                }
            }),
            'animate-never'
        ),
        C = {
            startColor: h,
            handleRest: (e) => {
                e.finished && (null == s || s());
            },
            endColor: x,
            targetBorderColor: f,
            targetColor: p,
            animationDelay: d
        },
        T = r.useRef(C);
    return (
        r.useEffect(() => {
            T.current = C;
        }),
        r.useEffect(() => {
            let { startColor: e, handleRest: t, endColor: n, targetBorderColor: i, targetColor: r, animationDelay: s } = T.current,
                { useReducedMotion: a } = u.Z,
                l = a ? 0 : 200;
            E({
                reset: !0,
                immediate: !1,
                to: {
                    backgroundColor: e,
                    borderColor: e
                },
                config: {
                    duration: l,
                    easing: o.Z.Easing.ease
                }
            }),
                E({
                    delay: s,
                    immediate: a,
                    to: [
                        {
                            backgroundColor: r,
                            borderColor: i
                        }
                    ],
                    config: {
                        duration: l,
                        easing: o.Z.Easing.ease
                    }
                }),
                E({
                    delay: s + 200 + 200,
                    immediate: a,
                    to: [
                        {
                            backgroundColor: n,
                            borderColor: n
                        }
                    ],
                    config: {
                        duration: l,
                        easing: o.Z.Easing.ease
                    },
                    onRest: t
                });
        }, [E]),
        (0, i.jsx)(l.animated.div, {
            style: _,
            className: a()(g.settingsItemHighlight, n),
            children: t
        })
    );
}
function p(e) {
    let { children: t, scrollPosition: n, animationDelay: s } = e,
        a = (0, d.e7)([m.Z], () => m.Z.getScrollPosition() === n),
        [l, o] = r.useState(!1);
    return (r.useEffect(() => {
        a && o(!0);
    }, [a]),
    l)
        ? (0, i.jsx)(h, {
              animationDelay: s,
              onFlashEnd: () => o(!1),
              children: t
          })
        : (0, i.jsx)(i.Fragment, { children: t });
}
