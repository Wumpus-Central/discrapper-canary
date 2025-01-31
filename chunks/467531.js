n.d(t, {
    B: () => r,
    W: () => s
});
var i = n(544891),
    l = n(881052),
    a = n(981631);
async function r(e) {
    let { channelId: t, messageId: n, answerIds: r } = e;
    try {
        await i.tn.put({
            url: a.ANM.POLL_ANSWERS(t, n),
            body: { answer_ids: r },
            rejectWithError: !1
        });
    } catch (e) {
        throw new l.Hx(e);
    }
}
async function s(e) {
    let { channelId: t, messageId: n } = e;
    try {
        await i.tn.post({
            url: a.ANM.POLL_EXPIRE(t, n),
            rejectWithError: !1
        });
    } catch (e) {
        throw new l.Hx(e);
    }
}
