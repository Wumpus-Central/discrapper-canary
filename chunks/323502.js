n.d(t, { S: () => s });
var r = n(544891),
    i = n(570140),
    l = n(981631);
function s(e) {
    return r.tn
        .get({
            url: l.ANM.GUILD_TOP_READ_CHANNELS(e),
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
