"use strict";
n.d(t, { b: () => E });
var i = n(582128),
    r = n(17928),
    a = n(228366);
let s = { fetched: !1, fetching: !1, affinities: [] };
class l extends r.Ay.Store {
    get hasFetched() {
        return s.fetched;
    }
    get isFetching() {
        return s.fetching;
    }
    get affinities() {
        return s.affinities;
    }
}
let o = new l(a.h, {
    BILLING_PREMIUM_AFFINITY_FETCH_START: function (e) {
        let {} = e;
        s.fetching = !0;
    },
    BILLING_PREMIUM_AFFINITY_FETCHED: function (e) {
        let {} = e;
        (s.fetched = !0), (s.fetching = !1);
    },
    BILLING_PREMIUM_AFFINITY_FETCH_SUCCEEDED: function (e) {
        let { res: t } = e;
        s.affinities = t;
    },
    LOGOUT: function () {
        (s.fetched = !1), (s.fetching = !1), (s.affinities = []);
    },
});
var d = n(562465),
    c = n(889227),
    u = n(652215);
async function _() {
    a.h.dispatch({ type: "BILLING_PREMIUM_AFFINITY_FETCH_START" });
    try {
        let e = await d.Bo.get({ url: u.Rsh.BILLING_NITRO_AFFINITY, rejectWithError: !0 });
        a.h.dispatch({ type: "BILLING_PREMIUM_AFFINITY_FETCH_SUCCEEDED", res: e.body.map((e) => new c.A(e)) });
    } finally {
        a.h.dispatch({ type: "BILLING_PREMIUM_AFFINITY_FETCHED" });
    }
}
function E() {
    let {
        affinities: e,
        hasFetched: t,
        isFetching: n,
    } = (0, r.cf)([o], () => ({ affinities: o.affinities, hasFetched: o.hasFetched, isFetching: o.isFetching }));
    return (
        i.useEffect(() => {
            t || n || _();
        }, [t, n]),
        e
    );
}
