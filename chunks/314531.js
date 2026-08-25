n.d(t, { A: () => g });
var i = n(477900);
n(582128);
var l = n(503698),
    s = n.n(l),
    r = n(607470),
    a = n(590251),
    o = n(375708),
    d = n(869006);
function c(e) {
    let { item: t, size: n } = e,
        l = "exporting" === t.status,
        r = "uploading" === t.status ? Math.round(100 * t.progress) : 25;
    return (0, i.jsx)("div", {
        className: s()(d.ring, d[n], { [d.indeterminate]: l }),
        role: "progressbar",
        "aria-label": o.intl.string(o.t.RFRuwZ),
        "aria-valuenow": l ? void 0 : r,
        children: (0, i.jsx)(a.a, {
            percent: r,
            strokeSize: a.a.StrokeSizes.MEDIUM,
            colorOverride: "var(--icon-overlay-light)",
        }),
    });
}
var u = n(579460);
function g(e) {
    let { item: t, ringSize: n, className: l } = e,
        a = "exporting" === t.status || "uploading" === t.status,
        o = s()(u.Gt, { [u.ob]: a });
    return (0, i.jsxs)("div", {
        className: s()(u.$_, l),
        children: [
            "saved" === t.status
                ? null != t.videoURL
                    ? (0, i.jsx)(r.A, { src: t.videoURL, preload: "metadata", muted: !0, className: o })
                    : null
                : (0, i.jsx)("img", { src: t.thumbnail, alt: "", className: o, loading: "lazy" }),
            a && (0, i.jsx)(c, { item: t, size: n }),
        ],
    });
}
