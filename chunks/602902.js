n.d(t, { K: () => p }), n(321073);
var i = n(627968);
n(64700);
var l = n(192308),
    s = n(294454),
    a = n(118517),
    r = n(734057),
    o = n(31717),
    d = n(320501),
    c = n(954571),
    u = n(518960),
    h = n(372684),
    A = n(439818),
    _ = n(399925),
    m = n(696016),
    g = n(652215);
async function p(e, t) {
    let { channelId: p, analyticsLocations: f, messageReference: E } = t,
        x = r.A.getChannel(p);
    if (null != x) {
        if (null != E) {
            let e = d.A.getMessage(E.channel_id, E.message_id);
            null != e && (0, a.Yf)({ message: e, channel: x, shouldMention: !1, showMentionToggle: !1 });
        }
        try {
            let t = [],
                n = [];
            for (let i of e) {
                let e = await (0, _.VO)(i),
                    l = i.name ?? (0, m.cM)(i.createdAt),
                    s = (0, A.A)(l);
                if (i.type === h.nQ.CLIP || i.type === h.nQ.VOICE_CLIP) {
                    let l = `${"" !== s ? s : "clip"}.mp4`;
                    t.push(new File([e], l, { type: "video/mp4" })), n.push({ clip: i });
                } else if (i.type === h.nQ.SCREENSHOT) {
                    let i = `${"" !== s ? s : "screenshot"}.jpeg`;
                    t.push(new File([e], i, { type: "image/jpeg" })), n.push({});
                }
                c.default.track(g.HAw.CLIP_SHARED, {
                    location_stack: f,
                    guild_id: x.guild_id,
                    channel_id: x.id,
                    channel_type: x.type,
                    application_id: i.applicationId,
                    clip_id: i.id,
                });
            }
            (0, u.R)(t, x, o.C.ChannelMessage, { filesMetadata: n, origin: "unknown:clip_share" }), l.closeAllModals();
        } catch (e) {
            throw (m.nx.error(e), e);
        }
    } else
        (0, l.openModalLazy)(
            async () => {
                let { default: t } = await Promise.all([n.e("96758"), n.e("54289"), n.e("92871")]).then(
                    n.bind(n, 243258),
                );
                return (n) => (0, i.jsx)(t, { ...n, clips: e, analyticsLocations: f });
            },
            { stackingBehavior: "stack", modalKey: s.aU },
        );
}
