n.d(t, {
    A: () => Q,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(989349),
    o = n.n(s),
    c = n(311907),
    u = n(421380),
    d = n(397927),
    p = n(863574),
    m = n(707606),
    f = n(456412),
    g = n(793574),
    h = n(429913),
    _ = n(993408),
    b = n(235986),
    A = n(242874),
    y = n(499454),
    v = n(75825),
    x = n(976860),
    O = n(871123),
    E = n(317560),
    j = n(780964),
    C = n(840065),
    I = n(961350),
    S = n(30793),
    T = n(189081),
    N = n(287809),
    P = n(67480),
    w = n(56739),
    R = n(954571),
    D = n(45938),
    L = n(927578),
    M = n(615396),
    k = n(427262),
    U = n(295843),
    G = n(652215),
    B = n(788868),
    F = n(985018),
    H = n(300937);

function V(e, t, n) {
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

function z(e) {
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
                V(e, t, n[t]);
            });
    }
    return e;
}

function W(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function K(e) {
    let { onClick: t, libraryApplication: n } = e;
    return (0, r.jsxs)(d.DUT, {
        className: H.kP,
        onClick: t,
        children: [
            (0, r.jsx)(d._z, {
                size: "md",
                color: "currentColor",
                className: H.dy,
            }),
            (0, r.jsx)("div", {
                children: n.isHidden() ? F.intl.string(F.t.Wi99Ro) : F.intl.string(F.t["+tXad7"]),
            }),
        ],
    });
}
class Y extends i.PureComponent {
    get isHorizontal() {
        let { width: e } = this.props;
        return e >= p.Tm;
    }
    handleViewInventory() {
        (0, C.openUserSettings)(j.X.GIFT_PANEL, {
            section: G.nc_.INVENTORY,
        });
    }
    render() {
        return (0, r.jsx)(p.ug, {
            isHorizontal: this.isHorizontal,
            renderTitle: this.renderTitle,
            renderTagline: this.renderTagline,
            renderMedia: this.renderMedia,
            renderActions: this.renderActions,
        });
    }
    constructor(...e) {
        super(...e),
            V(this, "renderMedia", () =>
                (0, r.jsx)("div", {
                    className: a()(H.oK, {
                        [H.ok]: this.isHorizontal,
                    }),
                }),
            ),
            V(this, "renderTitle", () =>
                this.props.isSelfGift ? F.intl.string(F.t.mT9B49) : F.intl.string(F.t.Vo5yHw),
            ),
            V(this, "renderActions", () =>
                this.props.isSelfGift
                    ? (0, r.jsx)(d.Button, {
                          variant: "primary",
                          size: "sm",
                          text: F.intl.string(F.t["jcSP+g"]),
                          onClick: this.handleViewInventory,
                      })
                    : (0, r.jsx)(d.Button, {
                          variant: "primary",
                          size: "sm",
                          text: F.intl.string(F.t.bUvv1f),
                          disabled: !0,
                      }),
            ),
            V(this, "renderTagline", () =>
                this.props.isSelfGift ? F.intl.string(F.t.eEM3dq) : F.intl.string(F.t.tB8S6u),
            );
    }
}
class q extends i.Component {
    get analyticsLocation() {
        let {
            analyticsContext: { location: e },
        } = this.props;
        return W(z({}, e), {
            section: G.JJy.GIFT_CODE_EMBED,
        });
    }
    renderActions(e) {
        let { libraryApplication: t } = this.props;
        return (0, r.jsxs)(b.A, {
            justify: b.A.Justify.BETWEEN,
            children: [
                (0, r.jsxs)(b.A, {
                    children: [
                        this.renderButton(e),
                        null == t || e.isSubscription
                            ? null
                            : (0, r.jsx)(K, {
                                  onClick: this.handleViewLibrary,
                                  libraryApplication: t,
                              }),
                    ],
                }),
                (0, r.jsxs)(b.A, {
                    align: b.A.Align.END,
                    justify: b.A.Justify.END,
                    className: H.yu,
                    direction: b.A.Direction.VERTICAL,
                    children: [
                        e.hasMultipleCopies
                            ? (0, r.jsx)("div", {
                                  children: this.renderGiftCodeCopiesLeft(e),
                              })
                            : null,
                        e.redeemed || e.isClaimed || null != t || null == e.expiresAt
                            ? null
                            : (0, r.jsx)("div", {
                                  children: F.intl.format(F.t.nZBvUR, {
                                      hours: e.expiresAt.diff(o()(), "h"),
                                  }),
                              }),
                    ],
                }),
            ],
        });
    }
    renderGiftCodeCopiesLeft(e) {
        let t = e.isSubscription ? F.t["4iHwKT"] : F.t.YeLq88;
        return F.intl.format(t, {
            remaining: e.remainingUses,
            total: e.maxUses,
        });
    }
    renderButton(e) {
        let { libraryApplication: t, currentUser: n, isSelfGift: i } = this.props,
            l = {
                onClick: this.handleAccept,
                color: u.$n.Colors.BRAND,
            },
            a =
                (!e.isSubscription && null != t) ||
                (!e.isSelfRedeemable && i) ||
                (e.isExistingPremiumSubscriptionDisallowed && (0, L.TW)(n));
        return (
            (e.redeemed || a || e.isClaimed || !n.verified) && ((l.color = u.$n.Colors.BRAND), (l.disabled = !0)),
            (0, r.jsx)(
                u.$n,
                W(z({}, l), {
                    className: (0, _.hU)(e) ? H.UQ : null,
                    size: u.$n.Sizes.SMALL,
                    children: e.redeemed
                        ? F.intl.string(F.t.BTihou)
                        : null != e.giftStyle
                          ? F.intl.string(F.t.TiZFqX)
                          : F.intl.string(F.t.bUvv1f),
                }),
            )
        );
    }
    isCustomGiftMessage() {
        let { type: e } = this.props;
        return e === G.lAJ.CUSTOM_GIFT;
    }
    renderTitle(e) {
        let { currentUser: t, isSelfGift: n, sku: r } = this.props;
        return this.isCustomGiftMessage() && !n
            ? F.intl.formatToPlainString(F.t.t1SOId, {
                  recipientDisplayName: k.Ay.getName(t),
              })
            : null == r
              ? null
              : e.isSubscription
                ? n
                    ? F.intl.string(F.t["2PJ1NP"])
                    : F.intl.string(F.t.hrnGng)
                : n
                  ? F.intl.string(F.t.QLEMld)
                  : F.intl.string(F.t.W4DBcy);
    }
    renderBody(e) {
        let {
            libraryApplication: t,
            isSelfGift: n,
            sku: r,
            gifter: i,
            subscriptionPlan: l,
            currentUser: a,
        } = this.props;
        if (null == r) return F.intl.string(F.t.ZTNur7);
        if (!n && this.isCustomGiftMessage() && !e.redeemed) return;
        let s = r.isPreorder()
            ? F.intl.formatToPlainString(F.t.evinTd, {
                  name: r.name,
              })
            : r.name;
        if (e.redeemed)
            return e.isSubscription || (0, _.hU)(e) || (0, O.bF)(r)
                ? F.intl.string(F.t.mVC3Cv)
                : F.intl.format(F.t["ss/L+/"], {
                      skuName: s,
                      onViewInLibrary: this.handleViewLibrary,
                  });
        if (!e.isSubscription && null != t)
            return F.intl.format(F.t.UdXO8P, {
                skuName: s,
                onViewInLibrary: this.handleViewLibrary,
            });
        if (e.isClaimed) return F.intl.string(F.t.ARWFQX);
        if (!a.verified)
            return F.intl.format(F.t.GQxl7v, {
                onClick: this.handleVerificationClick,
            });
        if (n)
            return e.isSelfRedeemable
                ? F.intl.string(F.t["lQI+cB"])
                : F.intl.formatToPlainString(F.t["A+etHx"], {
                      skuName: s,
                  });
        if (e.isExistingPremiumSubscriptionDisallowed) return F.intl.string(F.t.UCIU9y);
        if (e.hasMultipleCopies)
            return null != i
                ? e.isSubscription
                    ? F.intl.format(F.t.l3VxgG, {
                          username: k.Ay.getUserTag(i),
                          maxUses: e.maxUses,
                          skuName: s,
                      })
                    : F.intl.format(F.t["9cYrw5"], {
                          username: k.Ay.getUserTag(i),
                          totalCopies: e.maxUses,
                          skuName: s,
                      })
                : e.isSubscription
                  ? F.intl.formatToPlainString(F.t.svrO3W, {
                        maxUses: e.maxUses,
                        skuName: s,
                    })
                  : F.intl.formatToPlainString(F.t["3AgAn3"], {
                        totalCopies: e.maxUses,
                        skuName: s,
                    });
        if (e.isSubscription) {
            if (null == l) return F.intl.string(F.t.ZTNur7);
            if (null != i) {
                let e = l.interval === B.WT.MONTH ? F.t["/RDIEA"] : F.t["3CX6Ev"];
                return F.intl.format(e, {
                    username: k.Ay.getUserTag(i),
                    skuName: s,
                    intervalCount: l.intervalCount,
                });
            }
            let e = l.interval === B.WT.MONTH ? F.t["2O4lo5"] : F.t["+XjmsR"];
            return F.intl.format(e, {
                skuName: s,
                intervalCount: l.intervalCount,
            });
        }
        return null != i
            ? F.intl.format(F.t["3HsdQ/"], {
                  username: k.Ay.getUserTag(i),
              })
            : F.intl.string(F.t.Jdnjjj);
    }
    renderPromotionActions() {
        return (0, r.jsx)(d.Button, {
            variant: "primary",
            size: "sm",
            text: F.intl.string(F.t["71nuwc"]),
            onClick: this.handleClaimPromotion,
        });
    }
    renderEmbed() {
        let { giftCode: e, width: t, sku: n } = this.props;
        if (null == e) return null;
        let i = null != e.giftStyle && !(0, O.bF)(n);
        return (0, r.jsx)(U.k, {
            skuId: e.skuId,
            onEmbedClick: this.handleEmbedClick,
            analyticsSection: G.JJy.GIFT_CODE_EMBED,
            renderCustomActions: () => this.renderActions(e),
            renderCustomTitle: () => this.renderTitle(e),
            renderCustomTagline: () => this.renderBody(e),
            renderCustomMedia: i ? () => this.renderCustomGiftBox(e) : void 0,
            width: t,
        });
    }
    render() {
        let { giftCode: e, resolved: t, width: n, isSelfGift: i } = this.props;
        if (null != e && null != e.promotion)
            return (0, r.jsx)(U.k, {
                skuId: e.skuId,
                onEmbedClick: this.handleClaimPromotion,
                analyticsSection: G.JJy.GIFT_CODE_EMBED,
                renderCustomActions: () => this.renderPromotionActions(),
                renderCustomTitle: () => F.intl.string(F.t.X4p5uH),
                renderCustomTagline: () => F.intl.string(F.t.VIuwD7),
                width: n,
            });
        if (null == e || e.revoked)
            if (t)
                return (0, r.jsx)(Y, {
                    isSelfGift: i,
                    width: n,
                });
            else
                return (0, r.jsx)(p.Wb, {
                    isHorizontal: n >= p.Tm,
                });
        return (0, _.hU)(e)
            ? (0, r.jsx)("div", {
                  className: H.mp,
                  children: this.renderEmbed(),
              })
            : this.renderEmbed();
    }
    constructor(...e) {
        super(...e),
            V(this, "handleViewLibrary", (e) => {
                let { libraryApplication: t } = this.props;
                e.preventDefault(),
                    null != t && t.isHidden()
                        ? (0, x.pX)(G.BVt.APPLICATION_LIBRARY_SETTINGS)
                        : (0, x.pX)(G.BVt.APPLICATION_LIBRARY, {
                              state: {
                                  applicationId: null != t ? t.id : void 0,
                              },
                          });
            }),
            V(this, "handleVerificationClick", (e) => {
                e.stopPropagation(),
                    e.preventDefault(),
                    (0, C.openUserSettings)(j.X.ACCOUNT_PANEL, {
                        section: G.nc_.ACCOUNT,
                    });
            }),
            V(this, "handleAccept", (e) => {
                let { channelId: t, code: n, content: r, type: i, giftInfo: l } = this.props;
                e.preventDefault(),
                    e.stopPropagation(),
                    R.default.track(G.HAw.OPEN_MODAL, {
                        type: "gift_accept",
                        location: W(z({}, this.analyticsLocation), {
                            object: G.ZSU.BUTTON_CTA,
                        }),
                    });
                let a = i !== G.lAJ.CUSTOM_GIFT ? void 0 : r;
                (0, y.h)({
                    processedCode: n,
                    channelContext: t,
                    customGiftMessage: a,
                    giftInfo: l,
                });
            }),
            V(this, "handleEmbedClick", (e) => {
                let { giftCode: t, sku: n, skuApplication: r } = this.props;
                null != n && (0, O.bF)(n) && null != r && null != r.guildId
                    ? (e.preventDefault(),
                      (0, E.R)({
                          skuId: n.id,
                          applicationId: r.id,
                          guildId: r.guildId,
                          isStorefront: !1,
                          analyticsLocations: [g.A.GIFT_CODE_EMBED],
                      }))
                    : null != t &&
                      t.isSubscription &&
                      (e.preventDefault(),
                      (0, C.openUserSettings)(j.X.NITRO_PANEL, {
                          section: G.nc_.PREMIUM,
                      }));
            }),
            V(this, "handleClaimPromotion", (e) => {
                var t;
                e.stopPropagation(), e.preventDefault();
                let n = null == (t = this.props.giftCode) ? void 0 : t.code;
                null != n && window.open(G.BVt.BILLING_PROMOTION_REDEMPTION(n));
            }),
            V(this, "renderCustomGiftBox", (e) => {
                let { width: t } = this.props;
                if (null == e || null == e.giftStyle) return null;
                let n = B.Wx.includes(e.giftStyle),
                    i = a()(H.gB, {
                        [H.El]: n,
                        [H.by]: t >= p.Tm,
                    }),
                    l = a()({
                        [H.gc]: n,
                        [H.Ei]: n && t >= p.Tm,
                        [H.ww]: !n,
                        [H.wy]: !n && t >= p.Tm,
                    });
                return (0, r.jsxs)("div", {
                    className: i,
                    children: [
                        n &&
                            (0, r.jsx)(w.A, {
                                className: H.nr,
                            }),
                        null != e.giftStyle &&
                            (0, r.jsx)(v.A, {
                                defaultAnimationState: e.redeemed ? A.oA.LOOP : A.oA.IDLE,
                                giftStyle: e.giftStyle,
                                className: l,
                            }),
                    ],
                });
            });
    }
}
let J = (0, f.A)((0, m.A)(q)),
    Q = function (e) {
        let { code: t, author: n } = e,
            { giftCode: i, resolved: l } = (0, c.cf)([S.A], () => ({
                giftCode: S.A.get(t),
                resolved: S.A.getIsResolved(t),
            })),
            a = (0, c.bG)([N.default], () => (null != i && null != i.userId ? N.default.getUser(i.userId) : null)),
            s = (0, c.bG)([P.A], () => (null != i ? P.A.get(i.skuId) : null)),
            o = (0, c.bG)([T.A], () =>
                null != s && (null == i ? void 0 : i.entitlementBranches) != null
                    ? D.YI(i.entitlementBranches, s, T.A)
                    : null,
            ),
            u = (0, h.h)(null == s ? void 0 : s.applicationId),
            d = (0, M.zz)(null == i ? void 0 : i.subscriptionPlanId),
            p = (0, c.bG)([I.default], () => (null != i ? I.default.getId() === i.userId : I.default.getId() === n.id));
        return (0, r.jsx)(
            J,
            W(z({}, e), {
                skuApplication: u,
                giftCode: i,
                resolved: l,
                gifter: a,
                libraryApplication: o,
                subscriptionPlan: d,
                sku: s,
                isSelfGift: p,
            }),
        );
    };
