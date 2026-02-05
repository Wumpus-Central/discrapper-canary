n.d(t, { A: () => _, N: () => f });
var i = n(64700),
    l = n(942381),
    s = n(465532),
    a = n(843472),
    r = n(608299),
    o = n(23658),
    d = n(425059),
    c = n(218152),
    u = n(451909),
    h = n(31717),
    A = n(522602),
    g = n(393309),
    m = n(381941),
    p = n(985018);
function _(e) {
    let {
            parentChannel: t,
            parentMessageId: n,
            threadSettings: l,
            privateThreadMode: d,
            location: c,
            onThreadCreated: _,
            useDefaultThreadName: x,
        } = e,
        f = i.useCallback((e, t, n, i) => {
            a.A.sendMessage(e.id, u.Ay.parse(e, n), void 0, {
                eagerDispatch: !1,
                location: m.Hx.THREAD_CREATION,
                stickerIds: i,
                attachmentsToUpload: t,
                onAttachmentUploadError: (i, l, a, d) => {
                    (0, o.openUploadError)({
                        title: p.intl.string(p.t.B3vFdU),
                        help: d?.message ?? p.intl.string(p.t.zMEjJg),
                    }),
                        "" !== n &&
                            "" === h.A.getDraft(e.id, h.C.FirstThreadMessage) &&
                            s.A.saveDraft(e.id, n, h.C.FirstThreadMessage),
                        0 === A.A.getUploadCount(e.id, h.C.FirstThreadMessage) &&
                            r.A.setUploads({ channelId: e.id, uploads: t, draftType: h.C.FirstThreadMessage });
                },
            });
        }, []);
    return (0, g.r$)({
        parentChannel: t,
        parentMessageId: n,
        threadSettings: l,
        privateThreadMode: d,
        location: c,
        onThreadCreated: _,
        useDefaultThreadName: x,
        uploadHandler: f,
    });
}
async function x(e) {
    let t = new d.A(),
        n = await t.uploadFiles(e);
    return { uploaderFile: t._file, files: n };
}
function f(e) {
    let { parentChannel: t } = e,
        { name: n, appliedTags: i } = (0, c.kU)((e) => {
            let { name: t, appliedTags: n } = e;
            return { name: t, appliedTags: n };
        }, l.x);
    return (0, g.w0)({ parentChannel: t, name: n, appliedTags: i, upload: x });
}
