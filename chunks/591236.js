var i = r(588468),
    a = r(496675),
    o = r(483360),
    s = r(877565),
    l = r(590921),
    u = r(665692),
    c = r(981631),
    d = r(185923),
    f = r(388032);
let p = {
    sentinel: u.a4,
    matches(e, n, r, i, o) {
        var s, l;
        return i && null !== (l = null === (s = o.chatInputType.autocomplete) || void 0 === s ? void 0 : s.addReactionShortcut) && void 0 !== l && l && (a.Z.can(c.Plq.ADD_REACTIONS, e) || e.isPrivate());
    },
    queryResults(e, n, r, i, a) {
        let { emojis: s } = o.ZP.queryEmojiResults({
            query: r,
            channel: e,
            intention: d.Hz.REACTION
        });
        return { results: { emojis: s.unlocked } };
    },
    renderResults(e) {
        let {
            results: { emojis: n },
            selectedIndex: r,
            query: a,
            onHover: o,
            onClick: l
        } = e;
        return (0, s.HI)({
            query: a,
            selectedIndex: r,
            autocompletes: n,
            onHover: o,
            onClick: l,
            titleWithQuery: f.t.o1Nmpa,
            titleWithoutQuery: f.intl.string(f.t.sMOuub),
            Component: i.ZP.Emoji,
            getProps: (e) => ({
                emoji: e,
                key: e.id || e.uniqueName || e.name,
                sentinel: u.Iv
            }),
            getQuery: (e) => ''.concat(u.a4).concat(e),
            key: 'reactions'
        });
    },
    onSelect(e) {
        let {
                results: { emojis: n },
                index: r,
                options: i
            } = e,
            a = n[r];
        return i.sendMessage(h(a)), { type: l.z2.REACTION };
    }
};
function h(e) {
    return ''.concat(u.a4).concat(e.name).concat(u.jp);
}
n.Z = p;
