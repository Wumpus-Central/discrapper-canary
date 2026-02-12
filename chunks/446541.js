n.d(t, { A: () => g });
var i = n(627968),
    s = n(64700),
    a = n(503698),
    l = n.n(a),
    r = n(40153),
    o = n(615300),
    c = n(397927),
    d = n(311907),
    u = n(775602),
    _ = n(628965),
    m = n(480357);
function A(e) {
    let { children: t, className: n, onFlashEnd: a, animationDelay: d = 500 } = e,
        _ = c.LU0.colors.TEXT_LINK,
        A = (0, c.rdh)(_).spring({ opacity: 0 }),
        g = (0, c.rdh)(_).spring({ opacity: 0.1 }),
        h = (0, c.rdh)(_).spring({ opacity: 0 }),
        x = (0, c.rdh)(_).spring({ opacity: 1 }),
        [p, E] = (0, c.zhh)(() => ({ from: { backgroundColor: A, borderColor: A } }), "animate-never"),
        C = {
            startColor: A,
            handleRest: (e) => {
                e.finished && a?.();
            },
            endColor: h,
            targetBorderColor: x,
            targetColor: g,
            animationDelay: d,
        },
        T = s.useRef(C);
    return (
        s.useEffect(() => {
            T.current = C;
        }),
        s.useEffect(() => {
            let {
                    startColor: e,
                    handleRest: t,
                    endColor: n,
                    targetBorderColor: i,
                    targetColor: s,
                    animationDelay: a,
                } = T.current,
                { useReducedMotion: l } = u.A,
                r = 200 * !l;
            E({
                reset: !0,
                immediate: !1,
                to: { backgroundColor: e, borderColor: e },
                config: { duration: r, easing: o.A.Easing.ease },
            }),
                E({
                    delay: a,
                    immediate: l,
                    to: [{ backgroundColor: s, borderColor: i }],
                    config: { duration: r, easing: o.A.Easing.ease },
                }),
                E({
                    delay: a + 200 + 200,
                    immediate: l,
                    to: [{ backgroundColor: n, borderColor: n }],
                    config: { duration: r, easing: o.A.Easing.ease },
                    onRest: t,
                });
        }, [E]),
        (0, i.jsx)(r.animated.div, { style: p, className: l()(m.h, n), children: t })
    );
}
function g(e) {
    let { children: t, scrollPosition: n, animationDelay: a } = e,
        l = (0, d.bG)([_.A], () => _.A.getScrollPosition() === n),
        [r, o] = s.useState(!1);
    return (s.useEffect(() => {
        l && o(!0);
    }, [l]),
    r)
        ? (0, i.jsx)(A, { animationDelay: a, onFlashEnd: () => o(!1), children: t })
        : t;
}
