t.d(a, { A: () => g });
var i = t(477900),
    n = t(582128),
    l = t(503698),
    s = t.n(l),
    r = t(607470),
    c = t(590251),
    d = t(219222),
    o = t(375708),
    u = t(869006);
function m(e) {
    let { widgetClipId: a, size: t } = e,
        n = Math.round(((0, d.Ib)(a) ?? 0) * 100);
    return (0, i.jsx)("div", {
        className: s()(u.ring, u[t]),
        role: "progressbar",
        "aria-label": o.intl.string(o.t.RFRuwZ),
        "aria-valuenow": n,
        children: (0, i.jsx)(c.a, {
            percent: n,
            strokeSize: c.a.StrokeSizes.MEDIUM,
            colorOverride: "var(--icon-overlay-light)",
        }),
    });
}
var h = t(579460);
function g(e) {
    let { item: a, ringSize: t, isPlaying: l = !1, isMuted: c = !0, fit: d = "cover", onEnded: o, className: u } = e,
        g = n.useRef(null),
        p = "uploading" === a.status,
        v = s()(h.Gt, { [h.ob]: p, [h.k6]: "contain" === d });
    return (
        n.useEffect(() => {
            let e = g.current;
            null != e && (e.muted = c);
        }, [c]),
        n.useEffect(() => {
            let e = g.current;
            null != e && (l ? e.play().catch(() => {}) : e.pause());
        }, [l, a.key]),
        (0, i.jsxs)("div", {
            className: s()(h.$_, u),
            children: [
                "saved" === a.status
                    ? null != a.videoURL
                        ? (0, i.jsx)(r.A, {
                              ref: g,
                              src: a.videoURL,
                              poster: a.thumbnailURL,
                              crossOrigin: "anonymous",
                              preload: "none",
                              muted: !0,
                              loop: null == o,
                              onEnded: o,
                              className: v,
                          })
                        : null
                    : (0, i.jsx)("img", { src: a.thumbnail, alt: "", className: v, loading: "lazy" }),
                p && (0, i.jsx)(m, { widgetClipId: a.key, size: t }),
            ],
        })
    );
}
