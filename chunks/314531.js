a.d(t, { A: () => g });
var i = a(477900),
    n = a(582128),
    l = a(503698),
    s = a.n(l),
    r = a(192308),
    c = a(607470),
    d = a(590251),
    o = a(219222),
    u = a(105292),
    m = a(869006);
function h(e) {
    let { widgetClipId: t, size: a } = e,
        n = Math.round(((0, o.Ib)(t) ?? 0) * 100);
    return (0, i.jsx)("div", {
        className: s()(m.ring, m[a]),
        role: "progressbar",
        "aria-label": u.intl.string(u.t.RFRuwZ),
        "aria-valuenow": n,
        children: (0, i.jsx)(d.a, {
            percent: n,
            strokeSize: d.a.StrokeSizes.MEDIUM,
            colorOverride: "var(--icon-overlay-light)",
        }),
    });
}
var p = a(579460);
function g(e) {
    let {
            item: t,
            ringSize: a,
            isPlaying: l = !1,
            isMuted: d = !0,
            fit: o = "cover",
            onEnded: u,
            className: m,
            modalKey: g,
        } = e,
        v = n.useRef(null),
        f = "uploading" === t.status,
        x = s()(p.Gt, { [p.ob]: f, [p.k6]: "contain" === o });
    n.useEffect(() => {
        let e = v.current;
        null != e && (e.muted = d);
    }, [d]);
    let j = (0, r.useIsModalAtTop)(g ?? ""),
        N = l && (null == g || j);
    return (
        n.useEffect(() => {
            let e = v.current;
            null != e && (N && e.paused ? e.play().catch(() => {}) : N || e.paused || e.pause());
        }, [N, t.key]),
        (0, i.jsxs)("div", {
            className: s()(p.$_, m),
            children: [
                "saved" === t.status
                    ? null != t.videoURL
                        ? (0, i.jsx)(c.A, {
                              ref: v,
                              src: t.videoURL,
                              poster: t.thumbnailURL,
                              crossOrigin: "anonymous",
                              preload: "none",
                              muted: !0,
                              loop: null == u,
                              onEnded: u,
                              className: x,
                          })
                        : null
                    : (0, i.jsx)("img", { src: t.thumbnail, alt: "", className: x, loading: "lazy" }),
                f && (0, i.jsx)(h, { widgetClipId: t.key, size: a }),
            ],
        })
    );
}
