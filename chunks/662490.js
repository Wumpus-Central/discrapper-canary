(n.d(t, { A: () => eX }), n(321073));
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
    E = n(73153),
    h = n(661439),
    x = n(73825),
    p = n(928039),
    S = n(277984),
    T = n(235986),
    f = n(39190),
    I = n(380098);
let _ = [],
    N = !1;
function C(e) {
    let { payment: t } = e,
        n = I.A.createFromServer(t),
        i = _.findIndex((e) => e.id === t.id);
    (-1 === i ? (_.push(n), _.sort((e, t) => t.createdAt.getTime() - e.createdAt.getTime())) : (_[i] = n),
        (_ = [..._]));
}
class y extends d.Ay.Store {
    static displayName = "PaymentStore";
    getPayment(e) {
        return _.find((t) => t.id === e);
    }
    getPayments() {
        return _;
    }
    get hasFetchedPayments() {
        return N;
    }
}
let b = new y(E.h, {
    BILLING_PAYMENTS_FETCH_SUCCESS: function (e) {
        let { payments: t } = e;
        for (let e of ((N = !0), t)) {
            let t = I.A.createFromServer(e),
                n = _.findIndex((t) => t.id === e.id);
            -1 !== n ? (_[n] = t) : _.push(t);
        }
        (_.sort((e, t) => t.createdAt.getTime() - e.createdAt.getTime()), (_ = [..._]));
    },
    BILLING_PAYMENTS_FETCH_FAIL: function () {
        N = !0;
    },
    PAYMENT_UPDATE: C,
    BILLING_PAYMENT_FETCH_SUCCESS: C,
    LOGOUT: function () {
        ((_ = []), (N = !1));
    },
});
var v = n(97352),
    j = n(166403),
    O = n(158045);
n(938796);
var L = n(536637),
    R = n.n(L),
    D = n(122817),
    P = n(665260),
    G = n(661531),
    M = n(821609),
    U = n(866665),
    V = n(939249),
    k = n(403581),
    w = n(331322),
    F = n(707554),
    B = n(789645),
    z = n(933832),
    Y = n(28863),
    X = n(34188),
    H = n(597770),
    W = n(512950),
    K = n(975807),
    Z = n(793574),
    q = n(688810),
    Q = n(206828),
    $ = n(587895),
    J = n(458790),
    ee = n(39209),
    et = n(769015),
    en = n(576243),
    ei = n(337095),
    es = n(871123),
    el = n(510022),
    er = n(378058),
    ea = n(148355),
    eo = n(780964),
    eu = n(766075),
    ed = n(106799),
    ec = n(202613),
    eg = n(71393),
    em = n(287809),
    eA = n(295405),
    eE = n(90165),
    eh = n(147925),
    ex = n(174459),
    ep = n(957565),
    eS = n(58703),
    eT = n(580630),
    ef = n(427262),
    eI = n(219887),
    e_ = n(652215),
    eN = n(202541),
    eC = n(818348),
    ey = n(375708),
    eb = n(460103);
let ev = (e) => `https://${e_.XlF}/hc/${e.toLowerCase()}/requests/new?ticket_form_id=360000118612`,
    ej = [e_.Puh.DURABLE_PRIMARY, e_.Puh.DURABLE, e_.Puh.CONSUMABLE],
    eO = [e_.__0.FAILED, e_.__0.REVERSED, e_.__0.CANCELED],
    eL = [eC.kM.APPLE],
    eR = [e_.hes.PAYSAFE_CARD],
    eD = new Set([eC.kM.STRIPE, eC.kM.BRAINTREE, eC.kM.ADYEN]);
