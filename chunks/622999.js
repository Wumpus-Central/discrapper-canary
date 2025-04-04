let r;
n.d(t, {
    az: () => u,
    d2: () => c,
    eH: () => l,
    oe: () => d
}),
    n(301563),
    n(47120);
var i = n(657610),
    o = n(544891),
    a = n(981631);
let s = (e) => {
        let t = (t) => 'You passed an invalid expiration date '.concat(e) + ''.concat(null != t ? t : '') + 'Please pass a string containing a numeric month and year such as `01-17` or `2015 / 05`',
            n = e.split(/[.\-/\s]+/g);
        2 !== n.length && t();
        let r = n.map((e) => {
                let r = parseInt(e);
                return isNaN(r) && t(''.concat(n, ' is not a number.')), r < 1 && t(''.concat(r, ' is less than one.')), r;
            }),
            [i, o] = r[0] > 12 ? [r[1], r[0]] : [r[0], r[1]];
        return i > 12 && t('Month must be a number 1-12, not '.concat(i, '.')), o < 100 && (o += 2000), [i, o];
    },
    l = (e) => {
        let t, n;
        try {
            [t, n] = s(e);
        } catch (e) {
            return !1;
        }
        let r = new Date(n, t),
            i = new Date();
        return r.setMonth(r.getMonth() - 1), r.setMonth(r.getMonth() + 1, 1), r > i;
    };
function c() {
    return null != r ? Promise.resolve(r) : (0, i.loadStripe)(a.Ai1.STRIPE.KEY).then((e) => ((r = e), e));
}
function u(e) {
    var t, n, r, i, o, a, s, l;
    let { billing_details: c } = e,
        u = null != (t = c.address) ? t : {},
        d = {
            name: null != (n = c.name) ? n : '',
            line1: null != (r = u.line1) ? r : '',
            line2: null != (i = u.line2) ? i : '',
            city: null != (o = u.city) ? o : '',
            state: null != (a = u.state) ? a : '',
            country: null != (s = u.country) ? s : '',
            postalCode: null != (l = u.postal_code) ? l : ''
        };
    return {
        token: e.id,
        billingAddressInfo: d
    };
}
async function d(e) {
    try {
        let { stripe_payment_intent_client_secret: t } = (
                await o.tn.get({
                    url: a.ANM.BILLING_STRIPE_PAYMENT_INTENTS(e),
                    oldFormErrors: !0,
                    rejectWithError: !1
                })
            ).body,
            n = await c();
        if (null == n) return { error: 'unable to load stripe' };
        let { error: r, paymentIntent: i } = await n.retrievePaymentIntent(t);
        if (null != r) return { error: r.message };
        if (null == i) return { error: 'payment intent does not exist' };
        let s = {};
        switch (('requires_payment_method' === i.status && null != i.last_payment_error && null != i.last_payment_error.payment_method && (s.payment_method = i.last_payment_error.payment_method.id), i.status)) {
            case 'requires_payment_method':
            case 'requires_confirmation':
            case 'requires_action':
                let { error: l } = await n.confirmCardPayment(t, s);
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
