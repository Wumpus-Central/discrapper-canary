n.d(t, { A: () => ti });
var i = n(477900),
    l = n(582128),
    s = n(503698),
    r = n.n(s),
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
    x = n(928039),
    p = n(277984),
    T = n(235986),
    f = n(408278),
    I = n(921853),
    _ = n(320448),
    N = n(375708),
    C = n(336507);
let b = l.forwardRef(function (e, t) {
    let { currentPageIndex: n, numPages: l, onChangePage: s, children: r, showPageCount: a = !0, ...o } = e,
        u = n >= l - 1,
        d = a
            ? N.intl.format(N.t.MtpIwg, { currentPage: n + 1, numPages: l })
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
                            icon: I.n,
                            disabled: n <= 0,
                            onClick: () => s(n - 1),
                            "aria-label": N.intl.string(N.t.vgfxaA),
                        }),
                        (0, i.jsx)(A.E, { variant: "text-sm/medium", children: d }),
                        (0, i.jsx)(f.K, {
                            variant: "icon-only",
                            icon: _._,
                            disabled: u,
                            onClick: () => s(n + 1),
                            "aria-label": N.intl.string(N.t.XiOHRX),
                        }),
                    ],
                }),
            }),
        ],
    });
});
n(321073), n(938796);
var y = n(334279),
    v = n(122817),
    j = n(665260),
    O = n(315069),
    L = n(32731),
    D = n(557009),
    R = n(570221),
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
            entitlements: null != e.entitlements ? e.entitlements.map((e) => D.A.createFromServer(e)) : void 0,
            invoice: null != e.invoice ? R.Y.createFromServer(e.invoice) : null,
        });
    }
    constructor(e) {
        super(),
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
            (this.invoice = e.invoice);
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
    -1 === i ? (k.push(n), k.sort((e, t) => t.createdAt.getTime() - e.createdAt.getTime())) : (k[i] = n), (k = [...k]);
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
        k.sort((e, t) => t.createdAt.getTime() - e.createdAt.getTime()), (k = [...k]);
    },
    BILLING_PAYMENTS_FETCH_FAIL: function () {
        w = !0;
    },
    PAYMENT_UPDATE: F,
    BILLING_PAYMENT_FETCH_SUCCESS: F,
    LOGOUT: function () {
        (k = []), (w = !1);
    },
});
var X = n(97352),
    Y = n(166403),
    H = n(158045),
    K = n(989349),
    W = n.n(K),
    Z = n(661531),
    q = n(821609),
    Q = n(866665),
    J = n(939249),
    $ = n(403581),
    ee = n(707554),
    et = n(789645),
    en = n(933832),
    ei = n(349288),
    el = n(34188),
    es = n(597770),
    er = n(512950),
    ea = n(975807),
    eo = n(793574),
    eu = n(688810),
    ed = n(206828),
    ec = n(587895),
    eg = n(636537),
    em = n(683071),
    eA = n(192308);
let eh = function (e, t) {
    (0, eA.openModalLazy)(async () => {
        let { default: l } = await Promise.all([n.e("407755"), n.e("234138")]).then(n.bind(n, 206049));
        return (n) => (0, i.jsx)(l, { payment: e, paymentSource: t, ...n });
    });
};
var eE = n(818348),
    eS = n(314850);
