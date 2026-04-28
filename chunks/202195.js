"use strict";
n.d(t, { A: () => m });
var l = n(17928),
    i = n(6161),
    s = n(890615),
    a = n(450149),
    r = n(616356),
    o = n(734057),
    c = n(576705),
    u = n(290863),
    d = n(977997),
    h = n(583846);
function m(e) {
    let t = (0, h.JM)(e),
        n = (0, l.bG)([d.A, o.A, c.A], () => {
            if (!t || e.author_type !== i.ContentInventoryAuthorType.USER) return null;
            let n = d.A.getVoiceStateForUser(e.author_id),
                l = o.A.getChannel(n?.channelId),
                a = "channel_id" in e ? e.channel_id : null;
            return (null == a || a === n?.channelId) && (null == l || (0, s.A)(l, c.A)) ? l : null;
        }, [e, t]),
        m = (0, l.bG)([u.A], () => (null != t ? u.A.getPrimaryActivity(e.author_id, n?.guild_id) : null), [
            n,
            e.author_id,
            t,
        ]),
        p = (0, l.bG)([r.A], () => (t ? r.A.getStreamForUser(e.author_id, n?.guild_id) : null), [n, e.author_id, t]),
        { previewUrl: f } = (0, a.A)(p?.guildId, p?.channelId, p?.ownerId);
    return { channel: n, activity: m, streamPreviewUrl: f, stream: p };
}
