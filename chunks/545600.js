n.d(t, { A: () => o });
var a = n(17928),
    i = n(228366),
    r = n(777376);
let s = null,
    l = r.Px.NOT_FETCHED;
class c extends a.Ay.Store {
    static displayName = "CroissantActivationStore";
    getActivationStatus() {
        return s;
    }
    getRequestState() {
        return l;
    }
}
let o = new c(i.h, {
    CROISSANT_ACTIVATION_FETCH_START: function () {
        l = r.Px.FETCHING;
    },
    CROISSANT_ACTIVATION_FETCH_SUCCESS: function (e) {
        let { activationStatus: t } = e;
        (s = t), (l = r.Px.FETCHED);
    },
    CROISSANT_ACTIVATION_FETCH_FAILURE: function () {
        l = r.Px.FETCHED;
    },
    CROISSANT_CANCELLATION_START: function () {
        l = r.Px.CANCELLING;
    },
    CROISSANT_CANCELLATION_SUCCESS: function () {
        (s = null), (l = r.Px.FETCHED);
    },
    CROISSANT_CANCELLATION_FAILURE: function () {
        l = r.Px.FETCHED;
    },
    CROISSANT_ACTIVATION_RESET: function () {
        (s = null), (l = r.Px.FETCHED);
    },
});
