i.d(t, { A: () => e5 });
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
    A = i(834730),
    h = i(228366),
    E = i(661439),
    x = i(73825),
    T = i(928039),
    S = i(753390),
    p = i(235986),
    f = i(408278),
    N = i(921853),
    _ = i(320448),
    C = i(375708),
    I = i(632787);
let b = s.forwardRef(function (e, t) {
    let { currentPageIndex: i, numPages: s, onChangePage: l, children: r, showPageCount: a = !0, ...o } = e,
        u = i >= s - 1,
        d = a
            ? C.intl.format(C.t.MtpIwg, { currentPage: i + 1, numPages: s })
            : C.intl.format(C.t.bKI77c, { currentPage: i + 1 });
    return (0, n.jsxs)("div", {
        ref: t,
        ...o,
        children: [
            r,
            (0, n.jsx)("div", {
                className: I.v,
                children: (0, n.jsxs)("div", {
                    className: I.U,
                    children: [
                        (0, n.jsx)(f.K, {
                            variant: "icon-only",
                            icon: N.n,
                            disabled: i <= 0,
                            onClick: () => l(i - 1),
                            "aria-label": C.intl.string(C.t.vgfxaA),
                        }),
                        (0, n.jsx)(A.E, { variant: "text-sm/medium", children: d }),
                        (0, n.jsx)(f.K, {
                            variant: "icon-only",
                            icon: _._,
                            disabled: u,
                            onClick: () => l(i + 1),
                            "aria-label": C.intl.string(C.t.XiOHRX),
                        }),
                    ],
                }),
            }),
        ],
    });
});
i(321073), i(938796);
var v = i(122817),
    j = i(665260),
    y = i(315069),
    O = i(32731),
    R = i(557009),
    L = i(202613),
    D = i(243217),
    P = i(652215),
    G = i(788868);
class U extends y.A {
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
        let t = null != e.payment_source ? L.Ay.createFromServer(e.payment_source) : null,
            i = null != e.sku ? O.A.createFromServer(e.sku) : null,
            n = null != e.subscription ? D.A.createFromServer(e.subscription) : null;
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
            entitlements: null != e.entitlements ? e.entitlements.map((e) => R.A.createFromServer(e)) : void 0,
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
        return this.paymentGateway === P.kM_.APPLE;
    }
    get isPurchasedViaGoogle() {
        return this.paymentGateway === P.kM_.GOOGLE;
    }
    get isPurchasedExternally() {
        return this.isPurchasedViaApple || this.isPurchasedViaGoogle;
    }
    get isSubscription() {
        return null != this.subscription;
    }
    get isPremiumSubscription() {
        return null != this.subscription && G.JM.has(this.subscription.planId);
    }
    get isPremiumGuildSubscription() {
        return (
            null != this.subscription &&
            null !=
                this.subscription.additionalPlans.find((e) => {
                    let { planId: t } = e;
                    return G.pW.has(t);
                })
        );
    }
    get isGift() {
        return j.Lt(this.flags, 1);
    }
    get isPremiumGift() {
        return this.isGift && Object.values(G.pe).includes(this.skuId);
    }
    get isGuildProductPurchase() {
        return (
            null != this.sku &&
            (this.sku.productLine === P.EZt.GUILD_PRODUCT || j.Lt(this.sku.flags, v.d.GUILD_PRODUCT))
        );
    }
    get isSoftDeletedProduct() {
        return this.sku?.deleted === !0;
    }
    get isCollectible() {
        return null != this.sku && this.sku.productLine === P.EZt.COLLECTIBLES;
    }
}
let M = [],
    V = !1;