async function ex(e) {
    try {
        return (
            await eg.Bo.get({
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
function ep(e) {
    let { payment: t } = e,
        [n, s] = l.useState(null),
        [r, a] = l.useState(null);
    async function o(e) {
        try {
            let n = await ex(t.id);
            s(n);
            let i = e ? n.refundInvoiceLinks[0] : n.invoiceLink;
            window.open(i, "_blank"), a(null);
        } catch (e) {
            a(e.body?.message);
        }
    }
    let u = null != t.paymentSource && t.status === eE.__.COMPLETED,
        d = n?.invoiceLink,
        c = n?.refundInvoiceLinks;
    return t.hasInvoiceURL && null == n
        ? (0, i.jsxs)("div", {
              className: eS.It,
              children: [
                  (0, i.jsx)(ei.Anchor, { onClick: () => o(!1), children: N.intl.formatToPlainString(N.t.R0xzCN, {}) }),
                  t.hasRefundInvoiceURLs
                      ? (0, i.jsx)(ei.Anchor, {
                            className: eS.oe,
                            onClick: () => o(!0),
                            children: N.intl.formatToPlainString(N.t["3x6NGw"], {}),
                        })
                      : null,
                  null != r && "" !== r && (0, i.jsx)(em.w, { type: "critical", children: r }),
              ],
          })
        : t.hasInvoiceURL && null != n
          ? (0, i.jsxs)("div", {
                className: eS.It,
                children: [
                    (0, i.jsx)(ei.Anchor, { href: d, children: N.intl.formatToPlainString(N.t.R0xzCN, {}) }),
                    null != c
                        ? c.map((e, t) =>
                              (0, i.jsx)(
                                  ei.Anchor,
                                  {
                                      className: eS.oe,
                                      href: e,
                                      children: N.intl.formatToPlainString(N.t["3x6NGw"], {}),
                                  },
                                  t,
                              ),
                          )
                        : null,
                    null != r && "" !== r && (0, i.jsx)(em.w, { type: "critical", children: r }),
                ],
            })
          : u
            ? (0, i.jsx)("div", {
                  className: eS.It,
                  children: (0, i.jsx)(ei.Anchor, {
                      onClick: () => {
                          var e;
                          (e = t.paymentSource), eh(t, e);
                      },
                      children: N.intl.formatToPlainString(N.t.onRIxS, {}),
                  }),
              })
            : null;
}
var eT = n(769015),
    ef = n(250627),
    eI = n(871109),
    e_ = n(571654),
    eN = n(411342),
    eC = n(179499),
    eb = n(741231),
    ey = n(95035),
    ev = n(576243),
    ej = n(337095),
    eO = n(871123),
    eL = n(510022),
    eD = n(68935),
    eR = n(148355),
    eP = n(780964),
    eG = n(830543),
    eM = n(766075),
    eU = n(106799),
    eV = n(317525),
    ek = n(71393),
    ew = n(287809),
    eF = n(295405),
    eB = n(90165),
    ez = n(147925),
    eX = n(174459),
    eY = n(957565),
    eH = n(58703),
    eK = n(580630),
    eW = n(427262),
    eZ = n(219887);
let eq = (e) => `https://${M.XlF}/hc/${e.toLowerCase()}/requests/new?ticket_form_id=360000118612`,
    eQ = [M.Puh.DURABLE_PRIMARY, M.Puh.DURABLE, M.Puh.CONSUMABLE],
    eJ = [M.__0.FAILED, M.__0.REVERSED, M.__0.CANCELED],
    e$ = [eE.kM.APPLE],
    e0 = [M.hes.PAYSAFE_CARD];
function e1(e) {
    let { description: t, cost: n } = e;
    return (0, i.jsx)("li", {
        className: eS.mg,
        children: (0, i.jsxs)(T.A, {
            justify: T.A.Justify.BETWEEN,
            children: [(0, i.jsx)("div", { children: t }), (0, i.jsx)("div", { children: n })],
        }),
    });
}
function e2(e) {
    let { value: t, copyText: n, copyFeedbackText: s } = e,
        [r, a] = l.useState(!1),
        [o, u] = l.useState(!1);
    return (0, i.jsx)(Q.m, {
        forceOpen: o,
        text: r ? s : n,
        children: (0, i.jsx)(J.D, {
            onMouseEnter: () => {
                r && a(!1);
            },
            onMouseLeave: () => {
                u(!1);
            },
            onClick: function () {
                (0, eY.C)(t, () => {
                    u(!0), a(!0);
                });
            },
            children: (0, i.jsx)("div", { className: eS.l9, children: t }),
        }),
    });
}
function e3(e) {
    let { description: t, detail: n } = e;
    return (0, i.jsx)("li", {
        className: eS.Iu,
        children: (0, i.jsxs)(T.A, {
            justify: T.A.Justify.BETWEEN,
            children: [(0, i.jsx)("div", { children: t }), (0, i.jsx)("div", { children: n })],
        }),
    });
}
function e5(e) {
    let { guildId: t, guildProductListingId: n } = e,
        s = (0, ef.Qi)(t, n, { requireCurrentGuild: !1 }),
        r = (0, e_.z)(s),
        a = (0, d.bG)([ek.A], () => ek.A.getGuild(t)),
        o = s?.role_id != null && s?.attachments_count === 0 ? N.intl.string(N.t.H11qcT) : r,
        u = l.useCallback(async () => {
            a?.features.has(M.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE)
                ? await (0, eb.A)(M.BVt.GUILD_PRODUCT(t, n))
                : await (0, eb.A)(M.BVt.CHANNEL(t)),
                (0, eG.default)();
        }, [a, t, n]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != o && (0, i.jsx)(e3, { description: N.intl.string(N.t.lXPbJb), detail: o }),
            null != a &&
                (0, i.jsx)(e3, {
                    description: N.intl.string(N.t.Wpn8z8),
                    detail: (0, i.jsx)(ey.A, { onClick: u, children: a.name }),
                }),
        ],
    });
}
function e6(e) {
    let { guildId: t, guildProductListingId: n } = e,
        l = (0, ef.Qi)(t, n, { requireCurrentGuild: !1 }),
        s = (0, d.bG)([eI.A], () => eI.A.getGuildProductFetchState(n) === eI.e.FETCHING),
        r = l?.role_id,
        a = (0, d.bG)([eV.A], () => (null != r ? eV.A.getRole(t, r) : void 0), [t, r]),
        o = (0, eC.A)({ guildId: t, productId: n }),
        u = (l?.attachments?.length ?? 0) > 0,
        c = null != a;
    return s
        ? (0, i.jsx)("div", { className: eS.hT, children: (0, i.jsx)(m.y, {}) })
        : null != l && (u || c)
          ? (0, i.jsxs)("div", {
                className: eS.hT,
                children: [
                    u &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(A.E, {
                                    variant: "text-xs/semibold",
                                    color: "text-default",
                                    className: eS.yE,
                                    children: N.intl.string(N.t.hxawoy),
                                }),
                                (0, i.jsx)(q.$, { ...o }),
                            ],
                        }),
                    c &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                u && (0, i.jsx)("div", { className: eS.yF }),
                                (0, i.jsx)(A.E, {
                                    variant: "text-xs/semibold",
                                    color: "text-default",
                                    className: eS.yE,
                                    children: N.intl.string(N.t.gWBNet),
                                }),
                                (0, i.jsx)(eN.A, { role: a }),
                            ],
                        }),
                ],
            })
          : null;
}
function e4(e) {
    let { withGradient: t, compactMode: n } = e,
        l = n ? 28 : 16;
    return t
        ? (0, i.jsx)(ev.A, { size: n ? 40 : 24, iconSize: l, color: Z.A.unsafe_rawColors.NEUTRAL_1, className: eS.Sy })
        : (0, i.jsx)("div", {
              className: r()(eS.Sy, eS.uX, n ? eS.vU : eS.Xr),
              children: (0, i.jsx)($.t, { size: "custom", width: l, height: l, color: Z.A.colors.ICON_DEFAULT }),
          });
}
class e8 extends l.PureComponent {
    static defaultProps = { compactMode: !1 };
    state = { expanded: !1 };
    refundRules = [
        { rule: "PURCHASE_DATE", canRefund: () => this.daysSincePurchase <= 5 },
        {
            rule: "SKU_TYPE",
            canRefund: () => {
                let { payment: e } = this.props;
                return null == e.sku || e.sku.type !== M.Puh.CONSUMABLE;
            },
        },
        {
            rule: "ALREADY_REFUNDED",
            canRefund: () => {
                let { payment: e } = this.props;
                return e.amountRefunded < e.amount;
            },
        },
        {
            rule: "PAYMENT_STATUS",
            canRefund: () => {
                let { payment: e } = this.props;
                return !eJ.includes(e.status);
            },
        },
        {
            rule: "PAYMENT_GATEWAY",
            canRefund: () => {
                let { payment: e } = this.props;
                return null == e.paymentGateway || !e$.includes(e.paymentGateway);
            },
        },
        {
            rule: "PAYMENT_SOURCE",
            canRefund: () => {
                let { payment: e } = this.props;
                return null == e.paymentSource || !e0.includes(e.paymentSource.type);
            },
        },
        {
            rule: "SKU_STICKER_PACK",
            canRefund: () => {
                let { payment: e } = this.props;
                return null == e.sku || !(0, j.Lt)(e.sku.flags, M.d68.STICKER);
            },
        },
        {
            rule: "SUBSCRIPTION_TYPE",
            canRefund: () => {
                let { payment: e } = this.props;
                return e.subscription?.type !== M.rzx.GUILD && e.subscription?.type !== M.rzx.APPLICATION;
            },
        },
        {
            rule: "GUILD_PRODUCT",
            canRefund: () => {
                let { payment: e } = this.props;
                return null == e.sku || !(0, j.Lt)(e.sku.flags, v.d.GUILD_PRODUCT);
            },
        },
        {
            rule: "COLLECTIBLE",
            canRefund: () => {
                let { payment: e } = this.props;
                return !e.isShopPurchase;
            },
        },
    ];
    get daysSincePurchase() {
        let { payment: e } = this.props,
            t = null != e.sku ? e.sku.releaseDate : null,
            n = null != t && t.isAfter(e.createdAt) ? t : e.createdAt;
        return W()().diff(n, "days");
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
        let { payment: e } = this.props;
        switch (e.status) {
            case M.__0.PENDING:
                return (0, i.jsx)("span", { className: eS.Xg, children: N.intl.string(N.t.y7F0Re) });
            case M.__0.FAILED:
                return (0, i.jsx)("span", { className: eS.ob, children: N.intl.string(N.t.Yo4ru6) });
            case M.__0.REFUNDED:
                if (e.amountRefunded !== e.amount)
                    return (0, i.jsx)("span", { className: eS.gD, children: N.intl.string(N.t.lYbZzz) });
                return (0, i.jsx)("span", { className: eS.gD, children: N.intl.string(N.t.ZBb6NK) });
            case M.__0.REVERSED:
                return (0, i.jsx)("span", { className: eS.ob, children: N.intl.string(N.t.YQv9Li) });
            case M.__0.CANCELED:
                return (0, i.jsx)("span", { className: eS.ob, children: N.intl.string(N.t.ttkBhy) });
            default:
                return null;
        }
    }
    renderTenantStatusOverride() {
        let { payment: e, hasLinkedToApplication: t } = this.props;
        return (0, eO.bF)(e.sku) && e.status === M.__0.COMPLETED
            ? null != e.entitlements && e.entitlements.some((e) => e.isFulfilled())
                ? (0, i.jsx)("span", { className: eS.gD, children: N.intl.string(N.t.Osji1u) })
                : e.isGift
                  ? null != e.entitlements && e.entitlements.some((e) => null != e.gifterId)
                      ? (0, i.jsx)("span", { className: eS.gD, children: N.intl.string(N.t.lIsIFo) })
                      : (0, i.jsx)("span", { className: eS.Tf, children: N.intl.string(N.t["+tqSi3"]) })
                  : t
                    ? (0, i.jsx)("span", { className: eS.Tf, children: N.intl.string(N.t.y7F0Re) })
                    : (0, i.jsx)("span", { className: eS.Tf, children: N.intl.string(N.t.HHC5Z4) })
            : null;
    }
    renderStatus() {
        return this.renderTenantStatusOverride() ?? this.renderDefaultStatus();
    }
    renderAmount(e) {
        let { payment: t } = this.props;
        return t.currency === eE.Yr.DISCORD_ORB
            ? (0, i.jsxs)("span", {
                  className: eS.db,
                  children: [
                      (0, i.jsx)(eU.A, { customSize: 16, shouldUseThemeColor: !0 }),
                      N.intl.formatToPlainString(N.t.YMor7k, { count: e }),
                  ],
              })
            : (0, eK.$g)(e, t.currency);
    }
    renderPrice() {
        let { payment: e } = this.props,
            t = e.amount - e.amountRefunded;
        return (0, i.jsx)("span", { className: eS.q9, children: this.renderAmount(t) });
    }
    renderPaymentIdField() {
        let { payment: e } = this.props;
        return (0, i.jsx)("li", {
            className: eS.mg,
            children: (0, i.jsxs)("div", {
                className: eS.bx,
                children: [
                    (0, i.jsx)("div", { children: N.intl.string(N.t["UQim+r"]) }),
                    (0, i.jsx)(e2, {
                        value: e.id,
                        copyText: N.intl.string(N.t["Mdk9+A"]),
                        copyFeedbackText: N.intl.string(N.t["7eIrA2"]),
                    }),
                ],
            }),
        });
    }
    renderPaymentBreakdown() {
        let { payment: e, locale: t, application: n } = this.props,
            { taxInclusive: s, tax: a, amount: o, amountRefunded: u } = e,
            d = n?.guildId;
        return (0, i.jsxs)("div", {
            className: r()(eS.iL, eS.W),
            children: [
                null != e.paymentSource
                    ? (0, i.jsx)(eZ.A, {
                          paymentSource: e.paymentSource,
                          locale: t,
                          descriptionClassName: eS.iL,
                          showLabels: !0,
                          showPaymentSourceIcon: !0,
                      })
                    : e.paymentGateway === eE.kM.APPLE_PARTNER
                      ? (0, i.jsx)(eZ.A, {
                            paymentSource: new P.Pw({}),
                            locale: t,
                            descriptionClassName: eS.iL,
                            showLabels: !0,
                            showPaymentSourceIcon: !0,
                        })
                      : null,
                (0, i.jsxs)("ul", {
                    children: [
                        this.renderPaymentIdField(),
                        !s && a > 0
                            ? (0, i.jsxs)(l.Fragment, {
                                  children: [
                                      (0, i.jsx)(e1, { description: e.description, cost: this.renderAmount(o - a) }),
                                      (0, i.jsx)(e1, {
                                          description: N.intl.string(N.t.QgWXht),
                                          cost: this.renderAmount(a),
                                      }),
                                  ],
                              })
                            : null,
                        (0, i.jsx)(e1, { description: N.intl.string(N.t.txajQG), cost: this.renderAmount(o) }),
                        e.isGuildProductPurchase &&
                            null != d &&
                            null != e.sku &&
                            (0, i.jsx)(e5, { guildId: d, guildProductListingId: e.sku.id }),
                        u > 0 &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(e1, {
                                        description: N.intl.string(N.t["A+I0AP"]),
                                        cost: this.renderAmount(u),
                                    }),
                                    (0, i.jsx)(e1, {
                                        description: N.intl.string(N.t.xER6Wi),
                                        cost: this.renderAmount(o - u),
                                    }),
                                ],
                            }),
                    ],
                }),
            ],
        });
    }
    renderInvoiceDownload() {
        let { payment: e } = this.props;
        return (0, i.jsx)(ep, { payment: e });
    }
    renderAdditionalGameItemDetails() {
        let {
                claimedGiftUser: e,
                payment: t,
                hasLinkedToApplication: n,
                application: s,
                locale: r,
                analyticsLocations: a,
            } = this.props,
            o = t.entitlements?.some((e) => e.isFulfilled());
        return t.status === M.__0.REFUNDED
            ? (0, i.jsxs)(l.Fragment, {
                  children: [
                      (0, i.jsx)(ee.H, { className: eS.mW, children: N.intl.string(N.t["gIGB/A"]) }),
                      (0, i.jsx)("div", {
                          className: eS.iL,
                          children:
                              null != e
                                  ? N.intl.format(N.t.Q1K9eg, { username: eW.Ay.getName(e) })
                                  : N.intl.format(N.t.IBtGwC, { applicationName: s?.name }),
                      }),
                  ],
              })
            : t.isGift
              ? (0, i.jsxs)(l.Fragment, {
                    children: [
                        (0, i.jsx)(ee.H, { className: eS.mW, children: N.intl.string(N.t["gIGB/A"]) }),
                        (0, i.jsx)("div", {
                            className: eS.iL,
                            children:
                                null != e
                                    ? N.intl.format(N.t.vfUW65, { username: eW.Ay.getName(e) })
                                    : N.intl.string(N.t["18wIqp"]),
                        }),
                        null == e &&
                            (0, i.jsx)("div", {
                                className: eS.TP,
                                children: (0, i.jsx)(q.$, {
                                    variant: "primary",
                                    text: N.intl.string(N.t["jcSP+g"]),
                                    onClick: () => (0, eM.openUserSettings)(eP.X.GIFT_PANEL),
                                }),
                            }),
                    ],
                })
              : o
                ? null
                : (0, i.jsxs)(l.Fragment, {
                      children: [
                          (0, i.jsx)(ee.H, { className: eS.mW, children: N.intl.string(N.t["gIGB/A"]) }),
                          (0, i.jsx)("div", {
                              className: eS.iL,
                              children: n
                                  ? N.intl.format(N.t.DQQCAw, { applicationName: s?.name, skuName: t.sku?.name })
                                  : N.intl.format(N.t.ED2BqF, { applicationName: s?.name, skuName: t.sku?.name }),
                          }),
                          (0, i.jsx)("div", {
                              className: eS.TP,
                              children: n
                                  ? (0, i.jsx)(q.$, {
                                        variant: "primary",
                                        text: N.intl.string(N.t.zoztQA),
                                        onClick: () => (0, ea.A)(eq(r)),
                                    })
                                  : (0, i.jsx)(q.$, {
                                        variant: "primary",
                                        text: N.intl.string(N.t["jCqvk/"]),
                                        onClick: () => {
                                            null != t.sku &&
                                                null != s &&
                                                (eX.default.track(
                                                    M.HAw.PAYMENT_HISTORY_CONNECT_ACCOUNT_BUTTON_CLICKED,
                                                    { sku_id: t.sku.id, application_id: s.id, location_stack: a },
                                                ),
                                                (0, eL.n)({ sku: t.sku, application: s, analyticsLocations: a }));
                                        },
                                    }),
                          }),
                      ],
                  });
    }
    renderAdditionalTenantInfo() {
        let { payment: e } = this.props;
        if ((0, eO.bF)(e.sku)) return this.renderAdditionalGameItemDetails();
    }
    renderRefundDetails() {
        let e,
            { locale: t, payment: n } = this.props,
            s = this.validateRefundRules();
        if (
            s.includes("PAYMENT_GATEWAY") ||
            s.includes("PAYMENT_SOURCE") ||
            s.includes("PAYMENT_STATUS") ||
            s.includes("ALREADY_REFUNDED") ||
            s.includes("SKU_STICKER_PACK") ||
            s.includes("SUBSCRIPTION_TYPE") ||
            s.includes("GUILD_PRODUCT")
        )
            return null;
        let r = 0 === s.length,
            a = eq(t);
        return (
            (e =
                s.includes("SKU_TYPE") && !n.isShopPurchase
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
            (0, i.jsxs)(l.Fragment, {
                children: [
                    (0, i.jsx)(ee.H, { className: eS.mW, children: N.intl.string(N.t["n/27pr"]) }),
                    (0, i.jsxs)("div", {
                        className: eS.iL,
                        children: [(0, i.jsx)("div", { children: e }), this.renderRefundActions(s)],
                    }),
                ],
            })
        );
    }
    renderRefundCriteria(e, t, n, l) {
        return (0, i.jsxs)(
            "div",
            {
                className: eS._Z,
                children: [
                    (0, i.jsx)(ee.H, { className: eS.ud, children: e }),
                    (0, i.jsxs)("div", {
                        className: eS.z9,
                        children: [
                            (0, i.jsx)(t, { className: eS.xb, color: "currentColor" }),
                            null != n && (0, i.jsx)("div", { children: n }),
                        ],
                    }),
                ],
            },
            l,
        );
    }
    renderRefundActions(e) {
        let { locale: t, payment: n } = this.props;
        if (e.includes("SKU_TYPE")) return null;
        let l = e.includes("PURCHASE_DATE") ? et.P : en.A;
        return (0, i.jsxs)("div", {
            className: eS.My,
            children: [
                (0, i.jsx)("div", {
                    className: eS.Kf,
                    children:
                        !n.isShopPurchase &&
                        this.renderRefundCriteria(
                            N.intl.string(N.t.H0RNz4),
                            l,
                            N.intl.formatToPlainString(N.t["7dtXa/"], { daysSincePurchase: this.daysSincePurchase }),
                        ),
                }),
                (0, i.jsx)(ei.Anchor, { href: eq(t), children: N.intl.string(N.t.re5nOB) }),
            ],
        });
    }
    renderDescription() {
        let e,
            t,
            { compactMode: n, payment: s, application: r, guild: a, stickerPack: o, plan: u } = this.props,
            { expanded: d } = this.state,
            c = s.sku,
            g = s.subscription,
            m = null != s.paymentSource && M.AD1.has(s.paymentSource.type);
        if (null != g && 0 !== g.items.length) {
            let l = [],
                o = null;
            if (g.type === M.rzx.PREMIUM) {
                let t;
                if (
                    (g.items.forEach((e) => {
                        let { planId: n, quantity: i } = e;
                        (0, H.xq)(n)
                            ? (l.push(H.Ay.getDisplayName(n, !1, m)), (o = (0, H.mH)(U.hd[n].skuId)))
                            : (l.push(`${i > 1 ? `${i}x ` : ""}${H.Ay.getDisplayName(n, !1, m)}`),
                              null == o && (o = (0, H.mH)(U.hd[n].skuId))),
                            (0, H.z4)(n) || (t ??= n);
                    }),
                    null != t)
                ) {
                    let l = H.Ay.getPremiumType(t);
                    e = (0, i.jsx)(e4, { withGradient: l === U.PremiumTypes.TIER_2, compactMode: n });
                }
            } else if (g.type === M.rzx.GUILD) {
                if (null != u) {
                    let e = u.interval === U.WT.YEAR ? N.t.V6UFQM : N.t["6oq128"];
                    l.push(N.intl.format(e, { planName: u.name })), (o = u.skuId);
                }
            } else
                g.type === M.rzx.APPLICATION
                    ? (null != u && (o = u.skuId),
                      null != r
                          ? l.push(N.intl.formatToPlainString(N.t["0wL/VI"], { tier: c?.name }))
                          : l.push(N.intl.string(N.t["9czSYu"])))
                    : g.type;
            (t = 0 !== l.length ? l.join(", ") : s.description),
                null == e &&
                    (e = (0, i.jsx)(eT.A, {
                        className: eS.Sy,
                        guildClassName: eS.zA,
                        game: r,
                        guild: a,
                        size: eT.M.XSMALL,
                        skuId: o ?? c?.id,
                    }));
        } else if (null != c) {
            if (s.isGuildProductPurchase && s.isSoftDeletedProduct) t = N.intl.string(N.t.O7uLmw);
            else {
                t = c.name;
                let e = s.invoice;
                if (null != e) {
                    let n = e.getInvoicePreviewLineItemForSku(c.id);
                    null != n && (t = n.description);
                }
            }
            if (null != o) {
                let t = (0, eD.Id)(o);
                e = (0, i.jsx)(eR.A, {
                    disableAnimation: !d,
                    isInteracting: d,
                    sticker: t,
                    className: eS.Sy,
                    size: 24,
                });
            } else
                e = s.isFractionalPremium
                    ? (0, i.jsx)(e4, { withGradient: !0, compactMode: n })
                    : s.isCollectible
                      ? (0, i.jsx)(el.U, {
                            size: "custom",
                            width: 23,
                            height: 23,
                            color: "currentColor",
                            className: eS.sV,
                        })
                      : (0, i.jsx)(eT.A, {
                            className: eS.Sy,
                            guildClassName: eS.zA,
                            game: r,
                            guild: a,
                            size: eT.M.XSMALL,
                            skuId: c.id,
                        });
        } else (e = (0, i.jsx)(e4, { withGradient: !1, compactMode: n })), (t = s.description);
        let h = (0, i.jsx)(A.E, {
                variant: "text-sm/normal",
                className: eS.p6,
                children: (0, eH.i$)(W()(s.createdAt), "MM/DD/YYYY"),
            }),
            E = s.isGift
                ? (0, i.jsx)(Q.m, {
                      text: N.intl.string(N.t.QddTpm),
                      children: (0, i.jsx)(es.o, { size: "md", color: "currentColor", className: eS.ez }),
                  })
                : null;
        return n
            ? (0, i.jsxs)("div", { className: eS.h_, children: [e, (0, i.jsxs)("div", { children: [t, h] }), E] })
            : (0, i.jsxs)(l.Fragment, {
                  children: [
                      h,
                      (0, i.jsxs)("div", { className: eS.h_, children: [e, (0, i.jsx)("div", { children: t }), E] }),
                  ],
              });
    }
    renderGuildProductBenefits() {
        let { payment: e, application: t, locale: n } = this.props,
            l = t?.guildId;
        return e.isGuildProductPurchase
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)("div", { className: eS.ts }),
                      e.isSoftDeletedProduct
                          ? (0, i.jsx)(er.p, {
                                messageType: er.Y.WARNING,
                                action: (0, i.jsx)(q.$, {
                                    variant: "overlay-secondary",
                                    text: N.intl.string(N.t.zoztQA),
                                    onClick: () => (0, ea.A)(eq(n)),
                                }),
                                children: N.intl.string(N.t["3AvulN"]),
                            })
                          : null != l &&
                            null != e.sku &&
                            (0, i.jsx)(e6, { guildId: l, guildProductListingId: e.sku.id }),
                  ],
              })
            : null;
    }
    renderExpandedSection() {
        return (0, i.jsx)(J.D, {
            onClick: (e) => e.stopPropagation(),
            children: (0, i.jsxs)("div", {
                className: eS.WI,
                children: [
                    (0, i.jsx)(ee.H, { className: eS.mW, children: N.intl.string(N.t.nyzoFb) }),
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
        let { payment: e, className: t, compactMode: n } = this.props,
            { expanded: l } = this.state;
        return (0, i.jsx)(u.tG, {
            id: e.id,
            children: (e) =>
                (0, i.jsxs)(J.D, {
                    onClick: this.handleExpandInfo,
                    "data-expanded": l,
                    className: r()(eS.Ji, t, { [eS.oE]: n }),
                    focusProps: { offset: 4 },
                    ...e,
                    children: [
                        (0, i.jsxs)(T.A, {
                            className: eS.J7,
                            align: T.A.Align.CENTER,
                            "data-expanded": l,
                            children: [
                                this.renderDescription(),
                                (0, i.jsxs)("div", {
                                    className: eS.vj,
                                    children: [this.renderStatus(), this.renderPrice()],
                                }),
                                (0, i.jsx)(ez.A, {
                                    className: eS.fT,
                                    direction: l ? ez.A.Directions.UP : ez.A.Directions.DOWN,
                                }),
                            ],
                        }),
                        l ? this.renderExpandedSection() : null,
                    ],
                }),
        });
    }
}
function e7(e) {
    let { payment: t, locale: n, compactMode: s, className: r } = e,
        a = null != t.sku && eQ.includes(t.sku.type),
        o = null != t.sku && a ? t.sku.applicationId : null,
        u = t.sku?.applicationId,
        c = t.subscription?.type === M.rzx.APPLICATION,
        {
            applicationStatistics: g,
            gameApplication: m,
            paymentSources: A,
        } = (0, d.cf)([eF.A, eB.A, ec.A], () => ({
            applicationStatistics: null != o ? eB.A.getCurrentUserStatisticsForApplication(o) : null,
            gameApplication: ec.A.getApplication(o ?? "") ?? t.sku?.application,
            paymentSources: eF.A.paymentSources,
        })),
        { hasAlreadyLinked: h } = (0, ed.RD)((0, eO.bF)(t.sku) ? m : void 0),
        E = (0, d.bG)([ec.A], () => (null != u ? ec.A.getApplication(u) : null));
    l.useEffect(() => {
        c && null != u && (0, ej.TA)(u);
    }, [u, c]);
    let S = (0, d.bG)([ek.A], () => ek.A.getGuild(m?.guildId)),
        x = a ? m : void 0,
        p = t.subscription,
        T = (0, d.bG)([X.A], () => (null != p && p.type !== M.rzx.PREMIUM ? X.A.get(p.items[0].planId) : null)),
        f = (0, d.bG)([ew.default], () => {
            let e = t.isGift ? t.entitlements?.find((e) => e.user?.id != null && null != e.gifterId) : null;
            return null == e ? null : (ew.default.getUser(e.user?.id ?? null) ?? e?.user);
        }, [t]),
        { analyticsLocations: I } = (0, eu.Ay)(eo.A.BILLING_SETTINGS_BILLING);
    return (0, i.jsx)(e8, {
        applicationStatistics: g,
        application: c ? E : x,
        analyticsLocations: I,
        guild: S,
        stickerPack: null,
        paymentSources: A,
        locale: n,
        compactMode: s,
        className: r,
        payment: t,
        plan: T,
        claimedGiftUser: f,
        hasLinkedToApplication: h,
    });
}
var e9 = n(201556);
function te(e) {
    let { payments: t, locale: n, compactMode: s, numPages: a } = e,
        o = l.useRef(null),
        [d, g] = l.useState(0),
        [m, A] = l.useState(null),
        h = t.slice(10 * d, (d + 1) * 10);
    l.useEffect(() => {
        o.current?.scrollTo({ to: 0 });
    }, [d]);
    let E = l.useCallback(
            (e) => {
                g(e);
                let n = t[t.length - 1].id;
                e >= a - 2 && m !== n && ((0, p.CK)(10, n), A(n));
            },
            [t, a, m],
        ),
        S = (0, x.A)("billing-history", o);
    return (0, i.jsx)(u.hD, {
        navigator: S,
        children: (0, i.jsx)(u.PR, {
            children: (e) => {
                let { ref: t, ...l } = e;
                return (0, i.jsx)(b, {
                    className: e9.GD,
                    currentPageIndex: d,
                    onChangePage: E,
                    numPages: a,
                    showPageCount: !1,
                    ref: t,
                    ...l,
                    children: (0, i.jsx)(c.Ch, {
                        className: e9.Bd,
                        ref: o,
                        overflow: "auto",
                        children: h.map((e, t) =>
                            (0, i.jsx)(e7, { className: r()(e9.Nj, e9.Bd), payment: e, locale: n, compactMode: s }, t),
                        ),
                    }),
                });
            },
        }),
    });
}
class tt extends l.PureComponent {
    static defaultProps = { compactMode: !1 };
    scrollerRef = l.createRef();
    get numPages() {
        return Math.max(Math.ceil(this.props.payments.length / 10), 1);
    }
    componentDidMount() {
        h.h.wait(() => {
            (0, E.X)(), (0, p.CK)(30);
        });
    }
    renderPremiumExternalSubscription(e) {
        return (
            o()(null != e.paymentGateway, "Expected payment gateway when rendering for external subscription"),
            (0, i.jsxs)(g.Z, {
                className: e9.K1,
                children: [
                    (0, i.jsx)("div", {
                        className: e9.BF,
                        children: N.intl.format(N.t["6mIX6s"], { paymentGatewayName: eE.qm[e.paymentGateway] }),
                    }),
                    (0, i.jsx)("div", {
                        className: e9.Q2,
                        children: N.intl.format(N.t.eG0uZB, {
                            paymentGatewayName: eE.qm[e.paymentGateway],
                            billingHistoryLink: (0, H.tW)(e.paymentGateway, "BILLING_HISTORY"),
                        }),
                    }),
                ],
            })
        );
    }
    render() {
        let { compactMode: e, payments: t, subscription: n, locale: l, hasFetchedPayments: s } = this.props,
            a = null != n && n.isPurchasedExternally;
        return s
            ? (0, i.jsxs)("div", {
                  className: e9.GD,
                  children: [
                      null != n && a ? this.renderPremiumExternalSubscription(n) : null,
                      t.length > 0
                          ? (0, i.jsxs)("div", {
                                className: r()(e9.PQ, e9.GD),
                                children: [
                                    e
                                        ? null
                                        : (0, i.jsx)("div", {
                                              className: r()(e9.Nj, e9.Bd),
                                              children: (0, i.jsxs)(T.A, {
                                                  className: e9.Yi,
                                                  children: [
                                                      (0, i.jsx)("div", {
                                                          className: eS.p6,
                                                          children: N.intl.string(N.t["5t11BV"]),
                                                      }),
                                                      (0, i.jsx)("div", {
                                                          className: e9.Ir,
                                                          children: N.intl.string(N.t.yAAPb2),
                                                      }),
                                                      (0, i.jsx)("div", {
                                                          className: eS.vj,
                                                          children: N.intl.string(N.t["6MqHXV"]),
                                                      }),
                                                  ],
                                              }),
                                          }),
                                    (0, i.jsx)(te, { compactMode: e, locale: l, payments: t, numPages: this.numPages }),
                                ],
                            })
                          : a
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
function tn(e) {
    let t = e.skuId,
        n = e.subscription?.items[0].planId;
    return !(null == t || null == n || Object.values(U.pe).includes(t) || (0, H.ys)(n));
}
function ti(e) {
    let t = (0, d.bG)([z], () => z.getPayments()),
        n = (0, d.bG)([Y.A], () => Y.A.getPremiumTypeSubscription()),
        s = l.useMemo(
            () =>
                new Set(
                    t.filter(tn).map((e) => {
                        let { subscription: t } = e;
                        return t?.items[0].planId;
                    }),
                ),
            [t],
        ),
        r = l.useMemo(
            () =>
                new Set(
                    t.filter(tn).map((e) => {
                        let { skuId: t } = e;
                        return t;
                    }),
                ),
            [t],
        ),
        a = (0, d.yK)([X.A], () => X.A.getPlanIdsForSkus(Array.from(r))),
        o = l.useCallback(() => a.length === s.size, [a, s]);
    l.useEffect(() => {
        o() ||
            h.h.wait(() => {
                r.forEach((e) => (0, S.ur)(e, void 0, void 0, !0, void 0));
            });
    }, [o, r]);
    let u = (0, d.bG)([z], () => z.hasFetchedPayments);
    return (0, i.jsx)(tt, { ...e, payments: t, subscription: n, hasFetchedPayments: u });
}
