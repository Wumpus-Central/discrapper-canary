"use strict";
n.d(t, { A: () => o });
var r = n(311907),
    i = n(73153);
let s = { fetched: !1, fetching: !1, affinities: [] };
class a extends r.Ay.Store {
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
let o = new a(i.h, {
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
