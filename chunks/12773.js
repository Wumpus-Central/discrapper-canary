"use strict";
n.d(t, { A: () => r });
var i = n(562465),
    s = n(73153),
    l = n(652215);
function r(e) {
    return i.Bo.get({ url: l.Rsh.GUILD_TOP_READ_CHANNELS(e), oldFormErrors: !0, rejectWithError: !1 }).then((t) => {
        let { body: n } = t;
        s.h.dispatch({ type: "GUILD_TOP_READ_CHANNELS_FETCH_SUCCESS", guildId: e, topChannelIds: n });
    });
}
