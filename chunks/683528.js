r.d(n, {
    Z: function () {
        return b;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(120356),
    s = r.n(o),
    l = r(481060),
    u = r(607070),
    c = r(124347),
    d = r(52824),
    f = r(549635),
    p = r(217702),
    h = r(388032),
    _ = r(52131);
let m = 48;
function g(e) {
    return 'media-view-scroll-thumbnail-'.concat(e);
}
function E(e) {
    return 'IMAGE' === e.type
        ? (0, d.q)({
              proxyURL: e.proxyUrl,
              url: e.url
          })
        : 'VIDEO' === e.type && null != e.proxyUrl
          ? (0, f.D)(e.proxyUrl)
          : null;
}
function v(e) {
    var n, r;
    let { item: a } = e,
        o = E(a);
    return null == o
        ? null
        : (0, i.jsx)(c.ZP, {
              width: null !== (n = a.width) && void 0 !== n ? n : m,
              height: null !== (r = a.height) && void 0 !== r ? r : m,
              maxWidth: m,
              maxHeight: m,
              useFullWidth: !0,
              src: o,
              shouldAnimate: !1,
              srcIsAnimated: a.srcIsAnimated,
              alt: a.alt,
              mediaLayoutType: p.hV.MOSAIC
          });
}
let y = a.memo(v);
function b(e) {
    let { items: n, currentIndex: r, onGalleryItemClick: o, className: c } = e,
        d = a.useRef(null);
    return (
        a.useLayoutEffect(() => {
            let e = document.getElementById(g(r));
            null != d.current &&
                null != e &&
                d.current.scrollIntoViewNode({
                    node: e,
                    animate: !u.Z.useReducedMotion,
                    padding: m / 2
                });
        }, [r]),
        (0, i.jsx)('div', {
            className: s()(_.galleryContainer, c),
            children: (0, i.jsx)(l.AdvancedScrollerThin, {
                orientation: 'horizontal',
                className: _.gallery,
                ref: d,
                onMouseDown: (e) => e.stopPropagation(),
                children: n.map((e, a) => {
                    let u = a === r,
                        c = u ? h.t['qv/U5e'] : h.t.zviMAA;
                    return (0, i.jsxs)(
                        l.Clickable,
                        {
                            id: g(a),
                            className: _.galleryItem,
                            'aria-label': h.intl.formatToPlainString(c, {
                                pageNumber: a + 1,
                                totalPages: n.length
                            }),
                            onClick: () => o(a),
                            children: [(0, i.jsx)('div', { className: s()(_.galleryItemOverlay, { [_.selected]: u }) }), (0, i.jsx)(y, { item: e })]
                        },
                        a
                    );
                })
            })
        })
    );
}
