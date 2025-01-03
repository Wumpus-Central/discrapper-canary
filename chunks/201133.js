t.d(n, {
    B: function () {
        return h;
    },
    a: function () {
        return m;
    }
}),
    t(411104);
var l = t(570140),
    i = t(493683),
    r = t(957730),
    o = t(222677),
    a = t(995774),
    u = t(314897),
    s = t(592125),
    d = t(703558),
    c = t(62817),
    p = t(960048);
let f = (e) => {
        let n = c.Z.getFiles(e)[0];
        return null == c.Z.getMessageForFile(n.id)
            ? (p.Z.addBreadcrumb({ message: 'No message found for upload' }), Promise.reject())
            : new Promise((e, t) => {
                  let i = (r) => {
                      r.file.id === n.id && (l.Z.unsubscribe('UPLOAD_COMPLETE', i), l.Z.unsubscribe('UPLOAD_FAIL', i), 'UPLOAD_COMPLETE' === r.type ? e(r.messageRecord) : t(Error('Upload failed')));
                  };
                  l.Z.subscribe('UPLOAD_COMPLETE', i), l.Z.subscribe('UPLOAD_FAIL', i);
              });
    },
    v = async function (e, n) {
        var l;
        let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            o = arguments.length > 3 ? arguments[3] : void 0,
            a = arguments.length > 4 ? arguments[4] : void 0,
            c = s.Z.getChannel(n);
        if (((l = u.default.getToken()), r.ZP.parse(c, ''), i));
        else {
            if (null == s.Z.getChannel(n)) throw Error("AtomicReactor sendUtils: Couldn't resolve channel with id ".concat(n));
            {
                let l = t(966390).Z;
                (e.description = o),
                    await l.uploadFiles({
                        channelId: n,
                        uploads: [e],
                        draftType: d.d.ChannelMessage,
                        parsedMessage: a
                    });
            }
        }
    },
    m = async (e) => {
        let { file: n, reaction: t, user: l, altText: r, requireConfirmation: u = !1 } = e,
            s = await i.Z.openPrivateChannel(l.id, !1, !1);
        v(n, s, u, r);
        let d = await f(s);
        if (null != d) {
            let e = (0, a.g1)(t);
            await (0, o.rU)(s, d.id, e);
        }
    },
    h = (e) => {
        let { file: n, reply: t, channel: l, altText: i, requireConfirmation: o = !1 } = e,
            a = r.ZP.parse(l, t);
        return v(n, l.id, o, i, a);
    };
