var i = n(570140);
t.Z = {
    setPendingInviteRules: function (e, t, n) {
        i.Z.dispatch({
            type: 'GUILD_SETTINGS_JOIN_RULES_INVITE_SET_PENDING_RULES',
            guildId: e,
            requireTerms: t,
            termRules: n
        });
    },
    setPendingMemberVerificationRules: function (e, t) {
        i.Z.dispatch({
            type: 'GUILD_SETTINGS_JOIN_RULES_APPLY_SET_PENDING_FORM_FIELDS',
            guildId: e,
            formFields: t
        });
    },
    reset: function () {
        i.Z.dispatch({ type: 'GUILD_SETTINGS_JOIN_RULES_RESET' });
    },
    setSelectedJoinType: function (e, t) {
        i.Z.dispatch({
            type: 'GUILD_SETTINGS_JOIN_RULES_SET_SELECTED_TYPE',
            guildId: e,
            joinType: t
        });
    }
};
