n.d(t, {
    A: () => d,
});
var r = n(627968),
    i = n(64700),
    l = n(311907),
    a = n(397927),
    o = n(953584),
    c = n(168820),
    s = n(77350);

function d(e, t) {
    var n;
    let d = null != (n = null == e ? void 0 : e.url) ? n : "",
        u = (0, l.bG)([o.Ay], () => o.Ay.isVideoStatsEnabled(d)),
        g = i.useCallback(() => {
            "" !== d && (0, o.FM)(d);
        }, [d]);
    if (null == e || !(0, s.XB)(e.contentType) || (null == t ? void 0 : t.shouldHideMediaOptions) === !0) return null;
    let { enableVideoStatsForNerds: p } = (0, c.G)({
        location: "useVideoStatsMenuItem",
    });
    return p
        ? (0, r.jsx)(a.sLh, {
              id: "video-stats-for-nerds",
              label: "Stats for Nerds",
              leadingAccessory: {
                  type: "icon",
                  icon: a.mir,
              },
              checked: u,
              action: g,
          })
        : null;
}
