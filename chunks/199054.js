n.d(t, { Z: () => _ });
var r = n(951288),
    i = n(647438),
    a = n(998698),
    o = n(588468),
    s = n(657871),
    l = n(724177),
    c = n(695346),
    u = n(271383),
    d = n(590921),
    f = n(65090);
let _ = {
    selectMode: d.W7.TAB_ONLY,
    stores: [u.ZP],
    matches(e, t, n, r, i) {
        var o;
        let { enabled: u } = (0, s.kB)("MentionSuggestionAutocompletes", { autoTrackExposure: !0 });
        return (
            !(!u || e.isDM()) &&
            !!c.HV.getSetting() &&
            !!(null == (o = i.chatInputType.autocomplete) ? void 0 : o.mentionSuggestions) &&
            i.mentions.user !== d.h3.DENY &&
            null != i.currentFullWord &&
            !(i.currentFullWord.length < l.Q) &&
            null == a.Z.getActiveCommand(e.id) &&
            !0
        );
    },
    queryResults(e, t, n, r) {
        var i;
        let a = n.length;
        return (0, l.r)(e, null != (i = r.currentFullWord) ? i : "", a, {
            isIdle: r.isEditorIdle,
            currentAutocompleteType: r.currentAutocompleteType,
        });
    },
    renderResults(e) {
        let {
                results: { suggestions: t },
                selectedIndex: n,
                channel: a,
                options: l,
                onHover: c,
                onClick: u,
            } = e,
            { suggestionDesign: d } = (0, s.kB)("MentionSuggestionAutocompletes", { autoTrackExposure: !1 }),
            f = t.map((e, t) =>
                (0, r.jsx)(
                    o.ZP.UserSuggestion,
                    {
                        guildId: a.guild_id,
                        onClick: u,
                        onHover: c,
                        selected: n === t,
                        index: t,
                        user: e.user,
                        nick: e.nick,
                        comparator: e.comparator,
                        status: e.status,
                        hidePersonalInformation: l.hidePersonalInformation,
                        layout: "vertical" === d ? "vertical-suggestion" : "horizontal-suggestion",
                    },
                    e.user.id,
                ),
            );
        return (0, r.jsx)(i.Fragment, { children: f }, "mention-suggestions");
    },
    onSelect(e) {
        let {
                results: {
                    suggestions: t,
                    queryInfo: { prefix: n, suffix: r },
                },
                index: i,
                options: a,
                channel: o,
            } = e,
            s = t[i];
        return (
            null != s &&
                a.insertText(n + (0, f.BL)(s.user, o, a.hidePersonalInformation) + r, n + (0, f.m1)(s.user) + r, {
                    replaceFullWord: !0,
                }),
            { type: d.z2.MENTION }
        );
    },
};
