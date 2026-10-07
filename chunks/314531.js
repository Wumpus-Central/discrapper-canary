t.d(a, { A: () => p });
var i = t(477900),
    n = t(582128),
    l = t(503698),
    s = t.n(l),
    r = t(192308),
    d = t(607470),
    c = t(590251),
    o = t(219222),
    u = t(660183),
    m = t(869006);
function h(e) {
    let { widgetClipId: a, size: t } = e,
        n = Math.round(((0, o.Ib)(a) ?? 0) * 100);
    return (0, i.jsx)("div", {
        className: s()(m.ring, m[t]),
        role: "progressbar",
        "aria-label": u.intl.string(u.t.RFRuwZ),
        "aria-valuenow": n,
        children: (0, i.jsx)(c.a, {
            percent: n,
            strokeSize: c.a.StrokeSizes.MEDIUM,
            colorOverride: "var(--icon-overlay-light)",
        }),
    });
}
var g = t(579460);
function p(e) {
    let {
            item: a,
            ringSize: t,
            isPlaying: l = !1,
            isMuted: c = !0,
            fit: o = "cover",
            onEnded: u,
            className: m,
            modalKey: p,
        } = e,
        v = n.useRef(null),
        f = "uploading" === a.status,
        x = s()(g.Gt, { [g.ob]: f, [g.k6]: "contain" === o });
    n.useEffect(() => {
        let e = v.current;
        null != e && (e.muted = c);
    }, [c]);
    let j = (0, r.useIsModalAtTop)(p ?? ""),
        N = l && (null == p || j);
    return (
        n.useEffect(() => {
            let e = v.current;
            null != e && (N && e.paused ? e.play().catch(() => {}) : N || e.paused || e.pause());
        }, [N, a.key]),
        (0, i.jsxs)("div", {
            className: s()(g.$_, m),
            children: [
                "saved" === a.status
                    ? null != a.videoURL
                        ? (0, i.jsx)(d.A, {
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
                f && (0, i.jsx)(h, { widgetClipId: a.key, size: t }),
            ],
        })
    );
}
