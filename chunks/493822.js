"use strict";
n.d(t, { gj: () => i, ou: () => s });
var r,
    i =
        (((r = {}).SELECT_PLAN = "select_plan"),
        (r.PAYMENT_TYPE = "payment_type"),
        (r.PAYPAL = "paypal"),
        (r.PAYPAL_ADDRESS = "paypal_address"),
        (r.PAYMENT_REQUEST_INFO = "payment_request_info"),
        (r.CREDIT_CARD_INFORMATION = "credit_card_information"),
        (r.ADDRESS = "address"),
        (r.REVIEW = "review"),
        (r.CONFIRM = "confirm"),
        (r.AWAITING_AUTHENTICATION = "awaiting_authentication"),
        (r.VENMO = "venmo"),
        (r.VENMO_ADDRESS = "venmo_address"),
        r);
function s(e) {
    if (null != e) {
        if (e.hasCardError()) return "credit_card_information";
        if (e.hasAddressError()) return "address";
    }
    return null;
}
