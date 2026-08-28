a.d(t, { A: () => m });
var l = a(477900),
    i = a(582128),
    n = a(503698),
    s = a.n(n),
    r = a(607470),
    o = a(590251),
    c = a(375708),
    d = a(869006);
function u(e) {
    let { item: t, size: a } = e,
        i = "exporting" === t.status,
        n = "uploading" === t.status ? Math.round(100 * t.progress) : 25;
    return (0, l.jsx)("div", {
        className: s()(d.ring, d[a], { [d.indeterminate]: i }),
        role: "progressbar",
        "aria-label": c.intl.string(c.t.RFRuwZ),
        "aria-valuenow": i ? void 0 : n,
        children: (0, l.jsx)(o.a, {
            percent: n,
            strokeSize: o.a.StrokeSizes.MEDIUM,
            colorOverride: "var(--icon-overlay-light)",
        }),
    });
}
var p = a(579460);
function m(e) {
    let { item: t, ringSize: a, isPlaying: n = !1, className: o } = e,
        c = i.useRef(null),
        d = "exporting" === t.status || "uploading" === t.status,
        m = s()(p.Gt, { [p.ob]: d });
    return (
        i.useEffect(() => {
            let e = c.current;
            null != e && (n ? e.play().catch(() => {}) : e.pause());
        }, [n]),
        (0, l.jsxs)("div", {
            className: s()(p.$_, o),
            children: [
                "saved" === t.status
                    ? null != t.videoURL
                        ? (0, l.jsx)(r.A, {
                              ref: c,
                              src: t.videoURL,
                              poster: t.thumbnailURL,
                              preload: "none",
                              muted: !0,
                              loop: !0,
                              className: m,
                          })
                        : null
                    : (0, l.jsx)("img", { src: t.thumbnail, alt: "", className: m, loading: "lazy" }),
                d && (0, l.jsx)(u, { item: t, size: a }),
            ],
        })
    );
}
