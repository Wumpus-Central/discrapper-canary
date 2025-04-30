n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    o = n(873546),
    a = n(481060),
    s = n(470134),
    c = n(302137);
function u(e) {
    let { guildId: t, children: n, className: i } = e,
        { horizontalScrollNotice: u, handleScroll: d, handleSetScrollerRef: p, handleSetContainerRef: h } = (0, s.Z)(t),
        f = (0, r.jsx)('div', {
            className: c.tierPreviewsContainer,
            children: (0, r.jsx)('div', {
                className: l()(c.tierPreviews, i),
                children: n
            })
        });
    return (
        o.tq ||
            (f = (0, r.jsxs)(r.Fragment, {
                children: [
                    u,
                    (0, r.jsx)(a.Den, {
                        className: c.scroller,
                        orientation: 'horizontal',
                        ref: p,
                        onScroll: d,
                        children: f
                    })
                ]
            })),
        (0, r.jsx)('div', {
            className: c.carouselMaxWidth,
            ref: h,
            children: f
        })
    );
}
