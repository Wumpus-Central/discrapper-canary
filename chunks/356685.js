n.d(t, { X: () => i });
var r = n(544891),
    l = n(981631);
async function i(e, t, n) {
    return (
        await r.tn.get({
            url: l.ANM.DIRECTORY_ENTRIES_BROADCAST_INFO(e),
            query: {
                type: t,
                entity_id: n
            },
            rejectWithError: !1
        })
    ).body;
}
