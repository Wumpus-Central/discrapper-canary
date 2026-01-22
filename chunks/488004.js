n.d(t, {
    O: () => a,
});
var r = n(58149),
    i = n(652215);

function a(e) {
    var t, n;
    let a = null != e.fileItems ? s(e.fileItems) : [],
        o = null != (t = e.errorMessage) ? t : void 0,
        l = null != (n = e.failureCode) ? n : void 0;
    (0, r.zV)(i.HAw.SEND_MESSAGE_FAILURE, {
        failure_code: l,
        error_message: o,
        attachment_mimetypes: a,
    });
}

function s(e) {
    return e.map((e) => {
        var t;
        return null != (t = e.mimeType) ? t : "unknown";
    });
}
