let i;
r.d(n, {
    az: function () {
        return p;
    },
    d2: function () {
        return f;
    },
    eH: function () {
        return d;
    },
    oe: function () {
        return h;
    }
});
var a,
    o = r(47120);
var s = r(657610),
    l = r(544891),
    u = r(981631);
!(function (e) {
    (e.REQUIRES_PAYMENT_METHOD = 'requires_payment_method'), (e.REQUIRES_CONFIRMATION = 'requires_confirmation'), (e.REQUIRES_ACTION = 'requires_action'), (e.PROCESSING = 'processing'), (e.CANCELED = 'canceled'), (e.SUCCEEDED = 'succeeded');
})(a || (a = {}));
let c = (e) => {
        let n = (n) => 'You passed an invalid expiration date '.concat(e) + ''.concat(null != n ? n : '') + 'Please pass a string containing a numeric month and year such as `01-17` or `2015 / 05`',
            r = e.split(/[.\-/\s]+/g);
        2 !== r.length && n();
        let i = r.map((e) => {
                let i = parseInt(e);
                return isNaN(i) && n(''.concat(r, ' is not a number.')), i < 1 && n(''.concat(i, ' is less than one.')), i;
            }),
            [a, o] = i[0] > 12 ? [i[1], i[0]] : [i[0], i[1]];
        return a > 12 && n('Month must be a number 1-12, not '.concat(a, '.')), o < 100 && (o += 2000), [a, o];
    },
    d = (e) => {
        let n, r;
        try {
            [n, r] = c(e);
        } catch (e) {
            return !1;
        }
        let i = new Date(r, n),
            a = new Date();
        return i.setMonth(i.getMonth() - 1), i.setMonth(i.getMonth() + 1, 1), i > a;
    };
function f() {
    return null != i ? Promise.resolve(i) : (0, s.loadStripe)(u.Ai1.STRIPE.KEY).then((e) => ((i = e), e));
}
function p(e) {
    var n, r, i, a, o, s, l, u;
    let { billing_details: c } = e,
        d = null !== (n = c.address) && void 0 !== n ? n : {},
        f = {
            name: null !== (r = c.name) && void 0 !== r ? r : '',
            line1: null !== (i = d.line1) && void 0 !== i ? i : '',
            line2: null !== (a = d.line2) && void 0 !== a ? a : '',
            city: null !== (o = d.city) && void 0 !== o ? o : '',
            state: null !== (s = d.state) && void 0 !== s ? s : '',
            country: null !== (l = d.country) && void 0 !== l ? l : '',
            postalCode: null !== (u = d.postal_code) && void 0 !== u ? u : ''
        };
    return {
        token: e.id,
        billingAddressInfo: f
    };
}
async function h(e) {
    try {
        let { stripe_payment_intent_client_secret: n } = (
                await l.tn.get({
                    url: u.ANM.BILLING_STRIPE_PAYMENT_INTENTS(e),
                    oldFormErrors: !0,
                    rejectWithError: !1
                })
            ).body,
            r = await f();
        if (null == r) return { error: 'unable to load stripe' };
        let { error: i, paymentIntent: a } = await r.retrievePaymentIntent(n);
        if (null != i) return { error: i.message };
        if (null == a) return { error: 'payment intent does not exist' };
        let o = {};
        switch (('requires_payment_method' === a.status && null != a.last_payment_error && null != a.last_payment_error.payment_method && (o.payment_method = a.last_payment_error.payment_method.id), a.status)) {
            case 'requires_payment_method':
            case 'requires_confirmation':
            case 'requires_action':
                let { error: s } = await r.confirmCardPayment(n, o);
                if (null != s) return { error: s.message };
                return {};
            case 'succeeded':
            case 'processing':
                return {};
            default:
                return { error: 'Invalid Payment Intent status: '.concat(a.status) };
        }
    } catch (e) {
        return { error: e.message };
    }
}
