var i = t(582128),
    l = t(462180),
    r = t(465532),
    s = t(138399),
    a = t(608299),
    o = t(23658),
    d = t(433777),
    c = t(218152),
    u = t(451909),
    h = t(31717),
    A = t(522602),
    m = t(971389),
    p = t(381941),
    g = t(792996);
async function f(e) {
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
                    onThreadCreated: f,
                    useDefaultThreadName: x,
                } = e,
                I = i.useCallback((e, n, t, i) => {
                    s.A.sendMessage(e.id, u.Ay.parse(e, t), void 0, {
                        eagerDispatch: !1,
                        location: p.Hx.THREAD_CREATION,
                        stickerIds: i,
                        attachmentsToUpload: n,
                        onAttachmentUploadError: (i, l, s, d) => {
                            ((0, o.openUploadError)({
                                title: g.intl.string(g.t.B3vFdU),
                                help: d?.message ?? g.intl.string(g.t.zMEjJg),
                            }),
                                "" !== t &&
                                    "" === h.A.getDraft(e.id, h.C.FirstThreadMessage) &&
                                    r.A.saveDraft(e.id, t, h.C.FirstThreadMessage),
                                0 === A.A.getUploadCount(e.id, h.C.FirstThreadMessage) &&
                                    a.A.setUploads({ channelId: e.id, uploads: n, draftType: h.C.FirstThreadMessage }));
                        },
                    });
                }, []);
            return (0, m.r$)({
                parentChannel: n,
                parentMessageId: t,
                threadSettings: l,
                privateThreadMode: d,
                location: c,
                onThreadCreated: f,
                useDefaultThreadName: x,
                uploadHandler: I,
            });
        },
        NV: function (e) {
            let { parentChannel: n } = e,
                { name: t, appliedTags: i } = (0, c.kU)((e) => {
                    let { name: n, appliedTags: t } = e;
                    return { name: n, appliedTags: t };
                }, l.x);
            return (0, m.w0)({ parentChannel: n, name: t, appliedTags: i, upload: f });
        },
        Se: f,
    },
);
