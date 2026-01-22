l.d(t, { A: () => a });
var r = l(311907),
    n = l(71393),
    i = l(652215),
    s = l(333354),
    o = l(985018);
function a(e) {
    return (0, r.bG)([n.A], () => {
        var t;
        return (
            (null == (t = n.A.getGuild(e)) ? void 0 : t.features.has(i.GuildFeatures.PREMIUM_TIER_3_OVERRIDE)) === !0
        );
    })
        ? {
              shouldShow: !0,
              text: o.intl.string(s.default.l9n4QZ),
          }
        : {
              shouldShow: !1,
              text: "",
          };
}
