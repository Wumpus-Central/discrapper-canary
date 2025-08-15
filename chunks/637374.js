n.d(t, { Z: () => Y }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(913527),
    s = n.n(o),
    c = n(442837),
    u = n(755721),
    d = n(481060),
    p = n(230711),
    m = n(568836),
    f = n(730749),
    _ = n(112724),
    g = n(607070),
    h = n(884697),
    b = n(600164),
    E = n(479446),
    C = n(930114),
    v = n(981632),
    O = n(703656),
    y = n(314897),
    x = n(82142),
    j = n(283595),
    I = n(594174),
    S = n(509545),
    T = n(55563),
    P = n(199480),
    N = n(626135),
    A = n(669079),
    w = n(74538),
    Z = n(296848),
    R = n(51144),
    L = n(626799),
    D = n(981631),
    M = n(474936),
    k = n(388032),
    U = n(494452);
function F(e, t, n) {
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
function B(e) {
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
                F(e, t, n[t]);
            });
    }
    return e;
}
function G(e, t) {
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
function H(e) {
    let { onClick: t, libraryApplication: n } = e;
    return (0, r.jsxs)(d.P3F, {
        className: U.libraryLink,
        onClick: t,
        children: [
            (0, r.jsx)(d.vqy, {
                size: "md",
                color: "currentColor",
                className: U.libraryIcon,
            }),
            (0, r.jsx)("div", { children: n.isHidden() ? k.intl.string(k.t.Wi99Rk) : k.intl.string(k.t["+tXad3"]) }),
        ],
    });
}
class V extends i.PureComponent {
    get isHorizontal() {
        let { width: e } = this.props;
        return e >= m.aL;
    }
    handleViewInventory() {
        p.Z.open(D.oAB.INVENTORY);
    }
    render() {
        return (0, r.jsx)(m.$G, {
            isHorizontal: this.isHorizontal,
            renderTitle: this.renderTitle,
            renderTagline: this.renderTagline,
            renderMedia: this.renderMedia,
            renderActions: this.renderActions,
        });
    }
    constructor(...e) {
        super(...e),
            F(this, "renderMedia", () =>
                (0, r.jsx)("div", { className: a()(U.invalidPoop, { [U.invalidPoopHorizontal]: this.isHorizontal }) }),
            ),
            F(this, "renderTitle", () =>
                this.props.isSelfGift ? k.intl.string(k.t["mT9B4+"]) : k.intl.string(k.t.Vo5yHx),
            ),
            F(this, "renderActions", () =>
                this.props.isSelfGift
                    ? (0, r.jsx)(d.zxk, {
                          variant: "primary",
                          size: "sm",
                          text: k.intl.string(k.t["jcSP+v"]),
                          onClick: this.handleViewInventory,
                      })
                    : (0, r.jsx)(d.zxk, {
                          variant: "primary",
                          size: "sm",
                          text: k.intl.string(k.t.bUvv1d),
                          disabled: !0,
                      }),
            ),
            F(this, "renderTagline", () =>
                this.props.isSelfGift ? k.intl.string(k.t.aUqE6e) : k.intl.string(k.t["2mWvHB"]),
            );
    }
}
class z extends i.Component {
    get analyticsLocation() {
        let {
            analyticsContext: { location: e },
        } = this.props;
        return G(B({}, e), { section: D.jXE.GIFT_CODE_EMBED });
    }
    renderActions(e) {
        let { libraryApplication: t } = this.props;
        return (0, r.jsxs)(b.Z, {
            justify: b.Z.Justify.BETWEEN,
            children: [
                (0, r.jsxs)(b.Z, {
                    children: [
                        this.renderButton(e),
                        null == t || e.isSubscription
                            ? null
                            : (0, r.jsx)(H, {
                                  onClick: this.handleViewLibrary,
                                  libraryApplication: t,
                              }),
                    ],
                }),
                (0, r.jsxs)(b.Z, {
                    align: b.Z.Align.END,
                    justify: b.Z.Justify.END,
                    className: U.metadata,
                    direction: b.Z.Direction.VERTICAL,
                    children: [
                        e.hasMultipleCopies ? (0, r.jsx)("div", { children: this.renderGiftCodeCopiesLeft(e) }) : null,
                        e.redeemed || e.isClaimed || null != t || null == e.expiresAt
                            ? null
                            : (0, r.jsx)("div", {
                                  children: k.intl.format(k.t.nZBvUV, { hours: e.expiresAt.diff(s()(), "h") }),
                              }),
                    ],
                }),
            ],
        });
    }
    renderGiftCodeCopiesLeft(e) {
        let t = e.isSubscription ? k.t["4iHwKS"] : k.t["YeLq8/"];
        return k.intl.format(t, {
            remaining: e.remainingUses,
            total: e.maxUses,
        });
    }
    renderButton(e) {
        let { libraryApplication: t, currentUser: n, isSelfGift: i } = this.props,
            l = {
                onClick: this.handleAccept,
                color: u.zx.Colors.BRAND,
            },
            a =
                (!e.isSubscription && null != t) ||
                (!e.isSelfRedeemable && i) ||
                (e.isExistingPremiumSubscriptionDisallowed && (0, w.I5)(n));
        return (
            (e.redeemed || a || e.isClaimed || !n.verified) && ((l.color = u.zx.Colors.BRAND), (l.disabled = !0)),
            (0, r.jsx)(
                u.zx,
                G(B({}, l), {
                    className: (0, h.mO)(e) ? U.collectiblesAcceptButton : null,
                    size: u.zx.Sizes.SMALL,
                    children: e.redeemed
                        ? k.intl.string(k.t.BTihoq)
                        : null != e.giftStyle
                          ? k.intl.string(k.t.TiZFqa)
                          : k.intl.string(k.t.bUvv1d),
                }),
            )
        );
    }
    isCustomGiftMessage() {
        let { type: e } = this.props;
        return e === D.uaV.CUSTOM_GIFT;
    }
    renderTitle(e) {
        let { currentUser: t, isSelfGift: n, sku: r } = this.props;
        return this.isCustomGiftMessage() && !n
            ? k.intl.formatToPlainString(k.t.t1SOIS, { recipientDisplayName: R.ZP.getName(t) })
            : null == r
              ? null
              : e.isSubscription
                ? n
                    ? k.intl.string(k.t["2PJ1ND"])
                    : k.intl.string(k.t.hrnGnp)
                : n
                  ? k.intl.string(k.t.QLEMlZ)
                  : k.intl.string(k.t.W4DBc3);
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
        if (null == r) return k.intl.string(k.t.ZTNur6);
        if (!n && this.isCustomGiftMessage() && !e.redeemed) return;
        let o = r.isPreorder() ? k.intl.formatToPlainString(k.t.evinTU, { name: r.name }) : r.name;
        if (e.redeemed)
            return e.isSubscription || (0, h.mO)(e) || (0, A.HL)({ productLine: null == r ? void 0 : r.productLine })
                ? k.intl.string(k.t.mVC3Cg)
                : k.intl.format(k.t["ss/L+/"], {
                      skuName: o,
                      onViewInLibrary: this.handleViewLibrary,
                  });
        if (!e.isSubscription && null != t)
            return k.intl.format(k.t.UdXO8P, {
                skuName: o,
                onViewInLibrary: this.handleViewLibrary,
            });
        if (e.isClaimed) return k.intl.string(k.t.ARWFQU);
        if (!a.verified) return k.intl.format(k.t.GQxl7u, { onClick: this.handleVerificationClick });
        if (n)
            return e.isSelfRedeemable
                ? k.intl.string(k.t["lQI+cH"])
                : k.intl.formatToPlainString(k.t["A+etHx"], { skuName: o });
        if (e.isExistingPremiumSubscriptionDisallowed) return k.intl.string(k.t["UCIU9/"]);
        if (e.hasMultipleCopies)
            return null != i
                ? e.isSubscription
                    ? k.intl.format(k.t.l3VxgI, {
                          username: R.ZP.getUserTag(i),
                          maxUses: e.maxUses,
                          skuName: o,
                      })
                    : k.intl.format(k.t["9cYrw8"], {
                          username: R.ZP.getUserTag(i),
                          totalCopies: e.maxUses,
                          skuName: o,
                      })
                : e.isSubscription
                  ? k.intl.formatToPlainString(k.t.svrO3d, {
                        maxUses: e.maxUses,
                        skuName: o,
                    })
                  : k.intl.formatToPlainString(k.t["3AgAn5"], {
                        totalCopies: e.maxUses,
                        skuName: o,
                    });
        if (e.isSubscription) {
            if (null == l) return k.intl.string(k.t.ZTNur6);
            if (null != i) {
                let e = l.interval === M.rV.MONTH ? k.t["/RDIEB"] : k.t["3CX6Eh"];
                return k.intl.format(e, {
                    username: R.ZP.getUserTag(i),
                    skuName: o,
                    intervalCount: l.intervalCount,
                });
            }
            let e = l.interval === M.rV.MONTH ? k.t["2O4lo6"] : k.t["+Xjmsb"];
            return k.intl.format(e, {
                skuName: o,
                intervalCount: l.intervalCount,
            });
        }
        return null != i ? k.intl.format(k.t["3HsdQ0"], { username: R.ZP.getUserTag(i) }) : k.intl.string(k.t.Jdnjjo);
    }
    renderPromotionActions() {
        return (0, r.jsx)(d.zxk, {
            variant: "primary",
            size: "sm",
            text: k.intl.string(k.t["71nuwc"]),
            onClick: this.handleClaimPromotion,
        });
    }
    renderEmbed() {
        let { giftCode: e, width: t } = this.props;
        return null == e
            ? null
            : (0, r.jsx)(L.$, {
                  skuId: e.skuId,
                  onEmbedClick: this.handleEmbedClick,
                  analyticsSection: D.jXE.GIFT_CODE_EMBED,
                  renderCustomActions: () => this.renderActions(e),
                  renderCustomTitle: () => this.renderTitle(e),
                  renderCustomTagline: () => this.renderBody(e),
                  renderCustomMedia: null == e.giftStyle ? void 0 : () => this.renderCustomGiftBox(e),
                  width: t,
              });
    }
    render() {
        let { giftCode: e, resolved: t, width: n, isSelfGift: i } = this.props;
        if (null != e && null != e.promotion)
            return (0, r.jsx)(L.$, {
                skuId: e.skuId,
                onEmbedClick: this.handleClaimPromotion,
                analyticsSection: D.jXE.GIFT_CODE_EMBED,
                renderCustomActions: () => this.renderPromotionActions(),
                renderCustomTitle: () => k.intl.string(k.t.X4p5uL),
                renderCustomTagline: () => k.intl.string(k.t.VIuwDw),
                width: n,
            });
        if (null == e || e.revoked)
            if (t)
                return (0, r.jsx)(V, {
                    isSelfGift: i,
                    width: n,
                });
            else return (0, r.jsx)(m.OR, { isHorizontal: n >= m.aL });
        return (0, h.mO)(e)
            ? (0, r.jsx)("div", {
                  className: U.collectiblesEmbedWrapper,
                  children: this.renderEmbed(),
              })
            : this.renderEmbed();
    }
    constructor(...e) {
        super(...e),
            F(this, "handleViewLibrary", (e) => {
                let { libraryApplication: t } = this.props;
                e.preventDefault(),
                    null != t && t.isHidden()
                        ? (0, O.uL)(D.Z5c.APPLICATION_LIBRARY_SETTINGS)
                        : (0, O.uL)(D.Z5c.APPLICATION_LIBRARY, { state: { applicationId: null != t ? t.id : void 0 } });
            }),
            F(this, "handleVerificationClick", (e) => {
                e.stopPropagation(), e.preventDefault(), p.Z.open(D.oAB.ACCOUNT);
            }),
            F(this, "handleAccept", (e) => {
                let { channelId: t, code: n, content: r, type: i, giftInfo: l } = this.props;
                e.preventDefault(),
                    e.stopPropagation(),
                    N.default.track(D.rMx.OPEN_MODAL, {
                        type: "gift_accept",
                        location: G(B({}, this.analyticsLocation), { object: D.qAy.BUTTON_CTA }),
                    });
                let a = i !== D.uaV.CUSTOM_GIFT ? void 0 : r;
                (0, C.V)({
                    processedCode: n,
                    channelContext: t,
                    customGiftMessage: a,
                    giftInfo: l,
                });
            }),
            F(this, "handleEmbedClick", (e) => {
                let { giftCode: t } = this.props;
                null != t && t.isSubscription && (e.preventDefault(), p.Z.open(D.oAB.PREMIUM));
            }),
            F(this, "handleClaimPromotion", (e) => {
                var t;
                e.stopPropagation(), e.preventDefault();
                let n = null == (t = this.props.giftCode) ? void 0 : t.code;
                null != n && window.open(D.Z5c.BILLING_PROMOTION_REDEMPTION(n));
            }),
            F(this, "renderCustomGiftBox", (e) => {
                let { width: t } = this.props;
                if (null == e || null == e.giftStyle) return null;
                let n = M.jy.includes(e.giftStyle),
                    i = a()(U.customGiftEmbedWrapper, {
                        [U.legacySeasonalGiftEmbedWrapper]: n,
                        [U.giftEmbedWrapperHorizontal]: t >= m.aL,
                    }),
                    l = a()({
                        [U.legacySeasonalGiftEmbedBox]: n,
                        [U.legacySeasonalGiftEmbedBoxHorizontal]: n && t >= m.aL,
                        [U.customGiftEmbedBox]: !n,
                        [U.customGiftEmbedBoxHorizontal]: !n && t >= m.aL,
                    });
                return (0, r.jsxs)("div", {
                    className: i,
                    children: [
                        n && (0, r.jsx)(P.Z, { className: U.headerIcon }),
                        null != e.giftStyle &&
                            (0, r.jsx)(v.Z, {
                                defaultAnimationState: e.redeemed ? E.SR.LOOP : E.SR.IDLE,
                                giftStyle: e.giftStyle,
                                className: l,
                            }),
                    ],
                });
            });
    }
}
let W = (0, _.Z)((0, f.Z)(z)),
    Y = c.ZP.connectStores([x.Z, T.Z, I.default, j.Z, S.Z, y.default, g.Z], (e) => {
        let { code: t, author: n, currentUser: r } = e,
            i = x.Z.get(t),
            l = null != i ? T.Z.get(i.skuId) : null,
            a = null != i && null != i.userId ? I.default.getUser(i.userId) : null;
        return {
            sku: l,
            giftCode: i,
            gifter: a,
            currentUser: r,
            subscriptionPlan: null != i && null != i.subscriptionPlanId ? (0, Z.oE)(i.subscriptionPlanId) : null,
            isSelfGift: null != i ? y.default.getId() === i.userId : y.default.getId() === n.id,
            resolved: x.Z.getIsResolved(t),
            libraryApplication:
                null != l && (null == i ? void 0 : i.entitlementBranches) != null
                    ? A.z2(i.entitlementBranches, l, j.Z)
                    : null,
        };
    })(W);
