"use strict";
n.d(t, { AX: () => d, cf: () => c, oN: () => u });
var r = n(562465),
    i = n(73153),
    s = n(141468),
    a = n(85109),
    o = n(756377),
    l = n(652215);
async function u(e) {
    let t = await r.Bo.put({
        url: l.Rsh.PUT_SAVED_MESSAGE(e.channelId, e.messageId),
        body: { due_at: e.dueAt },
        rejectWithError: !1,
    });
    if (t.ok) return (0, o.iz)(t.body);
}
async function c(e) {
    if ((await r.Bo.del({ url: l.Rsh.DELETE_SAVED_MESSAGE(e.channelId, e.messageId), rejectWithError: !1 })).ok)
        return !0;
}
async function d() {
    if (!a.A.getIsStale()) return Promise.resolve();
    let e = (await r.Bo.get({ url: l.Rsh.GET_SAVED_MESSAGES, rejectWithError: !1 })).body.results.map((e) => ({
        message: null != e.message ? (0, s.rh)(e.message) : null,
        saveData: (0, o.Dd)(e.save_data),
    }));
    i.h.dispatch({ type: "SAVED_MESSAGES_UPDATE", savedMessages: e });
}
