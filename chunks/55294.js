n.d(t, { Ay: () => x, NV: () => I, Se: () => f });
var i = n(582128),
    l = n(462180),
    s = n(465532),
    r = n(148494),
    a = n(608299),
    o = n(494921),
    d = n(395780),
    c = n(218152),
    u = n(451909),
    h = n(31717),
    m = n(522602),
    A = n(659617),
    p = n(381941),
    g = n(375708);
function x(e) {
    let {
            parentChannel: t,
            parentMessageId: n,
            threadSettings: l,
            privateThreadMode: d,
            location: c,
            onThreadCreated: x,
            useDefaultThreadName: f,
        } = e,
        I = i.useCallback((e, t, n, i) => {
            r.A.sendMessage(e.id, u.Ay.parse(e, n), void 0, {
                eagerDispatch: !1,
                location: p.Hx.THREAD_CREATION,
                stickerIds: i,
                attachmentsToUpload: t,
                onAttachmentUploadError: (i, l, r, d) => {
                    ((0, o.openUploadError)({
                        title: g.intl.string(g.t.B3vFdU),
                        help: d?.message ?? g.intl.string(g.t.zMEjJg),
                    }),
                        "" !== n &&
                            "" === h.A.getDraft(e.id, h.C.FirstThreadMessage) &&
                            s.A.saveDraft(e.id, n, h.C.FirstThreadMessage),
                        0 === m.A.getUploadCount(e.id, h.C.FirstThreadMessage) &&
                            a.A.setUploads({ channelId: e.id, uploads: t, draftType: h.C.FirstThreadMessage }));
                },
            });
        }, []);
    return (0, A.r$)({
        parentChannel: t,
        parentMessageId: n,
        threadSettings: l,
        privateThreadMode: d,
        location: c,
        onThreadCreated: x,
        useDefaultThreadName: f,
        uploadHandler: I,
    });
}
async function f(e) {
    let t = new d.A(),
        n = await t.uploadFiles(e);
    return { uploaderFile: t._file, files: n };
}
function I(e) {
    let { parentChannel: t } = e,
        { name: n, appliedTags: i } = (0, c.kU)((e) => {
            let { name: t, appliedTags: n } = e;
            return { name: t, appliedTags: n };
        }, l.x);
    return (0, A.w0)({ parentChannel: t, name: n, appliedTags: i, upload: f });
}
