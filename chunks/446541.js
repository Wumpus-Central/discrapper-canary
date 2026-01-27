n.d(t, {
    A: () => g,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(108531),
    o = n(615300),
    c = n(397927),
    d = n(311907),
    u = n(775602),
    _ = n(628965),
    p = n(480357);

function m(e) {
    let { children: t, className: n, onFlashEnd: l, animationDelay: d = 500 } = e,
        _ = c.LU0.colors.TEXT_LINK,
        m = (0, c.rdh)(_).spring({
            opacity: 0,
        }),
        g = (0, c.rdh)(_).spring({
            opacity: 0.1,
        }),
        A = (0, c.rdh)(_).spring({
            opacity: 0,
        }),
        f = (0, c.rdh)(_).spring({
            opacity: 1,
        }),
        [h, b] = (0, c.zhh)(
            () => ({
                from: {
                    backgroundColor: m,
                    borderColor: m,
                },
            }),
            "animate-never",
        ),
        E = {
            startColor: m,
            handleRest: (e) => {
                e.finished && (null == l || l());
            },
            endColor: A,
            targetBorderColor: f,
            targetColor: g,
            animationDelay: d,
        },
        x = i.useRef(E);
    return (
        i.useEffect(() => {
            x.current = E;
        }),
        i.useEffect(() => {
            let {
                    startColor: e,
                    handleRest: t,
                    endColor: n,
                    targetBorderColor: r,
                    targetColor: i,
                    animationDelay: l,
                } = x.current,
                { useReducedMotion: s } = u.A,
                a = 200 * !s;
            b({
                reset: !0,
                immediate: !1,
                to: {
                    backgroundColor: e,
                    borderColor: e,
                },
                config: {
                    duration: a,
                    easing: o.A.Easing.ease,
                },
            }),
                b({
                    delay: l,
                    immediate: s,
                    to: [
                        {
                            backgroundColor: i,
                            borderColor: r,
                        },
                    ],
                    config: {
                        duration: a,
                        easing: o.A.Easing.ease,
                    },
                }),
                b({
                    delay: l + 200 + 200,
                    immediate: s,
                    to: [
                        {
                            backgroundColor: n,
                            borderColor: n,
                        },
                    ],
                    config: {
                        duration: a,
                        easing: o.A.Easing.ease,
                    },
                    onRest: t,
                });
        }, [b]),
        (0, r.jsx)(a.animated.div, {
            style: h,
            className: s()(p.h, n),
            children: t,
        })
    );
}

function g(e) {
    let { children: t, scrollPosition: n, animationDelay: l } = e,
        s = (0, d.bG)([_.A], () => _.A.getScrollPosition() === n),
        [a, o] = i.useState(!1);
    return (i.useEffect(() => {
        s && o(!0);
    }, [s]),
    a)
        ? (0, r.jsx)(m, {
              animationDelay: l,
              onFlashEnd: () => o(!1),
              children: t,
          })
        : t;
}
