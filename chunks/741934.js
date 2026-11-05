t.d(a, { A: () => h });
var i = t(477900),
    n = t(582128),
    l = t(503698),
    s = t.n(l),
    r = t(192308),
    c = t(607470),
    o = t(590251),
    d = t(219222),
    u = t(792996),
    m = t(869006);
function p(e) {
    let { widgetClipId: a, size: t } = e,
        n = Math.round(((0, d.Ib)(a) ?? 0) * 100);
    return (0, i.jsx)("div", {
        className: s()(m.ring, m[t]),
        role: "progressbar",
        "aria-label": u.intl.string(u.t.RFRuwZ),
        "aria-valuenow": n,
        children: (0, i.jsx)(o.a, {
            percent: n,
            strokeSize: o.a.StrokeSizes.MEDIUM,
            colorOverride: "var(--icon-overlay-light)",
        }),
    });
}
var g = t(579460);
function h(e) {
    let {
            item: a,
            ringSize: t,
            isPlaying: l = !1,
            isMuted: o = !0,
            fit: d = "cover",
            onEnded: u,
            className: m,
            modalKey: h,
        } = e,
        v = n.useRef(null),
        f = "uploading" === a.status,
        x = s()(g.Gt, { [g.ob]: f, [g.k6]: "contain" === d });
    n.useEffect(() => {
        let e = v.current;
        null != e && (e.muted = o);
    }, [o]);
    let j = (0, r.LA)(h ?? ""),
        I = l && (null == h || j);
    return (
        n.useEffect(() => {
            let e = v.current;
            null != e && (I && e.paused ? e.play().catch(() => {}) : I || e.paused || e.pause());
        }, [I, a.key]),
        (0, i.jsxs)("div", {
            className: s()(g.$_, m),
            children: [
                "saved" === a.status
                    ? null != a.videoURL
                        ? (0, i.jsx)(c.A, {
                              ref: v,
                              src: a.videoURL,
                              poster: a.thumbnailURL,
                              crossOrigin: "anonymous",
                              preload: "none",
                              muted: !0,
                              loop: null == u,
                              onEnded: u,
                              className: x,
                          })
                        : null
                    : (0, i.jsx)("img", { src: a.thumbnail, alt: "", className: x, loading: "lazy" }),
                f && (0, i.jsx)(p, { widgetClipId: a.key, size: t }),
            ],
        })
    );
}
