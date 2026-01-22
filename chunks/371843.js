t.d(l, {
    A: () => a,
});
var n = t(913453),
    i = t(186272),
    r = t(518477),
    s = t(985018);

function a(e) {
    let { mutualGuilds: l } = (0, n.A)(e),
        t = null == l ? void 0 : l.length;
    return [
        {
            section: r.RP.BOT_INFO,
            text: s.intl.string(s.t.jGoPJT),
        },
        {
            section: r.RP.MUTUAL_GUILDS,
            text: (0, i.A)(t),
        },
        {
            section: r.RP.BOT_DATA_ACCESS,
            text: s.intl.string(s.t.WstFb0),
        },
    ];
}
