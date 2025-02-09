t.d(n, { X: () => r });
var l = t(544891),
    i = t(981631);
async function r(e, n, t) {
    return (
        await l.tn.get({
            url: i.ANM.DIRECTORY_ENTRIES_BROADCAST_INFO(e),
            query: {
                type: n,
                entity_id: t
            },
            rejectWithError: !1
        })
    ).body;
}
