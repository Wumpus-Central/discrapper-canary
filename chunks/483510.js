var t = r(855986),
    u = r(138298),
    a = r(940382),
    l = r(799704);
r.d(
    n,
    {},
    {
        HP: function (e) {
            return (0, t.bG)([l.Ay], () => null != e && l.Ay.getCurrentSidebarChannelId(e) === e, [e]);
        },
        ci: function (e, n) {
            u.A.openChannelAsSidebar({ guildId: e, channelId: n, baseChannelId: n, details: { type: a.kk.CHAT } });
        },
        m: function (e) {
            u.A.closeChannelSidebar(e);
        },
    },
);
