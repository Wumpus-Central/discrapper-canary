var i = r(733860);
var a = r(47120);
var o = r(106351),
    s = r(212819),
    l = r(588468),
    u = r(933557),
    c = r(592125),
    d = r(984933),
    f = r(483360),
    p = r(877565),
    h = r(590921),
    _ = r(665692),
    m = r(176505),
    g = r(388032);
let E = {
    sentinel: _.zy,
    matches: (e, n, r, i, a) => a.mentions.channel !== h.nS.DENY && !e.isPrivate(),
    queryResults(e, n, r, i, a) {
        let o,
            l,
            u = d.sH;
        return (
            r.charAt(0) === s.xQ.VOICE_CHANNEL && ((u = d.Zb), (r = r.substring(1))),
            i.forNonStringCommandOption
                ? (o = f.ZP.queryApplicationCommandChannelResults({
                      query: r,
                      channel: e,
                      channelTypes: i.allowedChannelTypes
                  }))
                : ((o = f.ZP.queryChannelResults({
                      query: r,
                      channel: e,
                      type: u
                  })),
                  null != n &&
                      ((l = f.ZP.queryStaticRouteChannels({
                          query: r,
                          guild: n
                      })),
                      o.channels.unshift(...l))),
            {
                results: o,
                staticRouteChannels: l
            }
        );
    },
    renderResults(e) {
        let n,
            r,
            {
                results: { channels: i },
                selectedIndex: a,
                query: o,
                options: u,
                onHover: d,
                onClick: f
            } = e,
            h = o.charAt(0) === s.xQ.VOICE_CHANNEL;
        return (
            h ? ((n = g.t.rMUL39), (r = g.intl.string(g.t.CYnO4u)), (o = o.substring(1))) : u.forNonStringCommandOption ? ((n = g.t.upNFT0), (r = g.intl.string(g.t.OGiMXF))) : ((n = g.t.UhnmJC), (r = g.intl.string(g.t.nIfr0d))),
            (0, p.HI)({
                query: o,
                selectedIndex: a,
                autocompletes: i,
                onHover: d,
                onClick: f,
                titleWithQuery: n,
                titleWithoutQuery: r,
                Component: l.ZP.Channel,
                getProps: (e) => ({
                    channel: e,
                    key: e.id,
                    category: c.Z.getChannel(e.parent_id)
                }),
                getQuery: (e) => (h ? ''.concat(_.zy).concat(s.xQ.VOICE_CHANNEL).concat(e) : ''.concat(_.zy).concat(e)),
                key: 'channels'
            })
        );
    },
    onSelect(e) {
        let {
                results: { channels: n },
                index: r,
                options: i
            } = e,
            a = n[r];
        return i.insertText(v(a), y(a)), { type: h.z2.CHANNEL };
    }
};
function v(e) {
    switch (e.type) {
        case o.d.PUBLIC_THREAD:
        case o.d.PRIVATE_THREAD:
        case o.d.ANNOUNCEMENT_THREAD:
        case o.d.GUILD_VOICE:
        case o.d.GUILD_STAGE_VOICE:
        case o.d.GUILD_CATEGORY:
            return '#"'.concat((0, u.le)(e.name), '"');
        default:
            let n = d.ZP.getTextChannelNameDisambiguations(e.guild_id)[e.id];
            return '#'.concat(null != n ? n.name : e.name);
    }
}
function y(e) {
    return m.EC.has(e.id) ? '<id:'.concat(e.id, '>') : '<#'.concat(e.id, '>');
}
n.Z = E;
