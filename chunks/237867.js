i.d(t, { Hs: () => h, e6: () => m, o7: () => x });
var l = i(627968);
i(64700);
var n = i(397927),
    a = i(724609),
    s = i(580630),
    r = i(500345),
    c = i(922975),
    d = i(380203),
    o = i(985018),
    u = i(687427);
let m = (e) => {
    let { listingName: t } = e;
    return (0, l.jsx)(n.Heading, {
        variant: "text-md/normal",
        color: "interactive-text-active",
        className: u.KR,
        children: t,
    });
};
function x(e) {
    let { image: t } = e;
    return null == t ? null : (0, l.jsx)("img", { src: t, alt: "", className: u.ah });
}
let h = (e) => {
    let { listingId: t, isListingPublished: i } = e,
        h = (0, d.A)(),
        [g] = c.tx(t),
        [v] = c.lK(t, h),
        [j] = c.A_(t);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(m, { listingName: g }),
            (0, l.jsx)(x, { image: v }),
            !i && (0, l.jsx)("div", { className: u.U0, children: (0, l.jsx)(a.k, {}) }),
            (0, l.jsx)(n.Text, {
                variant: "heading-xl/semibold",
                className: u.Us,
                tag: "div",
                children: (0, s.$g)(j.price, j.currency),
            }),
            (0, l.jsx)(n.Text, {
                variant: "text-xs/normal",
                color: "interactive-text-default",
                className: u.gV,
                children: o.intl.format(o.t.isLGyX, {
                    period: (0, r.cV)({ interval: j.interval, interval_count: j.interval_count }),
                }),
            }),
        ],
    });
};
