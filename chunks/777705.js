"use strict";
n.d(t, { A: () => a });
var i = n(311907),
    s = n(73153);
let l = {};
class r extends i.Ay.Store {
    hasFetched(e) {
        return null != l[e];
    }
    getTopChannelIds(e) {
        return "874345844743213126" === e ? ["1041887225819955252", "985996080107892776", "1035280727610241166"] : l[e];
    }
}
let a = new r(s.h, {
    GUILD_TOP_READ_CHANNELS_FETCH_SUCCESS: function (e) {
        let { guildId: t, topChannelIds: n } = e;
        l[t] = n;
    },
});
