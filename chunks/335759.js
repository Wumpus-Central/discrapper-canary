n.d(t, { Q: () => r, w: () => l });
var s = n(636537),
    i = n(913122),
    a = n(652215);
async function r(e) {
    let { channelId: t, messageId: n, answerIds: r } = e;
    try {
        await s.Bo.put({ url: a.Rsh.POLL_ANSWERS(t, n), body: { answer_ids: r }, rejectWithError: !1 });
    } catch (e) {
        throw new i.LG(e);
    }
}
async function l(e) {
    let { channelId: t, messageId: n } = e;
    try {
        await s.Bo.post({ url: a.Rsh.POLL_EXPIRE(t, n), rejectWithError: !1 });
    } catch (e) {
        throw new i.LG(e);
    }
}
