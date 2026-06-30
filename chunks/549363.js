i.d(t, { A: () => tt });
var n = i(627968),
    s = i(64700),
    l = i(503698),
    r = i.n(l),
    a = i(284009),
    o = i.n(a),
    u = i(837381),
    d = i(17928),
    c = i(689175),
    g = i(993077),
    m = i(289873),
    A = i(834730),
    h = i(228366),
    E = i(661439),
    S = i(73825),
    T = i(928039),
    x = i(277984),
    p = i(235986),
    f = i(408278),
    N = i(921853),
    _ = i(320448),
    I = i(375708),
    C = i(632787);
let b = s.forwardRef(function (e, t) {
    let { currentPageIndex: i, numPages: s, onChangePage: l, children: r, showPageCount: a = !0, ...o } = e,
        u = i >= s - 1,
        d = a
            ? I.intl.format(I.t.MtpIwg, { currentPage: i + 1, numPages: s })
            : I.intl.format(I.t.bKI77c, { currentPage: i + 1 });
    return (0, n.jsxs)("div", {
        ref: t,
        ...o,
        children: [
            r,
            (0, n.jsx)("div", {
                className: C.v,
                children: (0, n.jsxs)("div", {
                    className: C.U,
                    children: [
                        (0, n.jsx)(f.K, {
                            variant: "icon-only",
                            icon: N.n,
                            disabled: i <= 0,
                            onClick: () => l(i - 1),
                            "aria-label": I.intl.string(I.t.vgfxaA),
                        }),
                        (0, n.jsx)(A.E, { variant: "text-sm/medium", children: d }),
                        (0, n.jsx)(f.K, {
                            variant: "icon-only",
                            icon: _._,
                            disabled: u,
                            onClick: () => l(i + 1),
                            "aria-label": I.intl.string(I.t.XiOHRX),
                        }),
                    ],
                }),
            }),
        ],
    });
});
i(321073), i(938796);
var y = i(334279),
    v = i(122817),
    j = i(665260),
    O = i(315069),
    R = i(32731),
    L = i(557009),
    D = i(202613),
    P = i(243217),
    G = i(652215),
    M = i(788868);
