n.d(t, { A: () => l });
var i = n(73153);
let l = {
    setPendingInviteRules: function (e, t, n) {
        i.h.dispatch({
            type: "GUILD_SETTINGS_JOIN_RULES_INVITE_SET_PENDING_RULES",
            guildId: e,
            requireTerms: t,
            termRules: n,
        });
    },
    setPendingMemberVerificationRules: function (e, t) {
        i.h.dispatch({ type: "GUILD_SETTINGS_JOIN_RULES_APPLY_SET_PENDING_FORM_FIELDS", guildId: e, formFields: t });
    },
    setSelectedJoinType: function (e, t) {
        i.h.dispatch({ type: "GUILD_SETTINGS_JOIN_RULES_SET_SELECTED_TYPE", guildId: e, joinType: t });
    },
    setIsAgeRestricted: function (e, t) {
        i.h.dispatch({ type: "GUILD_SETTINGS_JOIN_RULES_SET_CONTENT_LEVEL", guildId: e, isAgeRestricted: t });
    },
};
