n.d(t, {
    e: () => c,
    o: () => u,
});
var r = n(758119),
    i = n(622822),
    a = n(451603),
    o = n(885714),
    s = n(981631),
    l = n(723359),
    c = (function (e) {
        return (
            (e.PROCEED = "PROCEED"), (e.AGE_GATE_SHOWN = "AGE_GATE_SHOWN"), (e.GUILD_CAP_SHOWN = "GUILD_CAP_SHOWN"), e
        );
    })({});
function u(e) {
    let { guild: t, isMember: n, analyticsLocations: c } = e;
    return null != t && !n && (0, i.bN)() && (0, i.Yt)(t)
        ? ((0, r.mN)(l.L0.NSFW_SERVER_INVITE_EMBED), "AGE_GATE_SHOWN")
        : (0, a.yU)()
          ? ((0, o.Z)({
                analyticsSource: { page: s.ZY5.INVITE_EMBED },
                analyticsLocation: {
                    page: s.ZY5.INVITE_EMBED,
                    section: s.jXE.GUILD_CAP_UPSELL_MODAL,
                },
                analyticsLocations: c,
            }),
            "GUILD_CAP_SHOWN")
          : "PROCEED";
}
