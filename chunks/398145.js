t.d(n, { Z: () => s });
var r = t(806729),
    o = t(146078),
    i = t(228168),
    l = t(388032);
function s(e) {
    let { mutualGuilds: n } = (0, r.Z)(e),
        t = null == n ? void 0 : n.length;
    return [
        {
            section: i.oh.BOT_INFO,
            text: l.NW.string(l.t.jGoPJS)
        },
        {
            section: i.oh.MUTUAL_GUILDS,
            text: (0, o.Z)(t)
        },
        {
            section: i.oh.BOT_DATA_ACCESS,
            text: l.NW.string(l.t.WstFb2)
        }
    ];
}
