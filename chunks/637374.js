n.d(t, { Z: () => X }), n(388685);
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
    h = n(835473),
    m = n(884697),
    g = n(600164),
    E = n(479446),
    b = n(930114),
    y = n(981632),
    O = n(703656),
    v = n(164670),
    I = n(436585),
    T = n(313789),
    S = n(518596),
    A = n(314897),
    C = n(82142),
    N = n(283595),
    R = n(594174),
    P = n(55563),
    D = n(199480),
    w = n(626135),
    x = n(669079),
    L = n(74538),
    M = n(296848),
    j = n(51144),
    k = n(626799),
    U = n(981631),
    G = n(474936),
    B = n(388032),
    Z = n(494452);
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
function V(e) {
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
function H(e, t) {
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
function Y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : H(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function W(e) {
    let { onClick: t, libraryApplication: n } = e;
    return (0, r.jsxs)(d.P3F, {
        className: Z.libraryLink,
        onClick: t,
        children: [
            (0, r.jsx)(d.vqy, {
                size: "md",
                color: "currentColor",
                className: Z.libraryIcon,
            }),
            (0, r.jsx)("div", { children: n.isHidden() ? B.intl.string(B.t.Wi99Ro) : B.intl.string(B.t["+tXad7"]) }),
        ],
    });
}
class K extends i.PureComponent {
    get isHorizontal() {
        let { width: e } = this.props;
        return e >= f.aL;
    }
    handleViewInventory() {
        (0, S.openUserSettings)(T.n.GIFT_PANEL, { section: U.oAB.INVENTORY });
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
            F(this, "renderMedia", () =>
                (0, r.jsx)("div", { className: o()(Z.invalidPoop, { [Z.invalidPoopHorizontal]: this.isHorizontal }) }),
            ),
            F(this, "renderTitle", () =>
                this.props.isSelfGift ? B.intl.string(B.t.mT9B49) : B.intl.string(B.t.Vo5yHw),
            ),
            F(this, "renderActions", () =>
                this.props.isSelfGift
                    ? (0, r.jsx)(d.Button, {
                          variant: "primary",
                          size: "sm",
                          text: B.intl.string(B.t["jcSP+g"]),
                          onClick: this.handleViewInventory,
                      })
                    : (0, r.jsx)(d.Button, {
                          variant: "primary",
                          size: "sm",
                          text: B.intl.string(B.t.bUvv1f),
                          disabled: !0,
                      }),
            ),
            F(this, "renderTagline", () =>
                this.props.isSelfGift ? B.intl.string(B.t.eEM3dq) : B.intl.string(B.t.tB8S6u),
            );
    }
}
class z extends i.Component {
    get analyticsLocation() {
        let {
            analyticsContext: { location: e },
        } = this.props;
        return Y(V({}, e), { section: U.jXE.GIFT_CODE_EMBED });
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
                            : (0, r.jsx)(W, {
                                  onClick: this.handleViewLibrary,
                                  libraryApplication: t,
                              }),
                    ],
                }),
                (0, r.jsxs)(g.Z, {
                    align: g.Z.Align.END,
                    justify: g.Z.Justify.END,
                    className: Z.metadata,
                    direction: g.Z.Direction.VERTICAL,
                    children: [
                        e.hasMultipleCopies ? (0, r.jsx)("div", { children: this.renderGiftCodeCopiesLeft(e) }) : null,
                        e.redeemed || e.isClaimed || null != t || null == e.expiresAt
                            ? null
                            : (0, r.jsx)("div", {
                                  children: B.intl.format(B.t.nZBvUR, { hours: e.expiresAt.diff(l()(), "h") }),
                              }),
                    ],
                }),
            ],
        });
    }
    renderGiftCodeCopiesLeft(e) {
        let t = e.isSubscription ? B.t["4iHwKT"] : B.t.YeLq88;
        return B.intl.format(t, {
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
                Y(V({}, a), {
                    className: (0, m.mO)(e) ? Z.collectiblesAcceptButton : null,
                    size: u.zx.Sizes.SMALL,
                    children: e.redeemed
                        ? B.intl.string(B.t.BTihou)
                        : null != e.giftStyle
                          ? B.intl.string(B.t.TiZFqX)
                          : B.intl.string(B.t.bUvv1f),
                }),
            )
        );
    }
    isCustomGiftMessage() {
        let { type: e } = this.props;
        return e === U.uaV.CUSTOM_GIFT;
    }
    renderTitle(e) {
        let { currentUser: t, isSelfGift: n, sku: r } = this.props;
        return this.isCustomGiftMessage() && !n
            ? B.intl.formatToPlainString(B.t.t1SOId, { recipientDisplayName: j.ZP.getName(t) })
            : null == r
              ? null
              : e.isSubscription
                ? n
                    ? B.intl.string(B.t["2PJ1NP"])
                    : B.intl.string(B.t.hrnGng)
                : n
                  ? B.intl.string(B.t.QLEMld)
                  : B.intl.string(B.t.W4DBcy);
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
        if (null == r) return B.intl.string(B.t.ZTNur7);
        if (!n && this.isCustomGiftMessage() && !e.redeemed) return;
        let s = r.isPreorder() ? B.intl.formatToPlainString(B.t.evinTd, { name: r.name }) : r.name;
        if (e.redeemed)
            return e.isSubscription || (0, m.mO)(e) || (0, v.K$)(r)
                ? B.intl.string(B.t.mVC3Cv)
                : B.intl.format(B.t["ss/L+/"], {
                      skuName: s,
                      onViewInLibrary: this.handleViewLibrary,
                  });
        if (!e.isSubscription && null != t)
            return B.intl.format(B.t.UdXO8P, {
                skuName: s,
                onViewInLibrary: this.handleViewLibrary,
            });
        if (e.isClaimed) return B.intl.string(B.t.ARWFQX);
        if (!o.verified) return B.intl.format(B.t.GQxl7v, { onClick: this.handleVerificationClick });
        if (n)
            return e.isSelfRedeemable
                ? B.intl.string(B.t["lQI+cB"])
                : B.intl.formatToPlainString(B.t["A+etHx"], { skuName: s });
        if (e.isExistingPremiumSubscriptionDisallowed) return B.intl.string(B.t.UCIU9y);
        if (e.hasMultipleCopies)
            return null != i
                ? e.isSubscription
                    ? B.intl.format(B.t.l3VxgG, {
                          username: j.ZP.getUserTag(i),
                          maxUses: e.maxUses,
                          skuName: s,
                      })
                    : B.intl.format(B.t["9cYrw5"], {
                          username: j.ZP.getUserTag(i),
                          totalCopies: e.maxUses,
                          skuName: s,
                      })
                : e.isSubscription
                  ? B.intl.formatToPlainString(B.t.svrO3W, {
                        maxUses: e.maxUses,
                        skuName: s,
                    })
                  : B.intl.formatToPlainString(B.t["3AgAn3"], {
                        totalCopies: e.maxUses,
                        skuName: s,
                    });
        if (e.isSubscription) {
            if (null == a) return B.intl.string(B.t.ZTNur7);
            if (null != i) {
                let e = a.interval === G.rV.MONTH ? B.t["/RDIEA"] : B.t["3CX6Ev"];
                return B.intl.format(e, {
                    username: j.ZP.getUserTag(i),
                    skuName: s,
                    intervalCount: a.intervalCount,
                });
            }
            let e = a.interval === G.rV.MONTH ? B.t["2O4lo5"] : B.t["+XjmsR"];
            return B.intl.format(e, {
                skuName: s,
                intervalCount: a.intervalCount,
            });
        }
        return null != i ? B.intl.format(B.t["3HsdQ/"], { username: j.ZP.getUserTag(i) }) : B.intl.string(B.t.Jdnjjj);
    }
    renderPromotionActions() {
        return (0, r.jsx)(d.Button, {
            variant: "primary",
            size: "sm",
            text: B.intl.string(B.t["71nuwc"]),
            onClick: this.handleClaimPromotion,
        });
    }
    renderEmbed() {
        let { giftCode: e, width: t } = this.props;
        return null == e
            ? null
            : (0, r.jsx)(k.$, {
                  skuId: e.skuId,
                  onEmbedClick: this.handleEmbedClick,
                  analyticsSection: U.jXE.GIFT_CODE_EMBED,
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
            return (0, r.jsx)(k.$, {
                skuId: e.skuId,
                onEmbedClick: this.handleClaimPromotion,
                analyticsSection: U.jXE.GIFT_CODE_EMBED,
                renderCustomActions: () => this.renderPromotionActions(),
                renderCustomTitle: () => B.intl.string(B.t.X4p5uH),
                renderCustomTagline: () => B.intl.string(B.t.VIuwD7),
                width: n,
            });
        if (null == e || e.revoked)
            if (t)
                return (0, r.jsx)(K, {
                    isSelfGift: i,
                    width: n,
                });
            else return (0, r.jsx)(f.OR, { isHorizontal: n >= f.aL });
        return (0, m.mO)(e)
            ? (0, r.jsx)("div", {
                  className: Z.collectiblesEmbedWrapper,
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
                        ? (0, O.uL)(U.Z5c.APPLICATION_LIBRARY_SETTINGS)
                        : (0, O.uL)(U.Z5c.APPLICATION_LIBRARY, { state: { applicationId: null != t ? t.id : void 0 } });
            }),
            F(this, "handleVerificationClick", (e) => {
                e.stopPropagation(),
                    e.preventDefault(),
                    (0, S.openUserSettings)(T.n.ACCOUNT_PANEL, { section: U.oAB.ACCOUNT });
            }),
            F(this, "handleAccept", (e) => {
                let { channelId: t, code: n, content: r, type: i, giftInfo: a } = this.props;
                e.preventDefault(),
                    e.stopPropagation(),
                    w.default.track(U.rMx.OPEN_MODAL, {
                        type: "gift_accept",
                        location: Y(V({}, this.analyticsLocation), { object: U.qAy.BUTTON_CTA }),
                    });
                let o = i !== U.uaV.CUSTOM_GIFT ? void 0 : r;
                (0, b.V)({
                    processedCode: n,
                    channelContext: t,
                    customGiftMessage: o,
                    giftInfo: a,
                });
            }),
            F(this, "handleEmbedClick", (e) => {
                let { giftCode: t, sku: n, skuApplication: r } = this.props;
                null != n && (0, v.K$)(n) && null != r && null != r.guildId
                    ? (e.preventDefault(),
                      (0, I.g)({
                          skuId: n.id,
                          applicationId: r.id,
                          guildId: r.guildId,
                          isStorefront: !1,
                      }))
                    : null != t &&
                      t.isSubscription &&
                      (e.preventDefault(), (0, S.openUserSettings)(T.n.NITRO_PANEL, { section: U.oAB.PREMIUM }));
            }),
            F(this, "handleClaimPromotion", (e) => {
                var t;
                e.stopPropagation(), e.preventDefault();
                let n = null == (t = this.props.giftCode) ? void 0 : t.code;
                null != n && window.open(U.Z5c.BILLING_PROMOTION_REDEMPTION(n));
            }),
            F(this, "renderCustomGiftBox", (e) => {
                let { width: t } = this.props;
                if (null == e || null == e.giftStyle) return null;
                let n = G.jy.includes(e.giftStyle),
                    i = o()(Z.customGiftEmbedWrapper, {
                        [Z.legacySeasonalGiftEmbedWrapper]: n,
                        [Z.giftEmbedWrapperHorizontal]: t >= f.aL,
                    }),
                    a = o()({
                        [Z.legacySeasonalGiftEmbedBox]: n,
                        [Z.legacySeasonalGiftEmbedBoxHorizontal]: n && t >= f.aL,
                        [Z.customGiftEmbedBox]: !n,
                        [Z.customGiftEmbedBoxHorizontal]: !n && t >= f.aL,
                    });
                return (0, r.jsxs)("div", {
                    className: i,
                    children: [
                        n && (0, r.jsx)(D.Z, { className: Z.headerIcon }),
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
let q = (0, p.Z)((0, _.Z)(z)),
    X = function (e) {
        let { code: t, author: n } = e,
            { giftCode: i, resolved: a } = (0, c.cj)([C.Z], () => ({
                giftCode: C.Z.get(t),
                resolved: C.Z.getIsResolved(t),
            })),
            o = (0, c.e7)([R.default], () => (null != i && null != i.userId ? R.default.getUser(i.userId) : null)),
            s = (0, c.e7)([P.Z], () => (null != i ? P.Z.get(i.skuId) : null)),
            l = (0, c.e7)([N.Z], () =>
                null != s && (null == i ? void 0 : i.entitlementBranches) != null
                    ? x.z2(i.entitlementBranches, s, N.Z)
                    : null,
            ),
            u = (0, h.q)(null == s ? void 0 : s.applicationId),
            d = (0, M.IV)(null == i ? void 0 : i.subscriptionPlanId),
            f = (0, c.e7)([A.default], () => (null != i ? A.default.getId() === i.userId : A.default.getId() === n.id));
        return (0, r.jsx)(
            q,
            Y(V({}, e), {
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
