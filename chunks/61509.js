n.d(t, { A: () => eg }), n(938796), n(321073);
var i = n(627968),
    s = n(64700),
    r = n(503698),
    a = n.n(r),
    l = n(989349),
    o = n.n(l),
    c = n(837381),
    d = n(122817),
    u = n(665260),
    _ = n(311907),
    m = n(435371),
    A = n(732955),
    g = n(397927),
    E = n(975807),
    h = n(793574),
    p = n(688810),
    C = n(362490),
    x = n(587895),
    T = n(120385),
    I = n(235986),
    S = n(769015),
    f = n(250627),
    N = n(871109),
    b = n(571654),
    R = n(411342),
    v = n(179499),
    O = n(22007),
    j = n(95035),
    P = n(337095),
    y = n(871123),
    L = n(510022),
    D = n(378058),
    M = n(148355),
    G = n(780964),
    U = n(12901),
    k = n(840065),
    B = n(202613),
    w = n(317525),
    H = n(71393),
    V = n(287809),
    F = n(295405),
    Y = n(97352),
    W = n(90165),
    z = n(147925),
    K = n(954571),
    Z = n(957565),
    X = n(405269),
    q = n(927578),
    J = n(580630),
    Q = n(427262),
    $ = n(219887),
    ee = n(652215),
    et = n(788868),
    en = n(818348),
    ei = n(985018),
    es = n(124953);
let er = (e) => `https://${ee.XlF}/hc/${e.toLowerCase()}/requests/new?ticket_form_id=360000118612`,
    ea = [ee.Puh.DURABLE_PRIMARY, ee.Puh.DURABLE, ee.Puh.CONSUMABLE],
    el = [ee.__0.FAILED, ee.__0.REVERSED, ee.__0.CANCELED],
    eo = [en.kM.APPLE],
    ec = (e) => {
        let { description: t, cost: n } = e;
        return (0, i.jsx)("li", {
            className: es.mg,
            children: (0, i.jsxs)(I.A, {
                justify: I.A.Justify.BETWEEN,
                children: [(0, i.jsx)("div", { children: t }), (0, i.jsx)("div", { children: n })],
            }),
        });
    };
