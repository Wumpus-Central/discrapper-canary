"use strict";
n.d(t, { Ay: () => _, NP: () => p, TA: () => d, YY: () => f }), n(323874), n(14289), n(35956);
var r = n(311907),
    i = n(562465),
    s = n(73153),
    a = n(212534),
    o = n(611010),
    l = n(587895),
    u = n(20015),
    c = n(652215);
async function d(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 ? arguments[2] : void 0;
    s.h.dispatch({ type: "APPLICATION_FETCH", applicationId: e });
    try {
        let r = await i.Bo.get({
            url: c.Rsh.APPLICATION_PUBLIC(e),
            query: { with_guild: t },
            oldFormErrors: !0,
            signal: n,
            rejectWithError: !1,
        });
        return s.h.dispatch({ type: "APPLICATION_FETCH_SUCCESS", application: r.body }), r.body;
    } catch (t) {
        throw (s.h.dispatch({ type: "APPLICATION_FETCH_FAIL", applicationId: e }), t);
    }
}
let _ = {
        async createApplication(e) {
            let { name: t, guildId: n, type: r, teamId: a } = e,
                o = (
                    await i.Bo.post({
                        url: c.Rsh.APPLICATIONS,
                        body: { name: t, type: r, guild_id: n, team_id: a },
                        rejectWithError: !1,
                    })
                ).body;
            return null != n && null != r && s.h.dispatch({ type: "APPLICATION_FETCH_SUCCESS", application: o }), o;
        },
        async getApplicationsForGuild(e) {
            let { includeTeam: t, ...n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                r = (
                    await i.Bo.get({
                        url: c.Rsh.GUILD_APPLICATIONS(e),
                        query: { ...n, include_team: t },
                        rejectWithError: !1,
                    })
                ).body;
            return s.h.dispatch({ type: "APPLICATIONS_FETCH_SUCCESS", applications: r }), r;
        },
        async transferApplication(e) {
            let { applicationId: t, teamId: n } = e,
                r = (
                    await i.Bo.post({
                        url: c.Rsh.APPLICATION_OWNER_TRANSFER(t),
                        body: { team_id: n },
                        rejectWithError: !1,
                    })
                ).body;
            return s.h.dispatch({ type: "APPLICATION_FETCH_SUCCESS", application: r }), r;
        },
        async fetchApplications(e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                n = e;
            if (
                (t ||
                    (n = e.filter((e) => {
                        let t = l.A.getApplication(e),
                            n =
                                (0, u.n)(t, c.gfo.EMBEDDED) &&
                                (t?.embeddedActivityConfig?.supported_platforms == null || t?.bot == null);
                        return (
                            !(null != t && !n) &&
                            !l.A.isFetchingApplication(e) &&
                            !l.A.didFetchingApplicationFail(e) &&
                            e.length > 0
                        );
                    })),
                n.length > 0)
            ) {
                let e;
                s.h.dispatch({ type: "APPLICATIONS_FETCH", applicationIds: n });
                try {
                    e = await i.Bo.get({
                        url: c.Rsh.APPLICATIONS_PUBLIC,
                        query: new URLSearchParams(n.map((e) => ["application_ids", e])).toString(),
                        oldFormErrors: !0,
                        rejectWithError: !1,
                    });
                } catch (e) {
                    throw (429 !== e.status && s.h.dispatch({ type: "APPLICATIONS_FETCH_FAIL", applicationIds: n }), e);
                }
                let t = new Set(e.body.map((e) => e.id)),
                    r = n.filter((e) => !t.has(e));
                s.h.dispatch({ type: "APPLICATIONS_FETCH_SUCCESS", applications: e.body, unknownApplicationIds: r });
            }
        },
        fetchApplication: d,
    },
    f = (0, r.UT)(l.A, {
        getQueryId: c.fic.APPLICATIONS,
        get: (e) => (null != e ? (l.A.getApplication(e) ?? null) : null),
        load: (e) => (null != e ? d(e, !1).then(c.tEg) : Promise.resolve()),
        getIsLoading: (e) => null != e && l.A.isFetchingApplication(e),
    });
function p(e) {
    let { data: t, isLoading: n, error: i } = f(e);
    return {
        app: (0, r.bG)([a.A], () => {
            if (null == t) {
                let t = a.A.getApplication(e);
                if (null != t) return o.Ay.createFromServer(t);
            }
            return t;
        }, [e, t]),
        isLoading: n,
        error: i ?? void 0,
    };
}
