n.d(t, { A: () => c });
var i = n(627968),
    l = n(64700),
    a = n(311907),
    r = n(397927),
    s = n(953584),
    o = n(168820),
    d = n(77350);
function c(e, t) {
    let n = e?.url ?? "",
        c = (0, a.bG)([s.Ay], () => s.Ay.isVideoStatsEnabled(n)),
        u = l.useCallback(() => {
            "" !== n && (0, s.FM)(n);
        }, [n]);
    if (null == e || !(0, d.XB)(e.contentType) || t?.shouldHideMediaOptions === !0) return null;
    let { enableVideoStatsForNerds: g } = (0, o.G)({ location: "useVideoStatsMenuItem" });
    return g
        ? (0, i.jsx)(r.sLh, {
              id: "video-stats-for-nerds",
              label: "Stats for Nerds",
              leadingAccessory: { type: "icon", icon: r.mir },
              checked: c,
              action: u,
          })
        : null;
}
