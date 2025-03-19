t.d(n, { Z: () => s }), t(627341);
var r = t(278074),
    o = t(806729),
    i = t(228168),
    l = t(388032);
function s(e) {
    let { mutualGuilds: n } = (0, o.Z)(e),
        t = null == n ? void 0 : n.length;
    return [
        {
            section: i.oh.BOT_INFO,
            text: l.NW.string(l.t.jGoPJS)
        },
        {
            section: i.oh.MUTUAL_GUILDS,
            text: (0, r.EQ)(t)
                .with(void 0, () => l.NW.string(l.t['4lTDZm']))
                .with(0, () => l.NW.string(l.t.jpY0X1))
                .otherwise((e) => l.NW.formatToPlainString(l.t.eE3oen, { count: e }))
        },
        {
            section: i.oh.BOT_DATA_ACCESS,
            text: l.NW.string(l.t.WstFb2)
        }
    ];
}
