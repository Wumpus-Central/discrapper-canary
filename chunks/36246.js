n.d(t, { Z: () => d });
var r = n(54381);
n(473749);
var i = n(120356),
    l = n.n(i),
    a = n(873546),
    s = n(481060),
    o = n(470134),
    c = n(775396);
function d(e) {
    let { guildId: t, children: n, className: i } = e,
        { horizontalScrollNotice: d, handleScroll: u, handleSetScrollerRef: p, handleSetContainerRef: h } = (0, o.Z)(t),
        f = (0, r.jsx)("div", {
            className: c.tierPreviewsContainer,
            children: (0, r.jsx)("div", {
                className: l()(c.tierPreviews, i),
                children: n,
            }),
        });
    return (
        a.tq ||
            (f = (0, r.jsxs)(r.Fragment, {
                children: [
                    d,
                    (0, r.jsx)(s.Den, {
                        className: c.scroller,
                        orientation: "horizontal",
                        ref: p,
                        onScroll: u,
                        children: f,
                    }),
                ],
            })),
        (0, r.jsx)("div", {
            className: c.carouselMaxWidth,
            ref: h,
            children: f,
        })
    );
}
