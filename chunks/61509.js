n.d(t, { A: () => ev }), n(938796), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(989349),
    o = n.n(r),
    d = n(837381),
    u = n(122817),
    c = n(665260),
    g = n(311907),
    m = n(990078),
    _ = n(821609),
    A = n(939249),
    h = n(289873),
    p = n(834730),
    x = n(707554),
    E = n(789645),
    T = n(933832),
    S = n(349288),
    f = n(34188),
    b = n(403581),
    C = n(597770),
    v = n(512950),
    N = n(975807),
    I = n(793574),
    y = n(688810),
    j = n(362490),
    O = n(587895),
    R = n(120385),
    L = n(235986),
    D = n(769015),
    P = n(250627),
    G = n(871109),
    M = n(571654),
    U = n(411342),
    k = n(179499),
    w = n(22007),
    V = n(95035),
    B = n(337095),
    F = n(871123),
    z = n(510022),
    H = n(378058),
    Y = n(148355),
    X = n(780964),
    K = n(779733),
    W = n(858897),
    Z = n(202613),
    q = n(317525),
    Q = n(71393),
    J = n(287809),
    $ = n(295405),
    ee = n(97352),
    et = n(90165),
    en = n(147925),
    ei = n(954571),
    es = n(957565),
    el = n(405269),
    ea = n(927578),
    er = n(580630),
    eo = n(427262),
    ed = n(219887),
    eu = n(652215),
    ec = n(788868),
    eg = n(818348),
    em = n(985018),
    e_ = n(600410);
let eA = (e) => `https://${eu.XlF}/hc/${e.toLowerCase()}/requests/new?ticket_form_id=360000118612`,
    eh = [eu.Puh.DURABLE_PRIMARY, eu.Puh.DURABLE, eu.Puh.CONSUMABLE],
    ep = [eu.__0.FAILED, eu.__0.REVERSED, eu.__0.CANCELED],
    ex = [eg.kM.APPLE],
    eE = (e) => {
        let { description: t, cost: n } = e;
        return (0, i.jsx)("li", {
            className: e_.mg,
            children: (0, i.jsxs)(L.A, {
                justify: L.A.Justify.BETWEEN,
                children: [(0, i.jsx)("div", { children: t }), (0, i.jsx)("div", { children: n })],
            }),
        });
    };
