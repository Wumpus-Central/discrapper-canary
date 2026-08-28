n.d(t, { A: () => m });
var i = n(477900),
    l = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(607470),
    o = n(590251),
    c = n(375708),
    u = n(869006);
function d(e) {
    let { item: t, size: n } = e,
        l = "exporting" === t.status,
        s = "uploading" === t.status ? Math.round(100 * t.progress) : 25;
    return (0, i.jsx)("div", {
        className: r()(u.ring, u[n], { [u.indeterminate]: l }),
        role: "progressbar",
        "aria-label": c.intl.string(c.t.RFRuwZ),
        "aria-valuenow": l ? void 0 : s,
        children: (0, i.jsx)(o.a, {
            percent: s,
            strokeSize: o.a.StrokeSizes.MEDIUM,
            colorOverride: "var(--icon-overlay-light)",
        }),
    });
}
var g = n(579460);
function m(e) {
    let { item: t, ringSize: n, isPlaying: s = !1, className: o } = e,
        c = l.useRef(null),
        u = "exporting" === t.status || "uploading" === t.status,
        m = r()(g.Gt, { [g.ob]: u });
    return (
        l.useEffect(() => {
            let e = c.current;
            null != e && (s ? e.play().catch(() => {}) : e.pause());
        }, [s]),
        (0, i.jsxs)("div", {
            className: r()(g.$_, o),
            children: [
                "saved" === t.status
                    ? null != t.videoURL
                        ? (0, i.jsx)(a.A, {
                              ref: c,
                              src: t.videoURL,
                              poster: t.thumbnailURL,
                              preload: "none",
                              muted: !0,
                              loop: !0,
                              className: m,
                          })
                        : null
                    : (0, i.jsx)("img", { src: t.thumbnail, alt: "", className: m, loading: "lazy" }),
                u && (0, i.jsx)(d, { item: t, size: n }),
            ],
        })
    );
}
