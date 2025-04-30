t.d(n, { Z: () => o });
var l = t(806729),
    r = t(146078),
    i = t(228168),
    s = t(388032);
function o(e) {
    let { mutualGuilds: n } = (0, l.Z)(e),
        t = null == n ? void 0 : n.length;
    return [
        {
            section: i.oh.BOT_INFO,
            text: s.intl.string(s.t.jGoPJS)
        },
        {
            section: i.oh.MUTUAL_GUILDS,
            text: (0, r.Z)(t)
        },
        {
            section: i.oh.BOT_DATA_ACCESS,
            text: s.intl.string(s.t.WstFb2)
        }
    ];
}
