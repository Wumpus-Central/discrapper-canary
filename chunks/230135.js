var i = n(73153);
n.d(
    t,
    {},
    {
        O: function () {
            i.h.dispatch({ type: "APPLIED_GUILD_BOOST_COUNT_RESET" });
        },
        u: function (e, t) {
            i.h.dispatch({ type: "APPLIED_GUILD_BOOST_COUNT_UPDATE", guildId: e, premiumCount: t });
        },
    },
);
