n.d(t, {
    Z: () => x,
    r: () => v
});
var i = n(200651),
    l = n(192379),
    a = n(232713),
    r = n(481060),
    s = n(570140),
    o = n(668781),
    c = n(966390),
    d = n(680287),
    u = n(470623),
    h = n(957730),
    p = n(48854),
    m = n(703558),
    f = n(403182),
    g = n(928477),
    _ = n(981631),
    C = n(388032);
function x(e) {
    let { parentChannel: t, parentMessageId: n, threadSettings: i, privateThreadMode: a, location: r, onThreadCreated: s, useDefaultThreadName: o } = e,
        d = l.useCallback((e, t, n, i) => {
            c.Z.uploadFiles({
                channelId: e.id,
                uploads: t,
                draftType: m.d.FirstThreadMessage,
                options: { stickerIds: i },
                parsedMessage: h.ZP.parse(e, n)
            });
        }, []);
    return (0, g.JA)({
        parentChannel: t,
        parentMessageId: n,
        threadSettings: i,
        privateThreadMode: a,
        location: r,
        onThreadCreated: s,
        useDefaultThreadName: o,
        uploadHandler: d
    });
}
function v(e) {
    let { parentChannel: t } = e,
        { name: l, appliedTags: c } = (0, u.xH)((e) => {
            let { name: t, appliedTags: n } = e;
            return {
                name: t,
                appliedTags: n
            };
        }, a.X);
    return (0, g.Wj)({
        parentChannel: t,
        name: l,
        appliedTags: c,
        upload: function (e, l, a) {
            return new Promise((c, u) => {
                let h = new d.Z(e);
                h.on('error', (e, l, a) => {
                    if (l === _.evJ.EXPLICIT_CONTENT) {
                        let e = (0, p.r)();
                        null != a &&
                            null != a.attachments &&
                            a.attachments.length > 0 &&
                            (s.Z.dispatch({
                                type: 'MESSAGE_EXPLICIT_CONTENT_FP_CREATE',
                                messageId: e,
                                channelId: t.id,
                                attachments: a.attachments
                            }),
                            (0, r.ZDy)(async () => {
                                let { default: l } = await n.e('57539').then(n.bind(n, 924188));
                                return (n) =>
                                    (0, i.jsx)(l, {
                                        ...n,
                                        channelId: t.id,
                                        messageId: e
                                    });
                            }));
                    } else if (l === _.evJ.ENTITY_TOO_LARGE) {
                        let e = (0, f.dg)(t.getGuildId());
                        o.Z.show({
                            title: C.intl.string(C.t['/tGlcn']),
                            body: C.intl.formatToPlainString(C.t.fxEKdX, { maxSize: (0, f.Ng)(e) })
                        });
                    } else
                        l === _.evJ.TOO_MANY_ATTACHMENTS &&
                            o.Z.show({
                                title: C.intl.string(C.t.wOr6hI),
                                body: C.intl.formatToPlainString(C.t['qqyp/f'], { limit: _.dN1 })
                            });
                    u({ body: a });
                }),
                    h.on('complete', (e, t) => {
                        c({ body: t });
                    }),
                    h.uploadFiles(a, l, { addFilesTo: 'message.attachments' });
            });
        }
    });
}
