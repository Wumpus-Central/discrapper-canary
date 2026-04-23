s.d(t, { Ct: () => x, oO: () => p });
var r = s(627968),
    a = s(64700),
    i = s(503698),
    n = s.n(i),
    l = s(534514),
    o = s(31502),
    c = s(750338),
    d = s(23003),
    m = s(985018),
    u = s(856556);
function _(e) {
    let {
        className: t,
        boxLayout: s,
        title: a,
        shouldLoadVideo: i,
        isReducedMotion: o,
        startLeftAligned: m = !1,
        highlightBento: _,
    } = e;
    return (0, r.jsxs)("div", {
        className: n()(u.boxBackdrop, t),
        children: [
            (0, r.jsx)(l.D, {
                className: u.bentoSectionHeader,
                variant: "display-md",
                color: "text-strong",
                children: a,
            }),
            null != _ && (0, r.jsx)("div", { className: u.highlightBento, children: _ }),
            (0, r.jsx)("div", {
                className: u.bentoBoxesGrid,
                children: s.map((e, t) => {
                    let s;
                    switch (e.length) {
                        case 3:
                            s = d.A0.SMALL;
                            break;
                        case 2:
                            s = d.A0.MEDIUM;
                            break;
                        default:
                            s = d.A0.LARGE;
                    }
                    return (0, r.jsx)(r.Fragment, {
                        children: e.map((e) =>
                            (0, r.jsx)(
                                c.A,
                                { index: t + +!!m, ...e, size: s, shouldLoadVideo: i, isReducedMotion: o },
                                e.name,
                            ),
                        ),
                    });
                }),
            }),
        ],
    });
}
let x = a.memo(function (e) {
        let t = (0, o.l)("premium_marketing_bento"),
            { whatsNewBoxes: s } = (0, d.Ay)(t);
        return (0, r.jsx)(_, {
            boxLayout: s,
            title: m.intl.string(m.t.LRmNAl),
            startLeftAligned: !0,
            highlightBento: null,
            ...e,
        });
    }),
    p = a.memo(function (e) {
        let { bestOfBoxes: t } = (0, d.Ay)();
        return (0, r.jsx)(_, { boxLayout: t, title: m.intl.string(m.t.EnzW2H), startLeftAligned: !0, ...e });
    });
