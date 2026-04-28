n.d(t, { b: () => E });
var a = n(64700),
    l = n(17928),
    r = n(228366);
let i = { fetched: !1, fetching: !1, affinities: [] };
class s extends l.Ay.Store {
    get hasFetched() {
        return i.fetched;
    }
    get isFetching() {
        return i.fetching;
    }
    get affinities() {
        return i.affinities;
    }
}
let o = new s(r.h, {
    BILLING_PREMIUM_AFFINITY_FETCH_START: function (e) {
        let {} = e;
        i.fetching = !0;
    },
    BILLING_PREMIUM_AFFINITY_FETCHED: function (e) {
        let {} = e;
        (i.fetched = !0), (i.fetching = !1);
    },
    BILLING_PREMIUM_AFFINITY_FETCH_SUCCEEDED: function (e) {
        let { res: t } = e;
        i.affinities = t;
    },
    LOGOUT: function () {
        (i.fetched = !1), (i.fetching = !1), (i.affinities = []);
    },
});
var c = n(636537),
    u = n(889227);
n(38405);
var d = n(652215);
async function _() {
    r.h.dispatch({ type: "BILLING_PREMIUM_AFFINITY_FETCH_START" });
    try {
        let e = await c.Bo.get({ url: d.Rsh.BILLING_NITRO_AFFINITY, rejectWithError: !0 });
        r.h.dispatch({ type: "BILLING_PREMIUM_AFFINITY_FETCH_SUCCEEDED", res: e.body.map((e) => new u.A(e)) });
    } finally {
        r.h.dispatch({ type: "BILLING_PREMIUM_AFFINITY_FETCHED" });
    }
}
function E() {
    let {
        affinities: e,
        hasFetched: t,
        isFetching: n,
    } = (0, l.cf)([o], () => ({ affinities: o.affinities, hasFetched: o.hasFetched, isFetching: o.isFetching }));
    return (
        a.useEffect(() => {
            t || n || _();
        }, [t, n]),
        e
    );
}
