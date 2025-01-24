n.d(t, {
    B: function () {
        return v;
    },
    a: function () {
        return h;
    }
}),
    n(411104);
var r = n(570140),
    i = n(493683),
    l = n(957730),
    o = n(222677),
    a = n(995774),
    u = n(314897),
    s = n(592125),
    c = n(703558),
    d = n(62817),
    f = n(960048);
let p = (e) => {
        let t = d.Z.getFiles(e)[0];
        return null == d.Z.getMessageForFile(t.id)
            ? (f.Z.addBreadcrumb({ message: 'No message found for upload' }), Promise.reject())
            : new Promise((e, n) => {
                  let i = (l) => {
                      l.file.id === t.id && (r.Z.unsubscribe('UPLOAD_COMPLETE', i), r.Z.unsubscribe('UPLOAD_FAIL', i), 'UPLOAD_COMPLETE' === l.type ? e(l.messageRecord) : n(Error('Upload failed')));
                  };
                  r.Z.subscribe('UPLOAD_COMPLETE', i), r.Z.subscribe('UPLOAD_FAIL', i);
              });
    },
    m = async function (e, t) {
        var r;
        let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            o = arguments.length > 3 ? arguments[3] : void 0,
            a = arguments.length > 4 ? arguments[4] : void 0,
            d = s.Z.getChannel(t);
        if (((r = u.default.getToken()), l.ZP.parse(d, ''), i));
        else {
            if (null == s.Z.getChannel(t)) throw Error("AtomicReactor sendUtils: Couldn't resolve channel with id ".concat(t));
            {
                let r = n(966390).Z;
                (e.description = o),
                    await r.uploadFiles({
                        channelId: t,
                        uploads: [e],
                        draftType: c.d.ChannelMessage,
                        parsedMessage: a
                    });
            }
        }
    },
    h = async (e) => {
        let { file: t, reaction: n, user: r, altText: l, requireConfirmation: u = !1 } = e,
            s = await i.Z.openPrivateChannel(r.id, !1, !1);
        m(t, s, u, l);
        let c = await p(s);
        if (null != c) {
            let e = (0, a.g1)(n);
            await (0, o.rU)(s, c.id, e);
        }
    },
    v = (e) => {
        let { file: t, reply: n, channel: r, altText: i, requireConfirmation: o = !1 } = e,
            a = l.ZP.parse(r, n);
        return m(t, r.id, o, i, a);
    };
