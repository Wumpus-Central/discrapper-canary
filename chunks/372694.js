a.d(t, { A: () => p });
var n = a(627968),
    l = a(64700),
    i = a(534514),
    s = a(311907),
    r = a(937388),
    o = a(256905),
    c = a(531685),
    d = a(652215),
    u = a(985018),
    h = a(427019),
    m = a(500226);
function p(e) {
    let { application: t, carouselItems: a } = e,
        p = (0, s.bG)([c.A], () => c.A.isFocused()),
        _ = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)("img", { className: h.M, src: m, "aria-hidden": !0, alt: "" }),
                (0, n.jsx)(i.D, { variant: "heading-xl/semibold", children: u.intl.string(u.t.UvDfMz) }),
            ],
        });
    a.forEach((e, n) => {
        e.alt = u.intl.formatToPlainString(u.t.sSEhHb, { index: n + 1, totalImages: a.length, name: t.name });
    });
    let g = l.useCallback(
        (e, t) => {
            if (e.type === d.geh.IMG) {
                let t = a.filter((e) => e.type === d.geh.IMG),
                    n = t.findIndex((t) => t === e);
                if (n < 0) return;
                let l = t.map((e) => {
                    var t;
                    return {
                        url: ((t = e.src), `${t.split("?")[0]}?size=2048`),
                        original: e.src,
                        width: e.width,
                        height: e.height,
                        type: "IMAGE",
                    };
                });
                (0, o.R)({
                    items: l,
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
        : (0, n.jsx)(r.A, {
              className: h.D,
              themedPagination: !0,
              items: a,
              autoplayInterval: 8e3,
              paused: !p,
              videoAutoPlay: !0,
              onCurrentItemClick: g,
              errorComponent: _,
          });
}
