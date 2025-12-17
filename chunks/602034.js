n.d(t, {
    Z: () => b,
    r: () => O,
});
var r = n(473749),
    i = n(55160),
    l = n(430742),
    a = n(904245),
    s = n(166459),
    o = n(531643),
    c = n(680287),
    d = n(470623),
    u = n(957730),
    p = n(703558),
    h = n(117530),
    f = n(928477),
    g = n(959517),
    m = n(388032);
function b(e) {
    let {
            parentChannel: t,
            parentMessageId: n,
            threadSettings: i,
            privateThreadMode: c,
            location: d,
            onThreadCreated: b,
            useDefaultThreadName: y,
        } = e,
        O = r.useCallback((e, t, n, r) => {
            a.Z.sendMessage(e.id, u.ZP.parse(e, n), void 0, {
                eagerDispatch: !1,
                location: g.dy.THREAD_CREATION,
                stickerIds: r,
                attachmentsToUpload: t,
                onAttachmentUploadError: (r, i, a, c) => {
                    var d;
                    (0, o.openUploadError)({
                        title: m.intl.string(m.t.B3vFdU),
                        help: null != (d = null == c ? void 0 : c.message) ? d : m.intl.string(m.t.zMEjJg),
                    }),
                        "" !== n &&
                            "" === p.Z.getDraft(e.id, p.d.FirstThreadMessage) &&
                            l.Z.saveDraft(e.id, n, p.d.FirstThreadMessage),
                        0 === h.Z.getUploadCount(e.id, p.d.FirstThreadMessage) &&
                            s.Z.setUploads({
                                channelId: e.id,
                                uploads: t,
                                draftType: p.d.FirstThreadMessage,
                            });
                },
            });
        }, []);
    return (0, f.JA)({
        parentChannel: t,
        parentMessageId: n,
        threadSettings: i,
        privateThreadMode: c,
        location: d,
        onThreadCreated: b,
        useDefaultThreadName: y,
        uploadHandler: O,
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
function O(e) {
    let { parentChannel: t } = e,
        { name: n, appliedTags: r } = (0, d.xH)((e) => {
            let { name: t, appliedTags: n } = e;
            return {
                name: t,
                appliedTags: n,
            };
        }, i.X);
    return (0, f.Wj)({
        parentChannel: t,
        name: n,
        appliedTags: r,
        upload: y,
    });
}
