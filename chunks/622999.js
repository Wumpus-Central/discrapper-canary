let i;
n.d(t, {
    az: () => c,
    d2: () => u,
    eH: () => l,
    oe: () => d
}),
    n(47120);
var r = n(657610),
    a = n(544891),
    s = n(981631);
let o = (e) => {
        let t = (t) => 'You passed an invalid expiration date '.concat(e) + ''.concat(null != t ? t : '') + 'Please pass a string containing a numeric month and year such as `01-17` or `2015 / 05`',
            n = e.split(/[.\-/\s]+/g);
        2 !== n.length && t();
        let i = n.map((e) => {
                let i = parseInt(e);
                return isNaN(i) && t(''.concat(n, ' is not a number.')), i < 1 && t(''.concat(i, ' is less than one.')), i;
            }),
            [r, a] = i[0] > 12 ? [i[1], i[0]] : [i[0], i[1]];
        return r > 12 && t('Month must be a number 1-12, not '.concat(r, '.')), a < 100 && (a += 2000), [r, a];
    },
    l = (e) => {
        let t, n;
        try {
            [t, n] = o(e);
        } catch (e) {
            return !1;
        }
        let i = new Date(n, t),
            r = new Date();
        return i.setMonth(i.getMonth() - 1), i.setMonth(i.getMonth() + 1, 1), i > r;
    };
function u() {
    return null != i ? Promise.resolve(i) : (0, r.loadStripe)(s.Ai1.STRIPE.KEY).then((e) => ((i = e), e));
}
function c(e) {
    var t, n, i, r, a, s, o, l;
    let { billing_details: u } = e,
        c = null !== (t = u.address) && void 0 !== t ? t : {},
        d = {
            name: null !== (n = u.name) && void 0 !== n ? n : '',
            line1: null !== (i = c.line1) && void 0 !== i ? i : '',
            line2: null !== (r = c.line2) && void 0 !== r ? r : '',
            city: null !== (a = c.city) && void 0 !== a ? a : '',
            state: null !== (s = c.state) && void 0 !== s ? s : '',
            country: null !== (o = c.country) && void 0 !== o ? o : '',
            postalCode: null !== (l = c.postal_code) && void 0 !== l ? l : ''
        };
    return {
        token: e.id,
        billingAddressInfo: d
    };
}
async function d(e) {
    try {
        let { stripe_payment_intent_client_secret: t } = (
                await a.tn.get({
                    url: s.ANM.BILLING_STRIPE_PAYMENT_INTENTS(e),
                    oldFormErrors: !0,
                    rejectWithError: !1
                })
            ).body,
            n = await u();
        if (null == n) return { error: 'unable to load stripe' };
        let { error: i, paymentIntent: r } = await n.retrievePaymentIntent(t);
        if (null != i) return { error: i.message };
        if (null == r) return { error: 'payment intent does not exist' };
        let o = {};
        switch (('requires_payment_method' === r.status && null != r.last_payment_error && null != r.last_payment_error.payment_method && (o.payment_method = r.last_payment_error.payment_method.id), r.status)) {
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
                return { error: 'Invalid Payment Intent status: '.concat(r.status) };
        }
    } catch (e) {
        return { error: e.message };
    }
}
