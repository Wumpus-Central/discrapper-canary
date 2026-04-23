n.d(t, { A: () => h }), n(667532);
var l = n(478437),
    r = n(629357),
    i = n(580424),
    s = n(47167),
    o = n(734057),
    u = n(808728),
    a = n(994500),
    m = n(287809),
    c = n(248465),
    d = n(634788),
    p = n(374803);
n(827669);
var y = n(746080),
    A = n(985018);
let h = {
    sentinel: "#",
    matches: (e, t, n, l, r) => r.mentions.channel !== p.xS.DENY && !e.isPrivate(),
    queryResults(e, t, n, l, i) {
        let s,
            o,
            a = u.I6;
        return (
            n.charAt(0) === r.AT.VOICE_CHANNEL && ((a = u.vM), (n = n.substring(1))),
            l.forNonStringCommandOption
                ? (s = c.Ay.queryApplicationCommandChannelResults({
                      query: n,
                      channel: e,
                      channelTypes: l.allowedChannelTypes,
                  }))
                : ((s = c.Ay.queryChannelResults({ query: n, channel: e, type: a })),
                  null != t && ((o = c.Ay.queryStaticRouteChannels({ query: n, guild: t })), s.channels.unshift(...o))),
            { results: s, staticRouteChannels: o }
        );
    },
    renderResults(e) {
        let t,
            n,
            {
                results: { channels: l },
                selectedIndex: s,
                query: u,
                options: a,
                onHover: m,
                onClick: c,
            } = e,
            p = u.charAt(0) === r.AT.VOICE_CHANNEL;
        return (
            p
                ? ((t = A.t["rMUL3+"]), (n = A.intl.string(A.t.CYnO4s)), (u = u.substring(1)))
                : a.forNonStringCommandOption
                  ? ((t = A.t.upNFT5), (n = A.intl.string(A.t.OGiMXJ)))
                  : ((t = A.t.UhnmJD), (n = A.intl.string(A.t.nIfr0Y))),
            (0, d.GM)({
                query: u,
                selectedIndex: s,
                autocompletes: l,
                onHover: m,
                onClick: c,
                titleWithQuery: t,
                titleWithoutQuery: n,
                Component: i.Ay.Channel,
                getProps: (e) => ({ channel: e, key: e.id, category: o.A.getChannel(e.parent_id) }),
                getQuery: (e) => (p ? `#${r.AT.VOICE_CHANNEL}${e}` : `#${e}`),
                key: "channels",
            })
        );
    },
    onSelect(e) {
        var t;
        let {
                results: { channels: n },
                index: r,
                options: i,
            } = e,
            o = n[r];
        return (
            i.insertText(
                (function (e) {
                    switch (e.type) {
                        case l.r.PUBLIC_THREAD:
                        case l.r.PRIVATE_THREAD:
                        case l.r.ANNOUNCEMENT_THREAD:
                        case l.r.GUILD_VOICE:
                        case l.r.GUILD_STAGE_VOICE:
                        case l.r.GUILD_CATEGORY:
                            return `#"${(0, s.Eq)((0, s.m1)(e, m.default, a.A))}"`;
                        default:
                            let t = u.Ay.getTextChannelNameDisambiguations(e.guild_id)[e.id];
                            return `#${null != t ? t.name : ((0, s.m1))(e, m.default, a.A)}`;
                    }
                })(o),
                ((t = o), y.aQ.has(t.id) ? `<id:${t.id}>` : `<#${t.id}>`),
            ),
            { type: p.kc.CHANNEL }
        );
    },
};
