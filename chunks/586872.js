"use strict";
n.d(t, { L: () => s });
var r = n(73153),
    i = n(425059),
    a = n(141468);
async function s(e) {
    let { channelId: t, message: n, items: s, shouldUploadFailureSendNotification: o } = e,
        l = new i.A(),
        u = (0, a.rh)({ ...n, id: l._file.id });
    l.on("start", (e) => {
        r.h.dispatch({ type: "UPLOAD_START", channelId: t, file: e, message: u, uploader: l });
    }),
        l.on("progress", (e) => {
            r.h.dispatch({ type: "UPLOAD_PROGRESS", channelId: t, file: e });
        }),
        l.on("error", (e, n, i, a) => {
            r.h.dispatch({ type: "UPLOAD_FAIL", channelId: t, file: e, messageId: u.id, shouldSendNotification: o });
        }),
        l.on("complete", (e) => {
            l._aborted && r.h.dispatch({ type: "UPLOAD_COMPLETE", channelId: t, file: e, aborted: !0 });
        });
    let c = await l.uploadFiles(s);
    if (!l._aborted) return { attachments: c, uploader: l };
}
