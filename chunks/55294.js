t.d(n, { Ay: () => p, NV: () => I, Se: () => f });
var i = t(582128),
    l = t(462180),
    s = t(465532),
    a = t(148494),
    r = t(608299),
    d = t(494921),
    o = t(395780),
    c = t(218152),
    u = t(451909),
    h = t(31717),
    m = t(522602),
    A = t(659617),
    g = t(381941),
    x = t(375708);
function p(e) {
    let {
            parentChannel: n,
            parentMessageId: t,
            threadSettings: l,
            privateThreadMode: o,
            location: c,
            onThreadCreated: p,
            useDefaultThreadName: f,
        } = e,
        I = i.useCallback((e, n, t, i) => {
            a.A.sendMessage(e.id, u.Ay.parse(e, t), void 0, {
                eagerDispatch: !1,
                location: g.Hx.THREAD_CREATION,
                stickerIds: i,
                attachmentsToUpload: n,
                onAttachmentUploadError: (i, l, a, o) => {
                    (0, d.openUploadError)({
                        title: x.intl.string(x.t.B3vFdU),
                        help: o?.message ?? x.intl.string(x.t.zMEjJg),
                    }),
                        "" !== t &&
                            "" === h.A.getDraft(e.id, h.C.FirstThreadMessage) &&
                            s.A.saveDraft(e.id, t, h.C.FirstThreadMessage),
                        0 === m.A.getUploadCount(e.id, h.C.FirstThreadMessage) &&
                            r.A.setUploads({ channelId: e.id, uploads: n, draftType: h.C.FirstThreadMessage });
                },
            });
        }, []);
    return (0, A.r$)({
        parentChannel: n,
        parentMessageId: t,
        threadSettings: l,
        privateThreadMode: o,
        location: c,
        onThreadCreated: p,
        useDefaultThreadName: f,
        uploadHandler: I,
    });
}
async function f(e) {
    let n = new o.A(),
        t = await n.uploadFiles(e);
    return { uploaderFile: n._file, files: t };
}
function I(e) {
    let { parentChannel: n } = e,
        { name: t, appliedTags: i } = (0, c.kU)((e) => {
            let { name: n, appliedTags: t } = e;
            return { name: n, appliedTags: t };
        }, l.x);
    return (0, A.w0)({ parentChannel: n, name: t, appliedTags: i, upload: f });
}
