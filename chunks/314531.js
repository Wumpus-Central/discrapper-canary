n.d(a, { A: () => g });
var t = n(477900),
    i = n(582128),
    l = n(503698),
    s = n.n(l),
    r = n(607470),
    c = n(590251),
    d = n(219222),
    o = n(375708),
    u = n(869006);
function m(e) {
    let { widgetClipId: a, size: n } = e,
        i = Math.round(((0, d.Ib)(a) ?? 0) * 100);
    return (0, t.jsx)("div", {
        className: s()(u.ring, u[n]),
        role: "progressbar",
        "aria-label": o.intl.string(o.t.RFRuwZ),
        "aria-valuenow": i,
        children: (0, t.jsx)(c.a, {
            percent: i,
            strokeSize: c.a.StrokeSizes.MEDIUM,
            colorOverride: "var(--icon-overlay-light)",
        }),
    });
}
var h = n(579460);
function g(e) {
    let { item: a, ringSize: n, isPlaying: l = !1, isMuted: c = !0, fit: d = "cover", onEnded: o, className: u } = e,
        g = i.useRef(null),
        p = "uploading" === a.status,
        v = s()(h.Gt, { [h.ob]: p, [h.k6]: "contain" === d });
    return (
        i.useEffect(() => {
            let e = g.current;
            null != e && (e.muted = c);
        }, [c]),
        i.useEffect(() => {
            let e = g.current;
            null != e && (l ? e.play().catch(() => {}) : e.pause());
        }, [l, a.key]),
        (0, t.jsxs)("div", {
            className: s()(h.$_, u),
            children: [
                "saved" === a.status
                    ? null != a.videoURL
                        ? (0, t.jsx)(r.A, {
                              ref: g,
                              src: a.videoURL,
                              poster: a.thumbnailURL,
                              preload: "none",
                              muted: !0,
                              loop: null == o,
                              onEnded: o,
                              className: v,
                          })
                        : null
                    : (0, t.jsx)("img", { src: a.thumbnail, alt: "", className: v, loading: "lazy" }),
                p && (0, t.jsx)(m, { widgetClipId: a.key, size: n }),
            ],
        })
    );
}
