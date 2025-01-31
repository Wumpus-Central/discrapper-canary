n.d(t, { Z: () => g }), n(733860), n(47120);
var i = n(106351),
    r = n(212819),
    a = n(588468),
    s = n(933557),
    o = n(592125),
    l = n(984933),
    u = n(483360),
    c = n(877565),
    d = n(590921),
    f = n(665692),
    _ = n(176505),
    p = n(388032);
function h(e) {
    switch (e.type) {
        case i.d.PUBLIC_THREAD:
        case i.d.PRIVATE_THREAD:
        case i.d.ANNOUNCEMENT_THREAD:
        case i.d.GUILD_VOICE:
        case i.d.GUILD_STAGE_VOICE:
        case i.d.GUILD_CATEGORY:
            return '#"'.concat((0, s.le)(e.name), '"');
        default:
            let t = l.ZP.getTextChannelNameDisambiguations(e.guild_id)[e.id];
            return '#'.concat(null != t ? t.name : e.name);
    }
}
function m(e) {
    return _.EC.has(e.id) ? '<id:'.concat(e.id, '>') : '<#'.concat(e.id, '>');
}
let g = {
    sentinel: f.zy,
    matches: (e, t, n, i, r) => r.mentions.channel !== d.nS.DENY && !e.isPrivate(),
    queryResults(e, t, n, i, a) {
        let s,
            o,
            c = l.sH;
        return (
            n.charAt(0) === r.xQ.VOICE_CHANNEL && ((c = l.Zb), (n = n.substring(1))),
            i.forNonStringCommandOption
                ? (s = u.ZP.queryApplicationCommandChannelResults({
                      query: n,
                      channel: e,
                      channelTypes: i.allowedChannelTypes
                  }))
                : ((s = u.ZP.queryChannelResults({
                      query: n,
                      channel: e,
                      type: c
                  })),
                  null != t &&
                      ((o = u.ZP.queryStaticRouteChannels({
                          query: n,
                          guild: t
                      })),
                      s.channels.unshift(...o))),
            {
                results: s,
                staticRouteChannels: o
            }
        );
    },
    renderResults(e) {
        let t,
            n,
            {
                results: { channels: i },
                selectedIndex: s,
                query: l,
                options: u,
                onHover: d,
                onClick: _
            } = e,
            h = l.charAt(0) === r.xQ.VOICE_CHANNEL;
        return (
            h ? ((t = p.t.rMUL39), (n = p.intl.string(p.t.CYnO4u)), (l = l.substring(1))) : u.forNonStringCommandOption ? ((t = p.t.upNFT0), (n = p.intl.string(p.t.OGiMXF))) : ((t = p.t.UhnmJC), (n = p.intl.string(p.t.nIfr0d))),
            (0, c.HI)({
                query: l,
                selectedIndex: s,
                autocompletes: i,
                onHover: d,
                onClick: _,
                titleWithQuery: t,
                titleWithoutQuery: n,
                Component: a.ZP.Channel,
                getProps: (e) => ({
                    channel: e,
                    key: e.id,
                    category: o.Z.getChannel(e.parent_id)
                }),
                getQuery: (e) => (h ? ''.concat(f.zy).concat(r.xQ.VOICE_CHANNEL).concat(e) : ''.concat(f.zy).concat(e)),
                key: 'channels'
            })
        );
    },
    onSelect(e) {
        let {
                results: { channels: t },
                index: n,
                options: i
            } = e,
            r = t[n];
        return i.insertText(h(r), m(r)), { type: d.z2.CHANNEL };
    }
};
