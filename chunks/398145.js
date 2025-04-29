n.d(t, { Z: () => o });
var l = n(806729),
    r = n(146078),
    i = n(228168),
    s = n(388032);
function o(e) {
    let { mutualGuilds: t } = (0, l.Z)(e),
        n = null == t ? void 0 : t.length;
    return [
        {
            section: i.oh.BOT_INFO,
            text: s.intl.string(s.t.jGoPJS)
        },
        {
            section: i.oh.MUTUAL_GUILDS,
            text: (0, r.Z)(n)
        },
        {
            section: i.oh.BOT_DATA_ACCESS,
            text: s.intl.string(s.t.WstFb2)
        }
    ];
}
