n.d(t, { c: () => c });
var r = n(954955),
    i = n.n(r),
    l = n(544891),
    o = n(570140),
    a = n(75666),
    s = n(981631);
let c = i()(async (e) => {
    try {
        o.Z.dispatch({ type: 'EVENT_DIRECTORY_FETCH_START' });
        let t = await l.tn.get({
            url: s.ANM.DIRECTORY_CHANNEL_ENTRIES(e),
            query: { type: a.C2.GUILD_SCHEDULED_EVENT },
            rejectWithError: !0
        });
        o.Z.dispatch({
            type: 'EVENT_DIRECTORY_FETCH_SUCCESS',
            channelId: e,
            entries: t.body
        });
    } catch (e) {
        o.Z.dispatch({ type: 'EVENT_DIRECTORY_FETCH_FAILURE' });
    }
}, 200);
