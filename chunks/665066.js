n.d(t, {
    W: () => u,
    g: () => d,
});
var r,
    i = n(612200),
    l = n(323073),
    a = n(398884),
    s = n(772366),
    o = n(652215),
    c = n(204925),
    u =
        (((r = {}).PROCEED = "PROCEED"),
        (r.AGE_GATE_SHOWN = "AGE_GATE_SHOWN"),
        (r.GUILD_CAP_SHOWN = "GUILD_CAP_SHOWN"),
        r);

function d(e) {
    let { guild: t, isMember: n, analyticsLocations: r } = e;
    return null != t && !n && (0, l.xq)() && (0, l.zS)(t)
        ? ((0, i.yO)(c.w_.NSFW_SERVER_INVITE_EMBED), "AGE_GATE_SHOWN")
        : (0, a.Sn)()
          ? ((0, s.A)({
                analyticsSource: {
                    page: o.liQ.INVITE_EMBED,
                },
                analyticsLocation: {
                    page: o.liQ.INVITE_EMBED,
                    section: o.JJy.GUILD_CAP_UPSELL_MODAL,
                },
                analyticsLocations: r,
            }),
            "GUILD_CAP_SHOWN")
          : "PROCEED";
}
