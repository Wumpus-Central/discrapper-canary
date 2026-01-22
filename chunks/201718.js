n.d(t, {
    P: () => u,
});
var r = n(311907),
    i = n(562465),
    a = n(73153),
    s = n(728458),
    o = n(339580),
    l = n(652215);
let c = {
        async fetchUserApplicationIdentitiesWithProfiles(e, t) {
            a.h.dispatch({
                type: "USER_APPLICATION_IDENTITY_FETCH_USER_START",
                userId: e,
            });
            try {
                let n = await i.Bo.get({
                    url: l.Rsh.USER_APPLICATION_IDENTITIES(e),
                    query: {
                        with_profiles: !0,
                    },
                    rejectWithError: !0,
                    signal: t,
                });
                a.h.dispatch({
                    type: "USER_APPLICATION_IDENTITY_FETCH_USER_SUCCESS",
                    userId: e,
                    identities: n.body.identities,
                });
            } catch (t) {
                throw (
                    (a.h.dispatch({
                        type: "USER_APPLICATION_IDENTITY_FETCH_USER_FAILURE",
                        userId: e,
                    }),
                    s.A.captureException(t),
                    t)
                );
            }
        },
    },
    u = (0, r.UT)(o.A, {
        getQueryId: l.fic.USER_APPLICATION_IDENTITIES,
        get: (e) => o.A.getUserIdentities(e),
        load: (e) => c.fetchUserApplicationIdentitiesWithProfiles(e),
    });