class U extends O.A {
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
    static createFromServer(e) {
        let t = null != e.payment_source ? D.Ay.createFromServer(e.payment_source) : null,
            i = null != e.sku ? R.A.createFromServer(e.sku) : null,
            n = null != e.subscription ? P.A.createFromServer(e.subscription) : null;
        return new U({
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
            subscription: n,
            skuId: e.sku_id,
            skuPrice: e.sku_price,
            sku: i,
            downloadableInvoice: e.downloadable_invoice,
            downloadableRefundInvoices: e.downloadable_refund_invoices,
            hasInvoiceURL: e.has_invoice_url,
            hasRefundInvoiceURLs: e.has_refund_invoice_urls,
            premiumRefundDisqualificationReasons: e.premium_refund_disqualification_reasons,
            entitlements: null != e.entitlements ? e.entitlements.map((e) => L.A.createFromServer(e)) : void 0,
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
            (this.entitlements = e.entitlements);
    }
    get isPurchasedViaApple() {
        return this.paymentGateway === G.kM_.APPLE;
    }
    get isPurchasedViaGoogle() {
        return this.paymentGateway === G.kM_.GOOGLE;
    }
    get isPurchasedExternally() {
        return this.isPurchasedViaApple || this.isPurchasedViaGoogle;
    }
    get isSubscription() {
        return null != this.subscription;
    }
    get isPremiumSubscription() {
        return null != this.subscription && M.JM.has(this.subscription.planId);
    }
    get isPremiumGuildSubscription() {
        return (
            null != this.subscription &&
            null !=
                this.subscription.additionalPlans.find((e) => {
                    let { planId: t } = e;
                    return M.pW.has(t);
                })
        );
    }
    get isGift() {
        return j.Lt(this.flags, 1);
    }
    get isPremiumGift() {
        return this.isGift && Object.values(M.pe).includes(this.skuId);
    }
    get isGuildProductPurchase() {
        return (
            null != this.sku &&
            (this.sku.productLine === G.EZt.GUILD_PRODUCT || j.Lt(this.sku.flags, v.d.GUILD_PRODUCT))
        );
    }
    get isSoftDeletedProduct() {
        return this.sku?.deleted === !0;
    }
    get isCollectible() {
        return null != this.sku && this.sku.productLine === G.EZt.COLLECTIBLES;
    }
    get isFractionalPremium() {
        return null != this.skuId && y.I.ALL.has(this.skuId);
    }
    get isShopPurchase() {
        return this.isCollectible || this.isFractionalPremium;
    }
}
let V = [],
    k = !1;
function w(e) {
    let { payment: t } = e,
        i = U.createFromServer(t),
        n = V.findIndex((e) => e.id === t.id);
    -1 === n ? (V.push(i), V.sort((e, t) => t.createdAt.getTime() - e.createdAt.getTime())) : (V[n] = i), (V = [...V]);
}
class F extends d.Ay.Store {
    static displayName = "PaymentStore";
    getPayment(e) {
        return V.find((t) => t.id === e);
    }
    getPayments() {
        return V;
    }
    get hasFetchedPayments() {
        return k;
    }
}
let B = new F(h.h, {
    BILLING_PAYMENTS_FETCH_SUCCESS: function (e) {
        let { payments: t } = e;
        for (let e of ((k = !0), t)) {
            let t = U.createFromServer(e),
                i = V.findIndex((t) => t.id === e.id);
            -1 !== i ? (V[i] = t) : V.push(t);
        }
        V.sort((e, t) => t.createdAt.getTime() - e.createdAt.getTime()), (V = [...V]);
    },
    BILLING_PAYMENTS_FETCH_FAIL: function () {
        k = !0;
    },
    PAYMENT_UPDATE: w,
    BILLING_PAYMENT_FETCH_SUCCESS: w,
    LOGOUT: function () {
        (V = []), (k = !1);
    },
});
var z = i(97352),
    X = i(166403),
    Y = i(428262),
    H = i(989349),
    K = i.n(H),
    W = i(661531),
    Z = i(990078),
    q = i(821609),
    Q = i(939249),
    J = i(403581),
    $ = i(707554),
    ee = i(789645),
    et = i(933832),
    ei = i(349288),
    en = i(34188),
    es = i(597770),
    el = i(512950),
    er = i(975807),
    ea = i(793574),
    eo = i(688810),
    eu = i(46225),
    ed = i(587895),
    ec = i(636537),
    eg = i(683071),
    em = i(192308);
let eA = function (e, t) {
    (0, em.openModalLazy)(async () => {
        let { default: s } = await Promise.all([i.e("7755"), i.e("34138")]).then(i.bind(i, 206049));
        return (i) => (0, n.jsx)(s, { payment: e, paymentSource: t, ...i });
    });
};
var eh = i(818348),
    eE = i(12762);
async function eS(e) {
    try {
        return (
            await ec.Bo.get({
                url: G.Rsh.BILLING_INVOICE_BREAKDOWN,
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
        [i, l] = s.useState(null),
        [r, a] = s.useState(null);
    async function o(e) {
        try {
            let i = await eS(t.id);
            l(i);
            let n = e ? i.refundInvoiceLinks[0] : i.invoiceLink;
            window.open(n, "_blank"), a(null);
        } catch (e) {
            a(e.body?.message);
        }
    }
    let u = null != t.paymentSource && t.status === eh.__.COMPLETED,
        d = i?.invoiceLink,
        c = i?.refundInvoiceLinks;
    return t.hasInvoiceURL && null == i
        ? (0, n.jsxs)("div", {
              className: eE.It,
              children: [
                  (0, n.jsx)(ei.Anchor, { onClick: () => o(!1), children: I.intl.formatToPlainString(I.t.R0xzCN, {}) }),
                  t.hasRefundInvoiceURLs
                      ? (0, n.jsx)(ei.Anchor, {
                            className: eE.oe,
                            onClick: () => o(!0),
                            children: I.intl.formatToPlainString(I.t["3x6NGw"], {}),
                        })
                      : null,
                  null != r && "" !== r && (0, n.jsx)(eg.w, { type: "critical", children: r }),
              ],
          })
        : t.hasInvoiceURL && null != i
          ? (0, n.jsxs)("div", {
                className: eE.It,
                children: [
                    (0, n.jsx)(ei.Anchor, { href: d, children: I.intl.formatToPlainString(I.t.R0xzCN, {}) }),
                    null != c
                        ? c.map((e, t) =>
                              (0, n.jsx)(
                                  ei.Anchor,
                                  {
                                      className: eE.oe,
                                      href: e,
                                      children: I.intl.formatToPlainString(I.t["3x6NGw"], {}),
                                  },
                                  t,
                              ),
                          )
                        : null,
                    null != r && "" !== r && (0, n.jsx)(eg.w, { type: "critical", children: r }),
                ],
            })
          : u
            ? (0, n.jsx)("div", {
                  className: eE.It,
                  children: (0, n.jsx)(ei.Anchor, {
                      onClick: () => {
                          var e;
                          (e = t.paymentSource), eA(t, e);
                      },
                      children: I.intl.formatToPlainString(I.t.onRIxS, {}),
                  }),
              })
            : null;
}
var ex = i(769015),
    ep = i(250627),
    ef = i(871109),
    eN = i(571654),
    e_ = i(411342),
    eI = i(179499),
    eC = i(741231),
    eb = i(95035),
    ey = i(576243),
    ev = i(337095),
    ej = i(871123),
    eO = i(510022),
    eR = i(68935),
    eL = i(148355),
    eD = i(780964),
    eP = i(830543),
    eG = i(766075),
    eM = i(106799),
    eU = i(317525),
    eV = i(71393),
    ek = i(287809),
    ew = i(295405),
    eF = i(90165),
    eB = i(147925),
    ez = i(174459),
    eX = i(957565),
    eY = i(58703),
    eH = i(580630),
    eK = i(427262),
    eW = i(219887);
let eZ = (e) => `https://${G.XlF}/hc/${e.toLowerCase()}/requests/new?ticket_form_id=360000118612`,
    eq = [G.Puh.DURABLE_PRIMARY, G.Puh.DURABLE, G.Puh.CONSUMABLE],
    eQ = [G.__0.FAILED, G.__0.REVERSED, G.__0.CANCELED],
    eJ = [eh.kM.APPLE];
function e$(e) {
    let { description: t, cost: i } = e;
    return (0, n.jsx)("li", {
        className: eE.mg,
        children: (0, n.jsxs)(p.A, {
            justify: p.A.Justify.BETWEEN,
            children: [(0, n.jsx)("div", { children: t }), (0, n.jsx)("div", { children: i })],
        }),
    });
}
function e0(e) {
    let { value: t, copyText: i, copyFeedbackText: l } = e,
        [r, a] = s.useState(!1),
        [o, u] = s.useState(!1);
    return (0, n.jsx)(Z.m, {
        forceOpen: o,
        text: r ? l : i,
        children: (0, n.jsx)(Q.D, {
            onMouseEnter: () => {
                r && a(!1);
            },
            onMouseLeave: () => {
                u(!1);
            },
            onClick: function () {
                (0, eX.C)(t, () => {
                    u(!0), a(!0);
                });
            },
            children: (0, n.jsx)("div", { className: eE.l9, children: t }),
        }),
    });
}
function e1(e) {
    let { description: t, detail: i } = e;
    return (0, n.jsx)("li", {
        className: eE.Iu,
        children: (0, n.jsxs)(p.A, {
            justify: p.A.Justify.BETWEEN,
            children: [(0, n.jsx)("div", { children: t }), (0, n.jsx)("div", { children: i })],
        }),
    });
}
function e2(e) {
    let { guildId: t, guildProductListingId: i } = e,
        l = (0, ep.Qi)(t, i, { requireCurrentGuild: !1 }),
        r = (0, eN.z)(l),
        a = (0, d.bG)([eV.A], () => eV.A.getGuild(t)),
        o = l?.role_id != null && l?.attachments_count === 0 ? I.intl.string(I.t.H11qcT) : r,
        u = s.useCallback(async () => {
            a?.features.has(G.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE)
                ? await (0, eC.A)(G.BVt.GUILD_PRODUCT(t, i))
                : await (0, eC.A)(G.BVt.CHANNEL(t)),
                (0, eP.default)();
        }, [a, t, i]);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            null != o && (0, n.jsx)(e1, { description: I.intl.string(I.t.lXPbJb), detail: o }),
            null != a &&
                (0, n.jsx)(e1, {
                    description: I.intl.string(I.t.Wpn8z8),
                    detail: (0, n.jsx)(eb.A, { onClick: u, children: a.name }),
                }),
        ],
    });
}
function e3(e) {
    let { guildId: t, guildProductListingId: i } = e,
        s = (0, ep.Qi)(t, i, { requireCurrentGuild: !1 }),
        l = (0, d.bG)([ef.A], () => ef.A.getGuildProductFetchState(i) === ef.e.FETCHING),
        r = s?.role_id,
        a = (0, d.bG)([eU.A], () => (null != r ? eU.A.getRole(t, r) : void 0), [t, r]),
        o = (0, eI.A)({ guildId: t, productId: i }),
        u = (s?.attachments?.length ?? 0) > 0,
        c = null != a;
    return l
        ? (0, n.jsx)("div", { className: eE.hT, children: (0, n.jsx)(m.y, {}) })
        : null != s && (u || c)
          ? (0, n.jsxs)("div", {
                className: eE.hT,
                children: [
                    u &&
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(A.E, {
                                    variant: "text-xs/semibold",
                                    color: "text-default",
                                    className: eE.yE,
                                    children: I.intl.string(I.t.hxawoy),
                                }),
                                (0, n.jsx)(q.$, { ...o }),
                            ],
                        }),
                    c &&
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                u && (0, n.jsx)("div", { className: eE.yF }),
                                (0, n.jsx)(A.E, {
                                    variant: "text-xs/semibold",
                                    color: "text-default",
                                    className: eE.yE,
                                    children: I.intl.string(I.t.gWBNet),
                                }),
                                (0, n.jsx)(e_.A, { role: a }),
                            ],
                        }),
                ],
            })
          : null;
}
function e6(e) {
    let { withGradient: t, compactMode: i } = e,
        s = i ? 28 : 16;
    return t
        ? (0, n.jsx)(ey.A, { size: i ? 40 : 24, iconSize: s, color: W.A.unsafe_rawColors.NEUTRAL_1, className: eE.Sy })
        : (0, n.jsx)("div", {
              className: r()(eE.Sy, eE.uX, i ? eE.vU : eE.Xr),
              children: (0, n.jsx)(J.t, { size: "custom", width: s, height: s, color: W.A.colors.ICON_DEFAULT }),
          });
}
class e4 extends s.PureComponent {
    static defaultProps = { compactMode: !1 };
    state = { expanded: !1 };
    refundRules = [
        {
            rule: "PURCHASE_DATE",
            canRefund: () => {
                let { payment: e } = this.props,
                    t = e.isPremiumSubscription || e.isPremiumGuildSubscription || e.isPremiumGift ? 5 : 14;
                return this.daysSincePurchase <= t;
            },
        },
        {
            rule: "SKU_TYPE",
            canRefund: () => {
                let { payment: e } = this.props;
                return null == e.sku || e.sku.type !== G.Puh.CONSUMABLE;
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
                return !eQ.includes(e.status);
            },
        },
        {
            rule: "PAYMENT_GATEWAY",
            canRefund: () => {
                let { payment: e } = this.props;
                return null == e.paymentGateway || !eJ.includes(e.paymentGateway);
            },
        },
        {
            rule: "SKU_STICKER_PACK",
            canRefund: () => {
                let { payment: e } = this.props;
                return null == e.sku || !(0, j.Lt)(e.sku.flags, G.d68.STICKER);
            },
        },
        {
            rule: "SUBSCRIPTION_TYPE",
            canRefund: () => {
                let { payment: e } = this.props;
                return e.subscription?.type !== G.rzx.GUILD && e.subscription?.type !== G.rzx.APPLICATION;
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
            i = null != t && t.isAfter(e.createdAt) ? t : e.createdAt;
        return K()().diff(i, "days");
    }
    get isPremium() {
        let { payment: e } = this.props;
        return e.isPremiumSubscription || e.isPremiumGuildSubscription || e.isPremiumGift;
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
            case G.__0.PENDING:
                return (0, n.jsx)("span", { className: eE.Xg, children: I.intl.string(I.t.y7F0Re) });
            case G.__0.FAILED:
                return (0, n.jsx)("span", { className: eE.ob, children: I.intl.string(I.t.Yo4ru6) });
            case G.__0.REFUNDED:
                if (e.amountRefunded !== e.amount)
                    return (0, n.jsx)("span", { className: eE.gD, children: I.intl.string(I.t.lYbZzz) });
                return (0, n.jsx)("span", { className: eE.gD, children: I.intl.string(I.t.ZBb6NK) });
            case G.__0.REVERSED:
                return (0, n.jsx)("span", { className: eE.ob, children: I.intl.string(I.t.YQv9Li) });
            case G.__0.CANCELED:
                return (0, n.jsx)("span", { className: eE.ob, children: I.intl.string(I.t.ttkBhy) });
            default:
                return null;
        }
    }
    renderTenantStatusOverride() {
        let { payment: e, hasLinkedToApplication: t } = this.props;
        return (0, ej.bF)(e.sku) && e.status === G.__0.COMPLETED
            ? null != e.entitlements && e.entitlements.some((e) => e.isFulfilled())
                ? (0, n.jsx)("span", { className: eE.gD, children: I.intl.string(I.t.Osji1u) })
                : e.isGift
                  ? null != e.entitlements && e.entitlements.some((e) => null != e.gifterId)
                      ? (0, n.jsx)("span", { className: eE.gD, children: I.intl.string(I.t.lIsIFo) })
                      : (0, n.jsx)("span", { className: eE.Tf, children: I.intl.string(I.t["+tqSi3"]) })
                  : t
                    ? (0, n.jsx)("span", { className: eE.Tf, children: I.intl.string(I.t.y7F0Re) })
                    : (0, n.jsx)("span", { className: eE.Tf, children: I.intl.string(I.t.HHC5Z4) })
            : null;
    }
    renderStatus() {
        return this.renderTenantStatusOverride() ?? this.renderDefaultStatus();
    }
    renderAmount(e) {
        let { payment: t } = this.props;
        return t.currency === eh.Yr.DISCORD_ORB
            ? (0, n.jsxs)("span", {
                  className: eE.db,
                  children: [
                      (0, n.jsx)(eM.A, { customSize: 16 }),
                      I.intl.formatToPlainString(I.t.YMor7k, { count: e }),
                  ],
              })
            : (0, eH.$g)(e, t.currency);
    }
    renderPrice() {
        let { payment: e } = this.props,
            t = e.amount - e.amountRefunded;
        return (0, n.jsx)("span", { className: eE.q9, children: this.renderAmount(t) });
    }
    renderPaymentIdField() {
        let { payment: e } = this.props;
        return (0, n.jsx)("li", {
            className: eE.mg,
            children: (0, n.jsxs)("div", {
                className: eE.bx,
                children: [
                    (0, n.jsx)("div", { children: I.intl.string(I.t["UQim+r"]) }),
                    (0, n.jsx)(e0, {
                        value: e.id,
                        copyText: I.intl.string(I.t["Mdk9+A"]),
                        copyFeedbackText: I.intl.string(I.t["7eIrA2"]),
                    }),
                ],
            }),
        });
    }
    renderPaymentBreakdown() {
        let { payment: e, locale: t, application: i } = this.props,
            { taxInclusive: l, tax: a, amount: o, amountRefunded: u } = e,
            d = i?.guildId;
        return (0, n.jsxs)("div", {
            className: r()(eE.iL, eE.W),
            children: [
                null != e.paymentSource
                    ? (0, n.jsx)(eW.A, {
                          paymentSource: e.paymentSource,
                          locale: t,
                          descriptionClassName: eE.iL,
                          showLabels: !0,
                          showPaymentSourceIcon: !0,
                      })
                    : e.paymentGateway === eh.kM.APPLE_PARTNER
                      ? (0, n.jsx)(eW.A, {
                            paymentSource: new D.Pw({}),
                            locale: t,
                            descriptionClassName: eE.iL,
                            showLabels: !0,
                            showPaymentSourceIcon: !0,
                        })
                      : null,
                (0, n.jsxs)("ul", {
                    children: [
                        this.renderPaymentIdField(),
                        !l && a > 0
                            ? (0, n.jsxs)(s.Fragment, {
                                  children: [
                                      (0, n.jsx)(e$, { description: e.description, cost: this.renderAmount(o - a) }),
                                      (0, n.jsx)(e$, {
                                          description: I.intl.string(I.t.QgWXht),
                                          cost: this.renderAmount(a),
                                      }),
                                  ],
                              })
                            : null,
                        (0, n.jsx)(e$, { description: I.intl.string(I.t.txajQG), cost: this.renderAmount(o) }),
                        e.isGuildProductPurchase &&
                            null != d &&
                            null != e.sku &&
                            (0, n.jsx)(e2, { guildId: d, guildProductListingId: e.sku.id }),
                        u > 0 &&
                            (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsx)(e$, {
                                        description: I.intl.string(I.t["A+I0AP"]),
                                        cost: this.renderAmount(u),
                                    }),
                                    (0, n.jsx)(e$, {
                                        description: I.intl.string(I.t.xER6Wi),
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
        return (0, n.jsx)(eT, { payment: e });
    }
    renderAdditionalGameItemDetails() {
        let {
                claimedGiftUser: e,
                payment: t,
                hasLinkedToApplication: i,
                application: l,
                locale: r,
                analyticsLocations: a,
            } = this.props,
            o = t.entitlements?.some((e) => e.isFulfilled());
        return t.status === G.__0.REFUNDED
            ? (0, n.jsxs)(s.Fragment, {
                  children: [
                      (0, n.jsx)($.H, { className: eE.mW, children: I.intl.string(I.t["gIGB/A"]) }),
                      (0, n.jsx)("div", {
                          className: eE.iL,
                          children:
                              null != e
                                  ? I.intl.format(I.t.Q1K9eg, { username: eK.Ay.getName(e) })
                                  : I.intl.format(I.t.IBtGwC, { applicationName: l?.name }),
                      }),
                  ],
              })
            : t.isGift
              ? (0, n.jsxs)(s.Fragment, {
                    children: [
                        (0, n.jsx)($.H, { className: eE.mW, children: I.intl.string(I.t["gIGB/A"]) }),
                        (0, n.jsx)("div", {
                            className: eE.iL,
                            children:
                                null != e
                                    ? I.intl.format(I.t.vfUW65, { username: eK.Ay.getName(e) })
                                    : I.intl.string(I.t["18wIqp"]),
                        }),
                        null == e &&
                            (0, n.jsx)("div", {
                                className: eE.TP,
                                children: (0, n.jsx)(q.$, {
                                    variant: "primary",
                                    text: I.intl.string(I.t["jcSP+g"]),
                                    onClick: () => (0, eG.openUserSettings)(eD.X.GIFT_PANEL),
                                }),
                            }),
                    ],
                })
              : o
                ? null
                : (0, n.jsxs)(s.Fragment, {
                      children: [
                          (0, n.jsx)($.H, { className: eE.mW, children: I.intl.string(I.t["gIGB/A"]) }),
                          (0, n.jsx)("div", {
                              className: eE.iL,
                              children: i
                                  ? I.intl.format(I.t.DQQCAw, { applicationName: l?.name, skuName: t.sku?.name })
                                  : I.intl.format(I.t.ED2BqF, { applicationName: l?.name, skuName: t.sku?.name }),
                          }),
                          (0, n.jsx)("div", {
                              className: eE.TP,
                              children: i
                                  ? (0, n.jsx)(q.$, {
                                        variant: "primary",
                                        text: I.intl.string(I.t.zoztQA),
                                        onClick: () => (0, er.A)(eZ(r)),
                                    })
                                  : (0, n.jsx)(q.$, {
                                        variant: "primary",
                                        text: I.intl.string(I.t["jCqvk/"]),
                                        onClick: () => {
                                            null != t.sku &&
                                                null != l &&
                                                (ez.default.track(
                                                    G.HAw.PAYMENT_HISTORY_CONNECT_ACCOUNT_BUTTON_CLICKED,
                                                    { sku_id: t.sku.id, application_id: l.id, location_stack: a },
                                                ),
                                                (0, eO.n)({ sku: t.sku, application: l, analyticsLocations: a }));
                                        },
                                    }),
                          }),
                      ],
                  });
    }
    renderAdditionalTenantInfo() {
        let { payment: e } = this.props;
        if ((0, ej.bF)(e.sku)) return this.renderAdditionalGameItemDetails();
    }
    renderRefundDetails() {
        let e,
            { locale: t, payment: i } = this.props,
            l = this.validateRefundRules();
        if (
            l.includes("PAYMENT_GATEWAY") ||
            l.includes("PAYMENT_STATUS") ||
            l.includes("ALREADY_REFUNDED") ||
            l.includes("SKU_STICKER_PACK") ||
            l.includes("SUBSCRIPTION_TYPE") ||
            l.includes("GUILD_PRODUCT")
        )
            return null;
        let r = 0 === l.length,
            a = eZ(t),
            o = this.isPremium ? 5 : 14;
        return (
            (e =
                l.includes("SKU_TYPE") && !i.isShopPurchase
                    ? I.intl.format(I.t["5lvoVS"], { supportURL: a })
                    : r
                      ? i.isPremiumSubscription || i.isPremiumGuildSubscription
                          ? I.intl.format(I.t.EPYteX, { dateLimit: o, supportURL: a })
                          : i.isGift
                            ? I.intl.format(I.t["16eP/L"], { dateLimit: o, supportURL: a })
                            : I.intl.format(I.t["1LDI4J"], { dateLimit: o, playtimeLimit: 2, supportURL: a })
                      : i.isShopPurchase
                        ? I.intl.string(I.t.s9TZM1)
                        : i.isGift
                          ? I.intl.formatToPlainString(I.t.owlOWc, { dateLimit: o })
                          : i.isPremiumSubscription || i.isPremiumGuildSubscription
                            ? I.intl.formatToPlainString(I.t.dk7vyL, { dateLimit: o })
                            : I.intl.formatToPlainString(I.t.s4Kk0C, { dateLimit: o, playtimeLimit: 2 })),
            (0, n.jsxs)(s.Fragment, {
                children: [
                    (0, n.jsx)($.H, { className: eE.mW, children: I.intl.string(I.t["n/27pr"]) }),
                    (0, n.jsxs)("div", {
                        className: eE.iL,
                        children: [(0, n.jsx)("div", { children: e }), this.renderRefundActions(l)],
                    }),
                ],
            })
        );
    }
    renderRefundCriteria(e, t, i, s) {
        return (0, n.jsxs)(
            "div",
            {
                className: eE._Z,
                children: [
                    (0, n.jsx)($.H, { className: eE.ud, children: e }),
                    (0, n.jsxs)("div", {
                        className: eE.z9,
                        children: [
                            (0, n.jsx)(t, { className: eE.xb, color: "currentColor" }),
                            null != i && (0, n.jsx)("div", { children: i }),
                        ],
                    }),
                ],
            },
            s,
        );
    }
    renderRefundActions(e) {
        let { locale: t, payment: i } = this.props;
        if (e.includes("SKU_TYPE")) return null;
        let s = e.includes("PURCHASE_DATE") ? ee.P : et.A;
        return (0, n.jsxs)("div", {
            className: eE.My,
            children: [
                (0, n.jsx)("div", {
                    className: eE.Kf,
                    children:
                        !i.isShopPurchase &&
                        this.renderRefundCriteria(
                            I.intl.string(I.t.H0RNz4),
                            s,
                            I.intl.formatToPlainString(I.t["7dtXa/"], { daysSincePurchase: this.daysSincePurchase }),
                        ),
                }),
                (0, n.jsx)(ei.Anchor, { href: eZ(t), children: I.intl.string(I.t.re5nOB) }),
            ],
        });
    }
    renderDescription() {
        let e,
            t,
            { compactMode: i, payment: l, application: r, guild: a, stickerPack: o, plan: u } = this.props,
            { expanded: d } = this.state,
            c = l.sku,
            g = l.subscription,
            m = null != l.paymentSource && G.AD1.has(l.paymentSource.type);
        if (null != g && 0 !== g.items.length) {
            let s = [],
                o = null;
            if (g.type === G.rzx.PREMIUM) {
                let t;
                if (
                    (g.items.forEach((e) => {
                        let { planId: i, quantity: n } = e;
                        (0, Y.xq)(i)
                            ? (s.push(Y.Ay.getDisplayName(i, !1, m)), (o = (0, Y.mH)(M.hd[i].skuId)))
                            : (s.push(`${n > 1 ? `${n}x ` : ""}${Y.Ay.getDisplayName(i, !1, m)}`),
                              null == o && (o = (0, Y.mH)(M.hd[i].skuId))),
                            (0, Y.z4)(i) || (t ??= i);
                    }),
                    null != t)
                ) {
                    let s = Y.Ay.getPremiumType(t);
                    e = (0, n.jsx)(e6, { withGradient: s === M.PremiumTypes.TIER_2, compactMode: i });
                }
            } else if (g.type === G.rzx.GUILD) {
                if (null != u) {
                    let e = u.interval === M.WT.YEAR ? I.t.V6UFQM : I.t["6oq128"];
                    s.push(I.intl.format(e, { planName: u.name })), (o = u.skuId);
                }
            } else
                g.type,
                    null != u && (o = u.skuId),
                    null != r
                        ? s.push(I.intl.formatToPlainString(I.t["0wL/VI"], { tier: c?.name }))
                        : s.push(I.intl.string(I.t["9czSYu"]));
            (t = 0 !== s.length ? s.join(", ") : l.description),
                null == e &&
                    (e = (0, n.jsx)(ex.A, {
                        className: eE.Sy,
                        guildClassName: eE.zA,
                        game: r,
                        guild: a,
                        size: ex.M.XSMALL,
                        skuId: o ?? c?.id,
                    }));
        } else if (null != c)
            if (
                ((t = l.isGuildProductPurchase && l.isSoftDeletedProduct ? I.intl.string(I.t.O7uLmw) : c.name),
                null != o)
            ) {
                let t = (0, eR.Id)(o);
                e = (0, n.jsx)(eL.A, {
                    disableAnimation: !d,
                    isInteracting: d,
                    sticker: t,
                    className: eE.Sy,
                    size: 24,
                });
            } else
                e = l.isFractionalPremium
                    ? (0, n.jsx)(e6, { withGradient: !0, compactMode: i })
                    : l.isCollectible
                      ? (0, n.jsx)(en.U, {
                            size: "custom",
                            width: 23,
                            height: 23,
                            color: "currentColor",
                            className: eE.sV,
                        })
                      : (0, n.jsx)(ex.A, {
                            className: eE.Sy,
                            guildClassName: eE.zA,
                            game: r,
                            guild: a,
                            size: ex.M.XSMALL,
                            skuId: c.id,
                        });
        else (e = (0, n.jsx)(e6, { withGradient: !1, compactMode: i })), (t = l.description);
        let h = (0, n.jsx)(A.E, {
                variant: "text-sm/normal",
                className: eE.p6,
                children: (0, eY.i$)(K()(l.createdAt), "MM/DD/YYYY"),
            }),
            E = l.isGift
                ? (0, n.jsx)(Z.m, {
                      text: I.intl.string(I.t.QddTpm),
                      children: (0, n.jsx)(es.o, { size: "md", color: "currentColor", className: eE.ez }),
                  })
                : null;
        return i
            ? (0, n.jsxs)("div", { className: eE.h_, children: [e, (0, n.jsxs)("div", { children: [t, h] }), E] })
            : (0, n.jsxs)(s.Fragment, {
                  children: [
                      h,
                      (0, n.jsxs)("div", { className: eE.h_, children: [e, (0, n.jsx)("div", { children: t }), E] }),
                  ],
              });
    }
    renderGuildProductBenefits() {
        let { payment: e, application: t, locale: i } = this.props,
            s = t?.guildId;
        return e.isGuildProductPurchase
            ? (0, n.jsxs)(n.Fragment, {
                  children: [
                      (0, n.jsx)("div", { className: eE.ts }),
                      e.isSoftDeletedProduct
                          ? (0, n.jsx)(el.p, {
                                messageType: el.Y.WARNING,
                                action: (0, n.jsx)(q.$, {
                                    variant: "overlay-secondary",
                                    text: I.intl.string(I.t.zoztQA),
                                    onClick: () => (0, er.A)(eZ(i)),
                                }),
                                children: I.intl.string(I.t["3AvulN"]),
                            })
                          : null != s &&
                            null != e.sku &&
                            (0, n.jsx)(e3, { guildId: s, guildProductListingId: e.sku.id }),
                  ],
              })
            : null;
    }
    renderExpandedSection() {
        return (0, n.jsx)(Q.D, {
            onClick: (e) => e.stopPropagation(),
            children: (0, n.jsxs)("div", {
                className: eE.WI,
                children: [
                    (0, n.jsx)($.H, { className: eE.mW, children: I.intl.string(I.t.nyzoFb) }),
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
        let { payment: e, className: t, compactMode: i } = this.props,
            { expanded: s } = this.state;
        return (0, n.jsx)(u.tG, {
            id: e.id,
            children: (e) =>
                (0, n.jsxs)(Q.D, {
                    onClick: this.handleExpandInfo,
                    "data-expanded": s,
                    className: r()(eE.Ji, t, { [eE.oE]: i }),
                    focusProps: { offset: 4 },
                    ...e,
                    children: [
                        (0, n.jsxs)(p.A, {
                            className: eE.J7,
                            align: p.A.Align.CENTER,
                            "data-expanded": s,
                            children: [
                                this.renderDescription(),
                                (0, n.jsxs)("div", {
                                    className: eE.vj,
                                    children: [this.renderStatus(), this.renderPrice()],
                                }),
                                (0, n.jsx)(eB.A, {
                                    className: eE.fT,
                                    direction: s ? eB.A.Directions.UP : eB.A.Directions.DOWN,
                                }),
                            ],
                        }),
                        s ? this.renderExpandedSection() : null,
                    ],
                }),
        });
    }
}
function e7(e) {
    let { payment: t, locale: i, compactMode: l, className: r } = e,
        a = null != t.sku && eq.includes(t.sku.type),
        o = null != t.sku && a ? t.sku.applicationId : null,
        u = t.sku?.applicationId,
        c = t.subscription?.type === G.rzx.APPLICATION,
        {
            applicationStatistics: g,
            gameApplication: m,
            paymentSources: A,
        } = (0, d.cf)([ew.A, eF.A, ed.A], () => ({
            applicationStatistics: null != o ? eF.A.getCurrentUserStatisticsForApplication(o) : null,
            gameApplication: ed.A.getApplication(o ?? "") ?? t.sku?.application,
            paymentSources: ew.A.paymentSources,
        })),
        { hasAlreadyLinked: h } = (0, eu.RD)((0, ej.bF)(t.sku) ? m : void 0),
        E = (0, d.bG)([ed.A], () => (null != u ? ed.A.getApplication(u) : null));
    s.useEffect(() => {
        c && null != u && (0, ev.TA)(u);
    }, [u, c]);
    let S = (0, d.bG)([eV.A], () => eV.A.getGuild(m?.guildId)),
        T = a ? m : void 0,
        x = t.subscription,
        p = (0, d.bG)([z.A], () => (null != x && x.type !== G.rzx.PREMIUM ? z.A.get(x.items[0].planId) : null)),
        f = (0, d.bG)([ek.default], () => {
            let e = t.isGift ? t.entitlements?.find((e) => e.user?.id != null && null != e.gifterId) : null;
            return null == e ? null : (ek.default.getUser(e.user?.id ?? null) ?? e?.user);
        }, [t]),
        { analyticsLocations: N } = (0, eo.Ay)(ea.A.BILLING_SETTINGS_BILLING);
    return (0, n.jsx)(e4, {
        applicationStatistics: g,
        application: c ? E : T,
        analyticsLocations: N,
        guild: S,
        stickerPack: null,
        paymentSources: A,
        locale: i,
        compactMode: l,
        className: r,
        payment: t,
        plan: p,
        claimedGiftUser: f,
        hasLinkedToApplication: h,
    });
}
var e8 = i(687788);
function e5(e) {
    let { payments: t, locale: i, compactMode: l, numPages: a } = e,
        o = s.useRef(null),
        [d, g] = s.useState(0),
        [m, A] = s.useState(null),
        h = t.slice(10 * d, (d + 1) * 10);
    s.useEffect(() => {
        o.current?.scrollTo({ to: 0 });
    }, [d]);
    let E = s.useCallback(
            (e) => {
                g(e);
                let i = t[t.length - 1].id;
                e >= a - 2 && m !== i && ((0, x.CK)(10, i), A(i));
            },
            [t, a, m],
        ),
        S = (0, T.A)("billing-history", o);
    return (0, n.jsx)(u.hD, {
        navigator: S,
        children: (0, n.jsx)(u.PR, {
            children: (e) => {
                let { ref: t, ...s } = e;
                return (0, n.jsx)(b, {
                    className: e8.GD,
                    currentPageIndex: d,
                    onChangePage: E,
                    numPages: a,
                    showPageCount: !1,
                    ref: t,
                    ...s,
                    children: (0, n.jsx)(c.Ch, {
                        className: e8.Bd,
                        ref: o,
                        overflow: "auto",
                        children: h.map((e, t) =>
                            (0, n.jsx)(e7, { className: r()(e8.Nj, e8.Bd), payment: e, locale: i, compactMode: l }, t),
                        ),
                    }),
                });
            },
        }),
    });
}
class e9 extends s.PureComponent {
    static defaultProps = { compactMode: !1 };
    scrollerRef = s.createRef();
    get numPages() {
        return Math.max(Math.ceil(this.props.payments.length / 10), 1);
    }
    componentDidMount() {
        h.h.wait(() => {
            (0, E.X)(), (0, x.CK)(30);
        });
    }
    renderPremiumExternalSubscription(e) {
        return (
            o()(null != e.paymentGateway, "Expected payment gateway when rendering for external subscription"),
            (0, n.jsxs)(g.Z, {
                className: e8.K1,
                children: [
                    (0, n.jsx)("div", {
                        className: e8.BF,
                        children: I.intl.format(I.t["6mIX6s"], { paymentGatewayName: eh.qm[e.paymentGateway] }),
                    }),
                    (0, n.jsx)("div", {
                        className: e8.Q2,
                        children: I.intl.format(I.t.eG0uZB, {
                            paymentGatewayName: eh.qm[e.paymentGateway],
                            billingHistoryLink: (0, Y.tW)(e.paymentGateway, "BILLING_HISTORY"),
                        }),
                    }),
                ],
            })
        );
    }
    render() {
        let { compactMode: e, payments: t, subscription: i, locale: s, hasFetchedPayments: l } = this.props,
            a = null != i && i.isPurchasedExternally;
        return l
            ? (0, n.jsxs)("div", {
                  className: e8.GD,
                  children: [
                      null != i && a ? this.renderPremiumExternalSubscription(i) : null,
                      t.length > 0
                          ? (0, n.jsxs)("div", {
                                className: r()(e8.PQ, e8.GD),
                                children: [
                                    e
                                        ? null
                                        : (0, n.jsx)("div", {
                                              className: r()(e8.Nj, e8.Bd),
                                              children: (0, n.jsxs)(p.A, {
                                                  className: e8.Yi,
                                                  children: [
                                                      (0, n.jsx)("div", {
                                                          className: eE.p6,
                                                          children: I.intl.string(I.t["5t11BV"]),
                                                      }),
                                                      (0, n.jsx)("div", {
                                                          className: e8.Ir,
                                                          children: I.intl.string(I.t.yAAPb2),
                                                      }),
                                                      (0, n.jsx)("div", {
                                                          className: eE.vj,
                                                          children: I.intl.string(I.t["6MqHXV"]),
                                                      }),
                                                  ],
                                              }),
                                          }),
                                    (0, n.jsx)(e5, { compactMode: e, locale: s, payments: t, numPages: this.numPages }),
                                ],
                            })
                          : a
                            ? null
                            : (0, n.jsx)(A.E, {
                                  variant: "text-sm/normal",
                                  color: "text-subtle",
                                  children: I.intl.string(I.t.GqvDkk),
                              }),
                  ],
              })
            : (0, n.jsx)(m.y, {});
    }
}
function te(e) {
    let t = e.skuId,
        i = e.subscription?.items[0].planId;
    return !(null == t || null == i || Object.values(M.pe).includes(t) || (0, Y.ys)(i));
}
function tt(e) {
    let t = (0, d.bG)([B], () => B.getPayments()),
        i = (0, d.bG)([X.A], () => X.A.getPremiumTypeSubscription()),
        l = s.useMemo(
            () =>
                new Set(
                    t.filter(te).map((e) => {
                        let { subscription: t } = e;
                        return t?.items[0].planId;
                    }),
                ),
            [t],
        ),
        r = s.useMemo(
            () =>
                new Set(
                    t.filter(te).map((e) => {
                        let { skuId: t } = e;
                        return t;
                    }),
                ),
            [t],
        ),
        a = (0, d.yK)([z.A], () => z.A.getPlanIdsForSkus(Array.from(r))),
        o = s.useCallback(() => a.length === l.size, [a, l]);
    s.useEffect(() => {
        o() ||
            h.h.wait(() => {
                r.forEach((e) => (0, S.ur)(e, void 0, void 0, !0, void 0));
            });
    }, [o, r]);
    let u = (0, d.bG)([B], () => B.hasFetchedPayments);
    return (0, n.jsx)(e9, { ...e, payments: t, subscription: i, hasFetchedPayments: u });
}
