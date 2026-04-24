n.d(t, { b: () => E });
var a = n(64700),
    i = n(17928),
    l = n(228366);
let r = { fetched: !1, fetching: !1, affinities: [] };
class s extends i.Ay.Store {
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
let o = new s(l.h, {
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
var c = n(636537),
    u = n(889227);
n(38405);
var d = n(652215);
async function _() {
    l.h.dispatch({ type: "BILLING_PREMIUM_AFFINITY_FETCH_START" });
    try {
        let e = await c.Bo.get({ url: d.Rsh.BILLING_NITRO_AFFINITY, rejectWithError: !0 });
        l.h.dispatch({ type: "BILLING_PREMIUM_AFFINITY_FETCH_SUCCEEDED", res: e.body.map((e) => new u.A(e)) });
    } finally {
        l.h.dispatch({ type: "BILLING_PREMIUM_AFFINITY_FETCHED" });
    }
}
function E() {
    let {
        affinities: e,
        hasFetched: t,
        isFetching: n,
    } = (0, i.cf)([o], () => ({ affinities: o.affinities, hasFetched: o.hasFetched, isFetching: o.isFetching }));
    return (
        a.useEffect(() => {
            t || n || _();
        }, [t, n]),
        e
    );
}
