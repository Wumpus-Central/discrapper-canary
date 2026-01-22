n.d(t, {
    A: () => p,
});
var r = n(627968),
    i = n(64700),
    a = n(861382),
    s = n(580424),
    o = n(968011),
    l = n(399777),
    c = n(253932),
    u = n(696451),
    d = n(374803),
    f = n(311036);
let p = {
    selectMode: d.SB.TAB_ONLY,
    stores: [u.Ay],
    matches(e, t, n, r, i) {
        var s;
        let { enabled: u } = (0, o.sA)("MentionSuggestionAutocompletes", {
            autoTrackExposure: !0,
        });
        return (
            !(!u || e.isDM()) &&
            !!c.ng.getSetting() &&
            !!(null == (s = i.chatInputType.autocomplete) ? void 0 : s.mentionSuggestions) &&
            i.mentions.user !== d.Vf.DENY &&
            null != i.currentFullWord &&
            !(i.currentFullWord.length < l.$) &&
            null == a.A.getActiveCommand(e.id) &&
            !0
        );
    },
    queryResults(e, t, n, r) {
        var i;
        let a = n.length;
        return (0, l.W)(e, null != (i = r.currentFullWord) ? i : "", a, {
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
            { suggestionDesign: d } = (0, o.sA)("MentionSuggestionAutocompletes", {
                autoTrackExposure: !1,
            }),
            f = t.map((e, t) =>
                (0, r.jsx)(
                    s.Ay.UserSuggestion,
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
        return (0, r.jsx)(
            i.Fragment,
            {
                children: f,
            },
            "mention-suggestions",
        );
    },
    onSelect(e) {
        let {
                results: {
                    suggestions: t,
                    queryInfo: { prefix: n, suffix: r },
                },
                index: i,
                options: a,
                channel: s,
            } = e,
            o = t[i];
        return (
            null != o &&
                a.insertText(n + (0, f.JB)(o.user, s, a.hidePersonalInformation) + r, n + (0, f.z$)(o.user) + r, {
                    replaceFullWord: !0,
                }),
            {
                type: d.kc.MENTION,
            }
        );
    },
};
