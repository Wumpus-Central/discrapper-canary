a.d(t, { A: () => p });
var i = a(477900),
    n = a(582128),
    l = a(503698),
    s = a.n(l),
    r = a(607470),
    o = a(590251),
    d = a(375708),
    u = a(869006);
function c(e) {
    let { item: t, size: a } = e,
        n = "exporting" === t.status,
        l = "uploading" === t.status ? Math.round(100 * t.progress) : 25;
    return (0, i.jsx)("div", {
        className: s()(u.ring, u[a], { [u.indeterminate]: n }),
        role: "progressbar",
        "aria-label": d.intl.string(d.t.RFRuwZ),
        "aria-valuenow": n ? void 0 : l,
        children: (0, i.jsx)(o.a, {
            percent: l,
            strokeSize: o.a.StrokeSizes.MEDIUM,
            colorOverride: "var(--icon-overlay-light)",
        }),
    });
}
var m = a(579460);
function p(e) {
    let { item: t, ringSize: a, isPlaying: l = !1, isMuted: o = !0, fit: d = "cover", onEnded: u, className: p } = e,
        g = n.useRef(null),
        h = "exporting" === t.status || "uploading" === t.status,
        v = s()(m.Gt, { [m.ob]: h, [m.k6]: "contain" === d });
    return (
        n.useEffect(() => {
            let e = g.current;
            null != e && (e.muted = o);
        }, [o]),
        n.useEffect(() => {
            let e = g.current;
            null != e && (l ? e.play().catch(() => {}) : e.pause());
        }, [l, t.key]),
        (0, i.jsxs)("div", {
            className: s()(m.$_, p),
            children: [
                "saved" === t.status
                    ? null != t.videoURL
                        ? (0, i.jsx)(r.A, {
                              ref: g,
                              src: t.videoURL,
                              poster: t.thumbnailURL,
                              preload: "none",
                              muted: !0,
                              loop: null == u,
                              onEnded: u,
                              className: v,
                          })
                        : null
                    : (0, i.jsx)("img", { src: t.thumbnail, alt: "", className: v, loading: "lazy" }),
                h && (0, i.jsx)(c, { item: t, size: a }),
            ],
        })
    );
}
