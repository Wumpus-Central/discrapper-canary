"use strict";
n.d(t, { O: () => s });
var r = n(58149),
    i = n(652215);
function s(e) {
    let t = null != e.fileItems ? e.fileItems.map((e) => e.mimeType ?? "unknown") : [],
        n = e.errorMessage ?? void 0,
        s = e.failureCode ?? void 0;
    (0, r.zV)(i.HAw.SEND_MESSAGE_FAILURE, { failure_code: s, error_message: n, attachment_mimetypes: t });
}
