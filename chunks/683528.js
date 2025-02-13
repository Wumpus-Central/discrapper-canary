n.d(t, { Z: () => y });
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    l = n(607070),
    u = n(124347),
    c = n(52824),
    d = n(549635),
    f = n(217702),
    _ = n(388032),
    p = n(903346);
let h = 48;
function m(e) {
    return 'media-view-scroll-thumbnail-'.concat(e);
}
function g(e) {
    return 'IMAGE' === e.type
        ? (0, c.q)({
              proxyURL: e.proxyUrl,
              url: e.url
          })
        : 'VIDEO' === e.type && null != e.proxyUrl
          ? (0, d.D)(e.proxyUrl)
          : null;
}
function E(e) {
    var t, n;
    let { item: r } = e,
        a = g(r);
    return null == a
        ? null
        : (0, i.jsx)(u.ZP, {
              width: null !== (t = r.width) && void 0 !== t ? t : h,
              height: null !== (n = r.height) && void 0 !== n ? n : h,
              maxWidth: h,
              maxHeight: h,
              useFullWidth: !0,
              src: a,
              shouldAnimate: !1,
              srcIsAnimated: r.srcIsAnimated,
              alt: r.alt,
              mediaLayoutType: f.hV.MOSAIC
          });
}
let v = r.memo(E);
function y(e) {
    let { items: t, currentIndex: n, onGalleryItemClick: a, className: u } = e,
        c = r.useRef(null);
    return (
        r.useLayoutEffect(() => {
            let e = document.getElementById(m(n));
            null != c.current &&
                null != e &&
                c.current.scrollIntoViewNode({
                    node: e,
                    animate: !l.Z.useReducedMotion,
                    padding: h / 2
                });
        }, [n]),
        (0, i.jsx)('div', {
            className: s()(p.galleryContainer, u),
            children: (0, i.jsx)(o.h21, {
                orientation: 'horizontal',
                className: p.gallery,
                ref: c,
                onMouseDown: (e) => e.stopPropagation(),
                children: t.map((e, r) => {
                    let l = r === n,
                        u = l ? _.t['qv/U5e'] : _.t.zviMAA;
                    return (0, i.jsxs)(
                        o.P3F,
                        {
                            id: m(r),
                            className: p.galleryItem,
                            'aria-label': _.intl.formatToPlainString(u, {
                                pageNumber: r + 1,
                                totalPages: t.length
                            }),
                            onClick: () => a(r),
                            children: [(0, i.jsx)('div', { className: s()(p.galleryItemOverlay, { [p.selected]: l }) }), (0, i.jsx)(v, { item: e })]
                        },
                        r
                    );
                })
            })
        })
    );
}
