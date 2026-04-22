n.d(t, { A: () => a });
var i = n(311907),
    l = n(73153);
let s = {};
class r extends i.Ay.Store {
    hasFetched(e) {
        return null != s[e];
    }
    getTopChannelIds(e) {
        return "874345844743213126" === e ? ["1041887225819955252", "985996080107892776", "1035280727610241166"] : s[e];
    }
}
let a = new r(l.h, {
    GUILD_TOP_READ_CHANNELS_FETCH_SUCCESS: function (e) {
        let { guildId: t, topChannelIds: n } = e;
        s[t] = n;
    },
});
