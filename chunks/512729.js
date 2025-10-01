n.d(t, { Z: () => p }), n(413496), n(433524), n(35282), n(421244), n(388685), n(539854);
var r = n(392711),
    i = n(327432),
    a = n(657871),
    o = n(724177),
    s = n(695346),
    l = n(887490);
let c = "line",
    u = [],
    d = RegExp("(?<prefix>^|\\s+)(?<word>\\w{2,})[".concat((0, r.escapeRegExp)(o.x), "]*"), "g"),
    f = /\s/;
function* _(e, t, n) {
    for (let i of e.matchAll(d)) {
        var r;
        if (null == i.groups) continue;
        let { prefix: e, word: a } = i.groups,
            { results: s } = (0, o.r)(t, a, n);
        if (s.suggestions.length < 1) continue;
        let l = null != (r = null == e ? void 0 : e.length) ? r : 0;
        yield {
            start: i.index + l,
            end: i.index + l + a.length,
            results: s,
        };
    }
}
function p(e, t, n, r) {
    var o;
    let { enabled: d, highlightDesign: p } = (0, a.kB)("decorateMentionSuggestion", { autoTrackExposure: !1 }),
        h = e.selection;
    if (
        !d ||
        l.bN.areStylesDisabled(e) ||
        !(null == (o = e.chatInputType.autocomplete) ? void 0 : o.mentionSuggestions) ||
        !s.HV.getSetting() ||
        null == h ||
        l.M8.isExpanded(h)
    )
        return u;
    let [m, g] = t;
    if (!l.LC.isText(m)) return u;
    let [E] = l.bN.node(e, l.C0.parent(g));
    if (!l.aj.isType(E, c) || !i.e6.includes(l.bN.range(e, g), h.anchor)) return u;
    let b = h.anchor.offset;
    for (; b > 0 && !f.test(m.text[b - 1]); ) b--;
    let y = h.anchor.offset;
    for (; y < m.text.length && !f.test(m.text[y]); ) y++;
    let O = m.text.substring(b, y),
        v = [];
    for (let e of _(O, n, r))
        v.push({
            anchor: {
                path: g,
                offset: b + e.start,
            },
            focus: {
                path: g,
                offset: b + e.end,
            },
            mentionSuggestion: !0,
            mentionSuggestionSimpleColorVariant: "simple" === p,
        });
    return v;
}
