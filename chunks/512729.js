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
    let { enabled: _, highlightDesign: p } = (0, a.kB)("decorateMentionSuggestion", { autoTrackExposure: !1 }),
        h = e.selection,
        { currentAutocompleteType: m } = d,
        g = null !== m && m !== i.eq.MENTION_SUGGESTIONS;
    if (
        !_ ||
        n.isDM() ||
        g ||
        l.bN.areStylesDisabled(e) ||
        !(null == (f = e.chatInputType.autocomplete) ? void 0 : f.mentionSuggestions) ||
        !s.HV.getSetting() ||
        null == h ||
        l.M8.isExpanded(h)
    )
        return u;
    let [E, b] = t;
    if (!l.LC.isText(E)) return u;
    let [y] = l.bN.node(e, l.C0.parent(b));
    if (!l.aj.isType(y, c) || !r.e6.includes(l.bN.range(e, b), h.anchor)) return u;
    let O = h.anchor.offset,
        {
            results: { suggestions: v, queryInfo: I },
        } = (0, o.r)(n, E.text, O, d);
    return 0 === v.length
        ? u
        : [
              {
                  anchor: {
                      path: b,
                      offset: I.startIndex,
                  },
                  focus: {
                      path: b,
                      offset: I.startIndex + I.query.length,
                  },
                  mentionSuggestion: !0,
                  mentionSuggestionSimpleColorVariant: "simple" === p,
              },
          ];
}
