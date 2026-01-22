n.d(t, { A: () => s });
var r = n(562465),
    i = n(73153),
    l = n(652215);
function s(e) {
    return r.Bo.get({
        url: l.Rsh.GUILD_TOP_READ_CHANNELS(e),
        oldFormErrors: !0,
        rejectWithError: !1,
    }).then((t) => {
        let { body: n } = t;
        i.h.dispatch({
            type: "GUILD_TOP_READ_CHANNELS_FETCH_SUCCESS",
            guildId: e,
            topChannelIds: n,
        });
    });
}
