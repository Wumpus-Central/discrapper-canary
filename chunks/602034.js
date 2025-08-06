n.d(t, {
    Z: () => m,
    r: () => y,
});
var r = n(73800),
    i = n(94171),
    l = n(430742),
    a = n(904245),
    s = n(166459),
    o = n(531643),
    c = n(680287),
    u = n(470623),
    d = n(957730),
    h = n(703558),
    p = n(117530),
    f = n(928477),
    g = n(388032);
function m(e) {
    let {
            parentChannel: t,
            parentMessageId: n,
            threadSettings: i,
            privateThreadMode: c,
            location: u,
            onThreadCreated: m,
            useDefaultThreadName: b,
        } = e,
        y = r.useCallback((e, t, n, r) => {
            a.Z.sendMessage(e.id, d.ZP.parse(e, n), void 0, {
                eagerDispatch: !1,
                stickerIds: r,
                attachmentsToUpload: t,
                onAttachmentUploadError: (r, i, a, c) => {
                    var u;
                    (0, o.openUploadError)({
                        title: g.intl.string(g.t.B3vFdX),
                        help: null != (u = null == c ? void 0 : c.message) ? u : g.intl.string(g.t.zMEjJi),
                    }),
                        "" !== n &&
                            "" === h.Z.getDraft(e.id, h.d.FirstThreadMessage) &&
                            l.Z.saveDraft(e.id, n, h.d.FirstThreadMessage),
                        0 === p.Z.getUploadCount(e.id, h.d.FirstThreadMessage) &&
                            s.Z.setUploads({
                                channelId: e.id,
                                uploads: t,
                                draftType: h.d.FirstThreadMessage,
                            });
                },
            });
        }, []);
    return (0, f.JA)({
        parentChannel: t,
        parentMessageId: n,
        threadSettings: i,
        privateThreadMode: c,
        location: u,
        onThreadCreated: m,
        useDefaultThreadName: b,
        uploadHandler: y,
    });
}
async function b(e) {
    let t = new c.Z(),
        n = await t.uploadFiles(e);
    return {
        uploaderFile: t._file,
        files: n,
    };
}
function y(e) {
    let { parentChannel: t } = e,
        { name: n, appliedTags: r } = (0, u.xH)((e) => {
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
        upload: b,
    });
}
