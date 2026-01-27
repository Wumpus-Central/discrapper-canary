n.d(t, {
    Ct: () => g,
    oO: () => A,
});
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(397927),
    o = n(57978),
    c = n(964003),
    d = n(985018),
    u = n(157895),
    _ = n(847652);

function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}

function m(e) {
    let {
            className: t,
            boxLayout: n,
            title: i,
            shouldLoadVideo: l,
            isReducedMotion: d,
            includeSideGradient: m = !1,
            startLeftAligned: g = !1,
            enablePremiumBrandRefreshDesign: A,
        } = e,
        f = A ? _ : u;
    return (0, r.jsxs)("div", {
        className: s()(f.boxBackdrop, t),
        children: [
            (0, r.jsx)(a.Heading, {
                className: f.bentoSectionHeader,
                variant: "display-md",
                color: "text-strong",
                children: i,
            }),
            (0, r.jsx)("div", {
                className: f.bentoBoxesGrid,
                children: n.map((e, t) => {
                    let n;
                    switch (e.length) {
                        case 3:
                            n = o.A0.SMALL;
                            break;
                        case 2:
                            n = o.A0.MEDIUM;
                            break;
                        default:
                            n = o.A0.LARGE;
                    }
                    return (0, r.jsx)(r.Fragment, {
                        children: e.map((e) => {
                            var i, s;
                            return (0, r.jsx)(
                                c.A,
                                ((i = p(
                                    {
                                        index: t + +!!g,
                                    },
                                    e,
                                )),
                                (s = s =
                                    {
                                        size: n,
                                        shouldLoadVideo: l,
                                        isReducedMotion: d,
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(s))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var r = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, r);
                                          }
                                          return n;
                                      })(Object(s)).forEach(function (e) {
                                          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(s, e));
                                      }),
                                i),
                                e.name,
                            );
                        }),
                    });
                }),
            }),
            m &&
                (0, r.jsx)("div", {
                    className: u.bentoSideGradient,
                }),
        ],
    });
}
let g = i.memo(function (e) {
        let { whatsNewBoxes: t } = (0, o.Ay)();
        return (0, r.jsx)(
            m,
            p(
                {
                    boxLayout: t,
                    title: d.intl.string(d.t.LRmNAl),
                    startLeftAligned: e.enablePremiumBrandRefreshDesign,
                },
                e,
            ),
        );
    }),
    A = i.memo(function (e) {
        let { bestOfBoxes: t } = (0, o.Ay)();
        return (0, r.jsx)(
            m,
            p(
                {
                    boxLayout: t,
                    title: d.intl.string(d.t.EnzW2H),
                    includeSideGradient: !e.enablePremiumBrandRefreshDesign,
                    startLeftAligned: !0,
                },
                e,
            ),
        );
    });
