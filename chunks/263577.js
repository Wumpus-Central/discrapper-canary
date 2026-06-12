"use strict";
n.d(t, { V: () => f });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(990078),
    l = n(462887),
    u = n(109112),
    c = n(661531),
    d = n(736653),
    _ = n(375708),
    h = n(458372);
function f(e) {
    let {
            src: t,
            size: n,
            constrain: s = "height",
            className: f,
            alt: p,
            fallbackSrc: E,
            "aria-hidden": m,
            showTooltip: g = !1,
        } = e,
        A = (0, d.Ay)(),
        I = `${n}px`,
        [T, S] = r.useState(!1),
        [y, N] = r.useState(!1),
        v = null == E || y;
    if (null == t || (T && v))
        return (0, i.jsx)(u._, {
            size: "custom",
            width: "100%",
            height: "100%",
            color: (0, l.M)(A) ? c.A.colors.WHITE : c.A.colors.BLACK,
            style: { maxWidth: I },
            className: a()(h.f, f),
        });
    let C = "height" === s ? { maxWidth: I, height: I } : { maxWidth: I, minHeight: I };
    return (0, i.jsx)(
        o.m,
        {
            "aria-label": p,
            __unsupportedReactNodeAsText: p,
            shouldShow: g,
            children: (0, i.jsx)("img", {
                style: C,
                className: a()(h.f, f),
                src: T && null != E ? E : t,
                "aria-hidden": m,
                alt: p ?? (m ? void 0 : _.intl.string(_.t["2B/phM"])),
                onError: (e) => (T ? N(!0) : S(!0)),
            }),
        },
        "content-image",
    );
}
