n.d(e, { A: () => f, L: () => g });
var t = n(477900),
    i = n(582128),
    a = n(503698),
    c = n.n(a),
    r = n(17928),
    l = n(62617);
function d(s) {
    let { alt: e, ariaLabel: n, ariaHidden: a, role: c, width: r, height: d, className: o, style: u } = s,
        h = i.useMemo(
            () => (0, l.H)({ width: r, height: d, intrinsicWidth: 288, intrinsicHeight: 162, style: u }),
            [r, d, u],
        );
    return (0, t.jsx)("img", {
        style: h,
        src: "https://cdn.discordapp.com/assets/content/5324ca0a8264aa1122411939df44225b50d340cec24eb1bde824e850cb32e379.svg",
        className: (0, l.Z)(o),
        alt: e,
        "aria-label": n,
        "aria-hidden": a,
        role: c ?? "img",
    });
}
var o = n(821609),
    u = n(780964),
    h = n(766075),
    p = n(351906),
    m = n(105292),
    b = n(659888);
function f(s) {
    let { className: e } = s;
    return (0, t.jsxs)("div", {
        className: c()(b.IG, e),
        children: [
            (0, t.jsx)(d, { alt: "", ariaHidden: !0 }),
            (0, t.jsx)("div", {
                className: b.Ac,
                children: (0, t.jsx)(o.$, {
                    text: m.intl.string(m.t.Br1ls3),
                    onClick: function () {
                        return (0, h.openUserSettings)(u.X.STREAMER_MODE_CATEGORY);
                    },
                }),
            }),
        ],
    });
}
function x() {
    return (0, t.jsx)(f, { className: b.ch });
}
function g() {
    return (0, r.bG)([p.A], () => (p.A.hidePersonalInformation ? x : null));
}
