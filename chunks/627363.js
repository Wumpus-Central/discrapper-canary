"use strict";
n.d(t, { Ay: () => u, NP: () => E, TA: () => c, YY: () => _ }), n(323874), n(14289), n(35956);
var i = n(17928),
    r = n(636537),
    a = n(228366),
    s = n(212534),
    l = n(395671),
    o = n(587895),
    d = n(652215);
async function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 ? arguments[2] : void 0;
    a.h.dispatch({ type: "APPLICATION_FETCH", applicationId: e });
    try {
        let i = await r.Bo.get({
            url: d.Rsh.APPLICATION_PUBLIC(e),
            query: { with_guild: t },
            oldFormErrors: !0,
            signal: n,
            rejectWithError: (0, r.fT)(),
        });
        return a.h.dispatch({ type: "APPLICATION_FETCH_SUCCESS", application: i.body, isHydrated: !0 }), i.body;
    } catch (t) {
        throw (a.h.dispatch({ type: "APPLICATION_FETCH_FAIL", applicationId: e }), t);
    }
}
let u = {
        async createApplication(e) {
            let { name: t, guildId: n, type: i, teamId: s } = e,
                l = (
                    await r.Bo.post({
                        url: d.Rsh.APPLICATIONS,
                        body: { name: t, type: i, guild_id: n, team_id: s },
                        rejectWithError: (0, r.fT)(),
                    })
                ).body;
            return null != n && null != i && a.h.dispatch({ type: "APPLICATION_FETCH_SUCCESS", application: l }), l;
        },
        async getApplicationsForGuild(e) {
            let { includeTeam: t, ...n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                i = (
                    await r.Bo.get({
                        url: d.Rsh.GUILD_APPLICATIONS(e),
                        query: { ...n, include_team: t },
                        rejectWithError: (0, r.fT)(),
                    })
                ).body;
            return a.h.dispatch({ type: "APPLICATIONS_FETCH_SUCCESS", applications: i }), i;
        },
        async getEmbeddedApplicationsForGuild(e, t, n) {
            let { items: i } = (
                await r.Bo.get({
                    url: d.Rsh.GUILD_EMBEDDED_APPLICATIONS(e),
                    query: { channel_id: n, surface: t },
                    rejectWithError: (0, r.fT)(),
                })
            ).body;
            return (
                a.h.dispatch({ type: "GUILD_EMBEDDED_APPLICATIONS_FETCH_SUCCESS", guildId: e, surface: t, items: i }), i
            );
        },
        async transferApplication(e) {
            let { applicationId: t, teamId: n } = e,
                i = (
                    await r.Bo.post({
                        url: d.Rsh.APPLICATION_OWNER_TRANSFER(t),
                        body: { team_id: n },
                        rejectWithError: (0, r.fT)(),
                    })
                ).body;
            return a.h.dispatch({ type: "APPLICATION_FETCH_SUCCESS", application: i }), i;
        },
        async fetchApplications(e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                n = e;
            if (
                (t ||
                    (n = e.filter(function (e) {
                        return (
                            !(null != o.A.getApplication(e) && o.A.isHydrated(e)) &&
                            !o.A.isFetchingApplication(e) &&
                            !o.A.didFetchingApplicationFail(e) &&
                            e.length > 0
                        );
                    })),
                n.length > 0)
            ) {
                let e;
                a.h.dispatch({ type: "APPLICATIONS_FETCH", applicationIds: n });
                try {
                    e = await r.Bo.get({
                        url: d.Rsh.APPLICATIONS_PUBLIC,
                        query: new URLSearchParams(n.map((e) => ["application_ids", e])).toString(),
                        oldFormErrors: !0,
                        rejectWithError: (0, r.fT)(),
                    });
                } catch (e) {
                    throw (429 !== e.status && a.h.dispatch({ type: "APPLICATIONS_FETCH_FAIL", applicationIds: n }), e);
                }
                let t = new Set(e.body.map((e) => e.id)),
                    i = n.filter((e) => !t.has(e));
                a.h.dispatch({
                    type: "APPLICATIONS_FETCH_SUCCESS",
                    applications: e.body,
                    unknownApplicationIds: i,
                    isHydrated: !0,
                });
            }
        },
        fetchApplication: c,
    },
    _ = (0, i.UT)(o.A, {
        getQueryId: d.fic.APPLICATIONS,
        get: function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return null != e && (t || o.A.isHydrated(e)) ? (o.A.getApplication(e) ?? null) : null;
        },
        load: (e) => (null != e ? c(e, !1).then(d.tEg) : Promise.resolve()),
        getIsLoading: (e) => null != e && o.A.isFetchingApplication(e),
    });
function E(e) {
    let { data: t, isLoading: n, error: r } = _(e);
    return {
        app: (0, i.bG)([s.A], () => {
            if (null == t) {
                let t = s.A.getApplication(e);
                if (null != t) return l.Ay.createFromServer(t);
            }
            return t;
        }, [e, t]),
        isLoading: n,
        error: r ?? void 0,
    };
}
