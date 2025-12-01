n.d(t, { Z: () => d }), n(388685);
var r = n(327432),
    i = n(590921),
    a = n(657871),
    o = n(724177),
    s = n(695346),
    l = n(887490);
let c = "line",
    u = [];
function d(e, t, n, d) {
    var f;
    let { enabled: p, highlightDesign: _ } = (0, a.kB)("decorateMentionSuggestion", { autoTrackExposure: !1 }),
        m = e.selection,
        { currentAutocompleteType: h } = d,
        g = null !== h && h !== i.eq.MENTION_SUGGESTIONS;
    if (
        !p ||
        n.isDM() ||
        g ||
        l.bN.areStylesDisabled(e) ||
        !(null == (f = e.chatInputType.autocomplete) ? void 0 : f.mentionSuggestions) ||
        !s.HV.getSetting() ||
        null == m ||
        l.M8.isExpanded(m)
    )
        return u;
    let [E, b] = t;
    if (!l.LC.isText(E)) return u;
    let [y] = l.bN.node(e, l.C0.parent(b));
    if (!l.aj.isType(y, c) || !r.e6.includes(l.bN.range(e, b), m.anchor)) return u;
    let O = m.anchor.offset,
        {
            results: { suggestions: v, queryInfo: S },
        } = (0, o.r)(n, E.text, O, d);
    return 0 === v.length
        ? u
        : [
              {
                  anchor: {
                      path: b,
                      offset: S.startIndex,
                  },
                  focus: {
                      path: b,
                      offset: S.startIndex + S.query.length,
                  },
                  mentionSuggestion: !0,
                  mentionSuggestionSimpleColorVariant: "simple" === _,
              },
          ];
}
