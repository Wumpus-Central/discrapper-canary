n.d(t, { Ct: () => A, oO: () => g });
var i = n(627968),
    s = n(64700),
    a = n(503698),
    l = n.n(a),
    r = n(397927),
    o = n(750338),
    c = n(23003),
    d = n(985018),
    u = n(498868),
    _ = n(150605);
function m(e) {
    let {
            className: t,
            boxLayout: n,
            title: s,
            shouldLoadVideo: a,
            isReducedMotion: d,
            includeSideGradient: m = !1,
            startLeftAligned: A = !1,
            enablePremiumBrandRefreshDesign: g,
        } = e,
        h = g ? _ : u;
    return (0, i.jsxs)("div", {
        className: l()(h.boxBackdrop, t),
        children: [
            (0, i.jsx)(r.Heading, {
                className: h.bentoSectionHeader,
                variant: "display-md",
                color: "text-strong",
                children: s,
            }),
            (0, i.jsx)("div", {
                className: h.bentoBoxesGrid,
                children: n.map((e, t) => {
                    let n;
                    switch (e.length) {
                        case 3:
                            n = c.A0.SMALL;
                            break;
                        case 2:
                            n = c.A0.MEDIUM;
                            break;
                        default:
                            n = c.A0.LARGE;
                    }
                    return (0, i.jsx)(i.Fragment, {
                        children: e.map((e) =>
                            (0, i.jsx)(
                                o.A,
                                { index: t + +!!A, ...e, size: n, shouldLoadVideo: a, isReducedMotion: d },
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
        let { whatsNewBoxes: t } = (0, c.Ay)();
        return (0, i.jsx)(m, {
            boxLayout: t,
            title: d.intl.string(d.t.LRmNAl),
            startLeftAligned: e.enablePremiumBrandRefreshDesign,
            ...e,
        });
    }),
    g = s.memo(function (e) {
        let { bestOfBoxes: t } = (0, c.Ay)();
        return (0, i.jsx)(m, {
            boxLayout: t,
            title: d.intl.string(d.t.EnzW2H),
            includeSideGradient: !e.enablePremiumBrandRefreshDesign,
            startLeftAligned: !0,
            ...e,
        });
    });
