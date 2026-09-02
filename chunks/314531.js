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
    let { item: t, ringSize: a, isPlaying: n = !1, isMuted: o = !0, fit: c = "cover", onEnded: d, className: m } = e,
        g = i.useRef(null),
        h = "exporting" === t.status || "uploading" === t.status,
        v = s()(p.Gt, { [p.ob]: h, [p.k6]: "contain" === c });
    return (
        i.useEffect(() => {
            let e = g.current;
            null != e && (e.muted = o);
        }, [o]),
        i.useEffect(() => {
            let e = g.current;
            null != e && (n ? e.play().catch(() => {}) : e.pause());
        }, [n, t.key]),
        (0, l.jsxs)("div", {
            className: s()(p.$_, m),
            children: [
                "saved" === t.status
                    ? null != t.videoURL
                        ? (0, l.jsx)(r.A, {
                              ref: g,
                              src: t.videoURL,
                              poster: t.thumbnailURL,
                              preload: "none",
                              muted: !0,
                              loop: null == d,
                              onEnded: d,
                              className: v,
                          })
                        : null
                    : (0, l.jsx)("img", { src: t.thumbnail, alt: "", className: v, loading: "lazy" }),
                h && (0, l.jsx)(u, { item: t, size: a }),
            ],
        })
    );
}
