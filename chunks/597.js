n.d(e, { c: () => u });
var i = n(954955),
    l = n.n(i),
    d = n(544891),
    r = n(570140),
    a = n(486527),
    _ = n(981631);
let u = l()(async (t) => {
    try {
        r.Z.dispatch({ type: 'EVENT_DIRECTORY_FETCH_START' });
        let e = await d.tn.get({
            url: _.ANM.DIRECTORY_CHANNEL_ENTRIES(t),
            query: { type: a.C2.GUILD_SCHEDULED_EVENT },
            rejectWithError: !0
        });
        r.Z.dispatch({
            type: 'EVENT_DIRECTORY_FETCH_SUCCESS',
            channelId: t,
            entries: e.body
        });
    } catch (t) {
        r.Z.dispatch({ type: 'EVENT_DIRECTORY_FETCH_FAILURE' });
    }
}, 200);
