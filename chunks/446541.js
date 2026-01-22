n.d(t, { A: () => g }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(432022),
    l = n(615300),
    c = n(397927),
    u = n(311907),
    d = n(775602),
    f = n(628965),
    p = n(480357);
let _ = 200,
    h = 200;
function m(e) {
    let { children: t, className: n, onFlashEnd: a, animationDelay: u = 500 } = e,
        f = c.LU0.colors.TEXT_LINK,
        m = (0, c.rdh)(f).spring({ opacity: 0 }),
        g = (0, c.rdh)(f).spring({ opacity: 0.1 }),
        E = (0, c.rdh)(f).spring({ opacity: 0 }),
        b = (0, c.rdh)(f).spring({ opacity: 1 }),
        y = (e) => {
            e.finished && (null == a || a());
        },
        [O, A] = (0, c.zhh)(
            () => ({
                from: {
                    backgroundColor: m,
                    borderColor: m,
                },
            }),
            "animate-never",
        ),
        v = {
            startColor: m,
            handleRest: y,
            endColor: E,
            targetBorderColor: b,
            targetColor: g,
            animationDelay: u,
        },
        S = i.useRef(v);
    return (
        i.useEffect(() => {
            S.current = v;
        }),
        i.useEffect(() => {
            let {
                    startColor: e,
                    handleRest: t,
                    endColor: n,
                    targetBorderColor: r,
                    targetColor: i,
                    animationDelay: a,
                } = S.current,
                { useReducedMotion: s } = d.A,
                o = s ? 0 : _,
                c = a + _ + h;
            A({
                reset: !0,
                immediate: !1,
                to: {
                    backgroundColor: e,
                    borderColor: e,
                },
                config: {
                    duration: o,
                    easing: l.A.Easing.ease,
                },
            }),
                A({
                    delay: a,
                    immediate: s,
                    to: [
                        {
                            backgroundColor: i,
                            borderColor: r,
                        },
                    ],
                    config: {
                        duration: o,
                        easing: l.A.Easing.ease,
                    },
                }),
                A({
                    delay: c,
                    immediate: s,
                    to: [
                        {
                            backgroundColor: n,
                            borderColor: n,
                        },
                    ],
                    config: {
                        duration: o,
                        easing: l.A.Easing.ease,
                    },
                    onRest: t,
                });
        }, [A]),
        (0, r.jsx)(o.animated.div, {
            style: O,
            className: s()(p.h, n),
            children: t,
        })
    );
}
function g(e) {
    let { children: t, scrollPosition: n, animationDelay: a } = e,
        s = (0, u.bG)([f.A], () => f.A.getScrollPosition() === n),
        [o, l] = i.useState(!1);
    return (i.useEffect(() => {
        s && l(!0);
    }, [s]),
    o)
        ? (0, r.jsx)(m, {
              animationDelay: a,
              onFlashEnd: () => l(!1),
              children: t,
          })
        : t;
}
