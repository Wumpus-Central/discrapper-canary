n.d(t, {
    A: () => eh,
}),
    n(228524),
    n(896048),
    n(321073),
    n(938796);
var r,
    i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(989349),
    c = n.n(o),
    d = n(837381),
    u = n(122817),
    _ = n(665260),
    p = n(311907),
    m = n(435371),
    g = n(732955),
    A = n(397927),
    f = n(975807),
    h = n(793574),
    b = n(688810),
    E = n(362490),
    x = n(587895),
    O = n(120385),
    C = n(235986),
    I = n(769015),
    T = n(250627),
    S = n(871109),
    j = n(571654),
    v = n(411342),
    N = n(179499),
    y = n(22007),
    P = n(95035),
    R = n(337095),
    D = n(871123),
    w = n(510022),
    L = n(378058),
    M = n(148355),
    U = n(780964),
    G = n(12901),
    k = n(840065),
    V = n(202613),
    H = n(317525),
    B = n(71393),
    F = n(287809),
    Y = n(295405),
    W = n(97352),
    z = n(90165),
    K = n(147925),
    Z = n(954571),
    X = n(957565),
    q = n(405269),
    J = n(927578),
    Q = n(580630),
    $ = n(427262),
    ee = n(219887),
    et = n(652215),
    en = n(788868),
    er = n(818348),
    ei = n(985018),
    el = n(124953);

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

function ea(e) {
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
let eo = (e) => "https://".concat(et.XlF, "/hc/").concat(e.toLowerCase(), "/requests/new?ticket_form_id=360000118612"),
    ec = [et.Puh.DURABLE_PRIMARY, et.Puh.DURABLE, et.Puh.CONSUMABLE],
    ed = [et.__0.FAILED, et.__0.REVERSED, et.__0.CANCELED],
    eu = [er.kM.APPLE],
    e_ = (e) => {
        let { description: t, cost: n } = e;
        return (0, i.jsx)("li", {
            className: el.mg,
            children: (0, i.jsxs)(C.A, {
                justify: C.A.Justify.BETWEEN,
                children: [
                    (0, i.jsx)("div", {
                        children: t,
                    }),
                    (0, i.jsx)("div", {
                        children: n,
                    }),
                ],
            }),
        });
    };

function ep(e) {
    let { value: t, copyText: n, copyFeedbackText: r } = e,
        [s, a] = l.useState(!1),
        [o, c] = l.useState(!1);
    return (0, i.jsx)(m.m_, {
        forceOpen: o,
        text: s ? r : n,
        children: (0, i.jsx)(A.DUT, {
            onMouseEnter: () => {
                s && a(!1);
            },
            onMouseLeave: () => {
                c(!1);
            },
            onClick: () => {
                (0, X.C)(t, () => {
                    c(!0), a(!0);
                });
            },
            children: (0, i.jsx)("div", {
                className: el.l9,
                children: t,
            }),
        }),
    });
}
let em = (e) => {
    let { description: t, detail: n } = e;
    return (0, i.jsx)("li", {
        className: el.Iu,
        children: (0, i.jsxs)(C.A, {
            justify: C.A.Justify.BETWEEN,
            children: [
                (0, i.jsx)("div", {
                    children: t,
                }),
                (0, i.jsx)("div", {
                    children: n,
                }),
            ],
        }),
    });
};

function eg(e) {
    let { guildId: t, guildProductListingId: n } = e,
        r = (0, T.Qi)(t, n, {
            requireCurrentGuild: !1,
        }),
        s = (0, j.z)(r),
        a = (0, p.bG)([B.A], () => B.A.getGuild(t)),
        o =
            (null == r ? void 0 : r.role_id) != null && (null == r ? void 0 : r.attachments_count) === 0
                ? ei.intl.string(ei.t.H11qcT)
                : s,
        c = l.useCallback(async () => {
            (null == a ? void 0 : a.features.has(et.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE))
                ? await (0, y.A)(et.BVt.GUILD_PRODUCT(t, n))
                : await (0, y.A)(et.BVt.CHANNEL(t)),
                (0, G.default)();
        }, [a, t, n]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != o &&
                (0, i.jsx)(em, {
                    description: ei.intl.string(ei.t.lXPbJb),
                    detail: o,
                }),
            null != a &&
                (0, i.jsx)(em, {
                    description: ei.intl.string(ei.t.Wpn8z8),
                    detail: (0, i.jsx)(P.A, {
                        onClick: c,
                        children: a.name,
                    }),
                }),
        ],
    });
}

