n.d(t, { f: () => _ }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(28664),
    l = n(780384),
    c = n(481060),
    u = n(410030),
    d = n(388032),
    f = n(218686);
function _(e) {
    let {
            src: t,
            size: n,
            constrain: a = "height",
            className: _,
            alt: p,
            fallbackSrc: h,
            "aria-hidden": m,
            showTooltip: g = !1,
        } = e,
        E = (0, u.ZP)(),
        b = "".concat(n, "px"),
        [y, O] = i.useState(!1),
        [v, I] = i.useState(!1),
        T = null == h || v;
    if (null == t || (y && T))
        return (0, r.jsx)(c.IMN, {
            size: "custom",
            width: "100%",
            height: "100%",
            color: (0, l.wj)(E) ? c.TVs.colors.WHITE : c.TVs.colors.BLACK,
            style: { maxWidth: b },
            className: o()(f.contentImage, _),
        });
    let S =
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
            "aria-label": p,
            __unsupportedReactNodeAsText: p,
            shouldShow: g,
            children: (0, r.jsx)("img", {
                style: S,
                className: o()(f.contentImage, _),
                src: y && null != h ? h : t,
                "aria-hidden": m,
                alt: null != p ? p : m ? void 0 : d.intl.string(d.t["2B/phM"]),
                onError: (e) => (y ? I(!0) : O(!0)),
            }),
        },
        "content-image",
    );
}
