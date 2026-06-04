"use strict";
n.d(t, { K: () => g }), n(321073);
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
    h = n(974293),
    f = n(877575),
    p = n(589553),
    E = n(696016),
    m = n(652215);
async function g(e, t) {
    let { channelId: g, analyticsLocations: A, messageReference: I } = t,
        T = o.A.getChannel(g);
    if (null != T) {
        if (null != I) {
            let e = u.A.getMessage(I.channel_id, I.message_id);
            null != e && (0, a.Yf)({ message: e, channel: T, shouldMention: !1, showMentionToggle: !1 });
        }
        try {
            let t = [],
                n = [];
            for (let i of e) {
                let e = await (0, f.VO)(i),
                    r = (0, p.A)(i, i.type === _.nQ.SCREENSHOT ? "jpeg" : "mp4");
                i.type === _.nQ.CLIP || i.type === _.nQ.VOICE_CLIP
                    ? (t.push(new File([e], r, { type: "video/mp4" })), n.push({ clip: i }))
                    : i.type === _.nQ.SCREENSHOT && (t.push(new File([e], r, { type: "image/jpeg" })), n.push({})),
                    c.default.track(m.HAw.CLIP_SHARED, {
                        location_stack: A,
                        guild_id: T.guild_id,
                        channel_id: T.id,
                        channel_type: T.type,
                        application_id: i.applicationId,
                        clip_uuid: i.id,
                        clip_runtime: (0, h.GN)(),
                    });
            }
            (0, d.R)(t, T, l.C.ChannelMessage, { filesMetadata: n, origin: "unknown:clip_share" }), r.closeAllModals();
        } catch (e) {
            throw (E.nx.error(e), e);
        }
    } else
        (0, r.openModalLazy)(
            async () => {
                let { default: t } = await Promise.all([
                    n.e("9633"),
                    n.e("78039"),
                    n.e("6747"),
                    n.e("21530"),
                    n.e("22575"),
                    n.e("76602"),
                    n.e("34530"),
                    n.e("28229"),
                    n.e("67861"),
                    n.e("1518"),
                    n.e("23354"),
                    n.e("77084"),
                    n.e("44780"),
                    n.e("18997"),
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
                return (n) => (0, i.jsx)(t, { ...n, clips: e, analyticsLocations: A });
            },
            { stackingBehavior: "stack", modalKey: s.aU },
        );
}
