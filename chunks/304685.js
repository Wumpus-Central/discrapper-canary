n.d(t, { Z: () => u });
var r = n(54381),
    i = n(473749),
    l = n(442837),
    o = n(481060),
    a = n(156077),
    s = n(240452),
    c = n(406432);
function u(e, t) {
    var n;
    let u = null != (n = null == e ? void 0 : e.url) ? n : "",
        d = (0, l.e7)([a.ZP], () => a.ZP.isVideoStatsEnabled(u)),
        f = i.useCallback(() => {
            "" !== u && (0, a.jL)(u);
        }, [u]);
    if (null == e || !(0, c.X2)(e.contentType) || (null == t ? void 0 : t.shouldHideMediaOptions) === !0) return null;
    let { enableVideoStatsForNerds: g } = (0, s.w)({ location: "useVideoStatsMenuItem" });
    return g
        ? (0, r.jsx)(o.S89, {
              id: "video-stats-for-nerds",
              label: "Stats for Nerds",
              checked: d,
              action: f,
          })
        : null;
}
