"use strict";
n.d(t, { A: () => g }), n(667532);
var r = n(478437),
    i = n(629357),
    s = n(580424),
    a = n(47167),
    o = n(734057),
    l = n(808728),
    u = n(994500),
    c = n(287809),
    d = n(248465),
    _ = n(634788),
    f = n(374803);
n(827669);
var p = n(746080),
    h = n(985018);
function m(e) {
    switch (e.type) {
        case r.r.PUBLIC_THREAD:
        case r.r.PRIVATE_THREAD:
        case r.r.ANNOUNCEMENT_THREAD:
        case r.r.GUILD_VOICE:
        case r.r.GUILD_STAGE_VOICE:
        case r.r.GUILD_CATEGORY:
            return `#"${(0, a.Eq)((0, a.m1)(e, c.default, u.A))}"`;
        default:
            let t = l.Ay.getTextChannelNameDisambiguations(e.guild_id)[e.id];
            return `#${null != t ? t.name : ((0, a.m1))(e, c.default, u.A)}`;
    }
}
function E(e) {
    return p.aQ.has(e.id) ? `<id:${e.id}>` : `<#${e.id}>`;
}
let g = {
    sentinel: "#",
    matches: (e, t, n, r, i) => i.mentions.channel !== f.xS.DENY && !e.isPrivate(),
    queryResults(e, t, n, r, s) {
        let a,
            o,
            u = l.I6;
        return (
            n.charAt(0) === i.AT.VOICE_CHANNEL && ((u = l.vM), (n = n.substring(1))),
            r.forNonStringCommandOption
                ? (a = d.Ay.queryApplicationCommandChannelResults({
                      query: n,
                      channel: e,
                      channelTypes: r.allowedChannelTypes,
                  }))
                : ((a = d.Ay.queryChannelResults({ query: n, channel: e, type: u })),
                  null != t && ((o = d.Ay.queryStaticRouteChannels({ query: n, guild: t })), a.channels.unshift(...o))),
            { results: a, staticRouteChannels: o }
        );
    },
    renderResults(e) {
        let t,
            n,
            {
                results: { channels: r },
                selectedIndex: a,
                query: l,
                options: u,
                onHover: c,
                onClick: d,
            } = e,
            f = l.charAt(0) === i.AT.VOICE_CHANNEL;
        return (
            f
                ? ((t = h.t["rMUL3+"]), (n = h.intl.string(h.t.CYnO4s)), (l = l.substring(1)))
                : u.forNonStringCommandOption
                  ? ((t = h.t.upNFT5), (n = h.intl.string(h.t.OGiMXJ)))
                  : ((t = h.t.UhnmJD), (n = h.intl.string(h.t.nIfr0Y))),
            (0, _.GM)({
                query: l,
                selectedIndex: a,
                autocompletes: r,
                onHover: c,
                onClick: d,
                titleWithQuery: t,
                titleWithoutQuery: n,
                Component: s.Ay.Channel,
                getProps: (e) => ({ channel: e, key: e.id, category: o.A.getChannel(e.parent_id) }),
                getQuery: (e) => (f ? `#${i.AT.VOICE_CHANNEL}${e}` : `#${e}`),
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
        return r.insertText(m(i), E(i)), { type: f.kc.CHANNEL };
    },
};
