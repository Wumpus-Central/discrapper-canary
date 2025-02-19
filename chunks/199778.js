n.d(t, { Z: () => b });
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(481060),
    s = n(927359),
    l = n(975298),
    c = n(125529),
    u = n(501862),
    d = n(63063),
    f = n(981631),
    p = n(474936),
    _ = n(388032),
    h = n(440903);
function m(e, t, n) {
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
function g(e) {
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
                m(e, t, n[t]);
            });
    }
    return e;
}
function E(e, t) {
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
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function b(e) {
    let { hide: t, pillClassName: n, containerClassName: i, isInReverseTrial: m } = e,
        { fractionalState: E, endsAt: b } = (0, l.Z)(),
        y = (0, s.Z)(b, s.a.LONG_TIME_LEFT);
    if (!0 === t || E === p.a$.NONE) return null;
    let O = m ? void 0 : _.NW.format(_.t['4RgA6O'], { helpCenterLink: d.Z.getArticleURL(f.BhN.FRACTIONAL_PREMIUM_ABOUT) });
    return (0, r.jsx)(c.Z, {
        text: O,
        'aria-label': null == O ? void 0 : O.toString(),
        tooltipClassName: h.tooltip,
        className: o()(h.unavailableCounterContainer, i),
        children: (e) =>
            (0, r.jsxs)(
                'div',
                v(g({}, e), {
                    className: o()(h.unavailableCounterPill, n),
                    children: [
                        (0, r.jsx)(a.Text, {
                            variant: 'text-sm/bold',
                            className: h.unavailableCounterPillText,
                            children: _.NW.string(_.t['5nrJDA']).toUpperCase()
                        }),
                        !m &&
                            (0, r.jsx)(u.Z, {
                                countdownText: y,
                                className: h.countDownText
                            })
                    ]
                })
            )
    });
}
