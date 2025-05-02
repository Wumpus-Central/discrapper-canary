n.d(t, { Z: () => g });
var i = n(200651),
    r = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(481060),
    o = n(572995),
    c = n(42373),
    d = n(388032),
    u = n(888723);
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function p(e) {
    let { className: t, boxes: n, compactBoxes: r, title: s, shouldLoadVideo: o, isReducedMotion: d } = e;
    return (0, i.jsxs)('div', {
        className: l()(u.boxBackdrop, t),
        children: [
            (0, i.jsx)(a.X6q, {
                className: u.bentoHeader,
                variant: 'display-md',
                color: 'header-primary',
                children: s
            }),
            n.map((e, t) =>
                (0, i.jsx)(
                    c.Z,
                    m(
                        {
                            shouldLoadVideo: o,
                            isReducedMotion: d,
                            index: t
                        },
                        e
                    ),
                    e.name
                )
            ),
            null != r &&
                (0, i.jsxs)('div', {
                    className: u.compactBoxOuterContainer,
                    children: [
                        r.map((e, t) =>
                            (0, i.jsx)(
                                c.Z,
                                m(
                                    {
                                        shouldLoadVideo: o,
                                        isReducedMotion: d,
                                        index: t
                                    },
                                    e
                                ),
                                e.name
                            )
                        ),
                        (0, i.jsx)('div', { className: u.bentoSideGradient })
                    ]
                })
        ]
    });
}
let g = r.memo(function (e) {
    let { whatsNewBoxes: t, bestOfBoxes: n, compactBestOfBoxes: r } = (0, o.Z)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(
                p,
                m(
                    {
                        boxes: Object.values(t),
                        title: d.intl.string(d.t.LRmNAg)
                    },
                    e
                )
            ),
            (0, i.jsx)(
                p,
                m(
                    {
                        boxes: Object.values(n),
                        compactBoxes: Object.values(r),
                        title: d.intl.string(d.t.EnzW2N)
                    },
                    e
                )
            )
        ]
    });
});
