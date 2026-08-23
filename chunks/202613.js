"use strict";
n.d(t, {
    A0: () => c,
    Ay: () => l,
    EE: () => A,
    FQ: () => N,
    F_: () => I,
    IE: () => O,
    LQ: () => R,
    Pw: () => C,
    Qh: () => u,
    SJ: () => d,
    Tu: () => _,
    UG: () => S,
    Ux: () => h,
    Xj: () => f,
    YS: () => o,
    _1: () => T,
    am: () => p,
    cg: () => g,
    i6: () => m,
    rJ: () => E,
}),
    n(938796);
var i = n(665260),
    r = n(315069),
    a = n(403362),
    s = n(652215);
class l extends r.A {
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
    pixMetadata;
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
                pixMetadata: null != e.pix ? { taxId: e.pix.tax_id } : void 0,
            };
        switch (e.type) {
            case s.hes.CARD:
                return new o({
                    ...n,
                    brand: e.brand,
                    last4: e.last_4,
                    expiresMonth: e.expires_month,
                    expiresYear: e.expires_year,
                });
            case s.hes.PAYPAL:
                return new d({ ...n, email: e.email });
            case s.hes.VENMO:
                return new T({ ...n, username: e.username });
            case s.hes.SEPA_DEBIT:
            case s.hes.SOFORT:
                return new c({ ...n, email: e.email });
            case s.hes.GIROPAY:
                return new u({ ...n });
            case s.hes.PRZELEWY24:
                return new _({ ...n, email: e.email, bank: e.bank });
            case s.hes.EPS:
                return new E({ ...n, bank: e.bank });
            case s.hes.PAYSAFE_CARD:
                return new h({ ...n });
            case s.hes.GCASH:
                return new I({ ...n });
            case s.hes.GRABPAY_MY:
                return new f({ ...n });
            case s.hes.MOMO_WALLET:
                return new p({ ...n });
            case s.hes.KAKAOPAY:
                return new m({ ...n });
            case s.hes.GOPAY_WALLET:
                return new g({ ...n });
            case s.hes.BANCONTACT:
                return new S({ ...n });
            case s.hes.IDEAL:
                return new A({ ...n, bank: e.bank });
            case s.hes.CASH_APP:
                return new N({ ...n, username: e.username });
            case s.hes.TDS_WALLET:
                return new R({ ...n });
            case s.hes.PIX:
                return new O({ ...n, email: e.email });
            default:
                (0, a.xb)(e);
        }
    }
    static createFromSerialized(e) {
        let t = e.type;
        switch (t) {
            case s.hes.CARD:
                return new o(e);
            case s.hes.PAYPAL:
                return new d(e);
            case s.hes.SOFORT:
            case s.hes.SEPA_DEBIT:
                return new c(e);
            case s.hes.GIROPAY:
                return new u(e);
            case s.hes.PRZELEWY24:
                return new _(e);
            case s.hes.PAYSAFE_CARD:
                return new h(e);
            case s.hes.GCASH:
                return new I(e);
            case s.hes.GRABPAY_MY:
                return new f(e);
            case s.hes.MOMO_WALLET:
                return new p(e);
            case s.hes.VENMO:
                return new T(e);
            case s.hes.KAKAOPAY:
                return new m(e);
            case s.hes.GOPAY_WALLET:
                return new g(e);
            case s.hes.BANCONTACT:
                return new S(e);
            case s.hes.EPS:
                return new E(e);
            case s.hes.IDEAL:
                return new A(e);
            case s.hes.CASH_APP:
                return new N(e);
            case s.hes.TDS_WALLET:
                return new R(e);
            case s.hes.PIX:
                return new O(e);
            default:
                (0, a.xb)(t);
        }
    }
    constructor(e) {
        if ((super(), !Object.values(s.hes).includes(e.type)))
            throw Error(`Unrecognized payment source type ${e.type}`);
        (this.id = e.id),
            (this.type = e.type),
            (this.paymentGateway = e.paymentGateway),
            (this.invalid = e.invalid ?? !1),
            (this.billingAddress = e.billingAddress ?? {}),
            (this.isDefault = e.isDefault),
            (this.flags = e.flags ?? 0),
            (this.country = e.country ?? ""),
            (this.pixMetadata = e.pixMetadata);
    }
    hasFlag(e) {
        return (0, i.Lt)(this.flags, e);
    }
    get paymentMethodCountry() {
        return null != this.country && "" !== this.country ? this.country : this.billingAddress.country;
    }
    canRedeemTrial() {
        return !s.OLI.has(this.type);
    }
}
class o extends l {
    brand;
    last4;
    expiresMonth;
    expiresYear;
    constructor(e) {
        if ((super(e), e.type !== s.hes.CARD))
            throw Error(`Cannot instantiate CreditCardSourceRecord with type: ${e.type}, must be ${s.hes.CARD}`);
        (this.brand = e.brand ?? ""),
            (this.last4 = e.last4 ?? ""),
            (this.expiresMonth = e.expiresMonth ?? 0),
            (this.expiresYear = e.expiresYear ?? 0);
    }
    get isStripeLinkBankAccount() {
        return "link" === this.brand && "0000" === this.last4;
    }
}
class d extends l {
    email;
    constructor(e) {
        if ((super(e), e.type !== s.hes.PAYPAL))
            throw Error(`Cannot instantiate PaypalSourceRecord with type: ${e.type}, must be ${s.hes.PAYPAL}`);
        this.email = e.email || "";
    }
}
class c extends l {
    email;
    constructor(e) {
        if ((super(e), e.type !== s.hes.SOFORT && e.type !== s.hes.SEPA_DEBIT))
            throw Error(
                `Cannot instantiate SofortSourceRecord with type: ${e.type}, must be ${s.hes.SOFORT} or ` +
                    s.hes.SEPA_DEBIT,
            );
        this.email = e.email || "";
    }
}
class u extends l {
    constructor(e) {
        if ((super(e), e.type !== s.hes.GIROPAY))
            throw Error(`Cannot instantiate GiropaySourceRecord with type: ${e.type}, must be ${s.hes.GIROPAY}`);
    }
}
class _ extends l {
    constructor(e) {
        if ((super(e), e.type !== s.hes.PRZELEWY24))
            throw Error(`Cannot instantiate Przelewy24SourceRecord with type: ${e.type}, must be ${s.hes.PRZELEWY24}`);
        (this.email = e.email || ""), (this.bank = e.bank);
    }
}
class E extends l {
    constructor(e) {
        if ((super(e), e.type !== s.hes.EPS))
            throw Error(`Cannot instantiate EPSSourceRecord with type: ${e.type}, must be ${s.hes.EPS}`);
        this.bank = e.bank;
    }
}
class A extends l {
    constructor(e) {
        if ((super(e), e.type !== s.hes.IDEAL))
            throw Error(`Cannot instantiate IdealSourceRecord with type: ${e.type}, must be ${s.hes.IDEAL}`);
        this.bank = e.bank;
    }
}
class h extends l {
    constructor(e) {
        if ((super(e), e.type !== s.hes.PAYSAFE_CARD))
            throw Error(`Cannot instantiate PaysafeSourceRecord with type: ${e.type}, must be ${s.hes.PAYSAFE_CARD}`);
    }
}
class I extends l {
    constructor(e) {
        if ((super(e), e.type !== s.hes.GCASH))
            throw Error(`Cannot instantiate GcashSourceRecord with type: ${e.type}, must be ${s.hes.GCASH}`);
    }
}
class f extends l {
    constructor(e) {
        if ((super(e), e.type !== s.hes.GRABPAY_MY))
            throw Error(`Cannot instantiate GrabPayMySourceRecord with type: ${e.type}, must be ${s.hes.GRABPAY_MY}`);
    }
}
class p extends l {
    constructor(e) {
        if ((super(e), e.type !== s.hes.MOMO_WALLET))
            throw Error(`Cannot instantiate MomoWalletSourceRecord with type: ${e.type}, must be ${s.hes.MOMO_WALLET}`);
    }
}
class T extends l {
    username;
    constructor(e) {
        if ((super(e), e.type !== s.hes.VENMO))
            throw Error(`Cannot instantiate VenmoSourceRecord with type: ${e.type}, must be ${s.hes.VENMO}`);
        this.username = e.username || "";
    }
}
class m extends l {
    constructor(e) {
        if ((super(e), e.type !== s.hes.KAKAOPAY))
            throw Error(`Cannot instantiate KaKaoPaySourceRecord with type: ${e.type}, must be ${s.hes.KAKAOPAY}`);
    }
}
class g extends l {
    constructor(e) {
        if ((super(e), e.type !== s.hes.GOPAY_WALLET))
            throw Error(
                `Cannot instantiate GoPayWalletSourceRecord with type: ${e.type}, must be ${s.hes.GOPAY_WALLET}`,
            );
    }
}
class S extends l {
    constructor(e) {
        if ((super(e), e.type !== s.hes.BANCONTACT))
            throw Error(`Cannot instantiate BancontactSourceRecord with type: ${e.type}, must be ${s.hes.BANCONTACT}`);
    }
}
class N extends l {
    username;
    constructor(e) {
        if ((super(e), e.type !== s.hes.CASH_APP))
            throw Error(`Cannot instantiate Cashapp with type: ${e.type}, must be ${s.hes.CASH_APP}`);
        this.username = e.username || "";
    }
}
class C extends l {
    constructor(e) {
        if (
            ((e.id = ""),
            (e.paymentGateway = s.kM_.APPLE_PARTNER),
            (e.type = s.hes.APPLE),
            (e.billingAddress = {}),
            (e.country = ""),
            (e.invalid = !1),
            (e.isDefault = !1),
            (e.flags = 0),
            super(e),
            e.type !== s.hes.APPLE)
        )
            throw Error(`Cannot instantiate AppleSourceRecord with type: ${e.type}, must be ${s.hes.APPLE}`);
    }
}
class R extends l {
    constructor(e) {
        if ((super(e), e.type !== s.hes.TDS_WALLET))
            throw Error(`Cannot instantiate TDSWalletSourceRecord with type: ${e.type}, must be ${s.hes.TDS_WALLET}`);
    }
}
class O extends l {
    constructor(e) {
        if ((super(e), e.type !== s.hes.PIX))
            throw Error(`Cannot instantiate PixSourceRecord with type: ${e.type}, must be ${s.hes.PIX}`);
        this.email = e.email;
    }
}
