n.d(t, {
    Q: () => s,
    w: () => o,
});
var r = n(562465),
    i = n(198982),
    a = n(652215);
async function s(e) {
    let { channelId: t, messageId: n, answerIds: s } = e;
    try {
        let e = { answer_ids: s };
        await r.Bo.put({
            url: a.Rsh.POLL_ANSWERS(t, n),
            body: e,
            rejectWithError: !1,
        });
    } catch (e) {
        throw new i.LG(e);
    }
}
async function o(e) {
    let { channelId: t, messageId: n } = e;
    try {
        await r.Bo.post({
            url: a.Rsh.POLL_EXPIRE(t, n),
            rejectWithError: !1,
        });
    } catch (e) {
        throw new i.LG(e);
    }
}
