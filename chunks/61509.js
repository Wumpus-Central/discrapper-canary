n.d(t, { A: () => ex }), n(938796), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(989349),
    o = n.n(a),
    d = n(837381),
    c = n(122817),
    u = n(665260),
    m = n(311907),
    g = n(435371),
    _ = n(732955),
    x = n(397927),
    h = n(975807),
    A = n(793574),
    p = n(688810),
    T = n(362490),
    f = n(587895),
    S = n(120385),
    E = n(235986),
    b = n(769015),
    C = n(250627),
    v = n(871109),
    N = n(571654),
    I = n(411342),
    j = n(179499),
    y = n(22007),
    O = n(95035),
    R = n(337095),
    L = n(871123),
    P = n(510022),
    D = n(378058),
    G = n(148355),
    M = n(780964),
    U = n(779733),
    k = n(858897),
    w = n(202613),
    V = n(317525),
    B = n(71393),
    F = n(287809),
    H = n(295405),
    z = n(97352),
    Y = n(90165),
    X = n(147925),
    K = n(954571),
    W = n(957565),
    Z = n(405269),
    q = n(927578),
    Q = n(580630),
    J = n(427262),
    $ = n(219887),
    ee = n(652215),
    et = n(788868),
    en = n(818348),
    ei = n(985018),
    es = n(12762);
let el = (e) => `https://${ee.XlF}/hc/${e.toLowerCase()}/requests/new?ticket_form_id=360000118612`,
    er = [ee.Puh.DURABLE_PRIMARY, ee.Puh.DURABLE, ee.Puh.CONSUMABLE],
    ea = [ee.__0.FAILED, ee.__0.REVERSED, ee.__0.CANCELED],
    eo = [en.kM.APPLE],
    ed = (e) => {
        let { description: t, cost: n } = e;
        return (0, i.jsx)("li", {
            className: es.mg,
            children: (0, i.jsxs)(E.A, {
                justify: E.A.Justify.BETWEEN,
                children: [(0, i.jsx)("div", { children: t }), (0, i.jsx)("div", { children: n })],
            }),
        });
    };
