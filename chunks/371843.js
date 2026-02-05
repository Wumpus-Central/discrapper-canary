n.d(t, { A: () => r });
var i = n(913453),
    s = n(186272),
    l = n(518477),
    a = n(985018);
function r(e) {
    let { mutualGuilds: t } = (0, i.A)(e),
        n = t?.length;
    return [
        { section: l.RP.BOT_INFO, text: a.intl.string(a.t.jGoPJT) },
        { section: l.RP.MUTUAL_GUILDS, text: (0, s.A)(n) },
        { section: l.RP.BOT_DATA_ACCESS, text: a.intl.string(a.t.WstFb0) },
    ];
}
