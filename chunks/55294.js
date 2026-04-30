t.d(n, { A: () => p, N: () => j });
var l = t(64700),
    i = t(942381),
    s = t(465532),
    a = t(720149),
    r = t(608299),
    d = t(494921),
    o = t(395780),
    c = t(218152),
    u = t(451909),
    h = t(31717),
    A = t(522602),
    m = t(659617),
    g = t(381941),
    x = t(375708);
function p(e) {
    let {
            parentChannel: n,
            parentMessageId: t,
            threadSettings: i,
            privateThreadMode: o,
            location: c,
            onThreadCreated: p,
            useDefaultThreadName: f,
        } = e,
        j = l.useCallback((e, n, t, l) => {
            a.A.sendMessage(e.id, u.Ay.parse(e, t), void 0, {
                eagerDispatch: !1,
                location: g.Hx.THREAD_CREATION,
                stickerIds: l,
                attachmentsToUpload: n,
                onAttachmentUploadError: (l, i, a, o) => {
                    (0, d.openUploadError)({
                        title: x.intl.string(x.t.B3vFdU),
                        help: o?.message ?? x.intl.string(x.t.zMEjJg),
                    }),
                        "" !== t &&
                            "" === h.A.getDraft(e.id, h.C.FirstThreadMessage) &&
                            s.A.saveDraft(e.id, t, h.C.FirstThreadMessage),
                        0 === A.A.getUploadCount(e.id, h.C.FirstThreadMessage) &&
                            r.A.setUploads({ channelId: e.id, uploads: n, draftType: h.C.FirstThreadMessage });
                },
            });
        }, []);
    return (0, m.r$)({
        parentChannel: n,
        parentMessageId: t,
        threadSettings: i,
        privateThreadMode: o,
        location: c,
        onThreadCreated: p,
        useDefaultThreadName: f,
        uploadHandler: j,
    });
}
async function f(e) {
    let n = new o.A(),
        t = await n.uploadFiles(e);
    return { uploaderFile: n._file, files: t };
}
function j(e) {
    let { parentChannel: n } = e,
        { name: t, appliedTags: l } = (0, c.kU)((e) => {
            let { name: n, appliedTags: t } = e;
            return { name: n, appliedTags: t };
        }, i.x);
    return (0, m.w0)({ parentChannel: n, name: t, appliedTags: l, upload: f });
}
