n.d(t, { A: () => z });
var i = n(627968),
    l = n(64700),
    r = n(503698),
    a = n.n(r),
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
    k = n(615396),
    O = n(427262),
    U = n(295843),
    B = n(652215),
    G = n(788868),
    F = n(985018),
    H = n(300937);
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
class W extends l.PureComponent {
    get isHorizontal() {
        let { width: e } = this.props;
        return e >= _.Tm;
    }
    handleViewInventory() {
        (0, S.openUserSettings)(v.X.GIFT_PANEL, { section: B.nc_.INVENTORY });
    }
    renderMedia = () => (0, i.jsx)("div", { className: a()(H.oK, { [H.ok]: this.isHorizontal }) });
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
            renderMedia: this.renderMedia,
            renderActions: this.renderActions,
        });
    }
}
class q extends l.Component {
    get analyticsLocation() {
        let {
            analyticsContext: { location: e },
        } = this.props;
        return { ...e, section: B.JJy.GIFT_CODE_EMBED };
    }
    handleViewLibrary = (e) => {
        let { libraryApplication: t } = this.props;
        e.preventDefault(),
            null != t && t.isHidden()
                ? (0, I.pX)(B.BVt.APPLICATION_LIBRARY_SETTINGS)
                : (0, I.pX)(B.BVt.APPLICATION_LIBRARY, { state: { applicationId: null != t ? t.id : void 0 } });
    };
    handleVerificationClick = (e) => {
        e.stopPropagation(), e.preventDefault(), (0, S.openUserSettings)(v.X.ACCOUNT_PANEL, { section: B.nc_.ACCOUNT });
    };
    handleAccept = (e) => {
        let { channelId: t, code: n, content: i, type: l, giftInfo: r } = this.props;
        e.preventDefault(),
            e.stopPropagation(),
            M.default.track(B.HAw.OPEN_MODAL, {
                type: "gift_accept",
                location: { ...this.analyticsLocation, object: B.ZSU.BUTTON_CTA },
            });
        let a = l !== B.lAJ.CUSTOM_GIFT ? void 0 : i;
        (0, C.h)({ processedCode: n, channelContext: t, customGiftMessage: a, giftInfo: r });
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
              (e.preventDefault(), (0, S.openUserSettings)(v.X.NITRO_PANEL, { section: B.nc_.PREMIUM }));
    };
    handleClaimPromotion = (e) => {
        e.stopPropagation(), e.preventDefault();
        let t = this.props.giftCode?.code;
        null != t && window.open(B.BVt.BILLING_PROMOTION_REDEMPTION(t));
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
        let { libraryApplication: t, currentUser: n, isSelfGift: l } = this.props,
            r = { onClick: this.handleAccept, color: c.$n.Colors.BRAND },
            a =
                (!e.isSubscription && null != t) ||
                (!e.isSelfRedeemable && l) ||
                (e.isExistingPremiumSubscriptionDisallowed && (0, D.TW)(n));
        return (
            (e.redeemed || a || e.isClaimed || !n.verified) && ((r.color = c.$n.Colors.BRAND), (r.disabled = !0)),
            (0, i.jsx)(c.$n, {
                ...r,
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
        return e === B.lAJ.CUSTOM_GIFT;
    }
    renderTitle(e) {
        let { currentUser: t, isSelfGift: n, sku: i } = this.props;
        return this.isCustomGiftMessage() && !n
            ? F.intl.formatToPlainString(F.t.t1SOId, { recipientDisplayName: O.Ay.getName(t) })
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
            gifter: l,
            subscriptionPlan: r,
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
            return null != l
                ? e.isSubscription
                    ? F.intl.format(F.t.l3VxgG, { username: O.Ay.getUserTag(l), maxUses: e.maxUses, skuName: s })
                    : F.intl.format(F.t["9cYrw5"], { username: O.Ay.getUserTag(l), totalCopies: e.maxUses, skuName: s })
                : e.isSubscription
                  ? F.intl.formatToPlainString(F.t.svrO3W, { maxUses: e.maxUses, skuName: s })
                  : F.intl.formatToPlainString(F.t["3AgAn3"], { totalCopies: e.maxUses, skuName: s });
        if (e.isSubscription) {
            if (null == r) return F.intl.string(F.t.ZTNur7);
            if (null != l) {
                let e = r.interval === G.WT.MONTH ? F.t["/RDIEA"] : F.t["3CX6Ev"];
                return F.intl.format(e, { username: O.Ay.getUserTag(l), skuName: s, intervalCount: r.intervalCount });
            }
            let e = r.interval === G.WT.MONTH ? F.t["2O4lo5"] : F.t["+XjmsR"];
            return F.intl.format(e, { skuName: s, intervalCount: r.intervalCount });
        }
        return null != l ? F.intl.format(F.t["3HsdQ/"], { username: O.Ay.getUserTag(l) }) : F.intl.string(F.t.Jdnjjj);
    }
    renderCustomGiftBox = (e) => {
        let { width: t } = this.props;
        if (null == e || null == e.giftStyle) return null;
        let n = G.Wx.includes(e.giftStyle),
            l = a()(H.gB, { [H.El]: n, [H.by]: t >= _.Tm }),
            r = a()({ [H.gc]: n, [H.Ei]: n && t >= _.Tm, [H.ww]: !n, [H.wy]: !n && t >= _.Tm });
        return (0, i.jsxs)("div", {
            className: l,
            children: [
                n && (0, i.jsx)(P.A, { className: H.nr }),
                null != e.giftStyle &&
                    (0, i.jsx)(E.A, {
                        defaultAnimationState: e.redeemed ? f.oA.LOOP : f.oA.IDLE,
                        giftStyle: e.giftStyle,
                        className: r,
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
        let l = null != e.giftStyle && !(0, b.bF)(n);
        return (0, i.jsx)(U.k, {
            skuId: e.skuId,
            onEmbedClick: this.handleEmbedClick,
            analyticsSection: B.JJy.GIFT_CODE_EMBED,
            renderCustomActions: () => this.renderActions(e),
            renderCustomTitle: () => this.renderTitle(e),
            renderCustomTagline: () => this.renderBody(e),
            renderCustomMedia: l ? () => this.renderCustomGiftBox(e) : void 0,
            width: t,
        });
    }
    render() {
        let { giftCode: e, resolved: t, width: n, isSelfGift: l } = this.props;
        if (null != e && null != e.promotion)
            return (0, i.jsx)(U.k, {
                skuId: e.skuId,
                onEmbedClick: this.handleClaimPromotion,
                analyticsSection: B.JJy.GIFT_CODE_EMBED,
                renderCustomActions: () => this.renderPromotionActions(),
                renderCustomTitle: () => F.intl.string(F.t.X4p5uH),
                renderCustomTagline: () => F.intl.string(F.t.VIuwD7),
                width: n,
            });
        if (null == e || e.revoked)
            if (t) return (0, i.jsx)(W, { isSelfGift: l, width: n });
            else return (0, i.jsx)(_.Wb, { isHorizontal: n >= _.Tm });
        return (0, A.hU)(e) ? (0, i.jsx)("div", { className: H.mp, children: this.renderEmbed() }) : this.renderEmbed();
    }
}
let Y = (0, h.A)((0, m.A)(q)),
    z = function (e) {
        let { code: t, author: n } = e,
            { giftCode: l, resolved: r } = (0, d.cf)([N.A], () => ({
                giftCode: N.A.get(t),
                resolved: N.A.getIsResolved(t),
            })),
            a = (0, d.bG)([L.default], () => (null != l && null != l.userId ? L.default.getUser(l.userId) : null)),
            s = (0, d.bG)([R.A], () => (null != l ? R.A.get(l.skuId) : null)),
            o = (0, d.bG)([j.A], () =>
                null != s && l?.entitlementBranches != null ? w.YI(l.entitlementBranches, s, j.A) : null,
            ),
            c = (0, g.h)(s?.applicationId),
            u = (0, k.zz)(l?.subscriptionPlanId),
            _ = (0, d.bG)([y.default], () => (null != l ? y.default.getId() === l.userId : y.default.getId() === n.id));
        return (0, i.jsx)(Y, {
            ...e,
            skuApplication: c,
            giftCode: l,
            resolved: r,
            gifter: a,
            libraryApplication: o,
            subscriptionPlan: u,
            sku: s,
            isSelfGift: _,
        });
    };
