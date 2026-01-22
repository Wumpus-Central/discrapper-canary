n.d(t, { A: () => eS }), n(228524), n(896048), n(321073), n(938796);
var r,
    i = n(627968),
    a = n(64700),
    s = n(503698),
    o = n.n(s),
    l = n(989349),
    c = n.n(l),
    u = n(837381),
    d = n(122817),
    f = n(665260),
    p = n(311907),
    _ = n(435371),
    h = n(732955),
    m = n(397927),
    g = n(975807),
    E = n(793574),
    b = n(688810),
    y = n(362490),
    O = n(587895),
    A = n(120385),
    v = n(235986),
    S = n(769015),
    I = n(250627),
    T = n(871109),
    C = n(571654),
    N = n(411342),
    R = n(179499),
    w = n(22007),
    P = n(95035),
    D = n(337095),
    x = n(871123),
    L = n(510022),
    j = n(378058),
    M = n(148355),
    k = n(780964),
    U = n(12901),
    G = n(840065),
    V = n(202613),
    F = n(317525),
    B = n(71393),
    H = n(287809),
    Y = n(295405),
    W = n(97352),
    K = n(90165),
    z = n(147925),
    q = n(954571),
    X = n(957565),
    Z = n(405269),
    Q = n(927578),
    $ = n(580630),
    J = n(427262),
    ee = n(219887),
    et = n(652215),
    en = n(788868),
    er = n(818348),
    ei = n(985018),
    ea = n(124953);
