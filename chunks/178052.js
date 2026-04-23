l.d(t, { A: () => x });
var n = l(627968),
    i = l(64700),
    a = l(33851),
    s = l.n(a),
    C = l(419354),
    r = l(615300),
    o = l(827734),
    d = l(717421),
    c = l(602853),
    u = l(475743);
let m = { duration: 100, easing: r.A.Easing.inOut(r.A.Easing.back()), clamp: !0 },
    h = { duration: 2e3, easing: r.A.Easing.quad, clamp: !0 };
function x(e) {
    let { value: t, children: l, equalityFn: a = s(), style: r, ...x } = e,
        g = (0, u.A)(t),
        [{ spring: H }, _] = (0, d.z)(() => ({ spring: 0 }), "animate-always"),
        p = (0, c.r)(o.A.colors.BACKGROUND_BASE_LOW).hex(),
        f = (0, c.r)(o.A.colors.CONTROL_BRAND_FOREGROUND).hex(),
        j = i.useCallback(() => {
            _({ spring: 1, config: m }), _({ spring: 0, config: h, delay: 300 });
        }, [_]);
    i.useEffect(() => {
        null == t || null == g || a(t, g) || j();
    }, [j, t, g, a]);
    let b = H?.to({ range: [0, 1], output: [`${p}00`, `${f}27`] }),
        A = null != r ? { ...r, backgroundColor: b } : { backgroundColor: b };
    return (0, n.jsx)(C.animated.tr, { ...x, style: A, children: l });
}
