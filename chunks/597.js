e.d(t, {
    c: function () {
        return u;
    }
});
var i = e(954955),
    r = e.n(i),
    l = e(544891),
    a = e(570140),
    d = e(486527),
    c = e(981631);
let u = r()(async (n) => {
    try {
        a.Z.dispatch({ type: 'EVENT_DIRECTORY_FETCH_START' });
        let t = await l.tn.get({
            url: c.ANM.DIRECTORY_CHANNEL_ENTRIES(n),
            query: { type: d.C2.GUILD_SCHEDULED_EVENT },
            rejectWithError: !0
        });
        a.Z.dispatch({
            type: 'EVENT_DIRECTORY_FETCH_SUCCESS',
            channelId: n,
            entries: t.body
        });
    } catch (n) {
        a.Z.dispatch({ type: 'EVENT_DIRECTORY_FETCH_FAILURE' });
    }
}, 200);
