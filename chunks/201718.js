"use strict";
n.d(t, { A: () => d, P: () => c });
var i = n(17928),
    r = n(562465),
    a = n(228366),
    s = n(339580),
    l = n(652215);
let o = {
        async fetchUserApplicationIdentitiesWithProfiles(e, t) {
            a.h.dispatch({ type: "USER_APPLICATION_IDENTITY_FETCH_USER_START", userId: e });
            try {
                let n = await r.Bo.get({
                    url: l.Rsh.USER_APPLICATION_IDENTITIES(e),
                    query: { with_profiles: !0 },
                    rejectWithError: !0,
                    signal: t,
                });
                a.h.dispatch({
                    type: "USER_APPLICATION_IDENTITY_FETCH_USER_SUCCESS",
                    userId: e,
                    identities: n.body.identities,
                });
            } catch (t) {
                throw (a.h.dispatch({ type: "USER_APPLICATION_IDENTITY_FETCH_USER_FAILURE", userId: e }), t);
            }
        },
        async updateApplicationIdentityConfig(e, t, n) {
            await r.Bo.patch({ url: l.Rsh.SELF_APPLICATION_IDENTITY_CONFIG(e, t), body: n, rejectWithError: !0 });
        },
    },
    d = o,
    c = (0, i.UT)(s.A, {
        getQueryId: l.fic.USER_APPLICATION_IDENTITIES,
        get: (e) => s.A.getUserIdentities(e),
        load: (e) => o.fetchUserApplicationIdentitiesWithProfiles(e),
    });
