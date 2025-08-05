(n.d(t, { Z: () => q }), n(388685));
var r = n(255367),
    i = n(73800),
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
    v = n(108989),
    I = n(703656),
    T = n(314897),
    S = n(82142),
    A = n(283595),
    N = n(594174),
    C = n(509545),
    w = n(55563),
    R = n(199480),
    P = n(626135),
    D = n(669079),
    L = n(74538),
    x = n(296848),
    k = n(51144),
    j = n(626799),
    M = n(981631),
    U = n(474936),
    G = n(388032),
    B = n(955964);
function Z(e, t, n) {
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
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                Z(e, t, n[t]);
            }));
    }
    return e;
}
function V(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
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
                size: 'md',
                color: 'currentColor',
                className: B.libraryIcon
            }),
            (0, r.jsx)('div', { children: n.isHidden() ? G.intl.string(G.t.Wi99Rk) : G.intl.string(G.t['+tXad3']) })
        ]
    });
}
class W extends i.PureComponent {
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
            renderActions: this.renderActions
        });
    }
    constructor(...e) {
        (super(...e),
            Z(this, 'renderMedia', () => (0, r.jsx)('div', { className: o()(B.invalidPoop, { [B.invalidPoopHorizontal]: this.isHorizontal }) })),
            Z(this, 'renderTitle', () => (this.props.isSelfGift ? G.intl.string(G.t['mT9B4+']) : G.intl.string(G.t.Vo5yHx))),
            Z(this, 'renderActions', () =>
                this.props.isSelfGift
                    ? (0, r.jsx)(d.zxk, {
                          variant: 'primary',
                          size: 'sm',
                          text: G.intl.string(G.t['jcSP+v']),
                          onClick: this.handleViewInventory
                      })
                    : (0, r.jsx)(d.zxk, {
                          variant: 'primary',
                          size: 'sm',
                          text: G.intl.string(G.t.bUvv1d),
                          disabled: !0
                      })
            ),
            Z(this, 'renderTagline', () => (this.props.isSelfGift ? G.intl.string(G.t.aUqE6e) : G.intl.string(G.t['2mWvHB']))));
    }
}
class K extends i.Component {
    get analyticsLocation() {
        let {
            analyticsContext: { location: e }
        } = this.props;
        return H(F({}, e), { section: M.jXE.GIFT_CODE_EMBED });
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
                            : (0, r.jsx)(Y, {
                                  onClick: this.handleViewLibrary,
                                  libraryApplication: t
                              })
                    ]
                }),
                (0, r.jsxs)(E.Z, {
                    align: E.Z.Align.END,
                    justify: E.Z.Justify.END,
                    className: B.metadata,
                    direction: E.Z.Direction.VERTICAL,
                    children: [e.hasMultipleCopies ? (0, r.jsx)('div', { children: this.renderGiftCodeCopiesLeft(e) }) : null, e.redeemed || e.isClaimed || null != t || null == e.expiresAt ? null : (0, r.jsx)('div', { children: G.intl.format(G.t.nZBvUV, { hours: e.expiresAt.diff(l()(), 'h') }) })]
                })
            ]
        });
    }
    renderGiftCodeCopiesLeft(e) {
        let t = e.isSubscription ? G.t['4iHwKS'] : G.t['YeLq8/'];
        return G.intl.format(t, {
            remaining: e.remainingUses,
            total: e.maxUses
        });
    }
    renderButton(e) {
        let { libraryApplication: t, currentUser: n, isSelfGift: i } = this.props,
            a = {
                onClick: this.handleAccept,
                color: u.zx.Colors.BRAND
            },
            o = (!e.isSubscription && null != t) || (!e.isSelfRedeemable && i) || (e.isExistingPremiumSubscriptionDisallowed && (0, L.I5)(n));
        return (
            (e.redeemed || o || e.isClaimed || !n.verified) && ((a.color = u.zx.Colors.BRAND), (a.disabled = !0)),
            (0, r.jsx)(
                u.zx,
                H(F({}, a), {
                    className: (0, g.mO)(e) ? B.collectiblesAcceptButton : null,
                    size: u.zx.Sizes.SMALL,
                    children: e.redeemed ? G.intl.string(G.t.BTihoq) : null != e.giftStyle ? G.intl.string(G.t.TiZFqa) : G.intl.string(G.t.bUvv1d)
                })
            )
        );
    }
    isCustomGiftMessage() {
        let { type: e } = this.props;
        return e === M.uaV.CUSTOM_GIFT;
    }
    renderTitle(e) {
        let { currentUser: t, isSelfGift: n, sku: r } = this.props;
        return this.isCustomGiftMessage() && !n ? G.intl.formatToPlainString(G.t.t1SOIS, { recipientDisplayName: k.ZP.getName(t) }) : null == r ? null : e.isSubscription ? (n ? G.intl.string(G.t['2PJ1ND']) : G.intl.string(G.t.hrnGnp)) : n ? G.intl.string(G.t.QLEMlZ) : G.intl.string(G.t.W4DBc3);
    }
    renderBody(e) {
        let { libraryApplication: t, isSelfGift: n, sku: r, gifter: i, subscriptionPlan: a, currentUser: o } = this.props;
        if (null == r) return G.intl.string(G.t.ZTNur6);
        if (!n && this.isCustomGiftMessage() && !e.redeemed) return;
        let s = r.isPreorder() ? G.intl.formatToPlainString(G.t.evinTU, { name: r.name }) : r.name;
        if (e.redeemed)
            return e.isSubscription || (0, g.mO)(e)
                ? G.intl.string(G.t.mVC3Cg)
                : G.intl.format(G.t['ss/L+/'], {
                      skuName: s,
                      onViewInLibrary: this.handleViewLibrary
                  });
        if (!e.isSubscription && null != t)
            return G.intl.format(G.t.UdXO8P, {
                skuName: s,
                onViewInLibrary: this.handleViewLibrary
            });
        if (e.isClaimed) return G.intl.string(G.t.ARWFQU);
        if (!o.verified) return G.intl.format(G.t.GQxl7u, { onClick: this.handleVerificationClick });
        if (n) return e.isSelfRedeemable ? G.intl.string(G.t['lQI+cH']) : G.intl.formatToPlainString(G.t['A+etHx'], { skuName: s });
        if (e.isExistingPremiumSubscriptionDisallowed) return G.intl.string(G.t['UCIU9/']);
        if (e.hasMultipleCopies)
            return null != i
                ? e.isSubscription
                    ? G.intl.format(G.t.l3VxgI, {
                          username: k.ZP.getUserTag(i),
                          maxUses: e.maxUses,
                          skuName: s
                      })
                    : G.intl.format(G.t['9cYrw8'], {
                          username: k.ZP.getUserTag(i),
                          totalCopies: e.maxUses,
                          skuName: s
                      })
                : e.isSubscription
                  ? G.intl.formatToPlainString(G.t.svrO3d, {
                        maxUses: e.maxUses,
                        skuName: s
                    })
                  : G.intl.formatToPlainString(G.t['3AgAn5'], {
                        totalCopies: e.maxUses,
                        skuName: s
                    });
        if (e.isSubscription) {
            if (null == a) return G.intl.string(G.t.ZTNur6);
            if (null != i) {
                let e = a.interval === U.rV.MONTH ? G.t['/RDIEB'] : G.t['3CX6Eh'];
                return G.intl.format(e, {
                    username: k.ZP.getUserTag(i),
                    skuName: s,
                    intervalCount: a.intervalCount
                });
            }
            let e = a.interval === U.rV.MONTH ? G.t['2O4lo6'] : G.t['+Xjmsb'];
            return G.intl.format(e, {
                skuName: s,
                intervalCount: a.intervalCount
            });
        }
        return null != i ? G.intl.format(G.t['3HsdQ0'], { username: k.ZP.getUserTag(i) }) : G.intl.string(G.t.Jdnjjo);
    }
    renderPromotionActions() {
        return (0, r.jsx)(d.zxk, {
            variant: 'primary',
            size: 'sm',
            text: G.intl.string(G.t['71nuwc']),
            onClick: this.handleClaimPromotion
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
                  width: t
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
                renderCustomTitle: () => G.intl.string(G.t.X4p5uL),
                renderCustomTagline: () => G.intl.string(G.t.VIuwDw),
                width: n
            });
        if (null == e || e.revoked)
            if (t)
                return (0, r.jsx)(W, {
                    isSelfGift: i,
                    width: n
                });
            else return (0, r.jsx)(_.OR, { isHorizontal: n >= _.aL });
        return (0, g.mO)(e)
            ? (0, r.jsx)('div', {
                  className: B.collectiblesEmbedWrapper,
                  children: this.renderEmbed()
              })
            : this.renderEmbed();
    }
    constructor(...e) {
        (super(...e),
            Z(this, 'handleViewLibrary', (e) => {
                let { libraryApplication: t } = this.props;
                (e.preventDefault(), null != t && t.isHidden() ? (0, I.uL)(M.Z5c.APPLICATION_LIBRARY_SETTINGS) : (0, I.uL)(M.Z5c.APPLICATION_LIBRARY, { state: { applicationId: null != t ? t.id : void 0 } }));
            }),
            Z(this, 'handleVerificationClick', (e) => {
                (e.stopPropagation(), e.preventDefault(), f.Z.open(M.oAB.ACCOUNT));
            }),
            Z(this, 'handleAccept', (e) => {
                let { channelId: t, code: n, content: r, type: i, giftInfo: a } = this.props;
                (e.preventDefault(),
                    e.stopPropagation(),
                    P.default.track(M.rMx.OPEN_MODAL, {
                        type: 'gift_accept',
                        location: H(F({}, this.analyticsLocation), { object: M.qAy.BUTTON_CTA })
                    }));
                let o = i !== M.uaV.CUSTOM_GIFT ? void 0 : r;
                (0, y.V)({
                    processedCode: n,
                    channelContext: t,
                    customGiftMessage: o,
                    giftInfo: a
                });
            }),
            Z(this, 'handleEmbedClick', (e) => {
                let { giftCode: t } = this.props;
                null != t && t.isSubscription && (e.preventDefault(), f.Z.open(M.oAB.PREMIUM));
            }),
            Z(this, 'handleClaimPromotion', (e) => {
                var t;
                (e.stopPropagation(), e.preventDefault());
                let n = null == (t = this.props.giftCode) ? void 0 : t.code;
                null != n && window.open(M.Z5c.BILLING_PROMOTION_REDEMPTION(n));
            }),
            Z(this, 'renderCustomGiftBox', (e) => {
                let { useReducedMotion: t, width: n } = this.props;
                if (null == e || null == e.giftStyle) return null;
                let i = U.jy.includes(e.giftStyle),
                    a = o()(B.customGiftEmbedWrapper, {
                        [B.legacySeasonalGiftEmbedWrapper]: i,
                        [B.giftEmbedWrapperHorizontal]: n >= _.aL
                    }),
                    s = o()({
                        [B.legacySeasonalGiftEmbedBox]: i,
                        [B.legacySeasonalGiftEmbedBoxHorizontal]: i && n >= _.aL,
                        [B.customGiftEmbedBox]: !i,
                        [B.customGiftEmbedBoxHorizontal]: !i && n >= _.aL
                    });
                return (0, r.jsxs)('div', {
                    className: a,
                    children: [
                        !t &&
                            U.eZ.includes(e.giftStyle) &&
                            (0, r.jsx)(v.Z, {
                                className: B.snow,
                                wind: 5
                            }),
                        i && (0, r.jsx)(R.Z, { className: B.headerIcon }),
                        null != e.giftStyle &&
                            (0, r.jsx)(O.Z, {
                                defaultAnimationState: e.redeemed ? b.SR.LOOP : b.SR.IDLE,
                                giftStyle: e.giftStyle,
                                className: s
                            })
                    ]
                });
            }));
    }
}
let z = (0, h.Z)((0, p.Z)(K)),
    q = c.ZP.connectStores([S.Z, w.Z, N.default, A.Z, C.Z, T.default, m.Z], (e) => {
        let { code: t, author: n, currentUser: r } = e,
            i = S.Z.get(t),
            a = null != i ? w.Z.get(i.skuId) : null,
            o = null != i && null != i.userId ? N.default.getUser(i.userId) : null,
            s = m.Z.useReducedMotion;
        return {
            sku: a,
            giftCode: i,
            gifter: o,
            currentUser: r,
            subscriptionPlan: null != i && null != i.subscriptionPlanId ? (0, x.oE)(i.subscriptionPlanId) : null,
            isSelfGift: null != i ? T.default.getId() === i.userId : T.default.getId() === n.id,
            resolved: S.Z.getIsResolved(t),
            libraryApplication: null != a && (null == i ? void 0 : i.entitlementBranches) != null ? D.z2(i.entitlementBranches, a, A.Z) : null,
            useReducedMotion: s
        };
    })(z);
