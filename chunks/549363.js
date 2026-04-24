n.d(t, { A: () => e4 });
var i = n(627968),
    s = n(64700),
    a = n(503698),
    r = n.n(a),
    l = n(284009),
    c = n.n(l),
    o = n(837381),
    d = n(17928),
    u = n(689175),
    m = n(359778),
    p = n(228366),
    h = n(661439),
    _ = n(73825),
    x = n(928039),
    f = n(323082),
    g = n(235986),
    C = n(408278),
    y = n(921853),
    A = n(834730),
    v = n(320448),
    b = n(985018),
    j = n(632787);
let I = s.forwardRef(function (e, t) {
    let { currentPageIndex: n, numPages: s, onChangePage: a, children: r, showPageCount: l = !0, ...c } = e,
        o = n >= s - 1,
        d = l
            ? b.intl.format(b.t.MtpIwg, { currentPage: n + 1, numPages: s })
            : b.intl.format(b.t.bKI77c, { currentPage: n + 1 });
    return (0, i.jsxs)("div", {
        ref: t,
        ...c,
        children: [
            r,
            (0, i.jsx)("div", {
                className: j.v,
                children: (0, i.jsxs)("div", {
                    className: j.U,
                    children: [
                        (0, i.jsx)(C.K, {
                            variant: "icon-only",
                            icon: y.n,
                            disabled: n <= 0,
                            onClick: () => a(n - 1),
                            "aria-label": b.intl.string(b.t.vgfxaA),
                        }),
                        (0, i.jsx)(A.E, { variant: "text-sm/medium", children: d }),
                        (0, i.jsx)(C.K, {
                            variant: "icon-only",
                            icon: v._,
                            disabled: o,
                            onClick: () => a(n + 1),
                            "aria-label": b.intl.string(b.t.XiOHRX),
                        }),
                    ],
                }),
            }),
        ],
    });
});
n(321073), n(938796);
var S = n(122817),
    P = n(665260),
    N = n(315069),
    E = n(32731),
    L = n(557009),
    T = n(202613),
    D = n(243217),
    w = n(652215),
    R = n(788868);
