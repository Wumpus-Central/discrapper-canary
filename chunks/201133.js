n.d(t, {
    B: () => v,
    a: () => h
}),
    n(411104);
var l = n(570140),
    i = n(493683),
    r = n(957730),
    a = n(222677),
    o = n(995774),
    s = n(314897),
    d = n(592125),
    c = n(703558),
    u = n(62817),
    p = n(960048);
let f = (e) => {
        let t = u.Z.getFiles(e)[0];
        return null == u.Z.getMessageForFile(t.id)
            ? (p.Z.addBreadcrumb({ message: 'No message found for upload' }), Promise.reject())
            : new Promise((e, n) => {
                  let i = (r) => {
                      r.file.id === t.id && (l.Z.unsubscribe('UPLOAD_COMPLETE', i), l.Z.unsubscribe('UPLOAD_FAIL', i), 'UPLOAD_COMPLETE' === r.type ? e(r.messageRecord) : n(Error('Upload failed')));
                  };
                  l.Z.subscribe('UPLOAD_COMPLETE', i), l.Z.subscribe('UPLOAD_FAIL', i);
              });
    },
    m = async function (e, t) {
        var l;
        let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            a = arguments.length > 3 ? arguments[3] : void 0,
            o = arguments.length > 4 ? arguments[4] : void 0,
            u = d.Z.getChannel(t);
        if ((s.default.getToken(), r.ZP.parse(u, ''), i));
        else {
            if (null == d.Z.getChannel(t)) throw Error("AtomicReactor sendUtils: Couldn't resolve channel with id ".concat(t));
            {
                let l = n(966390).Z;
                (e.description = a),
                    await l.uploadFiles({
                        channelId: t,
                        uploads: [e],
                        draftType: c.d.ChannelMessage,
                        parsedMessage: o
                    });
            }
        }
    },
    h = async (e) => {
        let { file: t, reaction: n, user: l, altText: r, requireConfirmation: s = !1 } = e,
            d = await i.Z.openPrivateChannel(l.id, !1, !1);
        m(t, d, s, r);
        let c = await f(d);
        if (null != c) {
            let e = (0, o.g1)(n);
            await (0, a.rU)(d, c.id, e);
        }
    },
    v = (e) => {
        let { file: t, reply: n, channel: l, altText: i, requireConfirmation: a = !1 } = e,
            o = r.ZP.parse(l, n);
        return m(t, l.id, a, i, o);
    };
