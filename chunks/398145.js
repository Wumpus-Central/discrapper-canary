t.d(n, { Z: () => c });
var r = t(806729),
    l = t(146078),
    o = t(228168),
    i = t(388032);
function c(e) {
    let { mutualGuilds: n } = (0, r.Z)(e),
        t = null == n ? void 0 : n.length;
    return [
        {
            section: o.oh.BOT_INFO,
            text: i.intl.string(i.t.jGoPJS),
        },
        {
            section: o.oh.MUTUAL_GUILDS,
            text: (0, l.Z)(t),
        },
        {
            section: o.oh.BOT_DATA_ACCESS,
            text: i.intl.string(i.t.WstFb2),
        },
    ];
}
