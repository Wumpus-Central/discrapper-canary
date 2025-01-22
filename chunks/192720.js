r.d(n, {
    XA: function () {
        return c;
    },
    ep: function () {
        return d;
    },
    sE: function () {
        return f;
    }
});
var i = r(544891),
    a = r(570140),
    o = r(786761),
    s = r(768943),
    l = r(686478),
    u = r(981631);
async function c(e) {
    let n = await i.tn.put({
        url: u.ANM.PUT_SAVED_MESSAGE(e.channelId, e.messageId),
        body: { due_at: e.dueAt },
        rejectWithError: !1
    });
    if (n.ok) return (0, l.jk)(n.body);
}
async function d(e) {
    if (
        (
            await i.tn.del({
                url: u.ANM.DELETE_SAVED_MESSAGE(e.channelId, e.messageId),
                rejectWithError: !1
            })
        ).ok
    )
        return !0;
}
async function f() {
    if (!s.Z.getIsStale()) return Promise.resolve();
    let e = (
        await i.tn.get({
            url: u.ANM.GET_SAVED_MESSAGES,
            rejectWithError: !1
        })
    ).body.results.map((e) => ({
        message: null != e.message ? (0, o.e5)(e.message) : null,
        saveData: (0, l.vL)(e.save_data)
    }));
    a.Z.dispatch({
        type: 'SAVED_MESSAGES_UPDATE',
        savedMessages: e
    });
}