function ec(e) {
    let { value: t, copyText: n, copyFeedbackText: l } = e,
        [r, a] = s.useState(!1),
        [o, d] = s.useState(!1);
    return (0, i.jsx)(g.m_, {
        forceOpen: o,
        text: r ? l : n,
        children: (0, i.jsx)(x.DUT, {
            onMouseEnter: () => {
                r && a(!1);
            },
            onMouseLeave: () => {
                d(!1);
            },
            onClick: () => {
                (0, W.C)(t, () => {
                    d(!0), a(!0);
                });
            },
            children: (0, i.jsx)("div", { className: es.l9, children: t }),
        }),
    });
}
let eu = (e) => {
    let { description: t, detail: n } = e;
    return (0, i.jsx)("li", {
        className: es.Iu,
        children: (0, i.jsxs)(E.A, {
            justify: E.A.Justify.BETWEEN,
            children: [(0, i.jsx)("div", { children: t }), (0, i.jsx)("div", { children: n })],
        }),
    });
};
function em(e) {
    let { guildId: t, guildProductListingId: n } = e,
        l = (0, C.Qi)(t, n, { requireCurrentGuild: !1 }),
        r = (0, N.z)(l),
        a = (0, m.bG)([B.A], () => B.A.getGuild(t)),
        o = l?.role_id != null && l?.attachments_count === 0 ? ei.intl.string(ei.t.H11qcT) : r,
        d = s.useCallback(async () => {
            a?.features.has(ee.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE)
                ? await (0, y.A)(ee.BVt.GUILD_PRODUCT(t, n))
                : await (0, y.A)(ee.BVt.CHANNEL(t)),
                (0, U.default)();
        }, [a, t, n]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != o && (0, i.jsx)(eu, { description: ei.intl.string(ei.t.lXPbJb), detail: o }),
            null != a &&
                (0, i.jsx)(eu, {
                    description: ei.intl.string(ei.t.Wpn8z8),
                    detail: (0, i.jsx)(O.A, { onClick: d, children: a.name }),
                }),
        ],
    });
}
function eg(e) {
    let { guildId: t, guildProductListingId: n } = e,
        s = (0, C.Qi)(t, n, { requireCurrentGuild: !1 }),
        l = (0, m.bG)([v.A], () => v.A.getGuildProductFetchState(n) === v.e.FETCHING),
        r = s?.role_id,
        a = (0, m.bG)([V.A], () => (null != r ? V.A.getRole(t, r) : void 0), [t, r]),
        o = (0, j.A)({ guildId: t, productId: n }),
        d = (s?.attachments?.length ?? 0) > 0,
        c = null != a;
    return l
        ? (0, i.jsx)("div", { className: es.hT, children: (0, i.jsx)(x.y$y, {}) })
        : null != s && (d || c)
          ? (0, i.jsxs)("div", {
                className: es.hT,
                children: [
                    d &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(x.Text, {
                                    variant: "text-xs/semibold",
                                    color: "text-default",
                                    className: es.yE,
                                    children: ei.intl.string(ei.t.hxawoy),
                                }),
                                (0, i.jsx)(_.$nd, { ...o }),
                            ],
                        }),
                    c &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                d && (0, i.jsx)("div", { className: es.yF }),
                                (0, i.jsx)(x.Text, {
                                    variant: "text-xs/semibold",
                                    color: "text-default",
                                    className: es.yE,
                                    children: ei.intl.string(ei.t.gWBNet),
                                }),
                                (0, i.jsx)(I.A, { role: a }),
                            ],
                        }),
                ],
            })
          : null;
}
class e_ extends s.PureComponent {
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
                return null == e.sku || e.sku.type !== ee.Puh.CONSUMABLE;
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
                return !ea.includes(e.status);
            },
        },
        {
            rule: "PAYMENT_GATEWAY",
            canRefund: () => {
                let { payment: e } = this.props;
                return null == e.paymentGateway || !eo.includes(e.paymentGateway);
            },
        },
        {
            rule: "SKU_STICKER_PACK",
            canRefund: () => {
                let { payment: e } = this.props;
                return null == e.sku || !(0, u.Lt)(e.sku.flags, ee.d68.STICKER);
            },
        },
        {
            rule: "SUBSCRIPTION_TYPE",
            canRefund: () => {
                let { payment: e } = this.props;
                return e.subscription?.type !== ee.rzx.GUILD && e.subscription?.type !== ee.rzx.APPLICATION;
            },
        },
        {
            rule: "GUILD_PRODUCT",
            canRefund: () => {
                let { payment: e } = this.props;
                return null == e.sku || !(0, u.Lt)(e.sku.flags, c.d.GUILD_PRODUCT);
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
        return o()().diff(n, "days");
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
            case ee.__0.PENDING:
                return (0, i.jsx)("span", { className: es.Xg, children: ei.intl.string(ei.t.y7F0Re) });
            case ee.__0.FAILED:
                return (0, i.jsx)("span", { className: es.ob, children: ei.intl.string(ei.t.Yo4ru6) });
            case ee.__0.REFUNDED:
                if (e.amountRefunded !== e.amount)
                    return (0, i.jsx)("span", { className: es.gD, children: ei.intl.string(ei.t.lYbZzz) });
                return (0, i.jsx)("span", { className: es.gD, children: ei.intl.string(ei.t.ZBb6NK) });
            case ee.__0.REVERSED:
                return (0, i.jsx)("span", { className: es.ob, children: ei.intl.string(ei.t.YQv9Li) });
            case ee.__0.CANCELED:
                return (0, i.jsx)("span", { className: es.ob, children: ei.intl.string(ei.t.ttkBhy) });
            default:
                return null;
        }
    }
    renderTenantStatusOverride() {
        let { payment: e, hasLinkedToApplication: t } = this.props;
        return (0, L.bF)(e.sku) && e.status === ee.__0.COMPLETED
            ? null != e.entitlements && e.entitlements.some((e) => e.isFulfilled())
                ? (0, i.jsx)("span", { className: es.gD, children: ei.intl.string(ei.t.Osji1u) })
                : e.isGift
                  ? null != e.entitlements && e.entitlements.some((e) => null != e.gifterId)
                      ? (0, i.jsx)("span", { className: es.gD, children: ei.intl.string(ei.t.lIsIFo) })
                      : (0, i.jsx)("span", { className: es.Tf, children: ei.intl.string(ei.t["+tqSi3"]) })
                  : t
                    ? (0, i.jsx)("span", { className: es.Tf, children: ei.intl.string(ei.t.y7F0Re) })
                    : (0, i.jsx)("span", { className: es.Tf, children: ei.intl.string(ei.t.HHC5Z4) })
            : null;
    }
    renderStatus() {
        return this.renderTenantStatusOverride() ?? this.renderDefaultStatus();
    }
    renderPrice() {
        let { payment: e } = this.props,
            t = e.amount - e.amountRefunded;
        return (0, i.jsx)("span", { className: es.q9, children: (0, Q.$g)(t, e.currency) });
    }
    renderPaymentIdField() {
        let { payment: e } = this.props;
        return (0, i.jsx)("li", {
            className: es.mg,
            children: (0, i.jsxs)("div", {
                className: es.bx,
                children: [
                    (0, i.jsx)("div", { children: ei.intl.string(ei.t["UQim+r"]) }),
                    (0, i.jsx)(ec, {
                        value: e.id,
                        copyText: ei.intl.string(ei.t["Mdk9+A"]),
                        copyFeedbackText: ei.intl.string(ei.t["7eIrA2"]),
                    }),
                ],
            }),
        });
    }
    renderPaymentBreakdown() {
        let { payment: e, locale: t, application: n } = this.props,
            { taxInclusive: l, tax: a, amount: o, amountRefunded: d, currency: c } = e,
            u = n?.guildId;
        return (0, i.jsxs)("div", {
            className: r()(es.iL, es.W),
            children: [
                null != e.paymentSource
                    ? (0, i.jsx)($.A, {
                          paymentSource: e.paymentSource,
                          locale: t,
                          descriptionClassName: es.iL,
                          showLabels: !0,
                          showPaymentSourceIcon: !0,
                      })
                    : e.paymentGateway === en.kM.APPLE_PARTNER
                      ? (0, i.jsx)($.A, {
                            paymentSource: new w.Pw({}),
                            locale: t,
                            descriptionClassName: es.iL,
                            showLabels: !0,
                            showPaymentSourceIcon: !0,
                        })
                      : null,
                (0, i.jsxs)("ul", {
                    children: [
                        this.renderPaymentIdField(),
                        !l && a > 0
                            ? (0, i.jsxs)(s.Fragment, {
                                  children: [
                                      (0, i.jsx)(ed, { description: e.description, cost: (0, Q.$g)(o - a, c) }),
                                      (0, i.jsx)(ed, {
                                          description: ei.intl.string(ei.t.QgWXht),
                                          cost: (0, Q.$g)(a, c),
                                      }),
                                  ],
                              })
                            : null,
                        (0, i.jsx)(ed, { description: ei.intl.string(ei.t.txajQG), cost: (0, Q.$g)(o, c) }),
                        e.isGuildProductPurchase &&
                            null != u &&
                            null != e.sku &&
                            (0, i.jsx)(em, { guildId: u, guildProductListingId: e.sku.id }),
                        d > 0 &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(ed, {
                                        description: ei.intl.string(ei.t["A+I0AP"]),
                                        cost: (0, Q.$g)(d, c),
                                    }),
                                    (0, i.jsx)(ed, {
                                        description: ei.intl.string(ei.t.xER6Wi),
                                        cost: (0, Q.$g)(o - d, c),
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
        return (0, i.jsx)(S.A, { payment: e });
    }
    renderAdditionalGameItemDetails() {
        let {
                claimedGiftUser: e,
                payment: t,
                hasLinkedToApplication: n,
                application: l,
                locale: r,
                analyticsLocations: a,
            } = this.props,
            o = t.entitlements?.some((e) => e.isFulfilled());
        return t.status === ee.__0.REFUNDED
            ? (0, i.jsxs)(s.Fragment, {
                  children: [
                      (0, i.jsx)(x.H, { className: es.mW, children: ei.intl.string(ei.t["gIGB/A"]) }),
                      (0, i.jsx)("div", {
                          className: es.iL,
                          children:
                              null != e
                                  ? ei.intl.format(ei.t.Q1K9eg, { username: J.Ay.getName(e) })
                                  : ei.intl.format(ei.t.IBtGwC, { applicationName: l?.name }),
                      }),
                  ],
              })
            : t.isGift
              ? (0, i.jsxs)(s.Fragment, {
                    children: [
                        (0, i.jsx)(x.H, { className: es.mW, children: ei.intl.string(ei.t["gIGB/A"]) }),
                        (0, i.jsx)("div", {
                            className: es.iL,
                            children:
                                null != e
                                    ? ei.intl.format(ei.t.vfUW65, { username: J.Ay.getName(e) })
                                    : ei.intl.string(ei.t["18wIqp"]),
                        }),
                        null == e &&
                            (0, i.jsx)("div", {
                                className: es.TP,
                                children: (0, i.jsx)(_.$nd, {
                                    variant: "primary",
                                    text: ei.intl.string(ei.t["jcSP+g"]),
                                    onClick: () => (0, k.openUserSettings)(M.X.GIFT_PANEL),
                                }),
                            }),
                    ],
                })
              : o
                ? null
                : (0, i.jsxs)(s.Fragment, {
                      children: [
                          (0, i.jsx)(x.H, { className: es.mW, children: ei.intl.string(ei.t["gIGB/A"]) }),
                          (0, i.jsx)("div", {
                              className: es.iL,
                              children: n
                                  ? ei.intl.format(ei.t.DQQCAw, { applicationName: l?.name, skuName: t.sku?.name })
                                  : ei.intl.format(ei.t.ED2BqF, { applicationName: l?.name, skuName: t.sku?.name }),
                          }),
                          (0, i.jsx)("div", {
                              className: es.TP,
                              children: n
                                  ? (0, i.jsx)(_.$nd, {
                                        variant: "primary",
                                        text: ei.intl.string(ei.t.zoztQA),
                                        onClick: () => (0, h.A)(el(r)),
                                    })
                                  : (0, i.jsx)(_.$nd, {
                                        variant: "primary",
                                        text: ei.intl.string(ei.t["jCqvk/"]),
                                        onClick: () => {
                                            null != t.sku &&
                                                null != l &&
                                                (K.default.track(
                                                    ee.HAw.PAYMENT_HISTORY_CONNECT_ACCOUNT_BUTTON_CLICKED,
                                                    { sku_id: t.sku.id, application_id: l.id, location_stack: a },
                                                ),
                                                (0, P.n)({ sku: t.sku, application: l, analyticsLocations: a }));
                                        },
                                    }),
                          }),
                      ],
                  });
    }
    renderAdditionalTenantInfo() {
        let { payment: e } = this.props;
        if ((0, L.bF)(e.sku)) return this.renderAdditionalGameItemDetails();
    }
    renderRefundDetails() {
        let e,
            { locale: t, payment: n } = this.props,
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
            a = el(t),
            o = this.isPremium ? 5 : 14;
        return (
            (e = l.includes("SKU_TYPE")
                ? ei.intl.format(ei.t["5lvoVS"], { supportURL: a })
                : r
                  ? n.isPremiumSubscription || n.isPremiumGuildSubscription
                      ? ei.intl.format(ei.t.EPYteX, { dateLimit: o, supportURL: a })
                      : n.isGift
                        ? ei.intl.format(ei.t["16eP/L"], { dateLimit: o, supportURL: a })
                        : ei.intl.format(ei.t["1LDI4J"], { dateLimit: o, playtimeLimit: 2, supportURL: a })
                  : n.isCollectible
                    ? ei.intl.string(ei.t.s9TZM1)
                    : n.isGift
                      ? ei.intl.formatToPlainString(ei.t.owlOWc, { dateLimit: o })
                      : n.isPremiumSubscription || n.isPremiumGuildSubscription
                        ? ei.intl.formatToPlainString(ei.t.dk7vyL, { dateLimit: o })
                        : ei.intl.formatToPlainString(ei.t.s4Kk0C, { dateLimit: o, playtimeLimit: 2 })),
            (0, i.jsxs)(s.Fragment, {
                children: [
                    (0, i.jsx)(x.H, { className: es.mW, children: ei.intl.string(ei.t["n/27pr"]) }),
                    (0, i.jsxs)("div", {
                        className: es.iL,
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
                className: es._Z,
                children: [
                    (0, i.jsx)(x.H, { className: es.ud, children: e }),
                    (0, i.jsxs)("div", {
                        className: es.z9,
                        children: [
                            (0, i.jsx)(t, { className: es.xb, color: "currentColor" }),
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
        let s = e.includes("PURCHASE_DATE") ? x.PGe : x.A9s;
        return (0, i.jsxs)("div", {
            className: es.My,
            children: [
                (0, i.jsx)("div", {
                    className: es.Kf,
                    children:
                        !n.isCollectible &&
                        this.renderRefundCriteria(
                            ei.intl.string(ei.t.H0RNz4),
                            s,
                            ei.intl.formatToPlainString(ei.t["7dtXa/"], { daysSincePurchase: this.daysSincePurchase }),
                        ),
                }),
                (0, i.jsx)(x.MzZ, { href: el(t), children: ei.intl.string(ei.t.re5nOB) }),
            ],
        });
    }
    renderDescription() {
        let e,
            t,
            { compactMode: n, payment: l, application: r, guild: a, stickerPack: d, plan: c } = this.props,
            { expanded: u } = this.state,
            m = l.sku,
            _ = l.subscription,
            h = null != l.paymentSource && ee.AD1.has(l.paymentSource.type);
        if (null != _ && 0 !== _.items.length) {
            let n = [],
                s = null;
            if (_.type === ee.rzx.PREMIUM)
                _.items.forEach((e) => {
                    let { planId: t, quantity: i } = e;
                    (0, q.xq)(t)
                        ? (n.push(q.Ay.getDisplayName(t, !1, h)), (s = (0, q.mH)(et.hd[t].skuId)))
                        : (n.push(`${i > 1 ? `${i}x ` : ""}${q.Ay.getDisplayName(t, !1, h)}`),
                          null == s && (s = (0, q.mH)(et.hd[t].skuId)));
                });
            else if (_.type === ee.rzx.GUILD) {
                if (null != c) {
                    let e = c.interval === et.WT.YEAR ? ei.t.V6UFQM : ei.t["6oq128"];
                    n.push(ei.intl.format(e, { planName: c.name })), (s = c.skuId);
                }
            } else
                _.type === ee.rzx.APPLICATION &&
                    (null != c && (s = c.skuId),
                    null != r
                        ? n.push(ei.intl.formatToPlainString(ei.t["0wL/VI"], { tier: m?.name }))
                        : n.push(ei.intl.string(ei.t["9czSYu"])));
            (t = 0 !== n.length ? n.join(", ") : l.description),
                (e = (0, i.jsx)(b.A, {
                    className: es.Sy,
                    guildClassName: es.zA,
                    game: r,
                    guild: a,
                    size: b.M.XSMALL,
                    skuId: s ?? m?.id,
                }));
        } else if (null != m)
            if (
                ((t = l.isGuildProductPurchase && l.isSoftDeletedProduct ? ei.intl.string(ei.t.O7uLmw) : m.name),
                null != d)
            ) {
                let t = (0, D.Id)(d);
                e = (0, i.jsx)(G.A, { disableAnimation: !u, isInteracting: u, sticker: t, className: es.Sy, size: 24 });
            } else
                e =
                    l.sku?.productLine === ee.EZt.COLLECTIBLES
                        ? (0, i.jsx)(x.U1X, {
                              size: "custom",
                              width: 23,
                              height: 23,
                              color: "currentColor",
                              className: es.sV,
                          })
                        : (0, i.jsx)(b.A, {
                              className: es.Sy,
                              guildClassName: es.zA,
                              game: r,
                              guild: a,
                              size: b.M.XSMALL,
                              skuId: m.id,
                          });
        else (e = (0, i.jsx)(x.tvc, { size: "md", color: "currentColor", className: es.Sy })), (t = l.description);
        let A = (0, i.jsx)(x.Text, {
                variant: "text-sm/normal",
                className: es.p6,
                children: (0, Z.i$)(o()(l.createdAt), "MM/DD/YYYY"),
            }),
            p = l.isGift
                ? (0, i.jsx)(g.m_, {
                      text: ei.intl.string(ei.t.QddTpm),
                      children: (0, i.jsx)(x.okO, { size: "md", color: "currentColor", className: es.ez }),
                  })
                : null;
        return n
            ? (0, i.jsxs)("div", { className: es.h_, children: [e, (0, i.jsxs)("div", { children: [t, A] }), p] })
            : (0, i.jsxs)(s.Fragment, {
                  children: [
                      A,
                      (0, i.jsxs)("div", { className: es.h_, children: [e, (0, i.jsx)("div", { children: t }), p] }),
                  ],
              });
    }
    renderGuildProductBenefits() {
        let { payment: e, application: t, locale: n } = this.props,
            s = t?.guildId;
        return e.isGuildProductPurchase
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)("div", { className: es.ts }),
                      e.isSoftDeletedProduct
                          ? (0, i.jsx)(x.po8, {
                                messageType: x.YCn.WARNING,
                                action: (0, i.jsx)(_.$nd, {
                                    variant: "overlay-secondary",
                                    text: ei.intl.string(ei.t.zoztQA),
                                    onClick: () => (0, h.A)(el(n)),
                                }),
                                children: ei.intl.string(ei.t["3AvulN"]),
                            })
                          : null != s &&
                            null != e.sku &&
                            (0, i.jsx)(eg, { guildId: s, guildProductListingId: e.sku.id }),
                  ],
              })
            : null;
    }
    renderExpandedSection() {
        return (0, i.jsx)(x.DUT, {
            onClick: (e) => e.stopPropagation(),
            children: (0, i.jsxs)("div", {
                className: es.WI,
                children: [
                    (0, i.jsx)(x.H, { className: es.mW, children: ei.intl.string(ei.t.nyzoFb) }),
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
        return (0, i.jsx)(d.tG, {
            id: e.id,
            children: (e) =>
                (0, i.jsxs)(x.DUT, {
                    onClick: this.handleExpandInfo,
                    "data-expanded": s,
                    className: r()(es.Ji, t, { [es.oE]: n }),
                    focusProps: { offset: 4 },
                    ...e,
                    children: [
                        (0, i.jsxs)(E.A, {
                            className: es.J7,
                            align: E.A.Align.CENTER,
                            "data-expanded": s,
                            children: [
                                this.renderDescription(),
                                (0, i.jsxs)("div", {
                                    className: es.vj,
                                    children: [this.renderStatus(), this.renderPrice()],
                                }),
                                (0, i.jsx)(X.A, {
                                    className: es.fT,
                                    direction: s ? X.A.Directions.UP : X.A.Directions.DOWN,
                                }),
                            ],
                        }),
                        s ? this.renderExpandedSection() : null,
                    ],
                }),
        });
    }
}
function ex(e) {
    let { payment: t, locale: n, compactMode: l, className: r } = e,
        a = null != t.sku && er.includes(t.sku.type),
        o = null != t.sku && a ? t.sku.applicationId : null,
        d = t.sku?.applicationId,
        c = t.subscription?.type === ee.rzx.APPLICATION,
        {
            applicationStatistics: u,
            gameApplication: g,
            paymentSources: _,
        } = (0, m.cf)([H.A, Y.A, f.A], () => ({
            applicationStatistics: null != o ? Y.A.getCurrentUserStatisticsForApplication(o) : null,
            gameApplication: f.A.getApplication(o ?? "") ?? t.sku?.application,
            paymentSources: H.A.paymentSources,
        })),
        { hasAlreadyLinked: x } = (0, T.RD)((0, L.bF)(t.sku) ? g : void 0),
        h = (0, m.bG)([f.A], () => (null != d ? f.A.getApplication(d) : null));
    s.useEffect(() => {
        c && null != d && (0, R.TA)(d);
    }, [d, c]);
    let S = (0, m.bG)([B.A], () => B.A.getGuild(g?.guildId)),
        E = a ? g : void 0,
        b = t.subscription,
        C = (0, m.bG)([z.A], () => (null != b && b.type !== ee.rzx.PREMIUM ? z.A.get(b.items[0].planId) : null)),
        v = (0, m.bG)([F.default], () => {
            let e = t.isGift ? t.entitlements?.find((e) => e.user?.id != null && null != e.gifterId) : null;
            return null == e ? null : (F.default.getUser(e.user?.id ?? null) ?? e?.user);
        }, [t]),
        { analyticsLocations: N } = (0, p.Ay)(A.A.BILLING_SETTINGS_BILLING);
    return (0, i.jsx)(e_, {
        applicationStatistics: u,
        application: c ? h : E,
        analyticsLocations: N,
        guild: S,
        stickerPack: null,
        paymentSources: _,
        locale: n,
        compactMode: l,
        className: r,
        payment: t,
        plan: C,
        claimedGiftUser: v,
        hasLinkedToApplication: x,
    });
}
