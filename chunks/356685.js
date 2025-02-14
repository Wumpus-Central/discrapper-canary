l.d(n, { X: () => a });
var t = l(544891),
    i = l(981631);
async function a(e, n, l) {
    return (
        await t.tn.get({
            url: i.ANM.DIRECTORY_ENTRIES_BROADCAST_INFO(e),
            query: {
                type: n,
                entity_id: l
            },
            rejectWithError: !1
        })
    ).body;
}
