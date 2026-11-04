var i = n(967198),
    r = n(129230),
    a = n(5180),
    s = n(652215);
let l = "manual_browsing";
n.d(
    t,
    {},
    {
        Kg: function () {
            let e = l;
            return ((l = "manual_browsing"), e);
        },
        LO: function (e, t, n) {
            r.default.track(s.HAw.FAVORITES_GUILD_ADD_TO_FAVORITES, { source: e, channel_type: t, total_favorites: n });
        },
        P: function () {
            r.default.track(s.HAw.FAVORITES_GUILD_ORDER_UPDATED);
        },
        TX: function (e, t) {
            r.default.track(s.HAw.FAVORITES_GUILD_REMOVE_FROM_FAVORITES, { channel_type: e, total_favorites: t });
        },
        mv: function (e) {
            (0, a.ai)(i.A.getGuildId()) || (l = e);
        },
        uS: function (e, t) {
            r.default.track(s.HAw.FAVORITES_GUILD_SETTING_TOGGLED, { source: e, is_visible: t });
        },
    },
);
