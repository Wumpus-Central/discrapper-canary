n.d(t, { Z: () => u });
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    a = n(873546),
    o = n(481060),
    s = n(470134),
    c = n(988014);
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
        a.tq ||
            (f = (0, r.jsxs)(r.Fragment, {
                children: [
                    u,
                    (0, r.jsx)(o.Den, {
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
