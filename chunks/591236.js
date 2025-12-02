n.d(t, { Z: () => m });
var r = n(588468),
    i = n(430824),
    a = n(496675),
    o = n(483360),
    s = n(877565),
    l = n(590921),
    c = n(761652),
    u = n(981631),
    d = n(185923),
    f = n(388032);
let p = 50;
function _(e) {
    return "".concat(c.a4).concat(e.name).concat(c.jp);
}
let m = {
    sentinel: c.a4,
    matches(e, t, n, r, i) {
        var o, s;
        return (
            r &&
            null != (s = null == (o = i.chatInputType.autocomplete) ? void 0 : o.addReactionShortcut) &&
            s &&
            (a.Z.can(u.Plq.ADD_REACTIONS, e) || e.isPrivate())
        );
    },
    queryResults(e, t, n, r, i) {
        let { emojis: a } = o.ZP.queryEmojiResults({
            query: n,
            channel: e,
            intention: d.Hz.REACTION,
            maxCount: p,
        });
        return { results: { emojis: a.unlocked } };
    },
    renderResults(e) {
        let {
            results: { emojis: t },
            selectedIndex: n,
            query: a,
            onHover: o,
            onClick: l,
        } = e;
        return (0, s.HI)({
            query: a,
            selectedIndex: n,
            autocompletes: t,
            onHover: o,
            onClick: l,
            titleWithQuery: f.t.o1Nmpc,
            titleWithoutQuery: f.intl.string(f.t.sMOuuS),
            Component: r.ZP.Emoji,
            getProps: (e) => ({
                emoji: e,
                key: e.id || e.uniqueName || e.name,
                sentinel: c.Iv,
                guild: null != e.guildId ? i.Z.getGuild(e.guildId) : null,
            }),
            getQuery: (e) => "".concat(c.a4).concat(e),
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
        return r.sendMessage(_(i)), { type: l.z2.REACTION };
    },
};
