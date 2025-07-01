n.d(t, { Z: () => p });
var i = n(255367),
    r = n(73800),
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
    let { className: t, boxLayout: n, title: r, shouldLoadVideo: s, isReducedMotion: d, includeSideGradient: g = !1, startLeftAligned: p = !1 } = e;
    return (0, i.jsxs)('div', {
        className: l()(u.boxBackdrop, t),
        children: [
            (0, i.jsx)(a.X6q, {
                className: u.bentoHeader,
                variant: 'display-md',
                color: 'header-primary',
                children: r
            }),
            (0, i.jsx)('div', {
                className: u.bentoBoxesGrid,
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
                            var r, l;
                            return (0, i.jsx)(
                                c.Z,
                                ((r = m({ index: t + +!!p }, e)),
                                (l = l =
                                    {
                                        size: n,
                                        shouldLoadVideo: s,
                                        isReducedMotion: d
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var i = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, i);
                                          }
                                          return n;
                                      })(Object(l)).forEach(function (e) {
                                          Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e));
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
let p = r.memo(function (e) {
    let { whatsNewBoxes: t, bestOfBoxes: n } = (0, o.ZP)();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(
                g,
                m(
                    {
                        boxLayout: t,
                        title: d.intl.string(d.t.LRmNAg)
                    },
                    e
                )
            ),
            (0, i.jsx)(
                g,
                m(
                    {
                        boxLayout: n,
                        title: d.intl.string(d.t.EnzW2N),
                        includeSideGradient: !0,
                        startLeftAligned: !0
                    },
                    e
                )
            )
        ]
    });
});
