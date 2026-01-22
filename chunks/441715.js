l.d(t, { $: () => a });
var n = l(562465),
    i = l(73153),
    r = l(549479),
    o = l(652215);
async function a(e) {
    let t = r.A.getAllowedApplicationIds(e);
    if (null !== t) return Promise.resolve(t);
    if (r.A.isFetching(e))
        return new Promise((t) => {
            let l = () => {
                let n = r.A.getAllowedApplicationIds(e);
                null !== n && (r.A.removeChangeListener(l), t(n));
            };
            r.A.addChangeListener(l);
        });
    i.h.dispatch({
        type: "GUILD_SETTINGS_ONBOARDING_ALLOWED_APPLICATIONS_FETCH_START",
        guildId: e,
    });
    try {
        var l;
        let t = await n.Bo.get({
            url: o.Rsh.GUILD_ONBOARDING_ALLOWED_APPLICATIONS(e),
            rejectWithError: !1,
        });
        if (t.ok && (null == (l = t.body) ? void 0 : l.application_ids)) {
            let l = t.body.application_ids.map((e) => String(e));
            return (
                i.h.dispatch({
                    type: "GUILD_SETTINGS_ONBOARDING_ALLOWED_APPLICATIONS_FETCH_SUCCESS",
                    guildId: e,
                    applicationIds: l,
                }),
                l
            );
        }
        return (
            i.h.dispatch({
                type: "GUILD_SETTINGS_ONBOARDING_ALLOWED_APPLICATIONS_FETCH_SUCCESS",
                guildId: e,
                applicationIds: [],
            }),
            []
        );
    } catch (t) {
        return (
            i.h.dispatch({
                type: "GUILD_SETTINGS_ONBOARDING_ALLOWED_APPLICATIONS_FETCH_FAILURE",
                guildId: e,
            }),
            []
        );
    }
}
