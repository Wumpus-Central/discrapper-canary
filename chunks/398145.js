t.d(n, { Z: () => s });
var i = t(806729),
    o = t(146078),
    l = t(228168),
    r = t(388032);
function s(e) {
    let { mutualGuilds: n } = (0, i.Z)(e),
        t = null == n ? void 0 : n.length;
    return [
        {
            section: l.oh.BOT_INFO,
            text: r.intl.string(r.t.jGoPJS)
        },
        {
            section: l.oh.MUTUAL_GUILDS,
            text: (0, o.Z)(t)
        },
        {
            section: l.oh.BOT_DATA_ACCESS,
            text: r.intl.string(r.t.WstFb2)
        }
    ];
}
