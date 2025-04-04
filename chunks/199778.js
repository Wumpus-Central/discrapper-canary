n.d(t, { Z: () => O });
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(442837),
    s = n(481060),
    l = n(927359),
    c = n(975298),
    u = n(125529),
    d = n(124570),
    f = n(501862),
    _ = n(594174),
    p = n(63063),
    h = n(981631),
    m = n(388032),
    g = n(93015);
function E(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                E(e, t, n[t]);
            });
    }
    return e;
}
function y(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function O(e) {
    let { hide: t, pillClassName: n, containerClassName: i } = e,
        { fractionalState: E, endsAt: y } = (0, c.Z)(),
        O = (0, a.e7)([_.default], () => _.default.getCurrentUser()),
        I = (0, l.Z)(y, l.a.LONG_TIME_LEFT);
    if (!0 === t || !(0, d.y)('guild_boosting_fractional_premium_pill', O, E)) return null;
    let S = m.NW.format(m.t['4RgA6O'], { helpCenterLink: p.Z.getArticleURL(h.BhN.FRACTIONAL_PREMIUM_ABOUT) });
    return (0, r.jsx)(u.Z, {
        text: S,
        'aria-label': null == S ? void 0 : S.toString(),
        tooltipClassName: g.tooltip,
        className: o()(g.unavailableCounterContainer, i),
        children: (e) =>
            (0, r.jsxs)(
                'div',
                v(b({}, e), {
                    className: o()(g.unavailableCounterPill, n),
                    children: [
                        (0, r.jsx)(s.Text, {
                            variant: 'text-sm/bold',
                            className: g.unavailableCounterPillText,
                            children: m.NW.string(m.t['5nrJDA']).toUpperCase()
                        }),
                        (0, r.jsx)(f.Z, {
                            countdownText: I,
                            className: g.countDownText
                        })
                    ]
                })
            )
    });
}
