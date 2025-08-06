n.d(t, {
    B: () => a,
    W: () => s
});
var r = n(544891),
    i = n(881052),
    o = n(981631);
async function a(e) {
    let { channelId: t, messageId: n, answerIds: a } = e;
    try {
        let e = { answer_ids: a };
        await r.tn.put({
            url: o.ANM.POLL_ANSWERS(t, n),
            body: e,
            rejectWithError: !1
        });
    } catch (e) {
        throw new i.Hx(e);
    }
}
async function s(e) {
    let { channelId: t, messageId: n } = e;
    try {
        await r.tn.post({
            url: o.ANM.POLL_EXPIRE(t, n),
            rejectWithError: !1
        });
    } catch (e) {
        throw new i.Hx(e);
    }
}
