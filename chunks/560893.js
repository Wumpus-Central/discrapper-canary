n.d(t, { Z: () => g });
var r = n(200651),
    a = n(192379),
    i = n(793030),
    l = n(442837),
    o = n(445986),
    s = n(9807),
    c = n(312097),
    d = n(451478),
    u = n(981631),
    p = n(388032),
    m = n(260516),
    h = n(516450);
function g(e) {
    let { application: t, carouselItems: n } = e,
        g = (0, l.e7)([d.Z], () => d.Z.isFocused()),
        _ = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)('img', {
                    className: m.errorImage,
                    src: h,
                    'aria-hidden': !0,
                    alt: ''
                }),
                (0, r.jsx)(i.X6, {
                    variant: 'heading-xl/semibold',
                    children: p.NW.string(p.t.UvDfMz)
                })
            ]
        });
    n.forEach((e, r) => {
        e.alt = p.NW.formatToPlainString(p.t.sSEhHR, {
            index: r + 1,
            totalImages: n.length,
            name: t.name
        });
    });
    let f = a.useCallback(
        (e, t) => {
            if (e.type === u.s9s.IMG) {
                let t = n.filter((e) => e.type === u.s9s.IMG),
                    r = t.findIndex((t) => t === e);
                if (r < 0) return;
                let a = t.map((e) => ({
                    url: (0, o.Q)(e.src),
                    original: e.src,
                    width: e.width,
                    height: e.height,
                    type: 'IMAGE'
                }));
                (0, c.K)({
                    items: a,
                    startingIndex: r,
                    shouldHideMediaOptions: !0,
                    location: 'GlobalDiscoveryAppsDetailCarousel'
                });
            }
        },
        [n]
    );
    return 0 === n.length
        ? null
        : (0, r.jsx)(s.Z, {
              className: m.carousel,
              themedPagination: !0,
              items: n,
              autoplayInterval: 8000,
              paused: !g,
              videoAutoPlay: !0,
              onCurrentItemClick: f,
              errorComponent: _
          });
}
