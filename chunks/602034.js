n.d(t, {
    Z: () => g,
    r: () => _
});
var r = n(73800),
    i = n(94171),
    l = n(430742),
    a = n(904245),
    o = n(166459),
    s = n(531643),
    c = n(680287),
    u = n(470623),
    d = n(957730),
    p = n(703558),
    h = n(117530),
    f = n(928477),
    m = n(388032);
function g(e) {
    let { parentChannel: t, parentMessageId: n, threadSettings: i, privateThreadMode: c, location: u, onThreadCreated: g, useDefaultThreadName: b } = e,
        _ = r.useCallback((e, t, n, r) => {
            a.Z.sendMessage(e.id, d.ZP.parse(e, n), void 0, {
                eagerDispatch: !1,
                stickerIds: r,
                attachmentsToUpload: t,
                onAttachmentUploadError: (r, i, a, c) => {
                    var u;
                    (0, s.openUploadError)({
                        title: m.intl.string(m.t.B3vFdX),
                        help: null != (u = null == c ? void 0 : c.message) ? u : m.intl.string(m.t.zMEjJi)
                    }),
                        '' !== n && '' === p.Z.getDraft(e.id, p.d.FirstThreadMessage) && l.Z.saveDraft(e.id, n, p.d.FirstThreadMessage),
                        0 === h.Z.getUploadCount(e.id, p.d.FirstThreadMessage) &&
                            o.Z.setUploads({
                                channelId: e.id,
                                uploads: t,
                                draftType: p.d.FirstThreadMessage
                            });
                }
            });
        }, []);
    return (0, f.JA)({
        parentChannel: t,
        parentMessageId: n,
        threadSettings: i,
        privateThreadMode: c,
        location: u,
        onThreadCreated: g,
        useDefaultThreadName: b,
        uploadHandler: _
    });
}
async function b(e) {
    let t = new c.Z('unused'),
        n = await t.uploadFilesSimple(e);
    return {
        uploaderFile: t._file,
        files: n
    };
}
function _(e) {
    let { parentChannel: t } = e,
        { name: n, appliedTags: r } = (0, u.xH)((e) => {
            let { name: t, appliedTags: n } = e;
            return {
                name: t,
                appliedTags: n
            };
        }, i.X);
    return (0, f.Wj)({
        parentChannel: t,
        name: n,
        appliedTags: r,
        upload: b
    });
}
