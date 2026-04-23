"use strict";
n.d(t, { A: () => f });
var r = n(311907),
    i = n(6161),
    s = n(890615),
    a = n(450149),
    o = n(616356),
    l = n(734057),
    u = n(576705),
    c = n(290863),
    d = n(977997),
    _ = n(583846);
function f(e) {
    let t = (0, _.JM)(e),
        n = (0, r.bG)([d.A, l.A, u.A], () => {
            if (!t || e.author_type !== i.ContentInventoryAuthorType.USER) return null;
            let n = d.A.getVoiceStateForUser(e.author_id),
                r = l.A.getChannel(n?.channelId),
                a = "channel_id" in e ? e.channel_id : null;
            return (null == a || a === n?.channelId) && (null == r || (0, s.A)(r, u.A)) ? r : null;
        }, [e, t]),
        f = (0, r.bG)([c.A], () => (null != t ? c.A.getPrimaryActivity(e.author_id, n?.guild_id) : null), [
            n,
            e.author_id,
            t,
        ]),
        p = (0, r.bG)([o.A], () => (t ? o.A.getStreamForUser(e.author_id, n?.guild_id) : null), [n, e.author_id, t]),
        { previewUrl: h } = (0, a.A)(p?.guildId, p?.channelId, p?.ownerId);
    return { channel: n, activity: f, streamPreviewUrl: h, stream: p };
}
