n.d(t, { A: () => e4 });
var s = n(627968),
    i = n(64700),
    a = n(503698),
    l = n.n(a),
    r = n(284009),
    c = n.n(r),
    u = n(837381),
    o = n(17928),
    d = n(689175),
    m = n(359778),
    p = n(228366),
    h = n(661439),
    x = n(73825),
    f = n(928039),
    C = n(323082),
    g = n(235986),
    y = n(408278),
    j = n(921853),
    A = n(834730),
    v = n(320448),
    N = n(985018),
    P = n(632787);
let I = i.forwardRef(function (e, t) {
    let { currentPageIndex: n, numPages: i, onChangePage: a, children: l, showPageCount: r = !0, ...c } = e,
        u = n >= i - 1,
        o = r
            ? N.intl.format(N.t.MtpIwg, { currentPage: n + 1, numPages: i })
            : N.intl.format(N.t.bKI77c, { currentPage: n + 1 });
    return (0, s.jsxs)("div", {
        ref: t,
        ...c,
        children: [
            l,
            (0, s.jsx)("div", {
                className: P.v,
                children: (0, s.jsxs)("div", {
                    className: P.U,
                    children: [
                        (0, s.jsx)(y.K, {
                            variant: "icon-only",
                            icon: j.n,
                            disabled: n <= 0,
                            onClick: () => a(n - 1),
                            "aria-label": N.intl.string(N.t.vgfxaA),
                        }),
                        (0, s.jsx)(A.E, { variant: "text-sm/medium", children: o }),
                        (0, s.jsx)(y.K, {
                            variant: "icon-only",
                            icon: v._,
                            disabled: u,
                            onClick: () => a(n + 1),
                            "aria-label": N.intl.string(N.t.XiOHRX),
                        }),
                    ],
                }),
            }),
        ],
    });
});
n(321073), n(938796);
var E = n(122817),
    S = n(665260),
    b = n(315069),
    L = n(32731),
    _ = n(557009),
    T = n(202613),
    D = n(243217),
    w = n(652215),
    R = n(788868);
class M extends b.A {
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
        let t = null != e.payment_source ? T.Ay.createFromServer(e.payment_source) : null,
            n = null != e.sku ? L.A.createFromServer(e.sku) : null,
            s = null != e.subscription ? D.A.createFromServer(e.subscription) : null;
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
            subscription: s,
            skuId: e.sku_id,
            skuPrice: e.sku_price,
            sku: n,
            downloadableInvoice: e.downloadable_invoice,
            downloadableRefundInvoices: e.downloadable_refund_invoices,
            hasInvoiceURL: e.has_invoice_url,
            hasRefundInvoiceURLs: e.has_refund_invoice_urls,
            premiumRefundDisqualificationReasons: e.premium_refund_disqualification_reasons,
            entitlements: null != e.entitlements ? e.entitlements.map((e) => _.A.createFromServer(e)) : void 0,
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
        return this.paymentGateway === w.kM_.APPLE;
    }
    get isPurchasedViaGoogle() {
        return this.paymentGateway === w.kM_.GOOGLE;
    }
    get isPurchasedExternally() {
        return this.isPurchasedViaApple || this.isPurchasedViaGoogle;
    }
    get isSubscription() {
        return null != this.subscription;
    }
    get isPremiumSubscription() {
        return null != this.subscription && R.JM.has(this.subscription.planId);
    }
    get isPremiumGuildSubscription() {
        return (
            null != this.subscription &&
            null !=
                this.subscription.additionalPlans.find((e) => {
                    let { planId: t } = e;
                    return R.pW.has(t);
                })
        );
    }
    get isGift() {
        return S.Lt(this.flags, 1);
    }
    get isPremiumGift() {
        return this.isGift && Object.values(R.pe).includes(this.skuId);
    }
    get isGuildProductPurchase() {
        return (
            null != this.sku &&
            (this.sku.productLine === w.EZt.GUILD_PRODUCT || S.Lt(this.sku.flags, E.d.GUILD_PRODUCT))
        );
    }
    get isSoftDeletedProduct() {
        return this.sku?.deleted === !0;
    }
    get isCollectible() {
        return null != this.sku && this.sku.productLine === w.EZt.COLLECTIBLES;
    }
}
let U = [];
function k(e) {
    let { payment: t } = e,
        n = M.createFromServer(t),
        s = U.findIndex((e) => e.id === t.id);
    -1 === s ? (U.push(n), U.sort((e, t) => t.createdAt.getTime() - e.createdAt.getTime())) : (U[s] = n), (U = [...U]);
}
class G extends o.Ay.Store {
    static displayName = "PaymentStore";
    getPayment(e) {
        return U.find((t) => t.id === e);
    }
    getPayments() {
        return U;
    }
}
let O = new G(p.h, {
    BILLING_PAYMENTS_FETCH_SUCCESS: function (e) {
        let { payments: t } = e;
        for (let e of t) {
            let t = M.createFromServer(e),
                n = U.findIndex((t) => t.id === e.id);
            -1 !== n ? (U[n] = t) : U.push(t);
        }
        U.sort((e, t) => t.createdAt.getTime() - e.createdAt.getTime()), (U = [...U]);
    },
    PAYMENT_UPDATE: k,
    BILLING_PAYMENT_FETCH_SUCCESS: k,
    LOGOUT: function () {
        U = [];
    },
});
var H = n(97352),
    B = n(166403),
    F = n(927578),
    z = n(989349),
    q = n.n(z),
    Y = n(990078),
    V = n(821609),
    Z = n(939249),
    K = n(289873),
    W = n(707554),
    Q = n(789645),
    $ = n(933832),
    J = n(349288),
    X = n(34188),
    ee = n(403581),
    et = n(597770),
    en = n(512950),
    es = n(975807),
    ei = n(793574),
    ea = n(688810),
    el = n(46225),
    er = n(587895),
    ec = n(636537),
    eu = n(683071),
    eo = n(192308);
