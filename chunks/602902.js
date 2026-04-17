"use strict";
n.d(t, { K: () => N }), n(321073);
var i = n(627968);
n(64700);
var r = n(192308),
    s = n(397927),
    l = n(294454),
    a = n(118517),
    o = n(734057),
    c = n(31717),
    u = n(320501),
    d = n(954571),
    _ = n(518960),
    E = n(372684),
    A = n(439818),
    m = n(399925),
    I = n(696016),
    T = n(652215);
async function N(e, t) {
    let { channelId: N, analyticsLocations: g, messageReference: p } = t,
        f = o.A.getChannel(N);
    if (null != f) {
        if (null != p) {
            let e = u.A.getMessage(p.channel_id, p.message_id);
            null != e && (0, a.Yf)({ message: e, channel: f, shouldMention: !1, showMentionToggle: !1 });
        }
        try {
            let t = [],
                n = [];
            for (let i of e) {
                let e = await (0, m.VO)(i),
                    r = i.name ?? (0, I.cM)(i.createdAt),
                    s = (0, A.A)(r);
                if (i.type === E.nQ.CLIP || i.type === E.nQ.VOICE_CLIP) {
                    let r = `${"" !== s ? s : "clip"}.mp4`;
                    t.push(new File([e], r, { type: "video/mp4" })), n.push({ clip: i });
                } else if (i.type === E.nQ.SCREENSHOT) {
                    let i = `${"" !== s ? s : "screenshot"}.jpeg`;
                    t.push(new File([e], i, { type: "image/jpeg" })), n.push({});
                }
                d.default.track(T.HAw.CLIP_SHARED, {
                    location_stack: g,
                    guild_id: f.guild_id,
                    channel_id: f.id,
                    channel_type: f.type,
                    application_id: i.applicationId,
                    clip_id: i.id,
                });
            }
            (0, _.R)(t, f, c.C.ChannelMessage, { filesMetadata: n, origin: "unknown:clip_share" }), r.closeAllModals();
        } catch (e) {
            throw (I.nx.error(e), e);
        }
    } else
        (0, s.mMO)(
            async () => {
                let { default: t } = await Promise.all([n.e("96758"), n.e("79133"), n.e("22175")]).then(
                    n.bind(n, 243258),
                );
                return (n) => (0, i.jsx)(t, { ...n, clips: e, analyticsLocations: g });
            },
            { stackingBehavior: "stack", modalKey: l.aU },
        );
}
