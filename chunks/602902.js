"use strict";
n.d(t, { K: () => T }), n(321073);
var i = n(627968);
n(64700);
var r = n(192308),
    l = n(294454),
    s = n(118517),
    a = n(734057),
    o = n(31717),
    c = n(320501),
    u = n(954571),
    d = n(518960),
    _ = n(372684),
    E = n(439818),
    A = n(399925),
    m = n(696016),
    I = n(652215);
async function T(e, t) {
    let { channelId: T, analyticsLocations: N, messageReference: g } = t,
        p = a.A.getChannel(T);
    if (null != p) {
        if (null != g) {
            let e = c.A.getMessage(g.channel_id, g.message_id);
            null != e && (0, s.Yf)({ message: e, channel: p, shouldMention: !1, showMentionToggle: !1 });
        }
        try {
            let t = [],
                n = [];
            for (let i of e) {
                let e = await (0, A.VO)(i),
                    r = i.name ?? (0, m.cM)(i.createdAt),
                    l = (0, E.A)(r);
                if (i.type === _.nQ.CLIP || i.type === _.nQ.VOICE_CLIP) {
                    let r = `${"" !== l ? l : "clip"}.mp4`;
                    t.push(new File([e], r, { type: "video/mp4" })), n.push({ clip: i });
                } else if (i.type === _.nQ.SCREENSHOT) {
                    let i = `${"" !== l ? l : "screenshot"}.jpeg`;
                    t.push(new File([e], i, { type: "image/jpeg" })), n.push({});
                }
                u.default.track(I.HAw.CLIP_SHARED, {
                    location_stack: N,
                    guild_id: p.guild_id,
                    channel_id: p.id,
                    channel_type: p.type,
                    application_id: i.applicationId,
                    clip_id: i.id,
                });
            }
            (0, d.R)(t, p, o.C.ChannelMessage, { filesMetadata: n, origin: "unknown:clip_share" }), r.closeAllModals();
        } catch (e) {
            throw (m.nx.error(e), e);
        }
    } else
        (0, r.openModalLazy)(
            async () => {
                let { default: t } = await Promise.all([n.e("96758"), n.e("79133"), n.e("22175")]).then(
                    n.bind(n, 243258),
                );
                return (n) => (0, i.jsx)(t, { ...n, clips: e, analyticsLocations: N });
            },
            { stackingBehavior: "stack", modalKey: l.aU },
        );
}
