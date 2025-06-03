n.d(t, {
    Z: () => d,
    r: () => h
});
var r = n(73800),
    i = n(94171),
    l = n(966390),
    a = n(680287),
    o = n(470623),
    s = n(957730),
    c = n(703558),
    u = n(928477);
function d(e) {
    let { parentChannel: t, parentMessageId: n, threadSettings: i, privateThreadMode: a, location: o, onThreadCreated: d, useDefaultThreadName: p } = e,
        h = r.useCallback((e, t, n, r) => {
            l.Z.uploadFiles({
                channelId: e.id,
                uploads: t,
                draftType: c.d.FirstThreadMessage,
                options: { stickerIds: r },
                parsedMessage: s.ZP.parse(e, n)
            });
        }, []);
    return (0, u.JA)({
        parentChannel: t,
        parentMessageId: n,
        threadSettings: i,
        privateThreadMode: a,
        location: o,
        onThreadCreated: d,
        useDefaultThreadName: p,
        uploadHandler: h
    });
}
async function p(e) {
    let t = new a.Z('unused'),
        n = await t.uploadFilesSimple(e);
    return {
        uploaderFile: t._file,
        files: n
    };
}
function h(e) {
    let { parentChannel: t } = e,
        { name: n, appliedTags: r } = (0, o.xH)((e) => {
            let { name: t, appliedTags: n } = e;
            return {
                name: t,
                appliedTags: n
            };
        }, i.X);
    return (0, u.Wj)({
        parentChannel: t,
        name: n,
        appliedTags: r,
        upload: p
    });
}
