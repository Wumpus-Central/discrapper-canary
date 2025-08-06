n.d(t, {
    Eq: () => a,
    Uj: () => o,
    gx: () => l,
    qO: () => s
});
var r = n(544891),
    i = n(981631);
function o(e, t, n, o) {
    return r.tn.post({
        url: i.ANM.EXPLICIT_MEDIA_REPORT_FALSE_POSITIVE,
        body: {
            channel_id: e,
            message_id: t,
            attachment_ids: n,
            embed_ids: o
        },
        rejectWithError: !1
    });
}
function a(e, t, n, o) {
    return r.tn.post({
        url: i.ANM.EXPLICIT_MEDIA_SENDER_REPORT_FALSE_POSITIVE,
        body: {
            channel_id: e,
            message_id: t,
            attachment_ids: n,
            filenames: o
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
