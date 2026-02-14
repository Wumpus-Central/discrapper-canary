l.d(t, { A: () => x });
var n = l(627968),
    i = l(64700),
    a = l(33851),
    s = l.n(a),
    r = l(522160),
    o = l(615300),
    C = l(827734),
    d = l(397927),
    c = l(475743);
let u = { duration: 100, easing: o.A.Easing.inOut(o.A.Easing.back()), clamp: !0 },
    m = { duration: 2e3, easing: o.A.Easing.quad, clamp: !0 };
function x(e) {
    let { value: t, children: l, equalityFn: a = s(), style: o, ...x } = e,
        h = (0, c.A)(t),
        [{ spring: g }, _] = (0, d.zhh)(() => ({ spring: 0 }), "animate-always"),
        H = (0, d.rdh)(C.A.colors.BACKGROUND_BASE_LOW).hex(),
        p = (0, d.rdh)(C.A.colors.CONTROL_BRAND_FOREGROUND).hex(),
        f = i.useCallback(() => {
            _({ spring: 1, config: u }), _({ spring: 0, config: m, delay: 300 });
        }, [_]);
    i.useEffect(() => {
        null == t || null == h || a(t, h) || f();
    }, [f, t, h, a]);
    let j = g?.to({ range: [0, 1], output: [`${H}00`, `${p}27`] }),
        b = null != o ? { ...o, backgroundColor: j } : { backgroundColor: j };
    return (0, n.jsx)(r.animated.tr, { ...x, style: b, children: l });
}
