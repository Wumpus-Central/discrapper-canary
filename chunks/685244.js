l.d(t, { Z: () => h }), l(47120);
var n = l(200651),
    a = l(192379),
    i = l(498607),
    o = l.n(i),
    s = l(642128),
    r = l(748780),
    c = l(692547),
    d = l(481060),
    C = l(110924);
let u = {
        duration: 100,
        easing: r.Z.Easing.inOut(r.Z.Easing.back()),
        clamp: !0
    },
    m = {
        duration: 2000,
        easing: r.Z.Easing.quad,
        clamp: !0
    };
function h(e) {
    let { value: t, children: l, equalityFn: i = o(), style: r, ...h } = e,
        x = (0, C.Z)(t),
        [{ spring: g }, p] = (0, d.q_F)(() => ({ spring: 0 }), 'animate-always'),
        _ = (0, d.dQu)(c.Z.colors.BACKGROUND_PRIMARY).hex(),
        b = (0, d.dQu)(c.Z.colors.CONTROL_BRAND_FOREGROUND).hex(),
        f = a.useCallback(() => {
            p({
                spring: 1,
                config: u
            }),
                p({
                    spring: 0,
                    config: m,
                    delay: 300
                });
        }, [p]);
    a.useEffect(() => {
        !(null == t || null == x || i(t, x)) && f();
    }, [f, t, x, i]);
    let j =
            null == g
                ? void 0
                : g.to({
                      range: [0, 1],
                      output: [''.concat(_, '00'), ''.concat(b, '27')]
                  }),
        H =
            null != r
                ? {
                      ...r,
                      backgroundColor: j
                  }
                : { backgroundColor: j };
    return (0, n.jsx)(s.animated.tr, {
        ...h,
        style: H,
        children: l
    });
}
