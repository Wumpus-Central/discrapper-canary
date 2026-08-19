"use strict";
n.d(t, { XR: () => a, j1: () => l, jd: () => o, wV: () => s });
var i = n(636537),
    r = n(652215);
function a(e, t, n, a) {
    return i.Bo.post({
        url: r.Rsh.EXPLICIT_MEDIA_REPORT_FALSE_POSITIVE,
        body: { channel_id: e, message_id: t, attachment_ids: n, embed_ids: a },
        rejectWithError: !1,
    });
}
function s(e, t, n, a) {
    return i.Bo.post({
        url: r.Rsh.EXPLICIT_MEDIA_SENDER_REPORT_FALSE_POSITIVE,
        body: { channel_id: e, message_id: t, attachment_ids: n, filenames: a },
        rejectWithError: !1,
    });
}
function l(e, t) {
    return i.Bo.patch({ url: r.Rsh.EXPLICIT_MEDIA_SCAN_MESSAGES(e), body: { message_ids: t }, rejectWithError: !1 });
}
function o(e) {
    let t = e.map((e) => ({ channel_id: e.channel_id, message_id: e.id }));
    return i.Bo.patch({
        url: r.Rsh.EXPLICIT_MEDIA_SCAN_MULTI_CHANNEL_MESSAGES,
        body: { messages: t },
        rejectWithError: !1,
    });
}
