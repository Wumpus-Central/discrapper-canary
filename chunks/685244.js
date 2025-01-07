n.d(t, {
    Z: function () {
        return h;
    }
}),
    n(47120);
var l = n(200651),
    o = n(192379),
    i = n(498607),
    a = n.n(i),
    r = n(666912),
    s = n(748780),
    c = n(692547),
    C = n(481060),
    d = n(110924);
let u = {
        duration: 100,
        easing: s.Z.Easing.inOut(s.Z.Easing.back()),
        clamp: !0
    },
    m = {
        duration: 2000,
        easing: s.Z.Easing.quad,
        clamp: !0
    };
function h(e) {
    let { value: t, children: n, equalityFn: i = a(), style: s, ...h } = e,
        x = (0, d.Z)(t),
        [{ spring: b }, f] = (0, C.useSpring)(() => ({ spring: 0 }), 'animate-always'),
        g = (0, C.useToken)(c.Z.colors.BACKGROUND_PRIMARY).hex(),
        p = (0, C.useToken)(c.Z.colors.CONTROL_BRAND_FOREGROUND).hex(),
        H = o.useCallback(() => {
            f({
                spring: 1,
                config: u
            }),
                f({
                    spring: 0,
                    config: m,
                    delay: 300
                });
        }, [f]);
    o.useEffect(() => {
        if (!(null == t || null == x || i(t, x))) H();
    }, [H, t, x, i]);
    let j =
            null == b
                ? void 0
                : b.to({
                      range: [0, 1],
                      output: [''.concat(g, '00'), ''.concat(p, '27')]
                  }),
        v =
            null != s
                ? {
                      ...s,
                      backgroundColor: j
                  }
                : { backgroundColor: j };
    return (0, l.jsx)(r.animated.tr, {
        ...h,
        style: v,
        children: n
    });
}
