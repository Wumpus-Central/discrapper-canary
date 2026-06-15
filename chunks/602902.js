a.d(t, { K: () => g }), a(321073);
var s = a(627968);
a(64700);
var n = a(192308),
    i = a(294454),
    r = a(118517),
    o = a(734057),
    l = a(31717),
    d = a(232835),
    u = a(518960),
    p = a(372684),
    m = a(315240),
    c = a(589553),
    h = a(696016);
async function g(e, t) {
    let { channelId: g, analyticsLocations: S, messageReference: y } = t,
        b = o.A.getChannel(g);
    if (null != b) {
        if (null != y) {
            let e = d.A.getMessage(y.channel_id, y.message_id);
            null != e && (0, r.Yf)({ message: e, channel: b, shouldMention: !1, showMentionToggle: !1 });
        }
        try {
            let t = [],
                a = [];
            for (let s of e) {
                let e = await (0, m.VO)(s),
                    n = (0, c.A)(s, s.type === p.nQ.SCREENSHOT ? "jpeg" : "mp4");
                switch (s.type) {
                    case p.nQ.CLIP:
                    case p.nQ.VOICE_CLIP:
                        t.push(new File([e], n, { type: "video/mp4" })), a.push({ clip: s });
                        break;
                    case p.nQ.SCREENSHOT:
                        t.push(new File([e], n, { type: "image/jpeg" })), a.push({});
                        break;
                    default:
                        s.type;
                }
            }
            (0, u.R)(t, b, l.C.ChannelMessage, { filesMetadata: a, origin: "unknown:clip_share" }), n.closeAllModals();
        } catch (e) {
            throw (h.nx.error(e), e);
        }
    } else
        (0, n.openModalLazy)(
            async () => {
                let { default: t } = await Promise.all([
                    a.e("49589"),
                    a.e("2238"),
                    a.e("40989"),
                    a.e("96919"),
                    a.e("99149"),
                    a.e("33063"),
                    a.e("46776"),
                    a.e("8302"),
                    a.e("81647"),
                    a.e("34530"),
                    a.e("76602"),
                    a.e("40402"),
                    a.e("67861"),
                    a.e("1518"),
                    a.e("23354"),
                    a.e("77084"),
                    a.e("44780"),
                    a.e("18997"),
                    a.e("65617"),
                    a.e("36946"),
                    a.e("92639"),
                    a.e("44385"),
                    a.e("40963"),
                    a.e("90480"),
                    a.e("66031"),
                    a.e("94317"),
                    a.e("95008"),
                    a.e("23601"),
                    a.e("92871"),
                ]).then(a.bind(a, 243258));
                return (a) => (0, s.jsx)(t, { ...a, clips: e, analyticsLocations: S });
            },
            { stackingBehavior: "stack", modalKey: i.aU },
        );
}
