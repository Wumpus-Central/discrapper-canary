"use strict";
n.d(t, { b: () => f });
var i = n(64700),
    r = n(17928),
    s = n(228366);
let a = { fetched: !1, fetching: !1, affinities: [] };
class o extends r.Ay.Store {
    get hasFetched() {
        return a.fetched;
    }
    get isFetching() {
        return a.fetching;
    }
    get affinities() {
        return a.affinities;
    }
}
let l = new o(s.h, {
    BILLING_PREMIUM_AFFINITY_FETCH_START: function (e) {
        let {} = e;
        a.fetching = !0;
    },
    BILLING_PREMIUM_AFFINITY_FETCHED: function (e) {
        let {} = e;
        (a.fetched = !0), (a.fetching = !1);
    },
    BILLING_PREMIUM_AFFINITY_FETCH_SUCCEEDED: function (e) {
        let { res: t } = e;
        a.affinities = t;
    },
    LOGOUT: function () {
        (a.fetched = !1), (a.fetching = !1), (a.affinities = []);
    },
});
var u = n(636537),
    c = n(889227),
    d = n(652215);
async function _() {
    s.h.dispatch({ type: "BILLING_PREMIUM_AFFINITY_FETCH_START" });
    try {
        let e = await u.Bo.get({ url: d.Rsh.BILLING_NITRO_AFFINITY, rejectWithError: !0 });
        s.h.dispatch({ type: "BILLING_PREMIUM_AFFINITY_FETCH_SUCCEEDED", res: e.body.map((e) => new c.A(e)) });
    } finally {
        s.h.dispatch({ type: "BILLING_PREMIUM_AFFINITY_FETCHED" });
    }
}
function f() {
    let {
        affinities: e,
        hasFetched: t,
        isFetching: n,
    } = (0, r.cf)([l], () => ({ affinities: l.affinities, hasFetched: l.hasFetched, isFetching: l.isFetching }));
    return (
        i.useEffect(() => {
            t || n || _();
        }, [t, n]),
        e
    );
}
