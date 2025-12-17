t.d(n, { Z: () => a });
var l = t(806729),
    i = t(146078),
    o = t(228168),
    r = t(388032);
function a(e) {
    let { mutualGuilds: n } = (0, l.Z)(e),
        t = null == n ? void 0 : n.length;
    return [
        {
            section: o.oh.BOT_INFO,
            text: r.intl.string(r.t.jGoPJT),
        },
        {
            section: o.oh.MUTUAL_GUILDS,
            text: (0, i.Z)(t),
        },
        {
            section: o.oh.BOT_DATA_ACCESS,
            text: r.intl.string(r.t.WstFb0),
        },
    ];
}
