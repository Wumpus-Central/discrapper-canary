n.d(t, { Z: () => i });
var r = n(570140);
let i = {
    setPendingInviteRules: function (e, t, n) {
        r.Z.dispatch({
            type: 'GUILD_SETTINGS_JOIN_RULES_INVITE_SET_PENDING_RULES',
            guildId: e,
            requireTerms: t,
            termRules: n
        });
    },
    setPendingMemberVerificationRules: function (e, t) {
        r.Z.dispatch({
            type: 'GUILD_SETTINGS_JOIN_RULES_APPLY_SET_PENDING_FORM_FIELDS',
            guildId: e,
            formFields: t
        });
    },
    setSelectedJoinType: function (e, t) {
        r.Z.dispatch({
            type: 'GUILD_SETTINGS_JOIN_RULES_SET_SELECTED_TYPE',
            guildId: e,
            joinType: t
        });
    }
};