let ed = function (e, t) {
    (0, eo.openModalLazy)(async () => {
        let { default: i } = await Promise.all([n.e("7755"), n.e("34138")]).then(n.bind(n, 206049));
        return (n) => (0, s.jsx)(i, { payment: e, paymentSource: t, ...n });
    });
};
var em = n(818348),
    ep = n(12762);
async function eh(e) {
    try {
        return (
            await ec.Bo.get({
                url: w.Rsh.BILLING_INVOICE_BREAKDOWN,
                query: { payment_id: e },
                oldFormErrors: !0,
                rejectWithError: !1,
            })
        ).body;
    } catch (e) {
        throw e;
    }
}
function ex(e) {
    let { payment: t } = e,
        [n, a] = i.useState(null),
        [l, r] = i.useState(null),
        c = async (e) => {
            try {
                let n = await eh(t.id);
                a(n);
                let s = e ? n.refundInvoiceLinks[0] : n.invoiceLink;
                window.open(s, "_blank"), r(null);
            } catch (e) {
                r(e.body?.message);
            }
        },
        u = null != t.paymentSource && t.status === em.__.COMPLETED,
        o = n?.invoiceLink,
        d = n?.refundInvoiceLinks;
    return t.hasInvoiceURL && null == n
        ? (0, s.jsxs)("div", {
              className: ep.It,
              children: [
                  (0, s.jsx)(J.Anchor, { onClick: () => c(!1), children: N.intl.formatToPlainString(N.t.R0xzCN, {}) }),
                  t.hasRefundInvoiceURLs
                      ? (0, s.jsx)(J.Anchor, {
                            className: ep.oe,
                            onClick: () => c(!0),
                            children: N.intl.formatToPlainString(N.t["3x6NGw"], {}),
                        })
                      : null,
                  null != l && "" !== l && (0, s.jsx)(eu.w, { type: "critical", children: l }),
              ],
          })
        : t.hasInvoiceURL && null != n
          ? (0, s.jsxs)("div", {
                className: ep.It,
                children: [
                    (0, s.jsx)(J.Anchor, { href: o, children: N.intl.formatToPlainString(N.t.R0xzCN, {}) }),
                    null != d
                        ? d.map((e, t) =>
                              (0, s.jsx)(
                                  J.Anchor,
                                  {
                                      className: ep.oe,
                                      href: e,
                                      children: N.intl.formatToPlainString(N.t["3x6NGw"], {}),
                                  },
                                  t,
                              ),
                          )
                        : null,
                    null != l && "" !== l && (0, s.jsx)(eu.w, { type: "critical", children: l }),
                ],
            })
          : u
            ? (0, s.jsx)("div", {
                  className: ep.It,
                  children: (0, s.jsx)(J.Anchor, {
                      onClick: () => {
                          var e;
                          (e = t.paymentSource), ed(t, e);
                      },
                      children: N.intl.formatToPlainString(N.t.onRIxS, {}),
                  }),
              })
            : null;
}
var ef = n(137177),
    eC = n(250627),
    eg = n(871109),
    ey = n(571654),
    ej = n(411342),
    eA = n(179499),
    ev = n(22007),
    eN = n(95035),
    eP = n(337095),
    eI = n(871123),
    eE = n(510022),
    eS = n(68935),
    eb = n(148355),
    eL = n(780964),
    e_ = n(779733),
    eT = n(858897),
    eD = n(317525),
    ew = n(71393),
    eR = n(287809),
    eM = n(295405),
    eU = n(90165),
    ek = n(147925),
    eG = n(954571),
    eO = n(957565),
    eH = n(58703),
    eB = n(580630),
    eF = n(427262),
    ez = n(219887);
let eq = (e) => `https://${w.XlF}/hc/${e.toLowerCase()}/requests/new?ticket_form_id=360000118612`,
    eY = [w.Puh.DURABLE_PRIMARY, w.Puh.DURABLE, w.Puh.CONSUMABLE],
    eV = [w.__0.FAILED, w.__0.REVERSED, w.__0.CANCELED],
    eZ = [em.kM.APPLE],
    eK = (e) => {
        let { description: t, cost: n } = e;
        return (0, s.jsx)("li", {
            className: ep.mg,
            children: (0, s.jsxs)(g.A, {
                justify: g.A.Justify.BETWEEN,
                children: [(0, s.jsx)("div", { children: t }), (0, s.jsx)("div", { children: n })],
            }),
        });
    };
