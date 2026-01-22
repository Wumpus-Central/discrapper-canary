n.d(t, {
    W: () => c,
    g: () => u,
});
var r = n(612200),
    i = n(323073),
    a = n(398884),
    s = n(772366),
    o = n(652215),
    l = n(204925),
    c = (function (e) {
        return (
            (e.PROCEED = "PROCEED"), (e.AGE_GATE_SHOWN = "AGE_GATE_SHOWN"), (e.GUILD_CAP_SHOWN = "GUILD_CAP_SHOWN"), e
        );
    })({});
function u(e) {
    let { guild: t, isMember: n, analyticsLocations: c } = e;
    return null != t && !n && (0, i.xq)() && (0, i.zS)(t)
        ? ((0, r.yO)(l.w_.NSFW_SERVER_INVITE_EMBED), "AGE_GATE_SHOWN")
        : (0, a.Sn)()
          ? ((0, s.A)({
                analyticsSource: { page: o.liQ.INVITE_EMBED },
                analyticsLocation: {
                    page: o.liQ.INVITE_EMBED,
                    section: o.JJy.GUILD_CAP_UPSELL_MODAL,
                },
                analyticsLocations: c,
            }),
            "GUILD_CAP_SHOWN")
          : "PROCEED";
}
