i.d(t, { b: () => u });
var n = i(64700),
    a = i(17928),
    s = i(228366);
let r = { fetched: !1, fetching: !1, affinities: [] };
class c extends a.Ay.Store {
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
let l = new c(s.h, {
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
var h = i(636537),
    f = i(889227);
i(38405);
var I = i(652215);
async function d() {
    s.h.dispatch({ type: "BILLING_PREMIUM_AFFINITY_FETCH_START" });
    try {
        let e = await h.Bo.get({ url: I.Rsh.BILLING_NITRO_AFFINITY, rejectWithError: !0 });
        s.h.dispatch({ type: "BILLING_PREMIUM_AFFINITY_FETCH_SUCCEEDED", res: e.body.map((e) => new f.A(e)) });
    } finally {
        s.h.dispatch({ type: "BILLING_PREMIUM_AFFINITY_FETCHED" });
    }
}
function u() {
    let {
        affinities: e,
        hasFetched: t,
        isFetching: i,
    } = (0, a.cf)([l], () => ({ affinities: l.affinities, hasFetched: l.hasFetched, isFetching: l.isFetching }));
    return (
        n.useEffect(() => {
            t || i || d();
        }, [t, i]),
        e
    );
}