function es(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function eo(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                es(e, t, n[t]);
            });
    }
    return e;
}
function el(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function ec(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : el(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let eu = 14,
    ed = 5,
    ef = 2,
    ep = (e) => "https://".concat(et.XlF, "/hc/").concat(e.toLowerCase(), "/requests/new?ticket_form_id=360000118612"),
    e_ = 24,
    eh = [et.Puh.DURABLE_PRIMARY, et.Puh.DURABLE, et.Puh.CONSUMABLE],
    em = [et.__0.FAILED, et.__0.REVERSED, et.__0.CANCELED],
    eg = [er.kM.APPLE],
    eE = (e) => {
        let { description: t, cost: n } = e;
        return (0, i.jsx)("li", {
            className: ea.mg,
            children: (0, i.jsxs)(v.A, {
                justify: v.A.Justify.BETWEEN,
                children: [(0, i.jsx)("div", { children: t }), (0, i.jsx)("div", { children: n })],
            }),
        });
    };
function eb(e) {
    let { value: t, copyText: n, copyFeedbackText: r } = e,
        [s, o] = a.useState(!1),
        [l, c] = a.useState(!1),
        u = () => {
            (0, X.C)(t, () => {
                c(!0), o(!0);
            });
        };
    return (0, i.jsx)(_.m_, {
        forceOpen: l,
        text: s ? r : n,
        children: (0, i.jsx)(m.DUT, {
            onMouseEnter: () => {
                s && o(!1);
            },
            onMouseLeave: () => {
                c(!1);
            },
            onClick: u,
            children: (0, i.jsx)("div", {
                className: ea.l9,
                children: t,
            }),
        }),
    });
}
let ey = (e) => {
    let { description: t, detail: n } = e;
    return (0, i.jsx)("li", {
        className: ea.Iu,
        children: (0, i.jsxs)(v.A, {
            justify: v.A.Justify.BETWEEN,
            children: [(0, i.jsx)("div", { children: t }), (0, i.jsx)("div", { children: n })],
        }),
    });
};
function eO(e) {
    let { guildId: t, guildProductListingId: n } = e,
        r = (0, I.Qi)(t, n, { requireCurrentGuild: !1 }),
        s = (0, C.z)(r),
        o = (0, p.bG)([B.A], () => B.A.getGuild(t)),
        l =
            (null == r ? void 0 : r.role_id) != null && (null == r ? void 0 : r.attachments_count) === 0
                ? ei.intl.string(ei.t.H11qcT)
                : s,
        c = a.useCallback(async () => {
            (null == o ? void 0 : o.features.has(et.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE))
                ? await (0, w.A)(et.BVt.GUILD_PRODUCT(t, n))
                : await (0, w.A)(et.BVt.CHANNEL(t)),
                (0, U.default)();
        }, [o, t, n]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != l &&
                (0, i.jsx)(ey, {
                    description: ei.intl.string(ei.t.lXPbJb),
                    detail: l,
                }),
            null != o &&
                (0, i.jsx)(ey, {
                    description: ei.intl.string(ei.t.Wpn8z8),
                    detail: (0, i.jsx)(P.A, {
                        onClick: c,
                        children: o.name,
                    }),
                }),
        ],
    });
}
function eA(e) {
    var t, n;
    let { guildId: r, guildProductListingId: a } = e,
        s = (0, I.Qi)(r, a, { requireCurrentGuild: !1 }),
        o = (0, p.bG)([T.A], () => T.A.getGuildProductFetchState(a) === T.e.FETCHING),
        l = null == s ? void 0 : s.role_id,
        c = (0, p.bG)([F.A], () => (null != l ? F.A.getRole(r, l) : void 0), [r, l]),
        u = (0, R.A)({
            guildId: r,
            productId: a,
        }),
        d = (null != (t = null == s || null == (n = s.attachments) ? void 0 : n.length) ? t : 0) > 0,
        f = null != c;
    return o
        ? (0, i.jsx)("div", {
              className: ea.hT,
              children: (0, i.jsx)(m.y$y, {}),
          })
        : null != s && (d || f)
          ? (0, i.jsxs)("div", {
                className: ea.hT,
                children: [
                    d &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(m.Text, {
                                    variant: "text-xs/semibold",
                                    color: "text-default",
                                    className: ea.yE,
                                    children: ei.intl.string(ei.t.hxawoy),
                                }),
                                (0, i.jsx)(h.$nd, eo({}, u)),
                            ],
                        }),
                    f &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                d && (0, i.jsx)("div", { className: ea.yF }),
                                (0, i.jsx)(m.Text, {
                                    variant: "text-xs/semibold",
                                    color: "text-default",
                                    className: ea.yE,
                                    children: ei.intl.string(ei.t.gWBNet),
                                }),
                                (0, i.jsx)(N.A, { role: c }),
                            ],
                        }),
                ],
            })
          : null;
}
class ev extends (r = a.PureComponent) {
    get daysSincePurchase() {
        let { payment: e } = this.props,
            t = null != e.sku ? e.sku.releaseDate : null,
            n = null != t && t.isAfter(e.createdAt) ? t : e.createdAt;
        return c()().diff(n, "days");
    }
    get isPremium() {
        let { payment: e } = this.props;
        return e.isPremiumSubscription || e.isPremiumGuildSubscription || e.isPremiumGift;
    }
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
            case et.__0.PENDING:
                return (0, i.jsx)("span", {
                    className: ea.Xg,
                    children: ei.intl.string(ei.t.y7F0Re),
                });
            case et.__0.FAILED:
                return (0, i.jsx)("span", {
                    className: ea.ob,
                    children: ei.intl.string(ei.t.Yo4ru6),
                });
            case et.__0.REFUNDED:
                if (e.amountRefunded !== e.amount)
                    return (0, i.jsx)("span", {
                        className: ea.gD,
                        children: ei.intl.string(ei.t.lYbZzz),
                    });
                return (0, i.jsx)("span", {
                    className: ea.gD,
                    children: ei.intl.string(ei.t.ZBb6NK),
                });
            case et.__0.REVERSED:
                return (0, i.jsx)("span", {
                    className: ea.ob,
                    children: ei.intl.string(ei.t.YQv9Li),
                });
            case et.__0.CANCELED:
                return (0, i.jsx)("span", {
                    className: ea.ob,
                    children: ei.intl.string(ei.t.ttkBhy),
                });
            default:
                return null;
        }
    }
    renderTenantStatusOverride() {
        let { payment: e, hasLinkedToApplication: t } = this.props;
        return (0, x.bF)(e.sku) && e.status === et.__0.COMPLETED
            ? null != e.entitlements && e.entitlements.some((e) => e.isFulfilled())
                ? (0, i.jsx)("span", {
                      className: ea.gD,
                      children: ei.intl.string(ei.t.Osji1u),
                  })
                : e.isGift
                  ? null != e.entitlements && e.entitlements.some((e) => null != e.gifterId)
                      ? (0, i.jsx)("span", {
                            className: ea.gD,
                            children: ei.intl.string(ei.t.lIsIFo),
                        })
                      : (0, i.jsx)("span", {
                            className: ea.Tf,
                            children: ei.intl.string(ei.t["+tqSi3"]),
                        })
                  : t
                    ? (0, i.jsx)("span", {
                          className: ea.Tf,
                          children: ei.intl.string(ei.t.y7F0Re),
                      })
                    : (0, i.jsx)("span", {
                          className: ea.Tf,
                          children: ei.intl.string(ei.t.HHC5Z4),
                      })
            : null;
    }
    renderStatus() {
        var e;
        return null != (e = this.renderTenantStatusOverride()) ? e : this.renderDefaultStatus();
    }
    renderPrice() {
        let { payment: e } = this.props,
            t = e.amount - e.amountRefunded;
        return (0, i.jsx)("span", {
            className: ea.q9,
            children: (0, $.$g)(t, e.currency),
        });
    }
    renderPaymentIdField() {
        let { payment: e } = this.props;
        return (0, i.jsx)("li", {
            className: ea.mg,
            children: (0, i.jsxs)("div", {
                className: ea.bx,
                children: [
                    (0, i.jsx)("div", { children: ei.intl.string(ei.t["UQim+r"]) }),
                    (0, i.jsx)(eb, {
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
            { taxInclusive: r, tax: s, amount: l, amountRefunded: c, currency: u } = e,
            d = null == n ? void 0 : n.guildId;
        return (0, i.jsxs)("div", {
            className: o()(ea.iL, ea.W),
            children: [
                null != e.paymentSource
                    ? (0, i.jsx)(ee.A, {
                          paymentSource: e.paymentSource,
                          locale: t,
                          descriptionClassName: ea.iL,
                          showLabels: !0,
                          showPaymentSourceIcon: !0,
                      })
                    : e.paymentGateway === er.kM.APPLE_PARTNER
                      ? (0, i.jsx)(ee.A, {
                            paymentSource: new V.Pw({}),
                            locale: t,
                            descriptionClassName: ea.iL,
                            showLabels: !0,
                            showPaymentSourceIcon: !0,
                        })
                      : null,
                (0, i.jsxs)("ul", {
                    children: [
                        this.renderPaymentIdField(),
                        !r && s > 0
                            ? (0, i.jsxs)(a.Fragment, {
                                  children: [
                                      (0, i.jsx)(eE, {
                                          description: e.description,
                                          cost: (0, $.$g)(l - s, u),
                                      }),
                                      (0, i.jsx)(eE, {
                                          description: ei.intl.string(ei.t.QgWXht),
                                          cost: (0, $.$g)(s, u),
                                      }),
                                  ],
                              })
                            : null,
                        (0, i.jsx)(eE, {
                            description: ei.intl.string(ei.t.txajQG),
                            cost: (0, $.$g)(l, u),
                        }),
                        e.isGuildProductPurchase &&
                            null != d &&
                            null != e.sku &&
                            (0, i.jsx)(eO, {
                                guildId: d,
                                guildProductListingId: e.sku.id,
                            }),
                        c > 0 &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(eE, {
                                        description: ei.intl.string(ei.t["A+I0AP"]),
                                        cost: (0, $.$g)(c, u),
                                    }),
                                    (0, i.jsx)(eE, {
                                        description: ei.intl.string(ei.t.xER6Wi),
                                        cost: (0, $.$g)(l - c, u),
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
        return (0, i.jsx)(A.A, { payment: e });
    }
    renderAdditionalGameItemDetails() {
        var e, t, n;
        let {
                claimedGiftUser: r,
                payment: s,
                hasLinkedToApplication: o,
                application: l,
                locale: c,
                analyticsLocations: u,
            } = this.props,
            d = null == (e = s.entitlements) ? void 0 : e.some((e) => e.isFulfilled());
        return s.status === et.__0.REFUNDED
            ? (0, i.jsxs)(a.Fragment, {
                  children: [
                      (0, i.jsx)(m.H, {
                          className: ea.mW,
                          children: ei.intl.string(ei.t["gIGB/A"]),
                      }),
                      (0, i.jsx)("div", {
                          className: ea.iL,
                          children:
                              null != r
                                  ? ei.intl.format(ei.t.Q1K9eg, { username: J.Ay.getName(r) })
                                  : ei.intl.format(ei.t.IBtGwC, { applicationName: null == l ? void 0 : l.name }),
                      }),
                  ],
              })
            : s.isGift
              ? (0, i.jsxs)(a.Fragment, {
                    children: [
                        (0, i.jsx)(m.H, {
                            className: ea.mW,
                            children: ei.intl.string(ei.t["gIGB/A"]),
                        }),
                        (0, i.jsx)("div", {
                            className: ea.iL,
                            children:
                                null != r
                                    ? ei.intl.format(ei.t.vfUW65, { username: J.Ay.getName(r) })
                                    : ei.intl.string(ei.t["18wIqp"]),
                        }),
                        null == r &&
                            (0, i.jsx)("div", {
                                className: ea.TP,
                                children: (0, i.jsx)(h.$nd, {
                                    variant: "primary",
                                    text: ei.intl.string(ei.t["jcSP+g"]),
                                    onClick: () =>
                                        (0, G.openUserSettings)(k.X.GIFT_PANEL, { section: et.nc_.INVENTORY }),
                                }),
                            }),
                    ],
                })
              : d
                ? null
                : (0, i.jsxs)(a.Fragment, {
                      children: [
                          (0, i.jsx)(m.H, {
                              className: ea.mW,
                              children: ei.intl.string(ei.t["gIGB/A"]),
                          }),
                          (0, i.jsx)("div", {
                              className: ea.iL,
                              children: o
                                  ? ei.intl.format(ei.t.DQQCAw, {
                                        applicationName: null == l ? void 0 : l.name,
                                        skuName: null == (t = s.sku) ? void 0 : t.name,
                                    })
                                  : ei.intl.format(ei.t.ED2BqF, {
                                        applicationName: null == l ? void 0 : l.name,
                                        skuName: null == (n = s.sku) ? void 0 : n.name,
                                    }),
                          }),
                          (0, i.jsx)("div", {
                              className: ea.TP,
                              children: o
                                  ? (0, i.jsx)(h.$nd, {
                                        variant: "primary",
                                        text: ei.intl.string(ei.t.zoztQA),
                                        onClick: () => (0, g.A)(ep(c)),
                                    })
                                  : (0, i.jsx)(h.$nd, {
                                        variant: "primary",
                                        text: ei.intl.string(ei.t["jCqvk/"]),
                                        onClick: () => {
                                            null != s.sku &&
                                                null != l &&
                                                (q.default.track(
                                                    et.HAw.PAYMENT_HISTORY_CONNECT_ACCOUNT_BUTTON_CLICKED,
                                                    {
                                                        sku_id: s.sku.id,
                                                        application_id: l.id,
                                                        location_stack: u,
                                                    },
                                                ),
                                                (0, L.n)({
                                                    sku: s.sku,
                                                    application: l,
                                                    analyticsLocations: u,
                                                }));
                                        },
                                    }),
                          }),
                      ],
                  });
    }
    renderAdditionalTenantInfo() {
        let { payment: e } = this.props;
        if ((0, x.bF)(e.sku)) return this.renderAdditionalGameItemDetails();
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
        let s = 0 === r.length,
            o = ep(t),
            l = this.isPremium ? ed : eu;
        return (
            (e = r.includes("SKU_TYPE")
                ? ei.intl.format(ei.t["5lvoVS"], { supportURL: o })
                : s
                  ? n.isPremiumSubscription || n.isPremiumGuildSubscription
                      ? ei.intl.format(ei.t.EPYteX, {
                            dateLimit: l,
                            supportURL: o,
                        })
                      : n.isGift
                        ? ei.intl.format(ei.t["16eP/L"], {
                              dateLimit: l,
                              supportURL: o,
                          })
                        : ei.intl.format(ei.t["1LDI4J"], {
                              dateLimit: l,
                              playtimeLimit: ef,
                              supportURL: o,
                          })
                  : n.isCollectible
                    ? ei.intl.string(ei.t.s9TZM1)
                    : n.isGift
                      ? ei.intl.formatToPlainString(ei.t.owlOWc, { dateLimit: l })
                      : n.isPremiumSubscription || n.isPremiumGuildSubscription
                        ? ei.intl.formatToPlainString(ei.t.dk7vyL, { dateLimit: l })
                        : ei.intl.formatToPlainString(ei.t.s4Kk0C, {
                              dateLimit: l,
                              playtimeLimit: ef,
                          })),
            (0, i.jsxs)(a.Fragment, {
                children: [
                    (0, i.jsx)(m.H, {
                        className: ea.mW,
                        children: ei.intl.string(ei.t["n/27pr"]),
                    }),
                    (0, i.jsxs)("div", {
                        className: ea.iL,
                        children: [(0, i.jsx)("div", { children: e }), this.renderRefundActions(r)],
                    }),
                ],
            })
        );
    }
    renderRefundCriteria(e, t, n, r) {
        return (0, i.jsxs)(
            "div",
            {
                className: ea._Z,
                children: [
                    (0, i.jsx)(m.H, {
                        className: ea.ud,
                        children: e,
                    }),
                    (0, i.jsxs)("div", {
                        className: ea.z9,
                        children: [
                            (0, i.jsx)(t, {
                                className: ea.xb,
                                color: "currentColor",
                            }),
                            null != n && (0, i.jsx)("div", { children: n }),
                        ],
                    }),
                ],
            },
            r,
        );
    }
    renderRefundActions(e) {
        let { locale: t, payment: n } = this.props;
        if (e.includes("SKU_TYPE")) return null;
        let r = e.includes("PURCHASE_DATE") ? m.PGe : m.A9s;
        return (0, i.jsxs)("div", {
            className: ea.My,
            children: [
                (0, i.jsx)("div", {
                    className: ea.Kf,
                    children:
                        !n.isCollectible &&
                        this.renderRefundCriteria(
                            ei.intl.string(ei.t.H0RNz4),
                            r,
                            ei.intl.formatToPlainString(ei.t["7dtXa/"], { daysSincePurchase: this.daysSincePurchase }),
                        ),
                }),
                (0, i.jsx)(m.MzZ, {
                    href: ep(t),
                    children: ei.intl.string(ei.t.re5nOB),
                }),
            ],
        });
    }
    renderDescription() {
        let e,
            t,
            { compactMode: n, payment: r, application: s, guild: o, stickerPack: l, plan: u } = this.props,
            { expanded: d } = this.state,
            f = r.sku,
            p = r.subscription,
            h = null != r.paymentSource && et.AD1.has(r.paymentSource.type);
        if (null != p && 0 !== p.items.length) {
            let n = [],
                a = null;
            if (p.type === et.rzx.PREMIUM)
                p.items.forEach((e) => {
                    let { planId: t, quantity: r } = e;
                    (0, Q.xq)(t)
                        ? (n.push(Q.Ay.getDisplayName(t, !1, h)), (a = (0, Q.mH)(en.hd[t].skuId)))
                        : (n.push("".concat(r > 1 ? "".concat(r, "x ") : "").concat(Q.Ay.getDisplayName(t, !1, h))),
                          null == a && (a = (0, Q.mH)(en.hd[t].skuId)));
                });
            else if (p.type === et.rzx.GUILD) {
                if (null != u) {
                    let e = u.interval === en.WT.YEAR ? ei.t.V6UFQM : ei.t["6oq128"];
                    n.push(ei.intl.format(e, { planName: u.name })), (a = u.skuId);
                }
            } else
                p.type === et.rzx.APPLICATION &&
                    (null != u && (a = u.skuId),
                    null != s
                        ? n.push(ei.intl.formatToPlainString(ei.t["0wL/VI"], { tier: null == f ? void 0 : f.name }))
                        : n.push(ei.intl.string(ei.t["9czSYu"])));
            (t = 0 !== n.length ? n.join(", ") : r.description),
                (e = (0, i.jsx)(S.A, {
                    className: ea.Sy,
                    guildClassName: ea.zA,
                    game: s,
                    guild: o,
                    size: S.M.XSMALL,
                    skuId: null != a ? a : null == f ? void 0 : f.id,
                }));
        } else if (null != f) {
            var g;
            if (
                ((t = r.isGuildProductPurchase && r.isSoftDeletedProduct ? ei.intl.string(ei.t.O7uLmw) : f.name),
                null != l)
            ) {
                let t = (0, j.Id)(l);
                e = (0, i.jsx)(M.A, {
                    disableAnimation: !d,
                    isInteracting: d,
                    sticker: t,
                    className: ea.Sy,
                    size: e_,
                });
            } else
                e =
                    (null == (g = r.sku) ? void 0 : g.productLine) === et.EZt.COLLECTIBLES
                        ? (0, i.jsx)(m.U1X, {
                              size: "custom",
                              width: 23,
                              height: 23,
                              color: "currentColor",
                              className: ea.sV,
                          })
                        : (0, i.jsx)(S.A, {
                              className: ea.Sy,
                              guildClassName: ea.zA,
                              game: s,
                              guild: o,
                              size: S.M.XSMALL,
                              skuId: f.id,
                          });
        } else
            (e = (0, i.jsx)(m.tvc, {
                size: "md",
                color: "currentColor",
                className: ea.Sy,
            })),
                (t = r.description);
        let E = (0, i.jsx)(m.Text, {
                variant: "text-sm/normal",
                className: ea.p6,
                children: (0, Z.i$)(c()(r.createdAt), "MM/DD/YYYY"),
            }),
            b = r.isGift
                ? (0, i.jsx)(_.m_, {
                      text: ei.intl.string(ei.t.QddTpm),
                      children: (0, i.jsx)(m.okO, {
                          size: "md",
                          color: "currentColor",
                          className: ea.ez,
                      }),
                  })
                : null;
        return n
            ? (0, i.jsxs)("div", {
                  className: ea.h_,
                  children: [
                      e,
                      (0, i.jsxs)("div", {
                          children: [t, E],
                      }),
                      b,
                  ],
              })
            : (0, i.jsxs)(a.Fragment, {
                  children: [
                      E,
                      (0, i.jsxs)("div", {
                          className: ea.h_,
                          children: [e, (0, i.jsx)("div", { children: t }), b],
                      }),
                  ],
              });
    }
    renderGuildProductBenefits() {
        let { payment: e, application: t, locale: n } = this.props,
            r = null == t ? void 0 : t.guildId;
        return e.isGuildProductPurchase
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)("div", { className: ea.ts }),
                      e.isSoftDeletedProduct
                          ? (0, i.jsx)(m.po8, {
                                messageType: m.YCn.WARNING,
                                action: (0, i.jsx)(h.$nd, {
                                    variant: "overlay-secondary",
                                    text: ei.intl.string(ei.t.zoztQA),
                                    onClick: () => (0, g.A)(ep(n)),
                                }),
                                children: ei.intl.string(ei.t["3AvulN"]),
                            })
                          : null != r &&
                            null != e.sku &&
                            (0, i.jsx)(eA, {
                                guildId: r,
                                guildProductListingId: e.sku.id,
                            }),
                  ],
              })
            : null;
    }
    renderExpandedSection() {
        return (0, i.jsx)(m.DUT, {
            onClick: (e) => e.stopPropagation(),
            children: (0, i.jsxs)("div", {
                className: ea.WI,
                children: [
                    (0, i.jsx)(m.H, {
                        className: ea.mW,
                        children: ei.intl.string(ei.t.nyzoFb),
                    }),
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
            { expanded: r } = this.state;
        return (0, i.jsx)(u.tG, {
            id: e.id,
            children: (e) =>
                (0, i.jsxs)(
                    m.DUT,
                    ec(
                        eo(
                            {
                                onClick: this.handleExpandInfo,
                                "data-expanded": r,
                                className: o()(ea.Ji, t, { [ea.oE]: n }),
                                focusProps: { offset: 4 },
                            },
                            e,
                        ),
                        {
                            children: [
                                (0, i.jsxs)(v.A, {
                                    className: ea.J7,
                                    align: v.A.Align.CENTER,
                                    "data-expanded": r,
                                    children: [
                                        this.renderDescription(),
                                        (0, i.jsxs)("div", {
                                            className: ea.vj,
                                            children: [this.renderStatus(), this.renderPrice()],
                                        }),
                                        (0, i.jsx)(z.A, {
                                            className: ea.fT,
                                            direction: r ? z.A.Directions.UP : z.A.Directions.DOWN,
                                        }),
                                    ],
                                }),
                                r ? this.renderExpandedSection() : null,
                            ],
                        },
                    ),
                ),
        });
    }
    constructor(...e) {
        super(...e),
            es(this, "state", { expanded: !1 }),
            es(this, "refundRules", [
                {
                    rule: "PURCHASE_DATE",
                    canRefund: () => {
                        let { payment: e } = this.props,
                            t = e.isPremiumSubscription || e.isPremiumGuildSubscription || e.isPremiumGift ? ed : eu;
                        return this.daysSincePurchase <= t;
                    },
                },
                {
                    rule: "SKU_TYPE",
                    canRefund: () => {
                        let { payment: e } = this.props;
                        return null == e.sku || e.sku.type !== et.Puh.CONSUMABLE;
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
                        return !em.includes(e.status);
                    },
                },
                {
                    rule: "PAYMENT_GATEWAY",
                    canRefund: () => {
                        let { payment: e } = this.props;
                        return null == e.paymentGateway || !eg.includes(e.paymentGateway);
                    },
                },
                {
                    rule: "SKU_STICKER_PACK",
                    canRefund: () => {
                        let { payment: e } = this.props;
                        return null == e.sku || !(0, f.Lt)(e.sku.flags, et.d68.STICKER);
                    },
                },
                {
                    rule: "SUBSCRIPTION_TYPE",
                    canRefund: () => {
                        var e, t;
                        let { payment: n } = this.props;
                        return (
                            (null == (e = n.subscription) ? void 0 : e.type) !== et.rzx.GUILD &&
                            (null == (t = n.subscription) ? void 0 : t.type) !== et.rzx.APPLICATION
                        );
                    },
                },
                {
                    rule: "GUILD_PRODUCT",
                    canRefund: () => {
                        let { payment: e } = this.props;
                        return null == e.sku || !(0, f.Lt)(e.sku.flags, d.d.GUILD_PRODUCT);
                    },
                },
                {
                    rule: "COLLECTIBLE",
                    canRefund: () => {
                        let { payment: e } = this.props;
                        return !e.isCollectible;
                    },
                },
            ]),
            es(this, "handleExpandInfo", () => {
                this.setState({ expanded: !this.state.expanded });
            });
    }
}
function eS(e) {
    var t, n;
    let { payment: r, locale: s, compactMode: o, className: l } = e,
        c = null != r.sku && eh.includes(r.sku.type),
        u = null != r.sku && c ? r.sku.applicationId : null,
        d = null == (t = r.sku) ? void 0 : t.applicationId,
        f = (null == (n = r.subscription) ? void 0 : n.type) === et.rzx.APPLICATION,
        {
            applicationStatistics: _,
            gameApplication: h,
            paymentSources: m,
        } = (0, p.cf)([Y.A, K.A, O.A], () => {
            var e, t;
            return {
                applicationStatistics: null != u ? K.A.getCurrentUserStatisticsForApplication(u) : null,
                gameApplication:
                    null != (e = O.A.getApplication(null != u ? u : ""))
                        ? e
                        : null == (t = r.sku)
                          ? void 0
                          : t.application,
                paymentSources: Y.A.paymentSources,
            };
        }),
        { hasAlreadyLinked: g } = (0, y.RD)((0, x.bF)(r.sku) ? h : void 0),
        A = (0, p.bG)([O.A], () => (null != d ? O.A.getApplication(d) : null)),
        v = null;
    a.useEffect(() => {
        f && null != d && (0, D.TA)(d);
    }, [d, f]);
    let S = (0, p.bG)([B.A], () => B.A.getGuild(null == h ? void 0 : h.guildId)),
        I = c ? h : void 0,
        T = r.subscription,
        C = (0, p.bG)([W.A], () => (null != T && T.type !== et.rzx.PREMIUM ? W.A.get(T.items[0].planId) : null)),
        N = (0, p.bG)([H.default], () => {
            var e, t, n, i;
            let a = r.isGift
                ? null == (n = r.entitlements)
                    ? void 0
                    : n.find((e) => {
                          var t;
                          return (null == (t = e.user) ? void 0 : t.id) != null && null != e.gifterId;
                      })
                : null;
            return null == a
                ? null
                : null != (e = H.default.getUser(null != (t = null == (i = a.user) ? void 0 : i.id) ? t : null))
                  ? e
                  : null == a
                    ? void 0
                    : a.user;
        }, [r]),
        { analyticsLocations: R } = (0, b.Ay)(E.A.BILLING_SETTINGS_BILLING);
    return (0, i.jsx)(ev, {
        applicationStatistics: _,
        application: f ? A : I,
        analyticsLocations: R,
        guild: S,
        stickerPack: v,
        paymentSources: m,
        locale: s,
        compactMode: o,
        className: l,
        payment: r,
        plan: C,
        claimedGiftUser: N,
        hasLinkedToApplication: g,
    });
}
es(ev, "defaultProps", { compactMode: !1 });
