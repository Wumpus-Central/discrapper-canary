var i = n(158390),
    r = n(855986),
    l = n(73153),
    a = n(927813),
    s = n(271376);
let o = null,
    u = s.$.NOT_FETCHED,
    c = null,
    d = new i.A(10 * a.A.Millis.SECOND, 30 * a.A.Millis.MINUTE),
    S = null;
class E extends r.Ay.Store {
    static displayName = "CollectiblesSequencedOffersStore";
    get fetchState() {
        return u;
    }
    get lastFetchedAt() {
        return c;
    }
    get nextFetchAllowedAt() {
        return S;
    }
    getSequencedOffersForCollection(e) {
        return o?.collectionId === e ? o : null;
    }
}
let _ = new E(l.h, {
    COLLECTIBLES_SEQUENCED_OFFERS_FETCH: function () {
        u = s.$.FETCHING;
    },
    COLLECTIBLES_SEQUENCED_OFFERS_FETCH_SUCCESS: function (e) {
        ((o = e.sequencedOffers), (u = s.$.FETCHED), (c = Date.now()), d.succeed(), (S = null));
    },
    COLLECTIBLES_SEQUENCED_OFFERS_FETCH_FAILURE: function () {
        ((u = s.$.NOT_FETCHED), (S = Date.now() + d.fail()));
    },
    LOGOUT: function () {
        ((o = null), (u = s.$.NOT_FETCHED), (c = null), d.succeed(), (S = null));
    },
});
n.d(t, {}, { A: _ });
