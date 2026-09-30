(n.d(t, { A: () => ta }), n(321073));
var i = n(477900),
    s = n(582128),
    l = n(503698),
    r = n.n(l),
    a = n(284009),
    o = n.n(a),
    u = n(837381),
    d = n(17928),
    c = n(689175),
    g = n(993077),
    m = n(289873),
    A = n(834730),
    h = n(228366),
    E = n(661439),
    S = n(73825),
    p = n(928039),
    x = n(277984),
    T = n(235986),
    f = n(408278),
    _ = n(921853),
    I = n(320448),
    N = n(375708),
    C = n(22306);
let b = s.forwardRef(function (e, t) {
    let { currentPageIndex: n, numPages: s, onChangePage: l, children: r, showPageCount: a = !0, ...o } = e,
        u = n >= s - 1,
        d = a
            ? N.intl.format(N.t.MtpIwg, { currentPage: n + 1, numPages: s })
            : N.intl.format(N.t.bKI77c, { currentPage: n + 1 });
    return (0, i.jsxs)("div", {
        ref: t,
        ...o,
        children: [
            r,
            (0, i.jsx)("div", {
                className: C.v,
                children: (0, i.jsxs)("div", {
                    className: C.U,
                    children: [
                        (0, i.jsx)(f.K, {
                            variant: "icon-only",
                            icon: _.n,
                            disabled: n <= 0,
                            onClick: () => l(n - 1),
                            "aria-label": N.intl.string(N.t.vgfxaA),
                        }),
                        (0, i.jsx)(A.E, { variant: "text-sm/medium", children: d }),
                        (0, i.jsx)(f.K, {
                            variant: "icon-only",
                            icon: I._,
                            disabled: u,
                            onClick: () => l(n + 1),
                            "aria-label": N.intl.string(N.t.XiOHRX),
                        }),
                    ],
                }),
            }),
        ],
    });
});
n(938796);
var y = n(334279),
    v = n(122817),
    j = n(665260),
    O = n(315069),
    L = n(32731),
    R = n(557009),
    D = n(570221),
    P = n(202613),
    G = n(243217),
    M = n(652215),
    U = n(202541);
class V extends O.A {
    id;
    createdAt;
    currency;
    tax;
    taxInclusive;
    amount;
    amountRefunded;
    status;
    description;
    hasInvoiceURL;
    hasRefundInvoiceURLs;
    downloadableInvoice;
    downloadableRefundInvoices;
    flags;
    paymentSource;
    paymentGateway;
    subscription;
    skuId;
    skuPrice;
    sku;
    premiumRefundDisqualificationReasons;
    entitlements;
    invoice;
    static createFromServer(e) {
        let t = null != e.payment_source ? P.Ay.createFromServer(e.payment_source) : null,
            n = null != e.sku ? L.A.createFromServer(e.sku) : null,
            i = null != e.subscription ? G.A.createFromServer(e.subscription) : null;
        return new V({
            id: e.id,
            createdAt: new Date(e.created_at),
            currency: e.currency,
            tax: e.tax,
            taxInclusive: e.tax_inclusive,
            amount: e.amount,
            amountRefunded: e.amount_refunded,
            status: e.status,
            metadata: e.metadata,
            description: e.description,
            paymentSource: t,
            paymentGateway: e.payment_gateway,
            flags: e.flags,
            subscription: i,
            skuId: e.sku_id,
            skuPrice: e.sku_price,
            sku: n,
            downloadableInvoice: e.downloadable_invoice,
            downloadableRefundInvoices: e.downloadable_refund_invoices,
            hasInvoiceURL: e.has_invoice_url,
            hasRefundInvoiceURLs: e.has_refund_invoice_urls,
            premiumRefundDisqualificationReasons: e.premium_refund_disqualification_reasons,
            entitlements: null != e.entitlements ? e.entitlements.map((e) => R.A.createFromServer(e)) : void 0,
            invoice: null != e.invoice ? D.Y.createFromServer(e.invoice) : null,
        });
    }
    constructor(e) {
        (super(),
            (this.id = e.id),
            (this.amount = e.amount),
            (this.amountRefunded = e.amountRefunded),
            (this.createdAt = e.createdAt),
            (this.currency = e.currency),
            (this.description = e.description),
            (this.paymentSource = e.paymentSource),
            (this.paymentGateway = e.paymentGateway),
            (this.status = e.status),
            (this.tax = e.tax),
            (this.taxInclusive = e.taxInclusive),
            (this.subscription = e.subscription),
            (this.skuId = e.skuId),
            (this.skuPrice = e.skuPrice),
            (this.sku = e.sku),
            (this.flags = e.flags),
            (this.downloadableInvoice = e.downloadableInvoice),
            (this.downloadableRefundInvoices = e.downloadableRefundInvoices),
            (this.hasInvoiceURL = e.hasInvoiceURL),
            (this.hasRefundInvoiceURLs = e.hasRefundInvoiceURLs),
            (this.premiumRefundDisqualificationReasons = e.premiumRefundDisqualificationReasons),
            (this.entitlements = e.entitlements),
            (this.invoice = e.invoice));
    }
    get isPurchasedViaApple() {
        return this.paymentGateway === M.kM_.APPLE;
    }
    get isPurchasedViaGoogle() {
        return this.paymentGateway === M.kM_.GOOGLE;
    }
    get isPurchasedExternally() {
        return this.isPurchasedViaApple || this.isPurchasedViaGoogle;
    }
    get isSubscription() {
        return null != this.subscription;
    }
    get isPremiumSubscription() {
        return null != this.subscription && U.JM.has(this.subscription.planId);
    }
    get isPremiumGuildSubscription() {
        return (
            null != this.subscription &&
            null !=
                this.subscription.additionalPlans.find((e) => {
                    let { planId: t } = e;
                    return U.pW.has(t);
                })
        );
    }
    get isGift() {
        return j.Lt(this.flags, 1);
    }
    get isPremiumGift() {
        return this.isGift && Object.values(U.pe).includes(this.skuId);
    }
    get isGuildProductPurchase() {
        return (
            null != this.sku &&
            (this.sku.productLine === M.EZt.GUILD_PRODUCT || j.Lt(this.sku.flags, v.d.GUILD_PRODUCT))
        );
    }
    get isSoftDeletedProduct() {
        return this.sku?.deleted === !0;
    }
    get isCollectible() {
        return null != this.sku && this.sku.productLine === M.EZt.COLLECTIBLES;
    }
    get isFractionalPremium() {
        return null != this.skuId && y.I.ALL.has(this.skuId);
    }
    get isShopPurchase() {
        return this.isCollectible || this.isFractionalPremium;
    }
}
let k = [],
    w = !1;
