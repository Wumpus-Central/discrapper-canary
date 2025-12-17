n.d(t, { Z: () => X }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(913527),
    l = n.n(s),
    c = n(442837),
    u = n(755721),
    d = n(481060),
    f = n(568836),
    p = n(730749),
    _ = n(112724),
    m = n(100527),
    h = n(835473),
    g = n(884697),
    E = n(600164),
    b = n(479446),
    y = n(930114),
    O = n(981632),
    v = n(703656),
    S = n(164670),
    I = n(436585),
    T = n(313789),
    C = n(518596),
    A = n(314897),
    N = n(82142),
    P = n(283595),
    R = n(594174),
    w = n(55563),
    D = n(199480),
    x = n(626135),
    L = n(669079),
    j = n(74538),
    M = n(296848),
    k = n(51144),
    U = n(626799),
    G = n(981631),
    Z = n(474936),
    F = n(388032),
    B = n(609626);
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
function H(e) {
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
function Y(e, t) {
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
function W(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : Y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function K(e) {
    let { onClick: t, libraryApplication: n } = e;
    return (0, r.jsxs)(d.P3F, {
        className: B.libraryLink,
        onClick: t,
        children: [
            (0, r.jsx)(d.vqy, {
                size: "md",
                color: "currentColor",
                className: B.libraryIcon,
            }),
            (0, r.jsx)("div", { children: n.isHidden() ? F.intl.string(F.t.Wi99Ro) : F.intl.string(F.t["+tXad7"]) }),
        ],
    });
}
class z extends i.PureComponent {
    get isHorizontal() {
        let { width: e } = this.props;
        return e >= f.aL;
    }
    handleViewInventory() {
        (0, C.openUserSettings)(T.n.GIFT_PANEL, { section: G.oAB.INVENTORY });
    }
    render() {
        return (0, r.jsx)(f.$G, {
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
                (0, r.jsx)("div", { className: o()(B.invalidPoop, { [B.invalidPoopHorizontal]: this.isHorizontal }) }),
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
        return W(H({}, e), { section: G.jXE.GIFT_CODE_EMBED });
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
                            : (0, r.jsx)(K, {
                                  onClick: this.handleViewLibrary,
                                  libraryApplication: t,
                              }),
                    ],
                }),
                (0, r.jsxs)(E.Z, {
                    align: E.Z.Align.END,
                    justify: E.Z.Justify.END,
                    className: B.metadata,
                    direction: E.Z.Direction.VERTICAL,
                    children: [
                        e.hasMultipleCopies ? (0, r.jsx)("div", { children: this.renderGiftCodeCopiesLeft(e) }) : null,
                        e.redeemed || e.isClaimed || null != t || null == e.expiresAt
                            ? null
                            : (0, r.jsx)("div", {
                                  children: F.intl.format(F.t.nZBvUR, { hours: e.expiresAt.diff(l()(), "h") }),
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
            a = {
                onClick: this.handleAccept,
                color: u.zx.Colors.BRAND,
            },
            o =
                (!e.isSubscription && null != t) ||
                (!e.isSelfRedeemable && i) ||
                (e.isExistingPremiumSubscriptionDisallowed && (0, j.I5)(n));
        return (
            (e.redeemed || o || e.isClaimed || !n.verified) && ((a.color = u.zx.Colors.BRAND), (a.disabled = !0)),
            (0, r.jsx)(
                u.zx,
                W(H({}, a), {
                    className: (0, g.mO)(e) ? B.collectiblesAcceptButton : null,
                    size: u.zx.Sizes.SMALL,
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
        return e === G.uaV.CUSTOM_GIFT;
    }
    renderTitle(e) {
        let { currentUser: t, isSelfGift: n, sku: r } = this.props;
        return this.isCustomGiftMessage() && !n
            ? F.intl.formatToPlainString(F.t.t1SOId, { recipientDisplayName: k.ZP.getName(t) })
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
            subscriptionPlan: a,
            currentUser: o,
        } = this.props;
        if (null == r) return F.intl.string(F.t.ZTNur7);
        if (!n && this.isCustomGiftMessage() && !e.redeemed) return;
        let s = r.isPreorder() ? F.intl.formatToPlainString(F.t.evinTd, { name: r.name }) : r.name;
        if (e.redeemed)
            return e.isSubscription || (0, g.mO)(e) || (0, S.K$)(r)
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
        if (!o.verified) return F.intl.format(F.t.GQxl7v, { onClick: this.handleVerificationClick });
        if (n)
            return e.isSelfRedeemable
                ? F.intl.string(F.t["lQI+cB"])
                : F.intl.formatToPlainString(F.t["A+etHx"], { skuName: s });
        if (e.isExistingPremiumSubscriptionDisallowed) return F.intl.string(F.t.UCIU9y);
        if (e.hasMultipleCopies)
            return null != i
                ? e.isSubscription
                    ? F.intl.format(F.t.l3VxgG, {
                          username: k.ZP.getUserTag(i),
                          maxUses: e.maxUses,
                          skuName: s,
                      })
                    : F.intl.format(F.t["9cYrw5"], {
                          username: k.ZP.getUserTag(i),
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
            if (null == a) return F.intl.string(F.t.ZTNur7);
            if (null != i) {
                let e = a.interval === Z.rV.MONTH ? F.t["/RDIEA"] : F.t["3CX6Ev"];
                return F.intl.format(e, {
                    username: k.ZP.getUserTag(i),
                    skuName: s,
                    intervalCount: a.intervalCount,
                });
            }
            let e = a.interval === Z.rV.MONTH ? F.t["2O4lo5"] : F.t["+XjmsR"];
            return F.intl.format(e, {
                skuName: s,
                intervalCount: a.intervalCount,
            });
        }
        return null != i ? F.intl.format(F.t["3HsdQ/"], { username: k.ZP.getUserTag(i) }) : F.intl.string(F.t.Jdnjjj);
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
        let i = null != e.giftStyle && !(0, S.K$)(n);
        return (0, r.jsx)(U.$, {
            skuId: e.skuId,
            onEmbedClick: this.handleEmbedClick,
            analyticsSection: G.jXE.GIFT_CODE_EMBED,
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
            return (0, r.jsx)(U.$, {
                skuId: e.skuId,
                onEmbedClick: this.handleClaimPromotion,
                analyticsSection: G.jXE.GIFT_CODE_EMBED,
                renderCustomActions: () => this.renderPromotionActions(),
                renderCustomTitle: () => F.intl.string(F.t.X4p5uH),
                renderCustomTagline: () => F.intl.string(F.t.VIuwD7),
                width: n,
            });
        if (null == e || e.revoked)
            if (t)
                return (0, r.jsx)(z, {
                    isSelfGift: i,
                    width: n,
                });
            else return (0, r.jsx)(f.OR, { isHorizontal: n >= f.aL });
        return (0, g.mO)(e)
            ? (0, r.jsx)("div", {
                  className: B.collectiblesEmbedWrapper,
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
                        ? (0, v.uL)(G.Z5c.APPLICATION_LIBRARY_SETTINGS)
                        : (0, v.uL)(G.Z5c.APPLICATION_LIBRARY, { state: { applicationId: null != t ? t.id : void 0 } });
            }),
            V(this, "handleVerificationClick", (e) => {
                e.stopPropagation(),
                    e.preventDefault(),
                    (0, C.openUserSettings)(T.n.ACCOUNT_PANEL, { section: G.oAB.ACCOUNT });
            }),
            V(this, "handleAccept", (e) => {
                let { channelId: t, code: n, content: r, type: i, giftInfo: a } = this.props;
                e.preventDefault(),
                    e.stopPropagation(),
                    x.default.track(G.rMx.OPEN_MODAL, {
                        type: "gift_accept",
                        location: W(H({}, this.analyticsLocation), { object: G.qAy.BUTTON_CTA }),
                    });
                let o = i !== G.uaV.CUSTOM_GIFT ? void 0 : r;
                (0, y.V)({
                    processedCode: n,
                    channelContext: t,
                    customGiftMessage: o,
                    giftInfo: a,
                });
            }),
            V(this, "handleEmbedClick", (e) => {
                let { giftCode: t, sku: n, skuApplication: r } = this.props;
                null != n && (0, S.K$)(n) && null != r && null != r.guildId
                    ? (e.preventDefault(),
                      (0, I.g)({
                          skuId: n.id,
                          applicationId: r.id,
                          guildId: r.guildId,
                          isStorefront: !1,
                          analyticsLocations: [m.Z.GIFT_CODE_EMBED],
                      }))
                    : null != t &&
                      t.isSubscription &&
                      (e.preventDefault(), (0, C.openUserSettings)(T.n.NITRO_PANEL, { section: G.oAB.PREMIUM }));
            }),
            V(this, "handleClaimPromotion", (e) => {
                var t;
                e.stopPropagation(), e.preventDefault();
                let n = null == (t = this.props.giftCode) ? void 0 : t.code;
                null != n && window.open(G.Z5c.BILLING_PROMOTION_REDEMPTION(n));
            }),
            V(this, "renderCustomGiftBox", (e) => {
                let { width: t } = this.props;
                if (null == e || null == e.giftStyle) return null;
                let n = Z.jy.includes(e.giftStyle),
                    i = o()(B.customGiftEmbedWrapper, {
                        [B.legacySeasonalGiftEmbedWrapper]: n,
                        [B.giftEmbedWrapperHorizontal]: t >= f.aL,
                    }),
                    a = o()({
                        [B.legacySeasonalGiftEmbedBox]: n,
                        [B.legacySeasonalGiftEmbedBoxHorizontal]: n && t >= f.aL,
                        [B.customGiftEmbedBox]: !n,
                        [B.customGiftEmbedBoxHorizontal]: !n && t >= f.aL,
                    });
                return (0, r.jsxs)("div", {
                    className: i,
                    children: [
                        n && (0, r.jsx)(D.Z, { className: B.headerIcon }),
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
let Q = (0, _.Z)((0, p.Z)(q)),
    X = function (e) {
        let { code: t, author: n } = e,
            { giftCode: i, resolved: a } = (0, c.cj)([N.Z], () => ({
                giftCode: N.Z.get(t),
                resolved: N.Z.getIsResolved(t),
            })),
            o = (0, c.e7)([R.default], () => (null != i && null != i.userId ? R.default.getUser(i.userId) : null)),
            s = (0, c.e7)([w.Z], () => (null != i ? w.Z.get(i.skuId) : null)),
            l = (0, c.e7)([P.Z], () =>
                null != s && (null == i ? void 0 : i.entitlementBranches) != null
                    ? L.z2(i.entitlementBranches, s, P.Z)
                    : null,
            ),
            u = (0, h.q)(null == s ? void 0 : s.applicationId),
            d = (0, M.IV)(null == i ? void 0 : i.subscriptionPlanId),
            f = (0, c.e7)([A.default], () => (null != i ? A.default.getId() === i.userId : A.default.getId() === n.id));
        return (0, r.jsx)(
            Q,
            W(H({}, e), {
                skuApplication: u,
                giftCode: i,
                resolved: a,
                gifter: o,
                libraryApplication: l,
                subscriptionPlan: d,
                sku: s,
                isSelfGift: f,
            }),
        );
    };
