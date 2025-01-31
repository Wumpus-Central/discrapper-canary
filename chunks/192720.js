n.d(t, {
    XA: () => u,
    ep: () => c,
    sE: () => d
});
var i = n(544891),
    r = n(570140),
    a = n(786761),
    s = n(768943),
    o = n(686478),
    l = n(981631);
async function u(e) {
    let t = await i.tn.put({
        url: l.ANM.PUT_SAVED_MESSAGE(e.channelId, e.messageId),
        body: { due_at: e.dueAt },
        rejectWithError: !1
    });
    if (t.ok) return (0, o.jk)(t.body);
}
async function c(e) {
    if (
        (
            await i.tn.del({
                url: l.ANM.DELETE_SAVED_MESSAGE(e.channelId, e.messageId),
                rejectWithError: !1
            })
        ).ok
    )
        return !0;
}
async function d() {
    if (!s.Z.getIsStale()) return Promise.resolve();
    let e = (
        await i.tn.get({
            url: l.ANM.GET_SAVED_MESSAGES,
            rejectWithError: !1
        })
    ).body.results.map((e) => ({
        message: null != e.message ? (0, a.e5)(e.message) : null,
        saveData: (0, o.vL)(e.save_data)
    }));
    r.Z.dispatch({
        type: 'SAVED_MESSAGES_UPDATE',
        savedMessages: e
    });
}
