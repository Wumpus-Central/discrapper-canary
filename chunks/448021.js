n.d(t, {
    Z: function () {
        return C;
    }
});
var i = n(200651),
    a = n(192379),
    r = n(793030),
    l = n(442837),
    o = n(445986),
    s = n(9807),
    c = n(341176),
    d = n(312097),
    u = n(451478),
    m = n(981631),
    p = n(388032),
    h = n(520432),
    g = n(902294);
function C(e) {
    let { application: t, carouselItems: n } = e,
        C = (0, l.e7)([u.Z], () => u.Z.isFocused()),
        x = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)('img', {
                    className: h.errorImage,
                    src: g,
                    'aria-hidden': !0,
                    alt: ''
                }),
                (0, i.jsx)(r.X6, {
                    variant: 'heading-xl/semibold',
                    children: p.intl.string(p.t.UvDfMz)
                })
            ]
        });
    n.forEach((e, i) => {
        e.alt = p.intl.formatToPlainString(p.t.sSEhHR, {
            index: i + 1,
            totalImages: n.length,
            name: t.name
        });
    });
    let v = a.useCallback(
        (e, t) => {
            if (e.type === m.s9s.IMG) {
                let t = n.filter((e) => e.type === m.s9s.IMG),
                    i = t.findIndex((t) => t === e);
                if (i < 0) return;
                let a = t.map((e) => ({
                    url: (0, o.Q)(e.src),
                    original: e.src,
                    width: e.width,
                    height: e.height,
                    type: 'IMAGE'
                }));
                (0, d.K)({
                    items: a,
                    startingIndex: i,
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
        : (0, i.jsx)(s.Z, {
              className: h.carousel,
              themedPagination: !0,
              items: n,
              autoplayInterval: 8000,
              paused: !C,
              videoAutoPlay: !0,
              onCurrentItemClick: v,
              errorComponent: x
          });
}
