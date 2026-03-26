n.d(t, { Ct: () => g, oO: () => x });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(397927),
    o = n(31502),
    d = n(750338),
    c = n(23003),
    u = n(985018),
    m = n(992284);
function _(e) {
    let {
        className: t,
        boxLayout: n,
        title: s,
        shouldLoadVideo: l,
        isReducedMotion: o,
        startLeftAligned: u = !1,
        highlightBento: _,
    } = e;
    return (0, i.jsxs)("div", {
        className: a()(m.boxBackdrop, t),
        children: [
            (0, i.jsx)(r.Heading, {
                className: m.bentoSectionHeader,
                variant: "display-md",
                color: "text-strong",
                children: s,
            }),
            null != _ && (0, i.jsx)("div", { className: m.highlightBento, children: _ }),
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
let g = s.memo(function (e) {
        let { whatsNewBoxes: t } = (0, c.Ay)();
        return (
            (0, o.l)("premium_marketing_bento"),
            (0, i.jsx)(_, {
                boxLayout: t,
                title: u.intl.string(u.t.LRmNAl),
                startLeftAligned: !0,
                highlightBento: null,
                ...e,
            })
        );
    }),
    x = s.memo(function (e) {
        let { bestOfBoxes: t } = (0, c.Ay)();
        return (0, i.jsx)(_, { boxLayout: t, title: u.intl.string(u.t.EnzW2H), startLeftAligned: !0, ...e });
    });
