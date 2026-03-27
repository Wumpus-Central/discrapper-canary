n.d(t, { A: () => z });
var i = n(627968),
    a = n(64700),
    r = n(503698),
    l = n.n(r),
    s = n(989349),
    o = n.n(s),
    d = n(311907),
    c = n(397927),
    u = n(863574),
    _ = n(707606),
    m = n(456412),
    h = n(793574),
    p = n(429913),
    g = n(993408),
    A = n(235986),
    x = n(242874),
    f = n(499454),
    C = n(75825),
    I = n(976860),
    E = n(871123),
    b = n(317560),
    v = n(780964),
    T = n(840065),
    y = n(961350),
    S = n(30793),
    N = n(189081),
    j = n(287809),
    L = n(67480),
    R = n(56739),
    P = n(954571),
    w = n(45938),
    M = n(927578),
    D = n(615396),
    k = n(427262),
    O = n(937266),
    U = n(652215),
    B = n(788868),
    G = n(985018),
    F = n(141019);
function H(e) {
    let { onClick: t, libraryApplication: n } = e;
    return (0, i.jsxs)(c.DUT, {
        className: F.kP,
        onClick: t,
        children: [
            (0, i.jsx)(c._z, { size: "md", color: "currentColor", className: F.dy }),
            (0, i.jsx)("div", { children: n.isHidden() ? G.intl.string(G.t.Wi99Ro) : G.intl.string(G.t["+tXad7"]) }),
        ],
    });
}
class V extends a.PureComponent {
    get isHorizontal() {
        let { width: e } = this.props;
        return e >= u.Tm;
    }
    handleViewInventory() {
        (0, T.openUserSettings)(v.X.GIFT_PANEL);
    }
    renderTitle = () => (this.props.isSelfGift ? G.intl.string(G.t.mT9B49) : G.intl.string(G.t.Vo5yHw));
    renderActions = () =>
        this.props.isSelfGift
            ? (0, i.jsx)(c.Button, {
                  variant: "primary",
                  size: "sm",
                  text: G.intl.string(G.t["jcSP+g"]),
                  onClick: this.handleViewInventory,
              })
            : (0, i.jsx)(c.Button, { variant: "primary", size: "sm", text: G.intl.string(G.t.bUvv1f), disabled: !0 });
    renderTagline = () => (this.props.isSelfGift ? G.intl.string(G.t.eEM3dq) : G.intl.string(G.t.tB8S6u));
    render() {
        return (0, i.jsx)(u.ug, {
            isHorizontal: this.isHorizontal,
            renderTitle: this.renderTitle,
            renderTagline: this.renderTagline,
            renderActions: this.renderActions,
        });
    }
}
class q extends a.Component {
    get analyticsLocation() {
        let {
            analyticsContext: { location: e },
        } = this.props;
        return { ...e, section: U.JJy.GIFT_CODE_EMBED };
    }
    handleViewLibrary = (e) => {
        let { libraryApplication: t } = this.props;
        e.preventDefault(),
            null != t && t.isHidden()
                ? (0, I.pX)(U.BVt.APPLICATION_LIBRARY_SETTINGS)
                : (0, I.pX)(U.BVt.APPLICATION_LIBRARY, { state: { applicationId: null != t ? t.id : void 0 } });
    };
    handleVerificationClick = (e) => {
        e.stopPropagation(), e.preventDefault(), (0, T.openUserSettings)(v.X.ACCOUNT_PANEL);
    };
    handleAccept = (e) => {
        let { channelId: t, code: n, content: i, type: a, giftInfo: r } = this.props;
        e.preventDefault(),
            e.stopPropagation(),
            P.default.track(U.HAw.OPEN_MODAL, {
                type: "gift_accept",
                location: { ...this.analyticsLocation, object: U.ZSU.BUTTON_CTA },
            });
        let l = a !== U.lAJ.CUSTOM_GIFT ? void 0 : i;
        (0, f.h)({ processedCode: n, channelContext: t, customGiftMessage: l, giftInfo: r });
    };
    handleEmbedClick = (e) => {
        let { giftCode: t, sku: n, skuApplication: i } = this.props;
        null != n && (0, E.bF)(n) && null != i && null != i.guildId
            ? (e.preventDefault(),
              (0, b.R)({
                  skuId: n.id,
                  applicationId: i.id,
                  isStorefront: !1,
                  analyticsLocations: [h.A.GIFT_CODE_EMBED],
              }))
            : null != t && t.isSubscription && (e.preventDefault(), (0, T.openUserSettings)(v.X.NITRO_PANEL));
    };
    handleClaimPromotion = (e) => {
        e.stopPropagation(), e.preventDefault();
        let t = this.props.giftCode?.code;
        null != t && window.open(U.BVt.BILLING_PROMOTION_REDEMPTION(t));
    };
    renderActions(e) {
        let { libraryApplication: t } = this.props;
        return (0, i.jsxs)(A.A, {
            justify: A.A.Justify.BETWEEN,
            children: [
                (0, i.jsxs)(A.A, {
                    children: [
                        this.renderButton(e),
                        null == t || e.isSubscription
                            ? null
                            : (0, i.jsx)(H, { onClick: this.handleViewLibrary, libraryApplication: t }),
                    ],
                }),
                (0, i.jsxs)(A.A, {
                    align: A.A.Align.END,
                    justify: A.A.Justify.END,
                    className: F.yu,
                    direction: A.A.Direction.VERTICAL,
                    children: [
                        e.hasMultipleCopies ? (0, i.jsx)("div", { children: this.renderGiftCodeCopiesLeft(e) }) : null,
                        e.redeemed || e.isClaimed || null != t || null == e.expiresAt
                            ? null
                            : (0, i.jsx)("div", {
                                  children: G.intl.format(G.t.nZBvUR, { hours: e.expiresAt.diff(o()(), "h") }),
                              }),
                    ],
                }),
            ],
        });
    }
    renderGiftCodeCopiesLeft(e) {
        let t = e.isSubscription ? G.t["4iHwKT"] : G.t.YeLq88;
        return G.intl.format(t, { remaining: e.remainingUses, total: e.maxUses });
    }
    renderButton(e) {
        let { libraryApplication: t, currentUser: n, isSelfGift: a } = this.props,
            r =
                (!e.isSubscription && null != t) ||
                (!e.isSelfRedeemable && a) ||
                (e.isExistingPremiumSubscriptionDisallowed && (0, M.TW)(n)),
            l = e.redeemed || r || e.isClaimed || !n.verified,
            s = e.redeemed
                ? G.intl.string(G.t.BTihou)
                : null != e.giftStyle
                  ? G.intl.string(G.t.TiZFqX)
                  : G.intl.string(G.t.bUvv1f);
        return (0, i.jsx)("div", {
            className: (0, g.hU)(e) ? F.UQ : void 0,
            children: (0, i.jsx)(c.Button, {
                variant: "primary",
                size: "sm",
                text: s,
                onClick: this.handleAccept,
                disabled: l,
            }),
        });
    }
    isCustomGiftMessage() {
        let { type: e } = this.props;
        return e === U.lAJ.CUSTOM_GIFT;
    }
    renderTitle(e) {
        let { currentUser: t, isSelfGift: n, sku: i } = this.props;
        return this.isCustomGiftMessage() && !n
            ? G.intl.formatToPlainString(G.t.t1SOId, { recipientDisplayName: k.Ay.getName(t) })
            : null == i
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
            sku: i,
            gifter: a,
            subscriptionPlan: r,
            currentUser: l,
        } = this.props;
        if (null == i) return G.intl.string(G.t.ZTNur7);
        if (!n && this.isCustomGiftMessage() && !e.redeemed) return;
        let s = i.isPreorder() ? G.intl.formatToPlainString(G.t.evinTd, { name: i.name }) : i.name;
        if (e.redeemed)
            return e.isSubscription || (0, g.hU)(e) || (0, E.bF)(i)
                ? G.intl.string(G.t.mVC3Cv)
                : G.intl.format(G.t["ss/L+/"], { skuName: s, onViewInLibrary: this.handleViewLibrary });
        if (!e.isSubscription && null != t)
            return G.intl.format(G.t.UdXO8P, { skuName: s, onViewInLibrary: this.handleViewLibrary });
        if (e.isClaimed) return G.intl.string(G.t.ARWFQX);
        if (!l.verified) return G.intl.format(G.t.GQxl7v, { onClick: this.handleVerificationClick });
        if (n)
            return e.isSelfRedeemable
                ? G.intl.string(G.t["lQI+cB"])
                : G.intl.formatToPlainString(G.t["A+etHx"], { skuName: s });
        if (e.isExistingPremiumSubscriptionDisallowed) return G.intl.string(G.t.UCIU9y);
        if (e.hasMultipleCopies)
            return null != a
                ? e.isSubscription
                    ? G.intl.format(G.t.l3VxgG, { username: k.Ay.getUserTag(a), maxUses: e.maxUses, skuName: s })
                    : G.intl.format(G.t["9cYrw5"], { username: k.Ay.getUserTag(a), totalCopies: e.maxUses, skuName: s })
                : e.isSubscription
                  ? G.intl.formatToPlainString(G.t.svrO3W, { maxUses: e.maxUses, skuName: s })
                  : G.intl.formatToPlainString(G.t["3AgAn3"], { totalCopies: e.maxUses, skuName: s });
        if (e.isSubscription) {
            if (null == r) return G.intl.string(G.t.ZTNur7);
            if (null != a) {
                let e = r.interval === B.WT.MONTH ? G.t["/RDIEA"] : G.t["3CX6Ev"];
                return G.intl.format(e, { username: k.Ay.getUserTag(a), skuName: s, intervalCount: r.intervalCount });
            }
            let e = r.interval === B.WT.MONTH ? G.t["2O4lo5"] : G.t["+XjmsR"];
            return G.intl.format(e, { skuName: s, intervalCount: r.intervalCount });
        }
        return null != a ? G.intl.format(G.t["3HsdQ/"], { username: k.Ay.getUserTag(a) }) : G.intl.string(G.t.Jdnjjj);
    }
    renderCustomGiftBox = (e) => {
        let { width: t } = this.props;
        if (null == e || null == e.giftStyle) return null;
        let n = B.Wx.includes(e.giftStyle),
            a = l()(F.gB, { [F.El]: n, [F.by]: t >= u.Tm }),
            r = l()({ [F.gc]: n, [F.Ei]: n && t >= u.Tm, [F.ww]: !n, [F.wy]: !n && t >= u.Tm });
        return (0, i.jsxs)("div", {
            className: a,
            children: [
                n && (0, i.jsx)(R.A, { className: F.nr }),
                null != e.giftStyle &&
                    (0, i.jsx)(C.A, {
                        defaultAnimationState: e.redeemed ? x.oA.LOOP : x.oA.IDLE,
                        giftStyle: e.giftStyle,
                        className: r,
                    }),
            ],
        });
    };
    renderPromotionActions() {
        return (0, i.jsx)(c.Button, {
            variant: "primary",
            size: "sm",
            text: G.intl.string(G.t["71nuwc"]),
            onClick: this.handleClaimPromotion,
        });
    }
    renderEmbed() {
        let { giftCode: e, width: t, sku: n } = this.props;
        if (null == e) return null;
        let a = null != e.giftStyle && !(0, E.bF)(n);
        return (0, i.jsx)(O.k, {
            skuId: e.skuId,
            onEmbedClick: this.handleEmbedClick,
            analyticsSection: U.JJy.GIFT_CODE_EMBED,
            renderCustomActions: () => this.renderActions(e),
            renderCustomTitle: () => this.renderTitle(e),
            renderCustomTagline: () => this.renderBody(e),
            renderCustomMedia: a ? () => this.renderCustomGiftBox(e) : void 0,
            width: t,
        });
    }
    render() {
        let { giftCode: e, resolved: t, width: n, isSelfGift: a } = this.props;
        if (null != e && null != e.promotion)
            return (0, i.jsx)(O.k, {
                skuId: e.skuId,
                onEmbedClick: this.handleClaimPromotion,
                analyticsSection: U.JJy.GIFT_CODE_EMBED,
                renderCustomActions: () => this.renderPromotionActions(),
                renderCustomTitle: () => G.intl.string(G.t.X4p5uH),
                renderCustomTagline: () => G.intl.string(G.t.VIuwD7),
                width: n,
            });
        if (null == e || e.revoked)
            if (t) return (0, i.jsx)(V, { isSelfGift: a, width: n });
            else return (0, i.jsx)(u.Wb, { isHorizontal: n >= u.Tm });
        return (0, g.hU)(e) ? (0, i.jsx)("div", { className: F.mp, children: this.renderEmbed() }) : this.renderEmbed();
    }
}
let W = (0, m.A)((0, _.A)(q)),
    z = function (e) {
        let { code: t, author: n } = e,
            { giftCode: a, resolved: r } = (0, d.cf)([S.A], () => ({
                giftCode: S.A.get(t),
                resolved: S.A.getIsResolved(t),
            })),
            l = (0, d.bG)([j.default], () => (null != a && null != a.userId ? j.default.getUser(a.userId) : null)),
            s = (0, d.bG)([L.A], () => (null != a ? L.A.get(a.skuId) : null)),
            o = (0, d.bG)([N.A], () =>
                null != s && a?.entitlementBranches != null ? w.YI(a.entitlementBranches, s, N.A) : null,
            ),
            c = (0, p.h)(s?.applicationId),
            u = (0, D.zz)(a?.subscriptionPlanId),
            _ = (0, d.bG)([y.default], () => (null != a ? y.default.getId() === a.userId : y.default.getId() === n.id));
        return (0, i.jsx)(W, {
            ...e,
            skuApplication: c,
            giftCode: a,
            resolved: r,
            gifter: l,
            libraryApplication: o,
            subscriptionPlan: u,
            sku: s,
            isSelfGift: _,
        });
    };
