var i = n(158390),
    r = n(855986),
    a = n(73153),
    s = n(927813),
    l = n(271376);
let o = null,
    d = l.$.NOT_FETCHED,
    c = null,
    u = new i.A(10 * s.A.Millis.SECOND, 30 * s.A.Millis.MINUTE),
    _ = null;
class E extends r.Ay.Store {
    static displayName = "CollectiblesSequencedOffersStore";
    get fetchState() {
        return d;
    }
    get lastFetchedAt() {
        return c;
    }
    get nextFetchAllowedAt() {
        return _;
    }
    getSequencedOffersForCollection(e) {
        return o?.collectionId === e ? o : null;
    }
}
let A = new E(a.h, {
    COLLECTIBLES_SEQUENCED_OFFERS_FETCH: function () {
        d = l.$.FETCHING;
    },
    COLLECTIBLES_SEQUENCED_OFFERS_FETCH_SUCCESS: function (e) {
        ((o = e.sequencedOffers), (d = l.$.FETCHED), (c = Date.now()), u.succeed(), (_ = null));
    },
    COLLECTIBLES_SEQUENCED_OFFERS_FETCH_FAILURE: function () {
        ((d = l.$.NOT_FETCHED), (_ = Date.now() + u.fail()));
    },
    LOGOUT: function () {
        ((o = null), (d = l.$.NOT_FETCHED), (c = null), u.succeed(), (_ = null));
    },
});
n.d(t, {}, { A: A });
