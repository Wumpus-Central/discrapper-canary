"use strict";
n.d(t, { K: () => h }), n(321073);
var i = n(627968);
n(64700);
var r = n(192308),
    a = n(294454),
    s = n(118517),
    l = n(734057),
    o = n(31717),
    d = n(232835),
    c = n(518960),
    u = n(372684),
    _ = n(430795),
    E = n(589553),
    A = n(696016);
async function h(e, t) {
    let { channelId: h, analyticsLocations: I, messageReference: f } = t,
        p = l.A.getChannel(h);
    if (null != p) {
        if (null != f) {
            let e = d.A.getMessage(f.channel_id, f.message_id);
            null != e && (0, s.Yf)({ message: e, channel: p, shouldMention: !1, showMentionToggle: !1 });
        }
        try {
            let t = [],
                n = [];
            for (let i of e) {
                let e = await (0, _.VO)(i),
                    r = (0, E.A)(i, i.type === u.nQ.SCREENSHOT ? "jpeg" : "mp4");
                switch (i.type) {
                    case u.nQ.CLIP:
                    case u.nQ.VOICE_CLIP:
                        t.push(new File([e], r, { type: "video/mp4" })), n.push({ clip: i });
                        break;
                    case u.nQ.SCREENSHOT:
                        t.push(new File([e], r, { type: "image/jpeg" })), n.push({});
                        break;
                    default:
                        i.type;
                }
            }
            (0, c.R)(t, p, o.C.ChannelMessage, { filesMetadata: n, origin: "unknown:clip_share" }), r.closeAllModals();
        } catch (e) {
            throw (A.nx.error(e), e);
        }
    } else
        (0, r.openModalLazy)(
            async () => {
                let { default: t } = await Promise.all([
                    n.e("19983"),
                    n.e("99326"),
                    n.e("20538"),
                    n.e("18893"),
                    n.e("12815"),
                    n.e("78775"),
                    n.e("41160"),
                    n.e("40174"),
                    n.e("81647"),
                    n.e("76602"),
                    n.e("40402"),
                    n.e("80012"),
                    n.e("1518"),
                    n.e("23354"),
                    n.e("77084"),
                    n.e("18997"),
                    n.e("44780"),
                    n.e("65617"),
                    n.e("36946"),
                    n.e("92639"),
                    n.e("44385"),
                    n.e("40963"),
                    n.e("90480"),
                    n.e("66031"),
                    n.e("94317"),
                    n.e("23601"),
                    n.e("95008"),
                    n.e("92871"),
                ]).then(n.bind(n, 243258));
                return (n) => (0, i.jsx)(t, { ...n, clips: e, analyticsLocations: I });
            },
            { stackingBehavior: "stack", modalKey: a.aU },
        );
}
