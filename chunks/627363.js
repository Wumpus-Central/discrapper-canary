n.d(t, {
    Ay: () => E,
    NP: () => y,
    TA: () => g,
    YY: () => b,
}),
    n(896048),
    n(938796),
    n(680155),
    n(323874),
    n(14289),
    n(35956);
var r = n(665260),
    i = n(311907),
    a = n(562465),
    s = n(73153),
    o = n(212534),
    l = n(611010),
    c = n(587895),
    u = n(652215);

function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
            });
    }
    return e;
}

function p(e, t) {
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

function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = m(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
async function g(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 ? arguments[2] : void 0;
    s.h.dispatch({
        type: "APPLICATION_FETCH",
        applicationId: e,
    });
    try {
        let r = await a.Bo.get({
            url: u.Rsh.APPLICATION_PUBLIC(e),
            query: {
                with_guild: t,
            },
            oldFormErrors: !0,
            signal: n,
            rejectWithError: !1,
        });
        return (
            s.h.dispatch({
                type: "APPLICATION_FETCH_SUCCESS",
                application: r.body,
            }),
            r.body
        );
    } catch (t) {
        throw (
            (s.h.dispatch({
                type: "APPLICATION_FETCH_FAIL",
                applicationId: e,
            }),
            t)
        );
    }
}
let E = {
        async createApplication(e) {
            let { name: t, guildId: n, type: r, teamId: i } = e,
                o = (
                    await a.Bo.post({
                        url: u.Rsh.APPLICATIONS,
                        body: {
                            name: t,
                            type: r,
                            guild_id: n,
                            team_id: i,
                        },
                        rejectWithError: !1,
                    })
                ).body;
            return (
                null != n &&
                    null != r &&
                    s.h.dispatch({
                        type: "APPLICATION_FETCH_SUCCESS",
                        application: o,
                    }),
                o
            );
        },
        async getApplicationsForGuild(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                [n = {}] = [t],
                { includeTeam: r } = n,
                i = h(n, ["includeTeam"]),
                o = (
                    await a.Bo.get({
                        url: u.Rsh.GUILD_APPLICATIONS(e),
                        query: _(f({}, i), {
                            include_team: r,
                        }),
                        rejectWithError: !1,
                    })
                ).body;
            return (
                s.h.dispatch({
                    type: "APPLICATIONS_FETCH_SUCCESS",
                    applications: o,
                }),
                o
            );
        },
        async transferApplication(e) {
            let { applicationId: t, teamId: n } = e,
                r = (
                    await a.Bo.post({
                        url: u.Rsh.APPLICATION_OWNER_TRANSFER(t),
                        body: {
                            team_id: n,
                        },
                        rejectWithError: !1,
                    })
                ).body;
            return (
                s.h.dispatch({
                    type: "APPLICATION_FETCH_SUCCESS",
                    application: r,
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
                    let i = c.A.getApplication(e),
                        a =
                            (0, r.Lt)(null != (t = null == i ? void 0 : i.flags) ? t : 0, u.gfo.EMBEDDED) &&
                            ((null == i || null == (n = i.embeddedActivityConfig) ? void 0 : n.supported_platforms) ==
                                null ||
                                (null == i ? void 0 : i.bot) == null);
                    return (
                        !(null != i && !a) &&
                        !c.A.isFetchingApplication(e) &&
                        !c.A.didFetchingApplicationFail(e) &&
                        e.length > 0
                    );
                };
                n = e.filter(t);
            }
            if (n.length > 0) {
                let e;
                s.h.dispatch({
                    type: "APPLICATIONS_FETCH",
                    applicationIds: n,
                });
                try {
                    e = await a.Bo.get({
                        url: u.Rsh.APPLICATIONS_PUBLIC,
                        query: new URLSearchParams(n.map((e) => ["application_ids", e])).toString(),
                        oldFormErrors: !0,
                        rejectWithError: !1,
                    });
                } catch (e) {
                    throw (
                        (429 !== e.status &&
                            s.h.dispatch({
                                type: "APPLICATIONS_FETCH_FAIL",
                                applicationIds: n,
                            }),
                        e)
                    );
                }
                let t = new Set(e.body.map((e) => e.id)),
                    r = n.filter((e) => !t.has(e));
                s.h.dispatch({
                    type: "APPLICATIONS_FETCH_SUCCESS",
                    applications: e.body,
                    unknownApplicationIds: r,
                });
            }
        },
        fetchApplication: g,
    },
    b = (0, i.UT)(c.A, {
        getQueryId: u.fic.APPLICATIONS,
        get: (e) => {
            var t;
            return null != e && null != (t = c.A.getApplication(e)) ? t : null;
        },
        load: (e) => (null != e ? g(e, !1).then(u.tEg) : Promise.resolve()),
        getIsLoading: (e) => null != e && c.A.isFetchingApplication(e),
    });

function y(e) {
    let { data: t, isLoading: n, error: r } = b(e);
    return {
        app: (0, i.bG)([o.A], () => {
            if (null == t) {
                let t = o.A.getApplication(e);
                if (null != t) return l.Ay.createFromServer(t);
            }
            return t;
        }, [e, t]),
        isLoading: n,
        error: null != r ? r : void 0,
    };
}
