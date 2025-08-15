n.d(t, { Z: () => a });
var r = n(806729),
    i = n(146078),
    l = n(228168),
    o = n(388032);
function a(e) {
    let { mutualGuilds: t } = (0, r.Z)(e),
        n = null == t ? void 0 : t.length;
    return [
        {
            section: l.oh.BOT_INFO,
            text: o.intl.string(o.t.jGoPJS),
        },
        {
            section: l.oh.MUTUAL_GUILDS,
            text: (0, i.Z)(n),
        },
        {
            section: l.oh.BOT_DATA_ACCESS,
            text: o.intl.string(o.t.WstFb2),
        },
    ];
}
