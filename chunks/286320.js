i.d(t, { b: () => r });
var n = i(64700),
    I = i(17928),
    c = i(228366);
let f = { fetched: !1, fetching: !1, affinities: [] };
class h extends I.Ay.Store {
    get hasFetched() {
        return f.fetched;
    }
    get isFetching() {
        return f.fetching;
    }
    get affinities() {
        return f.affinities;
    }
}
let s = new h(c.h, {
    BILLING_PREMIUM_AFFINITY_FETCH_START: function (e) {
        let {} = e;
        f.fetching = !0;
    },
    BILLING_PREMIUM_AFFINITY_FETCHED: function (e) {
        let {} = e;
        (f.fetched = !0), (f.fetching = !1);
    },
    BILLING_PREMIUM_AFFINITY_FETCH_SUCCEEDED: function (e) {
        let { res: t } = e;
        f.affinities = t;
    },
    LOGOUT: function () {
        (f.fetched = !1), (f.fetching = !1), (f.affinities = []);
    },
});
var F = i(636537),
    _ = i(889227),
    a = i(652215);
async function E() {
    c.h.dispatch({ type: "BILLING_PREMIUM_AFFINITY_FETCH_START" });
    try {
        let e = await F.Bo.get({ url: a.Rsh.BILLING_NITRO_AFFINITY, rejectWithError: !0 });
        c.h.dispatch({ type: "BILLING_PREMIUM_AFFINITY_FETCH_SUCCEEDED", res: e.body.map((e) => new _.A(e)) });
    } finally {
        c.h.dispatch({ type: "BILLING_PREMIUM_AFFINITY_FETCHED" });
    }
}
function r() {
    let {
        affinities: e,
        hasFetched: t,
        isFetching: i,
    } = (0, I.cf)([s], () => ({ affinities: s.affinities, hasFetched: s.hasFetched, isFetching: s.isFetching }));
    return (
        n.useEffect(() => {
            t || i || E();
        }, [t, i]),
        e
    );
}
