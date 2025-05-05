n.d(t, {
    XA: () => c,
    ep: () => u,
    sE: () => d
});
var r = n(544891),
    i = n(570140),
    o = n(786761),
    a = n(768943),
    s = n(686478),
    l = n(981631);
async function c(e) {
    let t = await r.tn.put({
        url: l.ANM.PUT_SAVED_MESSAGE(e.channelId, e.messageId),
        body: { due_at: e.dueAt },
        rejectWithError: !1
    });
    if (t.ok) return (0, s.jk)(t.body);
}
async function u(e) {
    if (
        (
            await r.tn.del({
                url: l.ANM.DELETE_SAVED_MESSAGE(e.channelId, e.messageId),
                rejectWithError: !1
            })
        ).ok
    )
        return !0;
}
async function d() {
    if (!a.Z.getIsStale()) return Promise.resolve();
    let e = (
        await r.tn.get({
            url: l.ANM.GET_SAVED_MESSAGES,
            rejectWithError: !1
        })
    ).body.results.map((e) => ({
        message: null != e.message ? (0, o.e5)(e.message) : null,
        saveData: (0, s.vL)(e.save_data)
    }));
    i.Z.dispatch({
        type: 'SAVED_MESSAGES_UPDATE',
        savedMessages: e
    });
}
