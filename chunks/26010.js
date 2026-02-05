n.d(t, { Ct: () => A, oO: () => g });
var i = n(627968),
    s = n(64700),
    r = n(503698),
    a = n.n(r),
    l = n(397927),
    o = n(57978),
    c = n(964003),
    d = n(985018),
    u = n(157895),
    _ = n(847652);
function m(e) {
    let {
            className: t,
            boxLayout: n,
            title: s,
            shouldLoadVideo: r,
            isReducedMotion: d,
            includeSideGradient: m = !1,
            startLeftAligned: A = !1,
            enablePremiumBrandRefreshDesign: g,
        } = e,
        E = g ? _ : u;
    return (0, i.jsxs)("div", {
        className: a()(E.boxBackdrop, t),
        children: [
            (0, i.jsx)(l.Heading, {
                className: E.bentoSectionHeader,
                variant: "display-md",
                color: "text-strong",
                children: s,
            }),
            (0, i.jsx)("div", {
                className: E.bentoBoxesGrid,
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
                    return (0, i.jsx)(i.Fragment, {
                        children: e.map((e) =>
                            (0, i.jsx)(
                                c.A,
                                { index: t + +!!A, ...e, size: n, shouldLoadVideo: r, isReducedMotion: d },
                                e.name,
                            ),
                        ),
                    });
                }),
            }),
            m && (0, i.jsx)("div", { className: u.bentoSideGradient }),
        ],
    });
}
let A = s.memo(function (e) {
        let { whatsNewBoxes: t } = (0, o.Ay)();
        return (0, i.jsx)(m, {
            boxLayout: t,
            title: d.intl.string(d.t.LRmNAl),
            startLeftAligned: e.enablePremiumBrandRefreshDesign,
            ...e,
        });
    }),
    g = s.memo(function (e) {
        let { bestOfBoxes: t } = (0, o.Ay)();
        return (0, i.jsx)(m, {
            boxLayout: t,
            title: d.intl.string(d.t.EnzW2H),
            includeSideGradient: !e.enablePremiumBrandRefreshDesign,
            startLeftAligned: !0,
            ...e,
        });
    });
