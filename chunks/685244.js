l.d(t, { Z: () => h }), l(47120);
var n = l(200651),
    a = l(192379),
    i = l(498607),
    o = l.n(i),
    s = l(642128),
    r = l(748780),
    c = l(692547),
    C = l(481060),
    d = l(110924);
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
        x = (0, d.Z)(t),
        [{ spring: g }, H] = (0, C.q_F)(() => ({ spring: 0 }), 'animate-always'),
        b = (0, C.dQu)(c.Z.colors.BACKGROUND_PRIMARY).hex(),
        p = (0, C.dQu)(c.Z.colors.CONTROL_BRAND_FOREGROUND).hex(),
        _ = a.useCallback(() => {
            H({
                spring: 1,
                config: u
            }),
                H({
                    spring: 0,
                    config: m,
                    delay: 300
                });
        }, [H]);
    a.useEffect(() => {
        !(null == t || null == x || i(t, x)) && _();
    }, [_, t, x, i]);
    let j =
            null == g
                ? void 0
                : g.to({
                      range: [0, 1],
                      output: [''.concat(b, '00'), ''.concat(p, '27')]
                  }),
        f =
            null != r
                ? {
                      ...r,
                      backgroundColor: j
                  }
                : { backgroundColor: j };
    return (0, n.jsx)(s.animated.tr, {
        ...h,
        style: f,
        children: l
    });
}
