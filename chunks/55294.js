n.d(t, {
    A: () => m,
    N: () => y,
});
var r = n(64700),
    l = n(942381),
    i = n(465532),
    a = n(843472),
    s = n(608299),
    o = n(23658),
    c = n(425059),
    u = n(218152),
    d = n(451909),
    f = n(31717),
    p = n(522602),
    h = n(393309),
    b = n(381941),
    g = n(985018);

function m(e) {
    let {
            parentChannel: t,
            parentMessageId: n,
            threadSettings: l,
            privateThreadMode: c,
            location: u,
            onThreadCreated: m,
            useDefaultThreadName: A,
        } = e,
        y = r.useCallback((e, t, n, r) => {
            a.A.sendMessage(e.id, d.Ay.parse(e, n), void 0, {
                eagerDispatch: !1,
                location: b.Hx.THREAD_CREATION,
                stickerIds: r,
                attachmentsToUpload: t,
                onAttachmentUploadError: (r, l, a, c) => {
                    var u;
                    (0, o.openUploadError)({
                        title: g.intl.string(g.t.B3vFdU),
                        help: null != (u = null == c ? void 0 : c.message) ? u : g.intl.string(g.t.zMEjJg),
                    }),
                        "" !== n &&
                            "" === f.A.getDraft(e.id, f.C.FirstThreadMessage) &&
                            i.A.saveDraft(e.id, n, f.C.FirstThreadMessage),
                        0 === p.A.getUploadCount(e.id, f.C.FirstThreadMessage) &&
                            s.A.setUploads({
                                channelId: e.id,
                                uploads: t,
                                draftType: f.C.FirstThreadMessage,
                            });
                },
            });
        }, []);
    return (0, h.r$)({
        parentChannel: t,
        parentMessageId: n,
        threadSettings: l,
        privateThreadMode: c,
        location: u,
        onThreadCreated: m,
        useDefaultThreadName: A,
        uploadHandler: y,
    });
}
async function A(e) {
    let t = new c.A(),
        n = await t.uploadFiles(e);
    return {
        uploaderFile: t._file,
        files: n,
    };
}

function y(e) {
    let { parentChannel: t } = e,
        { name: n, appliedTags: r } = (0, u.kU)((e) => {
            let { name: t, appliedTags: n } = e;
            return {
                name: t,
                appliedTags: n,
            };
        }, l.x);
    return (0, h.w0)({
        parentChannel: t,
        name: n,
        appliedTags: r,
        upload: A,
    });
}
