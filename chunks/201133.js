n.d(t, {
    B: () => b,
    a: () => y
}),
    n(411104),
    n(266796);
var r = n(570140),
    l = n(493683),
    o = n(957730),
    i = n(222677),
    a = n(995774),
    s = n(314897),
    c = n(592125),
    u = n(703558),
    d = n(62817),
    p = n(960048);
let f = (e) => {
        let t = d.Z.getFiles(e)[0];
        return null == d.Z.getMessageForFile(t.id)
            ? (p.Z.addBreadcrumb({ message: 'No message found for upload' }), Promise.reject())
            : new Promise((e, n) => {
                  let l = (o) => {
                      o.file.id === t.id && (r.Z.unsubscribe('UPLOAD_COMPLETE', l), r.Z.unsubscribe('UPLOAD_FAIL', l), 'UPLOAD_COMPLETE' === o.type ? e(o.messageRecord) : n(Error('Upload failed')));
                  };
                  r.Z.subscribe('UPLOAD_COMPLETE', l), r.Z.subscribe('UPLOAD_FAIL', l);
              });
    },
    O = async function (e, t) {
        var r;
        let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = arguments.length > 3 ? arguments[3] : void 0,
            a = arguments.length > 4 ? arguments[4] : void 0,
            d = c.Z.getChannel(t);
        if ((s.default.getToken(), o.ZP.parse(d, ''), l));
        else {
            if (null == c.Z.getChannel(t)) throw Error("AtomicReactor sendUtils: Couldn't resolve channel with id ".concat(t));
            {
                let r = n(966390).Z;
                (e.description = i),
                    await r.uploadFiles({
                        channelId: t,
                        uploads: [e],
                        draftType: u.d.ChannelMessage,
                        parsedMessage: a
                    });
            }
        }
    },
    y = async (e) => {
        let { file: t, reaction: n, user: r, altText: o, requireConfirmation: s = !1 } = e,
            c = await l.Z.openPrivateChannel(r.id, !1, !1);
        O(t, c, s, o);
        let u = await f(c);
        if (null != u) {
            let e = (0, a.g1)(n);
            await (0, i.rU)(c, u.id, e);
        }
    },
    b = (e) => {
        let { file: t, reply: n, channel: r, altText: l, requireConfirmation: i = !1 } = e,
            a = o.ZP.parse(r, n);
        return O(t, r.id, i, l, a);
    };
