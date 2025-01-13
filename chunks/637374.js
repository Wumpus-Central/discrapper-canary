n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(913527),
    s = n.n(o),
    c = n(442837),
    d = n(481060),
    u = n(230711),
    m = n(568836),
    h = n(730749),
    f = n(112724),
    p = n(607070),
    _ = n(884697),
    g = n(600164),
    E = n(479446),
    C = n(930114),
    I = n(981632),
    x = n(108989),
    N = n(703656),
    v = n(314897),
    T = n(82142),
    S = n(283595),
    A = n(594174),
    b = n(509545),
    j = n(55563),
    R = n(199480),
    Z = n(626135),
    P = n(669079),
    L = n(74538),
    y = n(296848),
    O = n(51144),
    M = n(626799),
    k = n(981631),
    D = n(474936),
    B = n(388032),
    U = n(792857);
function w(e, t, n) {
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
    let { onClick: t, libraryApplication: n } = e;
    return (0, i.jsxs)(d.Clickable, {
        className: U.libraryLink,
        onClick: t,
        children: [
            (0, i.jsx)(d.InventoryIcon, {
                size: 'md',
                color: 'currentColor',
                className: U.libraryIcon
            }),
            (0, i.jsx)('div', { children: n.isHidden() ? B.intl.string(B.t.Wi99Rk) : B.intl.string(B.t['+tXad3']) })
        ]
    });
}
class G extends r.PureComponent {
    get isHorizontal() {
        let { width: e } = this.props;
        return e >= m.aL;
    }
    handleViewInventory() {
        u.Z.open(k.oAB.INVENTORY);
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
            w(this, 'renderMedia', () => (0, i.jsx)('div', { className: a()(U.invalidPoop, { [U.invalidPoopHorizontal]: this.isHorizontal }) })),
            w(this, 'renderTitle', () => (this.props.isSelfGift ? B.intl.string(B.t['mT9B4+']) : B.intl.string(B.t.Vo5yHx))),
            w(this, 'renderActions', () =>
                this.props.isSelfGift
                    ? (0, i.jsx)(d.Button, {
                          size: d.Button.Sizes.SMALL,
                          onClick: this.handleViewInventory,
                          children: B.intl.string(B.t['jcSP+v'])
                      })
                    : (0, i.jsx)(d.Button, {
                          disabled: !0,
                          size: d.Button.Sizes.SMALL,
                          children: B.intl.string(B.t.bUvv1d)
                      })
            ),
            w(this, 'renderTagline', () => (this.props.isSelfGift ? B.intl.string(B.t.aUqE6e) : B.intl.string(B.t['2mWvHB'])));
    }
}
class V extends r.Component {
    get analyticsLocation() {
        let {
            analyticsContext: { location: e }
        } = this.props;
        return {
            ...e,
            section: k.jXE.GIFT_CODE_EMBED
        };
    }
    renderActions(e) {
        let { libraryApplication: t } = this.props;
        return (0, i.jsxs)(g.Z, {
            justify: g.Z.Justify.BETWEEN,
            children: [
                (0, i.jsxs)(g.Z, {
                    children: [
                        this.renderButton(e),
                        null == t || e.isSubscription
                            ? null
                            : (0, i.jsx)(F, {
                                  onClick: this.handleViewLibrary,
                                  libraryApplication: t
                              })
                    ]
                }),
                (0, i.jsxs)(g.Z, {
                    align: g.Z.Align.END,
                    justify: g.Z.Justify.END,
                    className: U.metadata,
                    direction: g.Z.Direction.VERTICAL,
                    children: [e.hasMultipleCopies ? (0, i.jsx)('div', { children: this.renderGiftCodeCopiesLeft(e) }) : null, e.redeemed || e.isClaimed || null != t || null == e.expiresAt ? null : (0, i.jsx)('div', { children: B.intl.format(B.t.nZBvUV, { hours: e.expiresAt.diff(s()(), 'h') }) })]
                })
            ]
        });
    }
    renderGiftCodeCopiesLeft(e) {
        let t = e.isSubscription ? B.t['4iHwKS'] : B.t['YeLq8/'];
        return B.intl.format(t, {
            remaining: e.remainingUses,
            total: e.maxUses
        });
    }
    renderButton(e) {
        let { libraryApplication: t, currentUser: n, isSelfGift: r } = this.props,
            l = {
                onClick: this.handleAccept,
                color: d.Button.Colors.BRAND
            },
            a = (!e.isSubscription && null != t) || (!e.isSelfRedeemable && r) || (e.isExistingPremiumSubscriptionDisallowed && (0, L.I5)(n));
        return (
            (e.redeemed || a || e.isClaimed || !n.verified) && ((l.color = d.Button.Colors.BRAND), (l.disabled = !0)),
            (0, i.jsx)(d.Button, {
                ...l,
                className: (0, _.mO)(e) ? U.collectiblesAcceptButton : null,
                size: d.Button.Sizes.SMALL,
                children: e.redeemed ? B.intl.string(B.t.BTihoq) : null != e.giftStyle ? B.intl.string(B.t.TiZFqa) : B.intl.string(B.t.bUvv1d)
            })
        );
    }
    isCustomGiftMessage() {
        let { type: e } = this.props;
        return e === k.uaV.CUSTOM_GIFT;
    }
    renderTitle(e) {
        let { currentUser: t, isSelfGift: n, sku: i } = this.props;
        return this.isCustomGiftMessage() && !n ? B.intl.formatToPlainString(B.t.t1SOIS, { recipientDisplayName: O.ZP.getName(t) }) : null == i ? null : e.isSubscription ? (n ? B.intl.string(B.t['2PJ1ND']) : B.intl.string(B.t.hrnGnp)) : n ? B.intl.string(B.t.QLEMlZ) : B.intl.string(B.t.W4DBc3);
    }
    renderBody(e) {
        let { libraryApplication: t, isSelfGift: n, sku: i, gifter: r, subscriptionPlan: l, currentUser: a } = this.props;
        if (null == i) return B.intl.string(B.t.ZTNur6);
        if (!n && this.isCustomGiftMessage() && !e.redeemed) return;
        let o = i.isPreorder() ? B.intl.formatToPlainString(B.t.evinTU, { name: i.name }) : i.name;
        if (e.redeemed)
            return e.isSubscription || (0, _.mO)(e)
                ? B.intl.string(B.t.mVC3Cg)
                : B.intl.format(B.t['ss/L+/'], {
                      skuName: o,
                      onViewInLibrary: this.handleViewLibrary
                  });
        if (!e.isSubscription && null != t)
            return B.intl.format(B.t.UdXO8P, {
                skuName: o,
                onViewInLibrary: this.handleViewLibrary
            });
        if (e.isClaimed) return B.intl.string(B.t.ARWFQU);
        if (!a.verified) return B.intl.format(B.t.GQxl7u, { onClick: this.handleVerificationClick });
        if (n) return e.isSelfRedeemable ? B.intl.string(B.t['lQI+cH']) : B.intl.formatToPlainString(B.t['A+etHx'], { skuName: o });
        if (e.isExistingPremiumSubscriptionDisallowed) return B.intl.string(B.t['UCIU9/']);
        if (e.hasMultipleCopies)
            return null != r
                ? e.isSubscription
                    ? B.intl.format(B.t.l3VxgI, {
                          username: O.ZP.getUserTag(r),
                          maxUses: e.maxUses,
                          skuName: o
                      })
                    : B.intl.format(B.t['9cYrw8'], {
                          username: O.ZP.getUserTag(r),
                          totalCopies: e.maxUses,
                          skuName: o
                      })
                : e.isSubscription
                  ? B.intl.formatToPlainString(B.t.svrO3d, {
                        maxUses: e.maxUses,
                        skuName: o
                    })
                  : B.intl.formatToPlainString(B.t['3AgAn5'], {
                        totalCopies: e.maxUses,
                        skuName: o
                    });
        if (e.isSubscription) {
            if (null == l) return B.intl.string(B.t.ZTNur6);
            if (null != r) {
                let e = l.interval === D.rV.MONTH ? B.t['/RDIEB'] : B.t['3CX6Eh'];
                return B.intl.format(e, {
                    username: O.ZP.getUserTag(r),
                    skuName: o,
                    intervalCount: l.intervalCount
                });
            }
            let e = l.interval === D.rV.MONTH ? B.t['2O4lo6'] : B.t['+Xjmsb'];
            return B.intl.format(e, {
                skuName: o,
                intervalCount: l.intervalCount
            });
        }
        return null != r ? B.intl.format(B.t['3HsdQ0'], { username: O.ZP.getUserTag(r) }) : B.intl.string(B.t.Jdnjjo);
    }
    renderPromotionActions() {
        return (0, i.jsx)(d.Button, {
            size: d.Button.Sizes.SMALL,
            onClick: this.handleClaimPromotion,
            children: B.intl.string(B.t['71nuwc'])
        });
    }
    renderEmbed() {
        let { giftCode: e, width: t } = this.props;
        return null == e
            ? null
            : (0, i.jsx)(M.$, {
                  skuId: e.skuId,
                  onEmbedClick: this.handleEmbedClick,
                  analyticsSection: k.jXE.GIFT_CODE_EMBED,
                  renderCustomActions: () => this.renderActions(e),
                  renderCustomTitle: () => this.renderTitle(e),
                  renderCustomTagline: () => this.renderBody(e),
                  renderCustomMedia: null == e.giftStyle ? void 0 : () => this.renderCustomGiftBox(e),
                  width: t
              });
    }
    render() {
        let { giftCode: e, resolved: t, width: n, isSelfGift: r } = this.props;
        if (null != e && null != e.promotion)
            return (0, i.jsx)(M.$, {
                skuId: e.skuId,
                onEmbedClick: this.handleClaimPromotion,
                analyticsSection: k.jXE.GIFT_CODE_EMBED,
                renderCustomActions: () => this.renderPromotionActions(),
                renderCustomTitle: () => B.intl.string(B.t.X4p5uL),
                renderCustomTagline: () => B.intl.string(B.t.VIuwDw),
                width: n
            });
        if (null == e || e.revoked)
            return t
                ? (0, i.jsx)(G, {
                      isSelfGift: r,
                      width: n
                  })
                : (0, i.jsx)(m.OR, { isHorizontal: n >= m.aL });
        return (0, _.mO)(e)
            ? (0, i.jsx)('div', {
                  className: U.collectiblesEmbedWrapper,
                  children: this.renderEmbed()
              })
            : this.renderEmbed();
    }
    constructor(...e) {
        super(...e),
            w(this, 'handleViewLibrary', (e) => {
                let { libraryApplication: t } = this.props;
                e.preventDefault(), null != t && t.isHidden() ? (0, N.uL)(k.Z5c.APPLICATION_LIBRARY_SETTINGS) : (0, N.uL)(k.Z5c.APPLICATION_LIBRARY, { state: { applicationId: null != t ? t.id : void 0 } });
            }),
            w(this, 'handleVerificationClick', (e) => {
                e.stopPropagation(), e.preventDefault(), u.Z.open(k.oAB.ACCOUNT);
            }),
            w(this, 'handleAccept', (e) => {
                let { channelId: t, code: n, content: i, type: r, giftInfo: l } = this.props;
                e.preventDefault(),
                    e.stopPropagation(),
                    Z.default.track(k.rMx.OPEN_MODAL, {
                        type: 'gift_accept',
                        location: {
                            ...this.analyticsLocation,
                            object: k.qAy.BUTTON_CTA
                        }
                    });
                let a = r !== k.uaV.CUSTOM_GIFT ? void 0 : i;
                (0, C.V)({
                    processedCode: n,
                    channelContext: t,
                    customGiftMessage: a,
                    giftInfo: l
                });
            }),
            w(this, 'handleEmbedClick', (e) => {
                let { giftCode: t } = this.props;
                null != t && t.isSubscription && (e.preventDefault(), u.Z.open(k.oAB.PREMIUM));
            }),
            w(this, 'handleClaimPromotion', (e) => {
                var t;
                e.stopPropagation(), e.preventDefault();
                let n = null === (t = this.props.giftCode) || void 0 === t ? void 0 : t.code;
                if (null != n) window.open(k.Z5c.BILLING_PROMOTION_REDEMPTION(n));
            }),
            w(this, 'renderCustomGiftBox', (e) => {
                let { useReducedMotion: t, width: n } = this.props;
                if (null == e || null == e.giftStyle) return null;
                let r = D.jy.includes(e.giftStyle),
                    l = a()(U.customGiftEmbedWrapper, {
                        [U.legacySeasonalGiftEmbedWrapper]: r,
                        [U.giftEmbedWrapperHorizontal]: n >= m.aL
                    }),
                    o = a()({
                        [U.legacySeasonalGiftEmbedBox]: r,
                        [U.legacySeasonalGiftEmbedBoxHorizontal]: r && n >= m.aL,
                        [U.customGiftEmbedBox]: !r,
                        [U.customGiftEmbedBoxHorizontal]: !r && n >= m.aL
                    });
                return (0, i.jsxs)('div', {
                    className: l,
                    children: [
                        !t &&
                            D.eZ.includes(e.giftStyle) &&
                            (0, i.jsx)(x.Z, {
                                className: U.snow,
                                wind: 5
                            }),
                        r && (0, i.jsx)(R.Z, { className: U.headerIcon }),
                        null != e.giftStyle &&
                            (0, i.jsx)(I.Z, {
                                defaultAnimationState: e.redeemed ? E.SR.LOOP : E.SR.IDLE,
                                giftStyle: e.giftStyle,
                                className: o
                            })
                    ]
                });
            });
    }
}
let H = (0, f.Z)((0, h.Z)(V));
t.Z = c.ZP.connectStores([T.Z, j.Z, A.default, S.Z, b.Z, v.default, p.Z], (e) => {
    let { code: t, author: n, currentUser: i } = e,
        r = T.Z.get(t),
        l = null != r ? j.Z.get(r.skuId) : null,
        a = null != r && null != r.userId ? A.default.getUser(r.userId) : null,
        o = p.Z.useReducedMotion;
    return {
        sku: l,
        giftCode: r,
        gifter: a,
        currentUser: i,
        subscriptionPlan: null != r && null != r.subscriptionPlanId ? (0, y.oE)(r.subscriptionPlanId) : null,
        isSelfGift: null != r ? v.default.getId() === r.userId : v.default.getId() === n.id,
        resolved: T.Z.getIsResolved(t),
        libraryApplication: null != l && (null == r ? void 0 : r.entitlementBranches) != null ? P.z2(r.entitlementBranches, l, S.Z) : null,
        useReducedMotion: o
    };
})(H);
