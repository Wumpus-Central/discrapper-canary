n.d(t, { S: () => a });
var r = n(544891),
    i = n(570140),
    s = n(981631);
function a(e) {
    return r.tn
        .get({
            url: s.ANM.GUILD_TOP_READ_CHANNELS(e),
            oldFormErrors: !0,
            rejectWithError: !1
        })
        .then((t) => {
            let { body: n } = t;
            i.Z.dispatch({
                type: 'GUILD_TOP_READ_CHANNELS_FETCH_SUCCESS',
                guildId: e,
                topChannelIds: n
            });
        });
}
