n.d(t, { AX: () => E, cf: () => _, oN: () => u });
var i = n(636537),
    r = n(228366),
    a = n(320095),
    l = n(85109),
    s = n(756377),
    o = n(652215);
async function u(e) {
    let t = await i.Bo.put({
        url: o.Rsh.PUT_SAVED_MESSAGE(e.channelId, e.messageId),
        body: { due_at: e.dueAt },
        rejectWithError: !1,
    });
    if (t.ok) return (0, s.iz)(t.body);
}
async function _(e) {
    if ((await i.Bo.del({ url: o.Rsh.DELETE_SAVED_MESSAGE(e.channelId, e.messageId), rejectWithError: !1 })).ok)
        return !0;
}
async function E() {
    if (!l.A.getIsStale()) return Promise.resolve();
    let e = (await i.Bo.get({ url: o.Rsh.GET_SAVED_MESSAGES, rejectWithError: !1 })).body.results.map((e) => ({
        message: null != e.message ? (0, a.rh)(e.message) : null,
        saveData: (0, s.Dd)(e.save_data),
    }));
    r.h.dispatch({ type: "SAVED_MESSAGES_UPDATE", savedMessages: e });
}
