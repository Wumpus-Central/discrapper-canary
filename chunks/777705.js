n.d(t, {
    A: () => a,
});
var r = n(311907),
    i = n(73153);
let l = {};
class s extends r.Ay.Store {
    hasFetched(e) {
        return null != l[e];
    }
    getTopChannelIds(e) {
        return "874345844743213126" === e ? ["1041887225819955252", "985996080107892776", "1035280727610241166"] : l[e];
    }
}
let a = new s(i.h, {
    GUILD_TOP_READ_CHANNELS_FETCH_SUCCESS: function (e) {
        let { guildId: t, topChannelIds: n } = e;
        l[t] = n;
    },
});
