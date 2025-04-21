n.d(t, { X: () => i });
var l = n(544891),
    r = n(981631);
async function i(e, t, n) {
    return (
        await l.tn.get({
            url: r.ANM.DIRECTORY_ENTRIES_BROADCAST_INFO(e),
            query: {
                type: t,
                entity_id: n
            },
            rejectWithError: !1
        })
    ).body;
}
