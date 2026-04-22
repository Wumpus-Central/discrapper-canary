i.d(t, { Hs: () => g, e6: () => x, o7: () => h });
var l = i(627968);
i(64700);
var n = i(534514),
    s = i(834730),
    a = i(724609),
    r = i(580630),
    c = i(500345),
    d = i(922975),
    o = i(380203),
    u = i(985018),
    m = i(461144);
let x = (e) => {
    let { listingName: t } = e;
    return (0, l.jsx)(n.D, {
        variant: "text-md/normal",
        color: "interactive-text-active",
        className: m.KR,
        children: t,
    });
};
function h(e) {
    let { image: t } = e;
    return null == t ? null : (0, l.jsx)("img", { src: t, alt: "", className: m.ah });
}
let g = (e) => {
    let { listingId: t, isListingPublished: i } = e,
        n = (0, o.A)(),
        [g] = d.tx(t),
        [v] = d.lK(t, n),
        [j] = d.A_(t);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(x, { listingName: g }),
            (0, l.jsx)(h, { image: v }),
            !i && (0, l.jsx)("div", { className: m.U0, children: (0, l.jsx)(a.k, {}) }),
            (0, l.jsx)(s.E, {
                variant: "heading-xl/semibold",
                className: m.Us,
                tag: "div",
                children: (0, r.$g)(j.price, j.currency),
            }),
            (0, l.jsx)(s.E, {
                variant: "text-xs/normal",
                color: "interactive-text-default",
                className: m.gV,
                children: u.intl.format(u.t.isLGyX, {
                    period: (0, c.cV)({ interval: j.interval, interval_count: j.interval_count }),
                }),
            }),
        ],
    });
};
