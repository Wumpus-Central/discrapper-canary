i.d(t, { A: () => e4 });
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
    m = i(228366),
    A = i(661439),
    h = i(73825),
    E = i(928039),
    x = i(753390),
    T = i(235986),
    S = i(408278),
    p = i(921853),
    N = i(834730),
    f = i(320448),
    C = i(375708),
    _ = i(632787);
let I = s.forwardRef(function (e, t) {
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
                className: _.v,
                children: (0, n.jsxs)("div", {
                    className: _.U,
                    children: [
                        (0, n.jsx)(S.K, {
                            variant: "icon-only",
                            icon: p.n,
                            disabled: i <= 0,
                            onClick: () => l(i - 1),
                            "aria-label": C.intl.string(C.t.vgfxaA),
                        }),
                        (0, n.jsx)(N.E, { variant: "text-sm/medium", children: d }),
                        (0, n.jsx)(S.K, {
                            variant: "icon-only",
                            icon: f._,
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
var b = i(122817),
    v = i(665260),
    j = i(315069),
    y = i(32731),
    O = i(557009),
    R = i(202613),
    L = i(243217),
    D = i(652215),
    P = i(788868);
class G extends j.A {
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
        let t = null != e.payment_source ? R.Ay.createFromServer(e.payment_source) : null,
            i = null != e.sku ? y.A.createFromServer(e.sku) : null,
            n = null != e.subscription ? L.A.createFromServer(e.subscription) : null;
        return new G({
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
            entitlements: null != e.entitlements ? e.entitlements.map((e) => O.A.createFromServer(e)) : void 0,
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
        return this.paymentGateway === D.kM_.APPLE;
    }
    get isPurchasedViaGoogle() {
        return this.paymentGateway === D.kM_.GOOGLE;
    }
    get isPurchasedExternally() {
        return this.isPurchasedViaApple || this.isPurchasedViaGoogle;
    }
    get isSubscription() {
        return null != this.subscription;
    }
    get isPremiumSubscription() {
        return null != this.subscription && P.JM.has(this.subscription.planId);
    }
    get isPremiumGuildSubscription() {
        return (
            null != this.subscription &&
            null !=
                this.subscription.additionalPlans.find((e) => {
                    let { planId: t } = e;
                    return P.pW.has(t);
                })
        );
    }
    get isGift() {
        return v.Lt(this.flags, 1);
    }
    get isPremiumGift() {
        return this.isGift && Object.values(P.pe).includes(this.skuId);
    }
    get isGuildProductPurchase() {
        return (
            null != this.sku &&
            (this.sku.productLine === D.EZt.GUILD_PRODUCT || v.Lt(this.sku.flags, b.d.GUILD_PRODUCT))
        );
    }
    get isSoftDeletedProduct() {
        return this.sku?.deleted === !0;
    }
    get isCollectible() {
        return null != this.sku && this.sku.productLine === D.EZt.COLLECTIBLES;
    }
}
let U = [];
function M(e) {
    let { payment: t } = e,
        i = G.createFromServer(t),
        n = U.findIndex((e) => e.id === t.id);
    -1 === n ? (U.push(i), U.sort((e, t) => t.createdAt.getTime() - e.createdAt.getTime())) : (U[n] = i), (U = [...U]);
}
class V extends d.Ay.Store {
    static displayName = "PaymentStore";
    getPayment(e) {
        return U.find((t) => t.id === e);
    }
    getPayments() {
        return U;
    }
}
let k = new V(m.h, {
    BILLING_PAYMENTS_FETCH_SUCCESS: function (e) {
        let { payments: t } = e;
        for (let e of t) {
            let t = G.createFromServer(e),
                i = U.findIndex((t) => t.id === e.id);
            -1 !== i ? (U[i] = t) : U.push(t);
        }
        U.sort((e, t) => t.createdAt.getTime() - e.createdAt.getTime()), (U = [...U]);
    },
    PAYMENT_UPDATE: M,
    BILLING_PAYMENT_FETCH_SUCCESS: M,
    LOGOUT: function () {
        U = [];
    },
});
var w = i(97352),
    B = i(166403),
    F = i(927578),
    z = i(989349),
    Y = i.n(z),
    X = i(990078),
    H = i(821609),
    K = i(939249),
    W = i(289873),
    Z = i(707554),
    q = i(789645),
    Q = i(933832),
    J = i(349288),
    $ = i(34188),
    ee = i(403581),
    et = i(597770),
    ei = i(512950),
    en = i(975807),
    es = i(793574),
    el = i(688810),
    er = i(46225),
    ea = i(587895),
    eo = i(636537),
    eu = i(683071),
    ed = i(192308);
let ec = function (e, t) {
    (0, ed.openModalLazy)(async () => {
        let { default: s } = await Promise.all([i.e("7755"), i.e("34138")]).then(i.bind(i, 206049));
        return (i) => (0, n.jsx)(s, { payment: e, paymentSource: t, ...i });
    });
};
var eg = i(818348),
    em = i(12762);
async function eA(e) {
    try {
        return (
            await eo.Bo.get({
                url: D.Rsh.BILLING_INVOICE_BREAKDOWN,
                query: { payment_id: e },
                oldFormErrors: !0,
                rejectWithError: !1,
            })
        ).body;
    } catch (e) {
        throw e;
    }
}
function eh(e) {
    let { payment: t } = e,
        [i, l] = s.useState(null),
        [r, a] = s.useState(null),
        o = async (e) => {
            try {
                let i = await eA(t.id);
                l(i);
                let n = e ? i.refundInvoiceLinks[0] : i.invoiceLink;
                window.open(n, "_blank"), a(null);
            } catch (e) {
                a(e.body?.message);
            }
        },
        u = null != t.paymentSource && t.status === eg.__.COMPLETED,
        d = i?.invoiceLink,
        c = i?.refundInvoiceLinks;
    return t.hasInvoiceURL && null == i
        ? (0, n.jsxs)("div", {
              className: em.It,
              children: [
                  (0, n.jsx)(J.Anchor, { onClick: () => o(!1), children: C.intl.formatToPlainString(C.t.R0xzCN, {}) }),
                  t.hasRefundInvoiceURLs
                      ? (0, n.jsx)(J.Anchor, {
                            className: em.oe,
                            onClick: () => o(!0),
                            children: C.intl.formatToPlainString(C.t["3x6NGw"], {}),
                        })
                      : null,
                  null != r && "" !== r && (0, n.jsx)(eu.w, { type: "critical", children: r }),
              ],
          })
        : t.hasInvoiceURL && null != i
          ? (0, n.jsxs)("div", {
                className: em.It,
                children: [
                    (0, n.jsx)(J.Anchor, { href: d, children: C.intl.formatToPlainString(C.t.R0xzCN, {}) }),
                    null != c
                        ? c.map((e, t) =>
                              (0, n.jsx)(
                                  J.Anchor,
                                  {
                                      className: em.oe,
                                      href: e,
                                      children: C.intl.formatToPlainString(C.t["3x6NGw"], {}),
                                  },
                                  t,
                              ),
                          )
                        : null,
                    null != r && "" !== r && (0, n.jsx)(eu.w, { type: "critical", children: r }),
                ],
            })
          : u
            ? (0, n.jsx)("div", {
                  className: em.It,
                  children: (0, n.jsx)(J.Anchor, {
                      onClick: () => {
                          var e;
                          (e = t.paymentSource), ec(t, e);
                      },
                      children: C.intl.formatToPlainString(C.t.onRIxS, {}),
                  }),
              })
            : null;
}
var eE = i(137177),
    ex = i(250627),
    eT = i(871109),
    eS = i(571654),
    ep = i(411342),
    eN = i(179499),
    ef = i(741231),
    eC = i(95035),
    e_ = i(337095),
    eI = i(871123),
    eb = i(510022),
    ev = i(68935),
    ej = i(148355),
    ey = i(780964),
    eO = i(779733),
    eR = i(858897),
    eL = i(317525),
    eD = i(71393),
    eP = i(287809),
    eG = i(295405),
    eU = i(90165),
    eM = i(147925),
    eV = i(174459),
    ek = i(957565),
    ew = i(58703),
    eB = i(580630),
    eF = i(427262),
    ez = i(219887);
let eY = (e) => `https://${D.XlF}/hc/${e.toLowerCase()}/requests/new?ticket_form_id=360000118612`,
    eX = [D.Puh.DURABLE_PRIMARY, D.Puh.DURABLE, D.Puh.CONSUMABLE],
    eH = [D.__0.FAILED, D.__0.REVERSED, D.__0.CANCELED],
    eK = [eg.kM.APPLE],
    eW = (e) => {
        let { description: t, cost: i } = e;
        return (0, n.jsx)("li", {
            className: em.mg,
            children: (0, n.jsxs)(T.A, {
                justify: T.A.Justify.BETWEEN,
                children: [(0, n.jsx)("div", { children: t }), (0, n.jsx)("div", { children: i })],
            }),
        });
    };
function eZ(e) {
    let { value: t, copyText: i, copyFeedbackText: l } = e,
        [r, a] = s.useState(!1),
        [o, u] = s.useState(!1);
    return (0, n.jsx)(X.m, {
        forceOpen: o,
        text: r ? l : i,
        children: (0, n.jsx)(K.D, {
            onMouseEnter: () => {
                r && a(!1);
            },
            onMouseLeave: () => {
                u(!1);
            },
            onClick: () => {
                (0, ek.C)(t, () => {
                    u(!0), a(!0);
                });
            },
            children: (0, n.jsx)("div", { className: em.l9, children: t }),
        }),
    });
}
let eq = (e) => {
    let { description: t, detail: i } = e;
    return (0, n.jsx)("li", {
        className: em.Iu,
        children: (0, n.jsxs)(T.A, {
            justify: T.A.Justify.BETWEEN,
            children: [(0, n.jsx)("div", { children: t }), (0, n.jsx)("div", { children: i })],
        }),
    });
};
function eQ(e) {
    let { guildId: t, guildProductListingId: i } = e,
        l = (0, ex.Qi)(t, i, { requireCurrentGuild: !1 }),
        r = (0, eS.z)(l),
        a = (0, d.bG)([eD.A], () => eD.A.getGuild(t)),
        o = l?.role_id != null && l?.attachments_count === 0 ? C.intl.string(C.t.H11qcT) : r,
        u = s.useCallback(async () => {
            a?.features.has(D.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE)
                ? await (0, ef.A)(D.BVt.GUILD_PRODUCT(t, i))
                : await (0, ef.A)(D.BVt.CHANNEL(t)),
                (0, eO.default)();
        }, [a, t, i]);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            null != o && (0, n.jsx)(eq, { description: C.intl.string(C.t.lXPbJb), detail: o }),
            null != a &&
                (0, n.jsx)(eq, {
                    description: C.intl.string(C.t.Wpn8z8),
                    detail: (0, n.jsx)(eC.A, { onClick: u, children: a.name }),
                }),
        ],
    });
}
function eJ(e) {
    let { guildId: t, guildProductListingId: i } = e,
        s = (0, ex.Qi)(t, i, { requireCurrentGuild: !1 }),
        l = (0, d.bG)([eT.A], () => eT.A.getGuildProductFetchState(i) === eT.e.FETCHING),
        r = s?.role_id,
        a = (0, d.bG)([eL.A], () => (null != r ? eL.A.getRole(t, r) : void 0), [t, r]),
        o = (0, eN.A)({ guildId: t, productId: i }),
        u = (s?.attachments?.length ?? 0) > 0,
        c = null != a;
    return l
        ? (0, n.jsx)("div", { className: em.hT, children: (0, n.jsx)(W.y, {}) })
        : null != s && (u || c)
          ? (0, n.jsxs)("div", {
                className: em.hT,
                children: [
                    u &&
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(N.E, {
                                    variant: "text-xs/semibold",
                                    color: "text-default",
                                    className: em.yE,
                                    children: C.intl.string(C.t.hxawoy),
                                }),
                                (0, n.jsx)(H.$, { ...o }),
                            ],
                        }),
                    c &&
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                u && (0, n.jsx)("div", { className: em.yF }),
                                (0, n.jsx)(N.E, {
                                    variant: "text-xs/semibold",
                                    color: "text-default",
                                    className: em.yE,
                                    children: C.intl.string(C.t.gWBNet),
                                }),
                                (0, n.jsx)(ep.A, { role: a }),
                            ],
                        }),
                ],
            })
          : null;
}
class e$ extends s.PureComponent {
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
                return null == e.sku || e.sku.type !== D.Puh.CONSUMABLE;
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
                return !eH.includes(e.status);
            },
        },
        {
            rule: "PAYMENT_GATEWAY",
            canRefund: () => {
                let { payment: e } = this.props;
                return null == e.paymentGateway || !eK.includes(e.paymentGateway);
            },
        },
        {
            rule: "SKU_STICKER_PACK",
            canRefund: () => {
                let { payment: e } = this.props;
                return null == e.sku || !(0, v.Lt)(e.sku.flags, D.d68.STICKER);
            },
        },
        {
            rule: "SUBSCRIPTION_TYPE",
            canRefund: () => {
                let { payment: e } = this.props;
                return e.subscription?.type !== D.rzx.GUILD && e.subscription?.type !== D.rzx.APPLICATION;
            },
        },
        {
            rule: "GUILD_PRODUCT",
            canRefund: () => {
                let { payment: e } = this.props;
                return null == e.sku || !(0, v.Lt)(e.sku.flags, b.d.GUILD_PRODUCT);
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
        return Y()().diff(i, "days");
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
            case D.__0.PENDING:
                return (0, n.jsx)("span", { className: em.Xg, children: C.intl.string(C.t.y7F0Re) });
            case D.__0.FAILED:
                return (0, n.jsx)("span", { className: em.ob, children: C.intl.string(C.t.Yo4ru6) });
            case D.__0.REFUNDED:
                if (e.amountRefunded !== e.amount)
                    return (0, n.jsx)("span", { className: em.gD, children: C.intl.string(C.t.lYbZzz) });
                return (0, n.jsx)("span", { className: em.gD, children: C.intl.string(C.t.ZBb6NK) });
            case D.__0.REVERSED:
                return (0, n.jsx)("span", { className: em.ob, children: C.intl.string(C.t.YQv9Li) });
            case D.__0.CANCELED:
                return (0, n.jsx)("span", { className: em.ob, children: C.intl.string(C.t.ttkBhy) });
            default:
                return null;
        }
    }
    renderTenantStatusOverride() {
        let { payment: e, hasLinkedToApplication: t } = this.props;
        return (0, eI.bF)(e.sku) && e.status === D.__0.COMPLETED
            ? null != e.entitlements && e.entitlements.some((e) => e.isFulfilled())
                ? (0, n.jsx)("span", { className: em.gD, children: C.intl.string(C.t.Osji1u) })
                : e.isGift
                  ? null != e.entitlements && e.entitlements.some((e) => null != e.gifterId)
                      ? (0, n.jsx)("span", { className: em.gD, children: C.intl.string(C.t.lIsIFo) })
                      : (0, n.jsx)("span", { className: em.Tf, children: C.intl.string(C.t["+tqSi3"]) })
                  : t
                    ? (0, n.jsx)("span", { className: em.Tf, children: C.intl.string(C.t.y7F0Re) })
                    : (0, n.jsx)("span", { className: em.Tf, children: C.intl.string(C.t.HHC5Z4) })
            : null;
    }
    renderStatus() {
        return this.renderTenantStatusOverride() ?? this.renderDefaultStatus();
    }
    renderPrice() {
        let { payment: e } = this.props,
            t = e.amount - e.amountRefunded;
        return (0, n.jsx)("span", { className: em.q9, children: (0, eB.$g)(t, e.currency) });
    }
    renderPaymentIdField() {
        let { payment: e } = this.props;
        return (0, n.jsx)("li", {
            className: em.mg,
            children: (0, n.jsxs)("div", {
                className: em.bx,
                children: [
                    (0, n.jsx)("div", { children: C.intl.string(C.t["UQim+r"]) }),
                    (0, n.jsx)(eZ, {
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
            className: r()(em.iL, em.W),
            children: [
                null != e.paymentSource
                    ? (0, n.jsx)(ez.A, {
                          paymentSource: e.paymentSource,
                          locale: t,
                          descriptionClassName: em.iL,
                          showLabels: !0,
                          showPaymentSourceIcon: !0,
                      })
                    : e.paymentGateway === eg.kM.APPLE_PARTNER
                      ? (0, n.jsx)(ez.A, {
                            paymentSource: new R.Pw({}),
                            locale: t,
                            descriptionClassName: em.iL,
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
                                      (0, n.jsx)(eW, { description: e.description, cost: (0, eB.$g)(o - a, d) }),
                                      (0, n.jsx)(eW, {
                                          description: C.intl.string(C.t.QgWXht),
                                          cost: (0, eB.$g)(a, d),
                                      }),
                                  ],
                              })
                            : null,
                        (0, n.jsx)(eW, { description: C.intl.string(C.t.txajQG), cost: (0, eB.$g)(o, d) }),
                        e.isGuildProductPurchase &&
                            null != c &&
                            null != e.sku &&
                            (0, n.jsx)(eQ, { guildId: c, guildProductListingId: e.sku.id }),
                        u > 0 &&
                            (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsx)(eW, {
                                        description: C.intl.string(C.t["A+I0AP"]),
                                        cost: (0, eB.$g)(u, d),
                                    }),
                                    (0, n.jsx)(eW, {
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
        return (0, n.jsx)(eh, { payment: e });
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
        return t.status === D.__0.REFUNDED
            ? (0, n.jsxs)(s.Fragment, {
                  children: [
                      (0, n.jsx)(Z.H, { className: em.mW, children: C.intl.string(C.t["gIGB/A"]) }),
                      (0, n.jsx)("div", {
                          className: em.iL,
                          children:
                              null != e
                                  ? C.intl.format(C.t.Q1K9eg, { username: eF.Ay.getName(e) })
                                  : C.intl.format(C.t.IBtGwC, { applicationName: l?.name }),
                      }),
                  ],
              })
            : t.isGift
              ? (0, n.jsxs)(s.Fragment, {
                    children: [
                        (0, n.jsx)(Z.H, { className: em.mW, children: C.intl.string(C.t["gIGB/A"]) }),
                        (0, n.jsx)("div", {
                            className: em.iL,
                            children:
                                null != e
                                    ? C.intl.format(C.t.vfUW65, { username: eF.Ay.getName(e) })
                                    : C.intl.string(C.t["18wIqp"]),
                        }),
                        null == e &&
                            (0, n.jsx)("div", {
                                className: em.TP,
                                children: (0, n.jsx)(H.$, {
                                    variant: "primary",
                                    text: C.intl.string(C.t["jcSP+g"]),
                                    onClick: () => (0, eR.openUserSettings)(ey.X.GIFT_PANEL),
                                }),
                            }),
                    ],
                })
              : o
                ? null
                : (0, n.jsxs)(s.Fragment, {
                      children: [
                          (0, n.jsx)(Z.H, { className: em.mW, children: C.intl.string(C.t["gIGB/A"]) }),
                          (0, n.jsx)("div", {
                              className: em.iL,
                              children: i
                                  ? C.intl.format(C.t.DQQCAw, { applicationName: l?.name, skuName: t.sku?.name })
                                  : C.intl.format(C.t.ED2BqF, { applicationName: l?.name, skuName: t.sku?.name }),
                          }),
                          (0, n.jsx)("div", {
                              className: em.TP,
                              children: i
                                  ? (0, n.jsx)(H.$, {
                                        variant: "primary",
                                        text: C.intl.string(C.t.zoztQA),
                                        onClick: () => (0, en.A)(eY(r)),
                                    })
                                  : (0, n.jsx)(H.$, {
                                        variant: "primary",
                                        text: C.intl.string(C.t["jCqvk/"]),
                                        onClick: () => {
                                            null != t.sku &&
                                                null != l &&
                                                (eV.default.track(
                                                    D.HAw.PAYMENT_HISTORY_CONNECT_ACCOUNT_BUTTON_CLICKED,
                                                    { sku_id: t.sku.id, application_id: l.id, location_stack: a },
                                                ),
                                                (0, eb.n)({ sku: t.sku, application: l, analyticsLocations: a }));
                                        },
                                    }),
                          }),
                      ],
                  });
    }
    renderAdditionalTenantInfo() {
        let { payment: e } = this.props;
        if ((0, eI.bF)(e.sku)) return this.renderAdditionalGameItemDetails();
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
            a = eY(t),
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
                    (0, n.jsx)(Z.H, { className: em.mW, children: C.intl.string(C.t["n/27pr"]) }),
                    (0, n.jsxs)("div", {
                        className: em.iL,
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
                className: em._Z,
                children: [
                    (0, n.jsx)(Z.H, { className: em.ud, children: e }),
                    (0, n.jsxs)("div", {
                        className: em.z9,
                        children: [
                            (0, n.jsx)(t, { className: em.xb, color: "currentColor" }),
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
        let s = e.includes("PURCHASE_DATE") ? q.P : Q.A;
        return (0, n.jsxs)("div", {
            className: em.My,
            children: [
                (0, n.jsx)("div", {
                    className: em.Kf,
                    children:
                        !i.isCollectible &&
                        this.renderRefundCriteria(
                            C.intl.string(C.t.H0RNz4),
                            s,
                            C.intl.formatToPlainString(C.t["7dtXa/"], { daysSincePurchase: this.daysSincePurchase }),
                        ),
                }),
                (0, n.jsx)(J.Anchor, { href: eY(t), children: C.intl.string(C.t.re5nOB) }),
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
            m = null != l.paymentSource && D.AD1.has(l.paymentSource.type);
        if (null != g && 0 !== g.items.length) {
            let i = [],
                s = null;
            if (g.type === D.rzx.PREMIUM)
                g.items.forEach((e) => {
                    let { planId: t, quantity: n } = e;
                    (0, F.xq)(t)
                        ? (i.push(F.Ay.getDisplayName(t, !1, m)), (s = (0, F.mH)(P.hd[t].skuId)))
                        : (i.push(`${n > 1 ? `${n}x ` : ""}${F.Ay.getDisplayName(t, !1, m)}`),
                          null == s && (s = (0, F.mH)(P.hd[t].skuId)));
                });
            else if (g.type === D.rzx.GUILD) {
                if (null != u) {
                    let e = u.interval === P.WT.YEAR ? C.t.V6UFQM : C.t["6oq128"];
                    i.push(C.intl.format(e, { planName: u.name })), (s = u.skuId);
                }
            } else
                g.type === D.rzx.APPLICATION &&
                    (null != u && (s = u.skuId),
                    null != r
                        ? i.push(C.intl.formatToPlainString(C.t["0wL/VI"], { tier: c?.name }))
                        : i.push(C.intl.string(C.t["9czSYu"])));
            (t = 0 !== i.length ? i.join(", ") : l.description),
                (e = (0, n.jsx)(eE.A, {
                    className: em.Sy,
                    guildClassName: em.zA,
                    game: r,
                    guild: a,
                    size: eE.M.XSMALL,
                    skuId: s ?? c?.id,
                }));
        } else if (null != c)
            if (
                ((t = l.isGuildProductPurchase && l.isSoftDeletedProduct ? C.intl.string(C.t.O7uLmw) : c.name),
                null != o)
            ) {
                let t = (0, ev.Id)(o);
                e = (0, n.jsx)(ej.A, {
                    disableAnimation: !d,
                    isInteracting: d,
                    sticker: t,
                    className: em.Sy,
                    size: 24,
                });
            } else
                e =
                    l.sku?.productLine === D.EZt.COLLECTIBLES
                        ? (0, n.jsx)($.U, {
                              size: "custom",
                              width: 23,
                              height: 23,
                              color: "currentColor",
                              className: em.sV,
                          })
                        : (0, n.jsx)(eE.A, {
                              className: em.Sy,
                              guildClassName: em.zA,
                              game: r,
                              guild: a,
                              size: eE.M.XSMALL,
                              skuId: c.id,
                          });
        else (e = (0, n.jsx)(ee.t, { size: "md", color: "currentColor", className: em.Sy })), (t = l.description);
        let A = (0, n.jsx)(N.E, {
                variant: "text-sm/normal",
                className: em.p6,
                children: (0, ew.i$)(Y()(l.createdAt), "MM/DD/YYYY"),
            }),
            h = l.isGift
                ? (0, n.jsx)(X.m, {
                      text: C.intl.string(C.t.QddTpm),
                      children: (0, n.jsx)(et.o, { size: "md", color: "currentColor", className: em.ez }),
                  })
                : null;
        return i
            ? (0, n.jsxs)("div", { className: em.h_, children: [e, (0, n.jsxs)("div", { children: [t, A] }), h] })
            : (0, n.jsxs)(s.Fragment, {
                  children: [
                      A,
                      (0, n.jsxs)("div", { className: em.h_, children: [e, (0, n.jsx)("div", { children: t }), h] }),
                  ],
              });
    }
    renderGuildProductBenefits() {
        let { payment: e, application: t, locale: i } = this.props,
            s = t?.guildId;
        return e.isGuildProductPurchase
            ? (0, n.jsxs)(n.Fragment, {
                  children: [
                      (0, n.jsx)("div", { className: em.ts }),
                      e.isSoftDeletedProduct
                          ? (0, n.jsx)(ei.p, {
                                messageType: ei.Y.WARNING,
                                action: (0, n.jsx)(H.$, {
                                    variant: "overlay-secondary",
                                    text: C.intl.string(C.t.zoztQA),
                                    onClick: () => (0, en.A)(eY(i)),
                                }),
                                children: C.intl.string(C.t["3AvulN"]),
                            })
                          : null != s &&
                            null != e.sku &&
                            (0, n.jsx)(eJ, { guildId: s, guildProductListingId: e.sku.id }),
                  ],
              })
            : null;
    }
    renderExpandedSection() {
        return (0, n.jsx)(K.D, {
            onClick: (e) => e.stopPropagation(),
            children: (0, n.jsxs)("div", {
                className: em.WI,
                children: [
                    (0, n.jsx)(Z.H, { className: em.mW, children: C.intl.string(C.t.nyzoFb) }),
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
                (0, n.jsxs)(K.D, {
                    onClick: this.handleExpandInfo,
                    "data-expanded": s,
                    className: r()(em.Ji, t, { [em.oE]: i }),
                    focusProps: { offset: 4 },
                    ...e,
                    children: [
                        (0, n.jsxs)(T.A, {
                            className: em.J7,
                            align: T.A.Align.CENTER,
                            "data-expanded": s,
                            children: [
                                this.renderDescription(),
                                (0, n.jsxs)("div", {
                                    className: em.vj,
                                    children: [this.renderStatus(), this.renderPrice()],
                                }),
                                (0, n.jsx)(eM.A, {
                                    className: em.fT,
                                    direction: s ? eM.A.Directions.UP : eM.A.Directions.DOWN,
                                }),
                            ],
                        }),
                        s ? this.renderExpandedSection() : null,
                    ],
                }),
        });
    }
}
function e0(e) {
    let { payment: t, locale: i, compactMode: l, className: r } = e,
        a = null != t.sku && eX.includes(t.sku.type),
        o = null != t.sku && a ? t.sku.applicationId : null,
        u = t.sku?.applicationId,
        c = t.subscription?.type === D.rzx.APPLICATION,
        {
            applicationStatistics: g,
            gameApplication: m,
            paymentSources: A,
        } = (0, d.cf)([eG.A, eU.A, ea.A], () => ({
            applicationStatistics: null != o ? eU.A.getCurrentUserStatisticsForApplication(o) : null,
            gameApplication: ea.A.getApplication(o ?? "") ?? t.sku?.application,
            paymentSources: eG.A.paymentSources,
        })),
        { hasAlreadyLinked: h } = (0, er.RD)((0, eI.bF)(t.sku) ? m : void 0),
        E = (0, d.bG)([ea.A], () => (null != u ? ea.A.getApplication(u) : null));
    s.useEffect(() => {
        c && null != u && (0, e_.TA)(u);
    }, [u, c]);
    let x = (0, d.bG)([eD.A], () => eD.A.getGuild(m?.guildId)),
        T = a ? m : void 0,
        S = t.subscription,
        p = (0, d.bG)([w.A], () => (null != S && S.type !== D.rzx.PREMIUM ? w.A.get(S.items[0].planId) : null)),
        N = (0, d.bG)([eP.default], () => {
            let e = t.isGift ? t.entitlements?.find((e) => e.user?.id != null && null != e.gifterId) : null;
            return null == e ? null : (eP.default.getUser(e.user?.id ?? null) ?? e?.user);
        }, [t]),
        { analyticsLocations: f } = (0, el.Ay)(es.A.BILLING_SETTINGS_BILLING);
    return (0, n.jsx)(e$, {
        applicationStatistics: g,
        application: c ? E : T,
        analyticsLocations: f,
        guild: x,
        stickerPack: null,
        paymentSources: A,
        locale: i,
        compactMode: l,
        className: r,
        payment: t,
        plan: p,
        claimedGiftUser: N,
        hasLinkedToApplication: h,
    });
}
var e1 = i(687788);
function e2(e) {
    let { payments: t, locale: i, compactMode: l, numPages: a } = e,
        o = s.useRef(null),
        [d, g] = s.useState(0),
        [m, A] = s.useState(null),
        h = t.slice(10 * d, (d + 1) * 10);
    s.useEffect(() => {
        o.current?.scrollTo({ to: 0 });
    }, [d]);
    let T = s.useCallback(
            (e) => {
                g(e);
                let i = t[t.length - 1].id;
                e >= a - 2 && m !== i && ((0, x.CK)(10, i), A(i));
            },
            [t, a, m],
        ),
        S = (0, E.A)("billing-history", o);
    return (0, n.jsx)(u.hD, {
        navigator: S,
        children: (0, n.jsx)(u.PR, {
            children: (e) => {
                let { ref: t, ...s } = e;
                return (0, n.jsx)(I, {
                    className: e1.GD,
                    currentPageIndex: d,
                    onChangePage: T,
                    numPages: a,
                    showPageCount: !1,
                    ref: t,
                    ...s,
                    children: (0, n.jsx)(c.Ch, {
                        className: e1.Bd,
                        ref: o,
                        overflow: "auto",
                        children: h.map((e, t) =>
                            (0, n.jsx)(e0, { className: r()(e1.Nj, e1.Bd), payment: e, locale: i, compactMode: l }, t),
                        ),
                    }),
                });
            },
        }),
    });
}
class e3 extends s.PureComponent {
    static defaultProps = { compactMode: !1 };
    scrollerRef = s.createRef();
    get numPages() {
        return Math.max(Math.ceil(this.props.payments.length / 10), 1);
    }
    componentDidMount() {
        m.h.wait(() => {
            (0, A.X)(), (0, x.CK)(30);
        });
    }
    renderPremiumExternalSubscription(e) {
        return (
            o()(null != e.paymentGateway, "Expected payment gateway when rendering for external subscription"),
            (0, n.jsxs)(g.Z, {
                className: e1.K1,
                children: [
                    (0, n.jsx)("div", {
                        className: e1.BF,
                        children: C.intl.format(C.t["6mIX6s"], { paymentGatewayName: eg.qm[e.paymentGateway] }),
                    }),
                    (0, n.jsx)("div", {
                        className: e1.Q2,
                        children: C.intl.format(C.t.eG0uZB, {
                            paymentGatewayName: eg.qm[e.paymentGateway],
                            billingHistoryLink: (0, F.tW)(e.paymentGateway, "BILLING_HISTORY"),
                        }),
                    }),
                ],
            })
        );
    }
    render() {
        let { compactMode: e, payments: t, subscription: i, locale: s } = this.props,
            l = null != i && i.isPurchasedExternally;
        return 0 !== t.length || l
            ? (0, n.jsxs)("div", {
                  className: e1.GD,
                  children: [
                      null != i && l ? this.renderPremiumExternalSubscription(i) : null,
                      t.length > 0
                          ? (0, n.jsxs)("div", {
                                className: r()(e1.PQ, e1.GD),
                                children: [
                                    e
                                        ? null
                                        : (0, n.jsx)("div", {
                                              className: r()(e1.Nj, e1.Bd),
                                              children: (0, n.jsxs)(T.A, {
                                                  className: e1.Yi,
                                                  children: [
                                                      (0, n.jsx)("div", {
                                                          className: em.p6,
                                                          children: C.intl.string(C.t["5t11BV"]),
                                                      }),
                                                      (0, n.jsx)("div", {
                                                          className: e1.Ir,
                                                          children: C.intl.string(C.t.yAAPb2),
                                                      }),
                                                      (0, n.jsx)("div", {
                                                          className: em.vj,
                                                          children: C.intl.string(C.t["6MqHXV"]),
                                                      }),
                                                  ],
                                              }),
                                          }),
                                    (0, n.jsx)(e2, { compactMode: e, locale: s, payments: t, numPages: this.numPages }),
                                ],
                            })
                          : null,
                  ],
              })
            : null;
    }
}
function e6(e) {
    let t = e.skuId,
        i = e.subscription?.items[0].planId;
    return !(null == t || null == i || Object.values(P.pe).includes(t) || (0, F.ys)(i));
}
function e4(e) {
    let t = (0, d.bG)([k], () => k.getPayments()),
        i = (0, d.bG)([B.A], () => B.A.getPremiumTypeSubscription()),
        l = s.useMemo(
            () =>
                new Set(
                    t.filter(e6).map((e) => {
                        let { subscription: t } = e;
                        return t?.items[0].planId;
                    }),
                ),
            [t],
        ),
        r = s.useMemo(
            () =>
                new Set(
                    t.filter(e6).map((e) => {
                        let { skuId: t } = e;
                        return t;
                    }),
                ),
            [t],
        ),
        a = (0, d.yK)([w.A], () => w.A.getPlanIdsForSkus(Array.from(r))),
        o = s.useCallback(() => a.length === l.size, [a, l]),
        u = s.useMemo(() => t.filter((e) => e.currency !== D.Yri.DISCORD_ORB), [t]);
    return (
        s.useEffect(() => {
            o() ||
                m.h.wait(() => {
                    r.forEach((e) => (0, h.ur)(e, void 0, void 0, !0, void 0));
                });
        }, [o, r]),
        (0, n.jsx)(e3, { ...e, payments: u, subscription: i })
    );
}
