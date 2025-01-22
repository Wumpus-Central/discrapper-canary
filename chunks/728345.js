r.d(n, {
    IX: function () {
        return v;
    },
    Rt: function () {
        return y;
    },
    UM: function () {
        return E;
    }
});
var i = r(789020);
var a = r(610138);
var o = r(216116);
var s = r(78328);
var l = r(815648);
var u = r(47120);
var c = r(442837),
    d = r(544891),
    f = r(570140),
    p = r(264043),
    h = r(973616),
    _ = r(630388),
    m = r(812206),
    g = r(981631);
async function E(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = arguments.length > 2 ? arguments[2] : void 0;
    f.Z.dispatch({
        type: 'APPLICATION_FETCH',
        applicationId: e
    });
    try {
        let i = await d.tn.get({
            url: g.ANM.APPLICATION_PUBLIC(e),
            query: { with_guild: n },
            oldFormErrors: !0,
            signal: r,
            rejectWithError: !1
        });
        return (
            f.Z.dispatch({
                type: 'APPLICATION_FETCH_SUCCESS',
                application: i.body
            }),
            i.body
        );
    } catch (n) {
        throw (
            (f.Z.dispatch({
                type: 'APPLICATION_FETCH_FAIL',
                applicationId: e
            }),
            n)
        );
    }
}
n.ZP = {
    async createApplication(e) {
        let { name: n, guildId: r, type: i, teamId: a } = e,
            o = (
                await d.tn.post({
                    url: g.ANM.APPLICATIONS,
                    body: {
                        name: n,
                        type: i,
                        guild_id: r,
                        team_id: a
                    },
                    rejectWithError: !1
                })
            ).body;
        return (
            null != r &&
                null != i &&
                f.Z.dispatch({
                    type: 'APPLICATION_FETCH_SUCCESS',
                    application: o
                }),
            o
        );
    },
    async getApplicationsForGuild(e) {
        let { includeTeam: n, ...r } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            i = (
                await d.tn.get({
                    url: g.ANM.GUILD_APPLICATIONS(e),
                    query: {
                        ...r,
                        include_team: n
                    },
                    rejectWithError: !1
                })
            ).body;
        return (
            f.Z.dispatch({
                type: 'APPLICATIONS_FETCH_SUCCESS',
                applications: i
            }),
            i
        );
    },
    async transferApplication(e) {
        let { applicationId: n, teamId: r } = e,
            i = (
                await d.tn.post({
                    url: g.ANM.APPLICATION_OWNER_TRANSFER(n),
                    body: { team_id: r },
                    rejectWithError: !1
                })
            ).body;
        return (
            f.Z.dispatch({
                type: 'APPLICATION_FETCH_SUCCESS',
                application: i
            }),
            i
        );
    },
    async fetchApplications(e) {
        let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            r = e;
        if (!n) {
            let n = (e) => {
                var n, r;
                let i = m.Z.getApplication(e),
                    a = (0, _.yE)(null !== (r = null == i ? void 0 : i.flags) && void 0 !== r ? r : 0, g.udG.EMBEDDED) && ((null == i ? void 0 : null === (n = i.embeddedActivityConfig) || void 0 === n ? void 0 : n.supported_platforms) == null || (null == i ? void 0 : i.bot) == null);
                return !(null != i && !a) && !m.Z.isFetchingApplication(e) && !m.Z.didFetchingApplicationFail(e) && e.length > 0;
            };
            r = e.filter(n);
        }
        if (r.length > 0) {
            let e;
            f.Z.dispatch({
                type: 'APPLICATIONS_FETCH',
                applicationIds: r
            });
            try {
                e = await d.tn.get({
                    url: g.ANM.APPLICATIONS_PUBLIC,
                    query: new URLSearchParams(r.map((e) => ['application_ids', e])).toString(),
                    oldFormErrors: !0,
                    rejectWithError: !1
                });
            } catch (e) {
                throw (
                    (429 !== e.status &&
                        f.Z.dispatch({
                            type: 'APPLICATIONS_FETCH_FAIL',
                            applicationIds: r
                        }),
                    e)
                );
            }
            f.Z.dispatch({
                type: 'APPLICATIONS_FETCH_SUCCESS',
                applications: e.body
            });
        }
    },
    fetchApplication: E
};
let v = (0, c.Kb)(m.Z, {
    queryId: (e) => (null != e ? ['applications', e] : null),
    get: (e) => (null != e ? m.Z.getApplication(e) : null),
    load: (e, n) => (null != n ? E(n, !1, e).then(g.dG4) : Promise.resolve()),
    useStateHook: c.e7
});
function y(e) {
    let { data: n, isLoading: r, error: i } = v(e);
    return {
        app: (0, c.e7)(
            [p.Z],
            () => {
                if (null == n) {
                    let n = p.Z.getApplication(e);
                    if (null != n) return h.ZP.createFromServer(n);
                }
                return n;
            },
            [e, n]
        ),
        isLoading: r,
        error: i
    };
}
