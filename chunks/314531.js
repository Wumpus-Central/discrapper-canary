a.d(t, { A: () => m });
var i = a(477900),
    l = a(582128),
    n = a(503698),
    s = a.n(n),
    r = a(607470),
    o = a(590251),
    d = a(375708),
    c = a(869006);
function u(e) {
    let { item: t, size: a } = e,
        l = "exporting" === t.status,
        n = "uploading" === t.status ? Math.round(100 * t.progress) : 25;
    return (0, i.jsx)("div", {
        className: s()(c.ring, c[a], { [c.indeterminate]: l }),
        role: "progressbar",
        "aria-label": d.intl.string(d.t.RFRuwZ),
        "aria-valuenow": l ? void 0 : n,
        children: (0, i.jsx)(o.a, {
            percent: n,
            strokeSize: o.a.StrokeSizes.MEDIUM,
            colorOverride: "var(--icon-overlay-light)",
        }),
    });
}
var p = a(579460);
function m(e) {
    let { item: t, ringSize: a, isPlaying: n = !1, isMuted: o = !0, fit: d = "cover", onEnded: c, className: m } = e,
        g = l.useRef(null),
        h = "exporting" === t.status || "uploading" === t.status,
        v = s()(p.Gt, { [p.ob]: h, [p.k6]: "contain" === d });
    return (
        l.useEffect(() => {
            let e = g.current;
            null != e && (e.muted = o);
        }, [o]),
        l.useEffect(() => {
            let e = g.current;
            null != e && (n ? e.play().catch(() => {}) : e.pause());
        }, [n, t.key]),
        (0, i.jsxs)("div", {
            className: s()(p.$_, m),
            children: [
                "saved" === t.status
                    ? null != t.videoURL
                        ? (0, i.jsx)(r.A, {
                              ref: g,
                              src: t.videoURL,
                              poster: t.thumbnailURL,
                              preload: "none",
                              muted: !0,
                              loop: null == c,
                              onEnded: c,
                              className: v,
                          })
                        : null
                    : (0, i.jsx)("img", { src: t.thumbnail, alt: "", className: v, loading: "lazy" }),
                h && (0, i.jsx)(u, { item: t, size: a }),
            ],
        })
    );
}
