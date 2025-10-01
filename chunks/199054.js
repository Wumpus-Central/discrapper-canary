n.d(t, { Z: () => _ }), n(35282);
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
    useFullWord: !0,
    stores: [u.ZP],
    matches(e, t, n, r, i) {
        var o;
        let { enabled: l } = (0, s.kB)("MentionSuggestionAutocompletes", { autoTrackExposure: !1 });
        return (
            !(
                !l ||
                !c.HV.getSetting() ||
                !(null == (o = i.chatInputType.autocomplete) ? void 0 : o.mentionSuggestions) ||
                i.mentions.user === d.h3.DENY ||
                n.length < 2 ||
                /^\W/.test(n)
            ) && null == a.Z.getActiveCommand(e.id)
        );
    },
    queryResults: (e, t, n, r) =>
        (0, l.r)(e, n, {
            isIdle: r.isEditorIdle,
            isVisible: r.isVisible,
        }),
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
                results: { suggestions: t, trailingPunctuation: n },
                index: r,
                options: i,
                channel: a,
            } = e,
            o = t[r];
        return (
            null != o &&
                i.insertText((0, f.BL)(o.user, a, i.hidePersonalInformation) + n, (0, f.m1)(o.user) + n, {
                    replaceFullWord: !0,
                }),
            { type: d.z2.MENTION }
        );
    },
};
