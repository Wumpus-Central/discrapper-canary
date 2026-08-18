"use strict";
n.d(t, { b: () => m });
var l = n(582128),
    i = n(17928),
    s = n(228366);
let r = { fetched: !1, fetching: !1, affinities: [] };
class a extends i.Ay.Store {
    get hasFetched() {
        return r.fetched;
    }
    get isFetching() {
        return r.fetching;
    }
    get affinities() {
        return r.affinities;
    }
}
let o = new a(s.h, {
    BILLING_PREMIUM_AFFINITY_FETCH_START: function (e) {
        let {} = e;
        r.fetching = !0;
    },
    BILLING_PREMIUM_AFFINITY_FETCHED: function (e) {
        let {} = e;
        (r.fetched = !0), (r.fetching = !1);
    },
    BILLING_PREMIUM_AFFINITY_FETCH_SUCCEEDED: function (e) {
        let { res: t } = e;
        r.affinities = t;
    },
    LOGOUT: function () {
        (r.fetched = !1), (r.fetching = !1), (r.affinities = []);
    },
});
var u = n(636537),
    c = n(889227),
    d = n(652215);
async function h() {
    s.h.dispatch({ type: "BILLING_PREMIUM_AFFINITY_FETCH_START" });
    try {
        let e = await u.Bo.get({ url: d.Rsh.BILLING_NITRO_AFFINITY, rejectWithError: !0 });
        s.h.dispatch({ type: "BILLING_PREMIUM_AFFINITY_FETCH_SUCCEEDED", res: e.body.map((e) => new c.A(e)) });
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
