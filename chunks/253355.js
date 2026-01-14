n.d(t, { Z: () => h });
var r = n(54381),
    l = n(473749),
    a = n(120356),
    s = n.n(a),
    i = n(399606),
    o = n(677850),
    c = n(607070),
    u = n(70097),
    d = n(451478),
    f = n(884697),
    g = n(813083),
    b = n(794324),
    p = n(388032),
    m = n(986517);
function h(e) {
    let { category: t } = e,
        n = (0, i.e7)([c.Z], () => c.Z.useReducedMotion),
        a = (0, i.e7)([d.Z], () => d.Z.isFocused()),
        { catalogBannerStatic: f, catalogBannerAnimated: h, catalogBannerRive: C } = (0, b.Oi)(t),
        E = l.useRef(null),
        v = null != C;
    return (0, r.jsxs)("div", {
        ref: E,
        className: s()(m.catalogBanner, { [m.riveBanner]: v }),
        children: [
            v
                ? (0, r.jsx)(o.B, {
                      src: C,
                      fit: "cover",
                      alignment: "center-left",
                      style: {
                          width: "100%",
                          height: "100%",
                      },
                      eventTargetRef: E,
                      autoplay: !0,
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)("img", {
                              className: m.catalogBannerImage,
                              src: f,
                              alt: t.name,
                          }),
                          null != h &&
                              !n &&
                              a &&
                              (0, r.jsx)(u.Z, {
                                  src: h,
                                  className: m.animationAsset,
                                  autoPlay: !0,
                                  loop: !0,
                              }),
                      ],
                  }),
            (0, r.jsx)(g.Z, {
                category: t,
                className: m.limitedTimeBadge,
                daysRemainingText: p.t["8gsP5M"],
            }),
        ],
    });
}
(0, f.IC)(90);
