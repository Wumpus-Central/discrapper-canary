n.d(t, {
    XR: () => a,
    j1: () => o,
    jd: () => l,
    wV: () => s,
});
var r = n(562465),
    i = n(652215);
function a(e, t, n, a) {
    return r.Bo.post({
        url: i.Rsh.EXPLICIT_MEDIA_REPORT_FALSE_POSITIVE,
        body: {
            channel_id: e,
            message_id: t,
            attachment_ids: n,
            embed_ids: a,
        },
        rejectWithError: !1,
    });
}
function s(e, t, n, a) {
    return r.Bo.post({
        url: i.Rsh.EXPLICIT_MEDIA_SENDER_REPORT_FALSE_POSITIVE,
        body: {
            channel_id: e,
            message_id: t,
            attachment_ids: n,
            filenames: a,
        },
        rejectWithError: !1,
    });
}
function o(e, t) {
    return r.Bo.patch({
        url: i.Rsh.EXPLICIT_MEDIA_SCAN_MESSAGES(e),
        body: { message_ids: t },
        rejectWithError: !1,
    });
}
function l(e) {
    let t = e.map((e) => ({
        channel_id: e.channel_id,
        message_id: e.id,
    }));
    return r.Bo.patch({
        url: i.Rsh.EXPLICIT_MEDIA_SCAN_MULTI_CHANNEL_MESSAGES,
        body: { messages: t },
        rejectWithError: !1,
    });
}
