n.d(t, { v: () => l });
var i = n(570140);
let l = (e, t) => {
    i.Z.wait(() => {
        i.Z.dispatch({
            type: 'APPLIED_GUILD_BOOST_COUNT_UPDATE',
            guildId: e,
            premiumCount: t
        });
    });
};
