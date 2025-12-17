n.d(t, { Z: () => f });
var a = n(54381),
    r = n(473749),
    i = n(793030),
    l = n(442837),
    s = n(445986),
    o = n(9807),
    c = n(312097),
    d = n(451478),
    u = n(981631),
    p = n(388032),
    m = n(603262),
    h = n(516450);
function f(e) {
    let { application: t, carouselItems: n } = e,
        f = (0, l.e7)([d.Z], () => d.Z.isFocused()),
        g = (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)("img", {
                    className: m.errorImage,
                    src: h,
                    "aria-hidden": !0,
                    alt: "",
                }),
                (0, a.jsx)(i.X6q, {
                    variant: "heading-xl/semibold",
                    children: p.intl.string(p.t.UvDfMz),
                }),
            ],
        });
    n.forEach((e, a) => {
        e.alt = p.intl.formatToPlainString(p.t.sSEhHb, {
            index: a + 1,
            totalImages: n.length,
            name: t.name,
        });
    });
    let b = r.useCallback(
        (e, t) => {
            if (e.type === u.s9s.IMG) {
                let t = n.filter((e) => e.type === u.s9s.IMG),
                    a = t.findIndex((t) => t === e);
                if (a < 0) return;
                let r = t.map((e) => ({
                    url: (0, s.Q)(e.src),
                    original: e.src,
                    width: e.width,
                    height: e.height,
                    type: "IMAGE",
                }));
                (0, c.K)({
                    items: r,
                    startingIndex: a,
                    shouldHideMediaOptions: !0,
                    location: "GlobalDiscoveryAppsDetailCarousel",
                });
            }
        },
        [n],
    );
    return 0 === n.length
        ? null
        : (0, a.jsx)(o.Z, {
              className: m.carousel,
              themedPagination: !0,
              items: n,
              autoplayInterval: 8000,
              paused: !f,
              videoAutoPlay: !0,
              onCurrentItemClick: b,
              errorComponent: g,
          });
}
