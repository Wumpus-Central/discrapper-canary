n.d(t, { A: () => b });
var l = n(627968),
    a = n(64700),
    r = n(158954),
    i = n(311907),
    s = n(852860),
    c = n(644576),
    o = n(256905),
    d = n(531685),
    u = n(652215),
    p = n(985018),
    h = n(504724),
    m = n(500226);
function b(e) {
    let { application: t, carouselItems: n } = e,
        b = (0, i.bG)([d.A], () => d.A.isFocused()),
        f = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)("img", {
                    className: h.M,
                    src: m,
                    "aria-hidden": !0,
                    alt: "",
                }),
                (0, l.jsx)(r.DZT, {
                    variant: "heading-xl/semibold",
                    children: p.intl.string(p.t.UvDfMz),
                }),
            ],
        });
    n.forEach((e, l) => {
        e.alt = p.intl.formatToPlainString(p.t.sSEhHb, {
            index: l + 1,
            totalImages: n.length,
            name: t.name,
        });
    });
    let g = a.useCallback(
        (e, t) => {
            if (e.type === u.geh.IMG) {
                let t = n.filter((e) => e.type === u.geh.IMG),
                    l = t.findIndex((t) => t === e);
                if (l < 0) return;
                let a = t.map((e) => ({
                    url: (0, s.o)(e.src),
                    original: e.src,
                    width: e.width,
                    height: e.height,
                    type: "IMAGE",
                }));
                (0, o.R)({
                    items: a,
                    startingIndex: l,
                    shouldHideMediaOptions: !0,
                    location: "GlobalDiscoveryAppsDetailCarousel",
                });
            }
        },
        [n],
    );
    return 0 === n.length
        ? null
        : (0, l.jsx)(c.A, {
              className: h.D,
              themedPagination: !0,
              items: n,
              autoplayInterval: 8000,
              paused: !b,
              videoAutoPlay: !0,
              onCurrentItemClick: g,
              errorComponent: f,
          });
}
