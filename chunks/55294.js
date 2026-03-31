n.d(t, { A: () => p, N: () => x });
var i = n(64700),
    l = n(942381),
    s = n(465532),
    a = n(843472),
    r = n(608299),
    o = n(23658),
    c = n(425059),
    d = n(218152),
    u = n(451909),
    h = n(31717),
    A = n(522602),
    _ = n(393309),
    m = n(381941),
    g = n(985018);
function p(e) {
    let {
            parentChannel: t,
            parentMessageId: n,
            threadSettings: l,
            privateThreadMode: c,
            location: d,
            onThreadCreated: p,
            useDefaultThreadName: f,
        } = e,
        x = i.useCallback((e, t, n, i) => {
            a.A.sendMessage(e.id, u.Ay.parse(e, n), void 0, {
                eagerDispatch: !1,
                location: m.Hx.THREAD_CREATION,
                stickerIds: i,
                attachmentsToUpload: t,
                onAttachmentUploadError: (i, l, a, c) => {
                    (0, o.openUploadError)({
                        title: g.intl.string(g.t.B3vFdU),
                        help: c?.message ?? g.intl.string(g.t.zMEjJg),
                    }),
                        "" !== n &&
                            "" === h.A.getDraft(e.id, h.C.FirstThreadMessage) &&
                            s.A.saveDraft(e.id, n, h.C.FirstThreadMessage),
                        0 === A.A.getUploadCount(e.id, h.C.FirstThreadMessage) &&
                            r.A.setUploads({ channelId: e.id, uploads: t, draftType: h.C.FirstThreadMessage });
                },
            });
        }, []);
    return (0, _.r$)({
        parentChannel: t,
        parentMessageId: n,
        threadSettings: l,
        privateThreadMode: c,
        location: d,
        onThreadCreated: p,
        useDefaultThreadName: f,
        uploadHandler: x,
    });
}
async function f(e) {
    let t = new c.A(),
        n = await t.uploadFiles(e);
    return { uploaderFile: t._file, files: n };
}
function x(e) {
    let { parentChannel: t } = e,
        { name: n, appliedTags: i } = (0, d.kU)((e) => {
            let { name: t, appliedTags: n } = e;
            return { name: t, appliedTags: n };
        }, l.x);
    return (0, _.w0)({ parentChannel: t, name: n, appliedTags: i, upload: f });
}
