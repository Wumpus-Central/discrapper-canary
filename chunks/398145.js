t.d(n, { Z: () => i });
var o = t(806729),
    c = t(146078),
    r = t(228168),
    a = t(388032);
function i(e) {
    let { mutualGuilds: n } = (0, o.Z)(e),
        t = null == n ? void 0 : n.length;
    return [
        {
            section: r.oh.BOT_INFO,
            text: a.intl.string(a.t.jGoPJS)
        },
        {
            section: r.oh.MUTUAL_GUILDS,
            text: (0, c.Z)(t)
        },
        {
            section: r.oh.BOT_DATA_ACCESS,
            text: a.intl.string(a.t.WstFb2)
        }
    ];
}
