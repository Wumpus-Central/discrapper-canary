n.d(t, { A: () => u });
var i = n(627968),
    l = n(64700),
    a = n(311907),
    r = n(477782),
    s = n(885574),
    o = n(953584),
    d = n(168820),
    c = n(77350);
function u(e, t) {
    let n = e?.url ?? "",
        u = (0, a.bG)([o.Ay], () => o.Ay.isVideoStatsEnabled(n)),
        g = l.useCallback(() => {
            "" !== n && (0, o.FM)(n);
        }, [n]);
    if (null == e || !(0, c.XB)(e.contentType) || t?.shouldHideMediaOptions === !0) return null;
    let { enableVideoStatsForNerds: A } = (0, d.G)({ location: "useVideoStatsMenuItem" });
    return A
        ? (0, i.jsx)(r.sL, {
              id: "video-stats-for-nerds",
              label: "Stats for Nerds",
              leadingAccessory: { type: "icon", icon: s.m },
              checked: u,
              action: g,
          })
        : null;
}
