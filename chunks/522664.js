r.d(n, {
    Eq: function () {
        return s;
    },
    Uj: function () {
        return o;
    },
    gx: function () {
        return u;
    },
    qO: function () {
        return l;
    }
});
var i = r(544891),
    a = r(981631);
function o(e, n, r, o) {
    return i.tn.post({
        url: a.ANM.EXPLICIT_MEDIA_REPORT_FALSE_POSITIVE,
        body: {
            channel_id: e,
            message_id: n,
            attachment_ids: r,
            embed_ids: o
        },
        rejectWithError: !1
    });
}
function s(e, n, r, o) {
    return i.tn.post({
        url: a.ANM.EXPLICIT_MEDIA_SENDER_REPORT_FALSE_POSITIVE,
        body: {
            channel_id: e,
            message_id: n,
            attachment_ids: r,
            filenames: o
        },
        rejectWithError: !1
    });
}
function l(e, n) {
    return i.tn.patch({
        url: a.ANM.EXPLICIT_MEDIA_SCAN_MESSAGES(e),
        body: { message_ids: n },
        rejectWithError: !1
    });
}
function u(e) {
    let n = e.map((e) => ({
        channel_id: e.channel_id,
        message_id: e.id
    }));
    return i.tn.patch({
        url: a.ANM.EXPLICIT_MEDIA_SCAN_MULTI_CHANNEL_MESSAGES,
        body: { messages: n },
        rejectWithError: !1
    });
}
