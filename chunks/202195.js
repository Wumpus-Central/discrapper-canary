"use strict";
n.d(t, { A: () => m });
var l = n(17928),
    i = n(6161),
    s = n(890615),
    r = n(450149),
    a = n(616356),
    o = n(734057),
    u = n(576705),
    c = n(290863),
    d = n(977997),
    h = n(583846);
function m(e) {
    let t = (0, h.JM)(e),
        n = (0, l.bG)([d.A, o.A, u.A], () => {
            if (!t || e.author_type !== i.ContentInventoryAuthorType.USER) return null;
            let n = d.A.getVoiceStateForUser(e.author_id),
                l = o.A.getChannel(n?.channelId),
                r = "channel_id" in e ? e.channel_id : null;
            return (null == r || r === n?.channelId) && (null == l || (0, s.A)(l, u.A)) ? l : null;
        }, [e, t]),
        m = (0, l.bG)([c.A], () => (null != t ? c.A.getPrimaryActivity(e.author_id, n?.guild_id) : null), [
            n,
            e.author_id,
            t,
        ]),
        f = (0, l.bG)([a.A], () => (t ? a.A.getStreamForUser(e.author_id, n?.guild_id) : null), [n, e.author_id, t]),
        { previewUrl: p } = (0, r.A)(f?.guildId, f?.channelId, f?.ownerId);
    return { channel: n, activity: m, streamPreviewUrl: p, stream: f };
}
