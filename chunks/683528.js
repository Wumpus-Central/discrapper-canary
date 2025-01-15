t.d(n, {
    Z: function () {
        return _;
    }
});
var i = t(200651),
    l = t(192379),
    r = t(120356),
    a = t.n(r),
    o = t(481060),
    s = t(607070),
    u = t(124347),
    c = t(52824),
    d = t(549635),
    f = t(217702),
    m = t(388032),
    h = t(229669);
function p(e) {
    return 'media-view-scroll-thumbnail-'.concat(e);
}
let g = l.memo(function (e) {
    var n;
    let { item: t } = e;
    let l =
        'IMAGE' === (n = t).type
            ? (0, c.q)({
                  proxyURL: n.proxyUrl,
                  url: n.url
              })
            : 'VIDEO' === n.type && null != n.proxyUrl
              ? (0, d.D)(n.proxyUrl)
              : null;
    return null == l
        ? null
        : (0, i.jsx)(u.ZP, {
              width: 48,
              height: 48,
              src: l,
              shouldAnimate: !1,
              srcIsAnimated: t.srcIsAnimated,
              alt: t.alt,
              mediaLayoutType: f.hV.MOSAIC
          });
});
function _(e) {
    let { items: n, currentIndex: t, onGalleryItemClick: r, className: u } = e,
        c = l.useRef(null);
    return (
        l.useLayoutEffect(() => {
            let e = document.getElementById(p(t));
            null != c.current &&
                null != e &&
                c.current.scrollIntoViewNode({
                    node: e,
                    animate: !s.Z.useReducedMotion,
                    padding: 24
                });
        }, [t]),
        (0, i.jsx)('div', {
            className: a()(h.galleryContainer, u),
            children: (0, i.jsx)(o.AdvancedScrollerThin, {
                orientation: 'horizontal',
                className: h.gallery,
                ref: c,
                onMouseDown: (e) => e.stopPropagation(),
                children: n.map((e, l) => {
                    let s = l === t,
                        u = s ? m.t['qv/U5e'] : m.t.zviMAA;
                    return (0, i.jsxs)(
                        o.Clickable,
                        {
                            id: p(l),
                            className: h.galleryItem,
                            'aria-label': m.intl.formatToPlainString(u, {
                                pageNumber: l + 1,
                                totalPages: n.length
                            }),
                            onClick: () => r(l),
                            children: [(0, i.jsx)('div', { className: a()(h.galleryItemOverlay, { [h.selected]: s }) }), (0, i.jsx)(g, { item: e })]
                        },
                        l
                    );
                })
            })
        })
    );
}