function ed(e) {
    let { value: t, copyText: n, copyFeedbackText: r } = e,
        [a, l] = s.useState(!1),
        [o, c] = s.useState(!1);
    return (0, i.jsx)(m.m_, {
        forceOpen: o,
        text: a ? r : n,
        children: (0, i.jsx)(g.DUT, {
            onMouseEnter: () => {
                a && l(!1);
            },
            onMouseLeave: () => {
                c(!1);
            },
            onClick: () => {
                (0, Z.C)(t, () => {
                    c(!0), l(!0);
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
        children: (0, i.jsxs)(I.A, {
            justify: I.A.Justify.BETWEEN,
            children: [(0, i.jsx)("div", { children: t }), (0, i.jsx)("div", { children: n })],
        }),
    });
};
function e_(e) {
    let { guildId: t, guildProductListingId: n } = e,
        r = (0, f.Qi)(t, n, { requireCurrentGuild: !1 }),
        a = (0, b.z)(r),
        l = (0, _.bG)([H.A], () => H.A.getGuild(t)),
        o = r?.role_id != null && r?.attachments_count === 0 ? ei.intl.string(ei.t.H11qcT) : a,
        c = s.useCallback(async () => {
            l?.features.has(ee.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE)
                ? await (0, O.A)(ee.BVt.GUILD_PRODUCT(t, n))
                : await (0, O.A)(ee.BVt.CHANNEL(t)),
                (0, U.default)();
        }, [l, t, n]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != o && (0, i.jsx)(eu, { description: ei.intl.string(ei.t.lXPbJb), detail: o }),
            null != l &&
                (0, i.jsx)(eu, {
                    description: ei.intl.string(ei.t.Wpn8z8),
                    detail: (0, i.jsx)(j.A, { onClick: c, children: l.name }),
                }),
        ],
    });
}
function em(e) {
    let { guildId: t, guildProductListingId: n } = e,
        s = (0, f.Qi)(t, n, { requireCurrentGuild: !1 }),
        r = (0, _.bG)([N.A], () => N.A.getGuildProductFetchState(n) === N.e.FETCHING),
        a = s?.role_id,
        l = (0, _.bG)([w.A], () => (null != a ? w.A.getRole(t, a) : void 0), [t, a]),
        o = (0, v.A)({ guildId: t, productId: n }),
        c = (s?.attachments?.length ?? 0) > 0,
        d = null != l;
    return r
        ? (0, i.jsx)("div", { className: es.hT, children: (0, i.jsx)(g.y$y, {}) })
        : null != s && (c || d)
          ? (0, i.jsxs)("div", {
                className: es.hT,
                children: [
                    c &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(g.Text, {
                                    variant: "text-xs/semibold",
                                    color: "text-default",
                                    className: es.yE,
                                    children: ei.intl.string(ei.t.hxawoy),
                                }),
                                (0, i.jsx)(A.$nd, { ...o }),
                            ],
                        }),
                    d &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                c && (0, i.jsx)("div", { className: es.yF }),
                                (0, i.jsx)(g.Text, {
                                    variant: "text-xs/semibold",
                                    color: "text-default",
                                    className: es.yE,
                                    children: ei.intl.string(ei.t.gWBNet),
                                }),
                                (0, i.jsx)(R.A, { role: l }),
                            ],
                        }),
                ],
            })
          : null;
}
class eA extends s.PureComponent {
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
                return !el.includes(e.status);
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
                return null == e.sku || !(0, u.Lt)(e.sku.flags, d.d.GUILD_PRODUCT);
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
        return (0, y.bF)(e.sku) && e.status === ee.__0.COMPLETED
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
        return (0, i.jsx)("span", { className: es.q9, children: (0, J.$g)(t, e.currency) });
    }
    renderPaymentIdField() {
        let { payment: e } = this.props;
        return (0, i.jsx)("li", {
            className: es.mg,
            children: (0, i.jsxs)("div", {
                className: es.bx,
                children: [
                    (0, i.jsx)("div", { children: ei.intl.string(ei.t["UQim+r"]) }),
                    (0, i.jsx)(ed, {
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
            { taxInclusive: r, tax: l, amount: o, amountRefunded: c, currency: d } = e,
            u = n?.guildId;
        return (0, i.jsxs)("div", {
            className: a()(es.iL, es.W),
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
                            paymentSource: new B.Pw({}),
                            locale: t,
                            descriptionClassName: es.iL,
                            showLabels: !0,
                            showPaymentSourceIcon: !0,
                        })
                      : null,
                (0, i.jsxs)("ul", {
                    children: [
                        this.renderPaymentIdField(),
                        !r && l > 0
                            ? (0, i.jsxs)(s.Fragment, {
                                  children: [
                                      (0, i.jsx)(ec, { description: e.description, cost: (0, J.$g)(o - l, d) }),
                                      (0, i.jsx)(ec, {
                                          description: ei.intl.string(ei.t.QgWXht),
                                          cost: (0, J.$g)(l, d),
                                      }),
                                  ],
                              })
                            : null,
                        (0, i.jsx)(ec, { description: ei.intl.string(ei.t.txajQG), cost: (0, J.$g)(o, d) }),
                        e.isGuildProductPurchase &&
                            null != u &&
                            null != e.sku &&
                            (0, i.jsx)(e_, { guildId: u, guildProductListingId: e.sku.id }),
                        c > 0 &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(ec, {
                                        description: ei.intl.string(ei.t["A+I0AP"]),
                                        cost: (0, J.$g)(c, d),
                                    }),
                                    (0, i.jsx)(ec, {
                                        description: ei.intl.string(ei.t.xER6Wi),
                                        cost: (0, J.$g)(o - c, d),
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
        return (0, i.jsx)(T.A, { payment: e });
    }
    renderAdditionalGameItemDetails() {
        let {
                claimedGiftUser: e,
                payment: t,
                hasLinkedToApplication: n,
                application: r,
                locale: a,
                analyticsLocations: l,
            } = this.props,
            o = t.entitlements?.some((e) => e.isFulfilled());
        return t.status === ee.__0.REFUNDED
            ? (0, i.jsxs)(s.Fragment, {
                  children: [
                      (0, i.jsx)(g.H, { className: es.mW, children: ei.intl.string(ei.t["gIGB/A"]) }),
                      (0, i.jsx)("div", {
                          className: es.iL,
                          children:
                              null != e
                                  ? ei.intl.format(ei.t.Q1K9eg, { username: Q.Ay.getName(e) })
                                  : ei.intl.format(ei.t.IBtGwC, { applicationName: r?.name }),
                      }),
                  ],
              })
            : t.isGift
              ? (0, i.jsxs)(s.Fragment, {
                    children: [
                        (0, i.jsx)(g.H, { className: es.mW, children: ei.intl.string(ei.t["gIGB/A"]) }),
                        (0, i.jsx)("div", {
                            className: es.iL,
                            children:
                                null != e
                                    ? ei.intl.format(ei.t.vfUW65, { username: Q.Ay.getName(e) })
                                    : ei.intl.string(ei.t["18wIqp"]),
                        }),
                        null == e &&
                            (0, i.jsx)("div", {
                                className: es.TP,
                                children: (0, i.jsx)(A.$nd, {
                                    variant: "primary",
                                    text: ei.intl.string(ei.t["jcSP+g"]),
                                    onClick: () =>
                                        (0, k.openUserSettings)(G.X.GIFT_PANEL, { section: ee.nc_.INVENTORY }),
                                }),
                            }),
                    ],
                })
              : o
                ? null
                : (0, i.jsxs)(s.Fragment, {
                      children: [
                          (0, i.jsx)(g.H, { className: es.mW, children: ei.intl.string(ei.t["gIGB/A"]) }),
                          (0, i.jsx)("div", {
                              className: es.iL,
                              children: n
                                  ? ei.intl.format(ei.t.DQQCAw, { applicationName: r?.name, skuName: t.sku?.name })
                                  : ei.intl.format(ei.t.ED2BqF, { applicationName: r?.name, skuName: t.sku?.name }),
                          }),
                          (0, i.jsx)("div", {
                              className: es.TP,
                              children: n
                                  ? (0, i.jsx)(A.$nd, {
                                        variant: "primary",
                                        text: ei.intl.string(ei.t.zoztQA),
                                        onClick: () => (0, E.A)(er(a)),
                                    })
                                  : (0, i.jsx)(A.$nd, {
                                        variant: "primary",
                                        text: ei.intl.string(ei.t["jCqvk/"]),
                                        onClick: () => {
                                            null != t.sku &&
                                                null != r &&
                                                (K.default.track(
                                                    ee.HAw.PAYMENT_HISTORY_CONNECT_ACCOUNT_BUTTON_CLICKED,
                                                    { sku_id: t.sku.id, application_id: r.id, location_stack: l },
                                                ),
                                                (0, L.n)({ sku: t.sku, application: r, analyticsLocations: l }));
                                        },
                                    }),
                          }),
                      ],
                  });
    }
    renderAdditionalTenantInfo() {
        let { payment: e } = this.props;
        if ((0, y.bF)(e.sku)) return this.renderAdditionalGameItemDetails();
    }
    renderRefundDetails() {
        let e,
            { locale: t, payment: n } = this.props,
            r = this.validateRefundRules();
        if (
            r.includes("PAYMENT_GATEWAY") ||
            r.includes("PAYMENT_STATUS") ||
            r.includes("ALREADY_REFUNDED") ||
            r.includes("SKU_STICKER_PACK") ||
            r.includes("SUBSCRIPTION_TYPE") ||
            r.includes("GUILD_PRODUCT")
        )
            return null;
        let a = 0 === r.length,
            l = er(t),
            o = this.isPremium ? 5 : 14;
        return (
            (e = r.includes("SKU_TYPE")
                ? ei.intl.format(ei.t["5lvoVS"], { supportURL: l })
                : a
                  ? n.isPremiumSubscription || n.isPremiumGuildSubscription
                      ? ei.intl.format(ei.t.EPYteX, { dateLimit: o, supportURL: l })
                      : n.isGift
                        ? ei.intl.format(ei.t["16eP/L"], { dateLimit: o, supportURL: l })
                        : ei.intl.format(ei.t["1LDI4J"], { dateLimit: o, playtimeLimit: 2, supportURL: l })
                  : n.isCollectible
                    ? ei.intl.string(ei.t.s9TZM1)
                    : n.isGift
                      ? ei.intl.formatToPlainString(ei.t.owlOWc, { dateLimit: o })
                      : n.isPremiumSubscription || n.isPremiumGuildSubscription
                        ? ei.intl.formatToPlainString(ei.t.dk7vyL, { dateLimit: o })
                        : ei.intl.formatToPlainString(ei.t.s4Kk0C, { dateLimit: o, playtimeLimit: 2 })),
            (0, i.jsxs)(s.Fragment, {
                children: [
                    (0, i.jsx)(g.H, { className: es.mW, children: ei.intl.string(ei.t["n/27pr"]) }),
                    (0, i.jsxs)("div", {
                        className: es.iL,
                        children: [(0, i.jsx)("div", { children: e }), this.renderRefundActions(r)],
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
                    (0, i.jsx)(g.H, { className: es.ud, children: e }),
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
        let s = e.includes("PURCHASE_DATE") ? g.PGe : g.A9s;
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
                (0, i.jsx)(g.MzZ, { href: er(t), children: ei.intl.string(ei.t.re5nOB) }),
            ],
        });
    }
    renderDescription() {
        let e,
            t,
            { compactMode: n, payment: r, application: a, guild: l, stickerPack: c, plan: d } = this.props,
            { expanded: u } = this.state,
            _ = r.sku,
            A = r.subscription,
            E = null != r.paymentSource && ee.AD1.has(r.paymentSource.type);
        if (null != A && 0 !== A.items.length) {
            let n = [],
                s = null;
            if (A.type === ee.rzx.PREMIUM)
                A.items.forEach((e) => {
                    let { planId: t, quantity: i } = e;
                    (0, q.xq)(t)
                        ? (n.push(q.Ay.getDisplayName(t, !1, E)), (s = (0, q.mH)(et.hd[t].skuId)))
                        : (n.push(`${i > 1 ? `${i}x ` : ""}${q.Ay.getDisplayName(t, !1, E)}`),
                          null == s && (s = (0, q.mH)(et.hd[t].skuId)));
                });
            else if (A.type === ee.rzx.GUILD) {
                if (null != d) {
                    let e = d.interval === et.WT.YEAR ? ei.t.V6UFQM : ei.t["6oq128"];
                    n.push(ei.intl.format(e, { planName: d.name })), (s = d.skuId);
                }
            } else
                A.type === ee.rzx.APPLICATION &&
                    (null != d && (s = d.skuId),
                    null != a
                        ? n.push(ei.intl.formatToPlainString(ei.t["0wL/VI"], { tier: _?.name }))
                        : n.push(ei.intl.string(ei.t["9czSYu"])));
            (t = 0 !== n.length ? n.join(", ") : r.description),
                (e = (0, i.jsx)(S.A, {
                    className: es.Sy,
                    guildClassName: es.zA,
                    game: a,
                    guild: l,
                    size: S.M.XSMALL,
                    skuId: s ?? _?.id,
                }));
        } else if (null != _)
            if (
                ((t = r.isGuildProductPurchase && r.isSoftDeletedProduct ? ei.intl.string(ei.t.O7uLmw) : _.name),
                null != c)
            ) {
                let t = (0, D.Id)(c);
                e = (0, i.jsx)(M.A, { disableAnimation: !u, isInteracting: u, sticker: t, className: es.Sy, size: 24 });
            } else
                e =
                    r.sku?.productLine === ee.EZt.COLLECTIBLES
                        ? (0, i.jsx)(g.U1X, {
                              size: "custom",
                              width: 23,
                              height: 23,
                              color: "currentColor",
                              className: es.sV,
                          })
                        : (0, i.jsx)(S.A, {
                              className: es.Sy,
                              guildClassName: es.zA,
                              game: a,
                              guild: l,
                              size: S.M.XSMALL,
                              skuId: _.id,
                          });
        else (e = (0, i.jsx)(g.tvc, { size: "md", color: "currentColor", className: es.Sy })), (t = r.description);
        let h = (0, i.jsx)(g.Text, {
                variant: "text-sm/normal",
                className: es.p6,
                children: (0, X.i$)(o()(r.createdAt), "MM/DD/YYYY"),
            }),
            p = r.isGift
                ? (0, i.jsx)(m.m_, {
                      text: ei.intl.string(ei.t.QddTpm),
                      children: (0, i.jsx)(g.okO, { size: "md", color: "currentColor", className: es.ez }),
                  })
                : null;
        return n
            ? (0, i.jsxs)("div", { className: es.h_, children: [e, (0, i.jsxs)("div", { children: [t, h] }), p] })
            : (0, i.jsxs)(s.Fragment, {
                  children: [
                      h,
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
                          ? (0, i.jsx)(g.po8, {
                                messageType: g.YCn.WARNING,
                                action: (0, i.jsx)(A.$nd, {
                                    variant: "overlay-secondary",
                                    text: ei.intl.string(ei.t.zoztQA),
                                    onClick: () => (0, E.A)(er(n)),
                                }),
                                children: ei.intl.string(ei.t["3AvulN"]),
                            })
                          : null != s &&
                            null != e.sku &&
                            (0, i.jsx)(em, { guildId: s, guildProductListingId: e.sku.id }),
                  ],
              })
            : null;
    }
    renderExpandedSection() {
        return (0, i.jsx)(g.DUT, {
            onClick: (e) => e.stopPropagation(),
            children: (0, i.jsxs)("div", {
                className: es.WI,
                children: [
                    (0, i.jsx)(g.H, { className: es.mW, children: ei.intl.string(ei.t.nyzoFb) }),
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
        return (0, i.jsx)(c.tG, {
            id: e.id,
            children: (e) =>
                (0, i.jsxs)(g.DUT, {
                    onClick: this.handleExpandInfo,
                    "data-expanded": s,
                    className: a()(es.Ji, t, { [es.oE]: n }),
                    focusProps: { offset: 4 },
                    ...e,
                    children: [
                        (0, i.jsxs)(I.A, {
                            className: es.J7,
                            align: I.A.Align.CENTER,
                            "data-expanded": s,
                            children: [
                                this.renderDescription(),
                                (0, i.jsxs)("div", {
                                    className: es.vj,
                                    children: [this.renderStatus(), this.renderPrice()],
                                }),
                                (0, i.jsx)(z.A, {
                                    className: es.fT,
                                    direction: s ? z.A.Directions.UP : z.A.Directions.DOWN,
                                }),
                            ],
                        }),
                        s ? this.renderExpandedSection() : null,
                    ],
                }),
        });
    }
}
function eg(e) {
    let { payment: t, locale: n, compactMode: r, className: a } = e,
        l = null != t.sku && ea.includes(t.sku.type),
        o = null != t.sku && l ? t.sku.applicationId : null,
        c = t.sku?.applicationId,
        d = t.subscription?.type === ee.rzx.APPLICATION,
        {
            applicationStatistics: u,
            gameApplication: m,
            paymentSources: A,
        } = (0, _.cf)([F.A, W.A, x.A], () => ({
            applicationStatistics: null != o ? W.A.getCurrentUserStatisticsForApplication(o) : null,
            gameApplication: x.A.getApplication(o ?? "") ?? t.sku?.application,
            paymentSources: F.A.paymentSources,
        })),
        { hasAlreadyLinked: g } = (0, C.RD)((0, y.bF)(t.sku) ? m : void 0),
        E = (0, _.bG)([x.A], () => (null != c ? x.A.getApplication(c) : null));
    s.useEffect(() => {
        d && null != c && (0, P.TA)(c);
    }, [c, d]);
    let T = (0, _.bG)([H.A], () => H.A.getGuild(m?.guildId)),
        I = l ? m : void 0,
        S = t.subscription,
        f = (0, _.bG)([Y.A], () => (null != S && S.type !== ee.rzx.PREMIUM ? Y.A.get(S.items[0].planId) : null)),
        N = (0, _.bG)([V.default], () => {
            let e = t.isGift ? t.entitlements?.find((e) => e.user?.id != null && null != e.gifterId) : null;
            return null == e ? null : (V.default.getUser(e.user?.id ?? null) ?? e?.user);
        }, [t]),
        { analyticsLocations: b } = (0, p.Ay)(h.A.BILLING_SETTINGS_BILLING);
    return (0, i.jsx)(eA, {
        applicationStatistics: u,
        application: d ? E : I,
        analyticsLocations: b,
        guild: T,
        stickerPack: null,
        paymentSources: A,
        locale: n,
        compactMode: r,
        className: a,
        payment: t,
        plan: f,
        claimedGiftUser: N,
        hasLinkedToApplication: g,
    });
}
