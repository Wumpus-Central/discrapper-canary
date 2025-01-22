var i;
function a(e) {
    if (null != e) {
        if (e.hasCardError()) return 'credit_card_information';
        if (e.hasAddressError()) return 'address';
    }
    return null;
}
r.d(n, {
    Rg: function () {
        return i;
    },
    ly: function () {
        return a;
    }
}),
    !(function (e) {
        (e.SELECT_PLAN = 'select_plan'), (e.PAYMENT_TYPE = 'payment_type'), (e.PAYPAL = 'paypal'), (e.PAYPAL_ADDRESS = 'paypal_address'), (e.PAYMENT_REQUEST_INFO = 'payment_request_info'), (e.CREDIT_CARD_INFORMATION = 'credit_card_information'), (e.ADDRESS = 'address'), (e.REVIEW = 'review'), (e.CONFIRM = 'confirm'), (e.AWAITING_AUTHENTICATION = 'awaiting_authentication'), (e.VENMO = 'venmo'), (e.VENMO_ADDRESS = 'venmo_address');
    })(i || (i = {}));