function k(e) {
    let { payment: t } = e,
        i = U.createFromServer(t),
        n = M.findIndex((e) => e.id === t.id);
    -1 === n ? (M.push(i), M.sort((e, t) => t.createdAt.getTime() - e.createdAt.getTime())) : (M[n] = i), (M = [...M]);
}
class w extends d.Ay.Store {
    static displayName = "PaymentStore";
    getPayment(e) {
        return M.find((t) => t.id === e);
    }
    getPayments() {
        return M;
    }
    get hasFetchedPayments() {
        return V;
    }
}
let F = new w(h.h, {
    BILLING_PAYMENTS_FETCH_SUCCESS: function (e) {
        let { payments: t } = e;
        for (let e of ((V = !0), t)) {
            let t = U.createFromServer(e),
                i = M.findIndex((t) => t.id === e.id);
            -1 !== i ? (M[i] = t) : M.push(t);
        }
        M.sort((e, t) => t.createdAt.getTime() - e.createdAt.getTime()), (M = [...M]);
    },
    BILLING_PAYMENTS_FETCH_FAIL: function () {
        V = !0;
    },
    PAYMENT_UPDATE: k,
    BILLING_PAYMENT_FETCH_SUCCESS: k,
    LOGOUT: function () {
        (M = []), (V = !1);
    },
});
var B = i(97352),
    z = i(166403),
    Y = i(428262),
    X = i(989349),
    H = i.n(X),
    K = i(990078),
    W = i(821609),
    Z = i(939249),
    q = i(707554),
    Q = i(789645),
    J = i(933832),
    $ = i(349288),
    ee = i(34188),
    et = i(403581),
    ei = i(597770),
    en = i(512950),
    es = i(975807),
    el = i(793574),
    er = i(688810),
    ea = i(46225),
    eo = i(587895),
    eu = i(636537),
    ed = i(683071),
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
            await eu.Bo.get({
                url: P.Rsh.BILLING_INVOICE_BREAKDOWN,
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
                  (0, n.jsx)($.Anchor, { onClick: () => o(!1), children: C.intl.formatToPlainString(C.t.R0xzCN, {}) }),
                  t.hasRefundInvoiceURLs
                      ? (0, n.jsx)($.Anchor, {
                            className: eA.oe,
                            onClick: () => o(!0),
                            children: C.intl.formatToPlainString(C.t["3x6NGw"], {}),
                        })
                      : null,
                  null != r && "" !== r && (0, n.jsx)(ed.w, { type: "critical", children: r }),
              ],
          })
        : t.hasInvoiceURL && null != i
          ? (0, n.jsxs)("div", {
                className: eA.It,
                children: [
                    (0, n.jsx)($.Anchor, { href: d, children: C.intl.formatToPlainString(C.t.R0xzCN, {}) }),
                    null != c
                        ? c.map((e, t) =>
                              (0, n.jsx)(
                                  $.Anchor,
                                  {
                                      className: eA.oe,
                                      href: e,
                                      children: C.intl.formatToPlainString(C.t["3x6NGw"], {}),
                                  },
                                  t,
                              ),
                          )
                        : null,
                    null != r && "" !== r && (0, n.jsx)(ed.w, { type: "critical", children: r }),
                ],
            })
          : u
            ? (0, n.jsx)("div", {
                  className: eA.It,
                  children: (0, n.jsx)($.Anchor, {
                      onClick: () => {
                          var e;
                          (e = t.paymentSource), eg(t, e);
                      },
                      children: C.intl.formatToPlainString(C.t.onRIxS, {}),
                  }),
              })
            : null;
}
var ex = i(137177),
    eT = i(250627),
    eS = i(871109),
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
let eX = (e) => `https://${P.XlF}/hc/${e.toLowerCase()}/requests/new?ticket_form_id=360000118612`,
    eH = [P.Puh.DURABLE_PRIMARY, P.Puh.DURABLE, P.Puh.CONSUMABLE],
    eK = [P.__0.FAILED, P.__0.REVERSED, P.__0.CANCELED],
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
    return (0, n.jsx)(K.m, {
        forceOpen: o,
        text: r ? l : i,
        children: (0, n.jsx)(Z.D, {
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
        l = (0, eT.Qi)(t, i, { requireCurrentGuild: !1 }),
        r = (0, ep.z)(l),
        a = (0, d.bG)([eP.A], () => eP.A.getGuild(t)),
        o = l?.role_id != null && l?.attachments_count === 0 ? C.intl.string(C.t.H11qcT) : r,
        u = s.useCallback(async () => {
            a?.features.has(P.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE)
                ? await (0, e_.A)(P.BVt.GUILD_PRODUCT(t, i))
                : await (0, e_.A)(P.BVt.CHANNEL(t)),
                (0, eR.default)();
        }, [a, t, i]);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            null != o && (0, n.jsx)(eQ, { description: C.intl.string(C.t.lXPbJb), detail: o }),
            null != a &&
                (0, n.jsx)(eQ, {
                    description: C.intl.string(C.t.Wpn8z8),
                    detail: (0, n.jsx)(eC.A, { onClick: u, children: a.name }),
                }),
        ],
    });
}
function e$(e) {
    let { guildId: t, guildProductListingId: i } = e,
        s = (0, eT.Qi)(t, i, { requireCurrentGuild: !1 }),
        l = (0, d.bG)([eS.A], () => eS.A.getGuildProductFetchState(i) === eS.e.FETCHING),
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
                                (0, n.jsx)(A.E, {
                                    variant: "text-xs/semibold",
                                    color: "text-default",
                                    className: eA.yE,
                                    children: C.intl.string(C.t.hxawoy),
                                }),
                                (0, n.jsx)(W.$, { ...o }),
                            ],
                        }),
                    c &&
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                u && (0, n.jsx)("div", { className: eA.yF }),
                                (0, n.jsx)(A.E, {
                                    variant: "text-xs/semibold",
                                    color: "text-default",
                                    className: eA.yE,
                                    children: C.intl.string(C.t.gWBNet),
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
                return null == e.sku || e.sku.type !== P.Puh.CONSUMABLE;
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
                return null == e.sku || !(0, j.Lt)(e.sku.flags, P.d68.STICKER);
            },
        },
        {
            rule: "SUBSCRIPTION_TYPE",
            canRefund: () => {
                let { payment: e } = this.props;
                return e.subscription?.type !== P.rzx.GUILD && e.subscription?.type !== P.rzx.APPLICATION;
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
                return !e.isCollectible;
            },
        },
    ];
    get daysSincePurchase() {
        let { payment: e } = this.props,
            t = null != e.sku ? e.sku.releaseDate : null,
            i = null != t && t.isAfter(e.createdAt) ? t : e.createdAt;
        return H()().diff(i, "days");
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
            case P.__0.PENDING:
                return (0, n.jsx)("span", { className: eA.Xg, children: C.intl.string(C.t.y7F0Re) });
            case P.__0.FAILED:
                return (0, n.jsx)("span", { className: eA.ob, children: C.intl.string(C.t.Yo4ru6) });
            case P.__0.REFUNDED:
                if (e.amountRefunded !== e.amount)
                    return (0, n.jsx)("span", { className: eA.gD, children: C.intl.string(C.t.lYbZzz) });
                return (0, n.jsx)("span", { className: eA.gD, children: C.intl.string(C.t.ZBb6NK) });
            case P.__0.REVERSED:
                return (0, n.jsx)("span", { className: eA.ob, children: C.intl.string(C.t.YQv9Li) });
            case P.__0.CANCELED:
                return (0, n.jsx)("span", { className: eA.ob, children: C.intl.string(C.t.ttkBhy) });
            default:
                return null;
        }
    }
    renderTenantStatusOverride() {
        let { payment: e, hasLinkedToApplication: t } = this.props;
        return (0, eb.bF)(e.sku) && e.status === P.__0.COMPLETED
            ? null != e.entitlements && e.entitlements.some((e) => e.isFulfilled())
                ? (0, n.jsx)("span", { className: eA.gD, children: C.intl.string(C.t.Osji1u) })
                : e.isGift
                  ? null != e.entitlements && e.entitlements.some((e) => null != e.gifterId)
                      ? (0, n.jsx)("span", { className: eA.gD, children: C.intl.string(C.t.lIsIFo) })
                      : (0, n.jsx)("span", { className: eA.Tf, children: C.intl.string(C.t["+tqSi3"]) })
                  : t
                    ? (0, n.jsx)("span", { className: eA.Tf, children: C.intl.string(C.t.y7F0Re) })
                    : (0, n.jsx)("span", { className: eA.Tf, children: C.intl.string(C.t.HHC5Z4) })
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
                    (0, n.jsx)("div", { children: C.intl.string(C.t["UQim+r"]) }),
                    (0, n.jsx)(eq, {
                        value: e.id,
                        copyText: C.intl.string(C.t["Mdk9+A"]),
                        copyFeedbackText: C.intl.string(C.t["7eIrA2"]),
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
                            paymentSource: new L.Pw({}),
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
                                          description: C.intl.string(C.t.QgWXht),
                                          cost: (0, eB.$g)(a, d),
                                      }),
                                  ],
                              })
                            : null,
                        (0, n.jsx)(eZ, { description: C.intl.string(C.t.txajQG), cost: (0, eB.$g)(o, d) }),
                        e.isGuildProductPurchase &&
                            null != c &&
                            null != e.sku &&
                            (0, n.jsx)(eJ, { guildId: c, guildProductListingId: e.sku.id }),
                        u > 0 &&
                            (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsx)(eZ, {
                                        description: C.intl.string(C.t["A+I0AP"]),
                                        cost: (0, eB.$g)(u, d),
                                    }),
                                    (0, n.jsx)(eZ, {
                                        description: C.intl.string(C.t.xER6Wi),
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
        return t.status === P.__0.REFUNDED
            ? (0, n.jsxs)(s.Fragment, {
                  children: [
                      (0, n.jsx)(q.H, { className: eA.mW, children: C.intl.string(C.t["gIGB/A"]) }),
                      (0, n.jsx)("div", {
                          className: eA.iL,
                          children:
                              null != e
                                  ? C.intl.format(C.t.Q1K9eg, { username: ez.Ay.getName(e) })
                                  : C.intl.format(C.t.IBtGwC, { applicationName: l?.name }),
                      }),
                  ],
              })
            : t.isGift
              ? (0, n.jsxs)(s.Fragment, {
                    children: [
                        (0, n.jsx)(q.H, { className: eA.mW, children: C.intl.string(C.t["gIGB/A"]) }),
                        (0, n.jsx)("div", {
                            className: eA.iL,
                            children:
                                null != e
                                    ? C.intl.format(C.t.vfUW65, { username: ez.Ay.getName(e) })
                                    : C.intl.string(C.t["18wIqp"]),
                        }),
                        null == e &&
                            (0, n.jsx)("div", {
                                className: eA.TP,
                                children: (0, n.jsx)(W.$, {
                                    variant: "primary",
                                    text: C.intl.string(C.t["jcSP+g"]),
                                    onClick: () => (0, eL.openUserSettings)(eO.X.GIFT_PANEL),
                                }),
                            }),
                    ],
                })
              : o
                ? null
                : (0, n.jsxs)(s.Fragment, {
                      children: [
                          (0, n.jsx)(q.H, { className: eA.mW, children: C.intl.string(C.t["gIGB/A"]) }),
                          (0, n.jsx)("div", {
                              className: eA.iL,
                              children: i
                                  ? C.intl.format(C.t.DQQCAw, { applicationName: l?.name, skuName: t.sku?.name })
                                  : C.intl.format(C.t.ED2BqF, { applicationName: l?.name, skuName: t.sku?.name }),
                          }),
                          (0, n.jsx)("div", {
                              className: eA.TP,
                              children: i
                                  ? (0, n.jsx)(W.$, {
                                        variant: "primary",
                                        text: C.intl.string(C.t.zoztQA),
                                        onClick: () => (0, es.A)(eX(r)),
                                    })
                                  : (0, n.jsx)(W.$, {
                                        variant: "primary",
                                        text: C.intl.string(C.t["jCqvk/"]),
                                        onClick: () => {
                                            null != t.sku &&
                                                null != l &&
                                                (ek.default.track(
                                                    P.HAw.PAYMENT_HISTORY_CONNECT_ACCOUNT_BUTTON_CLICKED,
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
                ? C.intl.format(C.t["5lvoVS"], { supportURL: a })
                : r
                  ? i.isPremiumSubscription || i.isPremiumGuildSubscription
                      ? C.intl.format(C.t.EPYteX, { dateLimit: o, supportURL: a })
                      : i.isGift
                        ? C.intl.format(C.t["16eP/L"], { dateLimit: o, supportURL: a })
                        : C.intl.format(C.t["1LDI4J"], { dateLimit: o, playtimeLimit: 2, supportURL: a })
                  : i.isCollectible
                    ? C.intl.string(C.t.s9TZM1)
                    : i.isGift
                      ? C.intl.formatToPlainString(C.t.owlOWc, { dateLimit: o })
                      : i.isPremiumSubscription || i.isPremiumGuildSubscription
                        ? C.intl.formatToPlainString(C.t.dk7vyL, { dateLimit: o })
                        : C.intl.formatToPlainString(C.t.s4Kk0C, { dateLimit: o, playtimeLimit: 2 })),
            (0, n.jsxs)(s.Fragment, {
                children: [
                    (0, n.jsx)(q.H, { className: eA.mW, children: C.intl.string(C.t["n/27pr"]) }),
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
                    (0, n.jsx)(q.H, { className: eA.ud, children: e }),
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
        let s = e.includes("PURCHASE_DATE") ? Q.P : J.A;
        return (0, n.jsxs)("div", {
            className: eA.My,
            children: [
                (0, n.jsx)("div", {
                    className: eA.Kf,
                    children:
                        !i.isCollectible &&
                        this.renderRefundCriteria(
                            C.intl.string(C.t.H0RNz4),
                            s,
                            C.intl.formatToPlainString(C.t["7dtXa/"], { daysSincePurchase: this.daysSincePurchase }),
                        ),
                }),
                (0, n.jsx)($.Anchor, { href: eX(t), children: C.intl.string(C.t.re5nOB) }),
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
            m = null != l.paymentSource && P.AD1.has(l.paymentSource.type);
        if (null != g && 0 !== g.items.length) {
            let i = [],
                s = null;
            if (g.type === P.rzx.PREMIUM)
                g.items.forEach((e) => {
                    let { planId: t, quantity: n } = e;
                    (0, Y.xq)(t)
                        ? (i.push(Y.Ay.getDisplayName(t, !1, m)), (s = (0, Y.mH)(G.hd[t].skuId)))
                        : (i.push(`${n > 1 ? `${n}x ` : ""}${Y.Ay.getDisplayName(t, !1, m)}`),
                          null == s && (s = (0, Y.mH)(G.hd[t].skuId)));
                });
            else if (g.type === P.rzx.GUILD) {
                if (null != u) {
                    let e = u.interval === G.WT.YEAR ? C.t.V6UFQM : C.t["6oq128"];
                    i.push(C.intl.format(e, { planName: u.name })), (s = u.skuId);
                }
            } else
                g.type === P.rzx.APPLICATION &&
                    (null != u && (s = u.skuId),
                    null != r
                        ? i.push(C.intl.formatToPlainString(C.t["0wL/VI"], { tier: c?.name }))
                        : i.push(C.intl.string(C.t["9czSYu"])));
            (t = 0 !== i.length ? i.join(", ") : l.description),
                (e = (0, n.jsx)(ex.A, {
                    className: eA.Sy,
                    guildClassName: eA.zA,
                    game: r,
                    guild: a,
                    size: ex.M.XSMALL,
                    skuId: s ?? c?.id,
                }));
        } else if (null != c)
            if (
                ((t = l.isGuildProductPurchase && l.isSoftDeletedProduct ? C.intl.string(C.t.O7uLmw) : c.name),
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
                    l.sku?.productLine === P.EZt.COLLECTIBLES
                        ? (0, n.jsx)(ee.U, {
                              size: "custom",
                              width: 23,
                              height: 23,
                              color: "currentColor",
                              className: eA.sV,
                          })
                        : (0, n.jsx)(ex.A, {
                              className: eA.Sy,
                              guildClassName: eA.zA,
                              game: r,
                              guild: a,
                              size: ex.M.XSMALL,
                              skuId: c.id,
                          });
        else (e = (0, n.jsx)(et.t, { size: "md", color: "currentColor", className: eA.Sy })), (t = l.description);
        let h = (0, n.jsx)(A.E, {
                variant: "text-sm/normal",
                className: eA.p6,
                children: (0, eF.i$)(H()(l.createdAt), "MM/DD/YYYY"),
            }),
            E = l.isGift
                ? (0, n.jsx)(K.m, {
                      text: C.intl.string(C.t.QddTpm),
                      children: (0, n.jsx)(ei.o, { size: "md", color: "currentColor", className: eA.ez }),
                  })
                : null;
        return i
            ? (0, n.jsxs)("div", { className: eA.h_, children: [e, (0, n.jsxs)("div", { children: [t, h] }), E] })
            : (0, n.jsxs)(s.Fragment, {
                  children: [
                      h,
                      (0, n.jsxs)("div", { className: eA.h_, children: [e, (0, n.jsx)("div", { children: t }), E] }),
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
                          ? (0, n.jsx)(en.p, {
                                messageType: en.Y.WARNING,
                                action: (0, n.jsx)(W.$, {
                                    variant: "overlay-secondary",
                                    text: C.intl.string(C.t.zoztQA),
                                    onClick: () => (0, es.A)(eX(i)),
                                }),
                                children: C.intl.string(C.t["3AvulN"]),
                            })
                          : null != s &&
                            null != e.sku &&
                            (0, n.jsx)(e$, { guildId: s, guildProductListingId: e.sku.id }),
                  ],
              })
            : null;
    }
    renderExpandedSection() {
        return (0, n.jsx)(Z.D, {
            onClick: (e) => e.stopPropagation(),
            children: (0, n.jsxs)("div", {
                className: eA.WI,
                children: [
                    (0, n.jsx)(q.H, { className: eA.mW, children: C.intl.string(C.t.nyzoFb) }),
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
                (0, n.jsxs)(Z.D, {
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
        c = t.subscription?.type === P.rzx.APPLICATION,
        {
            applicationStatistics: g,
            gameApplication: m,
            paymentSources: A,
        } = (0, d.cf)([eU.A, eM.A, eo.A], () => ({
            applicationStatistics: null != o ? eM.A.getCurrentUserStatisticsForApplication(o) : null,
            gameApplication: eo.A.getApplication(o ?? "") ?? t.sku?.application,
            paymentSources: eU.A.paymentSources,
        })),
        { hasAlreadyLinked: h } = (0, ea.RD)((0, eb.bF)(t.sku) ? m : void 0),
        E = (0, d.bG)([eo.A], () => (null != u ? eo.A.getApplication(u) : null));
    s.useEffect(() => {
        c && null != u && (0, eI.TA)(u);
    }, [u, c]);
    let x = (0, d.bG)([eP.A], () => eP.A.getGuild(m?.guildId)),
        T = a ? m : void 0,
        S = t.subscription,
        p = (0, d.bG)([B.A], () => (null != S && S.type !== P.rzx.PREMIUM ? B.A.get(S.items[0].planId) : null)),
        f = (0, d.bG)([eG.default], () => {
            let e = t.isGift ? t.entitlements?.find((e) => e.user?.id != null && null != e.gifterId) : null;
            return null == e ? null : (eG.default.getUser(e.user?.id ?? null) ?? e?.user);
        }, [t]),
        { analyticsLocations: N } = (0, er.Ay)(el.A.BILLING_SETTINGS_BILLING);
    return (0, n.jsx)(e0, {
        applicationStatistics: g,
        application: c ? E : T,
        analyticsLocations: N,
        guild: x,
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
                e >= a - 2 && m !== i && ((0, S.CK)(10, i), A(i));
            },
            [t, a, m],
        ),
        x = (0, T.A)("billing-history", o);
    return (0, n.jsx)(u.hD, {
        navigator: x,
        children: (0, n.jsx)(u.PR, {
            children: (e) => {
                let { ref: t, ...s } = e;
                return (0, n.jsx)(b, {
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
            (0, E.X)(), (0, S.CK)(30);
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
                        children: C.intl.format(C.t["6mIX6s"], { paymentGatewayName: em.qm[e.paymentGateway] }),
                    }),
                    (0, n.jsx)("div", {
                        className: e2.Q2,
                        children: C.intl.format(C.t.eG0uZB, {
                            paymentGatewayName: em.qm[e.paymentGateway],
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
                                                          children: C.intl.string(C.t["5t11BV"]),
                                                      }),
                                                      (0, n.jsx)("div", {
                                                          className: e2.Ir,
                                                          children: C.intl.string(C.t.yAAPb2),
                                                      }),
                                                      (0, n.jsx)("div", {
                                                          className: eA.vj,
                                                          children: C.intl.string(C.t["6MqHXV"]),
                                                      }),
                                                  ],
                                              }),
                                          }),
                                    (0, n.jsx)(e3, { compactMode: e, locale: s, payments: t, numPages: this.numPages }),
                                ],
                            })
                          : a
                            ? null
                            : (0, n.jsx)(A.E, {
                                  variant: "text-sm/normal",
                                  color: "text-subtle",
                                  children: C.intl.string(C.t.GqvDkk),
                              }),
                  ],
              })
            : (0, n.jsx)(m.y, {});
    }
}
function e4(e) {
    let t = e.skuId,
        i = e.subscription?.items[0].planId;
    return !(null == t || null == i || Object.values(G.pe).includes(t) || (0, Y.ys)(i));
}
function e5(e) {
    let t = (0, d.bG)([F], () => F.getPayments()),
        i = (0, d.bG)([z.A], () => z.A.getPremiumTypeSubscription()),
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
        a = (0, d.yK)([B.A], () => B.A.getPlanIdsForSkus(Array.from(r))),
        o = s.useCallback(() => a.length === l.size, [a, l]),
        u = s.useMemo(() => t.filter((e) => e.currency !== P.Yri.DISCORD_ORB), [t]);
    s.useEffect(() => {
        o() ||
            h.h.wait(() => {
                r.forEach((e) => (0, x.ur)(e, void 0, void 0, !0, void 0));
            });
    }, [o, r]);
    let c = (0, d.bG)([F], () => F.hasFetchedPayments);
    return (0, n.jsx)(e6, { ...e, payments: u, subscription: i, hasFetchedPayments: c });
}
