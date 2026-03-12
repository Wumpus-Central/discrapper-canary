"use strict";
n.d(t, {
    A0: () => c,
    Ay: () => o,
    EE: () => p,
    FQ: () => y,
    F_: () => m,
    LQ: () => N,
    Pw: () => v,
    Qh: () => d,
    SJ: () => u,
    Tu: () => _,
    UG: () => S,
    Ux: () => h,
    Xj: () => E,
    YS: () => l,
    _1: () => A,
    am: () => g,
    cg: () => T,
    i6: () => I,
    rJ: () => f,
}),
    n(938796);
var r = n(665260),
    i = n(315069),
    s = n(403362),
    a = n(652215);
class o extends i.A {
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
            case a.hes.CARD:
                return new l({
                    ...n,
                    brand: e.brand,
                    last4: e.last_4,
                    expiresMonth: e.expires_month,
                    expiresYear: e.expires_year,
                });
            case a.hes.PAYPAL:
                return new u({ ...n, email: e.email });
            case a.hes.VENMO:
                return new A({ ...n, username: e.username });
            case a.hes.SEPA_DEBIT:
            case a.hes.SOFORT:
                return new c({ ...n, email: e.email });
            case a.hes.GIROPAY:
                return new d({ ...n });
            case a.hes.PRZELEWY24:
                return new _({ ...n, email: e.email, bank: e.bank });
            case a.hes.EPS:
                return new f({ ...n, bank: e.bank });
            case a.hes.PAYSAFE_CARD:
                return new h({ ...n });
            case a.hes.GCASH:
                return new m({ ...n });
            case a.hes.GRABPAY_MY:
                return new E({ ...n });
            case a.hes.MOMO_WALLET:
                return new g({ ...n });
            case a.hes.KAKAOPAY:
                return new I({ ...n });
            case a.hes.GOPAY_WALLET:
                return new T({ ...n });
            case a.hes.BANCONTACT:
                return new S({ ...n });
            case a.hes.IDEAL:
                return new p({ ...n, bank: e.bank });
            case a.hes.CASH_APP:
                return new y({ ...n, username: e.username });
            case a.hes.TDS_WALLET:
                return new N({ ...n });
            default:
                (0, s.xb)(e);
        }
    }
    static createFromSerialized(e) {
        let t = e.type;
        switch (t) {
            case a.hes.CARD:
                return new l(e);
            case a.hes.PAYPAL:
                return new u(e);
            case a.hes.SOFORT:
            case a.hes.SEPA_DEBIT:
                return new c(e);
            case a.hes.GIROPAY:
                return new d(e);
            case a.hes.PRZELEWY24:
                return new _(e);
            case a.hes.PAYSAFE_CARD:
                return new h(e);
            case a.hes.GCASH:
                return new m(e);
            case a.hes.GRABPAY_MY:
                return new E(e);
            case a.hes.MOMO_WALLET:
                return new g(e);
            case a.hes.VENMO:
                return new A(e);
            case a.hes.KAKAOPAY:
                return new I(e);
            case a.hes.GOPAY_WALLET:
                return new T(e);
            case a.hes.BANCONTACT:
                return new S(e);
            case a.hes.EPS:
                return new f(e);
            case a.hes.IDEAL:
                return new p(e);
            case a.hes.CASH_APP:
                return new y(e);
            case a.hes.TDS_WALLET:
                return new N(e);
            default:
                (0, s.xb)(t);
        }
    }
    constructor(e) {
        if ((super(), !Object.values(a.hes).includes(e.type)))
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
        return !a.OLI.has(this.type);
    }
}
class l extends o {
    brand;
    last4;
    expiresMonth;
    expiresYear;
    constructor(e) {
        if ((super(e), e.type !== a.hes.CARD))
            throw Error(`Cannot instantiate CreditCardSourceRecord with type: ${e.type}, must be ${a.hes.CARD}`);
        (this.brand = e.brand ?? ""),
            (this.last4 = e.last4 ?? ""),
            (this.expiresMonth = e.expiresMonth ?? 0),
            (this.expiresYear = e.expiresYear ?? 0);
    }
}
class u extends o {
    email;
    constructor(e) {
        if ((super(e), e.type !== a.hes.PAYPAL))
            throw Error(`Cannot instantiate PaypalSourceRecord with type: ${e.type}, must be ${a.hes.PAYPAL}`);
        this.email = e.email || "";
    }
}
class c extends o {
    email;
    constructor(e) {
        if ((super(e), e.type !== a.hes.SOFORT && e.type !== a.hes.SEPA_DEBIT))
            throw Error(
                `Cannot instantiate SofortSourceRecord with type: ${e.type}, must be ${a.hes.SOFORT} or ` +
                    a.hes.SEPA_DEBIT,
            );
        this.email = e.email || "";
    }
}
class d extends o {
    constructor(e) {
        if ((super(e), e.type !== a.hes.GIROPAY))
            throw Error(`Cannot instantiate GiropaySourceRecord with type: ${e.type}, must be ${a.hes.GIROPAY}`);
    }
}
class _ extends o {
    constructor(e) {
        if ((super(e), e.type !== a.hes.PRZELEWY24))
            throw Error(`Cannot instantiate Przelewy24SourceRecord with type: ${e.type}, must be ${a.hes.PRZELEWY24}`);
        (this.email = e.email || ""), (this.bank = e.bank);
    }
}
class f extends o {
    constructor(e) {
        if ((super(e), e.type !== a.hes.EPS))
            throw Error(`Cannot instantiate EPSSourceRecord with type: ${e.type}, must be ${a.hes.EPS}`);
        this.bank = e.bank;
    }
}
class p extends o {
    constructor(e) {
        if ((super(e), e.type !== a.hes.IDEAL))
            throw Error(`Cannot instantiate IdealSourceRecord with type: ${e.type}, must be ${a.hes.IDEAL}`);
        this.bank = e.bank;
    }
}
class h extends o {
    constructor(e) {
        if ((super(e), e.type !== a.hes.PAYSAFE_CARD))
            throw Error(`Cannot instantiate PaysafeSourceRecord with type: ${e.type}, must be ${a.hes.PAYSAFE_CARD}`);
    }
}
class m extends o {
    constructor(e) {
        if ((super(e), e.type !== a.hes.GCASH))
            throw Error(`Cannot instantiate GcashSourceRecord with type: ${e.type}, must be ${a.hes.GCASH}`);
    }
}
class E extends o {
    constructor(e) {
        if ((super(e), e.type !== a.hes.GRABPAY_MY))
            throw Error(`Cannot instantiate GrabPayMySourceRecord with type: ${e.type}, must be ${a.hes.GRABPAY_MY}`);
    }
}
class g extends o {
    constructor(e) {
        if ((super(e), e.type !== a.hes.MOMO_WALLET))
            throw Error(`Cannot instantiate MomoWalletSourceRecord with type: ${e.type}, must be ${a.hes.MOMO_WALLET}`);
    }
}
class A extends o {
    username;
    constructor(e) {
        if ((super(e), e.type !== a.hes.VENMO))
            throw Error(`Cannot instantiate VenmoSourceRecord with type: ${e.type}, must be ${a.hes.VENMO}`);
        this.username = e.username || "";
    }
}
class I extends o {
    constructor(e) {
        if ((super(e), e.type !== a.hes.KAKAOPAY))
            throw Error(`Cannot instantiate KaKaoPaySourceRecord with type: ${e.type}, must be ${a.hes.KAKAOPAY}`);
    }
}
class T extends o {
    constructor(e) {
        if ((super(e), e.type !== a.hes.GOPAY_WALLET))
            throw Error(
                `Cannot instantiate GoPayWalletSourceRecord with type: ${e.type}, must be ${a.hes.GOPAY_WALLET}`,
            );
    }
}
class S extends o {
    constructor(e) {
        if ((super(e), e.type !== a.hes.BANCONTACT))
            throw Error(`Cannot instantiate BancontactSourceRecord with type: ${e.type}, must be ${a.hes.BANCONTACT}`);
    }
}
class y extends o {
    username;
    constructor(e) {
        if ((super(e), e.type !== a.hes.CASH_APP))
            throw Error(`Cannot instantiate Cashapp with type: ${e.type}, must be ${a.hes.CASH_APP}`);
        this.username = e.username || "";
    }
}
class v extends o {
    constructor(e) {
        if (
            ((e.id = ""),
            (e.paymentGateway = a.kM_.APPLE_PARTNER),
            (e.type = a.hes.APPLE),
            (e.billingAddress = {}),
            (e.country = ""),
            (e.invalid = !1),
            (e.isDefault = !1),
            (e.flags = 0),
            super(e),
            e.type !== a.hes.APPLE)
        )
            throw Error(`Cannot instantiate AppleSourceRecord with type: ${e.type}, must be ${a.hes.APPLE}`);
    }
}
class N extends o {
    constructor(e) {
        if ((super(e), e.type !== a.hes.TDS_WALLET))
            throw Error(`Cannot instantiate TDSWalletSourceRecord with type: ${e.type}, must be ${a.hes.TDS_WALLET}`);
    }
}
