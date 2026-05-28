"use strict";
n.d(t, { K: () => m }), n(321073);
var i = n(627968);
n(64700);
var r = n(192308),
    s = n(294454),
    a = n(118517),
    o = n(734057),
    l = n(31717),
    u = n(232835),
    c = n(174459),
    d = n(518960),
    _ = n(372684),
    h = n(315240),
    f = n(589553),
    p = n(696016),
    E = n(652215);
async function m(e, t) {
    let { channelId: m, analyticsLocations: g, messageReference: A } = t,
        I = o.A.getChannel(m);
    if (null != I) {
        if (null != A) {
            let e = u.A.getMessage(A.channel_id, A.message_id);
            null != e && (0, a.Yf)({ message: e, channel: I, shouldMention: !1, showMentionToggle: !1 });
        }
        try {
            let t = [],
                n = [];
            for (let i of e) {
                let e = await (0, h.VO)(i),
                    r = (0, f.A)(i, i.type === _.nQ.SCREENSHOT ? "jpeg" : "mp4");
                i.type === _.nQ.CLIP || i.type === _.nQ.VOICE_CLIP
                    ? (t.push(new File([e], r, { type: "video/mp4" })), n.push({ clip: i }))
                    : i.type === _.nQ.SCREENSHOT && (t.push(new File([e], r, { type: "image/jpeg" })), n.push({})),
                    c.default.track(E.HAw.CLIP_SHARED, {
                        location_stack: g,
                        guild_id: I.guild_id,
                        channel_id: I.id,
                        channel_type: I.type,
                        application_id: i.applicationId,
                        clip_uuid: i.id,
                    });
            }
            (0, d.R)(t, I, l.C.ChannelMessage, { filesMetadata: n, origin: "unknown:clip_share" }), r.closeAllModals();
        } catch (e) {
            throw (p.nx.error(e), e);
        }
    } else
        (0, r.openModalLazy)(
            async () => {
                let { default: t } = await Promise.all([
                    n.e("98111"),
                    n.e("56495"),
                    n.e("9659"),
                    n.e("21530"),
                    n.e("78925"),
                    n.e("46776"),
                    n.e("76602"),
                    n.e("28229"),
                    n.e("34530"),
                    n.e("67861"),
                    n.e("1518"),
                    n.e("23354"),
                    n.e("77084"),
                    n.e("44780"),
                    n.e("18997"),
                    n.e("65617"),
                    n.e("36946"),
                    n.e("92639"),
                    n.e("44385"),
                    n.e("40963"),
                    n.e("90480"),
                    n.e("66031"),
                    n.e("16698"),
                    n.e("95008"),
                    n.e("23601"),
                    n.e("92871"),
                ]).then(n.bind(n, 243258));
                return (n) => (0, i.jsx)(t, { ...n, clips: e, analyticsLocations: g });
            },
            { stackingBehavior: "stack", modalKey: s.aU },
        );
}
