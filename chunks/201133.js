n.d(t, { B: () => s }), n(411104), n(266796), n(570140), n(493683);
var r = n(957730);
n(222677), n(995774);
var l = n(314897),
    a = n(592125),
    i = n(703558);
n(62817), n(960048);
let o = async function (e, t) {
        var o;
        let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            c = arguments.length > 3 ? arguments[3] : void 0,
            u = arguments.length > 4 ? arguments[4] : void 0,
            d = a.Z.getChannel(t);
        if ((l.default.getToken(), r.ZP.parse(d, ''), s));
        else {
            if (null == a.Z.getChannel(t)) throw Error("AtomicReactor sendUtils: Couldn't resolve channel with id ".concat(t));
            {
                let r = n(966390).Z;
                (e.description = c),
                    await r.uploadFiles({
                        channelId: t,
                        uploads: [e],
                        draftType: i.d.ChannelMessage,
                        parsedMessage: u
                    });
            }
        }
    },
    s = (e) => {
        let { file: t, reply: n, channel: l, altText: a, requireConfirmation: i = !1 } = e,
            s = r.ZP.parse(l, n);
        return o(t, l.id, i, a, s);
    };
