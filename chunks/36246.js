n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    a = n(873546),
    s = n(481060),
    o = n(470134),
    c = n(254583);
function d(e) {
    let { guildId: t, children: n, className: l } = e,
        { horizontalScrollNotice: d, handleScroll: u, handleSetScrollerRef: h, handleSetContainerRef: p } = (0, o.Z)(t),
        m = (0, i.jsx)('div', {
            className: c.tierPreviewsContainer,
            children: (0, i.jsx)('div', {
                className: r()(c.tierPreviews, l),
                children: n
            })
        });
    return (
        !a.tq &&
            (m = (0, i.jsxs)(i.Fragment, {
                children: [
                    d,
                    (0, i.jsx)(s.AdvancedScroller, {
                        className: c.scroller,
                        orientation: 'horizontal',
                        ref: h,
                        onScroll: u,
                        children: m
                    })
                ]
            })),
        (0, i.jsx)('div', {
            className: c.carouselMaxWidth,
            ref: p,
            children: m
        })
    );
}