function eP(e) {
    return e.find((e) => null != e.paymentGateway && eD.has(e.paymentGateway)) ?? e[0];
}
function eG(e) {
    let { description: t, cost: n } = e;
    return (0, i.jsx)("li", {
        className: eb.mg,
        children: (0, i.jsxs)(T.A, {
            justify: T.A.Justify.BETWEEN,
            children: [(0, i.jsx)("div", { children: t }), (0, i.jsx)("div", { children: n })],
        }),
    });
}
function eM(e) {
    let { value: t, copyText: n, copyFeedbackText: l } = e,
        [r, a] = s.useState(!1),
        [o, u] = s.useState(!1);
    return (0, i.jsx)(U.m, {
        forceOpen: o,
        text: r ? l : n,
        children: (0, i.jsx)(V.D, {
            onMouseEnter: () => {
                r && a(!1);
            },
            onMouseLeave: () => {
                u(!1);
            },
            onClick: function () {
                (0, ep.C)(t, () => {
                    (u(!0), a(!0));
                });
            },
            children: (0, i.jsx)("div", { className: eb.l9, children: t }),
        }),
    });
}
function eU(e) {
    let { withGradient: t, compactMode: n } = e,
        s = n ? 28 : 16;
    return t
        ? (0, i.jsx)(en.A, { size: n ? 40 : 24, iconSize: s, color: G.A.unsafe_rawColors.NEUTRAL_1, className: eb.Sy })
        : (0, i.jsx)("div", {
              className: r()(eb.Sy, eb.uX, n ? eb.vU : eb.Xr),
              children: (0, i.jsx)(k.t, { size: "custom", width: s, height: s, color: G.A.colors.ICON_DEFAULT }),
          });
}
class eV extends s.PureComponent {
    static defaultProps = { compactMode: !1 };
    state = { expanded: !1 };
    refundRules = [
        { rule: "PURCHASE_DATE", canRefund: () => this.daysSincePurchase <= 5 },
        {
            rule: "SKU_TYPE",
            canRefund: () => {
                let e = this.receiptPayment;
                return null == e.sku || e.sku.type !== e_.Puh.CONSUMABLE;
            },
        },
        { rule: "ALREADY_REFUNDED", canRefund: () => this.purchaseAmountRefunded < this.purchaseAmount },
        {
            rule: "PAYMENT_STATUS",
            canRefund: () => {
                let e = this.receiptPayment;
                return !eO.includes(e.status);
            },
        },
        {
            rule: "PAYMENT_GATEWAY",
            canRefund: () => {
                let e = this.receiptPayment;
                return null == e.paymentGateway || !eL.includes(e.paymentGateway);
            },
        },
        {
            rule: "PAYMENT_SOURCE",
            canRefund: () => {
                let e = this.receiptPayment;
                return null == e.paymentSource || !eR.includes(e.paymentSource.type);
            },
        },
        {
            rule: "SKU_STICKER_PACK",
            canRefund: () => {
                let e = this.receiptPayment;
                return null == e.sku || !(0, P.Lt)(e.sku.flags, e_.d68.STICKER);
            },
        },
        {
            rule: "SUBSCRIPTION_TYPE",
            canRefund: () => {
                let e = this.receiptPayment;
                return e.subscription?.type !== e_.rzx.GUILD && e.subscription?.type !== e_.rzx.APPLICATION;
            },
        },
        {
            rule: "GUILD_PRODUCT",
            canRefund: () => {
                let e = this.receiptPayment;
                return null == e.sku || !(0, P.Lt)(e.sku.flags, D.d.GUILD_PRODUCT);
            },
        },
        { rule: "COLLECTIBLE", canRefund: () => !this.receiptPayment.isShopPurchase },
    ];
    get daysSincePurchase() {
        let e = this.receiptPayment,
            t = null != e.sku ? e.sku.releaseDate : null,
            n = null != t && t.isAfter(e.createdAt) ? t : e.createdAt;
        return R()().diff(n, "days");
    }
    get receiptPayment() {
        return eP(this.props.payments);
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
            case e_.__0.PENDING:
                return (0, i.jsx)("span", { className: eb.Xg, children: ey.intl.string(ey.t.y7F0Re) });
            case e_.__0.FAILED:
                return (0, i.jsx)("span", { className: eb.ob, children: ey.intl.string(ey.t.Yo4ru6) });
            case e_.__0.REVERSED:
                return (0, i.jsx)("span", { className: eb.ob, children: ey.intl.string(ey.t.YQv9Li) });
            case e_.__0.CANCELED:
                return (0, i.jsx)("span", { className: eb.ob, children: ey.intl.string(ey.t.ttkBhy) });
        }
        return this.props.payments.some((e) => e.status === e_.__0.REFUNDED)
            ? this.purchaseAmountRefunded !== this.purchaseAmount
                ? (0, i.jsx)("span", { className: eb.gD, children: ey.intl.string(ey.t.lYbZzz) })
                : (0, i.jsx)("span", { className: eb.gD, children: ey.intl.string(ey.t.ZBb6NK) })
            : null;
    }
    renderTenantStatusOverride() {
        let { hasLinkedToApplication: e } = this.props,
            t = this.receiptPayment;
        if (!(0, es.bF)(t.sku) || t.status !== e_.__0.COMPLETED) return null;
        let n = t.entitlements ?? [];
        return t.isGift
            ? n.some((e) => null != e.gifterId)
                ? (0, i.jsx)("span", { className: eb.gD, children: ey.intl.string(ey.t.lIsIFo) })
                : (0, i.jsx)("span", { className: eb.Tf, children: ey.intl.string(ey.t["+tqSi3"]) })
            : n.some((e) => e.isFulfilled())
              ? (0, i.jsx)("span", { className: eb.gD, children: ey.intl.string(ey.t.Osji1u) })
              : n.some((e) => e.isFulfillmentFailed())
                ? (0, i.jsx)("span", { className: eb.ob, children: ey.intl.string(ey.t.Yo4ru6) })
                : e
                  ? (0, i.jsx)("span", { className: eb.Tf, children: ey.intl.string(ey.t.y7F0Re) })
                  : (0, i.jsx)("span", { className: eb.Tf, children: ey.intl.string(ey.t.HHC5Z4) });
    }
    renderStatus() {
        return this.renderTenantStatusOverride() ?? this.renderDefaultStatus();
    }
    renderAmount(e) {
        let t = this.receiptPayment;
        return t.currency === eC.Yr.DISCORD_ORB
            ? (0, i.jsxs)("span", {
                  className: eb.db,
                  children: [
                      (0, i.jsx)(ed.A, { customSize: 16, shouldUseThemeColor: !0 }),
                      ey.intl.formatToPlainString(ey.t.YMor7k, { count: e }),
                  ],
              })
            : (0, eT.$g)(e, t.currency);
    }
    renderPrice() {
        let e = this.purchaseAmount - this.purchaseAmountRefunded;
        return (0, i.jsx)("span", { className: eb.q9, children: this.renderAmount(e) });
    }
    renderPaymentIdField() {
        let e = this.receiptPayment;
        return (0, i.jsx)("li", {
            className: eb.mg,
            children: (0, i.jsxs)("div", {
                className: eb.bx,
                children: [
                    (0, i.jsx)("div", { children: ey.intl.string(ey.t["UQim+r"]) }),
                    (0, i.jsx)(eM, {
                        value: e.id,
                        copyText: ey.intl.string(ey.t["Mdk9+A"]),
                        copyFeedbackText: ey.intl.string(ey.t["7eIrA2"]),
                    }),
                ],
            }),
        });
    }
    renderPaymentSource(e) {
        let t =
            null != e.paymentSource ? e.paymentSource : e.paymentGateway === eC.kM.APPLE_PARTNER ? new ec.Pw({}) : null;
        return null == t
            ? null
            : (0, i.jsx)(eI.A, {
                  paymentSource: t,
                  locale: this.props.locale,
                  descriptionClassName: eb.iL,
                  showLabels: !0,
                  showPaymentSourceIcon: !0,
              });
    }
    renderPaymentSources() {
        let { payments: e } = this.props;
        return e.length <= 1
            ? this.renderPaymentSource(this.receiptPayment)
            : (0, i.jsx)(w.B, {
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
            className: r()(eb.iL, eb.W),
            children: [
                this.renderPaymentSources(),
                (0, i.jsxs)("ul", {
                    children: [
                        !n && l > 0
                            ? (0, i.jsxs)(s.Fragment, {
                                  children: [
                                      (0, i.jsx)(eG, { description: t.description, cost: this.renderAmount(a - l) }),
                                      (0, i.jsx)(eG, {
                                          description: ey.intl.string(ey.t.QgWXht),
                                          cost: this.renderAmount(l),
                                      }),
                                  ],
                              })
                            : null,
                        (0, i.jsx)(eG, { description: ey.intl.string(ey.t.txajQG), cost: this.renderAmount(a) }),
                        o > 0 &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(eG, {
                                        description: ey.intl.string(ey.t["A+I0AP"]),
                                        cost: this.renderAmount(o),
                                    }),
                                    (0, i.jsx)(eG, {
                                        description: ey.intl.string(ey.t.xER6Wi),
                                        cost: this.renderAmount(a - o),
                                    }),
                                ],
                            }),
                        this.renderPaymentIdField(),
                        t.isGuildProductPurchase &&
                            null != u &&
                            null != t.sku &&
                            (0, i.jsx)(J.u, { guildId: u, guildProductListingId: t.sku.id }),
                    ],
                }),
            ],
        });
    }
    renderInvoiceDownload() {
        let e = this.receiptPayment;
        return (0, i.jsx)(ee.A, { payment: e });
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
        return a.status === e_.__0.REFUNDED
            ? (0, i.jsxs)(s.Fragment, {
                  children: [
                      (0, i.jsx)(F.H, { className: eb.mW, children: ey.intl.string(ey.t["gIGB/A"]) }),
                      (0, i.jsx)("div", {
                          className: eb.iL,
                          children:
                              null != e
                                  ? ey.intl.format(ey.t.Q1K9eg, { username: ef.Ay.getName(e) })
                                  : ey.intl.format(ey.t.IBtGwC, { applicationName: n?.name }),
                      }),
                  ],
              })
            : a.isGift
              ? (0, i.jsxs)(s.Fragment, {
                    children: [
                        (0, i.jsx)(F.H, { className: eb.mW, children: ey.intl.string(ey.t["gIGB/A"]) }),
                        (0, i.jsx)("div", {
                            className: eb.iL,
                            children:
                                null != e
                                    ? ey.intl.format(ey.t.vfUW65, { username: ef.Ay.getName(e) })
                                    : ey.intl.string(ey.t["18wIqp"]),
                        }),
                        null == e &&
                            (0, i.jsx)("div", {
                                className: eb.TP,
                                children: (0, i.jsx)(M.$, {
                                    variant: "primary",
                                    text: ey.intl.string(ey.t["jcSP+g"]),
                                    onClick: () => (0, eu.openUserSettings)(eo.X.GIFT_PANEL),
                                }),
                            }),
                    ],
                })
              : o
                ? null
                : (0, i.jsxs)(s.Fragment, {
                      children: [
                          (0, i.jsx)(F.H, { className: eb.mW, children: ey.intl.string(ey.t["gIGB/A"]) }),
                          (0, i.jsx)("div", {
                              className: eb.iL,
                              children: t
                                  ? ey.intl.format(ey.t.DQQCAw, { applicationName: n?.name, skuName: a.sku?.name })
                                  : ey.intl.format(ey.t.ED2BqF, { applicationName: n?.name, skuName: a.sku?.name }),
                          }),
                          (0, i.jsx)("div", {
                              className: eb.TP,
                              children: t
                                  ? (0, i.jsx)(M.$, {
                                        variant: "primary",
                                        text: ey.intl.string(ey.t.zoztQA),
                                        onClick: () => (0, K.A)(ev(l)),
                                    })
                                  : (0, i.jsx)(M.$, {
                                        variant: "primary",
                                        text: ey.intl.string(ey.t["jCqvk/"]),
                                        onClick: () => {
                                            null != a.sku &&
                                                null != n &&
                                                (ex.default.track(
                                                    e_.HAw.PAYMENT_HISTORY_CONNECT_ACCOUNT_BUTTON_CLICKED,
                                                    { sku_id: a.sku.id, application_id: n.id, location_stack: r },
                                                ),
                                                (0, el.n)({ sku: a.sku, application: n, analyticsLocations: r }));
                                        },
                                    }),
                          }),
                      ],
                  });
    }
    renderAdditionalTenantInfo() {
        let e = this.receiptPayment;
        if ((0, es.bF)(e.sku)) return this.renderAdditionalGameItemDetails();
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
            a = ev(t);
        return (
            (e =
                l.includes("SKU_TYPE") && !n.isShopPurchase
                    ? ey.intl.format(ey.t["5lvoVS"], { supportURL: a })
                    : r
                      ? n.isPremiumSubscription || n.isPremiumGuildSubscription
                          ? ey.intl.format(ey.t.EPYteX, { dateLimit: 5, supportURL: a })
                          : n.isGift
                            ? ey.intl.format(ey.t["16eP/L"], { dateLimit: 5, supportURL: a })
                            : ey.intl.format(ey.t["1LDI4J"], { dateLimit: 5, playtimeLimit: 2, supportURL: a })
                      : n.isShopPurchase
                        ? ey.intl.string(ey.t.s9TZM1)
                        : n.isGift
                          ? ey.intl.formatToPlainString(ey.t.owlOWc, { dateLimit: 5 })
                          : n.isPremiumSubscription || n.isPremiumGuildSubscription
                            ? ey.intl.formatToPlainString(ey.t.dk7vyL, { dateLimit: 5 })
                            : ey.intl.formatToPlainString(ey.t.s4Kk0C, { dateLimit: 5, playtimeLimit: 2 })),
            (0, i.jsxs)(s.Fragment, {
                children: [
                    (0, i.jsx)(F.H, { className: eb.mW, children: ey.intl.string(ey.t["n/27pr"]) }),
                    (0, i.jsxs)("div", {
                        className: eb.iL,
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
                className: eb._Z,
                children: [
                    (0, i.jsx)(F.H, { className: eb.ud, children: e }),
                    (0, i.jsxs)("div", {
                        className: eb.z9,
                        children: [
                            (0, i.jsx)(t, { className: eb.xb, color: "currentColor" }),
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
        let s = e.includes("PURCHASE_DATE") ? B.P : z.CheckmarkLargeIcon;
        return (0, i.jsxs)("div", {
            className: eb.My,
            children: [
                (0, i.jsx)("div", {
                    className: eb.Kf,
                    children:
                        !n.isShopPurchase &&
                        this.renderRefundCriteria(
                            ey.intl.string(ey.t.H0RNz4),
                            s,
                            ey.intl.formatToPlainString(ey.t["7dtXa/"], { daysSincePurchase: this.daysSincePurchase }),
                        ),
                }),
                (0, i.jsx)(Y.Anchor, { href: ev(t), children: ey.intl.string(ey.t.re5nOB) }),
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
            m = null != u.paymentSource && e_.AD1.has(u.paymentSource.type);
        if (null != g && 0 !== g.items.length) {
            let s = [],
                a = null;
            if (g.type === e_.rzx.PREMIUM) {
                let t;
                if (
                    (g.items.forEach((e) => {
                        let { planId: n, quantity: i } = e;
                        ((0, O.xq)(n)
                            ? (s.push(O.Ay.getDisplayName(n, !1, m)), (a = (0, O.mH)(eN.hd[n].skuId)))
                            : (s.push(`${i > 1 ? `${i}x ` : ""}${O.Ay.getDisplayName(n, !1, m)}`),
                              null == a && (a = (0, O.mH)(eN.hd[n].skuId))),
                            (0, O.z4)(n) || (t ??= n));
                    }),
                    null != t)
                ) {
                    let s = O.Ay.getPremiumType(t);
                    e = (0, i.jsx)(eU, { withGradient: s === eN.PremiumTypes.TIER_2, compactMode: n });
                }
            } else if (g.type === e_.rzx.GUILD) {
                if (null != o) {
                    let e = o.interval === eN.WT.YEAR ? ey.t.V6UFQM : ey.t["6oq128"];
                    (s.push(ey.intl.format(e, { planName: o.name })), (a = o.skuId));
                }
            } else
                g.type === e_.rzx.APPLICATION
                    ? (null != o && (a = o.skuId),
                      null != l
                          ? s.push(ey.intl.formatToPlainString(ey.t["0wL/VI"], { tier: c?.name }))
                          : s.push(ey.intl.string(ey.t["9czSYu"])))
                    : (g.type, e_.rzx.GAME_SERVER, g.type);
            ((t = 0 !== s.length ? s.join(", ") : u.description),
                null == e &&
                    (e = (0, i.jsx)(et.A, {
                        className: eb.Sy,
                        guildClassName: eb.zA,
                        game: l,
                        guild: r,
                        size: et.M.XSMALL,
                        skuId: a ?? c?.id,
                    })));
        } else if (null != c) {
            if (u.isGuildProductPurchase && u.isSoftDeletedProduct) t = ey.intl.string(ey.t.O7uLmw);
            else {
                t = c.name;
                let e = u.invoice;
                if (null != e) {
                    let n = e.getInvoicePreviewLineItemForSku(c.id);
                    null != n && (t = n.description);
                }
            }
            if (null != a) {
                let t = (0, er.Id)(a);
                e = (0, i.jsx)(ea.A, {
                    disableAnimation: !d,
                    isInteracting: d,
                    sticker: t,
                    className: eb.Sy,
                    size: 24,
                });
            } else
                e = u.isFractionalPremium
                    ? (0, i.jsx)(eU, { withGradient: !0, compactMode: n })
                    : u.isCollectible
                      ? (0, i.jsx)(X.U, {
                            size: "custom",
                            width: 23,
                            height: 23,
                            color: "currentColor",
                            className: eb.sV,
                        })
                      : (0, i.jsx)(et.A, {
                            className: eb.Sy,
                            guildClassName: eb.zA,
                            game: l,
                            guild: r,
                            size: et.M.XSMALL,
                            skuId: c.id,
                        });
        } else ((e = (0, i.jsx)(eU, { withGradient: !1, compactMode: n })), (t = u.description));
        let E = (0, i.jsx)(A.E, {
                variant: "text-sm/normal",
                className: eb.p6,
                children: (0, eS.i$)(R()(u.createdAt), "MM/DD/YYYY"),
            }),
            h = u.isGift
                ? (0, i.jsx)(U.m, {
                      text: ey.intl.string(ey.t.QddTpm),
                      children: (0, i.jsx)(H.GiftIcon, { size: "md", color: "currentColor", className: eb.ez }),
                  })
                : null;
        return n
            ? (0, i.jsxs)("div", { className: eb.h_, children: [e, (0, i.jsxs)("div", { children: [t, E] }), h] })
            : (0, i.jsxs)(s.Fragment, {
                  children: [
                      E,
                      (0, i.jsxs)("div", { className: eb.h_, children: [e, (0, i.jsx)("div", { children: t }), h] }),
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
                      (0, i.jsx)("div", { className: eb.ts }),
                      n.isSoftDeletedProduct
                          ? (0, i.jsx)(W.p, {
                                messageType: W.Y.WARNING,
                                action: (0, i.jsx)(M.$, {
                                    variant: "overlay-secondary",
                                    text: ey.intl.string(ey.t.zoztQA),
                                    onClick: () => (0, K.A)(ev(t)),
                                }),
                                children: ey.intl.string(ey.t["3AvulN"]),
                            })
                          : null != s &&
                            null != n.sku &&
                            (0, i.jsx)(J.Q, { guildId: s, guildProductListingId: n.sku.id }),
                  ],
              })
            : null;
    }
    renderExpandedSection() {
        return (0, i.jsx)(V.D, {
            onClick: (e) => e.stopPropagation(),
            children: (0, i.jsxs)("div", {
                className: eb.WI,
                children: [
                    (0, i.jsx)(F.H, { className: eb.mW, children: ey.intl.string(ey.t.nyzoFb) }),
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
                (0, i.jsxs)(V.D, {
                    onClick: this.handleExpandInfo,
                    "data-expanded": s,
                    className: r()(eb.Ji, e, { [eb.oE]: t }),
                    focusProps: { offset: 4 },
                    ...n,
                    children: [
                        (0, i.jsxs)(T.A, {
                            className: eb.J7,
                            align: T.A.Align.CENTER,
                            "data-expanded": s,
                            children: [
                                this.renderDescription(),
                                (0, i.jsxs)("div", {
                                    className: eb.vj,
                                    children: [this.renderStatus(), this.renderPrice()],
                                }),
                                (0, i.jsx)(eh.A, {
                                    className: eb.fT,
                                    direction: s ? eh.A.Directions.UP : eh.A.Directions.DOWN,
                                }),
                            ],
                        }),
                        s ? this.renderExpandedSection() : null,
                    ],
                }),
        });
    }
}
function ek(e) {
    let { payments: t, locale: n, compactMode: l, className: r } = e,
        a = eP(t),
        o = null != a.sku && ej.includes(a.sku.type),
        u = null != a.sku && o ? a.sku.applicationId : null,
        c = a.sku?.applicationId,
        g = a.subscription?.type === e_.rzx.APPLICATION,
        {
            applicationStatistics: m,
            gameApplication: A,
            paymentSources: E,
        } = (0, d.cf)([eA.A, eE.A, $.A], () => ({
            applicationStatistics: null != u ? eE.A.getCurrentUserStatisticsForApplication(u) : null,
            gameApplication: $.A.getApplication(u ?? "") ?? a.sku?.application,
            paymentSources: eA.A.paymentSources,
        })),
        { hasAlreadyLinked: h } = (0, Q.RD)((0, es.bF)(a.sku) ? A : void 0),
        x = (0, d.bG)([$.A], () => (null != c ? $.A.getApplication(c) : null));
    s.useEffect(() => {
        g && null != c && (0, ei.TA)(c);
    }, [c, g]);
    let p = (0, d.bG)([eg.A], () => eg.A.getGuild(A?.guildId)),
        S = o ? A : void 0,
        T = a.subscription,
        f = (0, d.bG)([v.A], () => (null != T && T.type !== e_.rzx.PREMIUM ? v.A.get(T.items[0].planId) : null)),
        I = (0, d.bG)(
            [em.default],
            () => {
                let e = a.isGift ? a.entitlements?.find((e) => e.user?.id != null && null != e.gifterId) : null;
                return null == e ? null : (em.default.getUser(e.user?.id ?? null) ?? e?.user);
            },
            [a],
        ),
        { analyticsLocations: _ } = (0, q.Ay)(Z.A.BILLING_SETTINGS_BILLING);
    return (0, i.jsx)(eV, {
        applicationStatistics: m,
        application: g ? x : S,
        analyticsLocations: _,
        guild: p,
        stickerPack: null,
        paymentSources: E,
        locale: n,
        compactMode: l,
        className: r,
        payments: t,
        plan: f,
        claimedGiftUser: I,
        hasLinkedToApplication: h,
    });
}
var ew = n(949779);
let eF = new Set([e_.__0.FAILED, e_.__0.CANCELED]);
function eB(e) {
    let { payments: t, paymentGroups: n, locale: l, compactMode: a, numPages: o } = e,
        d = s.useRef(null),
        [g, m] = s.useState(0),
        [A, E] = s.useState(null),
        h = n.slice(10 * g, (g + 1) * 10);
    s.useEffect(() => {
        d.current?.scrollTo({ to: 0 });
    }, [g]);
    let x = s.useCallback(
            (e) => {
                m(e);
                let n = t[t.length - 1].id;
                e >= o - 2 && A !== n && ((0, S.CK)(10, n), E(n));
            },
            [t, o, A],
        ),
        T = (0, p.A)("billing-history", d);
    return (0, i.jsx)(u.hD, {
        navigator: T,
        children: (0, i.jsx)(u.PR, {
            children: (e) => {
                let { ref: t, ...n } = e;
                return (0, i.jsx)(f.A, {
                    className: ew.GD,
                    currentPageIndex: g,
                    onChangePage: x,
                    numPages: o,
                    showPageCount: !1,
                    ref: t,
                    ...n,
                    children: (0, i.jsx)(c.Ch, {
                        className: ew.Bd,
                        ref: d,
                        overflow: "auto",
                        children: h.map((e, t) =>
                            (0, i.jsx)(ek, { className: r()(ew.Nj, ew.Bd), payments: e, locale: l, compactMode: a }, t),
                        ),
                    }),
                });
            },
        }),
    });
}
class ez extends s.PureComponent {
    static defaultProps = { compactMode: !1 };
    scrollerRef = s.createRef();
    get numPages() {
        return Math.max(Math.ceil(this.props.paymentGroups.length / 10), 1);
    }
    componentDidMount() {
        E.h.wait(() => {
            ((0, h.X)(), (0, S.CK)(30));
        });
    }
    renderPremiumExternalSubscription(e) {
        return (
            o()(null != e.paymentGateway, "Expected payment gateway when rendering for external subscription"),
            (0, i.jsxs)(g.Z, {
                className: ew.K1,
                children: [
                    (0, i.jsx)("div", {
                        className: ew.BF,
                        children: ey.intl.format(ey.t["6mIX6s"], { paymentGatewayName: eC.qm[e.paymentGateway] }),
                    }),
                    (0, i.jsx)("div", {
                        className: ew.Q2,
                        children: ey.intl.format(ey.t.eG0uZB, {
                            paymentGatewayName: eC.qm[e.paymentGateway],
                            billingHistoryLink: (0, O.tW)(e.paymentGateway, "BILLING_HISTORY"),
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
                  className: ew.GD,
                  children: [
                      null != s && o ? this.renderPremiumExternalSubscription(s) : null,
                      t.length > 0
                          ? (0, i.jsxs)("div", {
                                className: r()(ew.PQ, ew.GD),
                                children: [
                                    e
                                        ? null
                                        : (0, i.jsx)("div", {
                                              className: r()(ew.Nj, ew.Bd),
                                              children: (0, i.jsxs)(T.A, {
                                                  className: ew.Yi,
                                                  children: [
                                                      (0, i.jsx)("div", {
                                                          className: eb.p6,
                                                          children: ey.intl.string(ey.t["5t11BV"]),
                                                      }),
                                                      (0, i.jsx)("div", {
                                                          className: ew.Ir,
                                                          children: ey.intl.string(ey.t.yAAPb2),
                                                      }),
                                                      (0, i.jsx)("div", {
                                                          className: eb.vj,
                                                          children: ey.intl.string(ey.t["6MqHXV"]),
                                                      }),
                                                  ],
                                              }),
                                          }),
                                    (0, i.jsx)(eB, {
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
                                  children: ey.intl.string(ey.t.GqvDkk),
                              }),
                  ],
              })
            : (0, i.jsx)(m.y, {});
    }
}
function eY(e) {
    let t = e.skuId,
        n = e.subscription?.items[0].planId;
    return !(null == t || null == n || Object.values(eN.pe).includes(t) || (0, O.ys)(n));
}
function eX(e) {
    let t = (0, d.bG)([b], () => b.getPayments()),
        n = s.useMemo(
            () =>
                (function (e) {
                    let t = [],
                        n = new Map();
                    for (let i of e) {
                        let e = i.invoice?.id;
                        if (null == e || eF.has(i.status)) {
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
        l = (0, d.bG)([j.A], () => j.A.getPremiumTypeSubscription()),
        r = s.useMemo(
            () =>
                new Set(
                    t.filter(eY).map((e) => {
                        let { subscription: t } = e;
                        return t?.items[0].planId;
                    }),
                ),
            [t],
        ),
        a = s.useMemo(
            () =>
                new Set(
                    t.filter(eY).map((e) => {
                        let { skuId: t } = e;
                        return t;
                    }),
                ),
            [t],
        ),
        o = (0, d.yK)([v.A], () => v.A.getPlanIdsForSkus(Array.from(a))),
        u = s.useCallback(() => o.length === r.size, [o, r]);
    s.useEffect(() => {
        u() ||
            E.h.wait(() => {
                a.forEach((e) => (0, x.ur)(e, void 0, void 0, !0, void 0));
            });
    }, [u, a]);
    let c = (0, d.bG)([b], () => b.hasFetchedPayments);
    return (0, i.jsx)(ez, { ...e, payments: t, paymentGroups: n, subscription: l, hasFetchedPayments: c });
}
