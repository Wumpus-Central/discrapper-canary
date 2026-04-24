"use strict";
n.d(t, { K: () => g }), n(321073);
var r = n(627968);
n(64700);
var i = n(192308),
    a = n(294454),
    l = n(118517),
    s = n(734057),
    o = n(31717),
    c = n(232835),
    u = n(954571),
    d = n(518960),
    _ = n(372684),
    p = n(439818),
    f = n(399925),
    h = n(696016),
    m = n(652215);
async function g(e, t) {
    let { channelId: g, analyticsLocations: b, messageReference: A } = t,
        E = s.A.getChannel(g);
    if (null != E) {
        if (null != A) {
            let e = c.A.getMessage(A.channel_id, A.message_id);
            null != e && (0, l.Yf)({ message: e, channel: E, shouldMention: !1, showMentionToggle: !1 });
        }
        try {
            let t = [],
                n = [];
            for (let r of e) {
                let e = await (0, f.VO)(r),
                    i = r.name ?? (0, h.cM)(r.createdAt),
                    a = (0, p.A)(i);
                if (r.type === _.nQ.CLIP || r.type === _.nQ.VOICE_CLIP) {
                    let i = `${"" !== a ? a : "clip"}.mp4`;
                    t.push(new File([e], i, { type: "video/mp4" })), n.push({ clip: r });
                } else if (r.type === _.nQ.SCREENSHOT) {
                    let r = `${"" !== a ? a : "screenshot"}.jpeg`;
                    t.push(new File([e], r, { type: "image/jpeg" })), n.push({});
                }
                u.default.track(m.HAw.CLIP_SHARED, {
                    location_stack: b,
                    guild_id: E.guild_id,
                    channel_id: E.id,
                    channel_type: E.type,
                    application_id: r.applicationId,
                    clip_id: r.id,
                });
            }
            (0, d.R)(t, E, o.C.ChannelMessage, { filesMetadata: n, origin: "unknown:clip_share" }), i.closeAllModals();
        } catch (e) {
            throw (h.nx.error(e), e);
        }
    } else
        (0, i.openModalLazy)(
            async () => {
                let { default: t } = await Promise.all([n.e("96758"), n.e("922"), n.e("4261")]).then(n.bind(n, 243258));
                return (n) => (0, r.jsx)(t, { ...n, clips: e, analyticsLocations: b });
            },
            { stackingBehavior: "stack", modalKey: a.aU },
        );
}
