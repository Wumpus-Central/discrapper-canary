n.d(t, { Z: () => g }), n(733860), n(47120);
var r = n(106351),
    i = n(212819),
    o = n(588468),
    a = n(933557),
    s = n(592125),
    l = n(984933),
    c = n(483360),
    u = n(877565),
    d = n(590921),
    f = n(665692),
    _ = n(176505),
    p = n(388032);
function h(e) {
    switch (e.type) {
        case r.d.PUBLIC_THREAD:
        case r.d.PRIVATE_THREAD:
        case r.d.ANNOUNCEMENT_THREAD:
        case r.d.GUILD_VOICE:
        case r.d.GUILD_STAGE_VOICE:
        case r.d.GUILD_CATEGORY:
            return '#"'.concat((0, a.le)(e.name), '"');
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
    matches: (e, t, n, r, i) => i.mentions.channel !== d.nS.DENY && !e.isPrivate(),
    queryResults(e, t, n, r, o) {
        let a,
            s,
            u = l.sH;
        return (
            n.charAt(0) === i.xQ.VOICE_CHANNEL && ((u = l.Zb), (n = n.substring(1))),
            r.forNonStringCommandOption
                ? (a = c.ZP.queryApplicationCommandChannelResults({
                      query: n,
                      channel: e,
                      channelTypes: r.allowedChannelTypes
                  }))
                : ((a = c.ZP.queryChannelResults({
                      query: n,
                      channel: e,
                      type: u
                  })),
                  null != t &&
                      ((s = c.ZP.queryStaticRouteChannels({
                          query: n,
                          guild: t
                      })),
                      a.channels.unshift(...s))),
            {
                results: a,
                staticRouteChannels: s
            }
        );
    },
    renderResults(e) {
        let t,
            n,
            {
                results: { channels: r },
                selectedIndex: a,
                query: l,
                options: c,
                onHover: d,
                onClick: _
            } = e,
            h = l.charAt(0) === i.xQ.VOICE_CHANNEL;
        return (
            h ? ((t = p.t.rMUL39), (n = p.NW.string(p.t.CYnO4u)), (l = l.substring(1))) : c.forNonStringCommandOption ? ((t = p.t.upNFT0), (n = p.NW.string(p.t.OGiMXF))) : ((t = p.t.UhnmJC), (n = p.NW.string(p.t.nIfr0d))),
            (0, u.HI)({
                query: l,
                selectedIndex: a,
                autocompletes: r,
                onHover: d,
                onClick: _,
                titleWithQuery: t,
                titleWithoutQuery: n,
                Component: o.ZP.Channel,
                getProps: (e) => ({
                    channel: e,
                    key: e.id,
                    category: s.Z.getChannel(e.parent_id)
                }),
                getQuery: (e) => (h ? ''.concat(f.zy).concat(i.xQ.VOICE_CHANNEL).concat(e) : ''.concat(f.zy).concat(e)),
                key: 'channels'
            })
        );
    },
    onSelect(e) {
        let {
                results: { channels: t },
                index: n,
                options: r
            } = e,
            i = t[n];
        return r.insertText(h(i), m(i)), { type: d.z2.CHANNEL };
    }
};
