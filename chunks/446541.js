n.d(t, { A: () => g });
var i = n(627968),
    s = n(64700),
    r = n(503698),
    a = n.n(r),
    l = n(92674),
    o = n(615300),
    c = n(397927),
    d = n(311907),
    u = n(775602),
    _ = n(628965),
    m = n(480357);
function A(e) {
    let { children: t, className: n, onFlashEnd: r, animationDelay: d = 500 } = e,
        _ = c.LU0.colors.TEXT_LINK,
        A = (0, c.rdh)(_).spring({ opacity: 0 }),
        g = (0, c.rdh)(_).spring({ opacity: 0.1 }),
        E = (0, c.rdh)(_).spring({ opacity: 0 }),
        h = (0, c.rdh)(_).spring({ opacity: 1 }),
        [p, C] = (0, c.zhh)(() => ({ from: { backgroundColor: A, borderColor: A } }), "animate-never"),
        x = {
            startColor: A,
            handleRest: (e) => {
                e.finished && r?.();
            },
            endColor: E,
            targetBorderColor: h,
            targetColor: g,
            animationDelay: d,
        },
        T = s.useRef(x);
    return (
        s.useEffect(() => {
            T.current = x;
        }),
        s.useEffect(() => {
            let {
                    startColor: e,
                    handleRest: t,
                    endColor: n,
                    targetBorderColor: i,
                    targetColor: s,
                    animationDelay: r,
                } = T.current,
                { useReducedMotion: a } = u.A,
                l = 200 * !a;
            C({
                reset: !0,
                immediate: !1,
                to: { backgroundColor: e, borderColor: e },
                config: { duration: l, easing: o.A.Easing.ease },
            }),
                C({
                    delay: r,
                    immediate: a,
                    to: [{ backgroundColor: s, borderColor: i }],
                    config: { duration: l, easing: o.A.Easing.ease },
                }),
                C({
                    delay: r + 200 + 200,
                    immediate: a,
                    to: [{ backgroundColor: n, borderColor: n }],
                    config: { duration: l, easing: o.A.Easing.ease },
                    onRest: t,
                });
        }, [C]),
        (0, i.jsx)(l.animated.div, { style: p, className: a()(m.h, n), children: t })
    );
}
function g(e) {
    let { children: t, scrollPosition: n, animationDelay: r } = e,
        a = (0, d.bG)([_.A], () => _.A.getScrollPosition() === n),
        [l, o] = s.useState(!1);
    return (s.useEffect(() => {
        a && o(!0);
    }, [a]),
    l)
        ? (0, i.jsx)(A, { animationDelay: r, onFlashEnd: () => o(!1), children: t })
        : t;
}