function eW(e) {
    let { value: t, copyText: n, copyFeedbackText: a } = e,
        [l, r] = i.useState(!1),
        [c, u] = i.useState(!1);
    return (0, s.jsx)(Y.m, {
        forceOpen: c,
        text: l ? a : n,
        children: (0, s.jsx)(Z.D, {
            onMouseEnter: () => {
                l && r(!1);
            },
            onMouseLeave: () => {
                u(!1);
            },
            onClick: () => {
                (0, eO.C)(t, () => {
                    u(!0), r(!0);
                });
            },
            children: (0, s.jsx)("div", { className: ep.l9, children: t }),
        }),
    });
}
let eQ = (e) => {
    let { description: t, detail: n } = e;
    return (0, s.jsx)("li", {
        className: ep.Iu,
        children: (0, s.jsxs)(g.A, {
            justify: g.A.Justify.BETWEEN,
            children: [(0, s.jsx)("div", { children: t }), (0, s.jsx)("div", { children: n })],
        }),
    });
};
function e$(e) {
    let { guildId: t, guildProductListingId: n } = e,
        a = (0, eC.Qi)(t, n, { requireCurrentGuild: !1 }),
        l = (0, ey.z)(a),
        r = (0, o.bG)([ew.A], () => ew.A.getGuild(t)),
        c = a?.role_id != null && a?.attachments_count === 0 ? N.intl.string(N.t.H11qcT) : l,
        u = i.useCallback(async () => {
            r?.features.has(w.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE)
                ? await (0, ev.A)(w.BVt.GUILD_PRODUCT(t, n))
                : await (0, ev.A)(w.BVt.CHANNEL(t)),
                (0, e_.default)();
        }, [r, t, n]);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            null != c && (0, s.jsx)(eQ, { description: N.intl.string(N.t.lXPbJb), detail: c }),
            null != r &&
                (0, s.jsx)(eQ, {
                    description: N.intl.string(N.t.Wpn8z8),
                    detail: (0, s.jsx)(eN.A, { onClick: u, children: r.name }),
                }),
        ],
    });
}
function eJ(e) {
    let { guildId: t, guildProductListingId: n } = e,
        i = (0, eC.Qi)(t, n, { requireCurrentGuild: !1 }),
        a = (0, o.bG)([eg.A], () => eg.A.getGuildProductFetchState(n) === eg.e.FETCHING),
        l = i?.role_id,
        r = (0, o.bG)([eD.A], () => (null != l ? eD.A.getRole(t, l) : void 0), [t, l]),
        c = (0, eA.A)({ guildId: t, productId: n }),
        u = (i?.attachments?.length ?? 0) > 0,
        d = null != r;
    return a
        ? (0, s.jsx)("div", { className: ep.hT, children: (0, s.jsx)(K.y, {}) })
        : null != i && (u || d)
          ? (0, s.jsxs)("div", {
                className: ep.hT,
                children: [
                    u &&
                        (0, s.jsxs)(s.Fragment, {
                            children: [
                                (0, s.jsx)(A.E, {
                                    variant: "text-xs/semibold",
                                    color: "text-default",
                                    className: ep.yE,
                                    children: N.intl.string(N.t.hxawoy),
                                }),
                                (0, s.jsx)(V.$, { ...c }),
                            ],
                        }),
                    d &&
                        (0, s.jsxs)(s.Fragment, {
                            children: [
                                u && (0, s.jsx)("div", { className: ep.yF }),
                                (0, s.jsx)(A.E, {
                                    variant: "text-xs/semibold",
                                    color: "text-default",
                                    className: ep.yE,
                                    children: N.intl.string(N.t.gWBNet),
                                }),
                                (0, s.jsx)(ej.A, { role: r }),
                            ],
                        }),
                ],
            })
          : null;
}
class eX extends i.PureComponent {
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
                return null == e.sku || e.sku.type !== w.Puh.CONSUMABLE;
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
                return !eV.includes(e.status);
            },
        },
        {
            rule: "PAYMENT_GATEWAY",
            canRefund: () => {
                let { payment: e } = this.props;
                return null == e.paymentGateway || !eZ.includes(e.paymentGateway);
            },
        },
        {
            rule: "SKU_STICKER_PACK",
            canRefund: () => {
                let { payment: e } = this.props;
                return null == e.sku || !(0, S.Lt)(e.sku.flags, w.d68.STICKER);
            },
        },
        {
            rule: "SUBSCRIPTION_TYPE",
            canRefund: () => {
                let { payment: e } = this.props;
                return e.subscription?.type !== w.rzx.GUILD && e.subscription?.type !== w.rzx.APPLICATION;
            },
        },
        {
            rule: "GUILD_PRODUCT",
            canRefund: () => {
                let { payment: e } = this.props;
                return null == e.sku || !(0, S.Lt)(e.sku.flags, E.d.GUILD_PRODUCT);
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
            n = null != t && t.isAfter(e.createdAt) ? t : e.createdAt;
        return q()().diff(n, "days");
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
            case w.__0.PENDING:
                return (0, s.jsx)("span", { className: ep.Xg, children: N.intl.string(N.t.y7F0Re) });
            case w.__0.FAILED:
                return (0, s.jsx)("span", { className: ep.ob, children: N.intl.string(N.t.Yo4ru6) });
            case w.__0.REFUNDED:
                if (e.amountRefunded !== e.amount)
                    return (0, s.jsx)("span", { className: ep.gD, children: N.intl.string(N.t.lYbZzz) });
                return (0, s.jsx)("span", { className: ep.gD, children: N.intl.string(N.t.ZBb6NK) });
            case w.__0.REVERSED:
                return (0, s.jsx)("span", { className: ep.ob, children: N.intl.string(N.t.YQv9Li) });
            case w.__0.CANCELED:
                return (0, s.jsx)("span", { className: ep.ob, children: N.intl.string(N.t.ttkBhy) });
            default:
                return null;
        }
    }
    renderTenantStatusOverride() {
        let { payment: e, hasLinkedToApplication: t } = this.props;
        return (0, eI.bF)(e.sku) && e.status === w.__0.COMPLETED
            ? null != e.entitlements && e.entitlements.some((e) => e.isFulfilled())
                ? (0, s.jsx)("span", { className: ep.gD, children: N.intl.string(N.t.Osji1u) })
                : e.isGift
                  ? null != e.entitlements && e.entitlements.some((e) => null != e.gifterId)
                      ? (0, s.jsx)("span", { className: ep.gD, children: N.intl.string(N.t.lIsIFo) })
                      : (0, s.jsx)("span", { className: ep.Tf, children: N.intl.string(N.t["+tqSi3"]) })
                  : t
                    ? (0, s.jsx)("span", { className: ep.Tf, children: N.intl.string(N.t.y7F0Re) })
                    : (0, s.jsx)("span", { className: ep.Tf, children: N.intl.string(N.t.HHC5Z4) })
            : null;
    }
    renderStatus() {
        return this.renderTenantStatusOverride() ?? this.renderDefaultStatus();
    }
    renderPrice() {
        let { payment: e } = this.props,
            t = e.amount - e.amountRefunded;
        return (0, s.jsx)("span", { className: ep.q9, children: (0, eB.$g)(t, e.currency) });
    }
    renderPaymentIdField() {
        let { payment: e } = this.props;
        return (0, s.jsx)("li", {
            className: ep.mg,
            children: (0, s.jsxs)("div", {
                className: ep.bx,
                children: [
                    (0, s.jsx)("div", { children: N.intl.string(N.t["UQim+r"]) }),
                    (0, s.jsx)(eW, {
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
            { taxInclusive: a, tax: r, amount: c, amountRefunded: u, currency: o } = e,
            d = n?.guildId;
        return (0, s.jsxs)("div", {
            className: l()(ep.iL, ep.W),
            children: [
                null != e.paymentSource
                    ? (0, s.jsx)(ez.A, {
                          paymentSource: e.paymentSource,
                          locale: t,
                          descriptionClassName: ep.iL,
                          showLabels: !0,
                          showPaymentSourceIcon: !0,
                      })
                    : e.paymentGateway === em.kM.APPLE_PARTNER
                      ? (0, s.jsx)(ez.A, {
                            paymentSource: new T.Pw({}),
                            locale: t,
                            descriptionClassName: ep.iL,
                            showLabels: !0,
                            showPaymentSourceIcon: !0,
                        })
                      : null,
                (0, s.jsxs)("ul", {
                    children: [
                        this.renderPaymentIdField(),
                        !a && r > 0
                            ? (0, s.jsxs)(i.Fragment, {
                                  children: [
                                      (0, s.jsx)(eK, { description: e.description, cost: (0, eB.$g)(c - r, o) }),
                                      (0, s.jsx)(eK, {
                                          description: N.intl.string(N.t.QgWXht),
                                          cost: (0, eB.$g)(r, o),
                                      }),
                                  ],
                              })
                            : null,
                        (0, s.jsx)(eK, { description: N.intl.string(N.t.txajQG), cost: (0, eB.$g)(c, o) }),
                        e.isGuildProductPurchase &&
                            null != d &&
                            null != e.sku &&
                            (0, s.jsx)(e$, { guildId: d, guildProductListingId: e.sku.id }),
                        u > 0 &&
                            (0, s.jsxs)(s.Fragment, {
                                children: [
                                    (0, s.jsx)(eK, {
                                        description: N.intl.string(N.t["A+I0AP"]),
                                        cost: (0, eB.$g)(u, o),
                                    }),
                                    (0, s.jsx)(eK, {
                                        description: N.intl.string(N.t.xER6Wi),
                                        cost: (0, eB.$g)(c - u, o),
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
        return (0, s.jsx)(ex, { payment: e });
    }
    renderAdditionalGameItemDetails() {
        let {
                claimedGiftUser: e,
                payment: t,
                hasLinkedToApplication: n,
                application: a,
                locale: l,
                analyticsLocations: r,
            } = this.props,
            c = t.entitlements?.some((e) => e.isFulfilled());
        return t.status === w.__0.REFUNDED
            ? (0, s.jsxs)(i.Fragment, {
                  children: [
                      (0, s.jsx)(W.H, { className: ep.mW, children: N.intl.string(N.t["gIGB/A"]) }),
                      (0, s.jsx)("div", {
                          className: ep.iL,
                          children:
                              null != e
                                  ? N.intl.format(N.t.Q1K9eg, { username: eF.Ay.getName(e) })
                                  : N.intl.format(N.t.IBtGwC, { applicationName: a?.name }),
                      }),
                  ],
              })
            : t.isGift
              ? (0, s.jsxs)(i.Fragment, {
                    children: [
                        (0, s.jsx)(W.H, { className: ep.mW, children: N.intl.string(N.t["gIGB/A"]) }),
                        (0, s.jsx)("div", {
                            className: ep.iL,
                            children:
                                null != e
                                    ? N.intl.format(N.t.vfUW65, { username: eF.Ay.getName(e) })
                                    : N.intl.string(N.t["18wIqp"]),
                        }),
                        null == e &&
                            (0, s.jsx)("div", {
                                className: ep.TP,
                                children: (0, s.jsx)(V.$, {
                                    variant: "primary",
                                    text: N.intl.string(N.t["jcSP+g"]),
                                    onClick: () => (0, eT.openUserSettings)(eL.X.GIFT_PANEL),
                                }),
                            }),
                    ],
                })
              : c
                ? null
                : (0, s.jsxs)(i.Fragment, {
                      children: [
                          (0, s.jsx)(W.H, { className: ep.mW, children: N.intl.string(N.t["gIGB/A"]) }),
                          (0, s.jsx)("div", {
                              className: ep.iL,
                              children: n
                                  ? N.intl.format(N.t.DQQCAw, { applicationName: a?.name, skuName: t.sku?.name })
                                  : N.intl.format(N.t.ED2BqF, { applicationName: a?.name, skuName: t.sku?.name }),
                          }),
                          (0, s.jsx)("div", {
                              className: ep.TP,
                              children: n
                                  ? (0, s.jsx)(V.$, {
                                        variant: "primary",
                                        text: N.intl.string(N.t.zoztQA),
                                        onClick: () => (0, es.A)(eq(l)),
                                    })
                                  : (0, s.jsx)(V.$, {
                                        variant: "primary",
                                        text: N.intl.string(N.t["jCqvk/"]),
                                        onClick: () => {
                                            null != t.sku &&
                                                null != a &&
                                                (eG.default.track(
                                                    w.HAw.PAYMENT_HISTORY_CONNECT_ACCOUNT_BUTTON_CLICKED,
                                                    { sku_id: t.sku.id, application_id: a.id, location_stack: r },
                                                ),
                                                (0, eE.n)({ sku: t.sku, application: a, analyticsLocations: r }));
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
            { locale: t, payment: n } = this.props,
            a = this.validateRefundRules();
        if (
            a.includes("PAYMENT_GATEWAY") ||
            a.includes("PAYMENT_STATUS") ||
            a.includes("ALREADY_REFUNDED") ||
            a.includes("SKU_STICKER_PACK") ||
            a.includes("SUBSCRIPTION_TYPE") ||
            a.includes("GUILD_PRODUCT")
        )
            return null;
        let l = 0 === a.length,
            r = eq(t),
            c = this.isPremium ? 5 : 14;
        return (
            (e = a.includes("SKU_TYPE")
                ? N.intl.format(N.t["5lvoVS"], { supportURL: r })
                : l
                  ? n.isPremiumSubscription || n.isPremiumGuildSubscription
                      ? N.intl.format(N.t.EPYteX, { dateLimit: c, supportURL: r })
                      : n.isGift
                        ? N.intl.format(N.t["16eP/L"], { dateLimit: c, supportURL: r })
                        : N.intl.format(N.t["1LDI4J"], { dateLimit: c, playtimeLimit: 2, supportURL: r })
                  : n.isCollectible
                    ? N.intl.string(N.t.s9TZM1)
                    : n.isGift
                      ? N.intl.formatToPlainString(N.t.owlOWc, { dateLimit: c })
                      : n.isPremiumSubscription || n.isPremiumGuildSubscription
                        ? N.intl.formatToPlainString(N.t.dk7vyL, { dateLimit: c })
                        : N.intl.formatToPlainString(N.t.s4Kk0C, { dateLimit: c, playtimeLimit: 2 })),
            (0, s.jsxs)(i.Fragment, {
                children: [
                    (0, s.jsx)(W.H, { className: ep.mW, children: N.intl.string(N.t["n/27pr"]) }),
                    (0, s.jsxs)("div", {
                        className: ep.iL,
                        children: [(0, s.jsx)("div", { children: e }), this.renderRefundActions(a)],
                    }),
                ],
            })
        );
    }
    renderRefundCriteria(e, t, n, i) {
        return (0, s.jsxs)(
            "div",
            {
                className: ep._Z,
                children: [
                    (0, s.jsx)(W.H, { className: ep.ud, children: e }),
                    (0, s.jsxs)("div", {
                        className: ep.z9,
                        children: [
                            (0, s.jsx)(t, { className: ep.xb, color: "currentColor" }),
                            null != n && (0, s.jsx)("div", { children: n }),
                        ],
                    }),
                ],
            },
            i,
        );
    }
    renderRefundActions(e) {
        let { locale: t, payment: n } = this.props;
        if (e.includes("SKU_TYPE")) return null;
        let i = e.includes("PURCHASE_DATE") ? Q.P : $.A;
        return (0, s.jsxs)("div", {
            className: ep.My,
            children: [
                (0, s.jsx)("div", {
                    className: ep.Kf,
                    children:
                        !n.isCollectible &&
                        this.renderRefundCriteria(
                            N.intl.string(N.t.H0RNz4),
                            i,
                            N.intl.formatToPlainString(N.t["7dtXa/"], { daysSincePurchase: this.daysSincePurchase }),
                        ),
                }),
                (0, s.jsx)(J.Anchor, { href: eq(t), children: N.intl.string(N.t.re5nOB) }),
            ],
        });
    }
    renderDescription() {
        let e,
            t,
            { compactMode: n, payment: a, application: l, guild: r, stickerPack: c, plan: u } = this.props,
            { expanded: o } = this.state,
            d = a.sku,
            m = a.subscription,
            p = null != a.paymentSource && w.AD1.has(a.paymentSource.type);
        if (null != m && 0 !== m.items.length) {
            let n = [],
                i = null;
            if (m.type === w.rzx.PREMIUM)
                m.items.forEach((e) => {
                    let { planId: t, quantity: s } = e;
                    (0, F.xq)(t)
                        ? (n.push(F.Ay.getDisplayName(t, !1, p)), (i = (0, F.mH)(R.hd[t].skuId)))
                        : (n.push(`${s > 1 ? `${s}x ` : ""}${F.Ay.getDisplayName(t, !1, p)}`),
                          null == i && (i = (0, F.mH)(R.hd[t].skuId)));
                });
            else if (m.type === w.rzx.GUILD) {
                if (null != u) {
                    let e = u.interval === R.WT.YEAR ? N.t.V6UFQM : N.t["6oq128"];
                    n.push(N.intl.format(e, { planName: u.name })), (i = u.skuId);
                }
            } else
                m.type === w.rzx.APPLICATION &&
                    (null != u && (i = u.skuId),
                    null != l
                        ? n.push(N.intl.formatToPlainString(N.t["0wL/VI"], { tier: d?.name }))
                        : n.push(N.intl.string(N.t["9czSYu"])));
            (t = 0 !== n.length ? n.join(", ") : a.description),
                (e = (0, s.jsx)(ef.A, {
                    className: ep.Sy,
                    guildClassName: ep.zA,
                    game: l,
                    guild: r,
                    size: ef.M.XSMALL,
                    skuId: i ?? d?.id,
                }));
        } else if (null != d)
            if (
                ((t = a.isGuildProductPurchase && a.isSoftDeletedProduct ? N.intl.string(N.t.O7uLmw) : d.name),
                null != c)
            ) {
                let t = (0, eS.Id)(c);
                e = (0, s.jsx)(eb.A, {
                    disableAnimation: !o,
                    isInteracting: o,
                    sticker: t,
                    className: ep.Sy,
                    size: 24,
                });
            } else
                e =
                    a.sku?.productLine === w.EZt.COLLECTIBLES
                        ? (0, s.jsx)(X.U, {
                              size: "custom",
                              width: 23,
                              height: 23,
                              color: "currentColor",
                              className: ep.sV,
                          })
                        : (0, s.jsx)(ef.A, {
                              className: ep.Sy,
                              guildClassName: ep.zA,
                              game: l,
                              guild: r,
                              size: ef.M.XSMALL,
                              skuId: d.id,
                          });
        else (e = (0, s.jsx)(ee.t, { size: "md", color: "currentColor", className: ep.Sy })), (t = a.description);
        let h = (0, s.jsx)(A.E, {
                variant: "text-sm/normal",
                className: ep.p6,
                children: (0, eH.i$)(q()(a.createdAt), "MM/DD/YYYY"),
            }),
            x = a.isGift
                ? (0, s.jsx)(Y.m, {
                      text: N.intl.string(N.t.QddTpm),
                      children: (0, s.jsx)(et.o, { size: "md", color: "currentColor", className: ep.ez }),
                  })
                : null;
        return n
            ? (0, s.jsxs)("div", { className: ep.h_, children: [e, (0, s.jsxs)("div", { children: [t, h] }), x] })
            : (0, s.jsxs)(i.Fragment, {
                  children: [
                      h,
                      (0, s.jsxs)("div", { className: ep.h_, children: [e, (0, s.jsx)("div", { children: t }), x] }),
                  ],
              });
    }
    renderGuildProductBenefits() {
        let { payment: e, application: t, locale: n } = this.props,
            i = t?.guildId;
        return e.isGuildProductPurchase
            ? (0, s.jsxs)(s.Fragment, {
                  children: [
                      (0, s.jsx)("div", { className: ep.ts }),
                      e.isSoftDeletedProduct
                          ? (0, s.jsx)(en.p, {
                                messageType: en.Y.WARNING,
                                action: (0, s.jsx)(V.$, {
                                    variant: "overlay-secondary",
                                    text: N.intl.string(N.t.zoztQA),
                                    onClick: () => (0, es.A)(eq(n)),
                                }),
                                children: N.intl.string(N.t["3AvulN"]),
                            })
                          : null != i &&
                            null != e.sku &&
                            (0, s.jsx)(eJ, { guildId: i, guildProductListingId: e.sku.id }),
                  ],
              })
            : null;
    }
    renderExpandedSection() {
        return (0, s.jsx)(Z.D, {
            onClick: (e) => e.stopPropagation(),
            children: (0, s.jsxs)("div", {
                className: ep.WI,
                children: [
                    (0, s.jsx)(W.H, { className: ep.mW, children: N.intl.string(N.t.nyzoFb) }),
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
            { expanded: i } = this.state;
        return (0, s.jsx)(u.tG, {
            id: e.id,
            children: (e) =>
                (0, s.jsxs)(Z.D, {
                    onClick: this.handleExpandInfo,
                    "data-expanded": i,
                    className: l()(ep.Ji, t, { [ep.oE]: n }),
                    focusProps: { offset: 4 },
                    ...e,
                    children: [
                        (0, s.jsxs)(g.A, {
                            className: ep.J7,
                            align: g.A.Align.CENTER,
                            "data-expanded": i,
                            children: [
                                this.renderDescription(),
                                (0, s.jsxs)("div", {
                                    className: ep.vj,
                                    children: [this.renderStatus(), this.renderPrice()],
                                }),
                                (0, s.jsx)(ek.A, {
                                    className: ep.fT,
                                    direction: i ? ek.A.Directions.UP : ek.A.Directions.DOWN,
                                }),
                            ],
                        }),
                        i ? this.renderExpandedSection() : null,
                    ],
                }),
        });
    }
}
function e0(e) {
    let { payment: t, locale: n, compactMode: a, className: l } = e,
        r = null != t.sku && eY.includes(t.sku.type),
        c = null != t.sku && r ? t.sku.applicationId : null,
        u = t.sku?.applicationId,
        d = t.subscription?.type === w.rzx.APPLICATION,
        {
            applicationStatistics: m,
            gameApplication: p,
            paymentSources: h,
        } = (0, o.cf)([eM.A, eU.A, er.A], () => ({
            applicationStatistics: null != c ? eU.A.getCurrentUserStatisticsForApplication(c) : null,
            gameApplication: er.A.getApplication(c ?? "") ?? t.sku?.application,
            paymentSources: eM.A.paymentSources,
        })),
        { hasAlreadyLinked: x } = (0, el.RD)((0, eI.bF)(t.sku) ? p : void 0),
        f = (0, o.bG)([er.A], () => (null != u ? er.A.getApplication(u) : null));
    i.useEffect(() => {
        d && null != u && (0, eP.TA)(u);
    }, [u, d]);
    let C = (0, o.bG)([ew.A], () => ew.A.getGuild(p?.guildId)),
        g = r ? p : void 0,
        y = t.subscription,
        j = (0, o.bG)([H.A], () => (null != y && y.type !== w.rzx.PREMIUM ? H.A.get(y.items[0].planId) : null)),
        A = (0, o.bG)([eR.default], () => {
            let e = t.isGift ? t.entitlements?.find((e) => e.user?.id != null && null != e.gifterId) : null;
            return null == e ? null : (eR.default.getUser(e.user?.id ?? null) ?? e?.user);
        }, [t]),
        { analyticsLocations: v } = (0, ea.Ay)(ei.A.BILLING_SETTINGS_BILLING);
    return (0, s.jsx)(eX, {
        applicationStatistics: m,
        application: d ? f : g,
        analyticsLocations: v,
        guild: C,
        stickerPack: null,
        paymentSources: h,
        locale: n,
        compactMode: a,
        className: l,
        payment: t,
        plan: j,
        claimedGiftUser: A,
        hasLinkedToApplication: x,
    });
}
var e2 = n(687788);
function e1(e) {
    let { payments: t, locale: n, compactMode: a, numPages: r } = e,
        c = i.useRef(null),
        [o, m] = i.useState(0),
        [p, h] = i.useState(null),
        x = t.slice(10 * o, (o + 1) * 10);
    i.useEffect(() => {
        c.current?.scrollTo({ to: 0 });
    }, [o]);
    let g = i.useCallback(
            (e) => {
                m(e);
                let n = t[t.length - 1].id;
                e >= r - 2 && p !== n && ((0, C.CK)(10, n), h(n));
            },
            [t, r, p],
        ),
        y = (0, f.A)("billing-history", c);
    return (0, s.jsx)(u.hD, {
        navigator: y,
        children: (0, s.jsx)(u.PR, {
            children: (e) => {
                let { ref: t, ...i } = e;
                return (0, s.jsx)(I, {
                    className: e2.GD,
                    currentPageIndex: o,
                    onChangePage: g,
                    numPages: r,
                    showPageCount: !1,
                    ref: t,
                    ...i,
                    children: (0, s.jsx)(d.Ch, {
                        className: e2.Bd,
                        ref: c,
                        overflow: "auto",
                        children: x.map((e, t) =>
                            (0, s.jsx)(e0, { className: l()(e2.Nj, e2.Bd), payment: e, locale: n, compactMode: a }, t),
                        ),
                    }),
                });
            },
        }),
    });
}
class e3 extends i.PureComponent {
    static defaultProps = { compactMode: !1 };
    scrollerRef = i.createRef();
    get numPages() {
        return Math.max(Math.ceil(this.props.payments.length / 10), 1);
    }
    componentDidMount() {
        p.h.wait(() => {
            (0, h.X)(), (0, C.CK)(30);
        });
    }
    renderPremiumExternalSubscription(e) {
        return (
            c()(null != e.paymentGateway, "Expected payment gateway when rendering for external subscription"),
            (0, s.jsxs)(m.Z, {
                className: e2.K1,
                children: [
                    (0, s.jsx)("div", {
                        className: e2.BF,
                        children: N.intl.format(N.t["6mIX6s"], { paymentGatewayName: em.qm[e.paymentGateway] }),
                    }),
                    (0, s.jsx)("div", {
                        className: e2.Q2,
                        children: N.intl.format(N.t.eG0uZB, {
                            paymentGatewayName: em.qm[e.paymentGateway],
                            billingHistoryLink: (0, F.tW)(e.paymentGateway, "BILLING_HISTORY"),
                        }),
                    }),
                ],
            })
        );
    }
    render() {
        let { compactMode: e, payments: t, subscription: n, locale: i } = this.props,
            a = null != n && n.isPurchasedExternally;
        return 0 !== t.length || a
            ? (0, s.jsxs)("div", {
                  className: e2.GD,
                  children: [
                      null != n && a ? this.renderPremiumExternalSubscription(n) : null,
                      t.length > 0
                          ? (0, s.jsxs)("div", {
                                className: l()(e2.PQ, e2.GD),
                                children: [
                                    e
                                        ? null
                                        : (0, s.jsx)("div", {
                                              className: l()(e2.Nj, e2.Bd),
                                              children: (0, s.jsxs)(g.A, {
                                                  className: e2.Yi,
                                                  children: [
                                                      (0, s.jsx)("div", {
                                                          className: ep.p6,
                                                          children: N.intl.string(N.t["5t11BV"]),
                                                      }),
                                                      (0, s.jsx)("div", {
                                                          className: e2.Ir,
                                                          children: N.intl.string(N.t.yAAPb2),
                                                      }),
                                                      (0, s.jsx)("div", {
                                                          className: ep.vj,
                                                          children: N.intl.string(N.t["6MqHXV"]),
                                                      }),
                                                  ],
                                              }),
                                          }),
                                    (0, s.jsx)(e1, { compactMode: e, locale: i, payments: t, numPages: this.numPages }),
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
        n = e.subscription?.items[0].planId;
    return !(null == t || null == n || Object.values(R.pe).includes(t) || (0, F.ys)(n));
}
function e4(e) {
    let t = (0, o.bG)([O], () => O.getPayments()),
        n = (0, o.bG)([B.A], () => B.A.getPremiumTypeSubscription()),
        a = i.useMemo(
            () =>
                new Set(
                    t.filter(e6).map((e) => {
                        let { subscription: t } = e;
                        return t?.items[0].planId;
                    }),
                ),
            [t],
        ),
        l = i.useMemo(
            () =>
                new Set(
                    t.filter(e6).map((e) => {
                        let { skuId: t } = e;
                        return t;
                    }),
                ),
            [t],
        ),
        r = (0, o.yK)([H.A], () => H.A.getPlanIdsForSkus(Array.from(l))),
        c = i.useCallback(() => r.length === a.size, [r, a]),
        u = i.useMemo(() => t.filter((e) => e.currency !== w.Yri.DISCORD_ORB), [t]);
    return (
        i.useEffect(() => {
            c() ||
                p.h.wait(() => {
                    l.forEach((e) => (0, x.ur)(e, void 0, void 0, !0, void 0));
                });
        }, [c, l]),
        (0, s.jsx)(e3, { ...e, payments: u, subscription: n })
    );
}
