"use strict";
n.d(t, { A: () => h });
var i = n(17928),
    r = n(6161),
    s = n(890615),
    a = n(450149),
    o = n(616356),
    l = n(734057),
    u = n(576705),
    c = n(290863),
    d = n(977997),
    _ = n(751765);
function h(e) {
    let t = (0, _.JM)(e),
        n = (0, i.bG)([d.A, l.A, u.A], () => {
            if (!t || e.author_type !== r.ContentInventoryAuthorType.USER) return null;
            let n = d.A.getVoiceStateForUser(e.author_id),
                i = l.A.getChannel(n?.channelId),
                a = "channel_id" in e ? e.channel_id : null;
            return (null == a || a === n?.channelId) && (null == i || (0, s.A)(i, u.A)) ? i : null;
        }, [e, t]),
        h = (0, i.bG)([c.A], () => (null != t ? c.A.getPrimaryActivity(e.author_id, n?.guild_id) : null), [
            n,
            e.author_id,
            t,
        ]),
        f = (0, i.bG)([o.A], () => (t ? o.A.getStreamForUser(e.author_id, n?.guild_id) : null), [n, e.author_id, t]),
        { previewUrl: p } = (0, a.A)(f?.guildId, f?.channelId, f?.ownerId);
    return { channel: n, activity: h, streamPreviewUrl: p, stream: f };
}
