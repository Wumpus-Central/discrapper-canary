n.d(t, { Z: () => y });
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(481060),
    l = n(607070),
    c = n(124347),
    u = n(52824),
    d = n(549635),
    f = n(217702),
    _ = n(388032),
    p = n(581327);
let h = 40;
function m(e) {
    return 'media-view-scroll-thumbnail-'.concat(e);
}
function g(e) {
    return 'IMAGE' === e.type
        ? (0, u.q)({
              proxyURL: e.proxyUrl,
              url: e.url
          })
        : 'VIDEO' === e.type && null != e.proxyUrl
          ? (0, d.D)(e.proxyUrl)
          : null;
}
function E(e) {
    var t, n;
    let { item: i } = e,
        o = g(i);
    return null == o
        ? null
        : (0, r.jsx)(c.ZP, {
              width: null != (t = i.width) ? t : h,
              height: null != (n = i.height) ? n : h,
              maxWidth: h,
              maxHeight: h,
              useFullWidth: !0,
              src: o,
              shouldAnimate: !1,
              shouldRenderAccessory: !1,
              srcIsAnimated: i.srcIsAnimated,
              alt: i.alt,
              mediaLayoutType: f.hV.MOSAIC
          });
}
let b = i.memo(E);
function y(e) {
    let { items: t, currentIndex: n, onGalleryItemClick: o, className: c } = e,
        u = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            let e = document.getElementById(m(n));
            null != u.current &&
                null != e &&
                u.current.scrollIntoViewNode({
                    node: e,
                    animate: !l.Z.useReducedMotion,
                    padding: h / 2
                });
        }, [n]),
        (0, r.jsx)('div', {
            className: a()(p.galleryContainer, c),
            children: (0, r.jsx)(s.h21, {
                orientation: 'horizontal',
                className: a()(p.gallery, c),
                ref: u,
                onClick: (e) => e.stopPropagation(),
                children: t.map((e, i) => {
                    let l = i === n,
                        c = l ? _.t['qv/U5e'] : _.t.zviMAA;
                    return (0, r.jsx)(
                        s.P3F,
                        {
                            id: m(i),
                            className: a()(p.galleryItem, {
                                [p.inactive]: !l,
                                [p.first]: 0 === i,
                                [p.last]: i === t.length - 1
                            }),
                            'aria-label': _.NW.formatToPlainString(c, {
                                pageNumber: i + 1,
                                totalPages: t.length
                            }),
                            onClick: () => o(i),
                            children: (0, r.jsx)(b, { item: e })
                        },
                        i
                    );
                })
            })
        })
    );
}
