n.d(t, {
    M: () => c,
    Z: () => E
});
var i,
    r = n(31775),
    a = n.n(r),
    s = n(442837),
    o = n(570140);
function l(e, t, n) {
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
let u = 20;
var c = (function (e) {
    return (e[(e.NOT_FETCHED = 0)] = 'NOT_FETCHED'), (e[(e.FETCHING = 1)] = 'FETCHING'), (e[(e.FETCHED = 2)] = 'FETCHED'), (e[(e.ERROR = 3)] = 'ERROR'), e;
})({});
function d(e) {
    let { applicationId: t, guildId: n, page: i } = e;
    return 'applicationId:'.concat(t, ' guildId:').concat(n, ' page:').concat(i);
}
let f = new (a())({ max: u }),
    _ = {};
function p(e) {
    let { applicationId: t, guildId: n, page: i } = e,
        r = d({
            applicationId: t,
            guildId: n,
            page: i
        });
    _ = {
        ..._,
        [r]: 1
    };
}
function h(e) {
    let { applicationId: t, guildId: n, similarApplications: i, loadId: r, page: a, totalPages: s } = e,
        o = d({
            applicationId: t,
            guildId: n,
            page: a
        });
    f.set(o, {
        lastFetchTimeMs: Date.now(),
        applications: i,
        loadId: r,
        page: a,
        totalPages: s
    }),
        (_ = {
            ..._,
            [o]: 2
        });
}
function m(e) {
    let { applicationId: t, guildId: n, page: i } = e,
        r = d({
            applicationId: t,
            guildId: n,
            page: i
        });
    _ = {
        ..._,
        [r]: 3
    };
}
class g extends (i = s.ZP.Store) {
    getSimilarApplications(e) {
        let { applicationId: t, guildId: n, page: i } = e;
        if (null == t) return;
        let r = d({
            applicationId: t,
            guildId: n,
            page: i
        });
        return f.get(r);
    }
    getFetchState(e) {
        let { applicationId: t, guildId: n, page: i } = e;
        if (null != t)
            return _[
                d({
                    applicationId: t,
                    guildId: n,
                    page: i
                })
            ];
    }
}
l(g, 'displayName', 'ApplicationDirectorySimilarApplicationsStore');
let E = new g(o.Z, {
    APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS: p,
    APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_SUCCESS: h,
    APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_FAILURE: m
});
