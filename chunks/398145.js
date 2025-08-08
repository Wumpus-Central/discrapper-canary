n.d(t, { Z: () => a });
var r = n(806729),
    l = n(146078),
    i = n(228168),
    o = n(388032);
function a(e) {
    let { mutualGuilds: t } = (0, r.Z)(e),
        n = null == t ? void 0 : t.length;
    return [
        {
            section: i.oh.BOT_INFO,
            text: o.intl.string(o.t.jGoPJS),
        },
        {
            section: i.oh.MUTUAL_GUILDS,
            text: (0, l.Z)(n),
        },
        {
            section: i.oh.BOT_DATA_ACCESS,
            text: o.intl.string(o.t.WstFb2),
        },
    ];
}
