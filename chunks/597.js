n.d(t, { c: () => c });
var i = n(954955),
    l = n.n(i),
    a = n(544891),
    r = n(570140),
    s = n(75666),
    o = n(981631);
let c = l()(async (e) => {
    try {
        r.Z.dispatch({ type: 'EVENT_DIRECTORY_FETCH_START' });
        let t = await a.tn.get({
            url: o.ANM.DIRECTORY_CHANNEL_ENTRIES(e),
            query: { type: s.C2.GUILD_SCHEDULED_EVENT },
            rejectWithError: !0
        });
        r.Z.dispatch({
            type: 'EVENT_DIRECTORY_FETCH_SUCCESS',
            channelId: e,
            entries: t.body
        });
    } catch (e) {
        r.Z.dispatch({ type: 'EVENT_DIRECTORY_FETCH_FAILURE' });
    }
}, 200);
