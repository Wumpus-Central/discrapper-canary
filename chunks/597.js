n.d(t, {
    c: function () {
        return c;
    }
});
var i = n(954955),
    l = n.n(i),
    r = n(544891),
    a = n(570140),
    s = n(486527),
    o = n(981631);
let c = l()(async (e) => {
    try {
        a.Z.dispatch({ type: 'EVENT_DIRECTORY_FETCH_START' });
        let t = await r.tn.get({
            url: o.ANM.DIRECTORY_CHANNEL_ENTRIES(e),
            query: { type: s.C2.GUILD_SCHEDULED_EVENT },
            rejectWithError: !0
        });
        a.Z.dispatch({
            type: 'EVENT_DIRECTORY_FETCH_SUCCESS',
            channelId: e,
            entries: t.body
        });
    } catch (e) {
        a.Z.dispatch({ type: 'EVENT_DIRECTORY_FETCH_FAILURE' });
    }
}, 200);