function eT(e) {
    let { value: t, copyText: n, copyFeedbackText: l } = e,
        [a, r] = s.useState(!1),
        [o, d] = s.useState(!1);
    return (0, i.jsx)(m.m, {
        forceOpen: o,
        text: a ? l : n,
        children: (0, i.jsx)(A.D, {
            onMouseEnter: () => {
                a && r(!1);
            },
            onMouseLeave: () => {
                d(!1);
            },
            onClick: () => {
                (0, es.C)(t, () => {
                    d(!0), r(!0);
                });
            },
            children: (0, i.jsx)("div", { className: e_.l9, children: t }),
        }),
    });
}
let eS = (e) => {
    let { description: t, detail: n } = e;
    return (0, i.jsx)("li", {
        className: e_.Iu,
        children: (0, i.jsxs)(L.A, {
            justify: L.A.Justify.BETWEEN,
            children: [(0, i.jsx)("div", { children: t }), (0, i.jsx)("div", { children: n })],
        }),
    });
};
function ef(e) {
    let { guildId: t, guildProductListingId: n } = e,
        l = (0, P.Qi)(t, n, { requireCurrentGuild: !1 }),
        a = (0, M.z)(l),
        r = (0, g.bG)([Q.A], () => Q.A.getGuild(t)),
        o = l?.role_id != null && l?.attachments_count === 0 ? em.intl.string(em.t.H11qcT) : a,
        d = s.useCallback(async () => {
            r?.features.has(eu.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE)
                ? await (0, w.A)(eu.BVt.GUILD_PRODUCT(t, n))
                : await (0, w.A)(eu.BVt.CHANNEL(t)),
                (0, K.default)();
        }, [r, t, n]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != o && (0, i.jsx)(eS, { description: em.intl.string(em.t.lXPbJb), detail: o }),
            null != r &&
                (0, i.jsx)(eS, {
                    description: em.intl.string(em.t.Wpn8z8),
                    detail: (0, i.jsx)(V.A, { onClick: d, children: r.name }),
                }),
        ],
    });
}
function eb(e) {
    let { guildId: t, guildProductListingId: n } = e,
        s = (0, P.Qi)(t, n, { requireCurrentGuild: !1 }),
        l = (0, g.bG)([G.A], () => G.A.getGuildProductFetchState(n) === G.e.FETCHING),
        a = s?.role_id,
        r = (0, g.bG)([q.A], () => (null != a ? q.A.getRole(t, a) : void 0), [t, a]),
        o = (0, k.A)({ guildId: t, productId: n }),
        d = (s?.attachments?.length ?? 0) > 0,
        u = null != r;
    return l
        ? (0, i.jsx)("div", { className: e_.hT, children: (0, i.jsx)(h.y, {}) })
        : null != s && (d || u)
          ? (0, i.jsxs)("div", {
                className: e_.hT,
                children: [
                    d &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(p.E, {
                                    variant: "text-xs/semibold",
                                    color: "text-default",
                                    className: e_.yE,
                                    children: em.intl.string(em.t.hxawoy),
                                }),
                                (0, i.jsx)(_.$, { ...o }),
                            ],
                        }),
                    u &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                d && (0, i.jsx)("div", { className: e_.yF }),
                                (0, i.jsx)(p.E, {
                                    variant: "text-xs/semibold",
                                    color: "text-default",
                                    className: e_.yE,
                                    children: em.intl.string(em.t.gWBNet),
                                }),
                                (0, i.jsx)(U.A, { role: r }),
                            ],
                        }),
                ],
            })
          : null;
}
class eC extends s.PureComponent {
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
                return null == e.sku || e.sku.type !== eu.Puh.CONSUMABLE;
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
                return !ep.includes(e.status);
            },
        },
        {
            rule: "PAYMENT_GATEWAY",
            canRefund: () => {
                let { payment: e } = this.props;
                return null == e.paymentGateway || !ex.includes(e.paymentGateway);
            },
        },
        {
            rule: "SKU_STICKER_PACK",
            canRefund: () => {
                let { payment: e } = this.props;
                return null == e.sku || !(0, c.Lt)(e.sku.flags, eu.d68.STICKER);
            },
        },
        {
            rule: "SUBSCRIPTION_TYPE",
            canRefund: () => {
                let { payment: e } = this.props;
                return e.subscription?.type !== eu.rzx.GUILD && e.subscription?.type !== eu.rzx.APPLICATION;
            },
        },
        {
            rule: "GUILD_PRODUCT",
            canRefund: () => {
                let { payment: e } = this.props;
                return null == e.sku || !(0, c.Lt)(e.sku.flags, u.d.GUILD_PRODUCT);
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
            case eu.__0.PENDING:
                return (0, i.jsx)("span", { className: e_.Xg, children: em.intl.string(em.t.y7F0Re) });
            case eu.__0.FAILED:
                return (0, i.jsx)("span", { className: e_.ob, children: em.intl.string(em.t.Yo4ru6) });
            case eu.__0.REFUNDED:
                if (e.amountRefunded !== e.amount)
                    return (0, i.jsx)("span", { className: e_.gD, children: em.intl.string(em.t.lYbZzz) });
                return (0, i.jsx)("span", { className: e_.gD, children: em.intl.string(em.t.ZBb6NK) });
            case eu.__0.REVERSED:
                return (0, i.jsx)("span", { className: e_.ob, children: em.intl.string(em.t.YQv9Li) });
            case eu.__0.CANCELED:
                return (0, i.jsx)("span", { className: e_.ob, children: em.intl.string(em.t.ttkBhy) });
            default:
                return null;
        }
    }
    renderTenantStatusOverride() {
        let { payment: e, hasLinkedToApplication: t } = this.props;
        return (0, F.bF)(e.sku) && e.status === eu.__0.COMPLETED
            ? null != e.entitlements && e.entitlements.some((e) => e.isFulfilled())
                ? (0, i.jsx)("span", { className: e_.gD, children: em.intl.string(em.t.Osji1u) })
                : e.isGift
                  ? null != e.entitlements && e.entitlements.some((e) => null != e.gifterId)
                      ? (0, i.jsx)("span", { className: e_.gD, children: em.intl.string(em.t.lIsIFo) })
                      : (0, i.jsx)("span", { className: e_.Tf, children: em.intl.string(em.t["+tqSi3"]) })
                  : t
                    ? (0, i.jsx)("span", { className: e_.Tf, children: em.intl.string(em.t.y7F0Re) })
                    : (0, i.jsx)("span", { className: e_.Tf, children: em.intl.string(em.t.HHC5Z4) })
            : null;
    }
    renderStatus() {
        return this.renderTenantStatusOverride() ?? this.renderDefaultStatus();
    }
    renderPrice() {
        let { payment: e } = this.props,
            t = e.amount - e.amountRefunded;
        return (0, i.jsx)("span", { className: e_.q9, children: (0, er.$g)(t, e.currency) });
    }
    renderPaymentIdField() {
        let { payment: e } = this.props;
        return (0, i.jsx)("li", {
            className: e_.mg,
            children: (0, i.jsxs)("div", {
                className: e_.bx,
                children: [
                    (0, i.jsx)("div", { children: em.intl.string(em.t["UQim+r"]) }),
                    (0, i.jsx)(eT, {
                        value: e.id,
                        copyText: em.intl.string(em.t["Mdk9+A"]),
                        copyFeedbackText: em.intl.string(em.t["7eIrA2"]),
                    }),
                ],
            }),
        });
    }
    renderPaymentBreakdown() {
        let { payment: e, locale: t, application: n } = this.props,
            { taxInclusive: l, tax: r, amount: o, amountRefunded: d, currency: u } = e,
            c = n?.guildId;
        return (0, i.jsxs)("div", {
            className: a()(e_.iL, e_.W),
            children: [
                null != e.paymentSource
                    ? (0, i.jsx)(ed.A, {
                          paymentSource: e.paymentSource,
                          locale: t,
                          descriptionClassName: e_.iL,
                          showLabels: !0,
                          showPaymentSourceIcon: !0,
                      })
                    : e.paymentGateway === eg.kM.APPLE_PARTNER
                      ? (0, i.jsx)(ed.A, {
                            paymentSource: new Z.Pw({}),
                            locale: t,
                            descriptionClassName: e_.iL,
                            showLabels: !0,
                            showPaymentSourceIcon: !0,
                        })
                      : null,
                (0, i.jsxs)("ul", {
                    children: [
                        this.renderPaymentIdField(),
                        !l && r > 0
                            ? (0, i.jsxs)(s.Fragment, {
                                  children: [
                                      (0, i.jsx)(eE, { description: e.description, cost: (0, er.$g)(o - r, u) }),
                                      (0, i.jsx)(eE, {
                                          description: em.intl.string(em.t.QgWXht),
                                          cost: (0, er.$g)(r, u),
                                      }),
                                  ],
                              })
                            : null,
                        (0, i.jsx)(eE, { description: em.intl.string(em.t.txajQG), cost: (0, er.$g)(o, u) }),
                        e.isGuildProductPurchase &&
                            null != c &&
                            null != e.sku &&
                            (0, i.jsx)(ef, { guildId: c, guildProductListingId: e.sku.id }),
                        d > 0 &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(eE, {
                                        description: em.intl.string(em.t["A+I0AP"]),
                                        cost: (0, er.$g)(d, u),
                                    }),
                                    (0, i.jsx)(eE, {
                                        description: em.intl.string(em.t.xER6Wi),
                                        cost: (0, er.$g)(o - d, u),
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
        return (0, i.jsx)(R.A, { payment: e });
    }
    renderAdditionalGameItemDetails() {
        let {
                claimedGiftUser: e,
                payment: t,
                hasLinkedToApplication: n,
                application: l,
                locale: a,
                analyticsLocations: r,
            } = this.props,
            o = t.entitlements?.some((e) => e.isFulfilled());
        return t.status === eu.__0.REFUNDED
            ? (0, i.jsxs)(s.Fragment, {
                  children: [
                      (0, i.jsx)(x.H, { className: e_.mW, children: em.intl.string(em.t["gIGB/A"]) }),
                      (0, i.jsx)("div", {
                          className: e_.iL,
                          children:
                              null != e
                                  ? em.intl.format(em.t.Q1K9eg, { username: eo.Ay.getName(e) })
                                  : em.intl.format(em.t.IBtGwC, { applicationName: l?.name }),
                      }),
                  ],
              })
            : t.isGift
              ? (0, i.jsxs)(s.Fragment, {
                    children: [
                        (0, i.jsx)(x.H, { className: e_.mW, children: em.intl.string(em.t["gIGB/A"]) }),
                        (0, i.jsx)("div", {
                            className: e_.iL,
                            children:
                                null != e
                                    ? em.intl.format(em.t.vfUW65, { username: eo.Ay.getName(e) })
                                    : em.intl.string(em.t["18wIqp"]),
                        }),
                        null == e &&
                            (0, i.jsx)("div", {
                                className: e_.TP,
                                children: (0, i.jsx)(_.$, {
                                    variant: "primary",
                                    text: em.intl.string(em.t["jcSP+g"]),
                                    onClick: () => (0, W.openUserSettings)(X.X.GIFT_PANEL),
                                }),
                            }),
                    ],
                })
              : o
                ? null
                : (0, i.jsxs)(s.Fragment, {
                      children: [
                          (0, i.jsx)(x.H, { className: e_.mW, children: em.intl.string(em.t["gIGB/A"]) }),
                          (0, i.jsx)("div", {
                              className: e_.iL,
                              children: n
                                  ? em.intl.format(em.t.DQQCAw, { applicationName: l?.name, skuName: t.sku?.name })
                                  : em.intl.format(em.t.ED2BqF, { applicationName: l?.name, skuName: t.sku?.name }),
                          }),
                          (0, i.jsx)("div", {
                              className: e_.TP,
                              children: n
                                  ? (0, i.jsx)(_.$, {
                                        variant: "primary",
                                        text: em.intl.string(em.t.zoztQA),
                                        onClick: () => (0, N.A)(eA(a)),
                                    })
                                  : (0, i.jsx)(_.$, {
                                        variant: "primary",
                                        text: em.intl.string(em.t["jCqvk/"]),
                                        onClick: () => {
                                            null != t.sku &&
                                                null != l &&
                                                (ei.default.track(
                                                    eu.HAw.PAYMENT_HISTORY_CONNECT_ACCOUNT_BUTTON_CLICKED,
                                                    { sku_id: t.sku.id, application_id: l.id, location_stack: r },
                                                ),
                                                (0, z.n)({ sku: t.sku, application: l, analyticsLocations: r }));
                                        },
                                    }),
                          }),
                      ],
                  });
    }
    renderAdditionalTenantInfo() {
        let { payment: e } = this.props;
        if ((0, F.bF)(e.sku)) return this.renderAdditionalGameItemDetails();
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
        let a = 0 === l.length,
            r = eA(t),
            o = this.isPremium ? 5 : 14;
        return (
            (e = l.includes("SKU_TYPE")
                ? em.intl.format(em.t["5lvoVS"], { supportURL: r })
                : a
                  ? n.isPremiumSubscription || n.isPremiumGuildSubscription
                      ? em.intl.format(em.t.EPYteX, { dateLimit: o, supportURL: r })
                      : n.isGift
                        ? em.intl.format(em.t["16eP/L"], { dateLimit: o, supportURL: r })
                        : em.intl.format(em.t["1LDI4J"], { dateLimit: o, playtimeLimit: 2, supportURL: r })
                  : n.isCollectible
                    ? em.intl.string(em.t.s9TZM1)
                    : n.isGift
                      ? em.intl.formatToPlainString(em.t.owlOWc, { dateLimit: o })
                      : n.isPremiumSubscription || n.isPremiumGuildSubscription
                        ? em.intl.formatToPlainString(em.t.dk7vyL, { dateLimit: o })
                        : em.intl.formatToPlainString(em.t.s4Kk0C, { dateLimit: o, playtimeLimit: 2 })),
            (0, i.jsxs)(s.Fragment, {
                children: [
                    (0, i.jsx)(x.H, { className: e_.mW, children: em.intl.string(em.t["n/27pr"]) }),
                    (0, i.jsxs)("div", {
                        className: e_.iL,
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
                className: e_._Z,
                children: [
                    (0, i.jsx)(x.H, { className: e_.ud, children: e }),
                    (0, i.jsxs)("div", {
                        className: e_.z9,
                        children: [
                            (0, i.jsx)(t, { className: e_.xb, color: "currentColor" }),
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
        let s = e.includes("PURCHASE_DATE") ? E.P : T.A;
        return (0, i.jsxs)("div", {
            className: e_.My,
            children: [
                (0, i.jsx)("div", {
                    className: e_.Kf,
                    children:
                        !n.isCollectible &&
                        this.renderRefundCriteria(
                            em.intl.string(em.t.H0RNz4),
                            s,
                            em.intl.formatToPlainString(em.t["7dtXa/"], { daysSincePurchase: this.daysSincePurchase }),
                        ),
                }),
                (0, i.jsx)(S.Anchor, { href: eA(t), children: em.intl.string(em.t.re5nOB) }),
            ],
        });
    }
    renderDescription() {
        let e,
            t,
            { compactMode: n, payment: l, application: a, guild: r, stickerPack: d, plan: u } = this.props,
            { expanded: c } = this.state,
            g = l.sku,
            _ = l.subscription,
            A = null != l.paymentSource && eu.AD1.has(l.paymentSource.type);
        if (null != _ && 0 !== _.items.length) {
            let n = [],
                s = null;
            if (_.type === eu.rzx.PREMIUM)
                _.items.forEach((e) => {
                    let { planId: t, quantity: i } = e;
                    (0, ea.xq)(t)
                        ? (n.push(ea.Ay.getDisplayName(t, !1, A)), (s = (0, ea.mH)(ec.hd[t].skuId)))
                        : (n.push(`${i > 1 ? `${i}x ` : ""}${ea.Ay.getDisplayName(t, !1, A)}`),
                          null == s && (s = (0, ea.mH)(ec.hd[t].skuId)));
                });
            else if (_.type === eu.rzx.GUILD) {
                if (null != u) {
                    let e = u.interval === ec.WT.YEAR ? em.t.V6UFQM : em.t["6oq128"];
                    n.push(em.intl.format(e, { planName: u.name })), (s = u.skuId);
                }
            } else
                _.type === eu.rzx.APPLICATION &&
                    (null != u && (s = u.skuId),
                    null != a
                        ? n.push(em.intl.formatToPlainString(em.t["0wL/VI"], { tier: g?.name }))
                        : n.push(em.intl.string(em.t["9czSYu"])));
            (t = 0 !== n.length ? n.join(", ") : l.description),
                (e = (0, i.jsx)(D.A, {
                    className: e_.Sy,
                    guildClassName: e_.zA,
                    game: a,
                    guild: r,
                    size: D.M.XSMALL,
                    skuId: s ?? g?.id,
                }));
        } else if (null != g)
            if (
                ((t = l.isGuildProductPurchase && l.isSoftDeletedProduct ? em.intl.string(em.t.O7uLmw) : g.name),
                null != d)
            ) {
                let t = (0, H.Id)(d);
                e = (0, i.jsx)(Y.A, { disableAnimation: !c, isInteracting: c, sticker: t, className: e_.Sy, size: 24 });
            } else
                e =
                    l.sku?.productLine === eu.EZt.COLLECTIBLES
                        ? (0, i.jsx)(f.U, {
                              size: "custom",
                              width: 23,
                              height: 23,
                              color: "currentColor",
                              className: e_.sV,
                          })
                        : (0, i.jsx)(D.A, {
                              className: e_.Sy,
                              guildClassName: e_.zA,
                              game: a,
                              guild: r,
                              size: D.M.XSMALL,
                              skuId: g.id,
                          });
        else (e = (0, i.jsx)(b.t, { size: "md", color: "currentColor", className: e_.Sy })), (t = l.description);
        let h = (0, i.jsx)(p.E, {
                variant: "text-sm/normal",
                className: e_.p6,
                children: (0, el.i$)(o()(l.createdAt), "MM/DD/YYYY"),
            }),
            x = l.isGift
                ? (0, i.jsx)(m.m, {
                      text: em.intl.string(em.t.QddTpm),
                      children: (0, i.jsx)(C.o, { size: "md", color: "currentColor", className: e_.ez }),
                  })
                : null;
        return n
            ? (0, i.jsxs)("div", { className: e_.h_, children: [e, (0, i.jsxs)("div", { children: [t, h] }), x] })
            : (0, i.jsxs)(s.Fragment, {
                  children: [
                      h,
                      (0, i.jsxs)("div", { className: e_.h_, children: [e, (0, i.jsx)("div", { children: t }), x] }),
                  ],
              });
    }
    renderGuildProductBenefits() {
        let { payment: e, application: t, locale: n } = this.props,
            s = t?.guildId;
        return e.isGuildProductPurchase
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)("div", { className: e_.ts }),
                      e.isSoftDeletedProduct
                          ? (0, i.jsx)(v.p, {
                                messageType: v.Y.WARNING,
                                action: (0, i.jsx)(_.$, {
                                    variant: "overlay-secondary",
                                    text: em.intl.string(em.t.zoztQA),
                                    onClick: () => (0, N.A)(eA(n)),
                                }),
                                children: em.intl.string(em.t["3AvulN"]),
                            })
                          : null != s &&
                            null != e.sku &&
                            (0, i.jsx)(eb, { guildId: s, guildProductListingId: e.sku.id }),
                  ],
              })
            : null;
    }
    renderExpandedSection() {
        return (0, i.jsx)(A.D, {
            onClick: (e) => e.stopPropagation(),
            children: (0, i.jsxs)("div", {
                className: e_.WI,
                children: [
                    (0, i.jsx)(x.H, { className: e_.mW, children: em.intl.string(em.t.nyzoFb) }),
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
                (0, i.jsxs)(A.D, {
                    onClick: this.handleExpandInfo,
                    "data-expanded": s,
                    className: a()(e_.Ji, t, { [e_.oE]: n }),
                    focusProps: { offset: 4 },
                    ...e,
                    children: [
                        (0, i.jsxs)(L.A, {
                            className: e_.J7,
                            align: L.A.Align.CENTER,
                            "data-expanded": s,
                            children: [
                                this.renderDescription(),
                                (0, i.jsxs)("div", {
                                    className: e_.vj,
                                    children: [this.renderStatus(), this.renderPrice()],
                                }),
                                (0, i.jsx)(en.A, {
                                    className: e_.fT,
                                    direction: s ? en.A.Directions.UP : en.A.Directions.DOWN,
                                }),
                            ],
                        }),
                        s ? this.renderExpandedSection() : null,
                    ],
                }),
        });
    }
}
function ev(e) {
    let { payment: t, locale: n, compactMode: l, className: a } = e,
        r = null != t.sku && eh.includes(t.sku.type),
        o = null != t.sku && r ? t.sku.applicationId : null,
        d = t.sku?.applicationId,
        u = t.subscription?.type === eu.rzx.APPLICATION,
        {
            applicationStatistics: c,
            gameApplication: m,
            paymentSources: _,
        } = (0, g.cf)([$.A, et.A, O.A], () => ({
            applicationStatistics: null != o ? et.A.getCurrentUserStatisticsForApplication(o) : null,
            gameApplication: O.A.getApplication(o ?? "") ?? t.sku?.application,
            paymentSources: $.A.paymentSources,
        })),
        { hasAlreadyLinked: A } = (0, j.RD)((0, F.bF)(t.sku) ? m : void 0),
        h = (0, g.bG)([O.A], () => (null != d ? O.A.getApplication(d) : null));
    s.useEffect(() => {
        u && null != d && (0, B.TA)(d);
    }, [d, u]);
    let p = (0, g.bG)([Q.A], () => Q.A.getGuild(m?.guildId)),
        x = r ? m : void 0,
        E = t.subscription,
        T = (0, g.bG)([ee.A], () => (null != E && E.type !== eu.rzx.PREMIUM ? ee.A.get(E.items[0].planId) : null)),
        S = (0, g.bG)([J.default], () => {
            let e = t.isGift ? t.entitlements?.find((e) => e.user?.id != null && null != e.gifterId) : null;
            return null == e ? null : (J.default.getUser(e.user?.id ?? null) ?? e?.user);
        }, [t]),
        { analyticsLocations: f } = (0, y.Ay)(I.A.BILLING_SETTINGS_BILLING);
    return (0, i.jsx)(eC, {
        applicationStatistics: c,
        application: u ? h : x,
        analyticsLocations: f,
        guild: p,
        stickerPack: null,
        paymentSources: _,
        locale: n,
        compactMode: l,
        className: a,
        payment: t,
        plan: T,
        claimedGiftUser: S,
        hasLinkedToApplication: A,
    });
}
