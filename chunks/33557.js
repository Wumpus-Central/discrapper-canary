n.d(t, { A: () => d });
var l = n(580424),
    r = n(71393),
    i = n(576705),
    s = n(248465),
    o = n(634788),
    u = n(374803);
n(827669);
var a = n(652215),
    m = n(307731),
    c = n(985018);
let d = {
    sentinel: "+:",
    matches: (e, t, n, l, r) =>
        l &&
        (r.chatInputType.autocomplete?.addReactionShortcut ?? !1) &&
        (i.A.can(a.xBc.ADD_REACTIONS, e) || e.isPrivate()),
    queryResults(e, t, n, l, r) {
        let { emojis: i } = s.Ay.queryEmojiResults({
            query: n,
            channel: e,
            intention: m.EmojiIntention.REACTION,
            maxCount: 50,
        });
        return { results: { emojis: i.unlocked } };
    },
    renderResults(e) {
        let {
            results: { emojis: t },
            selectedIndex: n,
            query: i,
            onHover: s,
            onClick: u,
        } = e;
        return (0, o.GM)({
            query: i,
            selectedIndex: n,
            autocompletes: t,
            onHover: s,
            onClick: u,
            titleWithQuery: c.t.o1Nmpc,
            titleWithoutQuery: c.intl.string(c.t.sMOuuS),
            Component: l.Ay.Emoji,
            getProps: (e) => ({
                emoji: e,
                key: e.id || e.uniqueName || e.name,
                sentinel: ":",
                guild: null != e.guildId ? r.A.getGuild(e.guildId) : null,
            }),
            getQuery: (e) => `+:${e}`,
            key: "reactions",
        });
    },
    onSelect(e) {
        var t;
        let {
                results: { emojis: n },
                index: l,
                options: r,
            } = e,
            i = n[l];
        return r.sendMessage(((t = i), `+:${t.name}:`)), { type: u.kc.REACTION };
    },
};
