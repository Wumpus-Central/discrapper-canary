a.d(t, { K: () => y }), a(321073);
var s = a(627968);
a(64700);
var n = a(192308),
    i = a(294454),
    r = a(118517),
    l = a(734057),
    o = a(31717),
    d = a(232835),
    u = a(174459),
    p = a(518960),
    c = a(372684),
    h = a(439818),
    m = a(607814),
    g = a(696016),
    S = a(652215);
async function y(e, t) {
    let { channelId: y, analyticsLocations: I, messageReference: b } = t,
        f = l.A.getChannel(y);
    if (null != f) {
        if (null != b) {
            let e = d.A.getMessage(b.channel_id, b.message_id);
            null != e && (0, r.Yf)({ message: e, channel: f, shouldMention: !1, showMentionToggle: !1 });
        }
        try {
            let t = [],
                a = [];
            for (let s of e) {
                let e = await (0, m.VO)(s),
                    n = s.name ?? (0, g.cM)(s.createdAt),
                    i = (0, h.A)(n);
                if (s.type === c.nQ.CLIP || s.type === c.nQ.VOICE_CLIP) {
                    let n = `${"" !== i ? i : "clip"}.mp4`;
                    t.push(new File([e], n, { type: "video/mp4" })), a.push({ clip: s });
                } else if (s.type === c.nQ.SCREENSHOT) {
                    let s = `${"" !== i ? i : "screenshot"}.jpeg`;
                    t.push(new File([e], s, { type: "image/jpeg" })), a.push({});
                }
                u.default.track(S.HAw.CLIP_SHARED, {
                    location_stack: I,
                    guild_id: f.guild_id,
                    channel_id: f.id,
                    channel_type: f.type,
                    application_id: s.applicationId,
                    clip_uuid: s.id,
                });
            }
            (0, p.R)(t, f, o.C.ChannelMessage, { filesMetadata: a, origin: "unknown:clip_share" }), n.closeAllModals();
        } catch (e) {
            throw (g.nx.error(e), e);
        }
    } else
        (0, n.openModalLazy)(
            async () => {
                let { default: t } = await Promise.all([
                    a.e("94169"),
                    a.e("92646"),
                    a.e("40523"),
                    a.e("21530"),
                    a.e("46776"),
                    a.e("76602"),
                    a.e("34530"),
                    a.e("28229"),
                    a.e("67861"),
                    a.e("1518"),
                    a.e("23354"),
                    a.e("77084"),
                    a.e("44780"),
                    a.e("18997"),
                    a.e("65617"),
                    a.e("36946"),
                    a.e("92639"),
                    a.e("44385"),
                    a.e("40963"),
                    a.e("90480"),
                    a.e("66031"),
                    a.e("94317"),
                    a.e("95008"),
                    a.e("23601"),
                    a.e("92871"),
                ]).then(a.bind(a, 243258));
                return (a) => (0, s.jsx)(t, { ...a, clips: e, analyticsLocations: I });
            },
            { stackingBehavior: "stack", modalKey: i.aU },
        );
}
