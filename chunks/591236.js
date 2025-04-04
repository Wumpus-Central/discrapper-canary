n.d(t, { Z: () => _ });
var r = n(588468),
    i = n(496675),
    o = n(483360),
    a = n(877565),
    s = n(590921),
    l = n(665692),
    c = n(981631),
    u = n(185923),
    d = n(388032);
function f(e) {
    return ''.concat(l.a4).concat(e.name).concat(l.jp);
}
let _ = {
    sentinel: l.a4,
    matches(e, t, n, r, o) {
        var a, s;
        return r && null != (s = null == (a = o.chatInputType.autocomplete) ? void 0 : a.addReactionShortcut) && s && (i.Z.can(c.Plq.ADD_REACTIONS, e) || e.isPrivate());
    },
    queryResults(e, t, n, r, i) {
        let { emojis: a } = o.ZP.queryEmojiResults({
            query: n,
            channel: e,
            intention: u.Hz.REACTION
        });
        return { results: { emojis: a.unlocked } };
    },
    renderResults(e) {
        let {
            results: { emojis: t },
            selectedIndex: n,
            query: i,
            onHover: o,
            onClick: s
        } = e;
        return (0, a.HI)({
            query: i,
            selectedIndex: n,
            autocompletes: t,
            onHover: o,
            onClick: s,
            titleWithQuery: d.t.o1Nmpa,
            titleWithoutQuery: d.NW.string(d.t.sMOuub),
            Component: r.ZP.Emoji,
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
                options: r
            } = e,
            i = t[n];
        return r.sendMessage(f(i)), { type: s.z2.REACTION };
    }
};
