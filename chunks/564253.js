n.d(t, {
    A: () => m,
}),
    n(667532),
    n(896048);
var r = n(478437),
    i = n(629357),
    a = n(580424),
    s = n(47167),
    o = n(734057),
    l = n(808728),
    c = n(248465),
    u = n(634788),
    d = n(374803);
n(827669);
var f = n(746080),
    p = n(985018);

function _(e) {
    switch (e.type) {
        case r.r.PUBLIC_THREAD:
        case r.r.PRIVATE_THREAD:
        case r.r.ANNOUNCEMENT_THREAD:
        case r.r.GUILD_VOICE:
        case r.r.GUILD_STAGE_VOICE:
        case r.r.GUILD_CATEGORY:
            return '#"'.concat((0, s.Eq)(e.name), '"');
        default:
            let t = l.Ay.getTextChannelNameDisambiguations(e.guild_id)[e.id];
            return "#".concat(null != t ? t.name : e.name);
    }
}

function h(e) {
    return f.aQ.has(e.id) ? "<id:".concat(e.id, ">") : "<#".concat(e.id, ">");
}
let m = {
    sentinel: "#",
    matches: (e, t, n, r, i) => i.mentions.channel !== d.xS.DENY && !e.isPrivate(),
    queryResults(e, t, n, r, a) {
        let s,
            o,
            u = l.I6;
        return (
            n.charAt(0) === i.AT.VOICE_CHANNEL && ((u = l.vM), (n = n.substring(1))),
            r.forNonStringCommandOption
                ? (s = c.Ay.queryApplicationCommandChannelResults({
                      query: n,
                      channel: e,
                      channelTypes: r.allowedChannelTypes,
                  }))
                : ((s = c.Ay.queryChannelResults({
                      query: n,
                      channel: e,
                      type: u,
                  })),
                  null != t &&
                      ((o = c.Ay.queryStaticRouteChannels({
                          query: n,
                          guild: t,
                      })),
                      s.channels.unshift(...o))),
            {
                results: s,
                staticRouteChannels: o,
            }
        );
    },
    renderResults(e) {
        let t,
            n,
            {
                results: { channels: r },
                selectedIndex: s,
                query: l,
                options: c,
                onHover: d,
                onClick: f,
            } = e,
            _ = l.charAt(0) === i.AT.VOICE_CHANNEL;
        return (
            _
                ? ((t = p.t["rMUL3+"]), (n = p.intl.string(p.t.CYnO4s)), (l = l.substring(1)))
                : c.forNonStringCommandOption
                  ? ((t = p.t.upNFT5), (n = p.intl.string(p.t.OGiMXJ)))
                  : ((t = p.t.UhnmJD), (n = p.intl.string(p.t.nIfr0Y))),
            (0, u.GM)({
                query: l,
                selectedIndex: s,
                autocompletes: r,
                onHover: d,
                onClick: f,
                titleWithQuery: t,
                titleWithoutQuery: n,
                Component: a.Ay.Channel,
                getProps: (e) => ({
                    channel: e,
                    key: e.id,
                    category: o.A.getChannel(e.parent_id),
                }),
                getQuery: (e) => (_ ? "".concat("#").concat(i.AT.VOICE_CHANNEL).concat(e) : "".concat("#").concat(e)),
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
        return (
            r.insertText(_(i), h(i)),
            {
                type: d.kc.CHANNEL,
            }
        );
    },
};
