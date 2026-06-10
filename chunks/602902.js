"use strict";
n.d(t, { K: () => p }), n(321073);
var i = n(627968);
n(64700);
var r = n(192308),
    s = n(294454),
    a = n(118517),
    o = n(734057),
    l = n(31717),
    u = n(232835),
    c = n(518960),
    d = n(372684),
    _ = n(315240),
    h = n(589553),
    f = n(696016);
async function p(e, t) {
    let { channelId: p, analyticsLocations: E, messageReference: m } = t,
        g = o.A.getChannel(p);
    if (null != g) {
        if (null != m) {
            let e = u.A.getMessage(m.channel_id, m.message_id);
            null != e && (0, a.Yf)({ message: e, channel: g, shouldMention: !1, showMentionToggle: !1 });
        }
        try {
            let t = [],
                n = [];
            for (let i of e) {
                let e = await (0, _.VO)(i),
                    r = (0, h.A)(i, i.type === d.nQ.SCREENSHOT ? "jpeg" : "mp4");
                switch (i.type) {
                    case d.nQ.CLIP:
                    case d.nQ.VOICE_CLIP:
                        t.push(new File([e], r, { type: "video/mp4" })), n.push({ clip: i });
                        break;
                    case d.nQ.SCREENSHOT:
                        t.push(new File([e], r, { type: "image/jpeg" })), n.push({});
                        break;
                    default:
                        i.type;
                }
            }
            (0, c.R)(t, g, l.C.ChannelMessage, { filesMetadata: n, origin: "unknown:clip_share" }), r.closeAllModals();
        } catch (e) {
            throw (f.nx.error(e), e);
        }
    } else
        (0, r.openModalLazy)(
            async () => {
                let { default: t } = await Promise.all([
                    n.e("49589"),
                    n.e("84738"),
                    n.e("27682"),
                    n.e("21530"),
                    n.e("11141"),
                    n.e("46776"),
                    n.e("8302"),
                    n.e("93924"),
                    n.e("76602"),
                    n.e("28229"),
                    n.e("34530"),
                    n.e("67861"),
                    n.e("1518"),
                    n.e("23354"),
                    n.e("77084"),
                    n.e("44780"),
                    n.e("36946"),
                    n.e("65617"),
                    n.e("92639"),
                    n.e("44385"),
                    n.e("40963"),
                    n.e("90480"),
                    n.e("66031"),
                    n.e("94317"),
                    n.e("95008"),
                    n.e("23601"),
                    n.e("92871"),
                ]).then(n.bind(n, 243258));
                return (n) => (0, i.jsx)(t, { ...n, clips: e, analyticsLocations: E });
            },
            { stackingBehavior: "stack", modalKey: s.aU },
        );
}
