i.d(t, { b: () => o });
var n = i(582128),
    a = i(17928),
    r = i(73153);
let s = { fetched: !1, fetching: !1, affinities: [] };
class c extends a.Ay.Store {
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
let l = new c(r.h, {
    BILLING_PREMIUM_AFFINITY_FETCH_START: function (e) {
        let {} = e;
        s.fetching = !0;
    },
    BILLING_PREMIUM_AFFINITY_FETCHED: function (e) {
        let {} = e;
        ((s.fetched = !0), (s.fetching = !1));
    },
    BILLING_PREMIUM_AFFINITY_FETCH_SUCCEEDED: function (e) {
        let { res: t } = e;
        s.affinities = t;
    },
    LOGOUT: function () {
        ((s.fetched = !1), (s.fetching = !1), (s.affinities = []));
    },
});
var h = i(636537),
    f = i(889227),
    I = i(739508),
    u = i(652215);
async function d() {
    r.h.dispatch({ type: "BILLING_PREMIUM_AFFINITY_FETCH_START" });
    try {
        let e = await h.Bo.get({ url: u.Rsh.BILLING_NITRO_AFFINITY, rejectWithError: !0 });
        r.h.dispatch({ type: "BILLING_PREMIUM_AFFINITY_FETCH_SUCCEEDED", res: e.body.map((e) => new f.A(e)) });
    } catch (e) {
        (0, I.gr)(e) || (0, I.pM)(e);
    } finally {
        r.h.dispatch({ type: "BILLING_PREMIUM_AFFINITY_FETCHED" });
    }
}
function o() {
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
