n.d(t, { W: () => d, g: () => u });
var i,
    l = n(612200),
    s = n(323073),
    a = n(398884),
    r = n(772366),
    o = n(652215),
    c = n(204925),
    d =
        (((i = {}).PROCEED = "PROCEED"),
        (i.AGE_GATE_SHOWN = "AGE_GATE_SHOWN"),
        (i.GUILD_CAP_SHOWN = "GUILD_CAP_SHOWN"),
        i);
function u(e) {
    let { guildId: t, guild: n, isMember: i, analyticsLocations: d } = e;
    return null != n && !i && (0, s.xq)() && (0, s.zS)(n)
        ? ((0, l.yO)(c.w_.NSFW_SERVER_INVITE_EMBED), "AGE_GATE_SHOWN")
        : null != t && (0, a.Sn)()
          ? ((0, r.A)({
                analyticsSource: { page: o.liQ.INVITE_EMBED },
                analyticsLocation: { page: o.liQ.INVITE_EMBED, section: o.JJy.GUILD_CAP_UPSELL_MODAL },
                analyticsLocations: d,
            }),
            "GUILD_CAP_SHOWN")
          : "PROCEED";
}
