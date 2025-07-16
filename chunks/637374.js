(n.d(t, { Z: () => Y }), n(388685));
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
    h = n(607070),
    g = n(884697),
    b = n(600164),
    E = n(479446),
    y = n(930114),
    C = n(981632),
    x = n(108989),
    v = n(703656),
    O = n(314897),
    j = n(82142),
    I = n(283595),
    S = n(594174),
    T = n(509545),
    N = n(55563),
    P = n(199480),
    A = n(626135),
    w = n(669079),
    Z = n(74538),
    R = n(296848),
    L = n(51144),
    k = n(626799),
    D = n(981631),
    M = n(474936),
    U = n(388032),
    F = n(955964);
function B(e, t, n) {
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
function G(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                B(e, t, n[t]);
            }));
    }
    return e;
}
function H(e, t) {
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
function V(e) {
    let { onClick: t, libraryApplication: n } = e;
    return (0, r.jsxs)(d.P3F, {
        className: F.libraryLink,
        onClick: t,
        children: [
            (0, r.jsx)(d.vqy, {
                size: 'md',
                color: 'currentColor',
                className: F.libraryIcon
            }),
            (0, r.jsx)('div', { children: n.isHidden() ? U.intl.string(U.t.Wi99Rk) : U.intl.string(U.t['+tXad3']) })
        ]
    });
}
class z extends i.PureComponent {
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
            renderActions: this.renderActions
        });
    }
    constructor(...e) {
        (super(...e),
            B(this, 'renderMedia', () => (0, r.jsx)('div', { className: a()(F.invalidPoop, { [F.invalidPoopHorizontal]: this.isHorizontal }) })),
            B(this, 'renderTitle', () => (this.props.isSelfGift ? U.intl.string(U.t['mT9B4+']) : U.intl.string(U.t.Vo5yHx))),
            B(this, 'renderActions', () =>
                this.props.isSelfGift
                    ? (0, r.jsx)(d.zxk, {
                          variant: 'primary',
                          size: 'sm',
                          text: U.intl.string(U.t['jcSP+v']),
                          onClick: this.handleViewInventory
                      })
                    : (0, r.jsx)(d.zxk, {
                          variant: 'primary',
                          size: 'sm',
                          text: U.intl.string(U.t.bUvv1d),
                          disabled: !0
                      })
            ),
            B(this, 'renderTagline', () => (this.props.isSelfGift ? U.intl.string(U.t.aUqE6e) : U.intl.string(U.t['2mWvHB']))));
    }
}
class W extends i.Component {
    get analyticsLocation() {
        let {
            analyticsContext: { location: e }
        } = this.props;
        return H(G({}, e), { section: D.jXE.GIFT_CODE_EMBED });
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
                            : (0, r.jsx)(V, {
                                  onClick: this.handleViewLibrary,
                                  libraryApplication: t
                              })
                    ]
                }),
                (0, r.jsxs)(b.Z, {
                    align: b.Z.Align.END,
                    justify: b.Z.Justify.END,
                    className: F.metadata,
                    direction: b.Z.Direction.VERTICAL,
                    children: [e.hasMultipleCopies ? (0, r.jsx)('div', { children: this.renderGiftCodeCopiesLeft(e) }) : null, e.redeemed || e.isClaimed || null != t || null == e.expiresAt ? null : (0, r.jsx)('div', { children: U.intl.format(U.t.nZBvUV, { hours: e.expiresAt.diff(s()(), 'h') }) })]
                })
            ]
        });
    }
    renderGiftCodeCopiesLeft(e) {
        let t = e.isSubscription ? U.t['4iHwKS'] : U.t['YeLq8/'];
        return U.intl.format(t, {
            remaining: e.remainingUses,
            total: e.maxUses
        });
    }
    renderButton(e) {
        let { libraryApplication: t, currentUser: n, isSelfGift: i } = this.props,
            l = {
                onClick: this.handleAccept,
                color: u.zx.Colors.BRAND
            },
            a = (!e.isSubscription && null != t) || (!e.isSelfRedeemable && i) || (e.isExistingPremiumSubscriptionDisallowed && (0, Z.I5)(n));
        return (
            (e.redeemed || a || e.isClaimed || !n.verified) && ((l.color = u.zx.Colors.BRAND), (l.disabled = !0)),
            (0, r.jsx)(
                u.zx,
                H(G({}, l), {
                    className: (0, g.mO)(e) ? F.collectiblesAcceptButton : null,
                    size: u.zx.Sizes.SMALL,
                    children: e.redeemed ? U.intl.string(U.t.BTihoq) : null != e.giftStyle ? U.intl.string(U.t.TiZFqa) : U.intl.string(U.t.bUvv1d)
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
        return this.isCustomGiftMessage() && !n ? U.intl.formatToPlainString(U.t.t1SOIS, { recipientDisplayName: L.ZP.getName(t) }) : null == r ? null : e.isSubscription ? (n ? U.intl.string(U.t['2PJ1ND']) : U.intl.string(U.t.hrnGnp)) : n ? U.intl.string(U.t.QLEMlZ) : U.intl.string(U.t.W4DBc3);
    }
    renderBody(e) {
        let { libraryApplication: t, isSelfGift: n, sku: r, gifter: i, subscriptionPlan: l, currentUser: a } = this.props;
        if (null == r) return U.intl.string(U.t.ZTNur6);
        if (!n && this.isCustomGiftMessage() && !e.redeemed) return;
        let o = r.isPreorder() ? U.intl.formatToPlainString(U.t.evinTU, { name: r.name }) : r.name;
        if (e.redeemed)
            return e.isSubscription || (0, g.mO)(e)
                ? U.intl.string(U.t.mVC3Cg)
                : U.intl.format(U.t['ss/L+/'], {
                      skuName: o,
                      onViewInLibrary: this.handleViewLibrary
                  });
        if (!e.isSubscription && null != t)
            return U.intl.format(U.t.UdXO8P, {
                skuName: o,
                onViewInLibrary: this.handleViewLibrary
            });
        if (e.isClaimed) return U.intl.string(U.t.ARWFQU);
        if (!a.verified) return U.intl.format(U.t.GQxl7u, { onClick: this.handleVerificationClick });
        if (n) return e.isSelfRedeemable ? U.intl.string(U.t['lQI+cH']) : U.intl.formatToPlainString(U.t['A+etHx'], { skuName: o });
        if (e.isExistingPremiumSubscriptionDisallowed) return U.intl.string(U.t['UCIU9/']);
        if (e.hasMultipleCopies)
            return null != i
                ? e.isSubscription
                    ? U.intl.format(U.t.l3VxgI, {
                          username: L.ZP.getUserTag(i),
                          maxUses: e.maxUses,
                          skuName: o
                      })
                    : U.intl.format(U.t['9cYrw8'], {
                          username: L.ZP.getUserTag(i),
                          totalCopies: e.maxUses,
                          skuName: o
                      })
                : e.isSubscription
                  ? U.intl.formatToPlainString(U.t.svrO3d, {
                        maxUses: e.maxUses,
                        skuName: o
                    })
                  : U.intl.formatToPlainString(U.t['3AgAn5'], {
                        totalCopies: e.maxUses,
                        skuName: o
                    });
        if (e.isSubscription) {
            if (null == l) return U.intl.string(U.t.ZTNur6);
            if (null != i) {
                let e = l.interval === M.rV.MONTH ? U.t['/RDIEB'] : U.t['3CX6Eh'];
                return U.intl.format(e, {
                    username: L.ZP.getUserTag(i),
                    skuName: o,
                    intervalCount: l.intervalCount
                });
            }
            let e = l.interval === M.rV.MONTH ? U.t['2O4lo6'] : U.t['+Xjmsb'];
            return U.intl.format(e, {
                skuName: o,
                intervalCount: l.intervalCount
            });
        }
        return null != i ? U.intl.format(U.t['3HsdQ0'], { username: L.ZP.getUserTag(i) }) : U.intl.string(U.t.Jdnjjo);
    }
    renderPromotionActions() {
        return (0, r.jsx)(d.zxk, {
            variant: 'primary',
            size: 'sm',
            text: U.intl.string(U.t['71nuwc']),
            onClick: this.handleClaimPromotion
        });
    }
    renderEmbed() {
        let { giftCode: e, width: t } = this.props;
        return null == e
            ? null
            : (0, r.jsx)(k.$, {
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
            return (0, r.jsx)(k.$, {
                skuId: e.skuId,
                onEmbedClick: this.handleClaimPromotion,
                analyticsSection: D.jXE.GIFT_CODE_EMBED,
                renderCustomActions: () => this.renderPromotionActions(),
                renderCustomTitle: () => U.intl.string(U.t.X4p5uL),
                renderCustomTagline: () => U.intl.string(U.t.VIuwDw),
                width: n
            });
        if (null == e || e.revoked)
            if (t)
                return (0, r.jsx)(z, {
                    isSelfGift: i,
                    width: n
                });
            else return (0, r.jsx)(m.OR, { isHorizontal: n >= m.aL });
        return (0, g.mO)(e)
            ? (0, r.jsx)('div', {
                  className: F.collectiblesEmbedWrapper,
                  children: this.renderEmbed()
              })
            : this.renderEmbed();
    }
    constructor(...e) {
        (super(...e),
            B(this, 'handleViewLibrary', (e) => {
                let { libraryApplication: t } = this.props;
                (e.preventDefault(), null != t && t.isHidden() ? (0, v.uL)(D.Z5c.APPLICATION_LIBRARY_SETTINGS) : (0, v.uL)(D.Z5c.APPLICATION_LIBRARY, { state: { applicationId: null != t ? t.id : void 0 } }));
            }),
            B(this, 'handleVerificationClick', (e) => {
                (e.stopPropagation(), e.preventDefault(), p.Z.open(D.oAB.ACCOUNT));
            }),
            B(this, 'handleAccept', (e) => {
                let { channelId: t, code: n, content: r, type: i, giftInfo: l } = this.props;
                (e.preventDefault(),
                    e.stopPropagation(),
                    A.default.track(D.rMx.OPEN_MODAL, {
                        type: 'gift_accept',
                        location: H(G({}, this.analyticsLocation), { object: D.qAy.BUTTON_CTA })
                    }));
                let a = i !== D.uaV.CUSTOM_GIFT ? void 0 : r;
                (0, y.V)({
                    processedCode: n,
                    channelContext: t,
                    customGiftMessage: a,
                    giftInfo: l
                });
            }),
            B(this, 'handleEmbedClick', (e) => {
                let { giftCode: t } = this.props;
                null != t && t.isSubscription && (e.preventDefault(), p.Z.open(D.oAB.PREMIUM));
            }),
            B(this, 'handleClaimPromotion', (e) => {
                var t;
                (e.stopPropagation(), e.preventDefault());
                let n = null == (t = this.props.giftCode) ? void 0 : t.code;
                null != n && window.open(D.Z5c.BILLING_PROMOTION_REDEMPTION(n));
            }),
            B(this, 'renderCustomGiftBox', (e) => {
                let { useReducedMotion: t, width: n } = this.props;
                if (null == e || null == e.giftStyle) return null;
                let i = M.jy.includes(e.giftStyle),
                    l = a()(F.customGiftEmbedWrapper, {
                        [F.legacySeasonalGiftEmbedWrapper]: i,
                        [F.giftEmbedWrapperHorizontal]: n >= m.aL
                    }),
                    o = a()({
                        [F.legacySeasonalGiftEmbedBox]: i,
                        [F.legacySeasonalGiftEmbedBoxHorizontal]: i && n >= m.aL,
                        [F.customGiftEmbedBox]: !i,
                        [F.customGiftEmbedBoxHorizontal]: !i && n >= m.aL
                    });
                return (0, r.jsxs)('div', {
                    className: l,
                    children: [
                        !t &&
                            M.eZ.includes(e.giftStyle) &&
                            (0, r.jsx)(x.Z, {
                                className: F.snow,
                                wind: 5
                            }),
                        i && (0, r.jsx)(P.Z, { className: F.headerIcon }),
                        null != e.giftStyle &&
                            (0, r.jsx)(C.Z, {
                                defaultAnimationState: e.redeemed ? E.SR.LOOP : E.SR.IDLE,
                                giftStyle: e.giftStyle,
                                className: o
                            })
                    ]
                });
            }));
    }
}
let K = (0, _.Z)((0, f.Z)(W)),
    Y = c.ZP.connectStores([j.Z, N.Z, S.default, I.Z, T.Z, O.default, h.Z], (e) => {
        let { code: t, author: n, currentUser: r } = e,
            i = j.Z.get(t),
            l = null != i ? N.Z.get(i.skuId) : null,
            a = null != i && null != i.userId ? S.default.getUser(i.userId) : null,
            o = h.Z.useReducedMotion;
        return {
            sku: l,
            giftCode: i,
            gifter: a,
            currentUser: r,
            subscriptionPlan: null != i && null != i.subscriptionPlanId ? (0, R.oE)(i.subscriptionPlanId) : null,
            isSelfGift: null != i ? O.default.getId() === i.userId : O.default.getId() === n.id,
            resolved: j.Z.getIsResolved(t),
            libraryApplication: null != l && (null == i ? void 0 : i.entitlementBranches) != null ? w.z2(i.entitlementBranches, l, I.Z) : null,
            useReducedMotion: o
        };
    })(K);
