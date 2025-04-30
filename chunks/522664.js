n.d(t, {
    Eq: () => o,
    Uj: () => a,
    gx: () => l,
    qO: () => s
});
var r = n(544891),
    i = n(981631);
function a(e, t, n, a) {
    return r.tn.post({
        url: i.ANM.EXPLICIT_MEDIA_REPORT_FALSE_POSITIVE,
        body: {
            channel_id: e,
            message_id: t,
            attachment_ids: n,
            embed_ids: a
        },
        rejectWithError: !1
    });
}
function o(e, t, n, a) {
    return r.tn.post({
        url: i.ANM.EXPLICIT_MEDIA_SENDER_REPORT_FALSE_POSITIVE,
        body: {
            channel_id: e,
            message_id: t,
            attachment_ids: n,
            filenames: a
        },
        rejectWithError: !1
    });
}
function s(e, t) {
    return r.tn.patch({
        url: i.ANM.EXPLICIT_MEDIA_SCAN_MESSAGES(e),
        body: { message_ids: t },
        rejectWithError: !1
    });
}
function l(e) {
    let t = e.map((e) => ({
        channel_id: e.channel_id,
        message_id: e.id
    }));
    return r.tn.patch({
        url: i.ANM.EXPLICIT_MEDIA_SCAN_MULTI_CHANNEL_MESSAGES,
        body: { messages: t },
        rejectWithError: !1
    });
}
