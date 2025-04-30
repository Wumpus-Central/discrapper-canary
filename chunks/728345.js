n.d(t, {
    IX: () => b,
    Rt: () => y,
    UM: () => g,
    ZP: () => E
}),
    n(997841),
    n(65234),
    n(111804),
    n(490233),
    n(97749),
    n(388685);
var r = n(442837),
    i = n(544891),
    a = n(570140),
    o = n(370210),
    s = n(973616),
    l = n(630388),
    c = n(812206),
    u = n(981631);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
            });
    }
    return e;
}
function _(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = m(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
async function g(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 ? arguments[2] : void 0;
    a.Z.dispatch({
        type: 'APPLICATION_FETCH',
        applicationId: e
    });
    try {
        let r = await i.tn.get({
            url: u.ANM.APPLICATION_PUBLIC(e),
            query: { with_guild: t },
            oldFormErrors: !0,
            signal: n,
            rejectWithError: !1
        });
        return (
            a.Z.dispatch({
                type: 'APPLICATION_FETCH_SUCCESS',
                application: r.body
            }),
            r.body
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
let E = {
        async createApplication(e) {
            let { name: t, guildId: n, type: r, teamId: o } = e,
                s = (
                    await i.tn.post({
                        url: u.ANM.APPLICATIONS,
                        body: {
                            name: t,
                            type: r,
                            guild_id: n,
                            team_id: o
                        },
                        rejectWithError: !1
                    })
                ).body;
            return (
                null != n &&
                    null != r &&
                    a.Z.dispatch({
                        type: 'APPLICATION_FETCH_SUCCESS',
                        application: s
                    }),
                s
            );
        },
        async getApplicationsForGuild(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            var { includeTeam: n } = t,
                r = h(t, ['includeTeam']);
            let o = (
                await i.tn.get({
                    url: u.ANM.GUILD_APPLICATIONS(e),
                    query: p(f({}, r), { include_team: n }),
                    rejectWithError: !1
                })
            ).body;
            return (
                a.Z.dispatch({
                    type: 'APPLICATIONS_FETCH_SUCCESS',
                    applications: o
                }),
                o
            );
        },
        async transferApplication(e) {
            let { applicationId: t, teamId: n } = e,
                r = (
                    await i.tn.post({
                        url: u.ANM.APPLICATION_OWNER_TRANSFER(t),
                        body: { team_id: n },
                        rejectWithError: !1
                    })
                ).body;
            return (
                a.Z.dispatch({
                    type: 'APPLICATION_FETCH_SUCCESS',
                    application: r
                }),
                r
            );
        },
        async fetchApplications(e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                n = e;
            if (!t) {
                let t = (e) => {
                    var t, n;
                    let r = c.Z.getApplication(e),
                        i = (0, l.yE)(null != (n = null == r ? void 0 : r.flags) ? n : 0, u.udG.EMBEDDED) && ((null == r || null == (t = r.embeddedActivityConfig) ? void 0 : t.supported_platforms) == null || (null == r ? void 0 : r.bot) == null);
                    return !(null != r && !i) && !c.Z.isFetchingApplication(e) && !c.Z.didFetchingApplicationFail(e) && e.length > 0;
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
                    e = await i.tn.get({
                        url: u.ANM.APPLICATIONS_PUBLIC,
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
                let t = new Set(e.body.map((e) => e.id)),
                    r = n.filter((e) => !t.has(e));
                a.Z.dispatch({
                    type: 'APPLICATIONS_FETCH_SUCCESS',
                    applications: e.body,
                    unknownApplicationIds: r
                });
            }
        },
        fetchApplication: g
    },
    b = (0, r.Kb)(c.Z, {
        queryId: (e) => u.McO.APPLICATIONS(e),
        get: (e) => (null != e ? c.Z.getApplication(e) : null),
        load: (e, t) => (null != t ? g(t, !1, e).then(u.dG4) : Promise.resolve()),
        useStateHook: r.e7
    });
function y(e) {
    let { data: t, isLoading: n, error: i } = b(e);
    return {
        app: (0, r.e7)(
            [o.Z],
            () => {
                if (null == t) {
                    let t = o.Z.getApplication(e);
                    if (null != t) return s.ZP.createFromServer(t);
                }
                return t;
            },
            [e, t]
        ),
        isLoading: n,
        error: i
    };
}
