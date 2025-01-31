n.d(t, {
    IX: () => _,
    Rt: () => p,
    UM: () => d,
    ZP: () => f
}),
    n(789020),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120);
var i = n(442837),
    r = n(544891),
    a = n(570140),
    s = n(264043),
    o = n(973616),
    l = n(630388),
    u = n(812206),
    c = n(981631);
async function d(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 ? arguments[2] : void 0;
    a.Z.dispatch({
        type: 'APPLICATION_FETCH',
        applicationId: e
    });
    try {
        let i = await r.tn.get({
            url: c.ANM.APPLICATION_PUBLIC(e),
            query: { with_guild: t },
            oldFormErrors: !0,
            signal: n,
            rejectWithError: !1
        });
        return (
            a.Z.dispatch({
                type: 'APPLICATION_FETCH_SUCCESS',
                application: i.body
            }),
            i.body
        );
    } catch (t) {
        throw (
            (a.Z.dispatch({
                type: 'APPLICATION_FETCH_FAIL',
                applicationId: e
            }),
            t)
        );
    }
}
let f = {
        async createApplication(e) {
            let { name: t, guildId: n, type: i, teamId: s } = e,
                o = (
                    await r.tn.post({
                        url: c.ANM.APPLICATIONS,
                        body: {
                            name: t,
                            type: i,
                            guild_id: n,
                            team_id: s
                        },
                        rejectWithError: !1
                    })
                ).body;
            return (
                null != n &&
                    null != i &&
                    a.Z.dispatch({
                        type: 'APPLICATION_FETCH_SUCCESS',
                        application: o
                    }),
                o
            );
        },
        async getApplicationsForGuild(e) {
            let { includeTeam: t, ...n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                i = (
                    await r.tn.get({
                        url: c.ANM.GUILD_APPLICATIONS(e),
                        query: {
                            ...n,
                            include_team: t
                        },
                        rejectWithError: !1
                    })
                ).body;
            return (
                a.Z.dispatch({
                    type: 'APPLICATIONS_FETCH_SUCCESS',
                    applications: i
                }),
                i
            );
        },
        async transferApplication(e) {
            let { applicationId: t, teamId: n } = e,
                i = (
                    await r.tn.post({
                        url: c.ANM.APPLICATION_OWNER_TRANSFER(t),
                        body: { team_id: n },
                        rejectWithError: !1
                    })
                ).body;
            return (
                a.Z.dispatch({
                    type: 'APPLICATION_FETCH_SUCCESS',
                    application: i
                }),
                i
            );
        },
        async fetchApplications(e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                n = e;
            if (!t) {
                let t = (e) => {
                    var t, n;
                    let i = u.Z.getApplication(e),
                        r = (0, l.yE)(null !== (n = null == i ? void 0 : i.flags) && void 0 !== n ? n : 0, c.udG.EMBEDDED) && ((null == i ? void 0 : null === (t = i.embeddedActivityConfig) || void 0 === t ? void 0 : t.supported_platforms) == null || (null == i ? void 0 : i.bot) == null);
                    return !(null != i && !r) && !u.Z.isFetchingApplication(e) && !u.Z.didFetchingApplicationFail(e) && e.length > 0;
                };
                n = e.filter(t);
            }
            if (n.length > 0) {
                let e;
                a.Z.dispatch({
                    type: 'APPLICATIONS_FETCH',
                    applicationIds: n
                });
                try {
                    e = await r.tn.get({
                        url: c.ANM.APPLICATIONS_PUBLIC,
                        query: new URLSearchParams(n.map((e) => ['application_ids', e])).toString(),
                        oldFormErrors: !0,
                        rejectWithError: !1
                    });
                } catch (e) {
                    throw (
                        (429 !== e.status &&
                            a.Z.dispatch({
                                type: 'APPLICATIONS_FETCH_FAIL',
                                applicationIds: n
                            }),
                        e)
                    );
                }
                a.Z.dispatch({
                    type: 'APPLICATIONS_FETCH_SUCCESS',
                    applications: e.body
                });
            }
        },
        fetchApplication: d
    },
    _ = (0, i.Kb)(u.Z, {
        queryId: (e) => (null != e ? ['applications', e] : null),
        get: (e) => (null != e ? u.Z.getApplication(e) : null),
        load: (e, t) => (null != t ? d(t, !1, e).then(c.dG4) : Promise.resolve()),
        useStateHook: i.e7
    });
function p(e) {
    let { data: t, isLoading: n, error: r } = _(e);
    return {
        app: (0, i.e7)(
            [s.Z],
            () => {
                if (null == t) {
                    let t = s.Z.getApplication(e);
                    if (null != t) return o.ZP.createFromServer(t);
                }
                return t;
            },
            [e, t]
        ),
        isLoading: n,
        error: r
    };
}
