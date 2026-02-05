"use strict";
n.d(t, { Hs: () => p, e6: () => _, o7: () => f });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(724609),
    s = n(580630),
    o = n(500345),
    l = n(922975),
    u = n(380203),
    c = n(985018),
    d = n(687427);
let _ = (e) => {
    let { listingName: t } = e;
    return (0, r.jsx)(i.Heading, {
        variant: "text-md/normal",
        color: "interactive-text-active",
        className: d.KR,
        children: t,
    });
};
function f(e) {
    let { image: t } = e;
    return null == t ? null : (0, r.jsx)("img", { src: t, alt: "", className: d.ah });
}
let p = (e) => {
    let { listingId: t, isListingPublished: n } = e,
        p = (0, u.A)(),
        [h] = l.tx(t),
        [m] = l.lK(t, p),
        [g] = l.A_(t);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(_, { listingName: h }),
            (0, r.jsx)(f, { image: m }),
            !n && (0, r.jsx)("div", { className: d.U0, children: (0, r.jsx)(a.k, {}) }),
            (0, r.jsx)(i.Text, {
                variant: "heading-xl/semibold",
                className: d.Us,
                tag: "div",
                children: (0, s.$g)(g.price, g.currency),
            }),
            (0, r.jsx)(i.Text, {
                variant: "text-xs/normal",
                color: "interactive-text-default",
                className: d.gV,
                children: c.intl.format(c.t.isLGyX, {
                    period: (0, o.cV)({ interval: g.interval, interval_count: g.interval_count }),
                }),
            }),
        ],
    });
};
