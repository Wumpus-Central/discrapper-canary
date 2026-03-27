l.d(t, { A: () => x });
var n = l(627968),
    i = l(64700),
    s = l(33851),
    a = l.n(s),
    r = l(4208),
    C = l(615300),
    o = l(827734),
    d = l(397927),
    c = l(475743);
let u = { duration: 100, easing: C.A.Easing.inOut(C.A.Easing.back()), clamp: !0 },
    m = { duration: 2e3, easing: C.A.Easing.quad, clamp: !0 };
function x(e) {
    let { value: t, children: l, equalityFn: s = a(), style: C, ...x } = e,
        h = (0, c.A)(t),
        [{ spring: g }, H] = (0, d.zhh)(() => ({ spring: 0 }), "animate-always"),
        j = (0, d.rdh)(o.A.colors.BACKGROUND_BASE_LOW).hex(),
        _ = (0, d.rdh)(o.A.colors.CONTROL_BRAND_FOREGROUND).hex(),
        f = i.useCallback(() => {
            H({ spring: 1, config: u }), H({ spring: 0, config: m, delay: 300 });
        }, [H]);
    i.useEffect(() => {
        null == t || null == h || s(t, h) || f();
    }, [f, t, h, s]);
    let p = g?.to({ range: [0, 1], output: [`${j}00`, `${_}27`] }),
        b = null != C ? { ...C, backgroundColor: p } : { backgroundColor: p };
    return (0, n.jsx)(r.animated.tr, { ...x, style: b, children: l });
}
