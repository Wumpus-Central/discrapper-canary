i.d(n, { Z: () => r }), i(627341);
var t = i(278074),
    l = i(200634),
    o = i(228168),
    s = i(388032);
function r(e) {
    var n;
    let i = null === (n = (0, l.Z)(e.id, !0).mutualGuilds) || void 0 === n ? void 0 : n.length;
    return [
        {
            section: o.oh.BOT_INFO,
            text: s.intl.string(s.t.jGoPJS)
        },
        {
            section: o.oh.MUTUAL_GUILDS,
            text: (0, t.EQ)(i)
                .with(void 0, () => s.intl.string(s.t['4lTDZm']))
                .with(0, () => s.intl.string(s.t.jpY0X1))
                .otherwise((e) => s.intl.formatToPlainString(s.t.eE3oen, { count: e }))
        },
        {
            section: o.oh.BOT_DATA_ACCESS,
            text: s.intl.string(s.t.WstFb2)
        }
    ];
}
