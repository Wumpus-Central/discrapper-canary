i.d(t, { A: () => g });
var n = i(477900);
i(582128);
var l = i(503698),
    s = i.n(l),
    r = i(607470),
    a = i(590251),
    o = i(375708),
    d = i(869006);
function c(e) {
    let { item: t, size: i } = e,
        l = "exporting" === t.status,
        r = "uploading" === t.status ? Math.round(100 * t.progress) : 25;
    return (0, n.jsx)("div", {
        className: s()(d.ring, d[i], { [d.indeterminate]: l }),
        role: "progressbar",
        "aria-label": o.intl.string(o.t.RFRuwZ),
        "aria-valuenow": l ? void 0 : r,
        children: (0, n.jsx)(a.a, {
            percent: r,
            strokeSize: a.a.StrokeSizes.MEDIUM,
            colorOverride: "var(--icon-overlay-light)",
        }),
    });
}
var u = i(579460);
function g(e) {
    let { item: t, ringSize: i, className: l } = e,
        a = "exporting" === t.status || "uploading" === t.status,
        o = s()(u.Gt, { [u.ob]: a });
    return (0, n.jsxs)("div", {
        className: s()(u.$_, l),
        children: [
            "saved" === t.status
                ? null != t.videoURL
                    ? (0, n.jsx)(r.A, { src: t.videoURL, preload: "metadata", muted: !0, className: o })
                    : null
                : (0, n.jsx)("img", { src: t.thumbnail, alt: "", className: o, loading: "lazy" }),
            a && (0, n.jsx)(c, { item: t, size: i }),
        ],
    });
}
