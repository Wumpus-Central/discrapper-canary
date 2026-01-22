n.d(t, { A: () => d });
var r = n(627968),
    l = n(64700),
    i = n(311907),
    o = n(397927),
    a = n(953584),
    c = n(168820),
    s = n(77350);
function d(e, t) {
    var n;
    let d = null != (n = null == e ? void 0 : e.url) ? n : "",
        u = (0, i.bG)([a.Ay], () => a.Ay.isVideoStatsEnabled(d)),
        f = l.useCallback(() => {
            "" !== d && (0, a.FM)(d);
        }, [d]);
    if (null == e || !(0, s.XB)(e.contentType) || (null == t ? void 0 : t.shouldHideMediaOptions) === !0) return null;
    let { enableVideoStatsForNerds: g } = (0, c.G)({ location: "useVideoStatsMenuItem" });
    return g
        ? (0, r.jsx)(o.sLh, {
              id: "video-stats-for-nerds",
              label: "Stats for Nerds",
              checked: u,
              action: f,
          })
        : null;
}
