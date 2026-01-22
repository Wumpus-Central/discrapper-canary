n.d(t, {
    Ct: () => E,
    oO: () => b,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(397927),
    l = n(57978),
    c = n(964003),
    u = n(985018),
    d = n(157895),
    f = n(847652);

function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function _(e) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}

function h(e, t) {
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

function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function g(e) {
    let {
            className: t,
            boxLayout: n,
            title: i,
            shouldLoadVideo: a,
            isReducedMotion: u,
            includeSideGradient: p = !1,
            startLeftAligned: h = !1,
            enablePremiumBrandRefreshDesign: g,
        } = e,
        E = g ? f : d;
    return (0, r.jsxs)("div", {
        className: s()(E.boxBackdrop, t),
        children: [
            (0, r.jsx)(o.Heading, {
                className: E.bentoSectionHeader,
                variant: "display-md",
                color: "text-strong",
                children: i,
            }),
            (0, r.jsx)("div", {
                className: E.bentoBoxesGrid,
                children: n.map((e, t) => {
                    let n;
                    switch (e.length) {
                        case 3:
                            n = l.A0.SMALL;
                            break;
                        case 2:
                            n = l.A0.MEDIUM;
                            break;
                        default:
                            n = l.A0.LARGE;
                    }
                    return (0, r.jsx)(r.Fragment, {
                        children: e.map((e) =>
                            (0, r.jsx)(
                                c.A,
                                m(
                                    _(
                                        {
                                            index: t + +!!h,
                                        },
                                        e,
                                    ),
                                    {
                                        size: n,
                                        shouldLoadVideo: a,
                                        isReducedMotion: u,
                                    },
                                ),
                                e.name,
                            ),
                        ),
                    });
                }),
            }),
            p &&
                (0, r.jsx)("div", {
                    className: d.bentoSideGradient,
                }),
        ],
    });
}
let E = i.memo(function (e) {
        let { whatsNewBoxes: t } = (0, l.Ay)();
        return (0, r.jsx)(
            g,
            _(
                {
                    boxLayout: t,
                    title: u.intl.string(u.t.LRmNAl),
                    startLeftAligned: e.enablePremiumBrandRefreshDesign,
                },
                e,
            ),
        );
    }),
    b = i.memo(function (e) {
        let { bestOfBoxes: t } = (0, l.Ay)();
        return (0, r.jsx)(
            g,
            _(
                {
                    boxLayout: t,
                    title: u.intl.string(u.t.EnzW2H),
                    includeSideGradient: !e.enablePremiumBrandRefreshDesign,
                    startLeftAligned: !0,
                },
                e,
            ),
        );
    });
