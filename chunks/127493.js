n.d(t, { Ct: () => _, oO: () => x });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(397927),
    o = n(31502),
    d = n(750338),
    c = n(23003),
    u = n(985018),
    m = n(856556);
function g(e) {
    let {
        className: t,
        boxLayout: n,
        title: s,
        shouldLoadVideo: l,
        isReducedMotion: o,
        startLeftAligned: u = !1,
        highlightBento: g,
    } = e;
    return (0, i.jsxs)("div", {
        className: r()(m.boxBackdrop, t),
        children: [
            (0, i.jsx)(a.Heading, {
                className: m.bentoSectionHeader,
                variant: "display-md",
                color: "text-strong",
                children: s,
            }),
            null != g && (0, i.jsx)("div", { className: m.highlightBento, children: g }),
            (0, i.jsx)("div", {
                className: m.bentoBoxesGrid,
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
                                d.A,
                                { index: t + +!!u, ...e, size: n, shouldLoadVideo: l, isReducedMotion: o },
                                e.name,
                            ),
                        ),
                    });
                }),
            }),
        ],
    });
}
let _ = s.memo(function (e) {
        let t = (0, o.l)("premium_marketing_bento"),
            { whatsNewBoxes: n } = (0, c.Ay)(t);
        return (0, i.jsx)(g, {
            boxLayout: n,
            title: u.intl.string(u.t.LRmNAl),
            startLeftAligned: !0,
            highlightBento: null,
            ...e,
        });
    }),
    x = s.memo(function (e) {
        let { bestOfBoxes: t } = (0, c.Ay)();
        return (0, i.jsx)(g, { boxLayout: t, title: u.intl.string(u.t.EnzW2H), startLeftAligned: !0, ...e });
    });
