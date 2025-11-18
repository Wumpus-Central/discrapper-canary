n.d(t, { Z: () => v });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(607070),
    c = n(991621),
    u = n(629710),
    d = n(124347),
    f = n(52824),
    _ = n(549635),
    p = n(217702),
    h = n(388032),
    m = n(439096);
let g = 40;
function E(e) {
    return "media-view-scroll-thumbnail-".concat(e);
}
function b(e) {
    return "IMAGE" === e.type
        ? (0, f.q)({
              proxyURL: e.proxyUrl,
              url: e.url,
          })
        : "VIDEO" === e.type && null != e.proxyUrl
          ? (0, _.Dt)(e.proxyUrl)
          : null;
}
function y(e) {
    var t, n;
    let { item: i, enabledContentHarmTypeFlags: a = 0 } = e,
        o = b(i);
    return null == o
        ? null
        : (0, u.g4)(
                {
                    type: c.l.GenericMedia,
                    media: i,
                },
                a,
            )
          ? (0, r.jsx)(s.Kqy, {
                align: "center",
                justify: "center",
                className: m.obscured,
                style: {
                    width: g,
                    height: g,
                },
                children: (0, r.jsx)(s.fFY, {
                    size: "sm",
                    color: "white",
                }),
            })
          : (0, r.jsx)(d.ZP, {
                width: null != (t = i.width) ? t : g,
                height: null != (n = i.height) ? n : g,
                maxWidth: g,
                maxHeight: g,
                useFullWidth: !0,
                src: o,
                shouldAnimate: !1,
                shouldRenderAccessory: !1,
                srcIsAnimated: i.srcIsAnimated,
                alt: i.alt,
                mediaLayoutType: p.hV.MOSAIC,
            });
}
let O = i.memo(y);
function v(e) {
    let { items: t, currentIndex: n, onGalleryItemClick: a, className: c, enabledContentHarmTypeFlags: u } = e,
        d = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            let e = document.getElementById(E(n));
            null != d.current &&
                null != e &&
                d.current.scrollIntoViewNode({
                    node: e,
                    animate: !l.Z.useReducedMotion,
                    padding: g / 2,
                });
        }, [n]),
        (0, r.jsx)("div", {
            className: o()(m.galleryContainer, c),
            children: (0, r.jsx)(s.h21, {
                orientation: "horizontal",
                className: o()(m.gallery, c),
                ref: d,
                onClick: (e) => e.stopPropagation(),
                children: t.map((e, i) => {
                    let l = i === n,
                        c = l ? h.t["qv/U5V"] : h.t.zviMAG;
                    return (0, r.jsx)(
                        s.P3F,
                        {
                            id: E(i),
                            className: o()(m.galleryItem, {
                                [m.inactive]: !l,
                                [m.first]: 0 === i,
                                [m.last]: i === t.length - 1,
                            }),
                            "aria-label": h.intl.formatToPlainString(c, {
                                pageNumber: i + 1,
                                totalPages: t.length,
                            }),
                            onClick: () => a(i),
                            children: (0, r.jsx)(O, {
                                item: e,
                                enabledContentHarmTypeFlags: u,
                            }),
                        },
                        i,
                    );
                }),
            }),
        })
    );
}
