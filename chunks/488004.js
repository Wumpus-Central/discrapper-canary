n.d(t, { O: () => a, p: () => s });
var i = n(95561),
    r = n(652215);
function a(e) {
    let t = null != e.fileItems ? s(e.fileItems) : [],
        n = e.errorMessage ?? void 0,
        a = e.failureCode ?? void 0;
    (0, i.zV)(r.HAw.SEND_MESSAGE_FAILURE, { failure_code: a, error_message: n, attachment_mimetypes: t });
}
function s(e) {
    return e.map((e) => e.mimeType ?? "unknown");
}
