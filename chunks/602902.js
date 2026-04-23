l.d(t, { K: () => f }), l(321073);
var n = l(627968);
l(64700);
var a = l(192308),
    i = l(294454),
    r = l(118517),
    s = l(734057),
    o = l(31717),
    d = l(232835),
    c = l(954571),
    u = l(518960),
    _ = l(372684),
    m = l(439818),
    h = l(399925),
    p = l(696016),
    b = l(652215);
async function f(e, t) {
    let { channelId: f, analyticsLocations: x, messageReference: g } = t,
        C = s.A.getChannel(f);
    if (null != C) {
        if (null != g) {
            let e = d.A.getMessage(g.channel_id, g.message_id);
            null != e && (0, r.Yf)({ message: e, channel: C, shouldMention: !1, showMentionToggle: !1 });
        }
        try {
            let t = [],
                l = [];
            for (let n of e) {
                let e = await (0, h.VO)(n),
                    a = n.name ?? (0, p.cM)(n.createdAt),
                    i = (0, m.A)(a);
                if (n.type === _.nQ.CLIP || n.type === _.nQ.VOICE_CLIP) {
                    let a = `${"" !== i ? i : "clip"}.mp4`;
                    t.push(new File([e], a, { type: "video/mp4" })), l.push({ clip: n });
                } else if (n.type === _.nQ.SCREENSHOT) {
                    let n = `${"" !== i ? i : "screenshot"}.jpeg`;
                    t.push(new File([e], n, { type: "image/jpeg" })), l.push({});
                }
                c.default.track(b.HAw.CLIP_SHARED, {
                    location_stack: x,
                    guild_id: C.guild_id,
                    channel_id: C.id,
                    channel_type: C.type,
                    application_id: n.applicationId,
                    clip_id: n.id,
                });
            }
            (0, u.R)(t, C, o.C.ChannelMessage, { filesMetadata: l, origin: "unknown:clip_share" }), a.closeAllModals();
        } catch (e) {
            throw (p.nx.error(e), e);
        }
    } else
        (0, a.openModalLazy)(
            async () => {
                let { default: t } = await Promise.all([l.e("96758"), l.e("922"), l.e("92871")]).then(
                    l.bind(l, 243258),
                );
                return (l) => (0, n.jsx)(t, { ...l, clips: e, analyticsLocations: x });
            },
            { stackingBehavior: "stack", modalKey: i.aU },
        );
}
