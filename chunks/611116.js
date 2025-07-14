n.d(t, {
    G_: () => f,
    g: () => h
});
var i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    l = n(481060),
    o = n(572995),
    c = n(42373),
    d = n(388032),
    u = n(888723),
    m = n(790895);
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                ((i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i));
            }));
    }
    return e;
}
function g(e) {
    let { className: t, boxLayout: n, title: r, shouldLoadVideo: s, isReducedMotion: d, includeSideGradient: g = !1, startLeftAligned: h = !1, enablePremiumBrandRefreshDesign: f } = e,
        b = f ? m : u;
    return (0, i.jsxs)('div', {
        className: a()(b.boxBackdrop, t),
        children: [
            (0, i.jsx)(l.X6q, {
                className: b.bentoSectionHeader,
                variant: 'display-md',
                color: 'header-primary',
                children: r
            }),
            (0, i.jsx)('div', {
                className: b.bentoBoxesGrid,
                children: n.map((e, t) => {
                    let n;
                    switch (e.length) {
                        case 3:
                            n = o.y$.SMALL;
                            break;
                        case 2:
                            n = o.y$.MEDIUM;
                            break;
                        default:
                            n = o.y$.LARGE;
                    }
                    return (0, i.jsx)(i.Fragment, {
                        children: e.map((e) => {
                            var r, a;
                            return (0, i.jsx)(
                                c.Z,
                                ((r = p({ index: t + +!!h }, e)),
                                (a = a =
                                    {
                                        size: n,
                                        shouldLoadVideo: s,
                                        isReducedMotion: d,
                                        enablePremiumBrandRefreshDesign: f
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var i = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, i);
                                          }
                                          return n;
                                      })(Object(a)).forEach(function (e) {
                                          Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(a, e));
                                      }),
                                r),
                                e.name
                            );
                        })
                    });
                })
            }),
            g && (0, i.jsx)('div', { className: u.bentoSideGradient })
        ]
    });
}
let h = r.memo(function (e) {
        let { whatsNewBoxes: t } = (0, o.ZP)();
        return (0, i.jsx)(
            g,
            p(
                {
                    boxLayout: t,
                    title: d.intl.string(d.t.LRmNAg),
                    startLeftAligned: e.enablePremiumBrandRefreshDesign
                },
                e
            )
        );
    }),
    f = r.memo(function (e) {
        let { bestOfBoxes: t } = (0, o.ZP)();
        return (0, i.jsx)(
            g,
            p(
                {
                    boxLayout: t,
                    title: d.intl.string(d.t.EnzW2N),
                    includeSideGradient: !e.enablePremiumBrandRefreshDesign,
                    startLeftAligned: !0
                },
                e
            )
        );
    });
