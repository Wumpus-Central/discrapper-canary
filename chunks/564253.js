"use strict";
n.d(t, { A: () => m }), n(667532);
var r = n(478437),
    i = n(629357),
    a = n(580424),
    s = n(47167),
    o = n(734057),
    l = n(808728),
    u = n(248465),
    c = n(634788),
    d = n(374803);
n(827669);
var _ = n(746080),
    f = n(985018);
function p(e) {
    switch (e.type) {
        case r.r.PUBLIC_THREAD:
        case r.r.PRIVATE_THREAD:
        case r.r.ANNOUNCEMENT_THREAD:
        case r.r.GUILD_VOICE:
        case r.r.GUILD_STAGE_VOICE:
        case r.r.GUILD_CATEGORY:
            return `#"${(0, s.Eq)(e.name)}"`;
        default:
            let t = l.Ay.getTextChannelNameDisambiguations(e.guild_id)[e.id];
            return `#${null != t ? t.name : e.name}`;
    }
}
function h(e) {
    return _.aQ.has(e.id) ? `<id:${e.id}>` : `<#${e.id}>`;
}
let m = {
    sentinel: "#",
    matches: (e, t, n, r, i) => i.mentions.channel !== d.xS.DENY && !e.isPrivate(),
    queryResults(e, t, n, r, a) {
        let s,
            o,
            c = l.I6;
        return (
            n.charAt(0) === i.AT.VOICE_CHANNEL && ((c = l.vM), (n = n.substring(1))),
            r.forNonStringCommandOption
                ? (s = u.Ay.queryApplicationCommandChannelResults({
                      query: n,
                      channel: e,
                      channelTypes: r.allowedChannelTypes,
                  }))
                : ((s = u.Ay.queryChannelResults({ query: n, channel: e, type: c })),
                  null != t && ((o = u.Ay.queryStaticRouteChannels({ query: n, guild: t })), s.channels.unshift(...o))),
            { results: s, staticRouteChannels: o }
        );
    },
    renderResults(e) {
        let t,
            n,
            {
                results: { channels: r },
                selectedIndex: s,
                query: l,
                options: u,
                onHover: d,
                onClick: _,
            } = e,
            p = l.charAt(0) === i.AT.VOICE_CHANNEL;
        return (
            p
                ? ((t = f.t["rMUL3+"]), (n = f.intl.string(f.t.CYnO4s)), (l = l.substring(1)))
                : u.forNonStringCommandOption
                  ? ((t = f.t.upNFT5), (n = f.intl.string(f.t.OGiMXJ)))
                  : ((t = f.t.UhnmJD), (n = f.intl.string(f.t.nIfr0Y))),
            (0, c.GM)({
                query: l,
                selectedIndex: s,
                autocompletes: r,
                onHover: d,
                onClick: _,
                titleWithQuery: t,
                titleWithoutQuery: n,
                Component: a.Ay.Channel,
                getProps: (e) => ({ channel: e, key: e.id, category: o.A.getChannel(e.parent_id) }),
                getQuery: (e) => (p ? `#${i.AT.VOICE_CHANNEL}${e}` : `#${e}`),
                key: "channels",
            })
        );
    },
    onSelect(e) {
        let {
                results: { channels: t },
                index: n,
                options: r,
            } = e,
            i = t[n];
        return r.insertText(p(i), h(i)), { type: d.kc.CHANNEL };
    },
};
