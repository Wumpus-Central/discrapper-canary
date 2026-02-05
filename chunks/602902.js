n.d(t, { K: () => x }), n(321073);
var i = n(627968);
n(64700);
var l = n(192308),
    a = n(397927),
    r = n(294454),
    s = n(118517),
    o = n(734057),
    d = n(31717),
    c = n(320501),
    u = n(954571),
    m = n(661191),
    _ = n(518960),
    h = n(372684),
    p = n(439818),
    g = n(399925),
    A = n(696016),
    f = n(652215);
async function x(e, t) {
    let { channelId: x, analyticsLocations: E, messageReference: C } = t,
        I = o.A.getChannel(x);
    if (null != I) {
        if (null != C) {
            let e = c.A.getMessage(C.channel_id, C.message_id);
            null != e && (0, s.Yf)({ message: e, channel: I, shouldMention: !1, showMentionToggle: !1 });
        }
        try {
            let t = [],
                n = [];
            for (let i of e) {
                let e = await (0, g.VO)(i),
                    l = i.name ?? (0, A.cM)(m.default.extractTimestamp(i.id)),
                    a = (0, p.A)(l);
                if (i.type === h.nQ.CLIP || i.type === h.nQ.VOICE_CLIP) {
                    let l = `${"" !== a ? a : "clip"}.mp4`;
                    t.push(new File([e], l, { type: "video/mp4" })), n.push({ clip: i });
                } else if (i.type === h.nQ.SCREENSHOT) {
                    let i = `${"" !== a ? a : "screenshot"}.jpeg`;
                    t.push(new File([e], i, { type: "image/jpeg" })), n.push({});
                }
                u.default.track(f.HAw.CLIP_SHARED, {
                    location_stack: E,
                    guild_id: I.guild_id,
                    channel_id: I.id,
                    channel_type: I.type,
                    application_id: i.applicationId,
                    clip_id: i.id,
                });
            }
            (0, _.R)(t, I, d.C.ChannelMessage, { filesMetadata: n, origin: "unknown:clip_share" }), l.closeAllModals();
        } catch (e) {
            throw (A.nx.error(e), e);
        }
    } else
        (0, a.mMO)(
            async () => {
                let { default: t } = await Promise.all([n.e("96758"), n.e("43622"), n.e("75838")]).then(
                    n.bind(n, 243258),
                );
                return (n) => (0, i.jsx)(t, { ...n, clips: e, analyticsLocations: E });
            },
            { stackingBehavior: "stack", modalKey: r.aU },
        );
}
