t.d(n, {
    Z: function () {
        return E;
    }
});
var i = t(200651),
    r = t(192379),
    l = t(120356),
    a = t.n(l),
    o = t(481060),
    s = t(607070),
    u = t(124347),
    c = t(52824),
    d = t(549635),
    h = t(217702),
    m = t(388032),
    f = t(52131);
function p(e) {
    return 'media-view-scroll-thumbnail-'.concat(e);
}
let _ = r.memo(function (e) {
    var n;
    let { item: t } = e;
    let r =
        'IMAGE' === (n = t).type
            ? (0, c.q)({
                  proxyURL: n.proxyUrl,
                  url: n.url
              })
            : 'VIDEO' === n.type && null != n.proxyUrl
              ? (0, d.D)(n.proxyUrl)
              : null;
    return null == r
        ? null
        : (0, i.jsx)(u.ZP, {
              width: 48,
              height: 48,
              src: r,
              shouldAnimate: !1,
              srcIsAnimated: t.srcIsAnimated,
              alt: t.alt,
              mediaLayoutType: h.hV.MOSAIC
          });
});
function E(e) {
    let { items: n, currentIndex: t, onGalleryItemClick: l, className: u } = e,
        c = r.useRef(null);
    return (
        r.useLayoutEffect(() => {
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
            className: a()(f.galleryContainer, u),
            children: (0, i.jsx)(o.AdvancedScrollerThin, {
                orientation: 'horizontal',
                className: f.gallery,
                ref: c,
                onClick: (e) => e.stopPropagation(),
                children: n.map((e, r) => {
                    let s = r === t,
                        u = s ? m.t['qv/U5e'] : m.t.zviMAA;
                    return (0, i.jsxs)(
                        o.Clickable,
                        {
                            id: p(r),
                            className: f.galleryItem,
                            'aria-label': m.intl.formatToPlainString(u, {
                                pageNumber: r + 1,
                                totalPages: n.length
                            }),
                            onClick: () => l(r),
                            children: [(0, i.jsx)('div', { className: a()(f.galleryItemOverlay, { [f.selected]: s }) }), (0, i.jsx)(_, { item: e })]
                        },
                        r
                    );
                })
            })
        })
    );
}
