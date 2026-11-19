var r = t(855986),
    u = t(138298),
    a = t(940382),
    l = t(799704);
t.d(
    n,
    {},
    {
        HP: function (e) {
            return (0, r.bG)([l.Ay], () => null != e && l.Ay.getCurrentSidebarChannelId(e) === e, [e]);
        },
        ci: function (e, n) {
            u.A.openChannelAsSidebar({ guildId: e, channelId: n, baseChannelId: n, details: { type: a.kk.CHAT } });
        },
        m: function (e) {
            u.A.closeChannelSidebar(e);
        },
    },
);
