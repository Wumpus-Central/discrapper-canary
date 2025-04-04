n.d(t, {
    M: () => _,
    Z: () => v
});
var r,
    i = n(31775),
    o = n.n(i),
    a = n(442837),
    s = n(570140);
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
function c(e) {
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
                l(e, t, n[t]);
            });
    }
    return e;
}
function u(e, t) {
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
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let f = 20;
var _ = (function (e) {
    return (e[(e.NOT_FETCHED = 0)] = 'NOT_FETCHED'), (e[(e.FETCHING = 1)] = 'FETCHING'), (e[(e.FETCHED = 2)] = 'FETCHED'), (e[(e.ERROR = 3)] = 'ERROR'), e;
})({});
function p(e) {
    let { applicationId: t, guildId: n, page: r } = e;
    return 'applicationId:'.concat(t, ' guildId:').concat(n, ' page:').concat(r);
}
let h = new (o())({ max: f }),
    m = {};
function g(e) {
    let { applicationId: t, guildId: n, page: r } = e,
        i = p({
            applicationId: t,
            guildId: n,
            page: r
        });
    m = d(c({}, m), { [i]: 1 });
}
function E(e) {
    let { applicationId: t, guildId: n, similarApplications: r, loadId: i, page: o, totalPages: a } = e,
        s = p({
            applicationId: t,
            guildId: n,
            page: o
        });
    h.set(s, {
        lastFetchTimeMs: Date.now(),
        applications: r,
        loadId: i,
        page: o,
        totalPages: a
    }),
        (m = d(c({}, m), { [s]: 2 }));
}
function b(e) {
    let { applicationId: t, guildId: n, page: r } = e,
        i = p({
            applicationId: t,
            guildId: n,
            page: r
        });
    m = d(c({}, m), { [i]: 3 });
}
class y extends (r = a.ZP.Store) {
    getSimilarApplications(e) {
        let { applicationId: t, guildId: n, page: r } = e;
        if (null == t) return;
        let i = p({
            applicationId: t,
            guildId: n,
            page: r
        });
        return h.get(i);
    }
    getFetchState(e) {
        let { applicationId: t, guildId: n, page: r } = e;
        if (null != t)
            return m[
                p({
                    applicationId: t,
                    guildId: n,
                    page: r
                })
            ];
    }
}
l(y, 'displayName', 'ApplicationDirectorySimilarApplicationsStore');
let v = new y(s.Z, {
    APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS: g,
    APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_SUCCESS: E,
    APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_FAILURE: b
});
