n.d(t, { Z: () => z }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(913527),
    o = n.n(s),
    c = n(442837),
    d = n(481060),
    u = n(230711),
    m = n(568836),
    _ = n(730749),
    h = n(112724),
    p = n(607070),
    g = n(884697),
    f = n(600164),
    x = n(479446),
    C = n(930114),
    v = n(981632),
    E = n(108989),
    I = n(703656),
    N = n(314897),
    S = n(82142),
    T = n(283595),
    b = n(594174),
    A = n(509545),
    j = n(55563),
    y = n(199480),
    Z = n(626135),
    R = n(669079),
    L = n(74538),
    P = n(296848),
    k = n(51144),
    M = n(626799),
    O = n(981631),
    D = n(474936),
    w = n(388032),
    F = n(801158);
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
function B(e) {
    let { onClick: t, libraryApplication: n } = e;
    return (0, i.jsxs)(d.P3F, {
        className: F.libraryLink,
        onClick: t,
        children: [
            (0, i.jsx)(d.vqy, {
                size: 'md',
                color: 'currentColor',
                className: F.libraryIcon
            }),
            (0, i.jsx)('div', { children: n.isHidden() ? w.intl.string(w.t.Wi99Rk) : w.intl.string(w.t['+tXad3']) })
        ]
    });
}
class G extends l.PureComponent {
    get isHorizontal() {
        let { width: e } = this.props;
        return e >= m.aL;
    }
    handleViewInventory() {
        u.Z.open(O.oAB.INVENTORY);
    }
    render() {
        return (0, i.jsx)(m.$G, {
            isHorizontal: this.isHorizontal,
            renderTitle: this.renderTitle,
            renderTagline: this.renderTagline,
            renderMedia: this.renderMedia,
            renderActions: this.renderActions
        });
    }
    constructor(...e) {
        super(...e),
            U(this, 'renderMedia', () => (0, i.jsx)('div', { className: r()(F.invalidPoop, { [F.invalidPoopHorizontal]: this.isHorizontal }) })),
            U(this, 'renderTitle', () => (this.props.isSelfGift ? w.intl.string(w.t['mT9B4+']) : w.intl.string(w.t.Vo5yHx))),
            U(this, 'renderActions', () =>
                this.props.isSelfGift
                    ? (0, i.jsx)(d.zxk, {
                          size: d.zxk.Sizes.SMALL,
                          onClick: this.handleViewInventory,
                          children: w.intl.string(w.t['jcSP+v'])
                      })
                    : (0, i.jsx)(d.zxk, {
                          disabled: !0,
                          size: d.zxk.Sizes.SMALL,
                          children: w.intl.string(w.t.bUvv1d)
                      })
            ),
            U(this, 'renderTagline', () => (this.props.isSelfGift ? w.intl.string(w.t.aUqE6e) : w.intl.string(w.t['2mWvHB'])));
    }
}
class H extends l.Component {
    get analyticsLocation() {
        let {
            analyticsContext: { location: e }
        } = this.props;
        return {
            ...e,
            section: O.jXE.GIFT_CODE_EMBED
        };
    }
    renderActions(e) {
        let { libraryApplication: t } = this.props;
        return (0, i.jsxs)(f.Z, {
            justify: f.Z.Justify.BETWEEN,
            children: [
                (0, i.jsxs)(f.Z, {
                    children: [
                        this.renderButton(e),
                        null == t || e.isSubscription
                            ? null
                            : (0, i.jsx)(B, {
                                  onClick: this.handleViewLibrary,
                                  libraryApplication: t
                              })
                    ]
                }),
                (0, i.jsxs)(f.Z, {
                    align: f.Z.Align.END,
                    justify: f.Z.Justify.END,
                    className: F.metadata,
                    direction: f.Z.Direction.VERTICAL,
                    children: [e.hasMultipleCopies ? (0, i.jsx)('div', { children: this.renderGiftCodeCopiesLeft(e) }) : null, e.redeemed || e.isClaimed || null != t || null == e.expiresAt ? null : (0, i.jsx)('div', { children: w.intl.format(w.t.nZBvUV, { hours: e.expiresAt.diff(o()(), 'h') }) })]
                })
            ]
        });
    }
    renderGiftCodeCopiesLeft(e) {
        let t = e.isSubscription ? w.t['4iHwKS'] : w.t['YeLq8/'];
        return w.intl.format(t, {
            remaining: e.remainingUses,
            total: e.maxUses
        });
    }
    renderButton(e) {
        let { libraryApplication: t, currentUser: n, isSelfGift: l } = this.props,
            a = {
                onClick: this.handleAccept,
                color: d.zxk.Colors.BRAND
            },
            r = (!e.isSubscription && null != t) || (!e.isSelfRedeemable && l) || (e.isExistingPremiumSubscriptionDisallowed && (0, L.I5)(n));
        return (
            (e.redeemed || r || e.isClaimed || !n.verified) && ((a.color = d.zxk.Colors.BRAND), (a.disabled = !0)),
            (0, i.jsx)(d.zxk, {
                ...a,
                className: (0, g.mO)(e) ? F.collectiblesAcceptButton : null,
                size: d.zxk.Sizes.SMALL,
                children: e.redeemed ? w.intl.string(w.t.BTihoq) : null != e.giftStyle ? w.intl.string(w.t.TiZFqa) : w.intl.string(w.t.bUvv1d)
            })
        );
    }
    isCustomGiftMessage() {
        let { type: e } = this.props;
        return e === O.uaV.CUSTOM_GIFT;
    }
    renderTitle(e) {
        let { currentUser: t, isSelfGift: n, sku: i } = this.props;
        return this.isCustomGiftMessage() && !n ? w.intl.formatToPlainString(w.t.t1SOIS, { recipientDisplayName: k.ZP.getName(t) }) : null == i ? null : e.isSubscription ? (n ? w.intl.string(w.t['2PJ1ND']) : w.intl.string(w.t.hrnGnp)) : n ? w.intl.string(w.t.QLEMlZ) : w.intl.string(w.t.W4DBc3);
    }
    renderBody(e) {
        let { libraryApplication: t, isSelfGift: n, sku: i, gifter: l, subscriptionPlan: a, currentUser: r } = this.props;
        if (null == i) return w.intl.string(w.t.ZTNur6);
        if (!n && this.isCustomGiftMessage() && !e.redeemed) return;
        let s = i.isPreorder() ? w.intl.formatToPlainString(w.t.evinTU, { name: i.name }) : i.name;
        if (e.redeemed)
            return e.isSubscription || (0, g.mO)(e)
                ? w.intl.string(w.t.mVC3Cg)
                : w.intl.format(w.t['ss/L+/'], {
                      skuName: s,
                      onViewInLibrary: this.handleViewLibrary
                  });
        if (!e.isSubscription && null != t)
            return w.intl.format(w.t.UdXO8P, {
                skuName: s,
                onViewInLibrary: this.handleViewLibrary
            });
        if (e.isClaimed) return w.intl.string(w.t.ARWFQU);
        if (!r.verified) return w.intl.format(w.t.GQxl7u, { onClick: this.handleVerificationClick });
        if (n) return e.isSelfRedeemable ? w.intl.string(w.t['lQI+cH']) : w.intl.formatToPlainString(w.t['A+etHx'], { skuName: s });
        if (e.isExistingPremiumSubscriptionDisallowed) return w.intl.string(w.t['UCIU9/']);
        if (e.hasMultipleCopies)
            return null != l
                ? e.isSubscription
                    ? w.intl.format(w.t.l3VxgI, {
                          username: k.ZP.getUserTag(l),
                          maxUses: e.maxUses,
                          skuName: s
                      })
                    : w.intl.format(w.t['9cYrw8'], {
                          username: k.ZP.getUserTag(l),
                          totalCopies: e.maxUses,
                          skuName: s
                      })
                : e.isSubscription
                  ? w.intl.formatToPlainString(w.t.svrO3d, {
                        maxUses: e.maxUses,
                        skuName: s
                    })
                  : w.intl.formatToPlainString(w.t['3AgAn5'], {
                        totalCopies: e.maxUses,
                        skuName: s
                    });
        if (e.isSubscription) {
            if (null == a) return w.intl.string(w.t.ZTNur6);
            if (null != l) {
                let e = a.interval === D.rV.MONTH ? w.t['/RDIEB'] : w.t['3CX6Eh'];
                return w.intl.format(e, {
                    username: k.ZP.getUserTag(l),
                    skuName: s,
                    intervalCount: a.intervalCount
                });
            }
            let e = a.interval === D.rV.MONTH ? w.t['2O4lo6'] : w.t['+Xjmsb'];
            return w.intl.format(e, {
                skuName: s,
                intervalCount: a.intervalCount
            });
        }
        return null != l ? w.intl.format(w.t['3HsdQ0'], { username: k.ZP.getUserTag(l) }) : w.intl.string(w.t.Jdnjjo);
    }
    renderPromotionActions() {
        return (0, i.jsx)(d.zxk, {
            size: d.zxk.Sizes.SMALL,
            onClick: this.handleClaimPromotion,
            children: w.intl.string(w.t['71nuwc'])
        });
    }
    renderEmbed() {
        let { giftCode: e, width: t } = this.props;
        return null == e
            ? null
            : (0, i.jsx)(M.$, {
                  skuId: e.skuId,
                  onEmbedClick: this.handleEmbedClick,
                  analyticsSection: O.jXE.GIFT_CODE_EMBED,
                  renderCustomActions: () => this.renderActions(e),
                  renderCustomTitle: () => this.renderTitle(e),
                  renderCustomTagline: () => this.renderBody(e),
                  renderCustomMedia: null == e.giftStyle ? void 0 : () => this.renderCustomGiftBox(e),
                  width: t
              });
    }
    render() {
        let { giftCode: e, resolved: t, width: n, isSelfGift: l } = this.props;
        return null != e && null != e.promotion
            ? (0, i.jsx)(M.$, {
                  skuId: e.skuId,
                  onEmbedClick: this.handleClaimPromotion,
                  analyticsSection: O.jXE.GIFT_CODE_EMBED,
                  renderCustomActions: () => this.renderPromotionActions(),
                  renderCustomTitle: () => w.intl.string(w.t.X4p5uL),
                  renderCustomTagline: () => w.intl.string(w.t.VIuwDw),
                  width: n
              })
            : null == e || e.revoked
              ? t
                  ? (0, i.jsx)(G, {
                        isSelfGift: l,
                        width: n
                    })
                  : (0, i.jsx)(m.OR, { isHorizontal: n >= m.aL })
              : (0, g.mO)(e)
                ? (0, i.jsx)('div', {
                      className: F.collectiblesEmbedWrapper,
                      children: this.renderEmbed()
                  })
                : this.renderEmbed();
    }
    constructor(...e) {
        super(...e),
            U(this, 'handleViewLibrary', (e) => {
                let { libraryApplication: t } = this.props;
                e.preventDefault(), null != t && t.isHidden() ? (0, I.uL)(O.Z5c.APPLICATION_LIBRARY_SETTINGS) : (0, I.uL)(O.Z5c.APPLICATION_LIBRARY, { state: { applicationId: null != t ? t.id : void 0 } });
            }),
            U(this, 'handleVerificationClick', (e) => {
                e.stopPropagation(), e.preventDefault(), u.Z.open(O.oAB.ACCOUNT);
            }),
            U(this, 'handleAccept', (e) => {
                let { channelId: t, code: n, content: i, type: l, giftInfo: a } = this.props;
                e.preventDefault(),
                    e.stopPropagation(),
                    Z.default.track(O.rMx.OPEN_MODAL, {
                        type: 'gift_accept',
                        location: {
                            ...this.analyticsLocation,
                            object: O.qAy.BUTTON_CTA
                        }
                    });
                let r = l !== O.uaV.CUSTOM_GIFT ? void 0 : i;
                (0, C.V)({
                    processedCode: n,
                    channelContext: t,
                    customGiftMessage: r,
                    giftInfo: a
                });
            }),
            U(this, 'handleEmbedClick', (e) => {
                let { giftCode: t } = this.props;
                null != t && t.isSubscription && (e.preventDefault(), u.Z.open(O.oAB.PREMIUM));
            }),
            U(this, 'handleClaimPromotion', (e) => {
                var t;
                e.stopPropagation(), e.preventDefault();
                let n = null === (t = this.props.giftCode) || void 0 === t ? void 0 : t.code;
                null != n && window.open(O.Z5c.BILLING_PROMOTION_REDEMPTION(n));
            }),
            U(this, 'renderCustomGiftBox', (e) => {
                let { useReducedMotion: t, width: n } = this.props;
                if (null == e || null == e.giftStyle) return null;
                let l = D.jy.includes(e.giftStyle),
                    a = r()(F.customGiftEmbedWrapper, {
                        [F.legacySeasonalGiftEmbedWrapper]: l,
                        [F.giftEmbedWrapperHorizontal]: n >= m.aL
                    }),
                    s = r()({
                        [F.legacySeasonalGiftEmbedBox]: l,
                        [F.legacySeasonalGiftEmbedBoxHorizontal]: l && n >= m.aL,
                        [F.customGiftEmbedBox]: !l,
                        [F.customGiftEmbedBoxHorizontal]: !l && n >= m.aL
                    });
                return (0, i.jsxs)('div', {
                    className: a,
                    children: [
                        !t &&
                            D.eZ.includes(e.giftStyle) &&
                            (0, i.jsx)(E.Z, {
                                className: F.snow,
                                wind: 5
                            }),
                        l && (0, i.jsx)(y.Z, { className: F.headerIcon }),
                        null != e.giftStyle &&
                            (0, i.jsx)(v.Z, {
                                defaultAnimationState: e.redeemed ? x.SR.LOOP : x.SR.IDLE,
                                giftStyle: e.giftStyle,
                                className: s
                            })
                    ]
                });
            });
    }
}
let V = (0, h.Z)((0, _.Z)(H)),
    z = c.ZP.connectStores([S.Z, j.Z, b.default, T.Z, A.Z, N.default, p.Z], (e) => {
        let { code: t, author: n, currentUser: i } = e,
            l = S.Z.get(t),
            a = null != l ? j.Z.get(l.skuId) : null,
            r = null != l && null != l.userId ? b.default.getUser(l.userId) : null,
            s = p.Z.useReducedMotion;
        return {
            sku: a,
            giftCode: l,
            gifter: r,
            currentUser: i,
            subscriptionPlan: null != l && null != l.subscriptionPlanId ? (0, P.oE)(l.subscriptionPlanId) : null,
            isSelfGift: null != l ? N.default.getId() === l.userId : N.default.getId() === n.id,
            resolved: S.Z.getIsResolved(t),
            libraryApplication: null != a && (null == l ? void 0 : l.entitlementBranches) != null ? R.z2(l.entitlementBranches, a, T.Z) : null,
            useReducedMotion: s
        };
    })(V);
