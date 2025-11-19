n.d(t, {
    G_: () => b,
    g: () => E,
});
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(572995),
    c = n(42373),
    u = n(388032),
    d = n(885257),
    f = n(411200);
function _(e, t, n) {
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
                _(e, t, n[t]);
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
            includeSideGradient: _ = !1,
            startLeftAligned: h = !1,
            enablePremiumBrandRefreshDesign: g,
        } = e,
        E = g ? f : d;
    return (0, r.jsxs)("div", {
        className: o()(E.boxBackdrop, t),
        children: [
            (0, r.jsx)(s.Heading, {
                className: E.bentoSectionHeader,
                variant: "display-md",
                color: "header-primary",
                children: i,
            }),
            (0, r.jsx)("div", {
                className: E.bentoBoxesGrid,
                children: n.map((e, t) => {
                    let n;
                    switch (e.length) {
                        case 3:
                            n = l.y$.SMALL;
                            break;
                        case 2:
                            n = l.y$.MEDIUM;
                            break;
                        default:
                            n = l.y$.LARGE;
                    }
                    return (0, r.jsx)(r.Fragment, {
                        children: e.map((e) =>
                            (0, r.jsx)(
                                c.Z,
                                m(p({ index: t + +!!h }, e), {
                                    size: n,
                                    shouldLoadVideo: a,
                                    isReducedMotion: u,
                                    enablePremiumBrandRefreshDesign: g,
                                }),
                                e.name,
                            ),
                        ),
                    });
                }),
            }),
            _ && (0, r.jsx)("div", { className: d.bentoSideGradient }),
        ],
    });
}
let E = i.memo(function (e) {
        let { whatsNewBoxes: t } = (0, l.ZP)();
        return (0, r.jsx)(
            g,
            p(
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
        let { bestOfBoxes: t } = (0, l.ZP)();
        return (0, r.jsx)(
            g,
            p(
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