function eA(e) {
    var t, n;
    let { guildId: r, guildProductListingId: l } = e,
        s = (0, T.Qi)(r, l, {
            requireCurrentGuild: !1,
        }),
        a = (0, p.bG)([S.A], () => S.A.getGuildProductFetchState(l) === S.e.FETCHING),
        o = null == s ? void 0 : s.role_id,
        c = (0, p.bG)([H.A], () => (null != o ? H.A.getRole(r, o) : void 0), [r, o]),
        d = (0, N.A)({
            guildId: r,
            productId: l,
        }),
        u = (null != (t = null == s || null == (n = s.attachments) ? void 0 : n.length) ? t : 0) > 0,
        _ = null != c;
    return a
        ? (0, i.jsx)("div", {
              className: el.hT,
              children: (0, i.jsx)(A.y$y, {}),
          })
        : null != s && (u || _)
          ? (0, i.jsxs)("div", {
                className: el.hT,
                children: [
                    u &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(A.Text, {
                                    variant: "text-xs/semibold",
                                    color: "text-default",
                                    className: el.yE,
                                    children: ei.intl.string(ei.t.hxawoy),
                                }),
                                (0, i.jsx)(g.$nd, ea({}, d)),
                            ],
                        }),
                    _ &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                u &&
                                    (0, i.jsx)("div", {
                                        className: el.yF,
                                    }),
                                (0, i.jsx)(A.Text, {
                                    variant: "text-xs/semibold",
                                    color: "text-default",
                                    className: el.yE,
                                    children: ei.intl.string(ei.t.gWBNet),
                                }),
                                (0, i.jsx)(v.A, {
                                    role: c,
                                }),
                            ],
                        }),
                ],
            })
          : null;
}
class ef extends (r = l.PureComponent) {
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
                    className: el.Xg,
                    children: ei.intl.string(ei.t.y7F0Re),
                });
            case et.__0.FAILED:
                return (0, i.jsx)("span", {
                    className: el.ob,
                    children: ei.intl.string(ei.t.Yo4ru6),
                });
            case et.__0.REFUNDED:
                if (e.amountRefunded !== e.amount)
                    return (0, i.jsx)("span", {
                        className: el.gD,
                        children: ei.intl.string(ei.t.lYbZzz),
                    });
                return (0, i.jsx)("span", {
                    className: el.gD,
                    children: ei.intl.string(ei.t.ZBb6NK),
                });
            case et.__0.REVERSED:
                return (0, i.jsx)("span", {
                    className: el.ob,
                    children: ei.intl.string(ei.t.YQv9Li),
                });
            case et.__0.CANCELED:
                return (0, i.jsx)("span", {
                    className: el.ob,
                    children: ei.intl.string(ei.t.ttkBhy),
                });
            default:
                return null;
        }
    }
    renderTenantStatusOverride() {
        let { payment: e, hasLinkedToApplication: t } = this.props;
        return (0, D.bF)(e.sku) && e.status === et.__0.COMPLETED
            ? null != e.entitlements && e.entitlements.some((e) => e.isFulfilled())
                ? (0, i.jsx)("span", {
                      className: el.gD,
                      children: ei.intl.string(ei.t.Osji1u),
                  })
                : e.isGift
                  ? null != e.entitlements && e.entitlements.some((e) => null != e.gifterId)
                      ? (0, i.jsx)("span", {
                            className: el.gD,
                            children: ei.intl.string(ei.t.lIsIFo),
                        })
                      : (0, i.jsx)("span", {
                            className: el.Tf,
                            children: ei.intl.string(ei.t["+tqSi3"]),
                        })
                  : t
                    ? (0, i.jsx)("span", {
                          className: el.Tf,
                          children: ei.intl.string(ei.t.y7F0Re),
                      })
                    : (0, i.jsx)("span", {
                          className: el.Tf,
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
            className: el.q9,
            children: (0, Q.$g)(t, e.currency),
        });
    }
    renderPaymentIdField() {
        let { payment: e } = this.props;
        return (0, i.jsx)("li", {
            className: el.mg,
            children: (0, i.jsxs)("div", {
                className: el.bx,
                children: [
                    (0, i.jsx)("div", {
                        children: ei.intl.string(ei.t["UQim+r"]),
                    }),
                    (0, i.jsx)(ep, {
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
            { taxInclusive: r, tax: s, amount: o, amountRefunded: c, currency: d } = e,
            u = null == n ? void 0 : n.guildId;
        return (0, i.jsxs)("div", {
            className: a()(el.iL, el.W),
            children: [
                null != e.paymentSource
                    ? (0, i.jsx)(ee.A, {
                          paymentSource: e.paymentSource,
                          locale: t,
                          descriptionClassName: el.iL,
                          showLabels: !0,
                          showPaymentSourceIcon: !0,
                      })
                    : e.paymentGateway === er.kM.APPLE_PARTNER
                      ? (0, i.jsx)(ee.A, {
                            paymentSource: new V.Pw({}),
                            locale: t,
                            descriptionClassName: el.iL,
                            showLabels: !0,
                            showPaymentSourceIcon: !0,
                        })
                      : null,
                (0, i.jsxs)("ul", {
                    children: [
                        this.renderPaymentIdField(),
                        !r && s > 0
                            ? (0, i.jsxs)(l.Fragment, {
                                  children: [
                                      (0, i.jsx)(e_, {
                                          description: e.description,
                                          cost: (0, Q.$g)(o - s, d),
                                      }),
                                      (0, i.jsx)(e_, {
                                          description: ei.intl.string(ei.t.QgWXht),
                                          cost: (0, Q.$g)(s, d),
                                      }),
                                  ],
                              })
                            : null,
                        (0, i.jsx)(e_, {
                            description: ei.intl.string(ei.t.txajQG),
                            cost: (0, Q.$g)(o, d),
                        }),
                        e.isGuildProductPurchase &&
                            null != u &&
                            null != e.sku &&
                            (0, i.jsx)(eg, {
                                guildId: u,
                                guildProductListingId: e.sku.id,
                            }),
                        c > 0 &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(e_, {
                                        description: ei.intl.string(ei.t["A+I0AP"]),
                                        cost: (0, Q.$g)(c, d),
                                    }),
                                    (0, i.jsx)(e_, {
                                        description: ei.intl.string(ei.t.xER6Wi),
                                        cost: (0, Q.$g)(o - c, d),
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
        return (0, i.jsx)(O.A, {
            payment: e,
        });
    }
    renderAdditionalGameItemDetails() {
        var e, t, n;
        let {
                claimedGiftUser: r,
                payment: s,
                hasLinkedToApplication: a,
                application: o,
                locale: c,
                analyticsLocations: d,
            } = this.props,
            u = null == (e = s.entitlements) ? void 0 : e.some((e) => e.isFulfilled());
        return s.status === et.__0.REFUNDED
            ? (0, i.jsxs)(l.Fragment, {
                  children: [
                      (0, i.jsx)(A.H, {
                          className: el.mW,
                          children: ei.intl.string(ei.t["gIGB/A"]),
                      }),
                      (0, i.jsx)("div", {
                          className: el.iL,
                          children:
                              null != r
                                  ? ei.intl.format(ei.t.Q1K9eg, {
                                        username: $.Ay.getName(r),
                                    })
                                  : ei.intl.format(ei.t.IBtGwC, {
                                        applicationName: null == o ? void 0 : o.name,
                                    }),
                      }),
                  ],
              })
            : s.isGift
              ? (0, i.jsxs)(l.Fragment, {
                    children: [
                        (0, i.jsx)(A.H, {
                            className: el.mW,
                            children: ei.intl.string(ei.t["gIGB/A"]),
                        }),
                        (0, i.jsx)("div", {
                            className: el.iL,
                            children:
                                null != r
                                    ? ei.intl.format(ei.t.vfUW65, {
                                          username: $.Ay.getName(r),
                                      })
                                    : ei.intl.string(ei.t["18wIqp"]),
                        }),
                        null == r &&
                            (0, i.jsx)("div", {
                                className: el.TP,
                                children: (0, i.jsx)(g.$nd, {
                                    variant: "primary",
                                    text: ei.intl.string(ei.t["jcSP+g"]),
                                    onClick: () =>
                                        (0, k.openUserSettings)(U.X.GIFT_PANEL, {
                                            section: et.nc_.INVENTORY,
                                        }),
                                }),
                            }),
                    ],
                })
              : u
                ? null
                : (0, i.jsxs)(l.Fragment, {
                      children: [
                          (0, i.jsx)(A.H, {
                              className: el.mW,
                              children: ei.intl.string(ei.t["gIGB/A"]),
                          }),
                          (0, i.jsx)("div", {
                              className: el.iL,
                              children: a
                                  ? ei.intl.format(ei.t.DQQCAw, {
                                        applicationName: null == o ? void 0 : o.name,
                                        skuName: null == (t = s.sku) ? void 0 : t.name,
                                    })
                                  : ei.intl.format(ei.t.ED2BqF, {
                                        applicationName: null == o ? void 0 : o.name,
                                        skuName: null == (n = s.sku) ? void 0 : n.name,
                                    }),
                          }),
                          (0, i.jsx)("div", {
                              className: el.TP,
                              children: a
                                  ? (0, i.jsx)(g.$nd, {
                                        variant: "primary",
                                        text: ei.intl.string(ei.t.zoztQA),
                                        onClick: () => (0, f.A)(eo(c)),
                                    })
                                  : (0, i.jsx)(g.$nd, {
                                        variant: "primary",
                                        text: ei.intl.string(ei.t["jCqvk/"]),
                                        onClick: () => {
                                            null != s.sku &&
                                                null != o &&
                                                (Z.default.track(
                                                    et.HAw.PAYMENT_HISTORY_CONNECT_ACCOUNT_BUTTON_CLICKED,
                                                    {
                                                        sku_id: s.sku.id,
                                                        application_id: o.id,
                                                        location_stack: d,
                                                    },
                                                ),
                                                (0, w.n)({
                                                    sku: s.sku,
                                                    application: o,
                                                    analyticsLocations: d,
                                                }));
                                        },
                                    }),
                          }),
                      ],
                  });
    }
    renderAdditionalTenantInfo() {
        let { payment: e } = this.props;
        if ((0, D.bF)(e.sku)) return this.renderAdditionalGameItemDetails();
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
            a = eo(t),
            o = this.isPremium ? 5 : 14;
        return (
            (e = r.includes("SKU_TYPE")
                ? ei.intl.format(ei.t["5lvoVS"], {
                      supportURL: a,
                  })
                : s
                  ? n.isPremiumSubscription || n.isPremiumGuildSubscription
                      ? ei.intl.format(ei.t.EPYteX, {
                            dateLimit: o,
                            supportURL: a,
                        })
                      : n.isGift
                        ? ei.intl.format(ei.t["16eP/L"], {
                              dateLimit: o,
                              supportURL: a,
                          })
                        : ei.intl.format(ei.t["1LDI4J"], {
                              dateLimit: o,
                              playtimeLimit: 2,
                              supportURL: a,
                          })
                  : n.isCollectible
                    ? ei.intl.string(ei.t.s9TZM1)
                    : n.isGift
                      ? ei.intl.formatToPlainString(ei.t.owlOWc, {
                            dateLimit: o,
                        })
                      : n.isPremiumSubscription || n.isPremiumGuildSubscription
                        ? ei.intl.formatToPlainString(ei.t.dk7vyL, {
                              dateLimit: o,
                          })
                        : ei.intl.formatToPlainString(ei.t.s4Kk0C, {
                              dateLimit: o,
                              playtimeLimit: 2,
                          })),
            (0, i.jsxs)(l.Fragment, {
                children: [
                    (0, i.jsx)(A.H, {
                        className: el.mW,
                        children: ei.intl.string(ei.t["n/27pr"]),
                    }),
                    (0, i.jsxs)("div", {
                        className: el.iL,
                        children: [
                            (0, i.jsx)("div", {
                                children: e,
                            }),
                            this.renderRefundActions(r),
                        ],
                    }),
                ],
            })
        );
    }
    renderRefundCriteria(e, t, n, r) {
        return (0, i.jsxs)(
            "div",
            {
                className: el._Z,
                children: [
                    (0, i.jsx)(A.H, {
                        className: el.ud,
                        children: e,
                    }),
                    (0, i.jsxs)("div", {
                        className: el.z9,
                        children: [
                            (0, i.jsx)(t, {
                                className: el.xb,
                                color: "currentColor",
                            }),
                            null != n &&
                                (0, i.jsx)("div", {
                                    children: n,
                                }),
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
        let r = e.includes("PURCHASE_DATE") ? A.PGe : A.A9s;
        return (0, i.jsxs)("div", {
            className: el.My,
            children: [
                (0, i.jsx)("div", {
                    className: el.Kf,
                    children:
                        !n.isCollectible &&
                        this.renderRefundCriteria(
                            ei.intl.string(ei.t.H0RNz4),
                            r,
                            ei.intl.formatToPlainString(ei.t["7dtXa/"], {
                                daysSincePurchase: this.daysSincePurchase,
                            }),
                        ),
                }),
                (0, i.jsx)(A.MzZ, {
                    href: eo(t),
                    children: ei.intl.string(ei.t.re5nOB),
                }),
            ],
        });
    }
    renderDescription() {
        let e,
            t,
            { compactMode: n, payment: r, application: s, guild: a, stickerPack: o, plan: d } = this.props,
            { expanded: u } = this.state,
            _ = r.sku,
            p = r.subscription,
            g = null != r.paymentSource && et.AD1.has(r.paymentSource.type);
        if (null != p && 0 !== p.items.length) {
            let n = [],
                l = null;
            if (p.type === et.rzx.PREMIUM)
                p.items.forEach((e) => {
                    let { planId: t, quantity: r } = e;
                    (0, J.xq)(t)
                        ? (n.push(J.Ay.getDisplayName(t, !1, g)), (l = (0, J.mH)(en.hd[t].skuId)))
                        : (n.push("".concat(r > 1 ? "".concat(r, "x ") : "").concat(J.Ay.getDisplayName(t, !1, g))),
                          null == l && (l = (0, J.mH)(en.hd[t].skuId)));
                });
            else if (p.type === et.rzx.GUILD) {
                if (null != d) {
                    let e = d.interval === en.WT.YEAR ? ei.t.V6UFQM : ei.t["6oq128"];
                    n.push(
                        ei.intl.format(e, {
                            planName: d.name,
                        }),
                    ),
                        (l = d.skuId);
                }
            } else
                p.type === et.rzx.APPLICATION &&
                    (null != d && (l = d.skuId),
                    null != s
                        ? n.push(
                              ei.intl.formatToPlainString(ei.t["0wL/VI"], {
                                  tier: null == _ ? void 0 : _.name,
                              }),
                          )
                        : n.push(ei.intl.string(ei.t["9czSYu"])));
            (t = 0 !== n.length ? n.join(", ") : r.description),
                (e = (0, i.jsx)(I.A, {
                    className: el.Sy,
                    guildClassName: el.zA,
                    game: s,
                    guild: a,
                    size: I.M.XSMALL,
                    skuId: null != l ? l : null == _ ? void 0 : _.id,
                }));
        } else if (null != _) {
            var f;
            if (
                ((t = r.isGuildProductPurchase && r.isSoftDeletedProduct ? ei.intl.string(ei.t.O7uLmw) : _.name),
                null != o)
            ) {
                let t = (0, L.Id)(o);
                e = (0, i.jsx)(M.A, {
                    disableAnimation: !u,
                    isInteracting: u,
                    sticker: t,
                    className: el.Sy,
                    size: 24,
                });
            } else
                e =
                    (null == (f = r.sku) ? void 0 : f.productLine) === et.EZt.COLLECTIBLES
                        ? (0, i.jsx)(A.U1X, {
                              size: "custom",
                              width: 23,
                              height: 23,
                              color: "currentColor",
                              className: el.sV,
                          })
                        : (0, i.jsx)(I.A, {
                              className: el.Sy,
                              guildClassName: el.zA,
                              game: s,
                              guild: a,
                              size: I.M.XSMALL,
                              skuId: _.id,
                          });
        } else
            (e = (0, i.jsx)(A.tvc, {
                size: "md",
                color: "currentColor",
                className: el.Sy,
            })),
                (t = r.description);
        let h = (0, i.jsx)(A.Text, {
                variant: "text-sm/normal",
                className: el.p6,
                children: (0, q.i$)(c()(r.createdAt), "MM/DD/YYYY"),
            }),
            b = r.isGift
                ? (0, i.jsx)(m.m_, {
                      text: ei.intl.string(ei.t.QddTpm),
                      children: (0, i.jsx)(A.okO, {
                          size: "md",
                          color: "currentColor",
                          className: el.ez,
                      }),
                  })
                : null;
        return n
            ? (0, i.jsxs)("div", {
                  className: el.h_,
                  children: [
                      e,
                      (0, i.jsxs)("div", {
                          children: [t, h],
                      }),
                      b,
                  ],
              })
            : (0, i.jsxs)(l.Fragment, {
                  children: [
                      h,
                      (0, i.jsxs)("div", {
                          className: el.h_,
                          children: [
                              e,
                              (0, i.jsx)("div", {
                                  children: t,
                              }),
                              b,
                          ],
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
                      (0, i.jsx)("div", {
                          className: el.ts,
                      }),
                      e.isSoftDeletedProduct
                          ? (0, i.jsx)(A.po8, {
                                messageType: A.YCn.WARNING,
                                action: (0, i.jsx)(g.$nd, {
                                    variant: "overlay-secondary",
                                    text: ei.intl.string(ei.t.zoztQA),
                                    onClick: () => (0, f.A)(eo(n)),
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
        return (0, i.jsx)(A.DUT, {
            onClick: (e) => e.stopPropagation(),
            children: (0, i.jsxs)("div", {
                className: el.WI,
                children: [
                    (0, i.jsx)(A.H, {
                        className: el.mW,
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
        return (0, i.jsx)(d.tG, {
            id: e.id,
            children: (e) => {
                var l, s;
                return (0, i.jsxs)(
                    A.DUT,
                    ((l = ea(
                        {
                            onClick: this.handleExpandInfo,
                            "data-expanded": r,
                            className: a()(el.Ji, t, {
                                [el.oE]: n,
                            }),
                            focusProps: {
                                offset: 4,
                            },
                        },
                        e,
                    )),
                    (s = s =
                        {
                            children: [
                                (0, i.jsxs)(C.A, {
                                    className: el.J7,
                                    align: C.A.Align.CENTER,
                                    "data-expanded": r,
                                    children: [
                                        this.renderDescription(),
                                        (0, i.jsxs)("div", {
                                            className: el.vj,
                                            children: [this.renderStatus(), this.renderPrice()],
                                        }),
                                        (0, i.jsx)(K.A, {
                                            className: el.fT,
                                            direction: r ? K.A.Directions.UP : K.A.Directions.DOWN,
                                        }),
                                    ],
                                }),
                                r ? this.renderExpandedSection() : null,
                            ],
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(s))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(s)).forEach(function (e) {
                              Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(s, e));
                          }),
                    l),
                );
            },
        });
    }
    constructor(...e) {
        super(...e),
            es(this, "state", {
                expanded: !1,
            }),
            es(this, "refundRules", [
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
                        return !ed.includes(e.status);
                    },
                },
                {
                    rule: "PAYMENT_GATEWAY",
                    canRefund: () => {
                        let { payment: e } = this.props;
                        return null == e.paymentGateway || !eu.includes(e.paymentGateway);
                    },
                },
                {
                    rule: "SKU_STICKER_PACK",
                    canRefund: () => {
                        let { payment: e } = this.props;
                        return null == e.sku || !(0, _.Lt)(e.sku.flags, et.d68.STICKER);
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
                        return null == e.sku || !(0, _.Lt)(e.sku.flags, u.d.GUILD_PRODUCT);
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
                this.setState({
                    expanded: !this.state.expanded,
                });
            });
    }
}

function eh(e) {
    var t, n;
    let { payment: r, locale: s, compactMode: a, className: o } = e,
        c = null != r.sku && ec.includes(r.sku.type),
        d = null != r.sku && c ? r.sku.applicationId : null,
        u = null == (t = r.sku) ? void 0 : t.applicationId,
        _ = (null == (n = r.subscription) ? void 0 : n.type) === et.rzx.APPLICATION,
        {
            applicationStatistics: m,
            gameApplication: g,
            paymentSources: A,
        } = (0, p.cf)([Y.A, z.A, x.A], () => {
            var e, t;
            return {
                applicationStatistics: null != d ? z.A.getCurrentUserStatisticsForApplication(d) : null,
                gameApplication:
                    null != (e = x.A.getApplication(null != d ? d : ""))
                        ? e
                        : null == (t = r.sku)
                          ? void 0
                          : t.application,
                paymentSources: Y.A.paymentSources,
            };
        }),
        { hasAlreadyLinked: f } = (0, E.RD)((0, D.bF)(r.sku) ? g : void 0),
        O = (0, p.bG)([x.A], () => (null != u ? x.A.getApplication(u) : null));
    l.useEffect(() => {
        _ && null != u && (0, R.TA)(u);
    }, [u, _]);
    let C = (0, p.bG)([B.A], () => B.A.getGuild(null == g ? void 0 : g.guildId)),
        I = c ? g : void 0,
        T = r.subscription,
        S = (0, p.bG)([W.A], () => (null != T && T.type !== et.rzx.PREMIUM ? W.A.get(T.items[0].planId) : null)),
        j = (0, p.bG)([F.default], () => {
            var e, t, n, i;
            let l = r.isGift
                ? null == (n = r.entitlements)
                    ? void 0
                    : n.find((e) => {
                          var t;
                          return (null == (t = e.user) ? void 0 : t.id) != null && null != e.gifterId;
                      })
                : null;
            return null == l
                ? null
                : null != (e = F.default.getUser(null != (t = null == (i = l.user) ? void 0 : i.id) ? t : null))
                  ? e
                  : null == l
                    ? void 0
                    : l.user;
        }, [r]),
        { analyticsLocations: v } = (0, b.Ay)(h.A.BILLING_SETTINGS_BILLING);
    return (0, i.jsx)(ef, {
        applicationStatistics: m,
        application: _ ? O : I,
        analyticsLocations: v,
        guild: C,
        stickerPack: null,
        paymentSources: A,
        locale: s,
        compactMode: a,
        className: o,
        payment: r,
        plan: S,
        claimedGiftUser: j,
        hasLinkedToApplication: f,
    });
}
es(ef, "defaultProps", {
    compactMode: !1,
});
