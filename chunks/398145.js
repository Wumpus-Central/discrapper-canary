t.d(n, { Z: () => c });
var r = t(806729),
    o = t(146078),
    l = t(228168),
    i = t(388032);
function c(e) {
    let { mutualGuilds: n } = (0, r.Z)(e),
        t = null == n ? void 0 : n.length;
    return [
        {
            section: l.oh.BOT_INFO,
            text: i.intl.string(i.t.jGoPJS),
        },
        {
            section: l.oh.MUTUAL_GUILDS,
            text: (0, o.Z)(t),
        },
        {
            section: l.oh.BOT_DATA_ACCESS,
            text: i.intl.string(i.t.WstFb2),
        },
    ];
}
