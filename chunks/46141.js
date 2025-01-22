r.d(n, {
    $z: function () {
        return O;
    },
    D0: function () {
        return E;
    },
    JC: function () {
        return C;
    },
    Om: function () {
        return A;
    },
    Sf: function () {
        return _;
    },
    U4: function () {
        return N;
    },
    Vg: function () {
        return g;
    },
    Xc: function () {
        return S;
    },
    ZP: function () {
        return f;
    },
    dm: function () {
        return p;
    },
    fv: function () {
        return m;
    },
    jc: function () {
        return v;
    },
    kX: function () {
        return I;
    },
    o_: function () {
        return b;
    },
    qo: function () {
        return h;
    },
    sn: function () {
        return y;
    },
    u_: function () {
        return R;
    },
    z: function () {
        return T;
    }
});
var i = r(789020);
var a = r(411104);
var o = r(81825),
    s = r(770555),
    l = r(630388),
    u = r(823379),
    c = r(981631);
function d(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
class f extends o.Z {
    static createFromServer(e) {
        var n;
        let r = null !== (n = e.billing_address) && void 0 !== n ? n : {},
            i = {
                id: e.id,
                type: e.type,
                paymentGateway: e.payment_gateway,
                invalid: e.invalid,
                isDefault: e.default,
                billingAddress: {
                    name: r.name,
                    line1: r.line_1,
                    line2: r.line_2,
                    city: r.city,
                    postalCode: r.postal_code,
                    state: r.state,
                    country: r.country
                },
                country: e.country,
                flags: e.flags
            };
        switch (e.type) {
            case c.HeQ.CARD:
                return new p({
                    ...i,
                    brand: e.brand,
                    last4: e.last_4,
                    expiresMonth: e.expires_month,
                    expiresYear: e.expires_year
                });
            case c.HeQ.PAYPAL:
                return new h({
                    ...i,
                    email: e.email
                });
            case c.HeQ.VENMO:
                return new S({
                    ...i,
                    username: e.username
                });
            case c.HeQ.SEPA_DEBIT:
            case c.HeQ.SOFORT:
                return new _({
                    ...i,
                    email: e.email
                });
            case c.HeQ.GIROPAY:
                return new m({ ...i });
            case c.HeQ.PRZELEWY24:
                return new g({
                    ...i,
                    email: e.email,
                    bank: e.bank
                });
            case c.HeQ.EPS:
                return new E({
                    ...i,
                    bank: e.bank
                });
            case c.HeQ.PAYSAFE_CARD:
                return new y({ ...i });
            case c.HeQ.GCASH:
                return new b({ ...i });
            case c.HeQ.GRABPAY_MY:
                return new I({ ...i });
            case c.HeQ.MOMO_WALLET:
                return new T({ ...i });
            case c.HeQ.KAKAOPAY:
                return new A({ ...i });
            case c.HeQ.GOPAY_WALLET:
                return new C({ ...i });
            case c.HeQ.BANCONTACT:
                return new N({ ...i });
            case c.HeQ.IDEAL:
                return new v({
                    ...i,
                    bank: e.bank
                });
            case c.HeQ.CASH_APP:
                return new R({
                    ...i,
                    username: e.username
                });
            default:
                (0, u.vE)(e);
        }
    }
    static createFromSerialized(e) {
        let n = e.type;
        switch (n) {
            case c.HeQ.CARD:
                return new p(e);
            case c.HeQ.PAYPAL:
                return new h(e);
            case c.HeQ.SOFORT:
            case c.HeQ.SEPA_DEBIT:
                return new _(e);
            case c.HeQ.GIROPAY:
                return new m(e);
            case c.HeQ.PRZELEWY24:
                return new g(e);
            case c.HeQ.PAYSAFE_CARD:
                return new y(e);
            case c.HeQ.GCASH:
                return new b(e);
            case c.HeQ.GRABPAY_MY:
                return new I(e);
            case c.HeQ.MOMO_WALLET:
                return new T(e);
            case c.HeQ.VENMO:
                return new S(e);
            case c.HeQ.KAKAOPAY:
                return new A(e);
            case c.HeQ.GOPAY_WALLET:
                return new C(e);
            case c.HeQ.BANCONTACT:
                return new N(e);
            case c.HeQ.EPS:
                return new E(e);
            case c.HeQ.IDEAL:
                return new v(e);
            case c.HeQ.CASH_APP:
                return new R(e);
            default:
                (0, u.vE)(n);
        }
    }
    hasFlag(e) {
        return (0, l.yE)(this.flags, e);
    }
    get paymentMethodCountry() {
        return null != this.country && '' !== this.country ? this.country : this.billingAddress.country;
    }
    canRedeemTrial() {
        let { enabled: e } = s.Z.getCurrentConfig({ location: '3a6d55_1' });
        return this.paymentGateway === c.gg$.ADYEN && this.type === c.HeQ.CASH_APP ? e : !c.H0J.has(this.type);
    }
    constructor(e) {
        var n, r, i, a;
        if ((super(), d(this, 'id', void 0), d(this, 'type', void 0), d(this, 'paymentGateway', void 0), d(this, 'billingAddress', void 0), d(this, 'country', void 0), d(this, 'invalid', void 0), d(this, 'isDefault', void 0), d(this, 'flags', void 0), d(this, 'email', void 0), d(this, 'brand', void 0), d(this, 'bank', void 0), d(this, 'username', void 0), !Object.values(c.HeQ).includes(e.type))) throw Error('Unrecognized payment source type '.concat(e.type));
        (this.id = e.id), (this.type = e.type), (this.paymentGateway = e.paymentGateway), (this.invalid = null !== (n = e.invalid) && void 0 !== n && n), (this.billingAddress = null !== (r = e.billingAddress) && void 0 !== r ? r : {}), (this.isDefault = e.isDefault), (this.flags = null !== (i = e.flags) && void 0 !== i ? i : 0), (this.country = null !== (a = e.country) && void 0 !== a ? a : '');
    }
}
class p extends f {
    constructor(e) {
        var n, r, i, a;
        if ((super(e), d(this, 'brand', void 0), d(this, 'last4', void 0), d(this, 'expiresMonth', void 0), d(this, 'expiresYear', void 0), e.type !== c.HeQ.CARD)) throw Error('Cannot instantiate CreditCardSourceRecord with type: '.concat(e.type, ', must be ').concat(c.HeQ.CARD));
        (this.brand = null !== (n = e.brand) && void 0 !== n ? n : ''), (this.last4 = null !== (r = e.last4) && void 0 !== r ? r : ''), (this.expiresMonth = null !== (i = e.expiresMonth) && void 0 !== i ? i : 0), (this.expiresYear = null !== (a = e.expiresYear) && void 0 !== a ? a : 0);
    }
}
class h extends f {
    constructor(e) {
        if ((super(e), d(this, 'email', void 0), e.type !== c.HeQ.PAYPAL)) throw Error('Cannot instantiate PaypalSourceRecord with type: '.concat(e.type, ', must be ').concat(c.HeQ.PAYPAL));
        this.email = e.email || '';
    }
}
class _ extends f {
    constructor(e) {
        if ((super(e), d(this, 'email', void 0), e.type !== c.HeQ.SOFORT && e.type !== c.HeQ.SEPA_DEBIT)) throw Error('Cannot instantiate SofortSourceRecord with type: '.concat(e.type, ', must be ').concat(c.HeQ.SOFORT, ' or ') + c.HeQ.SEPA_DEBIT);
        this.email = e.email || '';
    }
}
class m extends f {
    constructor(e) {
        if ((super(e), e.type !== c.HeQ.GIROPAY)) throw Error('Cannot instantiate GiropaySourceRecord with type: '.concat(e.type, ', must be ').concat(c.HeQ.GIROPAY));
    }
}
class g extends f {
    constructor(e) {
        if ((super(e), e.type !== c.HeQ.PRZELEWY24)) throw Error('Cannot instantiate Przelewy24SourceRecord with type: '.concat(e.type, ', must be ').concat(c.HeQ.PRZELEWY24));
        (this.email = e.email || ''), (this.bank = e.bank);
    }
}
class E extends f {
    constructor(e) {
        if ((super(e), e.type !== c.HeQ.EPS)) throw Error('Cannot instantiate EPSSourceRecord with type: '.concat(e.type, ', must be ').concat(c.HeQ.EPS));
        this.bank = e.bank;
    }
}
class v extends f {
    constructor(e) {
        if ((super(e), e.type !== c.HeQ.IDEAL)) throw Error('Cannot instantiate IdealSourceRecord with type: '.concat(e.type, ', must be ').concat(c.HeQ.IDEAL));
        this.bank = e.bank;
    }
}
class y extends f {
    constructor(e) {
        if ((super(e), e.type !== c.HeQ.PAYSAFE_CARD)) throw Error('Cannot instantiate PaysafeSourceRecord with type: '.concat(e.type, ', must be ').concat(c.HeQ.PAYSAFE_CARD));
    }
}
class b extends f {
    constructor(e) {
        if ((super(e), e.type !== c.HeQ.GCASH)) throw Error('Cannot instantiate GcashSourceRecord with type: '.concat(e.type, ', must be ').concat(c.HeQ.GCASH));
    }
}
class I extends f {
    constructor(e) {
        if ((super(e), e.type !== c.HeQ.GRABPAY_MY)) throw Error('Cannot instantiate GrabPayMySourceRecord with type: '.concat(e.type, ', must be ').concat(c.HeQ.GRABPAY_MY));
    }
}
class T extends f {
    constructor(e) {
        if ((super(e), e.type !== c.HeQ.MOMO_WALLET)) throw Error('Cannot instantiate MomoWalletSourceRecord with type: '.concat(e.type, ', must be ').concat(c.HeQ.MOMO_WALLET));
    }
}
class S extends f {
    constructor(e) {
        if ((super(e), d(this, 'username', void 0), e.type !== c.HeQ.VENMO)) throw Error('Cannot instantiate VenmoSourceRecord with type: '.concat(e.type, ', must be ').concat(c.HeQ.VENMO));
        this.username = e.username || '';
    }
}
class A extends f {
    constructor(e) {
        if ((super(e), e.type !== c.HeQ.KAKAOPAY)) throw Error('Cannot instantiate KaKaoPaySourceRecord with type: '.concat(e.type, ', must be ').concat(c.HeQ.KAKAOPAY));
    }
}
class C extends f {
    constructor(e) {
        if ((super(e), e.type !== c.HeQ.GOPAY_WALLET)) throw Error('Cannot instantiate GoPayWalletSourceRecord with type: '.concat(e.type, ', must be ').concat(c.HeQ.GOPAY_WALLET));
    }
}
class N extends f {
    constructor(e) {
        if ((super(e), e.type !== c.HeQ.BANCONTACT)) throw Error('Cannot instantiate BancontactSourceRecord with type: '.concat(e.type, ', must be ').concat(c.HeQ.BANCONTACT));
    }
}
class R extends f {
    constructor(e) {
        if ((super(e), d(this, 'username', void 0), e.type !== c.HeQ.CASH_APP)) throw Error('Cannot instantiate Cashapp with type: '.concat(e.type, ', must be ').concat(c.HeQ.CASH_APP));
        this.username = e.username || '';
    }
}
class O extends f {
    constructor(e) {
        if (((e.id = ''), (e.paymentGateway = c.gg$.APPLE_PARTNER), (e.type = c.HeQ.APPLE), (e.billingAddress = {}), (e.country = ''), (e.invalid = !1), (e.isDefault = !1), (e.flags = 0), super(e), e.type !== c.HeQ.APPLE)) throw Error('Cannot instantiate AppleSourceRecord with type: '.concat(e.type, ', must be ').concat(c.HeQ.APPLE));
    }
}