function F(e) {
    let { payment: t } = e,
        n = V.createFromServer(t),
        i = k.findIndex((e) => e.id === t.id);
    (-1 === i ? (k.push(n), k.sort((e, t) => t.createdAt.getTime() - e.createdAt.getTime())) : (k[i] = n),
        (k = [...k]));
}
class B extends d.Ay.Store {
    static displayName = "PaymentStore";
    getPayment(e) {
        return k.find((t) => t.id === e);
    }
    getPayments() {
        return k;
    }
    get hasFetchedPayments() {
        return w;
    }
}
let z = new B(h.h, {
    BILLING_PAYMENTS_FETCH_SUCCESS: function (e) {
        let { payments: t } = e;
        for (let e of ((w = !0), t)) {
            let t = V.createFromServer(e),
                n = k.findIndex((t) => t.id === e.id);
            -1 !== n ? (k[n] = t) : k.push(t);
        }
        (k.sort((e, t) => t.createdAt.getTime() - e.createdAt.getTime()), (k = [...k]));
    },
    BILLING_PAYMENTS_FETCH_FAIL: function () {
        w = !0;
    },
    PAYMENT_UPDATE: F,
    BILLING_PAYMENT_FETCH_SUCCESS: F,
    LOGOUT: function () {
        ((k = []), (w = !1));
    },
});
var X = n(97352),
    Y = n(166403),
    H = n(158045),
    K = n(536637),
    W = n.n(K),
    Z = n(661531),
    q = n(821609),
    Q = n(866665),
    J = n(939249),
    $ = n(403581),
    ee = n(331322),
    et = n(707554),
    en = n(789645),
    ei = n(933832),
    es = n(28863),
    el = n(34188),
    er = n(597770),
    ea = n(512950),
    eo = n(975807),
    eu = n(793574),
    ed = n(688810),
    ec = n(206828),
    eg = n(587895),
    em = n(636537),
    eA = n(683071),
    eh = n(192308);
let eE = function (e, t) {
    (0, eh.openModalLazy)(async () => {
        let { default: s } = await Promise.all([n.e("407755"), n.e("234138")]).then(n.bind(n, 206049));
        return (n) => (0, i.jsx)(s, { payment: e, paymentSource: t, ...n });
    });
};
var eS = n(818348),
    ep = n(460103);
async function ex(e) {
    try {
        return (
            await em.Bo.get({
                url: M.Rsh.BILLING_INVOICE_BREAKDOWN,
                query: { payment_id: e },
                oldFormErrors: !0,
                rejectWithError: !1,
            })
        ).body;
    } catch (e) {
        throw e;
    }
}
function eT(e) {
    let { payment: t } = e,
        [n, l] = s.useState(null),
        [r, a] = s.useState(null);
    async function o(e) {
        try {
            let n = await ex(t.id);
            l(n);
            let i = e ? n.refundInvoiceLinks[0] : n.invoiceLink;
            (window.open(i, "_blank"), a(null));
        } catch (e) {
            a(e.body?.message);
        }
    }
    let u = null != t.paymentSource && t.status === eS.__.COMPLETED,
        d = n?.invoiceLink,
        c = n?.refundInvoiceLinks;
    return t.hasInvoiceURL && null == n
        ? (0, i.jsxs)("div", {
              className: ep.It,
              children: [
                  (0, i.jsx)(es.Anchor, { onClick: () => o(!1), children: N.intl.formatToPlainString(N.t.R0xzCN, {}) }),
                  t.hasRefundInvoiceURLs
                      ? (0, i.jsx)(es.Anchor, {
                            className: ep.oe,
                            onClick: () => o(!0),
                            children: N.intl.formatToPlainString(N.t["3x6NGw"], {}),
                        })
                      : null,
                  null != r && "" !== r && (0, i.jsx)(eA.w, { type: "critical", children: r }),
              ],
          })
        : t.hasInvoiceURL && null != n
          ? (0, i.jsxs)("div", {
                className: ep.It,
                children: [
                    (0, i.jsx)(es.Anchor, { href: d, children: N.intl.formatToPlainString(N.t.R0xzCN, {}) }),
                    null != c
                        ? c.map((e, t) =>
                              (0, i.jsx)(
                                  es.Anchor,
                                  {
                                      className: ep.oe,
                                      href: e,
                                      children: N.intl.formatToPlainString(N.t["3x6NGw"], {}),
                                  },
                                  t,
                              ),
                          )
                        : null,
                    null != r && "" !== r && (0, i.jsx)(eA.w, { type: "critical", children: r }),
                ],
            })
          : u
            ? (0, i.jsx)("div", {
                  className: ep.It,
                  children: (0, i.jsx)(es.Anchor, {
                      onClick: () => {
                          var e;
                          ((e = t.paymentSource), eE(t, e));
                      },
                      children: N.intl.formatToPlainString(N.t.onRIxS, {}),
                  }),
              })
            : null;
}
var ef = n(769015),
    e_ = n(250627),
    eI = n(871109),
    eN = n(571654),
    eC = n(411342),
    eb = n(179499),
    ey = n(741231),
    ev = n(95035),
    ej = n(576243),
    eO = n(337095),
    eL = n(871123),
    eR = n(510022),
    eD = n(68935),
    eP = n(148355),
    eG = n(780964),
    eM = n(830543),
    eU = n(766075),
    eV = n(106799),
    ek = n(317525),
    ew = n(71393),
    eF = n(287809),
    eB = n(295405),
    ez = n(90165),
    eX = n(147925),
    eY = n(174459),
    eH = n(957565),
    eK = n(58703),
    eW = n(580630),
    eZ = n(427262),
    eq = n(219887);
