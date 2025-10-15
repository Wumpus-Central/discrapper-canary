n.d(t, { Z: () => q }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(913527),
    l = n.n(s),
    c = n(442837),
    u = n(755721),
    d = n(481060),
    f = n(568836),
    _ = n(730749),
    p = n(112724),
    h = n(607070),
    m = n(884697),
    g = n(600164),
    E = n(479446),
    b = n(930114),
    y = n(981632),
    O = n(703656),
    v = n(313789),
    I = n(518596),
    T = n(314897),
    S = n(82142),
    A = n(283595),
    C = n(594174),
    N = n(509545),
    R = n(55563),
    P = n(199480),
    w = n(626135),
    D = n(669079),
    L = n(74538),
    x = n(296848),
    M = n(51144),
    j = n(626799),
    k = n(981631),
    U = n(474936),
    G = n(388032),
    B = n(494452);
function Z(e, t, n) {
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
function F(e) {
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
                Z(e, t, n[t]);
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
function H(e, t) {
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
function Y(e) {
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
            (0, r.jsx)("div", { children: n.isHidden() ? G.intl.string(G.t.Wi99Ro) : G.intl.string(G.t["+tXad7"]) }),
        ],
    });
}
class W extends i.PureComponent {
    get isHorizontal() {
        let { width: e } = this.props;
        return e >= f.aL;
    }
    handleViewInventory() {
        (0, I.openUserSettings)(v.n.GIFT_PANEL, { section: k.oAB.INVENTORY });
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
            Z(this, "renderMedia", () =>
                (0, r.jsx)("div", { className: o()(B.invalidPoop, { [B.invalidPoopHorizontal]: this.isHorizontal }) }),
            ),
            Z(this, "renderTitle", () =>
                this.props.isSelfGift ? G.intl.string(G.t.mT9B49) : G.intl.string(G.t.Vo5yHw),
            ),
            Z(this, "renderActions", () =>
                this.props.isSelfGift
                    ? (0, r.jsx)(d.Button, {
                          variant: "primary",
                          size: "sm",
                          text: G.intl.string(G.t["jcSP+g"]),
                          onClick: this.handleViewInventory,
                      })
                    : (0, r.jsx)(d.Button, {
                          variant: "primary",
                          size: "sm",
                          text: G.intl.string(G.t.bUvv1f),
                          disabled: !0,
                      }),
            ),
            Z(this, "renderTagline", () =>
                this.props.isSelfGift ? G.intl.string(G.t.eEM3dq) : G.intl.string(G.t.tB8S6u),
            );
    }
}
class K extends i.Component {
    get analyticsLocation() {
        let {
            analyticsContext: { location: e },
        } = this.props;
        return H(F({}, e), { section: k.jXE.GIFT_CODE_EMBED });
    }
    renderActions(e) {
        let { libraryApplication: t } = this.props;
        return (0, r.jsxs)(g.Z, {
            justify: g.Z.Justify.BETWEEN,
            children: [
                (0, r.jsxs)(g.Z, {
                    children: [
                        this.renderButton(e),
                        null == t || e.isSubscription
                            ? null
                            : (0, r.jsx)(Y, {
                                  onClick: this.handleViewLibrary,
                                  libraryApplication: t,
                              }),
                    ],
                }),
                (0, r.jsxs)(g.Z, {
                    align: g.Z.Align.END,
                    justify: g.Z.Justify.END,
                    className: B.metadata,
                    direction: g.Z.Direction.VERTICAL,
                    children: [
                        e.hasMultipleCopies ? (0, r.jsx)("div", { children: this.renderGiftCodeCopiesLeft(e) }) : null,
                        e.redeemed || e.isClaimed || null != t || null == e.expiresAt
                            ? null
                            : (0, r.jsx)("div", {
                                  children: G.intl.format(G.t.nZBvUR, { hours: e.expiresAt.diff(l()(), "h") }),
                              }),
                    ],
                }),
            ],
        });
    }
    renderGiftCodeCopiesLeft(e) {
        let t = e.isSubscription ? G.t["4iHwKT"] : G.t.YeLq88;
        return G.intl.format(t, {
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
                (e.isExistingPremiumSubscriptionDisallowed && (0, L.I5)(n));
        return (
            (e.redeemed || o || e.isClaimed || !n.verified) && ((a.color = u.zx.Colors.BRAND), (a.disabled = !0)),
            (0, r.jsx)(
                u.zx,
                H(F({}, a), {
                    className: (0, m.mO)(e) ? B.collectiblesAcceptButton : null,
                    size: u.zx.Sizes.SMALL,
                    children: e.redeemed
                        ? G.intl.string(G.t.BTihou)
                        : null != e.giftStyle
                          ? G.intl.string(G.t.TiZFqX)
                          : G.intl.string(G.t.bUvv1f),
                }),
            )
        );
    }
    isCustomGiftMessage() {
        let { type: e } = this.props;
        return e === k.uaV.CUSTOM_GIFT;
    }
    renderTitle(e) {
        let { currentUser: t, isSelfGift: n, sku: r } = this.props;
        return this.isCustomGiftMessage() && !n
            ? G.intl.formatToPlainString(G.t.t1SOId, { recipientDisplayName: M.ZP.getName(t) })
            : null == r
              ? null
              : e.isSubscription
                ? n
                    ? G.intl.string(G.t["2PJ1NP"])
                    : G.intl.string(G.t.hrnGng)
                : n
                  ? G.intl.string(G.t.QLEMld)
                  : G.intl.string(G.t.W4DBcy);
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
        if (null == r) return G.intl.string(G.t.ZTNur7);
        if (!n && this.isCustomGiftMessage() && !e.redeemed) return;
        let s = r.isPreorder() ? G.intl.formatToPlainString(G.t.evinTd, { name: r.name }) : r.name;
        if (e.redeemed)
            return e.isSubscription || (0, m.mO)(e) || (0, D.HL)({ productLine: null == r ? void 0 : r.productLine })
                ? G.intl.string(G.t.mVC3Cv)
                : G.intl.format(G.t["ss/L+/"], {
                      skuName: s,
                      onViewInLibrary: this.handleViewLibrary,
                  });
        if (!e.isSubscription && null != t)
            return G.intl.format(G.t.UdXO8P, {
                skuName: s,
                onViewInLibrary: this.handleViewLibrary,
            });
        if (e.isClaimed) return G.intl.string(G.t.ARWFQX);
        if (!o.verified) return G.intl.format(G.t.GQxl7v, { onClick: this.handleVerificationClick });
        if (n)
            return e.isSelfRedeemable
                ? G.intl.string(G.t["lQI+cB"])
                : G.intl.formatToPlainString(G.t["A+etHx"], { skuName: s });
        if (e.isExistingPremiumSubscriptionDisallowed) return G.intl.string(G.t.UCIU9y);
        if (e.hasMultipleCopies)
            return null != i
                ? e.isSubscription
                    ? G.intl.format(G.t.l3VxgG, {
                          username: M.ZP.getUserTag(i),
                          maxUses: e.maxUses,
                          skuName: s,
                      })
                    : G.intl.format(G.t["9cYrw5"], {
                          username: M.ZP.getUserTag(i),
                          totalCopies: e.maxUses,
                          skuName: s,
                      })
                : e.isSubscription
                  ? G.intl.formatToPlainString(G.t.svrO3W, {
                        maxUses: e.maxUses,
                        skuName: s,
                    })
                  : G.intl.formatToPlainString(G.t["3AgAn3"], {
                        totalCopies: e.maxUses,
                        skuName: s,
                    });
        if (e.isSubscription) {
            if (null == a) return G.intl.string(G.t.ZTNur7);
            if (null != i) {
                let e = a.interval === U.rV.MONTH ? G.t["/RDIEA"] : G.t["3CX6Ev"];
                return G.intl.format(e, {
                    username: M.ZP.getUserTag(i),
                    skuName: s,
                    intervalCount: a.intervalCount,
                });
            }
            let e = a.interval === U.rV.MONTH ? G.t["2O4lo5"] : G.t["+XjmsR"];
            return G.intl.format(e, {
                skuName: s,
                intervalCount: a.intervalCount,
            });
        }
        return null != i ? G.intl.format(G.t["3HsdQ/"], { username: M.ZP.getUserTag(i) }) : G.intl.string(G.t.Jdnjjj);
    }
    renderPromotionActions() {
        return (0, r.jsx)(d.Button, {
            variant: "primary",
            size: "sm",
            text: G.intl.string(G.t["71nuwc"]),
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
                  analyticsSection: k.jXE.GIFT_CODE_EMBED,
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
                analyticsSection: k.jXE.GIFT_CODE_EMBED,
                renderCustomActions: () => this.renderPromotionActions(),
                renderCustomTitle: () => G.intl.string(G.t.X4p5uH),
                renderCustomTagline: () => G.intl.string(G.t.VIuwD7),
                width: n,
            });
        if (null == e || e.revoked)
            if (t)
                return (0, r.jsx)(W, {
                    isSelfGift: i,
                    width: n,
                });
            else return (0, r.jsx)(f.OR, { isHorizontal: n >= f.aL });
        return (0, m.mO)(e)
            ? (0, r.jsx)("div", {
                  className: B.collectiblesEmbedWrapper,
                  children: this.renderEmbed(),
              })
            : this.renderEmbed();
    }
    constructor(...e) {
        super(...e),
            Z(this, "handleViewLibrary", (e) => {
                let { libraryApplication: t } = this.props;
                e.preventDefault(),
                    null != t && t.isHidden()
                        ? (0, O.uL)(k.Z5c.APPLICATION_LIBRARY_SETTINGS)
                        : (0, O.uL)(k.Z5c.APPLICATION_LIBRARY, { state: { applicationId: null != t ? t.id : void 0 } });
            }),
            Z(this, "handleVerificationClick", (e) => {
                e.stopPropagation(),
                    e.preventDefault(),
                    (0, I.openUserSettings)(v.n.ACCOUNT_PANEL, { section: k.oAB.ACCOUNT });
            }),
            Z(this, "handleAccept", (e) => {
                let { channelId: t, code: n, content: r, type: i, giftInfo: a } = this.props;
                e.preventDefault(),
                    e.stopPropagation(),
                    w.default.track(k.rMx.OPEN_MODAL, {
                        type: "gift_accept",
                        location: H(F({}, this.analyticsLocation), { object: k.qAy.BUTTON_CTA }),
                    });
                let o = i !== k.uaV.CUSTOM_GIFT ? void 0 : r;
                (0, b.V)({
                    processedCode: n,
                    channelContext: t,
                    customGiftMessage: o,
                    giftInfo: a,
                });
            }),
            Z(this, "handleEmbedClick", (e) => {
                let { giftCode: t } = this.props;
                null != t &&
                    t.isSubscription &&
                    (e.preventDefault(), (0, I.openUserSettings)(v.n.NITRO_PANEL, { section: k.oAB.PREMIUM }));
            }),
            Z(this, "handleClaimPromotion", (e) => {
                var t;
                e.stopPropagation(), e.preventDefault();
                let n = null == (t = this.props.giftCode) ? void 0 : t.code;
                null != n && window.open(k.Z5c.BILLING_PROMOTION_REDEMPTION(n));
            }),
            Z(this, "renderCustomGiftBox", (e) => {
                let { width: t } = this.props;
                if (null == e || null == e.giftStyle) return null;
                let n = U.jy.includes(e.giftStyle),
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
                        n && (0, r.jsx)(P.Z, { className: B.headerIcon }),
                        null != e.giftStyle &&
                            (0, r.jsx)(y.Z, {
                                defaultAnimationState: e.redeemed ? E.SR.LOOP : E.SR.IDLE,
                                giftStyle: e.giftStyle,
                                className: a,
                            }),
                    ],
                });
            });
    }
}
let z = (0, p.Z)((0, _.Z)(K)),
    q = c.ZP.connectStores([S.Z, R.Z, C.default, A.Z, N.Z, T.default, h.Z], (e) => {
        let { code: t, author: n, currentUser: r } = e,
            i = S.Z.get(t),
            a = null != i ? R.Z.get(i.skuId) : null,
            o = null != i && null != i.userId ? C.default.getUser(i.userId) : null;
        return {
            sku: a,
            giftCode: i,
            gifter: o,
            currentUser: r,
            subscriptionPlan: null != i && null != i.subscriptionPlanId ? (0, x.oE)(i.subscriptionPlanId) : null,
            isSelfGift: null != i ? T.default.getId() === i.userId : T.default.getId() === n.id,
            resolved: S.Z.getIsResolved(t),
            libraryApplication:
                null != a && (null == i ? void 0 : i.entitlementBranches) != null
                    ? D.z2(i.entitlementBranches, a, A.Z)
                    : null,
        };
    })(z);
