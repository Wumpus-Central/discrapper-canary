l.d(e, { $: () => s });
var i = l(562465),
    n = l(73153),
    r = l(549479),
    o = l(652215);
async function s(t) {
    let e = r.A.getAllowedApplicationIds(t);
    if (null !== e) return Promise.resolve(e);
    if (r.A.isFetching(t))
        return new Promise((e) => {
            let l = () => {
                let i = r.A.getAllowedApplicationIds(t);
                null !== i && (r.A.removeChangeListener(l), e(i));
            };
            r.A.addChangeListener(l);
        });
    n.h.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_ALLOWED_APPLICATIONS_FETCH_START", guildId: t });
    try {
        let e = await i.Bo.get({ url: o.Rsh.GUILD_ONBOARDING_ALLOWED_APPLICATIONS(t), rejectWithError: !1 });
        if (e.ok && e.body?.application_ids) {
            let l = e.body.application_ids.map((t) => String(t));
            return (
                n.h.dispatch({
                    type: "GUILD_SETTINGS_ONBOARDING_ALLOWED_APPLICATIONS_FETCH_SUCCESS",
                    guildId: t,
                    applicationIds: l,
                }),
                l
            );
        }
        return (
            n.h.dispatch({
                type: "GUILD_SETTINGS_ONBOARDING_ALLOWED_APPLICATIONS_FETCH_SUCCESS",
                guildId: t,
                applicationIds: [],
            }),
            []
        );
    } catch (e) {
        return n.h.dispatch({ type: "GUILD_SETTINGS_ONBOARDING_ALLOWED_APPLICATIONS_FETCH_FAILURE", guildId: t }), [];
    }
}
