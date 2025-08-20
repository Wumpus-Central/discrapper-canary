n.d(t, { Z: () => z }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(913527),
    l = n.n(s),
    c = n(442837),
    u = n(755721),
    d = n(481060),
    f = n(230711),
    _ = n(568836),
    p = n(730749),
    h = n(112724),
    m = n(607070),
    g = n(884697),
    E = n(600164),
    b = n(479446),
    y = n(930114),
    O = n(981632),
    v = n(703656),
    I = n(314897),
    T = n(82142),
    S = n(283595),
    A = n(594174),
    C = n(509545),
    N = n(55563),
    R = n(199480),
    P = n(626135),
    w = n(669079),
    D = n(74538),
    x = n(296848),
    L = n(51144),
    j = n(626799),
    M = n(981631),
    k = n(474936),
    U = n(388032),
    G = n(494452);
function B(e, t, n) {
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
function Z(e) {
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
                B(e, t, n[t]);
            });
    }
    return e;
}
function V(e, t) {
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
function F(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : V(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function H(e) {
    let { onClick: t, libraryApplication: n } = e;
    return (0, r.jsxs)(d.P3F, {
        className: G.libraryLink,
        onClick: t,
        children: [
            (0, r.jsx)(d.vqy, {
                size: "md",
                color: "currentColor",
                className: G.libraryIcon,
            }),
            (0, r.jsx)("div", { children: n.isHidden() ? U.intl.string(U.t.Wi99Rk) : U.intl.string(U.t["+tXad3"]) }),
        ],
    });
}
class Y extends i.PureComponent {
    get isHorizontal() {
        let { width: e } = this.props;
        return e >= _.aL;
    }
    handleViewInventory() {
        f.Z.open(M.oAB.INVENTORY);
    }
    render() {
        return (0, r.jsx)(_.$G, {
            isHorizontal: this.isHorizontal,
            renderTitle: this.renderTitle,
            renderTagline: this.renderTagline,
            renderMedia: this.renderMedia,
            renderActions: this.renderActions,
        });
    }
    constructor(...e) {
        super(...e),
            B(this, "renderMedia", () =>
                (0, r.jsx)("div", { className: o()(G.invalidPoop, { [G.invalidPoopHorizontal]: this.isHorizontal }) }),
            ),
            B(this, "renderTitle", () =>
                this.props.isSelfGift ? U.intl.string(U.t["mT9B4+"]) : U.intl.string(U.t.Vo5yHx),
            ),
            B(this, "renderActions", () =>
                this.props.isSelfGift
                    ? (0, r.jsx)(d.zxk, {
                          variant: "primary",
                          size: "sm",
                          text: U.intl.string(U.t["jcSP+v"]),
                          onClick: this.handleViewInventory,
                      })
                    : (0, r.jsx)(d.zxk, {
                          variant: "primary",
                          size: "sm",
                          text: U.intl.string(U.t.bUvv1d),
                          disabled: !0,
                      }),
            ),
            B(this, "renderTagline", () =>
                this.props.isSelfGift ? U.intl.string(U.t.aUqE6e) : U.intl.string(U.t["2mWvHB"]),
            );
    }
}
class W extends i.Component {
    get analyticsLocation() {
        let {
            analyticsContext: { location: e },
        } = this.props;
        return F(Z({}, e), { section: M.jXE.GIFT_CODE_EMBED });
    }
    renderActions(e) {
        let { libraryApplication: t } = this.props;
        return (0, r.jsxs)(E.Z, {
            justify: E.Z.Justify.BETWEEN,
            children: [
                (0, r.jsxs)(E.Z, {
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
                (0, r.jsxs)(E.Z, {
                    align: E.Z.Align.END,
                    justify: E.Z.Justify.END,
                    className: G.metadata,
                    direction: E.Z.Direction.VERTICAL,
                    children: [
                        e.hasMultipleCopies ? (0, r.jsx)("div", { children: this.renderGiftCodeCopiesLeft(e) }) : null,
                        e.redeemed || e.isClaimed || null != t || null == e.expiresAt
                            ? null
                            : (0, r.jsx)("div", {
                                  children: U.intl.format(U.t.nZBvUV, { hours: e.expiresAt.diff(l()(), "h") }),
                              }),
                    ],
                }),
            ],
        });
    }
    renderGiftCodeCopiesLeft(e) {
        let t = e.isSubscription ? U.t["4iHwKS"] : U.t["YeLq8/"];
        return U.intl.format(t, {
            remaining: e.remainingUses,
            total: e.maxUses,
        });
    }
    renderButton(e) {
        let { libraryApplication: t, currentUser: n, isSelfGift: i } = this.props,
            a = {
                onClick: this.handleAccept,
                color: u.zx.Colors.BRAND,
            },
            o =
                (!e.isSubscription && null != t) ||
                (!e.isSelfRedeemable && i) ||
                (e.isExistingPremiumSubscriptionDisallowed && (0, D.I5)(n));
        return (
            (e.redeemed || o || e.isClaimed || !n.verified) && ((a.color = u.zx.Colors.BRAND), (a.disabled = !0)),
            (0, r.jsx)(
                u.zx,
                F(Z({}, a), {
                    className: (0, g.mO)(e) ? G.collectiblesAcceptButton : null,
                    size: u.zx.Sizes.SMALL,
                    children: e.redeemed
                        ? U.intl.string(U.t.BTihoq)
                        : null != e.giftStyle
                          ? U.intl.string(U.t.TiZFqa)
                          : U.intl.string(U.t.bUvv1d),
                }),
            )
        );
    }
    isCustomGiftMessage() {
        let { type: e } = this.props;
        return e === M.uaV.CUSTOM_GIFT;
    }
    renderTitle(e) {
        let { currentUser: t, isSelfGift: n, sku: r } = this.props;
        return this.isCustomGiftMessage() && !n
            ? U.intl.formatToPlainString(U.t.t1SOIS, { recipientDisplayName: L.ZP.getName(t) })
            : null == r
              ? null
              : e.isSubscription
                ? n
                    ? U.intl.string(U.t["2PJ1ND"])
                    : U.intl.string(U.t.hrnGnp)
                : n
                  ? U.intl.string(U.t.QLEMlZ)
                  : U.intl.string(U.t.W4DBc3);
    }
    renderBody(e) {
        let {
            libraryApplication: t,
            isSelfGift: n,
            sku: r,
            gifter: i,
            subscriptionPlan: a,
            currentUser: o,
        } = this.props;
        if (null == r) return U.intl.string(U.t.ZTNur6);
        if (!n && this.isCustomGiftMessage() && !e.redeemed) return;
        let s = r.isPreorder() ? U.intl.formatToPlainString(U.t.evinTU, { name: r.name }) : r.name;
        if (e.redeemed)
            return e.isSubscription || (0, g.mO)(e) || (0, w.HL)({ productLine: null == r ? void 0 : r.productLine })
                ? U.intl.string(U.t.mVC3Cg)
                : U.intl.format(U.t["ss/L+/"], {
                      skuName: s,
                      onViewInLibrary: this.handleViewLibrary,
                  });
        if (!e.isSubscription && null != t)
            return U.intl.format(U.t.UdXO8P, {
                skuName: s,
                onViewInLibrary: this.handleViewLibrary,
            });
        if (e.isClaimed) return U.intl.string(U.t.ARWFQU);
        if (!o.verified) return U.intl.format(U.t.GQxl7u, { onClick: this.handleVerificationClick });
        if (n)
            return e.isSelfRedeemable
                ? U.intl.string(U.t["lQI+cH"])
                : U.intl.formatToPlainString(U.t["A+etHx"], { skuName: s });
        if (e.isExistingPremiumSubscriptionDisallowed) return U.intl.string(U.t["UCIU9/"]);
        if (e.hasMultipleCopies)
            return null != i
                ? e.isSubscription
                    ? U.intl.format(U.t.l3VxgI, {
                          username: L.ZP.getUserTag(i),
                          maxUses: e.maxUses,
                          skuName: s,
                      })
                    : U.intl.format(U.t["9cYrw8"], {
                          username: L.ZP.getUserTag(i),
                          totalCopies: e.maxUses,
                          skuName: s,
                      })
                : e.isSubscription
                  ? U.intl.formatToPlainString(U.t.svrO3d, {
                        maxUses: e.maxUses,
                        skuName: s,
                    })
                  : U.intl.formatToPlainString(U.t["3AgAn5"], {
                        totalCopies: e.maxUses,
                        skuName: s,
                    });
        if (e.isSubscription) {
            if (null == a) return U.intl.string(U.t.ZTNur6);
            if (null != i) {
                let e = a.interval === k.rV.MONTH ? U.t["/RDIEB"] : U.t["3CX6Eh"];
                return U.intl.format(e, {
                    username: L.ZP.getUserTag(i),
                    skuName: s,
                    intervalCount: a.intervalCount,
                });
            }
            let e = a.interval === k.rV.MONTH ? U.t["2O4lo6"] : U.t["+Xjmsb"];
            return U.intl.format(e, {
                skuName: s,
                intervalCount: a.intervalCount,
            });
        }
        return null != i ? U.intl.format(U.t["3HsdQ0"], { username: L.ZP.getUserTag(i) }) : U.intl.string(U.t.Jdnjjo);
    }
    renderPromotionActions() {
        return (0, r.jsx)(d.zxk, {
            variant: "primary",
            size: "sm",
            text: U.intl.string(U.t["71nuwc"]),
            onClick: this.handleClaimPromotion,
        });
    }
    renderEmbed() {
        let { giftCode: e, width: t } = this.props;
        return null == e
            ? null
            : (0, r.jsx)(j.$, {
                  skuId: e.skuId,
                  onEmbedClick: this.handleEmbedClick,
                  analyticsSection: M.jXE.GIFT_CODE_EMBED,
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
            return (0, r.jsx)(j.$, {
                skuId: e.skuId,
                onEmbedClick: this.handleClaimPromotion,
                analyticsSection: M.jXE.GIFT_CODE_EMBED,
                renderCustomActions: () => this.renderPromotionActions(),
                renderCustomTitle: () => U.intl.string(U.t.X4p5uL),
                renderCustomTagline: () => U.intl.string(U.t.VIuwDw),
                width: n,
            });
        if (null == e || e.revoked)
            if (t)
                return (0, r.jsx)(Y, {
                    isSelfGift: i,
                    width: n,
                });
            else return (0, r.jsx)(_.OR, { isHorizontal: n >= _.aL });
        return (0, g.mO)(e)
            ? (0, r.jsx)("div", {
                  className: G.collectiblesEmbedWrapper,
                  children: this.renderEmbed(),
              })
            : this.renderEmbed();
    }
    constructor(...e) {
        super(...e),
            B(this, "handleViewLibrary", (e) => {
                let { libraryApplication: t } = this.props;
                e.preventDefault(),
                    null != t && t.isHidden()
                        ? (0, v.uL)(M.Z5c.APPLICATION_LIBRARY_SETTINGS)
                        : (0, v.uL)(M.Z5c.APPLICATION_LIBRARY, { state: { applicationId: null != t ? t.id : void 0 } });
            }),
            B(this, "handleVerificationClick", (e) => {
                e.stopPropagation(), e.preventDefault(), f.Z.open(M.oAB.ACCOUNT);
            }),
            B(this, "handleAccept", (e) => {
                let { channelId: t, code: n, content: r, type: i, giftInfo: a } = this.props;
                e.preventDefault(),
                    e.stopPropagation(),
                    P.default.track(M.rMx.OPEN_MODAL, {
                        type: "gift_accept",
                        location: F(Z({}, this.analyticsLocation), { object: M.qAy.BUTTON_CTA }),
                    });
                let o = i !== M.uaV.CUSTOM_GIFT ? void 0 : r;
                (0, y.V)({
                    processedCode: n,
                    channelContext: t,
                    customGiftMessage: o,
                    giftInfo: a,
                });
            }),
            B(this, "handleEmbedClick", (e) => {
                let { giftCode: t } = this.props;
                null != t && t.isSubscription && (e.preventDefault(), f.Z.open(M.oAB.PREMIUM));
            }),
            B(this, "handleClaimPromotion", (e) => {
                var t;
                e.stopPropagation(), e.preventDefault();
                let n = null == (t = this.props.giftCode) ? void 0 : t.code;
                null != n && window.open(M.Z5c.BILLING_PROMOTION_REDEMPTION(n));
            }),
            B(this, "renderCustomGiftBox", (e) => {
                let { width: t } = this.props;
                if (null == e || null == e.giftStyle) return null;
                let n = k.jy.includes(e.giftStyle),
                    i = o()(G.customGiftEmbedWrapper, {
                        [G.legacySeasonalGiftEmbedWrapper]: n,
                        [G.giftEmbedWrapperHorizontal]: t >= _.aL,
                    }),
                    a = o()({
                        [G.legacySeasonalGiftEmbedBox]: n,
                        [G.legacySeasonalGiftEmbedBoxHorizontal]: n && t >= _.aL,
                        [G.customGiftEmbedBox]: !n,
                        [G.customGiftEmbedBoxHorizontal]: !n && t >= _.aL,
                    });
                return (0, r.jsxs)("div", {
                    className: i,
                    children: [
                        n && (0, r.jsx)(R.Z, { className: G.headerIcon }),
                        null != e.giftStyle &&
                            (0, r.jsx)(O.Z, {
                                defaultAnimationState: e.redeemed ? b.SR.LOOP : b.SR.IDLE,
                                giftStyle: e.giftStyle,
                                className: a,
                            }),
                    ],
                });
            });
    }
}
let K = (0, h.Z)((0, p.Z)(W)),
    z = c.ZP.connectStores([T.Z, N.Z, A.default, S.Z, C.Z, I.default, m.Z], (e) => {
        let { code: t, author: n, currentUser: r } = e,
            i = T.Z.get(t),
            a = null != i ? N.Z.get(i.skuId) : null,
            o = null != i && null != i.userId ? A.default.getUser(i.userId) : null;
        return {
            sku: a,
            giftCode: i,
            gifter: o,
            currentUser: r,
            subscriptionPlan: null != i && null != i.subscriptionPlanId ? (0, x.oE)(i.subscriptionPlanId) : null,
            isSelfGift: null != i ? I.default.getId() === i.userId : I.default.getId() === n.id,
            resolved: T.Z.getIsResolved(t),
            libraryApplication:
                null != a && (null == i ? void 0 : i.entitlementBranches) != null
                    ? w.z2(i.entitlementBranches, a, S.Z)
                    : null,
        };
    })(K);
