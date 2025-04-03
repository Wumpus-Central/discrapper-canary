n.d(t, { B: () => s }), n(411104), n(266796), n(570140), n(493683);
var r = n(957730);
n(222677), n(995774);
var a = n(314897),
    l = n(592125),
    i = n(703558);
n(62817), n(960048);
let o = async function (e, t) {
        let o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            s = arguments.length > 3 ? arguments[3] : void 0,
            c = arguments.length > 4 ? arguments[4] : void 0,
            u = l.Z.getChannel(t);
        if ((a.default.getToken(), r.ZP.parse(u, ''), o));
        else {
            if (null == l.Z.getChannel(t)) throw Error("AtomicReactor sendUtils: Couldn't resolve channel with id ".concat(t));
            {
                let r = n(966390).Z;
                (e.description = s),
                    await r.uploadFiles({
                        channelId: t,
                        uploads: [e],
                        draftType: i.d.ChannelMessage,
                        parsedMessage: c
                    });
            }
        }
    },
    s = (e) => {
        let { file: t, reply: n, channel: a, altText: l, requireConfirmation: i = !1 } = e,
            s = r.ZP.parse(a, n);
        return o(t, a.id, i, l, s);
    };
