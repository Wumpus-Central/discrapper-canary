"use strict";
n.d(t, { A: () => E });
var i = n(17928),
    r = n(6161),
    s = n(890615),
    a = n(450149),
    o = n(616356),
    l = n(734057),
    d = n(576705),
    _ = n(290863),
    u = n(977997),
    c = n(583846);
function E(e) {
    let t = (0, c.JM)(e),
        n = (0, i.bG)([u.A, l.A, d.A], () => {
            if (!t || e.author_type !== r.ContentInventoryAuthorType.USER) return null;
            let n = u.A.getVoiceStateForUser(e.author_id),
                i = l.A.getChannel(n?.channelId),
                a = "channel_id" in e ? e.channel_id : null;
            return (null == a || a === n?.channelId) && (null == i || (0, s.A)(i, d.A)) ? i : null;
        }, [e, t]),
        E = (0, i.bG)([_.A], () => (null != t ? _.A.getPrimaryActivity(e.author_id, n?.guild_id) : null), [
            n,
            e.author_id,
            t,
        ]),
        h = (0, i.bG)([o.A], () => (t ? o.A.getStreamForUser(e.author_id, n?.guild_id) : null), [n, e.author_id, t]),
        { previewUrl: m } = (0, a.A)(h?.guildId, h?.channelId, h?.ownerId);
    return { channel: n, activity: E, streamPreviewUrl: m, stream: h };
}
