"use strict";
n.d(t, { K: () => A }), n(321073);
var i = n(477900);
n(582128);
var r = n(192308),
    a = n(294454),
    s = n(118517),
    l = n(734057),
    o = n(31717),
    d = n(232835),
    c = n(518960),
    u = n(430795),
    _ = n(589553),
    E = n(696016);
async function A(e, t) {
    let { channelId: A, analyticsLocations: h, messageReference: I } = t,
        f = l.A.getChannel(A);
    if (null != f) {
        if (null != I) {
            let e = d.A.getMessage(I.channel_id, I.message_id);
            null != e && (0, s.Yf)({ message: e, channel: f, shouldMention: !1, showMentionToggle: !1 });
        }
        try {
            let t = [],
                n = [];
            for (let i of e) {
                let e = await (0, u.VO)(i, { analyticsLocations: h }),
                    r = (0, _.A)(i, i.type === E.nQ.SCREENSHOT ? "jpeg" : "mp4");
                switch (i.type) {
                    case E.nQ.CLIP:
                    case E.nQ.VOICE_CLIP:
                        t.push(new File([e], r, { type: "video/mp4" })), n.push({ clip: i });
                        break;
                    case E.nQ.SCREENSHOT:
                        t.push(new File([e], r, { type: "image/jpeg" })), n.push({});
                        break;
                    default:
                        i.type;
                }
            }
            (0, c.R)(t, f, o.C.ChannelMessage, { filesMetadata: n, origin: "unknown:clip_share" }), r.closeAllModals();
        } catch (e) {
            throw (E.nx.error(e), e);
        }
    } else
        (0, r.openModalLazy)(
            async () => {
                let { default: t } = await Promise.all([
                    n.e("69977"),
                    n.e("1248"),
                    n.e("94149"),
                    n.e("14131"),
                    n.e("73883"),
                    n.e("73216"),
                    n.e("13750"),
                    n.e("81647"),
                    n.e("76602"),
                    n.e("40402"),
                    n.e("67861"),
                    n.e("1518"),
                    n.e("77084"),
                    n.e("23354"),
                    n.e("44780"),
                    n.e("79630"),
                    n.e("36946"),
                    n.e("65617"),
                    n.e("92639"),
                    n.e("90480"),
                    n.e("40963"),
                    n.e("44385"),
                    n.e("66031"),
                    n.e("94317"),
                    n.e("23601"),
                    n.e("95008"),
                    n.e("92871"),
                ]).then(n.bind(n, 243258));
                return (n) => (0, i.jsx)(t, { ...n, clips: e, analyticsLocations: h });
            },
            { stackingBehavior: "stack", modalKey: a.aU },
        );
}
