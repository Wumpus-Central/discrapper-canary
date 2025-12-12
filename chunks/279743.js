n.d(t, { Z: () => g }), n(388685);
var r = n(54381),
    i = n(473749),
    o = n(120356),
    a = n.n(o),
    s = n(467721),
    l = n(748780),
    c = n(481060),
    u = n(442837),
    d = n(607070),
    f = n(663389),
    p = n(334709);
let _ = 200,
    m = 200;
function h(e) {
    let { children: t, className: n, onFlashEnd: o, animationDelay: u = 500 } = e,
        f = c.TVs.colors.TEXT_LINK,
        h = (0, c.dQu)(f).spring({ opacity: 0 }),
        g = (0, c.dQu)(f).spring({ opacity: 0.1 }),
        E = (0, c.dQu)(f).spring({ opacity: 0 }),
        b = (0, c.dQu)(f).spring({ opacity: 1 }),
        y = (e) => {
            e.finished && (null == o || o());
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
                    animationDelay: o,
                } = I.current,
                { useReducedMotion: a } = d.Z,
                s = a ? 0 : _,
                c = o + _ + m;
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
                    delay: o,
                    immediate: a,
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
                    immediate: a,
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
            className: a()(p.settingsItemHighlight, n),
            children: t,
        })
    );
}
function g(e) {
    let { children: t, scrollPosition: n, animationDelay: o } = e,
        a = (0, u.e7)([f.Z], () => f.Z.getScrollPosition() === n),
        [s, l] = i.useState(!1);
    return (i.useEffect(() => {
        a && l(!0);
    }, [a]),
    s)
        ? (0, r.jsx)(h, {
              animationDelay: o,
              onFlashEnd: () => l(!1),
              children: t,
          })
        : t;
}
