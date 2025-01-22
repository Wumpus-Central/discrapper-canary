r.d(n, {
    Xt: function () {
        return a;
    },
    fw: function () {
        return o;
    }
});
var i = r(570140);
function a(e) {
    i.Z.dispatch({
        type: 'NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE',
        stripePaymentMethod: e
    });
}
function o() {
    i.Z.wait(() => i.Z.dispatch({ type: 'NEW_PAYMENT_SOURCE_CLEAR_ERROR' }));
}
