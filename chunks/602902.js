a.d(n, { K: () => g }), a(321073);
var t = a(627968);
a(64700);
var l = a(192308),
    s = a(294454),
    i = a(118517),
    c = a(734057),
    r = a(31717),
    o = a(232835),
    h = a(518960),
    p = a(372684),
    u = a(430795),
    d = a(589553),
    A = a(696016);
async function g(e, n) {
    let { channelId: g, analyticsLocations: C, messageReference: y } = n,
        f = c.A.getChannel(g);
    if (null != f) {
        if (null != y) {
            let e = o.A.getMessage(y.channel_id, y.message_id);
            null != e && (0, i.Yf)({ message: e, channel: f, shouldMention: !1, showMentionToggle: !1 });
        }
        try {
            let n = [],
                a = [];
            for (let t of e) {
                let e = await (0, u.VO)(t),
                    l = (0, d.A)(t, t.type === p.nQ.SCREENSHOT ? "jpeg" : "mp4");
                switch (t.type) {
                    case p.nQ.CLIP:
                    case p.nQ.VOICE_CLIP:
                        n.push(new File([e], l, { type: "video/mp4" })), a.push({ clip: t });
                        break;
                    case p.nQ.SCREENSHOT:
                        n.push(new File([e], l, { type: "image/jpeg" })), a.push({});
                        break;
                    default:
                        t.type;
                }
            }
            (0, h.R)(n, f, r.C.ChannelMessage, { filesMetadata: a, origin: "unknown:clip_share" }), l.closeAllModals();
        } catch (e) {
            throw (A.nx.error(e), e);
        }
    } else
        (0, l.openModalLazy)(
            async () => {
                let { default: n } = await Promise.all([
                    a.e("8073"),
                    a.e("37634"),
                    a.e("42157"),
                    a.e("16747"),
                    a.e("94635"),
                    a.e("43880"),
                    a.e("8302"),
                    a.e("81647"),
                    a.e("76602"),
                    a.e("40402"),
                    a.e("67861"),
                    a.e("1518"),
                    a.e("23354"),
                    a.e("77084"),
                    a.e("79630"),
                    a.e("44780"),
                    a.e("65617"),
                    a.e("36946"),
                    a.e("92639"),
                    a.e("44385"),
                    a.e("40963"),
                    a.e("90480"),
                    a.e("66031"),
                    a.e("94317"),
                    a.e("23601"),
                    a.e("95008"),
                    a.e("92871"),
                ]).then(a.bind(a, 243258));
                return (a) => (0, t.jsx)(n, { ...a, clips: e, analyticsLocations: C });
            },
            { stackingBehavior: "stack", modalKey: s.aU },
        );
}
