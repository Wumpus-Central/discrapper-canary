t.d(n, {
    Z: function () {
        return f;
    }
});
var a = t(200651),
    i = t(192379),
    r = t(793030),
    l = t(442837),
    o = t(445986),
    s = t(9807),
    c = t(341176),
    d = t(312097),
    u = t(451478),
    m = t(981631),
    p = t(388032),
    _ = t(520432),
    g = t(902294);
function f(e) {
    let { application: n, carouselItems: t } = e,
        f = (0, l.e7)([u.Z], () => u.Z.isFocused()),
        v = (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)('img', {
                    className: _.errorImage,
                    src: g,
                    'aria-hidden': !0,
                    alt: ''
                }),
                (0, a.jsx)(r.X6, {
                    variant: 'heading-xl/semibold',
                    children: p.intl.string(p.t.UvDfMz)
                })
            ]
        });
    t.forEach((e, a) => {
        e.alt = p.intl.formatToPlainString(p.t.sSEhHR, {
            index: a + 1,
            totalImages: t.length,
            name: n.name
        });
    });
    let C = i.useCallback(
        (e, n) => {
            if (e.type === m.s9s.IMG) {
                let n = t.filter((e) => e.type === m.s9s.IMG),
                    a = n.findIndex((n) => n === e);
                if (a < 0) return;
                let i = n.map((e) => ({
                    url: (0, o.Q)(e.src),
                    original: e.src,
                    width: e.width,
                    height: e.height,
                    type: 'IMAGE'
                }));
                (0, d.K)({
                    items: i,
                    startingIndex: a,
                    fit: c.D.CONTAIN,
                    shouldHideMediaOptions: !0,
                    shouldAnimateCarousel: !0,
                    location: 'GlobalDiscoveryAppsDetailCarousel'
                });
            }
        },
        [t]
    );
    return 0 === t.length
        ? null
        : (0, a.jsx)(s.Z, {
              className: _.carousel,
              themedPagination: !0,
              items: t,
              autoplayInterval: 8000,
              paused: !f,
              videoAutoPlay: !0,
              onCurrentItemClick: C,
              errorComponent: v
          });
}
