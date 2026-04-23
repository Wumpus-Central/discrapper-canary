"use strict";
n.d(t, { A: () => _, P: () => u });
var i = n(17928),
    r = n(636537),
    s = n(228366),
    a = n(38405),
    o = n(339580),
    l = n(652215);
let d = {
        async fetchUserApplicationIdentitiesWithProfiles(e, t) {
            s.h.dispatch({ type: "USER_APPLICATION_IDENTITY_FETCH_USER_START", userId: e });
            try {
                let n = await r.Bo.get({
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
            await r.Bo.patch({ url: l.Rsh.SELF_APPLICATION_IDENTITY_CONFIG(e, t), body: n, rejectWithError: !0 });
        },
    },
    _ = d,
    u = (0, i.UT)(o.A, {
        getQueryId: l.fic.USER_APPLICATION_IDENTITIES,
        get: (e) => o.A.getUserIdentities(e),
        load: (e) => d.fetchUserApplicationIdentitiesWithProfiles(e),
    });
