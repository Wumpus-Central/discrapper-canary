i.d(t, { A: () => e7 });
var n = i(627968),
    s = i(64700),
    l = i(503698),
    r = i.n(l),
    a = i(284009),
    o = i.n(a),
    u = i(837381),
    d = i(17928),
    c = i(689175),
    g = i(359778),
    m = i(289873),
    A = i(683071),
    h = i(228366),
    E = i(661439),
    T = i(73825),
    S = i(928039),
    x = i(753390),
    p = i(235986),
    f = i(408278),
    N = i(921853),
    _ = i(834730),
    C = i(320448),
    I = i(375708),
    b = i(632787);
let v = s.forwardRef(function (e, t) {
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
                className: b.v,
                children: (0, n.jsxs)("div", {
                    className: b.U,
                    children: [
                        (0, n.jsx)(f.K, {
                            variant: "icon-only",
                            icon: N.n,
                            disabled: i <= 0,
                            onClick: () => l(i - 1),
                            "aria-label": I.intl.string(I.t.vgfxaA),
                        }),
                        (0, n.jsx)(_.E, { variant: "text-sm/medium", children: d }),
                        (0, n.jsx)(f.K, {
                            variant: "icon-only",
                            icon: C._,
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
var j = i(122817),
    y = i(665260),
    O = i(315069),
    R = i(32731),
    L = i(557009),
    D = i(202613),
    P = i(243217),
    G = i(652215),
    U = i(788868);
class M extends O.A {
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
        return new M({
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
        return y.Lt(this.flags, 1);
    }
    get isPremiumGift() {
        return this.isGift && Object.values(U.pe).includes(this.skuId);
    }
    get isGuildProductPurchase() {
        return (
            null != this.sku &&
            (this.sku.productLine === G.EZt.GUILD_PRODUCT || y.Lt(this.sku.flags, j.d.GUILD_PRODUCT))
        );
    }
    get isSoftDeletedProduct() {
        return this.sku?.deleted === !0;
    }
    get isCollectible() {
        return null != this.sku && this.sku.productLine === G.EZt.COLLECTIBLES;
    }
}
let V = [],
    k = !1;
function w(e) {
    let { payment: t } = e,
        i = M.createFromServer(t),
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
            let t = M.createFromServer(e),
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
    Y = i(166403),
    X = i(428262),
    H = i(989349),
    K = i.n(H),
    W = i(990078),
    Z = i(821609),
    q = i(939249),
    Q = i(707554),
    J = i(789645),
    $ = i(933832),
    ee = i(349288),
    et = i(34188),
    ei = i(403581),
    en = i(597770),
    es = i(512950),
    el = i(975807),
    er = i(793574),
    ea = i(688810),
    eo = i(46225),
    eu = i(587895),
    ed = i(636537),
    ec = i(192308);
let eg = function (e, t) {
    (0, ec.openModalLazy)(async () => {
        let { default: s } = await Promise.all([i.e("7755"), i.e("34138")]).then(i.bind(i, 206049));
        return (i) => (0, n.jsx)(s, { payment: e, paymentSource: t, ...i });
    });
};
var em = i(818348),
    eA = i(12762);
async function eh(e) {
    try {
        return (
            await ed.Bo.get({
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
function eE(e) {
    let { payment: t } = e,
        [i, l] = s.useState(null),
        [r, a] = s.useState(null),
        o = async (e) => {
            try {
                let i = await eh(t.id);
                l(i);
                let n = e ? i.refundInvoiceLinks[0] : i.invoiceLink;
                window.open(n, "_blank"), a(null);
            } catch (e) {
                a(e.body?.message);
            }
        },
        u = null != t.paymentSource && t.status === em.__.COMPLETED,
        d = i?.invoiceLink,
        c = i?.refundInvoiceLinks;
    return t.hasInvoiceURL && null == i
        ? (0, n.jsxs)("div", {
              className: eA.It,
              children: [
                  (0, n.jsx)(ee.Anchor, { onClick: () => o(!1), children: I.intl.formatToPlainString(I.t.R0xzCN, {}) }),
                  t.hasRefundInvoiceURLs
                      ? (0, n.jsx)(ee.Anchor, {
                            className: eA.oe,
                            onClick: () => o(!0),
                            children: I.intl.formatToPlainString(I.t["3x6NGw"], {}),
                        })
                      : null,
                  null != r && "" !== r && (0, n.jsx)(A.w, { type: "critical", children: r }),
              ],
          })
        : t.hasInvoiceURL && null != i
          ? (0, n.jsxs)("div", {
                className: eA.It,
                children: [
                    (0, n.jsx)(ee.Anchor, { href: d, children: I.intl.formatToPlainString(I.t.R0xzCN, {}) }),
                    null != c
                        ? c.map((e, t) =>
                              (0, n.jsx)(
                                  ee.Anchor,
                                  {
                                      className: eA.oe,
                                      href: e,
                                      children: I.intl.formatToPlainString(I.t["3x6NGw"], {}),
                                  },
                                  t,
                              ),
                          )
                        : null,
                    null != r && "" !== r && (0, n.jsx)(A.w, { type: "critical", children: r }),
                ],
            })
          : u
            ? (0, n.jsx)("div", {
                  className: eA.It,
                  children: (0, n.jsx)(ee.Anchor, {
                      onClick: () => {
                          var e;
                          (e = t.paymentSource), eg(t, e);
                      },
                      children: I.intl.formatToPlainString(I.t.onRIxS, {}),
                  }),
              })
            : null;
}
var eT = i(137177),
    eS = i(250627),
    ex = i(871109),
    ep = i(571654),
    ef = i(411342),
    eN = i(179499),
    e_ = i(741231),
    eC = i(95035),
    eI = i(337095),
    eb = i(871123),
    ev = i(510022),
    ej = i(68935),
    ey = i(148355),
    eO = i(780964),
    eR = i(830543),
    eL = i(766075),
    eD = i(317525),
    eP = i(71393),
    eG = i(287809),
    eU = i(295405),
    eM = i(90165),
    eV = i(147925),
    ek = i(174459),
    ew = i(957565),
    eF = i(58703),
    eB = i(580630),
    ez = i(427262),
    eY = i(219887);
let eX = (e) => `https://${G.XlF}/hc/${e.toLowerCase()}/requests/new?ticket_form_id=360000118612`,
    eH = [G.Puh.DURABLE_PRIMARY, G.Puh.DURABLE, G.Puh.CONSUMABLE],
    eK = [G.__0.FAILED, G.__0.REVERSED, G.__0.CANCELED],
    eW = [em.kM.APPLE],
    eZ = (e) => {
        let { description: t, cost: i } = e;
        return (0, n.jsx)("li", {
            className: eA.mg,
            children: (0, n.jsxs)(p.A, {
                justify: p.A.Justify.BETWEEN,
                children: [(0, n.jsx)("div", { children: t }), (0, n.jsx)("div", { children: i })],
            }),
        });
    };
function eq(e) {
    let { value: t, copyText: i, copyFeedbackText: l } = e,
        [r, a] = s.useState(!1),
        [o, u] = s.useState(!1);
    return (0, n.jsx)(W.m, {
        forceOpen: o,
        text: r ? l : i,
        children: (0, n.jsx)(q.D, {
            onMouseEnter: () => {
                r && a(!1);
            },
            onMouseLeave: () => {
                u(!1);
            },
            onClick: () => {
                (0, ew.C)(t, () => {
                    u(!0), a(!0);
                });
            },
            children: (0, n.jsx)("div", { className: eA.l9, children: t }),
        }),
    });
}
let eQ = (e) => {
    let { description: t, detail: i } = e;
    return (0, n.jsx)("li", {
        className: eA.Iu,
        children: (0, n.jsxs)(p.A, {
            justify: p.A.Justify.BETWEEN,
            children: [(0, n.jsx)("div", { children: t }), (0, n.jsx)("div", { children: i })],
        }),
    });
};
function eJ(e) {
    let { guildId: t, guildProductListingId: i } = e,
        l = (0, eS.Qi)(t, i, { requireCurrentGuild: !1 }),
        r = (0, ep.z)(l),
        a = (0, d.bG)([eP.A], () => eP.A.getGuild(t)),
        o = l?.role_id != null && l?.attachments_count === 0 ? I.intl.string(I.t.H11qcT) : r,
        u = s.useCallback(async () => {
            a?.features.has(G.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE)
                ? await (0, e_.A)(G.BVt.GUILD_PRODUCT(t, i))
                : await (0, e_.A)(G.BVt.CHANNEL(t)),
                (0, eR.default)();
        }, [a, t, i]);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            null != o && (0, n.jsx)(eQ, { description: I.intl.string(I.t.lXPbJb), detail: o }),
            null != a &&
                (0, n.jsx)(eQ, {
                    description: I.intl.string(I.t.Wpn8z8),
                    detail: (0, n.jsx)(eC.A, { onClick: u, children: a.name }),
                }),
        ],
    });
}
function e$(e) {
    let { guildId: t, guildProductListingId: i } = e,
        s = (0, eS.Qi)(t, i, { requireCurrentGuild: !1 }),
        l = (0, d.bG)([ex.A], () => ex.A.getGuildProductFetchState(i) === ex.e.FETCHING),
        r = s?.role_id,
        a = (0, d.bG)([eD.A], () => (null != r ? eD.A.getRole(t, r) : void 0), [t, r]),
        o = (0, eN.A)({ guildId: t, productId: i }),
        u = (s?.attachments?.length ?? 0) > 0,
        c = null != a;
    return l
        ? (0, n.jsx)("div", { className: eA.hT, children: (0, n.jsx)(m.y, {}) })
        : null != s && (u || c)
          ? (0, n.jsxs)("div", {
                className: eA.hT,
                children: [
                    u &&
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(_.E, {
                                    variant: "text-xs/semibold",
                                    color: "text-default",
                                    className: eA.yE,
                                    children: I.intl.string(I.t.hxawoy),
                                }),
                                (0, n.jsx)(Z.$, { ...o }),
                            ],
                        }),
                    c &&
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                u && (0, n.jsx)("div", { className: eA.yF }),
                                (0, n.jsx)(_.E, {
                                    variant: "text-xs/semibold",
                                    color: "text-default",
                                    className: eA.yE,
                                    children: I.intl.string(I.t.gWBNet),
                                }),
                                (0, n.jsx)(ef.A, { role: a }),
                            ],
                        }),
                ],
            })
          : null;
}
class e0 extends s.PureComponent {
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
                return !eK.includes(e.status);
            },
        },
        {
            rule: "PAYMENT_GATEWAY",
            canRefund: () => {
                let { payment: e } = this.props;
                return null == e.paymentGateway || !eW.includes(e.paymentGateway);
            },
        },
        {
            rule: "SKU_STICKER_PACK",
            canRefund: () => {
                let { payment: e } = this.props;
                return null == e.sku || !(0, y.Lt)(e.sku.flags, G.d68.STICKER);
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
                return null == e.sku || !(0, y.Lt)(e.sku.flags, j.d.GUILD_PRODUCT);
            },
        },
        {
            rule: "COLLECTIBLE",
            canRefund: () => {
                let { payment: e } = this.props;
                return !e.isCollectible;
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
                return (0, n.jsx)("span", { className: eA.Xg, children: I.intl.string(I.t.y7F0Re) });
            case G.__0.FAILED:
                return (0, n.jsx)("span", { className: eA.ob, children: I.intl.string(I.t.Yo4ru6) });
            case G.__0.REFUNDED:
                if (e.amountRefunded !== e.amount)
                    return (0, n.jsx)("span", { className: eA.gD, children: I.intl.string(I.t.lYbZzz) });
                return (0, n.jsx)("span", { className: eA.gD, children: I.intl.string(I.t.ZBb6NK) });
            case G.__0.REVERSED:
                return (0, n.jsx)("span", { className: eA.ob, children: I.intl.string(I.t.YQv9Li) });
            case G.__0.CANCELED:
                return (0, n.jsx)("span", { className: eA.ob, children: I.intl.string(I.t.ttkBhy) });
            default:
                return null;
        }
    }
    renderTenantStatusOverride() {
        let { payment: e, hasLinkedToApplication: t } = this.props;
        return (0, eb.bF)(e.sku) && e.status === G.__0.COMPLETED
            ? null != e.entitlements && e.entitlements.some((e) => e.isFulfilled())
                ? (0, n.jsx)("span", { className: eA.gD, children: I.intl.string(I.t.Osji1u) })
                : e.isGift
                  ? null != e.entitlements && e.entitlements.some((e) => null != e.gifterId)
                      ? (0, n.jsx)("span", { className: eA.gD, children: I.intl.string(I.t.lIsIFo) })
                      : (0, n.jsx)("span", { className: eA.Tf, children: I.intl.string(I.t["+tqSi3"]) })
                  : t
                    ? (0, n.jsx)("span", { className: eA.Tf, children: I.intl.string(I.t.y7F0Re) })
                    : (0, n.jsx)("span", { className: eA.Tf, children: I.intl.string(I.t.HHC5Z4) })
            : null;
    }
    renderStatus() {
        return this.renderTenantStatusOverride() ?? this.renderDefaultStatus();
    }
    renderPrice() {
        let { payment: e } = this.props,
            t = e.amount - e.amountRefunded;
        return (0, n.jsx)("span", { className: eA.q9, children: (0, eB.$g)(t, e.currency) });
    }
    renderPaymentIdField() {
        let { payment: e } = this.props;
        return (0, n.jsx)("li", {
            className: eA.mg,
            children: (0, n.jsxs)("div", {
                className: eA.bx,
                children: [
                    (0, n.jsx)("div", { children: I.intl.string(I.t["UQim+r"]) }),
                    (0, n.jsx)(eq, {
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
            { taxInclusive: l, tax: a, amount: o, amountRefunded: u, currency: d } = e,
            c = i?.guildId;
        return (0, n.jsxs)("div", {
            className: r()(eA.iL, eA.W),
            children: [
                null != e.paymentSource
                    ? (0, n.jsx)(eY.A, {
                          paymentSource: e.paymentSource,
                          locale: t,
                          descriptionClassName: eA.iL,
                          showLabels: !0,
                          showPaymentSourceIcon: !0,
                      })
                    : e.paymentGateway === em.kM.APPLE_PARTNER
                      ? (0, n.jsx)(eY.A, {
                            paymentSource: new D.Pw({}),
                            locale: t,
                            descriptionClassName: eA.iL,
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
                                      (0, n.jsx)(eZ, { description: e.description, cost: (0, eB.$g)(o - a, d) }),
                                      (0, n.jsx)(eZ, {
                                          description: I.intl.string(I.t.QgWXht),
                                          cost: (0, eB.$g)(a, d),
                                      }),
                                  ],
                              })
                            : null,
                        (0, n.jsx)(eZ, { description: I.intl.string(I.t.txajQG), cost: (0, eB.$g)(o, d) }),
                        e.isGuildProductPurchase &&
                            null != c &&
                            null != e.sku &&
                            (0, n.jsx)(eJ, { guildId: c, guildProductListingId: e.sku.id }),
                        u > 0 &&
                            (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsx)(eZ, {
                                        description: I.intl.string(I.t["A+I0AP"]),
                                        cost: (0, eB.$g)(u, d),
                                    }),
                                    (0, n.jsx)(eZ, {
                                        description: I.intl.string(I.t.xER6Wi),
                                        cost: (0, eB.$g)(o - u, d),
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
        return (0, n.jsx)(eE, { payment: e });
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
                      (0, n.jsx)(Q.H, { className: eA.mW, children: I.intl.string(I.t["gIGB/A"]) }),
                      (0, n.jsx)("div", {
                          className: eA.iL,
                          children:
                              null != e
                                  ? I.intl.format(I.t.Q1K9eg, { username: ez.Ay.getName(e) })
                                  : I.intl.format(I.t.IBtGwC, { applicationName: l?.name }),
                      }),
                  ],
              })
            : t.isGift
              ? (0, n.jsxs)(s.Fragment, {
                    children: [
                        (0, n.jsx)(Q.H, { className: eA.mW, children: I.intl.string(I.t["gIGB/A"]) }),
                        (0, n.jsx)("div", {
                            className: eA.iL,
                            children:
                                null != e
                                    ? I.intl.format(I.t.vfUW65, { username: ez.Ay.getName(e) })
                                    : I.intl.string(I.t["18wIqp"]),
                        }),
                        null == e &&
                            (0, n.jsx)("div", {
                                className: eA.TP,
                                children: (0, n.jsx)(Z.$, {
                                    variant: "primary",
                                    text: I.intl.string(I.t["jcSP+g"]),
                                    onClick: () => (0, eL.openUserSettings)(eO.X.GIFT_PANEL),
                                }),
                            }),
                    ],
                })
              : o
                ? null
                : (0, n.jsxs)(s.Fragment, {
                      children: [
                          (0, n.jsx)(Q.H, { className: eA.mW, children: I.intl.string(I.t["gIGB/A"]) }),
                          (0, n.jsx)("div", {
                              className: eA.iL,
                              children: i
                                  ? I.intl.format(I.t.DQQCAw, { applicationName: l?.name, skuName: t.sku?.name })
                                  : I.intl.format(I.t.ED2BqF, { applicationName: l?.name, skuName: t.sku?.name }),
                          }),
                          (0, n.jsx)("div", {
                              className: eA.TP,
                              children: i
                                  ? (0, n.jsx)(Z.$, {
                                        variant: "primary",
                                        text: I.intl.string(I.t.zoztQA),
                                        onClick: () => (0, el.A)(eX(r)),
                                    })
                                  : (0, n.jsx)(Z.$, {
                                        variant: "primary",
                                        text: I.intl.string(I.t["jCqvk/"]),
                                        onClick: () => {
                                            null != t.sku &&
                                                null != l &&
                                                (ek.default.track(
                                                    G.HAw.PAYMENT_HISTORY_CONNECT_ACCOUNT_BUTTON_CLICKED,
                                                    { sku_id: t.sku.id, application_id: l.id, location_stack: a },
                                                ),
                                                (0, ev.n)({ sku: t.sku, application: l, analyticsLocations: a }));
                                        },
                                    }),
                          }),
                      ],
                  });
    }
    renderAdditionalTenantInfo() {
        let { payment: e } = this.props;
        if ((0, eb.bF)(e.sku)) return this.renderAdditionalGameItemDetails();
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
            a = eX(t),
            o = this.isPremium ? 5 : 14;
        return (
            (e = l.includes("SKU_TYPE")
                ? I.intl.format(I.t["5lvoVS"], { supportURL: a })
                : r
                  ? i.isPremiumSubscription || i.isPremiumGuildSubscription
                      ? I.intl.format(I.t.EPYteX, { dateLimit: o, supportURL: a })
                      : i.isGift
                        ? I.intl.format(I.t["16eP/L"], { dateLimit: o, supportURL: a })
                        : I.intl.format(I.t["1LDI4J"], { dateLimit: o, playtimeLimit: 2, supportURL: a })
                  : i.isCollectible
                    ? I.intl.string(I.t.s9TZM1)
                    : i.isGift
                      ? I.intl.formatToPlainString(I.t.owlOWc, { dateLimit: o })
                      : i.isPremiumSubscription || i.isPremiumGuildSubscription
                        ? I.intl.formatToPlainString(I.t.dk7vyL, { dateLimit: o })
                        : I.intl.formatToPlainString(I.t.s4Kk0C, { dateLimit: o, playtimeLimit: 2 })),
            (0, n.jsxs)(s.Fragment, {
                children: [
                    (0, n.jsx)(Q.H, { className: eA.mW, children: I.intl.string(I.t["n/27pr"]) }),
                    (0, n.jsxs)("div", {
                        className: eA.iL,
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
                className: eA._Z,
                children: [
                    (0, n.jsx)(Q.H, { className: eA.ud, children: e }),
                    (0, n.jsxs)("div", {
                        className: eA.z9,
                        children: [
                            (0, n.jsx)(t, { className: eA.xb, color: "currentColor" }),
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
        let s = e.includes("PURCHASE_DATE") ? J.P : $.A;
        return (0, n.jsxs)("div", {
            className: eA.My,
            children: [
                (0, n.jsx)("div", {
                    className: eA.Kf,
                    children:
                        !i.isCollectible &&
                        this.renderRefundCriteria(
                            I.intl.string(I.t.H0RNz4),
                            s,
                            I.intl.formatToPlainString(I.t["7dtXa/"], { daysSincePurchase: this.daysSincePurchase }),
                        ),
                }),
                (0, n.jsx)(ee.Anchor, { href: eX(t), children: I.intl.string(I.t.re5nOB) }),
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
            let i = [],
                s = null;
            if (g.type === G.rzx.PREMIUM)
                g.items.forEach((e) => {
                    let { planId: t, quantity: n } = e;
                    (0, X.xq)(t)
                        ? (i.push(X.Ay.getDisplayName(t, !1, m)), (s = (0, X.mH)(U.hd[t].skuId)))
                        : (i.push(`${n > 1 ? `${n}x ` : ""}${X.Ay.getDisplayName(t, !1, m)}`),
                          null == s && (s = (0, X.mH)(U.hd[t].skuId)));
                });
            else if (g.type === G.rzx.GUILD) {
                if (null != u) {
                    let e = u.interval === U.WT.YEAR ? I.t.V6UFQM : I.t["6oq128"];
                    i.push(I.intl.format(e, { planName: u.name })), (s = u.skuId);
                }
            } else
                g.type === G.rzx.APPLICATION &&
                    (null != u && (s = u.skuId),
                    null != r
                        ? i.push(I.intl.formatToPlainString(I.t["0wL/VI"], { tier: c?.name }))
                        : i.push(I.intl.string(I.t["9czSYu"])));
            (t = 0 !== i.length ? i.join(", ") : l.description),
                (e = (0, n.jsx)(eT.A, {
                    className: eA.Sy,
                    guildClassName: eA.zA,
                    game: r,
                    guild: a,
                    size: eT.M.XSMALL,
                    skuId: s ?? c?.id,
                }));
        } else if (null != c)
            if (
                ((t = l.isGuildProductPurchase && l.isSoftDeletedProduct ? I.intl.string(I.t.O7uLmw) : c.name),
                null != o)
            ) {
                let t = (0, ej.Id)(o);
                e = (0, n.jsx)(ey.A, {
                    disableAnimation: !d,
                    isInteracting: d,
                    sticker: t,
                    className: eA.Sy,
                    size: 24,
                });
            } else
                e =
                    l.sku?.productLine === G.EZt.COLLECTIBLES
                        ? (0, n.jsx)(et.U, {
                              size: "custom",
                              width: 23,
                              height: 23,
                              color: "currentColor",
                              className: eA.sV,
                          })
                        : (0, n.jsx)(eT.A, {
                              className: eA.Sy,
                              guildClassName: eA.zA,
                              game: r,
                              guild: a,
                              size: eT.M.XSMALL,
                              skuId: c.id,
                          });
        else (e = (0, n.jsx)(ei.t, { size: "md", color: "currentColor", className: eA.Sy })), (t = l.description);
        let A = (0, n.jsx)(_.E, {
                variant: "text-sm/normal",
                className: eA.p6,
                children: (0, eF.i$)(K()(l.createdAt), "MM/DD/YYYY"),
            }),
            h = l.isGift
                ? (0, n.jsx)(W.m, {
                      text: I.intl.string(I.t.QddTpm),
                      children: (0, n.jsx)(en.o, { size: "md", color: "currentColor", className: eA.ez }),
                  })
                : null;
        return i
            ? (0, n.jsxs)("div", { className: eA.h_, children: [e, (0, n.jsxs)("div", { children: [t, A] }), h] })
            : (0, n.jsxs)(s.Fragment, {
                  children: [
                      A,
                      (0, n.jsxs)("div", { className: eA.h_, children: [e, (0, n.jsx)("div", { children: t }), h] }),
                  ],
              });
    }
    renderGuildProductBenefits() {
        let { payment: e, application: t, locale: i } = this.props,
            s = t?.guildId;
        return e.isGuildProductPurchase
            ? (0, n.jsxs)(n.Fragment, {
                  children: [
                      (0, n.jsx)("div", { className: eA.ts }),
                      e.isSoftDeletedProduct
                          ? (0, n.jsx)(es.p, {
                                messageType: es.Y.WARNING,
                                action: (0, n.jsx)(Z.$, {
                                    variant: "overlay-secondary",
                                    text: I.intl.string(I.t.zoztQA),
                                    onClick: () => (0, el.A)(eX(i)),
                                }),
                                children: I.intl.string(I.t["3AvulN"]),
                            })
                          : null != s &&
                            null != e.sku &&
                            (0, n.jsx)(e$, { guildId: s, guildProductListingId: e.sku.id }),
                  ],
              })
            : null;
    }
    renderExpandedSection() {
        return (0, n.jsx)(q.D, {
            onClick: (e) => e.stopPropagation(),
            children: (0, n.jsxs)("div", {
                className: eA.WI,
                children: [
                    (0, n.jsx)(Q.H, { className: eA.mW, children: I.intl.string(I.t.nyzoFb) }),
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
                (0, n.jsxs)(q.D, {
                    onClick: this.handleExpandInfo,
                    "data-expanded": s,
                    className: r()(eA.Ji, t, { [eA.oE]: i }),
                    focusProps: { offset: 4 },
                    ...e,
                    children: [
                        (0, n.jsxs)(p.A, {
                            className: eA.J7,
                            align: p.A.Align.CENTER,
                            "data-expanded": s,
                            children: [
                                this.renderDescription(),
                                (0, n.jsxs)("div", {
                                    className: eA.vj,
                                    children: [this.renderStatus(), this.renderPrice()],
                                }),
                                (0, n.jsx)(eV.A, {
                                    className: eA.fT,
                                    direction: s ? eV.A.Directions.UP : eV.A.Directions.DOWN,
                                }),
                            ],
                        }),
                        s ? this.renderExpandedSection() : null,
                    ],
                }),
        });
    }
}
function e1(e) {
    let { payment: t, locale: i, compactMode: l, className: r } = e,
        a = null != t.sku && eH.includes(t.sku.type),
        o = null != t.sku && a ? t.sku.applicationId : null,
        u = t.sku?.applicationId,
        c = t.subscription?.type === G.rzx.APPLICATION,
        {
            applicationStatistics: g,
            gameApplication: m,
            paymentSources: A,
        } = (0, d.cf)([eU.A, eM.A, eu.A], () => ({
            applicationStatistics: null != o ? eM.A.getCurrentUserStatisticsForApplication(o) : null,
            gameApplication: eu.A.getApplication(o ?? "") ?? t.sku?.application,
            paymentSources: eU.A.paymentSources,
        })),
        { hasAlreadyLinked: h } = (0, eo.RD)((0, eb.bF)(t.sku) ? m : void 0),
        E = (0, d.bG)([eu.A], () => (null != u ? eu.A.getApplication(u) : null));
    s.useEffect(() => {
        c && null != u && (0, eI.TA)(u);
    }, [u, c]);
    let T = (0, d.bG)([eP.A], () => eP.A.getGuild(m?.guildId)),
        S = a ? m : void 0,
        x = t.subscription,
        p = (0, d.bG)([z.A], () => (null != x && x.type !== G.rzx.PREMIUM ? z.A.get(x.items[0].planId) : null)),
        f = (0, d.bG)([eG.default], () => {
            let e = t.isGift ? t.entitlements?.find((e) => e.user?.id != null && null != e.gifterId) : null;
            return null == e ? null : (eG.default.getUser(e.user?.id ?? null) ?? e?.user);
        }, [t]),
        { analyticsLocations: N } = (0, ea.Ay)(er.A.BILLING_SETTINGS_BILLING);
    return (0, n.jsx)(e0, {
        applicationStatistics: g,
        application: c ? E : S,
        analyticsLocations: N,
        guild: T,
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
var e2 = i(687788);
function e3(e) {
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
        T = (0, S.A)("billing-history", o);
    return (0, n.jsx)(u.hD, {
        navigator: T,
        children: (0, n.jsx)(u.PR, {
            children: (e) => {
                let { ref: t, ...s } = e;
                return (0, n.jsx)(v, {
                    className: e2.GD,
                    currentPageIndex: d,
                    onChangePage: E,
                    numPages: a,
                    showPageCount: !1,
                    ref: t,
                    ...s,
                    children: (0, n.jsx)(c.Ch, {
                        className: e2.Bd,
                        ref: o,
                        overflow: "auto",
                        children: h.map((e, t) =>
                            (0, n.jsx)(e1, { className: r()(e2.Nj, e2.Bd), payment: e, locale: i, compactMode: l }, t),
                        ),
                    }),
                });
            },
        }),
    });
}
class e6 extends s.PureComponent {
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
                className: e2.K1,
                children: [
                    (0, n.jsx)("div", {
                        className: e2.BF,
                        children: I.intl.format(I.t["6mIX6s"], { paymentGatewayName: em.qm[e.paymentGateway] }),
                    }),
                    (0, n.jsx)("div", {
                        className: e2.Q2,
                        children: I.intl.format(I.t.eG0uZB, {
                            paymentGatewayName: em.qm[e.paymentGateway],
                            billingHistoryLink: (0, X.tW)(e.paymentGateway, "BILLING_HISTORY"),
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
                  className: e2.GD,
                  children: [
                      null != i && a ? this.renderPremiumExternalSubscription(i) : null,
                      t.length > 0
                          ? (0, n.jsxs)("div", {
                                className: r()(e2.PQ, e2.GD),
                                children: [
                                    e
                                        ? null
                                        : (0, n.jsx)("div", {
                                              className: r()(e2.Nj, e2.Bd),
                                              children: (0, n.jsxs)(p.A, {
                                                  className: e2.Yi,
                                                  children: [
                                                      (0, n.jsx)("div", {
                                                          className: eA.p6,
                                                          children: I.intl.string(I.t["5t11BV"]),
                                                      }),
                                                      (0, n.jsx)("div", {
                                                          className: e2.Ir,
                                                          children: I.intl.string(I.t.yAAPb2),
                                                      }),
                                                      (0, n.jsx)("div", {
                                                          className: eA.vj,
                                                          children: I.intl.string(I.t["6MqHXV"]),
                                                      }),
                                                  ],
                                              }),
                                          }),
                                    (0, n.jsx)(e3, { compactMode: e, locale: s, payments: t, numPages: this.numPages }),
                                ],
                            })
                          : a
                            ? null
                            : (0, n.jsx)(A.w, { type: "info", children: I.intl.string(I.t.GqvDkk) }),
                  ],
              })
            : (0, n.jsx)(m.y, {});
    }
}
function e4(e) {
    let t = e.skuId,
        i = e.subscription?.items[0].planId;
    return !(null == t || null == i || Object.values(U.pe).includes(t) || (0, X.ys)(i));
}
function e7(e) {
    let t = (0, d.bG)([B], () => B.getPayments()),
        i = (0, d.bG)([Y.A], () => Y.A.getPremiumTypeSubscription()),
        l = s.useMemo(
            () =>
                new Set(
                    t.filter(e4).map((e) => {
                        let { subscription: t } = e;
                        return t?.items[0].planId;
                    }),
                ),
            [t],
        ),
        r = s.useMemo(
            () =>
                new Set(
                    t.filter(e4).map((e) => {
                        let { skuId: t } = e;
                        return t;
                    }),
                ),
            [t],
        ),
        a = (0, d.yK)([z.A], () => z.A.getPlanIdsForSkus(Array.from(r))),
        o = s.useCallback(() => a.length === l.size, [a, l]),
        u = s.useMemo(() => t.filter((e) => e.currency !== G.Yri.DISCORD_ORB), [t]);
    s.useEffect(() => {
        o() ||
            h.h.wait(() => {
                r.forEach((e) => (0, T.ur)(e, void 0, void 0, !0, void 0));
            });
    }, [o, r]);
    let c = (0, d.bG)([B], () => B.hasFetchedPayments);
    return (0, n.jsx)(e6, { ...e, payments: u, subscription: i, hasFetchedPayments: c });
}
