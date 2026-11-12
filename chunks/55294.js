var i = t(582128),
    l = t(462180),
    s = t(465532),
    r = t(138399),
    a = t(608299),
    o = t(23658),
    d = t(433777),
    c = t(218152),
    u = t(451909),
    h = t(31717),
    m = t(522602),
    A = t(971389),
    p = t(381941),
    g = t(792996);
async function x(e) {
    let n = new d.A(),
        t = await n.uploadFiles(e);
    return { uploaderFile: n._file, files: t };
}
t.d(
    n,
    {},
    {
        Ay: function (e) {
            let {
                    parentChannel: n,
                    parentMessageId: t,
                    threadSettings: l,
                    privateThreadMode: d,
                    location: c,
                    onThreadCreated: x,
                    useDefaultThreadName: f,
                } = e,
                I = i.useCallback((e, n, t, i) => {
                    r.A.sendMessage(e.id, u.Ay.parse(e, t), void 0, {
                        eagerDispatch: !1,
                        location: p.Hx.THREAD_CREATION,
                        stickerIds: i,
                        attachmentsToUpload: n,
                        onAttachmentUploadError: (i, l, r, d) => {
                            ((0, o.openUploadError)({
                                title: g.intl.string(g.t.B3vFdU),
                                help: d?.message ?? g.intl.string(g.t.zMEjJg),
                            }),
                                "" !== t &&
                                    "" === h.A.getDraft(e.id, h.C.FirstThreadMessage) &&
                                    s.A.saveDraft(e.id, t, h.C.FirstThreadMessage),
                                0 === m.A.getUploadCount(e.id, h.C.FirstThreadMessage) &&
                                    a.A.setUploads({ channelId: e.id, uploads: n, draftType: h.C.FirstThreadMessage }));
                        },
                    });
                }, []);
            return (0, A.r$)({
                parentChannel: n,
                parentMessageId: t,
                threadSettings: l,
                privateThreadMode: d,
                location: c,
                onThreadCreated: x,
                useDefaultThreadName: f,
                uploadHandler: I,
            });
        },
        NV: function (e) {
            let { parentChannel: n } = e,
                { name: t, appliedTags: i } = (0, c.kU)((e) => {
                    let { name: n, appliedTags: t } = e;
                    return { name: n, appliedTags: t };
                }, l.x);
            return (0, A.w0)({ parentChannel: n, name: t, appliedTags: i, upload: x });
        },
        Se: x,
    },
);
