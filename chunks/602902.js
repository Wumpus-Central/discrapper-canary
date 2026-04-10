"use strict";
n.d(t, { K: () => N }), n(321073);
var i = n(627968);
n(64700);
var r = n(192308),
    s = n(397927),
    l = n(294454),
    a = n(118517),
    c = n(734057),
    o = n(31717),
    u = n(320501),
    d = n(954571),
    _ = n(661191),
    E = n(518960),
    A = n(372684),
    m = n(439818),
    I = n(399925),
    T = n(696016),
    g = n(652215);
async function N(e, t) {
    let { channelId: N, analyticsLocations: f, messageReference: p } = t,
        C = c.A.getChannel(N);
    if (null != C) {
        if (null != p) {
            let e = u.A.getMessage(p.channel_id, p.message_id);
            null != e && (0, a.Yf)({ message: e, channel: C, shouldMention: !1, showMentionToggle: !1 });
        }
        try {
            let t = [],
                n = [];
            for (let i of e) {
                let e = await (0, I.VO)(i),
                    r = i.name ?? (0, T.cM)(_.default.extractTimestamp(i.id)),
                    s = (0, m.A)(r);
                if (i.type === A.nQ.CLIP || i.type === A.nQ.VOICE_CLIP) {
                    let r = `${"" !== s ? s : "clip"}.mp4`;
                    t.push(new File([e], r, { type: "video/mp4" })), n.push({ clip: i });
                } else if (i.type === A.nQ.SCREENSHOT) {
                    let i = `${"" !== s ? s : "screenshot"}.jpeg`;
                    t.push(new File([e], i, { type: "image/jpeg" })), n.push({});
                }
                d.default.track(g.HAw.CLIP_SHARED, {
                    location_stack: f,
                    guild_id: C.guild_id,
                    channel_id: C.id,
                    channel_type: C.type,
                    application_id: i.applicationId,
                    clip_id: i.id,
                });
            }
            (0, E.R)(t, C, o.C.ChannelMessage, { filesMetadata: n, origin: "unknown:clip_share" }), r.closeAllModals();
        } catch (e) {
            throw (T.nx.error(e), e);
        }
    } else
        (0, s.mMO)(
            async () => {
                let { default: t } = await Promise.all([n.e("43808"), n.e("43622"), n.e("91215")]).then(
                    n.bind(n, 243258),
                );
                return (n) => (0, i.jsx)(t, { ...n, clips: e, analyticsLocations: f });
            },
            { stackingBehavior: "stack", modalKey: l.aU },
        );
}
