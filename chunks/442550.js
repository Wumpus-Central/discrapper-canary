n.d(t, { f: () => p }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(28664),
    l = n(780384),
    c = n(481060),
    u = n(410030),
    d = n(388032),
    f = n(89863);
function p(e) {
    let {
            src: t,
            size: n,
            constrain: a = "height",
            className: p,
            alt: _,
            fallbackSrc: m,
            "aria-hidden": h,
            showTooltip: g = !1,
        } = e,
        E = (0, u.ZP)(),
        b = "".concat(n, "px"),
        [y, O] = i.useState(!1),
        [v, S] = i.useState(!1),
        I = null == m || v;
    if (null == t || (y && I))
        return (0, r.jsx)(c.IMN, {
            size: "custom",
            width: "100%",
            height: "100%",
            color: (0, l.wj)(E) ? c.TVs.colors.WHITE : c.TVs.colors.BLACK,
            style: { maxWidth: b },
            className: o()(f.contentImage, p),
        });
    let T =
        "height" === a
            ? {
                  maxWidth: b,
                  height: b,
              }
            : {
                  maxWidth: b,
                  minHeight: b,
              };
    return (0, r.jsx)(
        s.u,
        {
            "aria-label": _,
            __unsupportedReactNodeAsText: _,
            shouldShow: g,
            children: (0, r.jsx)("img", {
                style: T,
                className: o()(f.contentImage, p),
                src: y && null != m ? m : t,
                "aria-hidden": h,
                alt: null != _ ? _ : h ? void 0 : d.intl.string(d.t["2B/phM"]),
                onError: (e) => (y ? S(!0) : O(!0)),
            }),
        },
        "content-image",
    );
}
