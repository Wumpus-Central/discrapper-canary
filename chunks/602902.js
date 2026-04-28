"use strict";
r.d(t, { K: () => g }), r(321073);
var n = r(627968);
r(64700);
var i = r(192308),
    a = r(294454),
    s = r(118517),
    l = r(734057),
    o = r(31717),
    c = r(232835),
    d = r(954571),
    u = r(518960),
    _ = r(372684),
    p = r(439818),
    f = r(399925),
    m = r(696016),
    h = r(652215);
async function g(e, t) {
    let { channelId: g, analyticsLocations: b, messageReference: A } = t,
        E = l.A.getChannel(g);
    if (null != E) {
        if (null != A) {
            let e = c.A.getMessage(A.channel_id, A.message_id);
            null != e && (0, s.Yf)({ message: e, channel: E, shouldMention: !1, showMentionToggle: !1 });
        }
        try {
            let t = [],
                r = [];
            for (let n of e) {
                let e = await (0, f.VO)(n),
                    i = n.name ?? (0, m.cM)(n.createdAt),
                    a = (0, p.A)(i);
                if (n.type === _.nQ.CLIP || n.type === _.nQ.VOICE_CLIP) {
                    let i = `${"" !== a ? a : "clip"}.mp4`;
                    t.push(new File([e], i, { type: "video/mp4" })), r.push({ clip: n });
                } else if (n.type === _.nQ.SCREENSHOT) {
                    let n = `${"" !== a ? a : "screenshot"}.jpeg`;
                    t.push(new File([e], n, { type: "image/jpeg" })), r.push({});
                }
                d.default.track(h.HAw.CLIP_SHARED, {
                    location_stack: b,
                    guild_id: E.guild_id,
                    channel_id: E.id,
                    channel_type: E.type,
                    application_id: n.applicationId,
                    clip_id: n.id,
                });
            }
            (0, u.R)(t, E, o.C.ChannelMessage, { filesMetadata: r, origin: "unknown:clip_share" }), i.closeAllModals();
        } catch (e) {
            throw (m.nx.error(e), e);
        }
    } else
        (0, i.openModalLazy)(
            async () => {
                let { default: t } = await Promise.all([r.e("96758"), r.e("922"), r.e("4261")]).then(r.bind(r, 243258));
                return (r) => (0, n.jsx)(t, { ...r, clips: e, analyticsLocations: b });
            },
            { stackingBehavior: "stack", modalKey: a.aU },
        );
}
