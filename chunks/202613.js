"use strict";
n.d(t, {
    A0: () => d,
    Ay: () => l,
    EE: () => h,
    FQ: () => v,
    F_: () => g,
    Pw: () => C,
    Qh: () => _,
    SJ: () => c,
    Tu: () => f,
    UG: () => S,
    Ux: () => m,
    Xj: () => E,
    YS: () => u,
    _1: () => I,
    am: () => A,
    cg: () => y,
    i6: () => T,
    rJ: () => p,
}),
    n(938796);
var r = n(665260),
    i = n(315069),
    a = n(596334),
    s = n(403362),
    o = n(652215);
class l extends i.A {
    id;
    type;
    paymentGateway;
    billingAddress;
    country;
    invalid;
    isDefault;
    flags;
    email;
    brand;
    bank;
    username;
    static createFromServer(e) {
        let t = e.billing_address ?? {},
            n = {
                id: e.id,
                type: e.type,
                paymentGateway: e.payment_gateway,
                invalid: e.invalid,
                isDefault: e.default,
                billingAddress: {
                    name: t.name,
                    line1: t.line_1,
                    line2: t.line_2,
                    city: t.city,
                    postalCode: t.postal_code,
                    state: t.state,
                    country: t.country,
                },
                country: e.country,
                flags: e.flags,
            };
        switch (e.type) {
            case o.hes.CARD:
                return new u({
                    ...n,
                    brand: e.brand,
                    last4: e.last_4,
                    expiresMonth: e.expires_month,
                    expiresYear: e.expires_year,
                });
            case o.hes.PAYPAL:
                return new c({ ...n, email: e.email });
            case o.hes.VENMO:
                return new I({ ...n, username: e.username });
            case o.hes.SEPA_DEBIT:
            case o.hes.SOFORT:
                return new d({ ...n, email: e.email });
            case o.hes.GIROPAY:
                return new _({ ...n });
            case o.hes.PRZELEWY24:
                return new f({ ...n, email: e.email, bank: e.bank });
            case o.hes.EPS:
                return new p({ ...n, bank: e.bank });
            case o.hes.PAYSAFE_CARD:
                return new m({ ...n });
            case o.hes.GCASH:
                return new g({ ...n });
            case o.hes.GRABPAY_MY:
                return new E({ ...n });
            case o.hes.MOMO_WALLET:
                return new A({ ...n });
            case o.hes.KAKAOPAY:
                return new T({ ...n });
            case o.hes.GOPAY_WALLET:
                return new y({ ...n });
            case o.hes.BANCONTACT:
                return new S({ ...n });
            case o.hes.IDEAL:
                return new h({ ...n, bank: e.bank });
            case o.hes.CASH_APP:
                return new v({ ...n, username: e.username });
            default:
                (0, s.xb)(e);
        }
    }
    static createFromSerialized(e) {
        let t = e.type;
        switch (t) {
            case o.hes.CARD:
                return new u(e);
            case o.hes.PAYPAL:
                return new c(e);
            case o.hes.SOFORT:
            case o.hes.SEPA_DEBIT:
                return new d(e);
            case o.hes.GIROPAY:
                return new _(e);
            case o.hes.PRZELEWY24:
                return new f(e);
            case o.hes.PAYSAFE_CARD:
                return new m(e);
            case o.hes.GCASH:
                return new g(e);
            case o.hes.GRABPAY_MY:
                return new E(e);
            case o.hes.MOMO_WALLET:
                return new A(e);
            case o.hes.VENMO:
                return new I(e);
            case o.hes.KAKAOPAY:
                return new T(e);
            case o.hes.GOPAY_WALLET:
                return new y(e);
            case o.hes.BANCONTACT:
                return new S(e);
            case o.hes.EPS:
                return new p(e);
            case o.hes.IDEAL:
                return new h(e);
            case o.hes.CASH_APP:
                return new v(e);
            default:
                (0, s.xb)(t);
        }
    }
    constructor(e) {
        if ((super(), !Object.values(o.hes).includes(e.type)))
            throw Error(`Unrecognized payment source type ${e.type}`);
        (this.id = e.id),
            (this.type = e.type),
            (this.paymentGateway = e.paymentGateway),
            (this.invalid = e.invalid ?? !1),
            (this.billingAddress = e.billingAddress ?? {}),
            (this.isDefault = e.isDefault),
            (this.flags = e.flags ?? 0),
            (this.country = e.country ?? "");
    }
    hasFlag(e) {
        return (0, r.Lt)(this.flags, e);
    }
    get paymentMethodCountry() {
        return null != this.country && "" !== this.country ? this.country : this.billingAddress.country;
    }
    canRedeemTrial() {
        let { enabled: e } = a.A.getCurrentConfig({ location: "3a6d55_1" });
        return this.paymentGateway === o.kM_.ADYEN && this.type === o.hes.CASH_APP ? e : !o.OLI.has(this.type);
    }
}
class u extends l {
    brand;
    last4;
    expiresMonth;
    expiresYear;
    constructor(e) {
        if ((super(e), e.type !== o.hes.CARD))
            throw Error(`Cannot instantiate CreditCardSourceRecord with type: ${e.type}, must be ${o.hes.CARD}`);
        (this.brand = e.brand ?? ""),
            (this.last4 = e.last4 ?? ""),
            (this.expiresMonth = e.expiresMonth ?? 0),
            (this.expiresYear = e.expiresYear ?? 0);
    }
}
class c extends l {
    email;
    constructor(e) {
        if ((super(e), e.type !== o.hes.PAYPAL))
            throw Error(`Cannot instantiate PaypalSourceRecord with type: ${e.type}, must be ${o.hes.PAYPAL}`);
        this.email = e.email || "";
    }
}
class d extends l {
    email;
    constructor(e) {
        if ((super(e), e.type !== o.hes.SOFORT && e.type !== o.hes.SEPA_DEBIT))
            throw Error(
                `Cannot instantiate SofortSourceRecord with type: ${e.type}, must be ${o.hes.SOFORT} or ` +
                    o.hes.SEPA_DEBIT,
            );
        this.email = e.email || "";
    }
}
class _ extends l {
    constructor(e) {
        if ((super(e), e.type !== o.hes.GIROPAY))
            throw Error(`Cannot instantiate GiropaySourceRecord with type: ${e.type}, must be ${o.hes.GIROPAY}`);
    }
}
class f extends l {
    constructor(e) {
        if ((super(e), e.type !== o.hes.PRZELEWY24))
            throw Error(`Cannot instantiate Przelewy24SourceRecord with type: ${e.type}, must be ${o.hes.PRZELEWY24}`);
        (this.email = e.email || ""), (this.bank = e.bank);
    }
}
class p extends l {
    constructor(e) {
        if ((super(e), e.type !== o.hes.EPS))
            throw Error(`Cannot instantiate EPSSourceRecord with type: ${e.type}, must be ${o.hes.EPS}`);
        this.bank = e.bank;
    }
}
class h extends l {
    constructor(e) {
        if ((super(e), e.type !== o.hes.IDEAL))
            throw Error(`Cannot instantiate IdealSourceRecord with type: ${e.type}, must be ${o.hes.IDEAL}`);
        this.bank = e.bank;
    }
}
class m extends l {
    constructor(e) {
        if ((super(e), e.type !== o.hes.PAYSAFE_CARD))
            throw Error(`Cannot instantiate PaysafeSourceRecord with type: ${e.type}, must be ${o.hes.PAYSAFE_CARD}`);
    }
}
class g extends l {
    constructor(e) {
        if ((super(e), e.type !== o.hes.GCASH))
            throw Error(`Cannot instantiate GcashSourceRecord with type: ${e.type}, must be ${o.hes.GCASH}`);
    }
}
class E extends l {
    constructor(e) {
        if ((super(e), e.type !== o.hes.GRABPAY_MY))
            throw Error(`Cannot instantiate GrabPayMySourceRecord with type: ${e.type}, must be ${o.hes.GRABPAY_MY}`);
    }
}
class A extends l {
    constructor(e) {
        if ((super(e), e.type !== o.hes.MOMO_WALLET))
            throw Error(`Cannot instantiate MomoWalletSourceRecord with type: ${e.type}, must be ${o.hes.MOMO_WALLET}`);
    }
}
class I extends l {
    username;
    constructor(e) {
        if ((super(e), e.type !== o.hes.VENMO))
            throw Error(`Cannot instantiate VenmoSourceRecord with type: ${e.type}, must be ${o.hes.VENMO}`);
        this.username = e.username || "";
    }
}
class T extends l {
    constructor(e) {
        if ((super(e), e.type !== o.hes.KAKAOPAY))
            throw Error(`Cannot instantiate KaKaoPaySourceRecord with type: ${e.type}, must be ${o.hes.KAKAOPAY}`);
    }
}
class y extends l {
    constructor(e) {
        if ((super(e), e.type !== o.hes.GOPAY_WALLET))
            throw Error(
                `Cannot instantiate GoPayWalletSourceRecord with type: ${e.type}, must be ${o.hes.GOPAY_WALLET}`,
            );
    }
}
class S extends l {
    constructor(e) {
        if ((super(e), e.type !== o.hes.BANCONTACT))
            throw Error(`Cannot instantiate BancontactSourceRecord with type: ${e.type}, must be ${o.hes.BANCONTACT}`);
    }
}
class v extends l {
    username;
    constructor(e) {
        if ((super(e), e.type !== o.hes.CASH_APP))
            throw Error(`Cannot instantiate Cashapp with type: ${e.type}, must be ${o.hes.CASH_APP}`);
        this.username = e.username || "";
    }
}
class C extends l {
    constructor(e) {
        if (
            ((e.id = ""),
            (e.paymentGateway = o.kM_.APPLE_PARTNER),
            (e.type = o.hes.APPLE),
            (e.billingAddress = {}),
            (e.country = ""),
            (e.invalid = !1),
            (e.isDefault = !1),
            (e.flags = 0),
            super(e),
            e.type !== o.hes.APPLE)
        )
            throw Error(`Cannot instantiate AppleSourceRecord with type: ${e.type}, must be ${o.hes.APPLE}`);
    }
}
