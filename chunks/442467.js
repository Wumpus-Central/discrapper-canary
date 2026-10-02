n.d(t, { C: () => s, d: () => l });
var i,
    r = n(136857),
    a = n(595528),
    s =
        (((i = {})[(i.UNKNOWN = 0)] = "UNKNOWN"),
        (i[(i.PENDING = 1)] = "PENDING"),
        (i[(i.SUCCESS = 2)] = "SUCCESS"),
        (i[(i.ERROR = 3)] = "ERROR"),
        i);
function l(e, t) {
    function n(t) {
        a.A.isConnected() &&
            t.code === r.Ay.ErrorCodes.PURCHASE_TOKEN_AUTHORIZATION_REQUIRED &&
            e({ purchaseTokenAuthState: 1 });
    }
    return {
        purchaseTokenAuthState: 0,
        purchaseTokenHash: null,
        expiresAt: null,
        handlePaymentFailureForPurchaseTokenAuth: (e) => {
            let { error: t } = e;
            n(t instanceof r.Ay ? t : new r.Ay(t));
        },
        handleBillingErrorForPurchaseTokenAuth: n,
        handlePurchaseTokenAuth: (t) => {
            e({ purchaseTokenAuthState: 2, purchaseTokenHash: t.purchaseTokenHash, expiresAt: t.expiresAt });
        },
        resetPurchaseTokenState: () => {
            e({ purchaseTokenAuthState: 0, purchaseTokenHash: null, expiresAt: null });
        },
    };
}
