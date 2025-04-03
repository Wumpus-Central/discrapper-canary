n.d(t, { Z: () => K }), n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    l = n.n(a),
    o = n(913527),
    s = n.n(o),
    c = n(442837),
    u = n(481060),
    d = n(230711),
    p = n(568836),
    m = n(730749),
    f = n(112724),
    h = n(607070),
    g = n(884697),
    _ = n(600164),
    b = n(479446),
    x = n(930114),
    y = n(981632),
    E = n(108989),
    v = n(703656),
    O = n(314897),
    N = n(82142),
    j = n(283595),
    C = n(594174),
    I = n(509545),
    S = n(55563),
    T = n(199480),
    P = n(626135),
    A = n(669079),
    w = n(74538),
    Z = n(296848),
    k = n(51144),
    R = n(626799),
    D = n(981631),
    L = n(474936),
    M = n(388032),
    W = n(955964);
function U(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function F(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                U(e, t, n[t]);
            });
    }
    return e;
}
function B(e, t) {
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
function G(e) {
    let { onClick: t, libraryApplication: n } = e;
    return (0, r.jsxs)(u.P3F, {
        className: W.libraryLink,
        onClick: t,
        children: [
            (0, r.jsx)(u.vqy, {
                size: 'md',
                color: 'currentColor',
                className: W.libraryIcon
            }),
            (0, r.jsx)('div', { children: n.isHidden() ? M.NW.string(M.t.Wi99Rk) : M.NW.string(M.t['+tXad3']) })
        ]
    });
}
class H extends i.PureComponent {
    get isHorizontal() {
        let { width: e } = this.props;
        return e >= p.aL;
    }
    handleViewInventory() {
        d.Z.open(D.oAB.INVENTORY);
    }
    render() {
        return (0, r.jsx)(p.$G, {
            isHorizontal: this.isHorizontal,
            renderTitle: this.renderTitle,
            renderTagline: this.renderTagline,
            renderMedia: this.renderMedia,
            renderActions: this.renderActions
        });
    }
    constructor(...e) {
        super(...e),
            U(this, 'renderMedia', () => (0, r.jsx)('div', { className: l()(W.invalidPoop, { [W.invalidPoopHorizontal]: this.isHorizontal }) })),
            U(this, 'renderTitle', () => (this.props.isSelfGift ? M.NW.string(M.t['mT9B4+']) : M.NW.string(M.t.Vo5yHx))),
            U(this, 'renderActions', () =>
                this.props.isSelfGift
                    ? (0, r.jsx)(u.zxk, {
                          size: u.zxk.Sizes.SMALL,
                          onClick: this.handleViewInventory,
                          children: M.NW.string(M.t['jcSP+v'])
                      })
                    : (0, r.jsx)(u.zxk, {
                          disabled: !0,
                          size: u.zxk.Sizes.SMALL,
                          children: M.NW.string(M.t.bUvv1d)
                      })
            ),
            U(this, 'renderTagline', () => (this.props.isSelfGift ? M.NW.string(M.t.aUqE6e) : M.NW.string(M.t['2mWvHB'])));
    }
}
class V extends i.Component {
    get analyticsLocation() {
        let {
            analyticsContext: { location: e }
        } = this.props;
        return B(F({}, e), { section: D.jXE.GIFT_CODE_EMBED });
    }
    renderActions(e) {
        let { libraryApplication: t } = this.props;
        return (0, r.jsxs)(_.Z, {
            justify: _.Z.Justify.BETWEEN,
            children: [
                (0, r.jsxs)(_.Z, {
                    children: [
                        this.renderButton(e),
                        null == t || e.isSubscription
                            ? null
                            : (0, r.jsx)(G, {
                                  onClick: this.handleViewLibrary,
                                  libraryApplication: t
                              })
                    ]
                }),
                (0, r.jsxs)(_.Z, {
                    align: _.Z.Align.END,
                    justify: _.Z.Justify.END,
                    className: W.metadata,
                    direction: _.Z.Direction.VERTICAL,
                    children: [e.hasMultipleCopies ? (0, r.jsx)('div', { children: this.renderGiftCodeCopiesLeft(e) }) : null, e.redeemed || e.isClaimed || null != t || null == e.expiresAt ? null : (0, r.jsx)('div', { children: M.NW.format(M.t.nZBvUV, { hours: e.expiresAt.diff(s()(), 'h') }) })]
                })
            ]
        });
    }
    renderGiftCodeCopiesLeft(e) {
        let t = e.isSubscription ? M.t['4iHwKS'] : M.t['YeLq8/'];
        return M.NW.format(t, {
            remaining: e.remainingUses,
            total: e.maxUses
        });
    }
    renderButton(e) {
        let { libraryApplication: t, currentUser: n, isSelfGift: i } = this.props,
            a = {
                onClick: this.handleAccept,
                color: u.zxk.Colors.BRAND
            },
            l = (!e.isSubscription && null != t) || (!e.isSelfRedeemable && i) || (e.isExistingPremiumSubscriptionDisallowed && (0, w.I5)(n));
        return (
            (e.redeemed || l || e.isClaimed || !n.verified) && ((a.color = u.zxk.Colors.BRAND), (a.disabled = !0)),
            (0, r.jsx)(
                u.zxk,
                B(F({}, a), {
                    className: (0, g.mO)(e) ? W.collectiblesAcceptButton : null,
                    size: u.zxk.Sizes.SMALL,
                    children: e.redeemed ? M.NW.string(M.t.BTihoq) : null != e.giftStyle ? M.NW.string(M.t.TiZFqa) : M.NW.string(M.t.bUvv1d)
                })
            )
        );
    }
    isCustomGiftMessage() {
        let { type: e } = this.props;
        return e === D.uaV.CUSTOM_GIFT;
    }
    renderTitle(e) {
        let { currentUser: t, isSelfGift: n, sku: r } = this.props;
        return this.isCustomGiftMessage() && !n ? M.NW.formatToPlainString(M.t.t1SOIS, { recipientDisplayName: k.ZP.getName(t) }) : null == r ? null : e.isSubscription ? (n ? M.NW.string(M.t['2PJ1ND']) : M.NW.string(M.t.hrnGnp)) : n ? M.NW.string(M.t.QLEMlZ) : M.NW.string(M.t.W4DBc3);
    }
    renderBody(e) {
        let { libraryApplication: t, isSelfGift: n, sku: r, gifter: i, subscriptionPlan: a, currentUser: l } = this.props;
        if (null == r) return M.NW.string(M.t.ZTNur6);
        if (!n && this.isCustomGiftMessage() && !e.redeemed) return;
        let o = r.isPreorder() ? M.NW.formatToPlainString(M.t.evinTU, { name: r.name }) : r.name;
        if (e.redeemed)
            return e.isSubscription || (0, g.mO)(e)
                ? M.NW.string(M.t.mVC3Cg)
                : M.NW.format(M.t['ss/L+/'], {
                      skuName: o,
                      onViewInLibrary: this.handleViewLibrary
                  });
        if (!e.isSubscription && null != t)
            return M.NW.format(M.t.UdXO8P, {
                skuName: o,
                onViewInLibrary: this.handleViewLibrary
            });
        if (e.isClaimed) return M.NW.string(M.t.ARWFQU);
        if (!l.verified) return M.NW.format(M.t.GQxl7u, { onClick: this.handleVerificationClick });
        if (n) return e.isSelfRedeemable ? M.NW.string(M.t['lQI+cH']) : M.NW.formatToPlainString(M.t['A+etHx'], { skuName: o });
        if (e.isExistingPremiumSubscriptionDisallowed) return M.NW.string(M.t['UCIU9/']);
        if (e.hasMultipleCopies)
            return null != i
                ? e.isSubscription
                    ? M.NW.format(M.t.l3VxgI, {
                          username: k.ZP.getUserTag(i),
                          maxUses: e.maxUses,
                          skuName: o
                      })
                    : M.NW.format(M.t['9cYrw8'], {
                          username: k.ZP.getUserTag(i),
                          totalCopies: e.maxUses,
                          skuName: o
                      })
                : e.isSubscription
                  ? M.NW.formatToPlainString(M.t.svrO3d, {
                        maxUses: e.maxUses,
                        skuName: o
                    })
                  : M.NW.formatToPlainString(M.t['3AgAn5'], {
                        totalCopies: e.maxUses,
                        skuName: o
                    });
        if (e.isSubscription) {
            if (null == a) return M.NW.string(M.t.ZTNur6);
            if (null != i) {
                let e = a.interval === L.rV.MONTH ? M.t['/RDIEB'] : M.t['3CX6Eh'];
                return M.NW.format(e, {
                    username: k.ZP.getUserTag(i),
                    skuName: o,
                    intervalCount: a.intervalCount
                });
            }
            let e = a.interval === L.rV.MONTH ? M.t['2O4lo6'] : M.t['+Xjmsb'];
            return M.NW.format(e, {
                skuName: o,
                intervalCount: a.intervalCount
            });
        }
        return null != i ? M.NW.format(M.t['3HsdQ0'], { username: k.ZP.getUserTag(i) }) : M.NW.string(M.t.Jdnjjo);
    }
    renderPromotionActions() {
        return (0, r.jsx)(u.zxk, {
            size: u.zxk.Sizes.SMALL,
            onClick: this.handleClaimPromotion,
            children: M.NW.string(M.t['71nuwc'])
        });
    }
    renderEmbed() {
        let { giftCode: e, width: t } = this.props;
        return null == e
            ? null
            : (0, r.jsx)(R.$, {
                  skuId: e.skuId,
                  onEmbedClick: this.handleEmbedClick,
                  analyticsSection: D.jXE.GIFT_CODE_EMBED,
                  renderCustomActions: () => this.renderActions(e),
                  renderCustomTitle: () => this.renderTitle(e),
                  renderCustomTagline: () => this.renderBody(e),
                  renderCustomMedia: null == e.giftStyle ? void 0 : () => this.renderCustomGiftBox(e),
                  width: t
              });
    }
    render() {
        let { giftCode: e, resolved: t, width: n, isSelfGift: i } = this.props;
        if (null != e && null != e.promotion)
            return (0, r.jsx)(R.$, {
                skuId: e.skuId,
                onEmbedClick: this.handleClaimPromotion,
                analyticsSection: D.jXE.GIFT_CODE_EMBED,
                renderCustomActions: () => this.renderPromotionActions(),
                renderCustomTitle: () => M.NW.string(M.t.X4p5uL),
                renderCustomTagline: () => M.NW.string(M.t.VIuwDw),
                width: n
            });
        if (null == e || e.revoked)
            if (t)
                return (0, r.jsx)(H, {
                    isSelfGift: i,
                    width: n
                });
            else return (0, r.jsx)(p.OR, { isHorizontal: n >= p.aL });
        return (0, g.mO)(e)
            ? (0, r.jsx)('div', {
                  className: W.collectiblesEmbedWrapper,
                  children: this.renderEmbed()
              })
            : this.renderEmbed();
    }
    constructor(...e) {
        super(...e),
            U(this, 'handleViewLibrary', (e) => {
                let { libraryApplication: t } = this.props;
                e.preventDefault(), null != t && t.isHidden() ? (0, v.uL)(D.Z5c.APPLICATION_LIBRARY_SETTINGS) : (0, v.uL)(D.Z5c.APPLICATION_LIBRARY, { state: { applicationId: null != t ? t.id : void 0 } });
            }),
            U(this, 'handleVerificationClick', (e) => {
                e.stopPropagation(), e.preventDefault(), d.Z.open(D.oAB.ACCOUNT);
            }),
            U(this, 'handleAccept', (e) => {
                let { channelId: t, code: n, content: r, type: i, giftInfo: a } = this.props;
                e.preventDefault(),
                    e.stopPropagation(),
                    P.default.track(D.rMx.OPEN_MODAL, {
                        type: 'gift_accept',
                        location: B(F({}, this.analyticsLocation), { object: D.qAy.BUTTON_CTA })
                    });
                let l = i !== D.uaV.CUSTOM_GIFT ? void 0 : r;
                (0, x.V)({
                    processedCode: n,
                    channelContext: t,
                    customGiftMessage: l,
                    giftInfo: a
                });
            }),
            U(this, 'handleEmbedClick', (e) => {
                let { giftCode: t } = this.props;
                null != t && t.isSubscription && (e.preventDefault(), d.Z.open(D.oAB.PREMIUM));
            }),
            U(this, 'handleClaimPromotion', (e) => {
                var t;
                e.stopPropagation(), e.preventDefault();
                let n = null == (t = this.props.giftCode) ? void 0 : t.code;
                null != n && window.open(D.Z5c.BILLING_PROMOTION_REDEMPTION(n));
            }),
            U(this, 'renderCustomGiftBox', (e) => {
                let { useReducedMotion: t, width: n } = this.props;
                if (null == e || null == e.giftStyle) return null;
                let i = L.jy.includes(e.giftStyle),
                    a = l()(W.customGiftEmbedWrapper, {
                        [W.legacySeasonalGiftEmbedWrapper]: i,
                        [W.giftEmbedWrapperHorizontal]: n >= p.aL
                    }),
                    o = l()({
                        [W.legacySeasonalGiftEmbedBox]: i,
                        [W.legacySeasonalGiftEmbedBoxHorizontal]: i && n >= p.aL,
                        [W.customGiftEmbedBox]: !i,
                        [W.customGiftEmbedBoxHorizontal]: !i && n >= p.aL
                    });
                return (0, r.jsxs)('div', {
                    className: a,
                    children: [
                        !t &&
                            L.eZ.includes(e.giftStyle) &&
                            (0, r.jsx)(E.Z, {
                                className: W.snow,
                                wind: 5
                            }),
                        i && (0, r.jsx)(T.Z, { className: W.headerIcon }),
                        null != e.giftStyle &&
                            (0, r.jsx)(y.Z, {
                                defaultAnimationState: e.redeemed ? b.SR.LOOP : b.SR.IDLE,
                                giftStyle: e.giftStyle,
                                className: o
                            })
                    ]
                });
            });
    }
}
let z = (0, f.Z)((0, m.Z)(V)),
    K = c.ZP.connectStores([N.Z, S.Z, C.default, j.Z, I.Z, O.default, h.Z], (e) => {
        let { code: t, author: n, currentUser: r } = e,
            i = N.Z.get(t),
            a = null != i ? S.Z.get(i.skuId) : null,
            l = null != i && null != i.userId ? C.default.getUser(i.userId) : null,
            o = h.Z.useReducedMotion;
        return {
            sku: a,
            giftCode: i,
            gifter: l,
            currentUser: r,
            subscriptionPlan: null != i && null != i.subscriptionPlanId ? (0, Z.oE)(i.subscriptionPlanId) : null,
            isSelfGift: null != i ? O.default.getId() === i.userId : O.default.getId() === n.id,
            resolved: N.Z.getIsResolved(t),
            libraryApplication: null != a && (null == i ? void 0 : i.entitlementBranches) != null ? A.z2(i.entitlementBranches, a, j.Z) : null,
            useReducedMotion: o
        };
    })(z);
