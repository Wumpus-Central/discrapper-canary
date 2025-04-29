t.d(n, { Z: () => s });
var l = t(806729),
    r = t(146078),
    i = t(228168),
    o = t(388032);
function s(e) {
    let { mutualGuilds: n } = (0, l.Z)(e),
        t = null == n ? void 0 : n.length;
    return [
        {
            section: i.oh.BOT_INFO,
            text: o.intl.string(o.t.jGoPJS)
        },
        {
            section: i.oh.MUTUAL_GUILDS,
            text: (0, r.Z)(t)
        },
        {
            section: i.oh.BOT_DATA_ACCESS,
            text: o.intl.string(o.t.WstFb2)
        }
    ];
}
