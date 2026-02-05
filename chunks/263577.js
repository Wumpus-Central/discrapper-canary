"use strict";
n.d(t, { V: () => f });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(990078),
    l = n(582754),
    u = n(397927),
    c = n(736653),
    d = n(985018),
    _ = n(895237);
function f(e) {
    let {
            src: t,
            size: n,
            constrain: a = "height",
            className: f,
            alt: p,
            fallbackSrc: h,
            "aria-hidden": m,
            showTooltip: g = !1,
        } = e,
        E = (0, c.Ay)(),
        A = `${n}px`,
        [I, T] = i.useState(!1),
        [y, S] = i.useState(!1),
        v = null == h || y;
    if (null == t || (I && v))
        return (0, r.jsx)(u._7Z, {
            size: "custom",
            width: "100%",
            height: "100%",
            color: (0, l.Mw)(E) ? u.LU0.colors.WHITE : u.LU0.colors.BLACK,
            style: { maxWidth: A },
            className: s()(_.f, f),
        });
    let C = "height" === a ? { maxWidth: A, height: A } : { maxWidth: A, minHeight: A };
    return (0, r.jsx)(
        o.m,
        {
            "aria-label": p,
            __unsupportedReactNodeAsText: p,
            shouldShow: g,
            children: (0, r.jsx)("img", {
                style: C,
                className: s()(_.f, f),
                src: I && null != h ? h : t,
                "aria-hidden": m,
                alt: p ?? (m ? void 0 : d.intl.string(d.t["2B/phM"])),
                onError: (e) => (I ? S(!0) : T(!0)),
            }),
        },
        "content-image",
    );
}
