t.d(n, {
    B: function () {
        return h;
    },
    a: function () {
        return m;
    }
}),
    t(411104);
var i = t(570140),
    l = t(493683),
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
                  let l = (r) => {
                      r.file.id === n.id && (i.Z.unsubscribe('UPLOAD_COMPLETE', l), i.Z.unsubscribe('UPLOAD_FAIL', l), 'UPLOAD_COMPLETE' === r.type ? e(r.messageRecord) : t(Error('Upload failed')));
                  };
                  i.Z.subscribe('UPLOAD_COMPLETE', l), i.Z.subscribe('UPLOAD_FAIL', l);
              });
    },
    v = async function (e, n) {
        var i;
        let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            o = arguments.length > 3 ? arguments[3] : void 0,
            a = arguments.length > 4 ? arguments[4] : void 0,
            c = s.Z.getChannel(n);
        if (((i = u.default.getToken()), r.ZP.parse(c, ''), l));
        else {
            if (null == s.Z.getChannel(n)) throw Error("AtomicReactor sendUtils: Couldn't resolve channel with id ".concat(n));
            {
                let i = t(966390).Z;
                (e.description = o),
                    await i.uploadFiles({
                        channelId: n,
                        uploads: [e],
                        draftType: d.d.ChannelMessage,
                        parsedMessage: a
                    });
            }
        }
    },
    m = async (e) => {
        let { file: n, reaction: t, user: i, altText: r, requireConfirmation: u = !1 } = e,
            s = await l.Z.openPrivateChannel(i.id, !1, !1);
        v(n, s, u, r);
        let d = await f(s);
        if (null != d) {
            let e = (0, a.g1)(t);
            await (0, o.rU)(s, d.id, e);
        }
    },
    h = (e) => {
        let { file: n, reply: t, channel: i, altText: l, requireConfirmation: o = !1 } = e,
            a = r.ZP.parse(i, t);
        return v(n, i.id, o, l, a);
    };
