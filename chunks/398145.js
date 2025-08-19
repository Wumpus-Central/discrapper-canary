n.d(t, { Z: () => a });
var r = n(806729),
    o = n(146078),
    i = n(228168),
    l = n(388032);
function a(e) {
    let { mutualGuilds: t } = (0, r.Z)(e),
        n = null == t ? void 0 : t.length;
    return [
        {
            section: i.oh.BOT_INFO,
            text: l.intl.string(l.t.jGoPJS),
        },
        {
            section: i.oh.MUTUAL_GUILDS,
            text: (0, o.Z)(n),
        },
        {
            section: i.oh.BOT_DATA_ACCESS,
            text: l.intl.string(l.t.WstFb2),
        },
    ];
}
