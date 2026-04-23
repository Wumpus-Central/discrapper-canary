"use strict";
n.d(t, { L: () => a });
var r = n(73153),
    i = n(425059),
    s = n(141468);
async function a(e) {
    let { channelId: t, message: n, items: a, shouldUploadFailureSendNotification: o } = e,
        l = new i.A(),
        u = (0, s.rh)({ ...n, id: l._file.id });
    l.on("start", (e) => {
        r.h.dispatch({ type: "UPLOAD_START", channelId: t, file: e, message: u, uploader: l });
    }),
        l.on("progress", (e) => {
            r.h.dispatch({ type: "UPLOAD_PROGRESS", channelId: t, file: e });
        }),
        l.on("error", (e, n, i, s) => {
            r.h.dispatch({ type: "UPLOAD_FAIL", channelId: t, file: e, messageId: u.id, shouldSendNotification: o });
        }),
        l.on("complete", (e) => {
            l._aborted && r.h.dispatch({ type: "UPLOAD_COMPLETE", channelId: t, file: e, aborted: !0 });
        });
    let c = await l.uploadFiles(a);
    if (!l._aborted) return { attachments: c, uploader: l };
}
