"use strict";
n.d(t, { AX: () => _, cf: () => u, oN: () => c, qx: () => d });
var i = n(562465),
    r = n(228366),
    a = n(320095),
    s = n(85109),
    l = n(756377),
    o = n(652215);
function d() {
    r.h.dispatch({ type: "BOOKMARK_NUDGE_DISMISS" });
}
async function c(e) {
    let t = await i.Bo.put({
        url: o.Rsh.PUT_SAVED_MESSAGE(e.channelId, e.messageId),
        body: { due_at: e.dueAt },
        rejectWithError: (0, i.fT)(),
    });
    if (t.ok) return (0, l.iz)(t.body);
}
async function u(e) {
    if (
        (await i.Bo.del({ url: o.Rsh.DELETE_SAVED_MESSAGE(e.channelId, e.messageId), rejectWithError: (0, i.fT)() })).ok
    )
        return !0;
}
async function _() {
    if (!s.A.getIsStale()) return Promise.resolve();
    let e = await i.Bo.get({ url: o.Rsh.GET_SAVED_MESSAGES, rejectWithError: (0, i.fT)() });
    if (!e.ok) return void r.h.dispatch({ type: "SAVED_MESSAGES_UPDATE", savedMessages: [] });
    let t = e.body.results.map((e) => ({
        message: null != e.message ? (0, a.rh)(e.message) : null,
        saveData: (0, l.Dd)(e.save_data),
    }));
    r.h.dispatch({ type: "SAVED_MESSAGES_UPDATE", savedMessages: t });
}
