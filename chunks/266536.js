"use strict";
n.d(t, { A: () => f });
var r = n(627968),
    i = n(64700),
    a = n(861382),
    s = n(580424),
    o = n(968011),
    l = n(399777),
    u = n(253932),
    c = n(696451),
    d = n(374803),
    _ = n(311036);
let f = {
    selectMode: d.SB.TAB_ONLY,
    stores: [c.Ay],
    matches(e, t, n, r, i) {
        let { enabled: s } = (0, o.sA)("MentionSuggestionAutocompletes", { autoTrackExposure: !0 });
        return (
            !(!s || e.isDM()) &&
            !!u.ng.getSetting() &&
            !!i.chatInputType.autocomplete?.mentionSuggestions &&
            i.mentions.user !== d.Vf.DENY &&
            null != i.currentFullWord &&
            !(i.currentFullWord.length < l.$) &&
            null == a.A.getActiveCommand(e.id) &&
            !0
        );
    },
    queryResults(e, t, n, r) {
        let i = n.length;
        return (0, l.W)(e, r.currentFullWord ?? "", i, {
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
                onHover: u,
                onClick: c,
            } = e,
            { suggestionDesign: d } = (0, o.sA)("MentionSuggestionAutocompletes", { autoTrackExposure: !1 }),
            _ = t.map((e, t) =>
                (0, r.jsx)(
                    s.Ay.UserSuggestion,
                    {
                        guildId: a.guild_id,
                        onClick: c,
                        onHover: u,
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
        return (0, r.jsx)(i.Fragment, { children: _ }, "mention-suggestions");
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
                a.insertText(n + (0, _.JB)(o.user, s, a.hidePersonalInformation) + r, n + (0, _.z$)(o.user) + r, {
                    replaceFullWord: !0,
                }),
            { type: d.kc.MENTION }
        );
    },
};
