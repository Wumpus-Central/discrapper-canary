n.d(t, { A: () => z });
var i = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(989349),
    o = n.n(s),
    d = n(311907),
    c = n(421380),
    u = n(397927),
    _ = n(863574),
    m = n(707606),
    h = n(456412),
    p = n(793574),
    g = n(429913),
    A = n(993408),
    x = n(235986),
    f = n(242874),
    C = n(499454),
    E = n(75825),
    I = n(976860),
    b = n(871123),
    T = n(317560),
    v = n(780964),
    S = n(840065),
    y = n(961350),
    N = n(30793),
    j = n(189081),
    L = n(287809),
    R = n(67480),
    P = n(56739),
    M = n(954571),
    w = n(45938),
    D = n(927578),
    O = n(615396),
    k = n(427262),
    U = n(295843),
    G = n(652215),
    B = n(788868),
    F = n(985018),
    H = n(99375);
function V(e) {
    let { onClick: t, libraryApplication: n } = e;
    return (0, i.jsxs)(u.DUT, {
        className: H.kP,
        onClick: t,
        children: [
            (0, i.jsx)(u._z, { size: "md", color: "currentColor", className: H.dy }),
            (0, i.jsx)("div", { children: n.isHidden() ? F.intl.string(F.t.Wi99Ro) : F.intl.string(F.t["+tXad7"]) }),
        ],
    });
}
class W extends r.PureComponent {
    get isHorizontal() {
        let { width: e } = this.props;
        return e >= _.Tm;
    }
    handleViewInventory() {
        (0, S.openUserSettings)(v.X.GIFT_PANEL, { section: G.nc_.INVENTORY });
    }
    renderTitle = () => (this.props.isSelfGift ? F.intl.string(F.t.mT9B49) : F.intl.string(F.t.Vo5yHw));
    renderActions = () =>
        this.props.isSelfGift
            ? (0, i.jsx)(u.Button, {
                  variant: "primary",
                  size: "sm",
                  text: F.intl.string(F.t["jcSP+g"]),
                  onClick: this.handleViewInventory,
              })
            : (0, i.jsx)(u.Button, { variant: "primary", size: "sm", text: F.intl.string(F.t.bUvv1f), disabled: !0 });
    renderTagline = () => (this.props.isSelfGift ? F.intl.string(F.t.eEM3dq) : F.intl.string(F.t.tB8S6u));
    render() {
        return (0, i.jsx)(_.ug, {
            isHorizontal: this.isHorizontal,
            renderTitle: this.renderTitle,
            renderTagline: this.renderTagline,
            renderActions: this.renderActions,
        });
    }
}
class q extends r.Component {
    get analyticsLocation() {
        let {
            analyticsContext: { location: e },
        } = this.props;
        return { ...e, section: G.JJy.GIFT_CODE_EMBED };
    }
    handleViewLibrary = (e) => {
        let { libraryApplication: t } = this.props;
        e.preventDefault(),
            null != t && t.isHidden()
                ? (0, I.pX)(G.BVt.APPLICATION_LIBRARY_SETTINGS)
                : (0, I.pX)(G.BVt.APPLICATION_LIBRARY, { state: { applicationId: null != t ? t.id : void 0 } });
    };
    handleVerificationClick = (e) => {
        e.stopPropagation(), e.preventDefault(), (0, S.openUserSettings)(v.X.ACCOUNT_PANEL, { section: G.nc_.ACCOUNT });
    };
    handleAccept = (e) => {
        let { channelId: t, code: n, content: i, type: r, giftInfo: l } = this.props;
        e.preventDefault(),
            e.stopPropagation(),
            M.default.track(G.HAw.OPEN_MODAL, {
                type: "gift_accept",
                location: { ...this.analyticsLocation, object: G.ZSU.BUTTON_CTA },
            });
        let a = r !== G.lAJ.CUSTOM_GIFT ? void 0 : i;
        (0, C.h)({ processedCode: n, channelContext: t, customGiftMessage: a, giftInfo: l });
    };
    handleEmbedClick = (e) => {
        let { giftCode: t, sku: n, skuApplication: i } = this.props;
        null != n && (0, b.bF)(n) && null != i && null != i.guildId
            ? (e.preventDefault(),
              (0, T.R)({
                  skuId: n.id,
                  applicationId: i.id,
                  guildId: i.guildId,
                  isStorefront: !1,
                  analyticsLocations: [p.A.GIFT_CODE_EMBED],
              }))
            : null != t &&
              t.isSubscription &&
              (e.preventDefault(), (0, S.openUserSettings)(v.X.NITRO_PANEL, { section: G.nc_.PREMIUM }));
    };
    handleClaimPromotion = (e) => {
        e.stopPropagation(), e.preventDefault();
        let t = this.props.giftCode?.code;
        null != t && window.open(G.BVt.BILLING_PROMOTION_REDEMPTION(t));
    };
    renderActions(e) {
        let { libraryApplication: t } = this.props;
        return (0, i.jsxs)(x.A, {
            justify: x.A.Justify.BETWEEN,
            children: [
                (0, i.jsxs)(x.A, {
                    children: [
                        this.renderButton(e),
                        null == t || e.isSubscription
                            ? null
                            : (0, i.jsx)(V, { onClick: this.handleViewLibrary, libraryApplication: t }),
                    ],
                }),
                (0, i.jsxs)(x.A, {
                    align: x.A.Align.END,
                    justify: x.A.Justify.END,
                    className: H.yu,
                    direction: x.A.Direction.VERTICAL,
                    children: [
                        e.hasMultipleCopies ? (0, i.jsx)("div", { children: this.renderGiftCodeCopiesLeft(e) }) : null,
                        e.redeemed || e.isClaimed || null != t || null == e.expiresAt
                            ? null
                            : (0, i.jsx)("div", {
                                  children: F.intl.format(F.t.nZBvUR, { hours: e.expiresAt.diff(o()(), "h") }),
                              }),
                    ],
                }),
            ],
        });
    }
    renderGiftCodeCopiesLeft(e) {
        let t = e.isSubscription ? F.t["4iHwKT"] : F.t.YeLq88;
        return F.intl.format(t, { remaining: e.remainingUses, total: e.maxUses });
    }
    renderButton(e) {
        let { libraryApplication: t, currentUser: n, isSelfGift: r } = this.props,
            l = { onClick: this.handleAccept, color: c.$n.Colors.BRAND },
            a =
                (!e.isSubscription && null != t) ||
                (!e.isSelfRedeemable && r) ||
                (e.isExistingPremiumSubscriptionDisallowed && (0, D.TW)(n));
        return (
            (e.redeemed || a || e.isClaimed || !n.verified) && ((l.color = c.$n.Colors.BRAND), (l.disabled = !0)),
            (0, i.jsx)(c.$n, {
                ...l,
                className: (0, A.hU)(e) ? H.UQ : null,
                size: c.$n.Sizes.SMALL,
                children: e.redeemed
                    ? F.intl.string(F.t.BTihou)
                    : null != e.giftStyle
                      ? F.intl.string(F.t.TiZFqX)
                      : F.intl.string(F.t.bUvv1f),
            })
        );
    }
    isCustomGiftMessage() {
        let { type: e } = this.props;
        return e === G.lAJ.CUSTOM_GIFT;
    }
    renderTitle(e) {
        let { currentUser: t, isSelfGift: n, sku: i } = this.props;
        return this.isCustomGiftMessage() && !n
            ? F.intl.formatToPlainString(F.t.t1SOId, { recipientDisplayName: k.Ay.getName(t) })
            : null == i
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
            sku: i,
            gifter: r,
            subscriptionPlan: l,
            currentUser: a,
        } = this.props;
        if (null == i) return F.intl.string(F.t.ZTNur7);
        if (!n && this.isCustomGiftMessage() && !e.redeemed) return;
        let s = i.isPreorder() ? F.intl.formatToPlainString(F.t.evinTd, { name: i.name }) : i.name;
        if (e.redeemed)
            return e.isSubscription || (0, A.hU)(e) || (0, b.bF)(i)
                ? F.intl.string(F.t.mVC3Cv)
                : F.intl.format(F.t["ss/L+/"], { skuName: s, onViewInLibrary: this.handleViewLibrary });
        if (!e.isSubscription && null != t)
            return F.intl.format(F.t.UdXO8P, { skuName: s, onViewInLibrary: this.handleViewLibrary });
        if (e.isClaimed) return F.intl.string(F.t.ARWFQX);
        if (!a.verified) return F.intl.format(F.t.GQxl7v, { onClick: this.handleVerificationClick });
        if (n)
            return e.isSelfRedeemable
                ? F.intl.string(F.t["lQI+cB"])
                : F.intl.formatToPlainString(F.t["A+etHx"], { skuName: s });
        if (e.isExistingPremiumSubscriptionDisallowed) return F.intl.string(F.t.UCIU9y);
        if (e.hasMultipleCopies)
            return null != r
                ? e.isSubscription
                    ? F.intl.format(F.t.l3VxgG, { username: k.Ay.getUserTag(r), maxUses: e.maxUses, skuName: s })
                    : F.intl.format(F.t["9cYrw5"], { username: k.Ay.getUserTag(r), totalCopies: e.maxUses, skuName: s })
                : e.isSubscription
                  ? F.intl.formatToPlainString(F.t.svrO3W, { maxUses: e.maxUses, skuName: s })
                  : F.intl.formatToPlainString(F.t["3AgAn3"], { totalCopies: e.maxUses, skuName: s });
        if (e.isSubscription) {
            if (null == l) return F.intl.string(F.t.ZTNur7);
            if (null != r) {
                let e = l.interval === B.WT.MONTH ? F.t["/RDIEA"] : F.t["3CX6Ev"];
                return F.intl.format(e, { username: k.Ay.getUserTag(r), skuName: s, intervalCount: l.intervalCount });
            }
            let e = l.interval === B.WT.MONTH ? F.t["2O4lo5"] : F.t["+XjmsR"];
            return F.intl.format(e, { skuName: s, intervalCount: l.intervalCount });
        }
        return null != r ? F.intl.format(F.t["3HsdQ/"], { username: k.Ay.getUserTag(r) }) : F.intl.string(F.t.Jdnjjj);
    }
    renderCustomGiftBox = (e) => {
        let { width: t } = this.props;
        if (null == e || null == e.giftStyle) return null;
        let n = B.Wx.includes(e.giftStyle),
            r = a()(H.gB, { [H.El]: n, [H.by]: t >= _.Tm }),
            l = a()({ [H.gc]: n, [H.Ei]: n && t >= _.Tm, [H.ww]: !n, [H.wy]: !n && t >= _.Tm });
        return (0, i.jsxs)("div", {
            className: r,
            children: [
                n && (0, i.jsx)(P.A, { className: H.nr }),
                null != e.giftStyle &&
                    (0, i.jsx)(E.A, {
                        defaultAnimationState: e.redeemed ? f.oA.LOOP : f.oA.IDLE,
                        giftStyle: e.giftStyle,
                        className: l,
                    }),
            ],
        });
    };
    renderPromotionActions() {
        return (0, i.jsx)(u.Button, {
            variant: "primary",
            size: "sm",
            text: F.intl.string(F.t["71nuwc"]),
            onClick: this.handleClaimPromotion,
        });
    }
    renderEmbed() {
        let { giftCode: e, width: t, sku: n } = this.props;
        if (null == e) return null;
        let r = null != e.giftStyle && !(0, b.bF)(n);
        return (0, i.jsx)(U.k, {
            skuId: e.skuId,
            onEmbedClick: this.handleEmbedClick,
            analyticsSection: G.JJy.GIFT_CODE_EMBED,
            renderCustomActions: () => this.renderActions(e),
            renderCustomTitle: () => this.renderTitle(e),
            renderCustomTagline: () => this.renderBody(e),
            renderCustomMedia: r ? () => this.renderCustomGiftBox(e) : void 0,
            width: t,
        });
    }
    render() {
        let { giftCode: e, resolved: t, width: n, isSelfGift: r } = this.props;
        if (null != e && null != e.promotion)
            return (0, i.jsx)(U.k, {
                skuId: e.skuId,
                onEmbedClick: this.handleClaimPromotion,
                analyticsSection: G.JJy.GIFT_CODE_EMBED,
                renderCustomActions: () => this.renderPromotionActions(),
                renderCustomTitle: () => F.intl.string(F.t.X4p5uH),
                renderCustomTagline: () => F.intl.string(F.t.VIuwD7),
                width: n,
            });
        if (null == e || e.revoked)
            if (t) return (0, i.jsx)(W, { isSelfGift: r, width: n });
            else return (0, i.jsx)(_.Wb, { isHorizontal: n >= _.Tm });
        return (0, A.hU)(e) ? (0, i.jsx)("div", { className: H.mp, children: this.renderEmbed() }) : this.renderEmbed();
    }
}
let Y = (0, h.A)((0, m.A)(q)),
    z = function (e) {
        let { code: t, author: n } = e,
            { giftCode: r, resolved: l } = (0, d.cf)([N.A], () => ({
                giftCode: N.A.get(t),
                resolved: N.A.getIsResolved(t),
            })),
            a = (0, d.bG)([L.default], () => (null != r && null != r.userId ? L.default.getUser(r.userId) : null)),
            s = (0, d.bG)([R.A], () => (null != r ? R.A.get(r.skuId) : null)),
            o = (0, d.bG)([j.A], () =>
                null != s && r?.entitlementBranches != null ? w.YI(r.entitlementBranches, s, j.A) : null,
            ),
            c = (0, g.h)(s?.applicationId),
            u = (0, O.zz)(r?.subscriptionPlanId),
            _ = (0, d.bG)([y.default], () => (null != r ? y.default.getId() === r.userId : y.default.getId() === n.id));
        return (0, i.jsx)(Y, {
            ...e,
            skuApplication: c,
            giftCode: r,
            resolved: l,
            gifter: a,
            libraryApplication: o,
            subscriptionPlan: u,
            sku: s,
            isSelfGift: _,
        });
    };
