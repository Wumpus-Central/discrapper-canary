e.d(n, { c: () => s });
var i = e(954955),
    _ = e.n(i),
    d = e(544891),
    a = e(570140),
    l = e(75666),
    r = e(981631);
let s = _()(async (t) => {
    try {
        a.Z.dispatch({ type: 'EVENT_DIRECTORY_FETCH_START' });
        let n = await d.tn.get({
            url: r.ANM.DIRECTORY_CHANNEL_ENTRIES(t),
            query: { type: l.C2.GUILD_SCHEDULED_EVENT },
            rejectWithError: !0
        });
        a.Z.dispatch({
            type: 'EVENT_DIRECTORY_FETCH_SUCCESS',
            channelId: t,
            entries: n.body
        });
    } catch (t) {
        a.Z.dispatch({ type: 'EVENT_DIRECTORY_FETCH_FAILURE' });
    }
}, 200);
