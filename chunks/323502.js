n.d(t, {
    S: function () {
        return s;
    }
});
var i = n(544891),
    r = n(570140),
    l = n(981631);
function s(e) {
    return i.tn
        .get({
            url: l.ANM.GUILD_TOP_READ_CHANNELS(e),
            oldFormErrors: !0,
            rejectWithError: !1
        })
        .then((t) => {
            let { body: n } = t;
            r.Z.dispatch({
                type: 'GUILD_TOP_READ_CHANNELS_FETCH_SUCCESS',
                guildId: e,
                topChannelIds: n
            });
        });
}
