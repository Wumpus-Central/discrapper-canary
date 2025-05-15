n.d(t, { c: () => c });
var r = n(954955),
    i = n.n(r),
    l = n(544891),
    a = n(570140),
    o = n(75666),
    s = n(981631);
let c = i()(async (e) => {
    try {
        a.Z.dispatch({ type: 'EVENT_DIRECTORY_FETCH_START' });
        let t = await l.tn.get({
            url: s.ANM.DIRECTORY_CHANNEL_ENTRIES(e),
            query: { type: o.C2.GUILD_SCHEDULED_EVENT },
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
