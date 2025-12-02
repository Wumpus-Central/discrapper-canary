n.d(t, { Z: () => g }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(205120),
    l = n(748780),
    c = n(481060),
    u = n(442837),
    d = n(607070),
    f = n(663389),
    p = n(334709);
let _ = 200,
    m = 200;
function h(e) {
    let { children: t, className: n, onFlashEnd: a, animationDelay: u = 500 } = e,
        f = c.TVs.colors.TEXT_LINK,
        h = (0, c.dQu)(f).spring({ opacity: 0 }),
        g = (0, c.dQu)(f).spring({ opacity: 0.1 }),
        E = (0, c.dQu)(f).spring({ opacity: 0 }),
        b = (0, c.dQu)(f).spring({ opacity: 1 }),
        y = (e) => {
            e.finished && (null == a || a());
        },
        [O, v] = (0, c.q_F)(
            () => ({
                from: {
                    backgroundColor: h,
                    borderColor: h,
                },
            }),
            "animate-never",
        ),
        S = {
            startColor: h,
            handleRest: y,
            endColor: E,
            targetBorderColor: b,
            targetColor: g,
            animationDelay: u,
        },
        I = i.useRef(S);
    return (
        i.useEffect(() => {
            I.current = S;
        }),
        i.useEffect(() => {
            let {
                    startColor: e,
                    handleRest: t,
                    endColor: n,
                    targetBorderColor: r,
                    targetColor: i,
                    animationDelay: a,
                } = I.current,
                { useReducedMotion: o } = d.Z,
                s = o ? 0 : _,
                c = a + _ + m;
            v({
                reset: !0,
                immediate: !1,
                to: {
                    backgroundColor: e,
                    borderColor: e,
                },
                config: {
                    duration: s,
                    easing: l.Z.Easing.ease,
                },
            }),
                v({
                    delay: a,
                    immediate: o,
                    to: [
                        {
                            backgroundColor: i,
                            borderColor: r,
                        },
                    ],
                    config: {
                        duration: s,
                        easing: l.Z.Easing.ease,
                    },
                }),
                v({
                    delay: c,
                    immediate: o,
                    to: [
                        {
                            backgroundColor: n,
                            borderColor: n,
                        },
                    ],
                    config: {
                        duration: s,
                        easing: l.Z.Easing.ease,
                    },
                    onRest: t,
                });
        }, [v]),
        (0, r.jsx)(s.animated.div, {
            style: O,
            className: o()(p.settingsItemHighlight, n),
            children: t,
        })
    );
}
function g(e) {
    let { children: t, scrollPosition: n, animationDelay: a } = e,
        o = (0, u.e7)([f.Z], () => f.Z.getScrollPosition() === n),
        [s, l] = i.useState(!1);
    return (i.useEffect(() => {
        o && l(!0);
    }, [o]),
    s)
        ? (0, r.jsx)(h, {
              animationDelay: a,
              onFlashEnd: () => l(!1),
              children: t,
          })
        : t;
}
