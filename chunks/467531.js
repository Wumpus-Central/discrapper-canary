n.d(t, {
    B: () => o,
    W: () => l
});
var r = n(544891),
    i = n(881052),
    a = n(981631);
async function o(e) {
    let { channelId: t, messageId: n, answerIds: o } = e;
    try {
        await r.tn.put({
            url: a.ANM.POLL_ANSWERS(t, n),
            body: { answer_ids: o },
            rejectWithError: !1
        });
    } catch (e) {
        throw new i.Hx(e);
    }
}
async function l(e) {
    let { channelId: t, messageId: n } = e;
    try {
        await r.tn.post({
            url: a.ANM.POLL_EXPIRE(t, n),
            rejectWithError: !1
        });
    } catch (e) {
        throw new i.Hx(e);
    }
}
