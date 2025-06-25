let r;
n.d(t, {
    XZ: () => p,
    az: () => _,
    d2: () => d,
    eH: () => u,
    oe: () => h,
    rI: () => f
}),
    n(35282),
    n(388685);
var i = n(36140),
    a = n(544891),
    o = n(710845),
    s = n(981631);
let l = new o.Z('StripeUtils'),
    c = (e) => {
        let t = (t) => 'You passed an invalid expiration date '.concat(e) + ''.concat(null != t ? t : '') + 'Please pass a string containing a numeric month and year such as `01-17` or `2015 / 05`',
            n = e.split(/[.\-/\s]+/g);
        2 !== n.length && t();
        let r = n.map((e) => {
                let r = parseInt(e);
                return isNaN(r) && t(''.concat(n, ' is not a number.')), r < 1 && t(''.concat(r, ' is less than one.')), r;
            }),
            [i, a] = r[0] > 12 ? [r[1], r[0]] : [r[0], r[1]];
        return i > 12 && t('Month must be a number 1-12, not '.concat(i, '.')), a < 100 && (a += 2000), [i, a];
    },
    u = (e) => {
        let t, n;
        try {
            [t, n] = c(e);
        } catch (e) {
            return !1;
        }
        let r = new Date(n, t),
            i = new Date();
        return r.setMonth(r.getMonth() - 1), r.setMonth(r.getMonth() + 1, 1), r > i;
    };
function d() {
    return null != r ? Promise.resolve(r) : (0, i.loadStripe)(s.Ai1.STRIPE.KEY).then((e) => ((r = e), e));
}
function f() {
    return null == s.Ai1.STRIPE.KEY ? (l.warn('getStripeClientMode() called before PaymentSettings.STRIPE.KEY initialized: ', s.Ai1.STRIPE.KEY), 'unknown') : s.Ai1.STRIPE.KEY.startsWith('pk_live') ? 'live' : s.Ai1.STRIPE.KEY.startsWith('pk_test') ? 'test' : (l.warn('Unexpected value for Stripe public key: ', s.Ai1.STRIPE.KEY), 'unknown');
}
function _(e) {
    var t, n, r, i, a, o, s, l;
    let { billing_details: c } = e,
        u = null != (t = c.address) ? t : {},
        d = {
            name: null != (n = c.name) ? n : '',
            line1: null != (r = u.line1) ? r : '',
            line2: null != (i = u.line2) ? i : '',
            city: null != (a = u.city) ? a : '',
            state: null != (o = u.state) ? o : '',
            country: null != (s = u.country) ? s : '',
            postalCode: null != (l = u.postal_code) ? l : ''
        };
    return {
        token: e.id,
        billingAddressInfo: d
    };
}
function p(e) {
    let { name: t, line1: n, line2: r, city: i, state: a, postalCode: o, country: s } = e;
    return {
        name: t,
        address: {
            line1: n,
            line2: r,
            city: i,
            state: a,
            postal_code: o,
            country: s
        }
    };
}
async function h(e) {
    try {
        let { stripe_payment_intent_client_secret: t } = (
                await a.tn.get({
                    url: s.ANM.BILLING_STRIPE_PAYMENT_INTENTS(e),
                    oldFormErrors: !0,
                    rejectWithError: !1
                })
            ).body,
            n = await d();
        if (null == n) return { error: 'unable to load stripe' };
        let { error: r, paymentIntent: i } = await n.retrievePaymentIntent(t);
        if (null != r) return { error: r.message };
        if (null == i) return { error: 'payment intent does not exist' };
        let o = {};
        switch (('requires_payment_method' === i.status && null != i.last_payment_error && null != i.last_payment_error.payment_method && (o.payment_method = i.last_payment_error.payment_method.id), i.status)) {
            case 'requires_payment_method':
            case 'requires_confirmation':
            case 'requires_action':
                let { error: l } = await n.confirmCardPayment(t, o);
                if (null != l) return { error: l.message };
                return {};
            case 'succeeded':
            case 'processing':
                return {};
            default:
                return { error: 'Invalid Payment Intent status: '.concat(i.status) };
        }
    } catch (e) {
        return { error: e.message };
    }
}
