n.d(t, { Z: () => a });
var r = n(806729),
    l = n(146078),
    o = n(228168),
    i = n(388032);
function a(e) {
    let { mutualGuilds: t } = (0, r.Z)(e),
        n = null == t ? void 0 : t.length;
    return [
        {
            section: o.oh.BOT_INFO,
            text: i.intl.string(i.t.jGoPJS),
        },
        {
            section: o.oh.MUTUAL_GUILDS,
            text: (0, l.Z)(n),
        },
        {
            section: o.oh.BOT_DATA_ACCESS,
            text: i.intl.string(i.t.WstFb2),
        },
    ];
}
