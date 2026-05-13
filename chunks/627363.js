"use strict";
n.d(t, { Ay: () => d, NP: () => f, TA: () => c, YY: () => _ }), n(323874), n(14289), n(35956);
var i = n(17928),
    r = n(636537),
    s = n(228366),
    a = n(212534),
    o = n(395671),
    l = n(587895),
    u = n(652215);
async function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 ? arguments[2] : void 0;
    s.h.dispatch({ type: "APPLICATION_FETCH", applicationId: e });
    try {
        let i = await r.Bo.get({
            url: u.Rsh.APPLICATION_PUBLIC(e),
            query: { with_guild: t },
            oldFormErrors: !0,
            signal: n,
            rejectWithError: !1,
        });
        return s.h.dispatch({ type: "APPLICATION_FETCH_SUCCESS", application: i.body, isHydrated: !0 }), i.body;
    } catch (t) {
        throw (s.h.dispatch({ type: "APPLICATION_FETCH_FAIL", applicationId: e }), t);
    }
}
let d = {
        async createApplication(e) {
            let { name: t, guildId: n, type: i, teamId: a } = e,
                o = (
                    await r.Bo.post({
                        url: u.Rsh.APPLICATIONS,
                        body: { name: t, type: i, guild_id: n, team_id: a },
                        rejectWithError: !1,
                    })
                ).body;
            return null != n && null != i && s.h.dispatch({ type: "APPLICATION_FETCH_SUCCESS", application: o }), o;
        },
        async getApplicationsForGuild(e) {
            let { includeTeam: t, ...n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                i = (
                    await r.Bo.get({
                        url: u.Rsh.GUILD_APPLICATIONS(e),
                        query: { ...n, include_team: t },
                        rejectWithError: !1,
                    })
                ).body;
            return s.h.dispatch({ type: "APPLICATIONS_FETCH_SUCCESS", applications: i }), i;
        },
        async transferApplication(e) {
            let { applicationId: t, teamId: n } = e,
                i = (
                    await r.Bo.post({
                        url: u.Rsh.APPLICATION_OWNER_TRANSFER(t),
                        body: { team_id: n },
                        rejectWithError: !1,
                    })
                ).body;
            return s.h.dispatch({ type: "APPLICATION_FETCH_SUCCESS", application: i }), i;
        },
        async fetchApplications(e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                n = e;
            if (
                (t ||
                    (n = e.filter(
                        (e) =>
                            !(null != l.A.getApplication(e) && l.A.isHydrated(e)) &&
                            !l.A.isFetchingApplication(e) &&
                            !l.A.didFetchingApplicationFail(e) &&
                            e.length > 0,
                    )),
                n.length > 0)
            ) {
                let e;
                s.h.dispatch({ type: "APPLICATIONS_FETCH", applicationIds: n });
                try {
                    e = await r.Bo.get({
                        url: u.Rsh.APPLICATIONS_PUBLIC,
                        query: new URLSearchParams(n.map((e) => ["application_ids", e])).toString(),
                        oldFormErrors: !0,
                        rejectWithError: !1,
                    });
                } catch (e) {
                    throw (429 !== e.status && s.h.dispatch({ type: "APPLICATIONS_FETCH_FAIL", applicationIds: n }), e);
                }
                let t = new Set(e.body.map((e) => e.id)),
                    i = n.filter((e) => !t.has(e));
                s.h.dispatch({
                    type: "APPLICATIONS_FETCH_SUCCESS",
                    applications: e.body,
                    unknownApplicationIds: i,
                    isHydrated: !0,
                });
            }
        },
        fetchApplication: c,
    },
    _ = (0, i.UT)(l.A, {
        getQueryId: u.fic.APPLICATIONS,
        get: (e) => (null != e && l.A.isHydrated(e) ? (l.A.getApplication(e) ?? null) : null),
        load: (e) => (null != e ? c(e, !1).then(u.tEg) : Promise.resolve()),
        getIsLoading: (e) => null != e && l.A.isFetchingApplication(e),
    });
function f(e) {
    let { data: t, isLoading: n, error: r } = _(e);
    return {
        app: (0, i.bG)([a.A], () => {
            if (null == t) {
                let t = a.A.getApplication(e);
                if (null != t) return o.Ay.createFromServer(t);
            }
            return t;
        }, [e, t]),
        isLoading: n,
        error: r ?? void 0,
    };
}
