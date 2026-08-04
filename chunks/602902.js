a.d(n, { K: () => A }), a(321073);
var t = a(477900);
a(582128);
var l = a(192308),
    s = a(294454),
    i = a(118517),
    c = a(734057),
    r = a(31717),
    o = a(232835),
    h = a(518960),
    p = a(430795),
    u = a(589553),
    d = a(696016);
async function A(e, n) {
    let { channelId: A, analyticsLocations: g, messageReference: C } = n,
        y = c.A.getChannel(A);
    if (null != y) {
        if (null != C) {
            let e = o.A.getMessage(C.channel_id, C.message_id);
            null != e && (0, i.Yf)({ message: e, channel: y, shouldMention: !1, showMentionToggle: !1 });
        }
        try {
            let n = [],
                a = [];
            for (let t of e) {
                let e = await (0, p.VO)(t, { analyticsLocations: g }),
                    l = (0, u.A)(t, t.type === d.nQ.SCREENSHOT ? "jpeg" : "mp4");
                switch (t.type) {
                    case d.nQ.CLIP:
                    case d.nQ.VOICE_CLIP:
                        n.push(new File([e], l, { type: "video/mp4" })), a.push({ clip: t });
                        break;
                    case d.nQ.SCREENSHOT:
                        n.push(new File([e], l, { type: "image/jpeg" })), a.push({});
                        break;
                    default:
                        t.type;
                }
            }
            (0, h.R)(n, y, r.C.ChannelMessage, { filesMetadata: a, origin: "unknown:clip_share" }), l.closeAllModals();
        } catch (e) {
            throw (d.nx.error(e), e);
        }
    } else
        (0, l.openModalLazy)(
            async () => {
                let { default: n } = await Promise.all([
                    a.e("69977"),
                    a.e("1248"),
                    a.e("94149"),
                    a.e("14131"),
                    a.e("73883"),
                    a.e("73216"),
                    a.e("13750"),
                    a.e("81647"),
                    a.e("76602"),
                    a.e("40402"),
                    a.e("67861"),
                    a.e("1518"),
                    a.e("77084"),
                    a.e("23354"),
                    a.e("79630"),
                    a.e("44780"),
                    a.e("36946"),
                    a.e("65617"),
                    a.e("92639"),
                    a.e("90480"),
                    a.e("40963"),
                    a.e("44385"),
                    a.e("66031"),
                    a.e("94317"),
                    a.e("23601"),
                    a.e("95008"),
                    a.e("92871"),
                ]).then(a.bind(a, 243258));
                return (a) => (0, t.jsx)(n, { ...a, clips: e, analyticsLocations: g });
            },
            { stackingBehavior: "stack", modalKey: s.aU },
        );
}
