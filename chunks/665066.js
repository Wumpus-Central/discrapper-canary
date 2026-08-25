n.d(_, { W: () => O, g: () => s });
var i,
    a = n(612200),
    A = n(323073),
    S = n(398884),
    c = n(772366),
    t = n(652215),
    D = n(204925),
    O =
        (((i = {}).PROCEED = "PROCEED"),
        (i.AGE_GATE_SHOWN = "AGE_GATE_SHOWN"),
        (i.GUILD_CAP_SHOWN = "GUILD_CAP_SHOWN"),
        i);
function s(E) {
    let {
        guildId: _,
        guild: n,
        isMember: i,
        analyticsLocations: O,
        ageGateSource: s = D.w_.NSFW_SERVER_INVITE_EMBED,
        onGateConfirm: C,
    } = E;
    return null != n && !i && (0, A.zS)(n)
        ? ((0, a.yO)(s, { onConfirm: C, guild: n }), "AGE_GATE_SHOWN")
        : null != _ && (0, S.Sn)()
          ? ((0, c.A)({
                analyticsSource: { page: t.liQ.INVITE_EMBED },
                analyticsLocation: { page: t.liQ.INVITE_EMBED, section: t.JJy.GUILD_CAP_UPSELL_MODAL },
                analyticsLocations: O,
            }),
            "GUILD_CAP_SHOWN")
          : "PROCEED";
}
