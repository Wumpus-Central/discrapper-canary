a.d(t, { A: () => _ });
var n = a(627968),
    i = a(64700),
    s = a(158954),
    l = a(311907),
    r = a(852860),
    o = a(644576),
    c = a(256905),
    d = a(531685),
    u = a(652215),
    h = a(985018),
    m = a(504724),
    p = a(500226);
function _(e) {
    let { application: t, carouselItems: a } = e,
        _ = (0, l.bG)([d.A], () => d.A.isFocused()),
        g = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)("img", { className: m.M, src: p, "aria-hidden": !0, alt: "" }),
                (0, n.jsx)(s.DZT, { variant: "heading-xl/semibold", children: h.intl.string(h.t.UvDfMz) }),
            ],
        });
    a.forEach((e, n) => {
        e.alt = h.intl.formatToPlainString(h.t.sSEhHb, { index: n + 1, totalImages: a.length, name: t.name });
    });
    let x = i.useCallback(
        (e, t) => {
            if (e.type === u.geh.IMG) {
                let t = a.filter((e) => e.type === u.geh.IMG),
                    n = t.findIndex((t) => t === e);
                if (n < 0) return;
                let i = t.map((e) => ({
                    url: (0, r.o)(e.src),
                    original: e.src,
                    width: e.width,
                    height: e.height,
                    type: "IMAGE",
                }));
                (0, c.R)({
                    items: i,
                    startingIndex: n,
                    shouldHideMediaOptions: !0,
                    location: "GlobalDiscoveryAppsDetailCarousel",
                });
            }
        },
        [a],
    );
    return 0 === a.length
        ? null
        : (0, n.jsx)(o.A, {
              className: m.D,
              themedPagination: !0,
              items: a,
              autoplayInterval: 8e3,
              paused: !_,
              videoAutoPlay: !0,
              onCurrentItemClick: x,
              errorComponent: g,
          });
}
