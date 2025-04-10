n.d(t, { B: () => l }), n(415506), n(953529), n(570140), n(493683);
var r = n(957730);
n(222677), n(995774);
var i = n(314897),
    o = n(592125),
    a = n(703558);
n(62817), n(960048);
let s = async function (e, t) {
        var s;
        let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            c = arguments.length > 3 ? arguments[3] : void 0,
            u = arguments.length > 4 ? arguments[4] : void 0,
            d = o.Z.getChannel(t);
        if (((s = i.default.getToken()), r.ZP.parse(d, ''), l));
        else {
            if (null == o.Z.getChannel(t)) throw Error("AtomicReactor sendUtils: Couldn't resolve channel with id ".concat(t));
            {
                let r = n(966390).Z,
                    i = e;
                (i.description = c),
                    await r.uploadFiles({
                        channelId: t,
                        uploads: [i],
                        draftType: a.d.ChannelMessage,
                        parsedMessage: u
                    });
            }
        }
    },
    l = (e) => {
        let { file: t, reply: n, channel: i, altText: o, requireConfirmation: a = !1 } = e,
            l = r.ZP.parse(i, n);
        return s(t, i.id, a, o, l);
    };
