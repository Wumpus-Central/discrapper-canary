n.d(t, { A: () => q });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(989349),
    o = n.n(s),
    d = n(311907),
    c = n(421380),
    u = n(397927),
    m = n(863574),
    _ = n(707606),
    h = n(456412),
    p = n(793574),
    g = n(429913),
    A = n(993408),
    f = n(235986),
    x = n(242874),
    E = n(499454),
    C = n(75825),
    I = n(976860),
    T = n(871123),
    v = n(317560),
    N = n(780964),
    S = n(840065),
    b = n(961350),
    j = n(30793),
    y = n(189081),
    R = n(287809),
    L = n(67480),
    M = n(56739),
    O = n(954571),
    D = n(45938),
    P = n(927578),
    k = n(615396),
    U = n(427262),
    w = n(295843),
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
class z extends l.PureComponent {
    get isHorizontal() {
        let { width: e } = this.props;
        return e >= m.Tm;
    }
    handleViewInventory() {
        (0, S.openUserSettings)(N.X.GIFT_PANEL, { section: G.nc_.INVENTORY });
    }
    renderMedia = () => (0, i.jsx)("div", { className: r()(H.oK, { [H.ok]: this.isHorizontal }) });
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
        return (0, i.jsx)(m.ug, {
            isHorizontal: this.isHorizontal,
            renderTitle: this.renderTitle,
            renderTagline: this.renderTagline,
            renderMedia: this.renderMedia,
            renderActions: this.renderActions,
        });
    }
}
class W extends l.Component {
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
        e.stopPropagation(), e.preventDefault(), (0, S.openUserSettings)(N.X.ACCOUNT_PANEL, { section: G.nc_.ACCOUNT });
    };
    handleAccept = (e) => {
        let { channelId: t, code: n, content: i, type: l, giftInfo: a } = this.props;
        e.preventDefault(),
            e.stopPropagation(),
            O.default.track(G.HAw.OPEN_MODAL, {
                type: "gift_accept",
                location: { ...this.analyticsLocation, object: G.ZSU.BUTTON_CTA },
            });
        let r = l !== G.lAJ.CUSTOM_GIFT ? void 0 : i;
        (0, E.h)({ processedCode: n, channelContext: t, customGiftMessage: r, giftInfo: a });
    };
    handleEmbedClick = (e) => {
        let { giftCode: t, sku: n, skuApplication: i } = this.props;
        null != n && (0, T.bF)(n) && null != i && null != i.guildId
            ? (e.preventDefault(),
              (0, v.R)({
                  skuId: n.id,
                  applicationId: i.id,
                  guildId: i.guildId,
                  isStorefront: !1,
                  analyticsLocations: [p.A.GIFT_CODE_EMBED],
              }))
            : null != t &&
              t.isSubscription &&
              (e.preventDefault(), (0, S.openUserSettings)(N.X.NITRO_PANEL, { section: G.nc_.PREMIUM }));
    };
    handleClaimPromotion = (e) => {
        e.stopPropagation(), e.preventDefault();
        let t = this.props.giftCode?.code;
        null != t && window.open(G.BVt.BILLING_PROMOTION_REDEMPTION(t));
    };
    renderActions(e) {
        let { libraryApplication: t } = this.props;
        return (0, i.jsxs)(f.A, {
            justify: f.A.Justify.BETWEEN,
            children: [
                (0, i.jsxs)(f.A, {
                    children: [
                        this.renderButton(e),
                        null == t || e.isSubscription
                            ? null
                            : (0, i.jsx)(V, { onClick: this.handleViewLibrary, libraryApplication: t }),
                    ],
                }),
                (0, i.jsxs)(f.A, {
                    align: f.A.Align.END,
                    justify: f.A.Justify.END,
                    className: H.yu,
                    direction: f.A.Direction.VERTICAL,
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
            a = { onClick: this.handleAccept, color: c.$n.Colors.BRAND },
            r =
                (!e.isSubscription && null != t) ||
                (!e.isSelfRedeemable && l) ||
                (e.isExistingPremiumSubscriptionDisallowed && (0, P.TW)(n));
        return (
            (e.redeemed || r || e.isClaimed || !n.verified) && ((a.color = c.$n.Colors.BRAND), (a.disabled = !0)),
            (0, i.jsx)(c.$n, {
                ...a,
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
            ? F.intl.formatToPlainString(F.t.t1SOId, { recipientDisplayName: U.Ay.getName(t) })
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
            subscriptionPlan: a,
            currentUser: r,
        } = this.props;
        if (null == i) return F.intl.string(F.t.ZTNur7);
        if (!n && this.isCustomGiftMessage() && !e.redeemed) return;
        let s = i.isPreorder() ? F.intl.formatToPlainString(F.t.evinTd, { name: i.name }) : i.name;
        if (e.redeemed)
            return e.isSubscription || (0, A.hU)(e) || (0, T.bF)(i)
                ? F.intl.string(F.t.mVC3Cv)
                : F.intl.format(F.t["ss/L+/"], { skuName: s, onViewInLibrary: this.handleViewLibrary });
        if (!e.isSubscription && null != t)
            return F.intl.format(F.t.UdXO8P, { skuName: s, onViewInLibrary: this.handleViewLibrary });
        if (e.isClaimed) return F.intl.string(F.t.ARWFQX);
        if (!r.verified) return F.intl.format(F.t.GQxl7v, { onClick: this.handleVerificationClick });
        if (n)
            return e.isSelfRedeemable
                ? F.intl.string(F.t["lQI+cB"])
                : F.intl.formatToPlainString(F.t["A+etHx"], { skuName: s });
        if (e.isExistingPremiumSubscriptionDisallowed) return F.intl.string(F.t.UCIU9y);
        if (e.hasMultipleCopies)
            return null != l
                ? e.isSubscription
                    ? F.intl.format(F.t.l3VxgG, { username: U.Ay.getUserTag(l), maxUses: e.maxUses, skuName: s })
                    : F.intl.format(F.t["9cYrw5"], { username: U.Ay.getUserTag(l), totalCopies: e.maxUses, skuName: s })
                : e.isSubscription
                  ? F.intl.formatToPlainString(F.t.svrO3W, { maxUses: e.maxUses, skuName: s })
                  : F.intl.formatToPlainString(F.t["3AgAn3"], { totalCopies: e.maxUses, skuName: s });
        if (e.isSubscription) {
            if (null == a) return F.intl.string(F.t.ZTNur7);
            if (null != l) {
                let e = a.interval === B.WT.MONTH ? F.t["/RDIEA"] : F.t["3CX6Ev"];
                return F.intl.format(e, { username: U.Ay.getUserTag(l), skuName: s, intervalCount: a.intervalCount });
            }
            let e = a.interval === B.WT.MONTH ? F.t["2O4lo5"] : F.t["+XjmsR"];
            return F.intl.format(e, { skuName: s, intervalCount: a.intervalCount });
        }
        return null != l ? F.intl.format(F.t["3HsdQ/"], { username: U.Ay.getUserTag(l) }) : F.intl.string(F.t.Jdnjjj);
    }
    renderCustomGiftBox = (e) => {
        let { width: t } = this.props;
        if (null == e || null == e.giftStyle) return null;
        let n = B.Wx.includes(e.giftStyle),
            l = r()(H.gB, { [H.El]: n, [H.by]: t >= m.Tm }),
            a = r()({ [H.gc]: n, [H.Ei]: n && t >= m.Tm, [H.ww]: !n, [H.wy]: !n && t >= m.Tm });
        return (0, i.jsxs)("div", {
            className: l,
            children: [
                n && (0, i.jsx)(M.A, { className: H.nr }),
                null != e.giftStyle &&
                    (0, i.jsx)(C.A, {
                        defaultAnimationState: e.redeemed ? x.oA.LOOP : x.oA.IDLE,
                        giftStyle: e.giftStyle,
                        className: a,
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
        let l = null != e.giftStyle && !(0, T.bF)(n);
        return (0, i.jsx)(w.k, {
            skuId: e.skuId,
            onEmbedClick: this.handleEmbedClick,
            analyticsSection: G.JJy.GIFT_CODE_EMBED,
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
            return (0, i.jsx)(w.k, {
                skuId: e.skuId,
                onEmbedClick: this.handleClaimPromotion,
                analyticsSection: G.JJy.GIFT_CODE_EMBED,
                renderCustomActions: () => this.renderPromotionActions(),
                renderCustomTitle: () => F.intl.string(F.t.X4p5uH),
                renderCustomTagline: () => F.intl.string(F.t.VIuwD7),
                width: n,
            });
        if (null == e || e.revoked)
            if (t) return (0, i.jsx)(z, { isSelfGift: l, width: n });
            else return (0, i.jsx)(m.Wb, { isHorizontal: n >= m.Tm });
        return (0, A.hU)(e) ? (0, i.jsx)("div", { className: H.mp, children: this.renderEmbed() }) : this.renderEmbed();
    }
}
let Y = (0, h.A)((0, _.A)(W)),
    q = function (e) {
        let { code: t, author: n } = e,
            { giftCode: l, resolved: a } = (0, d.cf)([j.A], () => ({
                giftCode: j.A.get(t),
                resolved: j.A.getIsResolved(t),
            })),
            r = (0, d.bG)([R.default], () => (null != l && null != l.userId ? R.default.getUser(l.userId) : null)),
            s = (0, d.bG)([L.A], () => (null != l ? L.A.get(l.skuId) : null)),
            o = (0, d.bG)([y.A], () =>
                null != s && l?.entitlementBranches != null ? D.YI(l.entitlementBranches, s, y.A) : null,
            ),
            c = (0, g.h)(s?.applicationId),
            u = (0, k.zz)(l?.subscriptionPlanId),
            m = (0, d.bG)([b.default], () => (null != l ? b.default.getId() === l.userId : b.default.getId() === n.id));
        return (0, i.jsx)(Y, {
            ...e,
            skuApplication: c,
            giftCode: l,
            resolved: a,
            gifter: r,
            libraryApplication: o,
            subscriptionPlan: u,
            sku: s,
            isSelfGift: m,
        });
    };
