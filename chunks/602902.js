"use strict";
n.d(t, { K: () => g }), n(321073);
var i = n(627968);
n(64700);
var r = n(192308),
    s = n(294454),
    a = n(118517),
    o = n(734057),
    l = n(31717),
    _ = n(232835),
    d = n(954571),
    u = n(518960),
    c = n(372684),
    E = n(439818),
    h = n(399925),
    m = n(696016),
    f = n(652215);
async function g(e, t) {
    let { channelId: g, analyticsLocations: I, messageReference: A } = t,
        p = o.A.getChannel(g);
    if (null != p) {
        if (null != A) {
            let e = _.A.getMessage(A.channel_id, A.message_id);
            null != e && (0, a.Yf)({ message: e, channel: p, shouldMention: !1, showMentionToggle: !1 });
        }
        try {
            let t = [],
                n = [];
            for (let i of e) {
                let e = await (0, h.VO)(i),
                    r = i.name ?? (0, m.cM)(i.createdAt),
                    s = (0, E.A)(r);
                if (i.type === c.nQ.CLIP || i.type === c.nQ.VOICE_CLIP) {
                    let r = `${"" !== s ? s : "clip"}.mp4`;
                    t.push(new File([e], r, { type: "video/mp4" })), n.push({ clip: i });
                } else if (i.type === c.nQ.SCREENSHOT) {
                    let i = `${"" !== s ? s : "screenshot"}.jpeg`;
                    t.push(new File([e], i, { type: "image/jpeg" })), n.push({});
                }
                d.default.track(f.HAw.CLIP_SHARED, {
                    location_stack: I,
                    guild_id: p.guild_id,
                    channel_id: p.id,
                    channel_type: p.type,
                    application_id: i.applicationId,
                    clip_id: i.id,
                });
            }
            (0, u.R)(t, p, l.C.ChannelMessage, { filesMetadata: n, origin: "unknown:clip_share" }), r.closeAllModals();
        } catch (e) {
            throw (m.nx.error(e), e);
        }
    } else
        (0, r.openModalLazy)(
            async () => {
                let { default: t } = await Promise.all([
                    n.e("24199"),
                    n.e("57036"),
                    n.e("88394"),
                    n.e("80527"),
                    n.e("21909"),
                    n.e("31825"),
                    n.e("23353"),
                    n.e("96123"),
                    n.e("7175"),
                    n.e("37249"),
                    n.e("14138"),
                    n.e("8971"),
                    n.e("88017"),
                    n.e("77404"),
                    n.e("1040"),
                    n.e("64615"),
                    n.e("17239"),
                    n.e("67849"),
                    n.e("64492"),
                    n.e("20861"),
                    n.e("36682"),
                    n.e("45723"),
                    n.e("56871"),
                    n.e("69601"),
                    n.e("63191"),
                    n.e("51444"),
                    n.e("62290"),
                    n.e("80973"),
                    n.e("96758"),
                    n.e("922"),
                    n.e("99331"),
                ]).then(n.bind(n, 243258));
                return (n) => (0, i.jsx)(t, { ...n, clips: e, analyticsLocations: I });
            },
            { stackingBehavior: "stack", modalKey: s.aU },
        );
}
