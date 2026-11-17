a.d(t, { A: () => g });
var i = a(477900),
    s = a(582128),
    n = a(503698),
    l = a.n(n),
    r = a(192308),
    u = a(607470),
    d = a(590251),
    o = a(219222),
    c = a(792996),
    p = a(869006);
function h(e) {
    let { widgetClipId: t, size: a } = e,
        s = Math.round(((0, o.Ib)(t) ?? 0) * 100);
    return (0, i.jsx)("div", {
        className: l()(p.ring, p[a]),
        role: "progressbar",
        "aria-label": c.intl.string(c.t.RFRuwZ),
        "aria-valuenow": s,
        children: (0, i.jsx)(d.a, {
            percent: s,
            strokeSize: d.a.StrokeSizes.MEDIUM,
            colorOverride: "var(--icon-overlay-light)",
        }),
    });
}
var m = a(579460);
function g(e) {
    let {
            item: t,
            ringSize: a,
            isPlaying: n = !1,
            isMuted: d = !0,
            fit: o = "cover",
            onEnded: c,
            className: p,
            modalKey: g,
        } = e,
        v = s.useRef(null),
        f = "uploading" === t.status,
        R = l()(m.Gt, { [m.ob]: f, [m.k6]: "contain" === o });
    s.useEffect(() => {
        let e = v.current;
        null != e && (e.muted = d);
    }, [d]);
    let L = (0, r.LA)(g ?? ""),
        w = n && (null == g || L);
    return (
        s.useEffect(() => {
            let e = v.current;
            null != e && (w && e.paused ? e.play().catch(() => {}) : w || e.paused || e.pause());
        }, [w, t.key]),
        (0, i.jsxs)("div", {
            className: l()(m.$_, p),
            children: [
                "saved" === t.status
                    ? null != t.videoURL
                        ? (0, i.jsx)(u.A, {
                              ref: v,
                              src: t.videoURL,
                              poster: t.thumbnailURL,
                              crossOrigin: "anonymous",
                              preload: "none",
                              muted: !0,
                              loop: null == c,
                              onEnded: c,
                              className: R,
                          })
                        : null
                    : (0, i.jsx)("img", { src: t.thumbnail, alt: "", className: R, loading: "lazy" }),
                f && (0, i.jsx)(h, { widgetClipId: t.key, size: a }),
            ],
        })
    );
}
