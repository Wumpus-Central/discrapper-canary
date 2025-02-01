n.d(t, { Z: () => _ });
var i = n(588468),
    r = n(496675),
    a = n(483360),
    s = n(877565),
    o = n(590921),
    l = n(665692),
    u = n(981631),
    c = n(185923),
    d = n(388032);
function f(e) {
    return ''.concat(l.a4).concat(e.name).concat(l.jp);
}
let _ = {
    sentinel: l.a4,
    matches(e, t, n, i, a) {
        var s, o;
        return i && null !== (o = null === (s = a.chatInputType.autocomplete) || void 0 === s ? void 0 : s.addReactionShortcut) && void 0 !== o && o && (r.Z.can(u.Plq.ADD_REACTIONS, e) || e.isPrivate());
    },
    queryResults(e, t, n, i, r) {
        let { emojis: s } = a.ZP.queryEmojiResults({
            query: n,
            channel: e,
            intention: c.Hz.REACTION
        });
        return { results: { emojis: s.unlocked } };
    },
    renderResults(e) {
        let {
            results: { emojis: t },
            selectedIndex: n,
            query: r,
            onHover: a,
            onClick: o
        } = e;
        return (0, s.HI)({
            query: r,
            selectedIndex: n,
            autocompletes: t,
            onHover: a,
            onClick: o,
            titleWithQuery: d.t.o1Nmpa,
            titleWithoutQuery: d.intl.string(d.t.sMOuub),
            Component: i.ZP.Emoji,
            getProps: (e) => ({
                emoji: e,
                key: e.id || e.uniqueName || e.name,
                sentinel: l.Iv
            }),
            getQuery: (e) => ''.concat(l.a4).concat(e),
            key: 'reactions'
        });
    },
    onSelect(e) {
        let {
                results: { emojis: t },
                index: n,
                options: i
            } = e,
            r = t[n];
        return i.sendMessage(f(r)), { type: o.z2.REACTION };
    }
};
