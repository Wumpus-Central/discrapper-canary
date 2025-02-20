n.d(t, { Z: () => _ });
var r = n(200651),
    a = n(192379),
    i = n(793030),
    l = n(442837),
    o = n(445986),
    s = n(9807),
    c = n(341176),
    d = n(312097),
    u = n(451478),
    p = n(981631),
    m = n(388032),
    h = n(373705),
    g = n(902294);
function _(e) {
    let { application: t, carouselItems: n } = e,
        _ = (0, l.e7)([u.Z], () => u.Z.isFocused()),
        f = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)('img', {
                    className: h.errorImage,
                    src: g,
                    'aria-hidden': !0,
                    alt: ''
                }),
                (0, r.jsx)(i.X6, {
                    variant: 'heading-xl/semibold',
                    children: m.NW.string(m.t.UvDfMz)
                })
            ]
        });
    n.forEach((e, r) => {
        e.alt = m.NW.formatToPlainString(m.t.sSEhHR, {
            index: r + 1,
            totalImages: n.length,
            name: t.name
        });
    });
    let v = a.useCallback(
        (e, t) => {
            if (e.type === p.s9s.IMG) {
                let t = n.filter((e) => e.type === p.s9s.IMG),
                    r = t.findIndex((t) => t === e);
                if (r < 0) return;
                let a = t.map((e) => ({
                    url: (0, o.Q)(e.src),
                    original: e.src,
                    width: e.width,
                    height: e.height,
                    type: 'IMAGE'
                }));
                (0, d.K)({
                    items: a,
                    startingIndex: r,
                    fit: c.D.CONTAIN,
                    shouldHideMediaOptions: !0,
                    shouldAnimateCarousel: !0,
                    location: 'GlobalDiscoveryAppsDetailCarousel'
                });
            }
        },
        [n]
    );
    return 0 === n.length
        ? null
        : (0, r.jsx)(s.Z, {
              className: h.carousel,
              themedPagination: !0,
              items: n,
              autoplayInterval: 8000,
              paused: !_,
              videoAutoPlay: !0,
              onCurrentItemClick: v,
              errorComponent: f
          });
}