class M extends N.A {
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
            n = null != e.sku ? E.A.createFromServer(e.sku) : null,
            i = null != e.subscription ? D.A.createFromServer(e.subscription) : null;
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
            subscription: i,
            skuId: e.sku_id,
            skuPrice: e.sku_price,
            sku: n,
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
        return P.Lt(this.flags, 1);
    }
    get isPremiumGift() {
        return this.isGift && Object.values(R.pe).includes(this.skuId);
    }
    get isGuildProductPurchase() {
        return (
            null != this.sku &&
            (this.sku.productLine === w.EZt.GUILD_PRODUCT || P.Lt(this.sku.flags, S.d.GUILD_PRODUCT))
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
        i = U.findIndex((e) => e.id === t.id);
    -1 === i ? (U.push(n), U.sort((e, t) => t.createdAt.getTime() - e.createdAt.getTime())) : (U[i] = n), (U = [...U]);
}
class G extends d.Ay.Store {
    static displayName = "PaymentStore";
    getPayment(e) {
        return U.find((t) => t.id === e);
    }
    getPayments() {
        return U;
    }
}
let B = new G(p.h, {
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
var O = n(97352),
    H = n(166403),
    F = n(927578),
    z = n(989349),
    q = n.n(z),
    Y = n(990078),
    V = n(821609),
    W = n(939249),
    K = n(289873),
    Z = n(707554),
    Q = n(789645),
    $ = n(933832),
    J = n(349288),
    X = n(34188),
    ee = n(403581),
    et = n(597770),
    en = n(512950),
    ei = n(975807),
    es = n(793574),
    ea = n(688810),
    er = n(46225),
    el = n(587895),
    ec = n(636537),
    eo = n(683071),
    ed = n(192308);
let eu = function (e, t) {
    (0, ed.openModalLazy)(async () => {
        let { default: s } = await n.e("34138").then(n.bind(n, 206049));
        return (n) => (0, i.jsx)(s, { payment: e, paymentSource: t, ...n });
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
function e_(e) {
    let { payment: t } = e,
        [n, a] = s.useState(null),
        [r, l] = s.useState(null),
        c = async (e) => {
            try {
                let n = await eh(t.id);
                a(n);
                let i = e ? n.refundInvoiceLinks[0] : n.invoiceLink;
                window.open(i, "_blank"), l(null);
            } catch (e) {
                l(e.body?.message);
            }
        },
        o = null != t.paymentSource && t.status === em.__.COMPLETED,
        d = n?.invoiceLink,
        u = n?.refundInvoiceLinks;
    return t.hasInvoiceURL && null == n
        ? (0, i.jsxs)("div", {
              className: ep.It,
              children: [
                  (0, i.jsx)(J.Anchor, { onClick: () => c(!1), children: b.intl.formatToPlainString(b.t.R0xzCN, {}) }),
                  t.hasRefundInvoiceURLs
                      ? (0, i.jsx)(J.Anchor, {
                            className: ep.oe,
                            onClick: () => c(!0),
                            children: b.intl.formatToPlainString(b.t["3x6NGw"], {}),
                        })
                      : null,
                  null != r && "" !== r && (0, i.jsx)(eo.w, { type: "critical", children: r }),
              ],
          })
        : t.hasInvoiceURL && null != n
          ? (0, i.jsxs)("div", {
                className: ep.It,
                children: [
                    (0, i.jsx)(J.Anchor, { href: d, children: b.intl.formatToPlainString(b.t.R0xzCN, {}) }),
                    null != u
                        ? u.map((e, t) =>
                              (0, i.jsx)(
                                  J.Anchor,
                                  {
                                      className: ep.oe,
                                      href: e,
                                      children: b.intl.formatToPlainString(b.t["3x6NGw"], {}),
                                  },
                                  t,
                              ),
                          )
                        : null,
                    null != r && "" !== r && (0, i.jsx)(eo.w, { type: "critical", children: r }),
                ],
            })
          : o
            ? (0, i.jsx)("div", {
                  className: ep.It,
                  children: (0, i.jsx)(J.Anchor, {
                      onClick: () => {
                          var e;
                          (e = t.paymentSource), eu(t, e);
                      },
                      children: b.intl.formatToPlainString(b.t.onRIxS, {}),
                  }),
              })
            : null;
}
var ex = n(137177),
    ef = n(250627),
    eg = n(871109),
    eC = n(571654),
    ey = n(411342),
    eA = n(179499),
    ev = n(22007),
    eb = n(95035),
    ej = n(337095),
    eI = n(871123),
    eS = n(510022),
    eP = n(68935),
    eN = n(148355),
    eE = n(780964),
    eL = n(779733),
    eT = n(858897),
    eD = n(317525),
    ew = n(71393),
    eR = n(287809),
    eM = n(295405),
    eU = n(90165),
    ek = n(147925),
    eG = n(954571),
    eB = n(957565),
    eO = n(58703),
    eH = n(580630),
    eF = n(427262),
    ez = n(219887);
let eq = (e) => `https://${w.XlF}/hc/${e.toLowerCase()}/requests/new?ticket_form_id=360000118612`,
    eY = [w.Puh.DURABLE_PRIMARY, w.Puh.DURABLE, w.Puh.CONSUMABLE],
    eV = [w.__0.FAILED, w.__0.REVERSED, w.__0.CANCELED],
    eW = [em.kM.APPLE],
    eK = (e) => {
        let { description: t, cost: n } = e;
        return (0, i.jsx)("li", {
            className: ep.mg,
            children: (0, i.jsxs)(g.A, {
                justify: g.A.Justify.BETWEEN,
                children: [(0, i.jsx)("div", { children: t }), (0, i.jsx)("div", { children: n })],
            }),
        });
    };
function eZ(e) {
    let { value: t, copyText: n, copyFeedbackText: a } = e,
        [r, l] = s.useState(!1),
        [c, o] = s.useState(!1);
    return (0, i.jsx)(Y.m, {
        forceOpen: c,
        text: r ? a : n,
        children: (0, i.jsx)(W.D, {
            onMouseEnter: () => {
                r && l(!1);
            },
            onMouseLeave: () => {
                o(!1);
            },
            onClick: () => {
                (0, eB.C)(t, () => {
                    o(!0), l(!0);
                });
            },
            children: (0, i.jsx)("div", { className: ep.l9, children: t }),
        }),
    });
}
let eQ = (e) => {
    let { description: t, detail: n } = e;
    return (0, i.jsx)("li", {
        className: ep.Iu,
        children: (0, i.jsxs)(g.A, {
            justify: g.A.Justify.BETWEEN,
            children: [(0, i.jsx)("div", { children: t }), (0, i.jsx)("div", { children: n })],
        }),
    });
};
function e$(e) {
    let { guildId: t, guildProductListingId: n } = e,
        a = (0, ef.Qi)(t, n, { requireCurrentGuild: !1 }),
        r = (0, eC.z)(a),
        l = (0, d.bG)([ew.A], () => ew.A.getGuild(t)),
        c = a?.role_id != null && a?.attachments_count === 0 ? b.intl.string(b.t.H11qcT) : r,
        o = s.useCallback(async () => {
            l?.features.has(w.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE)
                ? await (0, ev.A)(w.BVt.GUILD_PRODUCT(t, n))
                : await (0, ev.A)(w.BVt.CHANNEL(t)),
                (0, eL.default)();
        }, [l, t, n]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != c && (0, i.jsx)(eQ, { description: b.intl.string(b.t.lXPbJb), detail: c }),
            null != l &&
                (0, i.jsx)(eQ, {
                    description: b.intl.string(b.t.Wpn8z8),
                    detail: (0, i.jsx)(eb.A, { onClick: o, children: l.name }),
                }),
        ],
    });
}
function eJ(e) {
    let { guildId: t, guildProductListingId: n } = e,
        s = (0, ef.Qi)(t, n, { requireCurrentGuild: !1 }),
        a = (0, d.bG)([eg.A], () => eg.A.getGuildProductFetchState(n) === eg.e.FETCHING),
        r = s?.role_id,
        l = (0, d.bG)([eD.A], () => (null != r ? eD.A.getRole(t, r) : void 0), [t, r]),
        c = (0, eA.A)({ guildId: t, productId: n }),
        o = (s?.attachments?.length ?? 0) > 0,
        u = null != l;
    return a
        ? (0, i.jsx)("div", { className: ep.hT, children: (0, i.jsx)(K.y, {}) })
        : null != s && (o || u)
          ? (0, i.jsxs)("div", {
                className: ep.hT,
                children: [
                    o &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(A.E, {
                                    variant: "text-xs/semibold",
                                    color: "text-default",
                                    className: ep.yE,
                                    children: b.intl.string(b.t.hxawoy),
                                }),
                                (0, i.jsx)(V.$, { ...c }),
                            ],
                        }),
                    u &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                o && (0, i.jsx)("div", { className: ep.yF }),
                                (0, i.jsx)(A.E, {
                                    variant: "text-xs/semibold",
                                    color: "text-default",
                                    className: ep.yE,
                                    children: b.intl.string(b.t.gWBNet),
                                }),
                                (0, i.jsx)(ey.A, { role: l }),
                            ],
                        }),
                ],
            })
          : null;
}
class eX extends s.PureComponent {
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
                return null == e.paymentGateway || !eW.includes(e.paymentGateway);
            },
        },
        {
            rule: "SKU_STICKER_PACK",
            canRefund: () => {
                let { payment: e } = this.props;
                return null == e.sku || !(0, P.Lt)(e.sku.flags, w.d68.STICKER);
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
                return null == e.sku || !(0, P.Lt)(e.sku.flags, S.d.GUILD_PRODUCT);
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
                return (0, i.jsx)("span", { className: ep.Xg, children: b.intl.string(b.t.y7F0Re) });
            case w.__0.FAILED:
                return (0, i.jsx)("span", { className: ep.ob, children: b.intl.string(b.t.Yo4ru6) });
            case w.__0.REFUNDED:
                if (e.amountRefunded !== e.amount)
                    return (0, i.jsx)("span", { className: ep.gD, children: b.intl.string(b.t.lYbZzz) });
                return (0, i.jsx)("span", { className: ep.gD, children: b.intl.string(b.t.ZBb6NK) });
            case w.__0.REVERSED:
                return (0, i.jsx)("span", { className: ep.ob, children: b.intl.string(b.t.YQv9Li) });
            case w.__0.CANCELED:
                return (0, i.jsx)("span", { className: ep.ob, children: b.intl.string(b.t.ttkBhy) });
            default:
                return null;
        }
    }
    renderTenantStatusOverride() {
        let { payment: e, hasLinkedToApplication: t } = this.props;
        return (0, eI.bF)(e.sku) && e.status === w.__0.COMPLETED
            ? null != e.entitlements && e.entitlements.some((e) => e.isFulfilled())
                ? (0, i.jsx)("span", { className: ep.gD, children: b.intl.string(b.t.Osji1u) })
                : e.isGift
                  ? null != e.entitlements && e.entitlements.some((e) => null != e.gifterId)
                      ? (0, i.jsx)("span", { className: ep.gD, children: b.intl.string(b.t.lIsIFo) })
                      : (0, i.jsx)("span", { className: ep.Tf, children: b.intl.string(b.t["+tqSi3"]) })
                  : t
                    ? (0, i.jsx)("span", { className: ep.Tf, children: b.intl.string(b.t.y7F0Re) })
                    : (0, i.jsx)("span", { className: ep.Tf, children: b.intl.string(b.t.HHC5Z4) })
            : null;
    }
    renderStatus() {
        return this.renderTenantStatusOverride() ?? this.renderDefaultStatus();
    }
    renderPrice() {
        let { payment: e } = this.props,
            t = e.amount - e.amountRefunded;
        return (0, i.jsx)("span", { className: ep.q9, children: (0, eH.$g)(t, e.currency) });
    }
    renderPaymentIdField() {
        let { payment: e } = this.props;
        return (0, i.jsx)("li", {
            className: ep.mg,
            children: (0, i.jsxs)("div", {
                className: ep.bx,
                children: [
                    (0, i.jsx)("div", { children: b.intl.string(b.t["UQim+r"]) }),
                    (0, i.jsx)(eZ, {
                        value: e.id,
                        copyText: b.intl.string(b.t["Mdk9+A"]),
                        copyFeedbackText: b.intl.string(b.t["7eIrA2"]),
                    }),
                ],
            }),
        });
    }
    renderPaymentBreakdown() {
        let { payment: e, locale: t, application: n } = this.props,
            { taxInclusive: a, tax: l, amount: c, amountRefunded: o, currency: d } = e,
            u = n?.guildId;
        return (0, i.jsxs)("div", {
            className: r()(ep.iL, ep.W),
            children: [
                null != e.paymentSource
                    ? (0, i.jsx)(ez.A, {
                          paymentSource: e.paymentSource,
                          locale: t,
                          descriptionClassName: ep.iL,
                          showLabels: !0,
                          showPaymentSourceIcon: !0,
                      })
                    : e.paymentGateway === em.kM.APPLE_PARTNER
                      ? (0, i.jsx)(ez.A, {
                            paymentSource: new T.Pw({}),
                            locale: t,
                            descriptionClassName: ep.iL,
                            showLabels: !0,
                            showPaymentSourceIcon: !0,
                        })
                      : null,
                (0, i.jsxs)("ul", {
                    children: [
                        this.renderPaymentIdField(),
                        !a && l > 0
                            ? (0, i.jsxs)(s.Fragment, {
                                  children: [
                                      (0, i.jsx)(eK, { description: e.description, cost: (0, eH.$g)(c - l, d) }),
                                      (0, i.jsx)(eK, {
                                          description: b.intl.string(b.t.QgWXht),
                                          cost: (0, eH.$g)(l, d),
                                      }),
                                  ],
                              })
                            : null,
                        (0, i.jsx)(eK, { description: b.intl.string(b.t.txajQG), cost: (0, eH.$g)(c, d) }),
                        e.isGuildProductPurchase &&
                            null != u &&
                            null != e.sku &&
                            (0, i.jsx)(e$, { guildId: u, guildProductListingId: e.sku.id }),
                        o > 0 &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(eK, {
                                        description: b.intl.string(b.t["A+I0AP"]),
                                        cost: (0, eH.$g)(o, d),
                                    }),
                                    (0, i.jsx)(eK, {
                                        description: b.intl.string(b.t.xER6Wi),
                                        cost: (0, eH.$g)(c - o, d),
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
        return (0, i.jsx)(e_, { payment: e });
    }
    renderAdditionalGameItemDetails() {
        let {
                claimedGiftUser: e,
                payment: t,
                hasLinkedToApplication: n,
                application: a,
                locale: r,
                analyticsLocations: l,
            } = this.props,
            c = t.entitlements?.some((e) => e.isFulfilled());
        return t.status === w.__0.REFUNDED
            ? (0, i.jsxs)(s.Fragment, {
                  children: [
                      (0, i.jsx)(Z.H, { className: ep.mW, children: b.intl.string(b.t["gIGB/A"]) }),
                      (0, i.jsx)("div", {
                          className: ep.iL,
                          children:
                              null != e
                                  ? b.intl.format(b.t.Q1K9eg, { username: eF.Ay.getName(e) })
                                  : b.intl.format(b.t.IBtGwC, { applicationName: a?.name }),
                      }),
                  ],
              })
            : t.isGift
              ? (0, i.jsxs)(s.Fragment, {
                    children: [
                        (0, i.jsx)(Z.H, { className: ep.mW, children: b.intl.string(b.t["gIGB/A"]) }),
                        (0, i.jsx)("div", {
                            className: ep.iL,
                            children:
                                null != e
                                    ? b.intl.format(b.t.vfUW65, { username: eF.Ay.getName(e) })
                                    : b.intl.string(b.t["18wIqp"]),
                        }),
                        null == e &&
                            (0, i.jsx)("div", {
                                className: ep.TP,
                                children: (0, i.jsx)(V.$, {
                                    variant: "primary",
                                    text: b.intl.string(b.t["jcSP+g"]),
                                    onClick: () => (0, eT.openUserSettings)(eE.X.GIFT_PANEL),
                                }),
                            }),
                    ],
                })
              : c
                ? null
                : (0, i.jsxs)(s.Fragment, {
                      children: [
                          (0, i.jsx)(Z.H, { className: ep.mW, children: b.intl.string(b.t["gIGB/A"]) }),
                          (0, i.jsx)("div", {
                              className: ep.iL,
                              children: n
                                  ? b.intl.format(b.t.DQQCAw, { applicationName: a?.name, skuName: t.sku?.name })
                                  : b.intl.format(b.t.ED2BqF, { applicationName: a?.name, skuName: t.sku?.name }),
                          }),
                          (0, i.jsx)("div", {
                              className: ep.TP,
                              children: n
                                  ? (0, i.jsx)(V.$, {
                                        variant: "primary",
                                        text: b.intl.string(b.t.zoztQA),
                                        onClick: () => (0, ei.A)(eq(r)),
                                    })
                                  : (0, i.jsx)(V.$, {
                                        variant: "primary",
                                        text: b.intl.string(b.t["jCqvk/"]),
                                        onClick: () => {
                                            null != t.sku &&
                                                null != a &&
                                                (eG.default.track(
                                                    w.HAw.PAYMENT_HISTORY_CONNECT_ACCOUNT_BUTTON_CLICKED,
                                                    { sku_id: t.sku.id, application_id: a.id, location_stack: l },
                                                ),
                                                (0, eS.n)({ sku: t.sku, application: a, analyticsLocations: l }));
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
        let r = 0 === a.length,
            l = eq(t),
            c = this.isPremium ? 5 : 14;
        return (
            (e = a.includes("SKU_TYPE")
                ? b.intl.format(b.t["5lvoVS"], { supportURL: l })
                : r
                  ? n.isPremiumSubscription || n.isPremiumGuildSubscription
                      ? b.intl.format(b.t.EPYteX, { dateLimit: c, supportURL: l })
                      : n.isGift
                        ? b.intl.format(b.t["16eP/L"], { dateLimit: c, supportURL: l })
                        : b.intl.format(b.t["1LDI4J"], { dateLimit: c, playtimeLimit: 2, supportURL: l })
                  : n.isCollectible
                    ? b.intl.string(b.t.s9TZM1)
                    : n.isGift
                      ? b.intl.formatToPlainString(b.t.owlOWc, { dateLimit: c })
                      : n.isPremiumSubscription || n.isPremiumGuildSubscription
                        ? b.intl.formatToPlainString(b.t.dk7vyL, { dateLimit: c })
                        : b.intl.formatToPlainString(b.t.s4Kk0C, { dateLimit: c, playtimeLimit: 2 })),
            (0, i.jsxs)(s.Fragment, {
                children: [
                    (0, i.jsx)(Z.H, { className: ep.mW, children: b.intl.string(b.t["n/27pr"]) }),
                    (0, i.jsxs)("div", {
                        className: ep.iL,
                        children: [(0, i.jsx)("div", { children: e }), this.renderRefundActions(a)],
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
                    (0, i.jsx)(Z.H, { className: ep.ud, children: e }),
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
        let { locale: t, payment: n } = this.props;
        if (e.includes("SKU_TYPE")) return null;
        let s = e.includes("PURCHASE_DATE") ? Q.P : $.A;
        return (0, i.jsxs)("div", {
            className: ep.My,
            children: [
                (0, i.jsx)("div", {
                    className: ep.Kf,
                    children:
                        !n.isCollectible &&
                        this.renderRefundCriteria(
                            b.intl.string(b.t.H0RNz4),
                            s,
                            b.intl.formatToPlainString(b.t["7dtXa/"], { daysSincePurchase: this.daysSincePurchase }),
                        ),
                }),
                (0, i.jsx)(J.Anchor, { href: eq(t), children: b.intl.string(b.t.re5nOB) }),
            ],
        });
    }
    renderDescription() {
        let e,
            t,
            { compactMode: n, payment: a, application: r, guild: l, stickerPack: c, plan: o } = this.props,
            { expanded: d } = this.state,
            u = a.sku,
            m = a.subscription,
            p = null != a.paymentSource && w.AD1.has(a.paymentSource.type);
        if (null != m && 0 !== m.items.length) {
            let n = [],
                s = null;
            if (m.type === w.rzx.PREMIUM)
                m.items.forEach((e) => {
                    let { planId: t, quantity: i } = e;
                    (0, F.xq)(t)
                        ? (n.push(F.Ay.getDisplayName(t, !1, p)), (s = (0, F.mH)(R.hd[t].skuId)))
                        : (n.push(`${i > 1 ? `${i}x ` : ""}${F.Ay.getDisplayName(t, !1, p)}`),
                          null == s && (s = (0, F.mH)(R.hd[t].skuId)));
                });
            else if (m.type === w.rzx.GUILD) {
                if (null != o) {
                    let e = o.interval === R.WT.YEAR ? b.t.V6UFQM : b.t["6oq128"];
                    n.push(b.intl.format(e, { planName: o.name })), (s = o.skuId);
                }
            } else
                m.type === w.rzx.APPLICATION &&
                    (null != o && (s = o.skuId),
                    null != r
                        ? n.push(b.intl.formatToPlainString(b.t["0wL/VI"], { tier: u?.name }))
                        : n.push(b.intl.string(b.t["9czSYu"])));
            (t = 0 !== n.length ? n.join(", ") : a.description),
                (e = (0, i.jsx)(ex.A, {
                    className: ep.Sy,
                    guildClassName: ep.zA,
                    game: r,
                    guild: l,
                    size: ex.M.XSMALL,
                    skuId: s ?? u?.id,
                }));
        } else if (null != u)
            if (
                ((t = a.isGuildProductPurchase && a.isSoftDeletedProduct ? b.intl.string(b.t.O7uLmw) : u.name),
                null != c)
            ) {
                let t = (0, eP.Id)(c);
                e = (0, i.jsx)(eN.A, {
                    disableAnimation: !d,
                    isInteracting: d,
                    sticker: t,
                    className: ep.Sy,
                    size: 24,
                });
            } else
                e =
                    a.sku?.productLine === w.EZt.COLLECTIBLES
                        ? (0, i.jsx)(X.U, {
                              size: "custom",
                              width: 23,
                              height: 23,
                              color: "currentColor",
                              className: ep.sV,
                          })
                        : (0, i.jsx)(ex.A, {
                              className: ep.Sy,
                              guildClassName: ep.zA,
                              game: r,
                              guild: l,
                              size: ex.M.XSMALL,
                              skuId: u.id,
                          });
        else (e = (0, i.jsx)(ee.t, { size: "md", color: "currentColor", className: ep.Sy })), (t = a.description);
        let h = (0, i.jsx)(A.E, {
                variant: "text-sm/normal",
                className: ep.p6,
                children: (0, eO.i$)(q()(a.createdAt), "MM/DD/YYYY"),
            }),
            _ = a.isGift
                ? (0, i.jsx)(Y.m, {
                      text: b.intl.string(b.t.QddTpm),
                      children: (0, i.jsx)(et.o, { size: "md", color: "currentColor", className: ep.ez }),
                  })
                : null;
        return n
            ? (0, i.jsxs)("div", { className: ep.h_, children: [e, (0, i.jsxs)("div", { children: [t, h] }), _] })
            : (0, i.jsxs)(s.Fragment, {
                  children: [
                      h,
                      (0, i.jsxs)("div", { className: ep.h_, children: [e, (0, i.jsx)("div", { children: t }), _] }),
                  ],
              });
    }
    renderGuildProductBenefits() {
        let { payment: e, application: t, locale: n } = this.props,
            s = t?.guildId;
        return e.isGuildProductPurchase
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)("div", { className: ep.ts }),
                      e.isSoftDeletedProduct
                          ? (0, i.jsx)(en.p, {
                                messageType: en.Y.WARNING,
                                action: (0, i.jsx)(V.$, {
                                    variant: "overlay-secondary",
                                    text: b.intl.string(b.t.zoztQA),
                                    onClick: () => (0, ei.A)(eq(n)),
                                }),
                                children: b.intl.string(b.t["3AvulN"]),
                            })
                          : null != s &&
                            null != e.sku &&
                            (0, i.jsx)(eJ, { guildId: s, guildProductListingId: e.sku.id }),
                  ],
              })
            : null;
    }
    renderExpandedSection() {
        return (0, i.jsx)(W.D, {
            onClick: (e) => e.stopPropagation(),
            children: (0, i.jsxs)("div", {
                className: ep.WI,
                children: [
                    (0, i.jsx)(Z.H, { className: ep.mW, children: b.intl.string(b.t.nyzoFb) }),
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
            { expanded: s } = this.state;
        return (0, i.jsx)(o.tG, {
            id: e.id,
            children: (e) =>
                (0, i.jsxs)(W.D, {
                    onClick: this.handleExpandInfo,
                    "data-expanded": s,
                    className: r()(ep.Ji, t, { [ep.oE]: n }),
                    focusProps: { offset: 4 },
                    ...e,
                    children: [
                        (0, i.jsxs)(g.A, {
                            className: ep.J7,
                            align: g.A.Align.CENTER,
                            "data-expanded": s,
                            children: [
                                this.renderDescription(),
                                (0, i.jsxs)("div", {
                                    className: ep.vj,
                                    children: [this.renderStatus(), this.renderPrice()],
                                }),
                                (0, i.jsx)(ek.A, {
                                    className: ep.fT,
                                    direction: s ? ek.A.Directions.UP : ek.A.Directions.DOWN,
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
    let { payment: t, locale: n, compactMode: a, className: r } = e,
        l = null != t.sku && eY.includes(t.sku.type),
        c = null != t.sku && l ? t.sku.applicationId : null,
        o = t.sku?.applicationId,
        u = t.subscription?.type === w.rzx.APPLICATION,
        {
            applicationStatistics: m,
            gameApplication: p,
            paymentSources: h,
        } = (0, d.cf)([eM.A, eU.A, el.A], () => ({
            applicationStatistics: null != c ? eU.A.getCurrentUserStatisticsForApplication(c) : null,
            gameApplication: el.A.getApplication(c ?? "") ?? t.sku?.application,
            paymentSources: eM.A.paymentSources,
        })),
        { hasAlreadyLinked: _ } = (0, er.RD)((0, eI.bF)(t.sku) ? p : void 0),
        x = (0, d.bG)([el.A], () => (null != o ? el.A.getApplication(o) : null));
    s.useEffect(() => {
        u && null != o && (0, ej.TA)(o);
    }, [o, u]);
    let f = (0, d.bG)([ew.A], () => ew.A.getGuild(p?.guildId)),
        g = l ? p : void 0,
        C = t.subscription,
        y = (0, d.bG)([O.A], () => (null != C && C.type !== w.rzx.PREMIUM ? O.A.get(C.items[0].planId) : null)),
        A = (0, d.bG)([eR.default], () => {
            let e = t.isGift ? t.entitlements?.find((e) => e.user?.id != null && null != e.gifterId) : null;
            return null == e ? null : (eR.default.getUser(e.user?.id ?? null) ?? e?.user);
        }, [t]),
        { analyticsLocations: v } = (0, ea.Ay)(es.A.BILLING_SETTINGS_BILLING);
    return (0, i.jsx)(eX, {
        applicationStatistics: m,
        application: u ? x : g,
        analyticsLocations: v,
        guild: f,
        stickerPack: null,
        paymentSources: h,
        locale: n,
        compactMode: a,
        className: r,
        payment: t,
        plan: y,
        claimedGiftUser: A,
        hasLinkedToApplication: _,
    });
}
var e3 = n(687788);
function e2(e) {
    let { payments: t, locale: n, compactMode: a, numPages: l } = e,
        c = s.useRef(null),
        [d, m] = s.useState(0),
        [p, h] = s.useState(null),
        _ = t.slice(10 * d, (d + 1) * 10);
    s.useEffect(() => {
        c.current?.scrollTo({ to: 0 });
    }, [d]);
    let g = s.useCallback(
            (e) => {
                m(e);
                let n = t[t.length - 1].id;
                e >= l - 2 && p !== n && ((0, f.CK)(10, n), h(n));
            },
            [t, l, p],
        ),
        C = (0, x.A)("billing-history", c);
    return (0, i.jsx)(o.hD, {
        navigator: C,
        children: (0, i.jsx)(o.PR, {
            children: (e) => {
                let { ref: t, ...s } = e;
                return (0, i.jsx)(I, {
                    className: e3.GD,
                    currentPageIndex: d,
                    onChangePage: g,
                    numPages: l,
                    showPageCount: !1,
                    ref: t,
                    ...s,
                    children: (0, i.jsx)(u.Ch, {
                        className: e3.Bd,
                        ref: c,
                        overflow: "auto",
                        children: _.map((e, t) =>
                            (0, i.jsx)(e0, { className: r()(e3.Nj, e3.Bd), payment: e, locale: n, compactMode: a }, t),
                        ),
                    }),
                });
            },
        }),
    });
}
class e1 extends s.PureComponent {
    static defaultProps = { compactMode: !1 };
    scrollerRef = s.createRef();
    get numPages() {
        return Math.max(Math.ceil(this.props.payments.length / 10), 1);
    }
    componentDidMount() {
        p.h.wait(() => {
            (0, h.X)(), (0, f.CK)(30);
        });
    }
    renderPremiumExternalSubscription(e) {
        return (
            c()(null != e.paymentGateway, "Expected payment gateway when rendering for external subscription"),
            (0, i.jsxs)(m.Z, {
                className: e3.K1,
                children: [
                    (0, i.jsx)("div", {
                        className: e3.BF,
                        children: b.intl.format(b.t["6mIX6s"], { paymentGatewayName: em.qm[e.paymentGateway] }),
                    }),
                    (0, i.jsx)("div", {
                        className: e3.Q2,
                        children: b.intl.format(b.t.eG0uZB, {
                            paymentGatewayName: em.qm[e.paymentGateway],
                            billingHistoryLink: (0, F.tW)(e.paymentGateway, "BILLING_HISTORY"),
                        }),
                    }),
                ],
            })
        );
    }
    render() {
        let { compactMode: e, payments: t, subscription: n, locale: s } = this.props,
            a = null != n && n.isPurchasedExternally;
        return 0 !== t.length || a
            ? (0, i.jsxs)("div", {
                  className: e3.GD,
                  children: [
                      null != n && a ? this.renderPremiumExternalSubscription(n) : null,
                      t.length > 0
                          ? (0, i.jsxs)("div", {
                                className: r()(e3.PQ, e3.GD),
                                children: [
                                    e
                                        ? null
                                        : (0, i.jsx)("div", {
                                              className: r()(e3.Nj, e3.Bd),
                                              children: (0, i.jsxs)(g.A, {
                                                  className: e3.Yi,
                                                  children: [
                                                      (0, i.jsx)("div", {
                                                          className: ep.p6,
                                                          children: b.intl.string(b.t["5t11BV"]),
                                                      }),
                                                      (0, i.jsx)("div", {
                                                          className: e3.Ir,
                                                          children: b.intl.string(b.t.yAAPb2),
                                                      }),
                                                      (0, i.jsx)("div", {
                                                          className: ep.vj,
                                                          children: b.intl.string(b.t["6MqHXV"]),
                                                      }),
                                                  ],
                                              }),
                                          }),
                                    (0, i.jsx)(e2, { compactMode: e, locale: s, payments: t, numPages: this.numPages }),
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
    let t = (0, d.bG)([B], () => B.getPayments()),
        n = (0, d.bG)([H.A], () => H.A.getPremiumTypeSubscription()),
        a = s.useMemo(
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
        l = (0, d.yK)([O.A], () => O.A.getPlanIdsForSkus(Array.from(r))),
        c = s.useCallback(() => l.length === a.size, [l, a]),
        o = s.useMemo(() => t.filter((e) => e.currency !== w.Yri.DISCORD_ORB), [t]);
    return (
        s.useEffect(() => {
            c() ||
                p.h.wait(() => {
                    r.forEach((e) => (0, _.ur)(e, void 0, void 0, !0, void 0));
                });
        }, [c, r]),
        (0, i.jsx)(e1, { ...e, payments: o, subscription: n })
    );
}
