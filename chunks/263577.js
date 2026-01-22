n.d(t, {
    V: () => p,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(990078),
    l = n(582754),
    c = n(397927),
    u = n(736653),
    d = n(985018),
    f = n(895237);

function p(e) {
    let {
            src: t,
            size: n,
            constrain: a = "height",
            className: p,
            alt: _,
            fallbackSrc: h,
            "aria-hidden": m,
            showTooltip: g = !1,
        } = e,
        E = (0, u.Ay)(),
        b = "".concat(n, "px"),
        [y, O] = i.useState(!1),
        [A, v] = i.useState(!1),
        S = null == h || A;
    if (null == t || (y && S))
        return (0, r.jsx)(c._7Z, {
            size: "custom",
            width: "100%",
            height: "100%",
            color: (0, l.Mw)(E) ? c.LU0.colors.WHITE : c.LU0.colors.BLACK,
            style: {
                maxWidth: b,
            },
            className: s()(f.f, p),
        });
    let I =
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
        o.m,
        {
            "aria-label": _,
            __unsupportedReactNodeAsText: _,
            shouldShow: g,
            children: (0, r.jsx)("img", {
                style: I,
                className: s()(f.f, p),
                src: y && null != h ? h : t,
                "aria-hidden": m,
                alt: null != _ ? _ : m ? void 0 : d.intl.string(d.t["2B/phM"]),
                onError: (e) => (y ? v(!0) : O(!0)),
            }),
        },
        "content-image",
    );
}
