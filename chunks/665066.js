n.d(t, { W: () => c, g: () => u });
var i,
    l = n(612200),
    a = n(323073),
    s = n(398884),
    r = n(772366),
    o = n(652215),
    d = n(204925),
    c =
        (((i = {}).PROCEED = "PROCEED"),
        (i.AGE_GATE_SHOWN = "AGE_GATE_SHOWN"),
        (i.GUILD_CAP_SHOWN = "GUILD_CAP_SHOWN"),
        i);
function u(e) {
    let { guild: t, isMember: n, analyticsLocations: i } = e;
    return null != t && !n && (0, a.xq)() && (0, a.zS)(t)
        ? ((0, l.yO)(d.w_.NSFW_SERVER_INVITE_EMBED), "AGE_GATE_SHOWN")
        : (0, s.Sn)()
          ? ((0, r.A)({
                analyticsSource: { page: o.liQ.INVITE_EMBED },
                analyticsLocation: { page: o.liQ.INVITE_EMBED, section: o.JJy.GUILD_CAP_UPSELL_MODAL },
                analyticsLocations: i,
            }),
            "GUILD_CAP_SHOWN")
          : "PROCEED";
}
