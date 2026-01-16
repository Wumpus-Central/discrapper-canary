n.d(t, {
    Z: () => b,
    r: () => v,
});
var r = n(473749),
    i = n(782425),
    l = n(430742),
    a = n(904245),
    o = n(166459),
    s = n(531643),
    c = n(680287),
    u = n(470623),
    d = n(957730),
    p = n(703558),
    f = n(117530),
    h = n(928477),
    g = n(959517),
    m = n(388032);
function b(e) {
    let {
            parentChannel: t,
            parentMessageId: n,
            threadSettings: i,
            privateThreadMode: c,
            location: u,
            onThreadCreated: b,
            useDefaultThreadName: y,
        } = e,
        v = r.useCallback((e, t, n, r) => {
            a.Z.sendMessage(e.id, d.ZP.parse(e, n), void 0, {
                eagerDispatch: !1,
                location: g.dy.THREAD_CREATION,
                stickerIds: r,
                attachmentsToUpload: t,
                onAttachmentUploadError: (r, i, a, c) => {
                    var u;
                    (0, s.openUploadError)({
                        title: m.intl.string(m.t.B3vFdU),
                        help: null != (u = null == c ? void 0 : c.message) ? u : m.intl.string(m.t.zMEjJg),
                    }),
                        "" !== n &&
                            "" === p.Z.getDraft(e.id, p.d.FirstThreadMessage) &&
                            l.Z.saveDraft(e.id, n, p.d.FirstThreadMessage),
                        0 === f.Z.getUploadCount(e.id, p.d.FirstThreadMessage) &&
                            o.Z.setUploads({
                                channelId: e.id,
                                uploads: t,
                                draftType: p.d.FirstThreadMessage,
                            });
                },
            });
        }, []);
    return (0, h.JA)({
        parentChannel: t,
        parentMessageId: n,
        threadSettings: i,
        privateThreadMode: c,
        location: u,
        onThreadCreated: b,
        useDefaultThreadName: y,
        uploadHandler: v,
    });
}
async function y(e) {
    let t = new c.Z(),
        n = await t.uploadFiles(e);
    return {
        uploaderFile: t._file,
        files: n,
    };
}
function v(e) {
    let { parentChannel: t } = e,
        { name: n, appliedTags: r } = (0, u.xH)((e) => {
            let { name: t, appliedTags: n } = e;
            return {
                name: t,
                appliedTags: n,
            };
        }, i.X);
    return (0, h.Wj)({
        parentChannel: t,
        name: n,
        appliedTags: r,
        upload: y,
    });
}
