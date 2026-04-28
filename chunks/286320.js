n.d(t, { b: () => u });
var r = n(64700),
    a = n(17928),
    l = n(228366);
let i = { fetched: !1, fetching: !1, affinities: [] };
class s extends a.Ay.Store {
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
let o = new s(l.h, {
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
    E = n(889227);
n(38405);
var _ = n(652215);
async function A() {
    l.h.dispatch({ type: "BILLING_PREMIUM_AFFINITY_FETCH_START" });
    try {
        let e = await c.Bo.get({ url: _.Rsh.BILLING_NITRO_AFFINITY, rejectWithError: !0 });
        l.h.dispatch({ type: "BILLING_PREMIUM_AFFINITY_FETCH_SUCCEEDED", res: e.body.map((e) => new E.A(e)) });
    } finally {
        l.h.dispatch({ type: "BILLING_PREMIUM_AFFINITY_FETCHED" });
    }
}
function u() {
    let {
        affinities: e,
        hasFetched: t,
        isFetching: n,
    } = (0, a.cf)([o], () => ({ affinities: o.affinities, hasFetched: o.hasFetched, isFetching: o.isFetching }));
    return (
        r.useEffect(() => {
            t || n || A();
        }, [t, n]),
        e
    );
}