let eQ = (e) => `https://${M.XlF}/hc/${e.toLowerCase()}/requests/new?ticket_form_id=360000118612`,
    eJ = [M.Puh.DURABLE_PRIMARY, M.Puh.DURABLE, M.Puh.CONSUMABLE],
    e$ = [M.__0.FAILED, M.__0.REVERSED, M.__0.CANCELED],
    e0 = [eS.kM.APPLE],
    e1 = [M.hes.PAYSAFE_CARD],
    e2 = new Set([eS.kM.STRIPE, eS.kM.BRAINTREE, eS.kM.ADYEN]);
function e3(e) {
    return e.find((e) => null != e.paymentGateway && e2.has(e.paymentGateway)) ?? e[0];
}
function e5(e) {
    let { description: t, cost: n } = e;
    return (0, i.jsx)("li", {
        className: ep.mg,
        children: (0, i.jsxs)(T.A, {
            justify: T.A.Justify.BETWEEN,
            children: [(0, i.jsx)("div", { children: t }), (0, i.jsx)("div", { children: n })],
        }),
    });
}
function e4(e) {
    let { value: t, copyText: n, copyFeedbackText: l } = e,
        [r, a] = s.useState(!1),
        [o, u] = s.useState(!1);
    return (0, i.jsx)(Q.m, {
        forceOpen: o,
        text: r ? l : n,
        children: (0, i.jsx)(J.D, {
            onMouseEnter: () => {
                r && a(!1);
            },
            onMouseLeave: () => {
                u(!1);
            },
            onClick: function () {
                (0, eH.C)(t, () => {
                    (u(!0), a(!0));
                });
            },
            children: (0, i.jsx)("div", { className: ep.l9, children: t }),
        }),
    });
}
function e6(e) {
    let { description: t, detail: n } = e;
    return (0, i.jsx)("li", {
        className: ep.Iu,
        children: (0, i.jsxs)(T.A, {
            justify: T.A.Justify.BETWEEN,
            children: [(0, i.jsx)("div", { children: t }), (0, i.jsx)("div", { children: n })],
        }),
    });
}
function e8(e) {
    let { guildId: t, guildProductListingId: n } = e,
        l = (0, e_.Qi)(t, n, { requireCurrentGuild: !1 }),
        r = (0, eN.z)(l),
        a = (0, d.bG)([ew.A], () => ew.A.getGuild(t)),
        o = l?.role_id != null && l?.attachments_count === 0 ? N.intl.string(N.t.H11qcT) : r,
        u = s.useCallback(async () => {
            (a?.features.has(M.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE)
                ? await (0, ey.A)(M.BVt.GUILD_PRODUCT(t, n))
                : await (0, ey.A)(M.BVt.CHANNEL(t)),
                (0, eM.default)());
        }, [a, t, n]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != o && (0, i.jsx)(e6, { description: N.intl.string(N.t.lXPbJb), detail: o }),
            null != a &&
                (0, i.jsx)(e6, {
                    description: N.intl.string(N.t.Wpn8z8),
                    detail: (0, i.jsx)(ev.A, { onClick: u, children: a.name }),
                }),
        ],
    });
}
function e7(e) {
    let { guildId: t, guildProductListingId: n } = e,
        s = (0, e_.Qi)(t, n, { requireCurrentGuild: !1 }),
        l = (0, d.bG)([eI.A], () => eI.A.getGuildProductFetchState(n) === eI.e.FETCHING),
        r = s?.role_id,
        a = (0, d.bG)([ek.A], () => (null != r ? ek.A.getRole(t, r) : void 0), [t, r]),
        o = (0, eb.A)({ guildId: t, productId: n }),
        u = (s?.attachments?.length ?? 0) > 0,
        c = null != a;
    return l
        ? (0, i.jsx)("div", { className: ep.hT, children: (0, i.jsx)(m.y, {}) })
        : null != s && (u || c)
          ? (0, i.jsxs)("div", {
                className: ep.hT,
                children: [
                    u &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(A.E, {
                                    variant: "text-xs/semibold",
                                    color: "text-default",
                                    className: ep.yE,
                                    children: N.intl.string(N.t.hxawoy),
                                }),
                                (0, i.jsx)(q.$, { ...o }),
                            ],
                        }),
                    c &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                u && (0, i.jsx)("div", { className: ep.yF }),
                                (0, i.jsx)(A.E, {
                                    variant: "text-xs/semibold",
                                    color: "text-default",
                                    className: ep.yE,
                                    children: N.intl.string(N.t.gWBNet),
                                }),
                                (0, i.jsx)(eC.A, { role: a }),
                            ],
                        }),
                ],
            })
          : null;
}
function e9(e) {
    let { withGradient: t, compactMode: n } = e,
        s = n ? 28 : 16;
    return t
        ? (0, i.jsx)(ej.A, { size: n ? 40 : 24, iconSize: s, color: Z.A.unsafe_rawColors.NEUTRAL_1, className: ep.Sy })
        : (0, i.jsx)("div", {
              className: r()(ep.Sy, ep.uX, n ? ep.vU : ep.Xr),
              children: (0, i.jsx)($.t, { size: "custom", width: s, height: s, color: Z.A.colors.ICON_DEFAULT }),
          });
}
class te extends s.PureComponent {
    static defaultProps = { compactMode: !1 };
    state = { expanded: !1 };
    refundRules = [
        { rule: "PURCHASE_DATE", canRefund: () => this.daysSincePurchase <= 5 },
        {
            rule: "SKU_TYPE",
            canRefund: () => {
                let e = this.receiptPayment;
                return null == e.sku || e.sku.type !== M.Puh.CONSUMABLE;
            },
        },
        { rule: "ALREADY_REFUNDED", canRefund: () => this.purchaseAmountRefunded < this.purchaseAmount },
        {
            rule: "PAYMENT_STATUS",
            canRefund: () => {
                let e = this.receiptPayment;
                return !e$.includes(e.status);
            },
        },
        {
            rule: "PAYMENT_GATEWAY",
            canRefund: () => {
                let e = this.receiptPayment;
                return null == e.paymentGateway || !e0.includes(e.paymentGateway);
            },
        },
        {
            rule: "PAYMENT_SOURCE",
            canRefund: () => {
                let e = this.receiptPayment;
                return null == e.paymentSource || !e1.includes(e.paymentSource.type);
            },
        },
        {
            rule: "SKU_STICKER_PACK",
            canRefund: () => {
                let e = this.receiptPayment;
                return null == e.sku || !(0, j.Lt)(e.sku.flags, M.d68.STICKER);
            },
        },
        {
            rule: "SUBSCRIPTION_TYPE",
            canRefund: () => {
                let e = this.receiptPayment;
                return e.subscription?.type !== M.rzx.GUILD && e.subscription?.type !== M.rzx.APPLICATION;
            },
        },
        {
            rule: "GUILD_PRODUCT",
            canRefund: () => {
                let e = this.receiptPayment;
                return null == e.sku || !(0, j.Lt)(e.sku.flags, v.d.GUILD_PRODUCT);
            },
        },
        { rule: "COLLECTIBLE", canRefund: () => !this.receiptPayment.isShopPurchase },
    ];
    get daysSincePurchase() {
        let e = this.receiptPayment,
            t = null != e.sku ? e.sku.releaseDate : null,
            n = null != t && t.isAfter(e.createdAt) ? t : e.createdAt;
        return W()().diff(n, "days");
    }
    get receiptPayment() {
        return e3(this.props.payments);
    }
    get purchaseAmount() {
        return this.props.payments.reduce((e, t) => e + t.amount, 0);
    }
    get purchaseAmountRefunded() {
        return this.props.payments.reduce((e, t) => e + t.amountRefunded, 0);
    }
    get purchaseTax() {
        let { invoice: e } = this.receiptPayment;
        return null != e && this.purchaseAmount === e.total
            ? e.tax
            : this.props.payments.reduce((e, t) => e + t.tax, 0);
    }
    handleExpandInfo = () => {
        this.setState({ expanded: !this.state.expanded });
    };
    validateRefundRules() {
        return this.refundRules
            .filter((e) => {
                let { canRefund: t } = e;
                return !t();
            })
            .map((e) => {
                let { rule: t } = e;
                return t;
            });
    }
    renderDefaultStatus() {
        switch (this.receiptPayment.status) {
            case M.__0.PENDING:
                return (0, i.jsx)("span", { className: ep.Xg, children: N.intl.string(N.t.y7F0Re) });
            case M.__0.FAILED:
                return (0, i.jsx)("span", { className: ep.ob, children: N.intl.string(N.t.Yo4ru6) });
            case M.__0.REVERSED:
                return (0, i.jsx)("span", { className: ep.ob, children: N.intl.string(N.t.YQv9Li) });
            case M.__0.CANCELED:
                return (0, i.jsx)("span", { className: ep.ob, children: N.intl.string(N.t.ttkBhy) });
        }
        return this.props.payments.some((e) => e.status === M.__0.REFUNDED)
            ? this.purchaseAmountRefunded !== this.purchaseAmount
                ? (0, i.jsx)("span", { className: ep.gD, children: N.intl.string(N.t.lYbZzz) })
                : (0, i.jsx)("span", { className: ep.gD, children: N.intl.string(N.t.ZBb6NK) })
            : null;
    }
    renderTenantStatusOverride() {
        let { hasLinkedToApplication: e } = this.props,
            t = this.receiptPayment;
        if (!(0, eL.bF)(t.sku) || t.status !== M.__0.COMPLETED) return null;
        let n = t.entitlements ?? [];
        return t.isGift
            ? n.some((e) => null != e.gifterId)
                ? (0, i.jsx)("span", { className: ep.gD, children: N.intl.string(N.t.lIsIFo) })
                : (0, i.jsx)("span", { className: ep.Tf, children: N.intl.string(N.t["+tqSi3"]) })
            : n.some((e) => e.isFulfilled())
              ? (0, i.jsx)("span", { className: ep.gD, children: N.intl.string(N.t.Osji1u) })
              : n.some((e) => e.isFulfillmentFailed())
                ? (0, i.jsx)("span", { className: ep.ob, children: N.intl.string(N.t.Yo4ru6) })
                : e
                  ? (0, i.jsx)("span", { className: ep.Tf, children: N.intl.string(N.t.y7F0Re) })
                  : (0, i.jsx)("span", { className: ep.Tf, children: N.intl.string(N.t.HHC5Z4) });
    }
    renderStatus() {
        return this.renderTenantStatusOverride() ?? this.renderDefaultStatus();
    }
    renderAmount(e) {
        let t = this.receiptPayment;
        return t.currency === eS.Yr.DISCORD_ORB
            ? (0, i.jsxs)("span", {
                  className: ep.db,
                  children: [
                      (0, i.jsx)(eV.A, { customSize: 16, shouldUseThemeColor: !0 }),
                      N.intl.formatToPlainString(N.t.YMor7k, { count: e }),
                  ],
              })
            : (0, eW.$g)(e, t.currency);
    }
    renderPrice() {
        let e = this.purchaseAmount - this.purchaseAmountRefunded;
        return (0, i.jsx)("span", { className: ep.q9, children: this.renderAmount(e) });
    }
    renderPaymentIdField() {
        let e = this.receiptPayment;
        return (0, i.jsx)("li", {
            className: ep.mg,
            children: (0, i.jsxs)("div", {
                className: ep.bx,
                children: [
                    (0, i.jsx)("div", { children: N.intl.string(N.t["UQim+r"]) }),
                    (0, i.jsx)(e4, {
                        value: e.id,
                        copyText: N.intl.string(N.t["Mdk9+A"]),
                        copyFeedbackText: N.intl.string(N.t["7eIrA2"]),
                    }),
                ],
            }),
        });
    }
    renderPaymentSource(e) {
        let t =
            null != e.paymentSource ? e.paymentSource : e.paymentGateway === eS.kM.APPLE_PARTNER ? new P.Pw({}) : null;
        return null == t
            ? null
            : (0, i.jsx)(eq.A, {
                  paymentSource: t,
                  locale: this.props.locale,
                  descriptionClassName: ep.iL,
                  showLabels: !0,
                  showPaymentSourceIcon: !0,
              });
    }
    renderPaymentSources() {
        let { payments: e } = this.props;
        return e.length <= 1
            ? this.renderPaymentSource(this.receiptPayment)
            : (0, i.jsx)(ee.B, {
                  children: [...e]
                      .sort((e, t) => e.createdAt.getTime() - t.createdAt.getTime())
                      .map((e) =>
                          (0, i.jsxs)(
                              T.A,
                              {
                                  justify: T.A.Justify.BETWEEN,
                                  align: T.A.Align.CENTER,
                                  children: [
                                      this.renderPaymentSource(e),
                                      (0, i.jsx)(A.E, {
                                          variant: "text-md/normal",
                                          color: "text-subtle",
                                          children: this.renderAmount(e.amount),
                                      }),
                                  ],
                              },
                              e.id,
                          ),
                      ),
              });
    }
    renderPaymentBreakdown() {
        let { application: e } = this.props,
            t = this.receiptPayment,
            { taxInclusive: n } = t,
            l = this.purchaseTax,
            a = this.purchaseAmount,
            o = this.purchaseAmountRefunded,
            u = e?.guildId;
        return (0, i.jsxs)("div", {
            className: r()(ep.iL, ep.W),
            children: [
                this.renderPaymentSources(),
                (0, i.jsxs)("ul", {
                    children: [
                        !n && l > 0
                            ? (0, i.jsxs)(s.Fragment, {
                                  children: [
                                      (0, i.jsx)(e5, { description: t.description, cost: this.renderAmount(a - l) }),
                                      (0, i.jsx)(e5, {
                                          description: N.intl.string(N.t.QgWXht),
                                          cost: this.renderAmount(l),
                                      }),
                                  ],
                              })
                            : null,
                        (0, i.jsx)(e5, { description: N.intl.string(N.t.txajQG), cost: this.renderAmount(a) }),
                        o > 0 &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(e5, {
                                        description: N.intl.string(N.t["A+I0AP"]),
                                        cost: this.renderAmount(o),
                                    }),
                                    (0, i.jsx)(e5, {
                                        description: N.intl.string(N.t.xER6Wi),
                                        cost: this.renderAmount(a - o),
                                    }),
                                ],
                            }),
                        this.renderPaymentIdField(),
                        t.isGuildProductPurchase &&
                            null != u &&
                            null != t.sku &&
                            (0, i.jsx)(e8, { guildId: u, guildProductListingId: t.sku.id }),
                    ],
                }),
            ],
        });
    }
    renderInvoiceDownload() {
        let e = this.receiptPayment;
        return (0, i.jsx)(eT, { payment: e });
    }
    renderAdditionalGameItemDetails() {
        let {
                claimedGiftUser: e,
                hasLinkedToApplication: t,
                application: n,
                locale: l,
                analyticsLocations: r,
            } = this.props,
            a = this.receiptPayment,
            o = a.entitlements?.some((e) => e.isFulfilled());
        return a.status === M.__0.REFUNDED
            ? (0, i.jsxs)(s.Fragment, {
                  children: [
                      (0, i.jsx)(et.H, { className: ep.mW, children: N.intl.string(N.t["gIGB/A"]) }),
                      (0, i.jsx)("div", {
                          className: ep.iL,
                          children:
                              null != e
                                  ? N.intl.format(N.t.Q1K9eg, { username: eZ.Ay.getName(e) })
                                  : N.intl.format(N.t.IBtGwC, { applicationName: n?.name }),
                      }),
                  ],
              })
            : a.isGift
              ? (0, i.jsxs)(s.Fragment, {
                    children: [
                        (0, i.jsx)(et.H, { className: ep.mW, children: N.intl.string(N.t["gIGB/A"]) }),
                        (0, i.jsx)("div", {
                            className: ep.iL,
                            children:
                                null != e
                                    ? N.intl.format(N.t.vfUW65, { username: eZ.Ay.getName(e) })
                                    : N.intl.string(N.t["18wIqp"]),
                        }),
                        null == e &&
                            (0, i.jsx)("div", {
                                className: ep.TP,
                                children: (0, i.jsx)(q.$, {
                                    variant: "primary",
                                    text: N.intl.string(N.t["jcSP+g"]),
                                    onClick: () => (0, eU.openUserSettings)(eG.X.GIFT_PANEL),
                                }),
                            }),
                    ],
                })
              : o
                ? null
                : (0, i.jsxs)(s.Fragment, {
                      children: [
                          (0, i.jsx)(et.H, { className: ep.mW, children: N.intl.string(N.t["gIGB/A"]) }),
                          (0, i.jsx)("div", {
                              className: ep.iL,
                              children: t
                                  ? N.intl.format(N.t.DQQCAw, { applicationName: n?.name, skuName: a.sku?.name })
                                  : N.intl.format(N.t.ED2BqF, { applicationName: n?.name, skuName: a.sku?.name }),
                          }),
                          (0, i.jsx)("div", {
                              className: ep.TP,
                              children: t
                                  ? (0, i.jsx)(q.$, {
                                        variant: "primary",
                                        text: N.intl.string(N.t.zoztQA),
                                        onClick: () => (0, eo.A)(eQ(l)),
                                    })
                                  : (0, i.jsx)(q.$, {
                                        variant: "primary",
                                        text: N.intl.string(N.t["jCqvk/"]),
                                        onClick: () => {
                                            null != a.sku &&
                                                null != n &&
                                                (eY.default.track(
                                                    M.HAw.PAYMENT_HISTORY_CONNECT_ACCOUNT_BUTTON_CLICKED,
                                                    { sku_id: a.sku.id, application_id: n.id, location_stack: r },
                                                ),
                                                (0, eR.n)({ sku: a.sku, application: n, analyticsLocations: r }));
                                        },
                                    }),
                          }),
                      ],
                  });
    }
    renderAdditionalTenantInfo() {
        let e = this.receiptPayment;
        if ((0, eL.bF)(e.sku)) return this.renderAdditionalGameItemDetails();
    }
    renderRefundDetails() {
        let e,
            { locale: t } = this.props,
            n = this.receiptPayment,
            l = this.validateRefundRules();
        if (
            l.includes("PAYMENT_GATEWAY") ||
            l.includes("PAYMENT_SOURCE") ||
            l.includes("PAYMENT_STATUS") ||
            l.includes("ALREADY_REFUNDED") ||
            l.includes("SKU_STICKER_PACK") ||
            l.includes("SUBSCRIPTION_TYPE") ||
            l.includes("GUILD_PRODUCT")
        )
            return null;
        let r = 0 === l.length,
            a = eQ(t);
        return (
            (e =
                l.includes("SKU_TYPE") && !n.isShopPurchase
                    ? N.intl.format(N.t["5lvoVS"], { supportURL: a })
                    : r
                      ? n.isPremiumSubscription || n.isPremiumGuildSubscription
                          ? N.intl.format(N.t.EPYteX, { dateLimit: 5, supportURL: a })
                          : n.isGift
                            ? N.intl.format(N.t["16eP/L"], { dateLimit: 5, supportURL: a })
                            : N.intl.format(N.t["1LDI4J"], { dateLimit: 5, playtimeLimit: 2, supportURL: a })
                      : n.isShopPurchase
                        ? N.intl.string(N.t.s9TZM1)
                        : n.isGift
                          ? N.intl.formatToPlainString(N.t.owlOWc, { dateLimit: 5 })
                          : n.isPremiumSubscription || n.isPremiumGuildSubscription
                            ? N.intl.formatToPlainString(N.t.dk7vyL, { dateLimit: 5 })
                            : N.intl.formatToPlainString(N.t.s4Kk0C, { dateLimit: 5, playtimeLimit: 2 })),
            (0, i.jsxs)(s.Fragment, {
                children: [
                    (0, i.jsx)(et.H, { className: ep.mW, children: N.intl.string(N.t["n/27pr"]) }),
                    (0, i.jsxs)("div", {
                        className: ep.iL,
                        children: [(0, i.jsx)("div", { children: e }), this.renderRefundActions(l)],
                    }),
                ],
            })
        );
    }
    renderRefundCriteria(e, t, n, s) {
        return (0, i.jsxs)(
            "div",
            {
                className: ep._Z,
                children: [
                    (0, i.jsx)(et.H, { className: ep.ud, children: e }),
                    (0, i.jsxs)("div", {
                        className: ep.z9,
                        children: [
                            (0, i.jsx)(t, { className: ep.xb, color: "currentColor" }),
                            null != n && (0, i.jsx)("div", { children: n }),
                        ],
                    }),
                ],
            },
            s,
        );
    }
    renderRefundActions(e) {
        let { locale: t } = this.props,
            n = this.receiptPayment;
        if (e.includes("SKU_TYPE")) return null;
        let s = e.includes("PURCHASE_DATE") ? en.P : ei.CheckmarkLargeIcon;
        return (0, i.jsxs)("div", {
            className: ep.My,
            children: [
                (0, i.jsx)("div", {
                    className: ep.Kf,
                    children:
                        !n.isShopPurchase &&
                        this.renderRefundCriteria(
                            N.intl.string(N.t.H0RNz4),
                            s,
                            N.intl.formatToPlainString(N.t["7dtXa/"], { daysSincePurchase: this.daysSincePurchase }),
                        ),
                }),
                (0, i.jsx)(es.Anchor, { href: eQ(t), children: N.intl.string(N.t.re5nOB) }),
            ],
        });
    }
    renderDescription() {
        let e,
            t,
            { compactMode: n, application: l, guild: r, stickerPack: a, plan: o } = this.props,
            u = this.receiptPayment,
            { expanded: d } = this.state,
            c = u.sku,
            g = u.subscription,
            m = null != u.paymentSource && M.AD1.has(u.paymentSource.type);
        if (null != g && 0 !== g.items.length) {
            let s = [],
                a = null;
            if (g.type === M.rzx.PREMIUM) {
                let t;
                if (
                    (g.items.forEach((e) => {
                        let { planId: n, quantity: i } = e;
                        ((0, H.xq)(n)
                            ? (s.push(H.Ay.getDisplayName(n, !1, m)), (a = (0, H.mH)(U.hd[n].skuId)))
                            : (s.push(`${i > 1 ? `${i}x ` : ""}${H.Ay.getDisplayName(n, !1, m)}`),
                              null == a && (a = (0, H.mH)(U.hd[n].skuId))),
                            (0, H.z4)(n) || (t ??= n));
                    }),
                    null != t)
                ) {
                    let s = H.Ay.getPremiumType(t);
                    e = (0, i.jsx)(e9, { withGradient: s === U.PremiumTypes.TIER_2, compactMode: n });
                }
            } else if (g.type === M.rzx.GUILD) {
                if (null != o) {
                    let e = o.interval === U.WT.YEAR ? N.t.V6UFQM : N.t["6oq128"];
                    (s.push(N.intl.format(e, { planName: o.name })), (a = o.skuId));
                }
            } else
                g.type === M.rzx.APPLICATION
                    ? (null != o && (a = o.skuId),
                      null != l
                          ? s.push(N.intl.formatToPlainString(N.t["0wL/VI"], { tier: c?.name }))
                          : s.push(N.intl.string(N.t["9czSYu"])))
                    : g.type;
            ((t = 0 !== s.length ? s.join(", ") : u.description),
                null == e &&
                    (e = (0, i.jsx)(ef.A, {
                        className: ep.Sy,
                        guildClassName: ep.zA,
                        game: l,
                        guild: r,
                        size: ef.M.XSMALL,
                        skuId: a ?? c?.id,
                    })));
        } else if (null != c) {
            if (u.isGuildProductPurchase && u.isSoftDeletedProduct) t = N.intl.string(N.t.O7uLmw);
            else {
                t = c.name;
                let e = u.invoice;
                if (null != e) {
                    let n = e.getInvoicePreviewLineItemForSku(c.id);
                    null != n && (t = n.description);
                }
            }
            if (null != a) {
                let t = (0, eD.Id)(a);
                e = (0, i.jsx)(eP.A, {
                    disableAnimation: !d,
                    isInteracting: d,
                    sticker: t,
                    className: ep.Sy,
                    size: 24,
                });
            } else
                e = u.isFractionalPremium
                    ? (0, i.jsx)(e9, { withGradient: !0, compactMode: n })
                    : u.isCollectible
                      ? (0, i.jsx)(el.U, {
                            size: "custom",
                            width: 23,
                            height: 23,
                            color: "currentColor",
                            className: ep.sV,
                        })
                      : (0, i.jsx)(ef.A, {
                            className: ep.Sy,
                            guildClassName: ep.zA,
                            game: l,
                            guild: r,
                            size: ef.M.XSMALL,
                            skuId: c.id,
                        });
        } else ((e = (0, i.jsx)(e9, { withGradient: !1, compactMode: n })), (t = u.description));
        let h = (0, i.jsx)(A.E, {
                variant: "text-sm/normal",
                className: ep.p6,
                children: (0, eK.i$)(W()(u.createdAt), "MM/DD/YYYY"),
            }),
            E = u.isGift
                ? (0, i.jsx)(Q.m, {
                      text: N.intl.string(N.t.QddTpm),
                      children: (0, i.jsx)(er.GiftIcon, { size: "md", color: "currentColor", className: ep.ez }),
                  })
                : null;
        return n
            ? (0, i.jsxs)("div", { className: ep.h_, children: [e, (0, i.jsxs)("div", { children: [t, h] }), E] })
            : (0, i.jsxs)(s.Fragment, {
                  children: [
                      h,
                      (0, i.jsxs)("div", { className: ep.h_, children: [e, (0, i.jsx)("div", { children: t }), E] }),
                  ],
              });
    }
    renderGuildProductBenefits() {
        let { application: e, locale: t } = this.props,
            n = this.receiptPayment,
            s = e?.guildId;
        return n.isGuildProductPurchase
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)("div", { className: ep.ts }),
                      n.isSoftDeletedProduct
                          ? (0, i.jsx)(ea.p, {
                                messageType: ea.Y.WARNING,
                                action: (0, i.jsx)(q.$, {
                                    variant: "overlay-secondary",
                                    text: N.intl.string(N.t.zoztQA),
                                    onClick: () => (0, eo.A)(eQ(t)),
                                }),
                                children: N.intl.string(N.t["3AvulN"]),
                            })
                          : null != s &&
                            null != n.sku &&
                            (0, i.jsx)(e7, { guildId: s, guildProductListingId: n.sku.id }),
                  ],
              })
            : null;
    }
    renderExpandedSection() {
        return (0, i.jsx)(J.D, {
            onClick: (e) => e.stopPropagation(),
            children: (0, i.jsxs)("div", {
                className: ep.WI,
                children: [
                    (0, i.jsx)(et.H, { className: ep.mW, children: N.intl.string(N.t.nyzoFb) }),
                    this.renderPaymentBreakdown(),
                    this.renderGuildProductBenefits(),
                    this.renderInvoiceDownload(),
                    this.renderAdditionalTenantInfo(),
                    this.renderRefundDetails(),
                ],
            }),
        });
    }
    render() {
        let { className: e, compactMode: t } = this.props,
            n = this.receiptPayment,
            { expanded: s } = this.state;
        return (0, i.jsx)(u.tG, {
            id: n.id,
            children: (n) =>
                (0, i.jsxs)(J.D, {
                    onClick: this.handleExpandInfo,
                    "data-expanded": s,
                    className: r()(ep.Ji, e, { [ep.oE]: t }),
                    focusProps: { offset: 4 },
                    ...n,
                    children: [
                        (0, i.jsxs)(T.A, {
                            className: ep.J7,
                            align: T.A.Align.CENTER,
                            "data-expanded": s,
                            children: [
                                this.renderDescription(),
                                (0, i.jsxs)("div", {
                                    className: ep.vj,
                                    children: [this.renderStatus(), this.renderPrice()],
                                }),
                                (0, i.jsx)(eX.A, {
                                    className: ep.fT,
                                    direction: s ? eX.A.Directions.UP : eX.A.Directions.DOWN,
                                }),
                            ],
                        }),
                        s ? this.renderExpandedSection() : null,
                    ],
                }),
        });
    }
}
function tt(e) {
    let { payments: t, locale: n, compactMode: l, className: r } = e,
        a = e3(t),
        o = null != a.sku && eJ.includes(a.sku.type),
        u = null != a.sku && o ? a.sku.applicationId : null,
        c = a.sku?.applicationId,
        g = a.subscription?.type === M.rzx.APPLICATION,
        {
            applicationStatistics: m,
            gameApplication: A,
            paymentSources: h,
        } = (0, d.cf)([eB.A, ez.A, eg.A], () => ({
            applicationStatistics: null != u ? ez.A.getCurrentUserStatisticsForApplication(u) : null,
            gameApplication: eg.A.getApplication(u ?? "") ?? a.sku?.application,
            paymentSources: eB.A.paymentSources,
        })),
        { hasAlreadyLinked: E } = (0, ec.RD)((0, eL.bF)(a.sku) ? A : void 0),
        S = (0, d.bG)([eg.A], () => (null != c ? eg.A.getApplication(c) : null));
    s.useEffect(() => {
        g && null != c && (0, eO.TA)(c);
    }, [c, g]);
    let p = (0, d.bG)([ew.A], () => ew.A.getGuild(A?.guildId)),
        x = o ? A : void 0,
        T = a.subscription,
        f = (0, d.bG)([X.A], () => (null != T && T.type !== M.rzx.PREMIUM ? X.A.get(T.items[0].planId) : null)),
        _ = (0, d.bG)(
            [eF.default],
            () => {
                let e = a.isGift ? a.entitlements?.find((e) => e.user?.id != null && null != e.gifterId) : null;
                return null == e ? null : (eF.default.getUser(e.user?.id ?? null) ?? e?.user);
            },
            [a],
        ),
        { analyticsLocations: I } = (0, ed.Ay)(eu.A.BILLING_SETTINGS_BILLING);
    return (0, i.jsx)(te, {
        applicationStatistics: m,
        application: g ? S : x,
        analyticsLocations: I,
        guild: p,
        stickerPack: null,
        paymentSources: h,
        locale: n,
        compactMode: l,
        className: r,
        payments: t,
        plan: f,
        claimedGiftUser: _,
        hasLinkedToApplication: E,
    });
}
var tn = n(949779);
let ti = new Set([M.__0.FAILED, M.__0.CANCELED]);
function ts(e) {
    let { payments: t, paymentGroups: n, locale: l, compactMode: a, numPages: o } = e,
        d = s.useRef(null),
        [g, m] = s.useState(0),
        [A, h] = s.useState(null),
        E = n.slice(10 * g, (g + 1) * 10);
    s.useEffect(() => {
        d.current?.scrollTo({ to: 0 });
    }, [g]);
    let S = s.useCallback(
            (e) => {
                m(e);
                let n = t[t.length - 1].id;
                e >= o - 2 && A !== n && ((0, x.CK)(10, n), h(n));
            },
            [t, o, A],
        ),
        T = (0, p.A)("billing-history", d);
    return (0, i.jsx)(u.hD, {
        navigator: T,
        children: (0, i.jsx)(u.PR, {
            children: (e) => {
                let { ref: t, ...n } = e;
                return (0, i.jsx)(b, {
                    className: tn.GD,
                    currentPageIndex: g,
                    onChangePage: S,
                    numPages: o,
                    showPageCount: !1,
                    ref: t,
                    ...n,
                    children: (0, i.jsx)(c.Ch, {
                        className: tn.Bd,
                        ref: d,
                        overflow: "auto",
                        children: E.map((e, t) =>
                            (0, i.jsx)(tt, { className: r()(tn.Nj, tn.Bd), payments: e, locale: l, compactMode: a }, t),
                        ),
                    }),
                });
            },
        }),
    });
}
class tl extends s.PureComponent {
    static defaultProps = { compactMode: !1 };
    scrollerRef = s.createRef();
    get numPages() {
        return Math.max(Math.ceil(this.props.paymentGroups.length / 10), 1);
    }
    componentDidMount() {
        h.h.wait(() => {
            ((0, E.X)(), (0, x.CK)(30));
        });
    }
    renderPremiumExternalSubscription(e) {
        return (
            o()(null != e.paymentGateway, "Expected payment gateway when rendering for external subscription"),
            (0, i.jsxs)(g.Z, {
                className: tn.K1,
                children: [
                    (0, i.jsx)("div", {
                        className: tn.BF,
                        children: N.intl.format(N.t["6mIX6s"], { paymentGatewayName: eS.qm[e.paymentGateway] }),
                    }),
                    (0, i.jsx)("div", {
                        className: tn.Q2,
                        children: N.intl.format(N.t.eG0uZB, {
                            paymentGatewayName: eS.qm[e.paymentGateway],
                            billingHistoryLink: (0, H.tW)(e.paymentGateway, "BILLING_HISTORY"),
                        }),
                    }),
                ],
            })
        );
    }
    render() {
        let {
                compactMode: e,
                payments: t,
                paymentGroups: n,
                subscription: s,
                locale: l,
                hasFetchedPayments: a,
            } = this.props,
            o = null != s && s.isPurchasedExternally;
        return a
            ? (0, i.jsxs)("div", {
                  className: tn.GD,
                  children: [
                      null != s && o ? this.renderPremiumExternalSubscription(s) : null,
                      t.length > 0
                          ? (0, i.jsxs)("div", {
                                className: r()(tn.PQ, tn.GD),
                                children: [
                                    e
                                        ? null
                                        : (0, i.jsx)("div", {
                                              className: r()(tn.Nj, tn.Bd),
                                              children: (0, i.jsxs)(T.A, {
                                                  className: tn.Yi,
                                                  children: [
                                                      (0, i.jsx)("div", {
                                                          className: ep.p6,
                                                          children: N.intl.string(N.t["5t11BV"]),
                                                      }),
                                                      (0, i.jsx)("div", {
                                                          className: tn.Ir,
                                                          children: N.intl.string(N.t.yAAPb2),
                                                      }),
                                                      (0, i.jsx)("div", {
                                                          className: ep.vj,
                                                          children: N.intl.string(N.t["6MqHXV"]),
                                                      }),
                                                  ],
                                              }),
                                          }),
                                    (0, i.jsx)(ts, {
                                        compactMode: e,
                                        locale: l,
                                        payments: t,
                                        paymentGroups: n,
                                        numPages: this.numPages,
                                    }),
                                ],
                            })
                          : o
                            ? null
                            : (0, i.jsx)(A.E, {
                                  variant: "text-sm/normal",
                                  color: "text-subtle",
                                  children: N.intl.string(N.t.GqvDkk),
                              }),
                  ],
              })
            : (0, i.jsx)(m.y, {});
    }
}
function tr(e) {
    let t = e.skuId,
        n = e.subscription?.items[0].planId;
    return !(null == t || null == n || Object.values(U.pe).includes(t) || (0, H.ys)(n));
}
function ta(e) {
    let t = (0, d.bG)([z], () => z.getPayments()),
        n = s.useMemo(
            () =>
                (function (e) {
                    let t = [],
                        n = new Map();
                    for (let i of e) {
                        let e = i.invoice?.id;
                        if (null == e || ti.has(i.status)) {
                            t.push([i]);
                            continue;
                        }
                        let s = n.get(e);
                        if (null != s) s.push(i);
                        else {
                            let s = [i];
                            (n.set(e, s), t.push(s));
                        }
                    }
                    return t;
                })(t),
            [t],
        ),
        l = (0, d.bG)([Y.A], () => Y.A.getPremiumTypeSubscription()),
        r = s.useMemo(
            () =>
                new Set(
                    t.filter(tr).map((e) => {
                        let { subscription: t } = e;
                        return t?.items[0].planId;
                    }),
                ),
            [t],
        ),
        a = s.useMemo(
            () =>
                new Set(
                    t.filter(tr).map((e) => {
                        let { skuId: t } = e;
                        return t;
                    }),
                ),
            [t],
        ),
        o = (0, d.yK)([X.A], () => X.A.getPlanIdsForSkus(Array.from(a))),
        u = s.useCallback(() => o.length === r.size, [o, r]);
    s.useEffect(() => {
        u() ||
            h.h.wait(() => {
                a.forEach((e) => (0, S.ur)(e, void 0, void 0, !0, void 0));
            });
    }, [u, a]);
    let c = (0, d.bG)([z], () => z.hasFetchedPayments);
    return (0, i.jsx)(tl, { ...e, payments: t, paymentGroups: n, subscription: l, hasFetchedPayments: c });
}
