"use strict";
n.d(t, { b: () => m });
var l = n(64700),
    i = n(17928),
    s = n(228366);
let a = { fetched: !1, fetching: !1, affinities: [] };
class r extends i.Ay.Store {
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
let o = new r(s.h, {
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
var c = n(636537),
    u = n(889227);
n(38405);
var d = n(652215);
async function h() {
    s.h.dispatch({ type: "BILLING_PREMIUM_AFFINITY_FETCH_START" });
    try {
        let e = await c.Bo.get({ url: d.Rsh.BILLING_NITRO_AFFINITY, rejectWithError: !0 });
        s.h.dispatch({ type: "BILLING_PREMIUM_AFFINITY_FETCH_SUCCEEDED", res: e.body.map((e) => new u.A(e)) });
    } finally {
        s.h.dispatch({ type: "BILLING_PREMIUM_AFFINITY_FETCHED" });
    }
}
function m() {
    let {
        affinities: e,
        hasFetched: t,
        isFetching: n,
    } = (0, i.cf)([o], () => ({ affinities: o.affinities, hasFetched: o.hasFetched, isFetching: o.isFetching }));
    return (
        l.useEffect(() => {
            t || n || h();
        }, [t, n]),
        e
    );
}
