var i = n(149468),
    r = n(652215);
function a(e) {
    return e.map((e) => e.mimeType ?? "unknown");
}
n.d(
    t,
    {},
    {
        O: function (e) {
            let t = null != e.fileItems ? a(e.fileItems) : [],
                n = e.errorMessage ?? void 0,
                s = e.failureCode ?? void 0;
            (0, i.zV)(r.HAw.SEND_MESSAGE_FAILURE, { failure_code: s, error_message: n, attachment_mimetypes: t });
        },
        p: a,
    },
);
