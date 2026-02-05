"use strict";
n.d(t, { A: () => p });
var r = n(580424),
    i = n(71393),
    a = n(576705),
    s = n(248465),
    o = n(634788),
    l = n(374803);
n(827669);
var u = n(652215),
    c = n(307731),
    d = n(985018);
let _ = 50;
function f(e) {
    return `+:${e.name}:`;
}
let p = {
    sentinel: "+:",
    matches: (e, t, n, r, i) =>
        r &&
        (i.chatInputType.autocomplete?.addReactionShortcut ?? !1) &&
        (a.A.can(u.xBc.ADD_REACTIONS, e) || e.isPrivate()),
    queryResults(e, t, n, r, i) {
        let { emojis: a } = s.Ay.queryEmojiResults({ query: n, channel: e, intention: c.b_.REACTION, maxCount: _ });
        return { results: { emojis: a.unlocked } };
    },
    renderResults(e) {
        let {
            results: { emojis: t },
            selectedIndex: n,
            query: a,
            onHover: s,
            onClick: l,
        } = e;
        return (0, o.GM)({
            query: a,
            selectedIndex: n,
            autocompletes: t,
            onHover: s,
            onClick: l,
            titleWithQuery: d.t.o1Nmpc,
            titleWithoutQuery: d.intl.string(d.t.sMOuuS),
            Component: r.Ay.Emoji,
            getProps: (e) => ({
                emoji: e,
                key: e.id || e.uniqueName || e.name,
                sentinel: ":",
                guild: null != e.guildId ? i.A.getGuild(e.guildId) : null,
            }),
            getQuery: (e) => `+:${e}`,
            key: "reactions",
        });
    },
    onSelect(e) {
        let {
                results: { emojis: t },
                index: n,
                options: r,
            } = e,
            i = t[n];
        return r.sendMessage(f(i)), { type: l.kc.REACTION };
    },
};
