var i = n(620632),
    r = n(73153),
    a = n(181658),
    s = n(673383),
    l = n(652215);
let o = {
    async resolveGameOrganizationInvite(e) {
        if (r.h.isDispatching()) return (await Promise.resolve(), o.resolveGameOrganizationInvite(e));
        r.h.dispatch({ type: "GAME_ORGANIZATION_INVITE_RESOLVE", code: e });
        try {
            let { body: t } = await i.Bo.get({ url: l.Rsh.GAME_ORGANIZATION_INVITE(e), rejectWithError: !0 });
            r.h.dispatch({ type: "GAME_ORGANIZATION_INVITE_RESOLVE_SUCCESS", code: e, invite: t });
        } catch (n) {
            let t = new a.A(n);
            throw (
                r.h.dispatch({
                    type: "GAME_ORGANIZATION_INVITE_RESOLVE_FAILURE",
                    code: e,
                    error: { code: t.code, message: t.message },
                }),
                n
            );
        }
    },
    async fetchInvitableGameOrganizations(e) {
        let { body: t } = await i.Bo.get({
            url: l.Rsh.GAME_ORGANIZATIONS_INVITABLE,
            query: { guild_ids: e },
            rejectWithError: !0,
        });
        r.h.dispatch({ type: "INVITABLE_GAME_ORGANIZATIONS_FETCH_SUCCESS", guildIds: e, gameOrganizations: t });
    },
    async fetchCharacterEligibility(e) {
        let { body: t } = await i.Bo.get({ url: l.Rsh.GAME_ORGANIZATION_INVITE_CHARACTERS(e), rejectWithError: !0 });
        r.h.dispatch({
            type: "GAME_ORGANIZATION_CHARACTER_ELIGIBILITY_FETCH_SUCCESS",
            code: e,
            characters: t.characters,
        });
    },
    async acceptGameOrganizationInvite(e, t) {
        try {
            let { body: n } = await i.Bo.post({
                url: l.Rsh.GAME_ORGANIZATION_INVITE_JOIN(e),
                body: { character_id: t },
                rejectWithError: !0,
            });
            return (
                n.game_organization_join_status === s.Ti.JOINED &&
                    r.h.dispatch({ type: "GAME_ORGANIZATION_INVITE_ACCEPT_SUCCESS", code: e }),
                n
            );
        } catch (e) {
            throw new a.A(e);
        }
    },
};
n.d(t, {}, { A: o });
