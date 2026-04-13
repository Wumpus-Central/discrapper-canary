"use strict";
n.d(t, { A: () => c, P: () => d });
var r = n(311907),
    i = n(562465),
    s = n(73153),
    a = n(728458),
    o = n(339580),
    l = n(652215);
let u = {
        async fetchUserApplicationIdentitiesWithProfiles(e, t) {
            s.h.dispatch({ type: "USER_APPLICATION_IDENTITY_FETCH_USER_START", userId: e });
            try {
                let n = await i.Bo.get({
                    url: l.Rsh.USER_APPLICATION_IDENTITIES(e),
                    query: { with_profiles: !0 },
                    rejectWithError: !0,
                    signal: t,
                });
                s.h.dispatch({
                    type: "USER_APPLICATION_IDENTITY_FETCH_USER_SUCCESS",
                    userId: e,
                    identities: n.body.identities,
                });
            } catch (t) {
                throw (
                    (s.h.dispatch({ type: "USER_APPLICATION_IDENTITY_FETCH_USER_FAILURE", userId: e }),
                    a.A.captureException(t),
                    t)
                );
            }
        },
        async updateApplicationIdentityConfig(e, t, n) {
            await i.Bo.patch({ url: l.Rsh.SELF_APPLICATION_IDENTITY_CONFIG(e, t), body: n, rejectWithError: !0 });
        },
    },
    c = u,
    d = (0, r.UT)(o.A, {
        getQueryId: l.fic.USER_APPLICATION_IDENTITIES,
        get: (e) => o.A.getUserIdentities(e),
        load: (e) => u.fetchUserApplicationIdentitiesWithProfiles(e),
    });
