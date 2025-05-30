n.d(t, {
    Z: () => _,
    r: () => x
});
var r = n(73800),
    i = n(94171),
    l = n(570140),
    a = n(668781),
    o = n(966390),
    s = n(680287),
    c = n(577347),
    u = n(470623),
    d = n(957730),
    p = n(48854),
    h = n(703558),
    f = n(403182),
    m = n(928477),
    g = n(981631),
    b = n(388032);
function _(e) {
    let { parentChannel: t, parentMessageId: n, threadSettings: i, privateThreadMode: l, location: a, onThreadCreated: s, useDefaultThreadName: c } = e,
        u = r.useCallback((e, t, n, r) => {
            o.Z.uploadFiles({
                channelId: e.id,
                uploads: t,
                draftType: h.d.FirstThreadMessage,
                options: { stickerIds: r },
                parsedMessage: d.ZP.parse(e, n)
            });
        }, []);
    return (0, m.JA)({
        parentChannel: t,
        parentMessageId: n,
        threadSettings: i,
        privateThreadMode: l,
        location: a,
        onThreadCreated: s,
        useDefaultThreadName: c,
        uploadHandler: u
    });
}
function x(e) {
    let { parentChannel: t } = e,
        { name: n, appliedTags: r } = (0, u.xH)((e) => {
            let { name: t, appliedTags: n } = e;
            return {
                name: t,
                appliedTags: n
            };
        }, i.X);
    return (0, m.Wj)({
        parentChannel: t,
        name: n,
        appliedTags: r,
        upload: function (e, n, r) {
            return new Promise((i, o) => {
                let u = new s.Z(e);
                u.on('error', (e, n, r) => {
                    if (n === g.evJ.EXPLICIT_CONTENT) {
                        let e = (0, p.r)();
                        null != r &&
                            null != r.attachments &&
                            r.attachments.length > 0 &&
                            (l.Z.dispatch({
                                type: 'MESSAGE_EXPLICIT_CONTENT_FP_CREATE',
                                messageId: e,
                                channelId: t.id,
                                attachments: r.attachments
                            }),
                            (0, c.Z)(t.id, e));
                    } else if (n === g.evJ.ENTITY_TOO_LARGE) {
                        let e = (0, f.dg)(t.getGuildId());
                        a.Z.show({
                            title: b.intl.string(b.t['/tGlcn']),
                            body: b.intl.formatToPlainString(b.t.fxEKdX, { maxSize: (0, f.Ng)(e) })
                        });
                    } else
                        n === g.evJ.TOO_MANY_ATTACHMENTS &&
                            a.Z.show({
                                title: b.intl.string(b.t.wOr6hI),
                                body: b.intl.formatToPlainString(b.t['qqyp/f'], { limit: g.dN1 })
                            });
                    o({ body: r });
                }),
                    u.on('complete', (e, t) => {
                        i({ body: t });
                    }),
                    u.uploadFiles(r, n, { addFilesTo: 'message.attachments' });
            });
        }
    });
}
