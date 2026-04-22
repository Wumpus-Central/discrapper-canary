n.d(t, { A: () => Q });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(989349),
    o = n.n(r),
    d = n(311907),
    c = n(939249),
    u = n(657044),
    m = n(821609),
    _ = n(863574),
    h = n(707606),
    p = n(456412),
    g = n(793574),
    A = n(429913),
    f = n(993408),
    x = n(235986),
    C = n(242874),
    E = n(499454),
    I = n(75825),
    v = n(976860),
    b = n(871123),
    T = n(317560),
    S = n(780964),
    y = n(858897),
    N = n(961350),
    j = n(30793),
    L = n(189081),
    R = n(287809),
    P = n(67480),
    w = n(56739),
    D = n(954571),
    k = n(45938),
    O = n(927578),
    M = n(615396),
    U = n(427262),
    G = n(937266),
    B = n(652215),
    F = n(788868),
    H = n(985018),
    V = n(576171);
function q(e) {
    let { onClick: t, libraryApplication: n } = e;
    return (0, i.jsxs)(c.D, {
        className: V.kP,
        onClick: t,
        children: [
            (0, i.jsx)(u._, { size: "md", color: "currentColor", className: V.dy }),
            (0, i.jsx)("div", { children: n.isHidden() ? H.intl.string(H.t.Wi99Ro) : H.intl.string(H.t["+tXad7"]) }),
        ],
    });
}
class W extends l.PureComponent {
    get isHorizontal() {
        let { width: e } = this.props;
        return e >= _.Tm;
    }
    get isClientUpdateRequired() {
        return this.props.resolveErrorCode === B.t02.INVALID_GIFT_REDEMPTION_CLIENT_UPDATE_REQUIRED;
    }
    handleViewInventory() {
        (0, y.openUserSettings)(S.X.GIFT_PANEL);
    }
    renderTitle = () => (this.props.isSelfGift ? H.intl.string(H.t.mT9B49) : H.intl.string(H.t.Vo5yHw));
    renderActions = () =>
        this.props.isSelfGift
            ? (0, i.jsx)(m.$, {
                  variant: "primary",
                  size: "sm",
                  text: H.intl.string(H.t["jcSP+g"]),
                  onClick: this.handleViewInventory,
              })
            : (0, i.jsx)(m.$, { variant: "primary", size: "sm", text: H.intl.string(H.t.bUvv1f), disabled: !0 });
    renderTagline = () =>
        this.isClientUpdateRequired
            ? H.intl.string(H.t.QXgO5w)
            : this.props.isSelfGift
              ? H.intl.string(H.t.eEM3dq)
              : H.intl.string(H.t.tB8S6u);
    render() {
        return (0, i.jsx)(_.ug, {
            isHorizontal: this.isHorizontal,
            renderTitle: this.renderTitle,
            renderTagline: this.renderTagline,
            renderActions: this.renderActions,
        });
    }
}
class z extends l.Component {
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
                ? (0, v.pX)(B.BVt.APPLICATION_LIBRARY_SETTINGS)
                : (0, v.pX)(B.BVt.APPLICATION_LIBRARY, { state: { applicationId: null != t ? t.id : void 0 } });
    };
    handleVerificationClick = (e) => {
        e.stopPropagation(), e.preventDefault(), (0, y.openUserSettings)(S.X.ACCOUNT_PANEL);
    };
    handleAccept = (e) => {
        let { channelId: t, code: n, content: i, type: l, giftInfo: a } = this.props;
        e.preventDefault(),
            e.stopPropagation(),
            D.default.track(B.HAw.OPEN_MODAL, {
                type: "gift_accept",
                location: { ...this.analyticsLocation, object: B.ZSU.BUTTON_CTA },
            });
        let s = l !== B.lAJ.CUSTOM_GIFT ? void 0 : i;
        (0, E.h)({ processedCode: n, channelContext: t, customGiftMessage: s, giftInfo: a });
    };
    handleEmbedClick = (e) => {
        let { giftCode: t, sku: n, skuApplication: i } = this.props;
        null != n && (0, b.bF)(n) && null != i && null != i.guildId
            ? (e.preventDefault(),
              (0, T.R)({
                  skuId: n.id,
                  applicationId: i.id,
                  isStorefront: !1,
                  analyticsLocations: [g.A.GIFT_CODE_EMBED],
              }))
            : null != t && t.isSubscription && (e.preventDefault(), (0, y.openUserSettings)(S.X.NITRO_PANEL));
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
                            : (0, i.jsx)(q, { onClick: this.handleViewLibrary, libraryApplication: t }),
                    ],
                }),
                (0, i.jsxs)(x.A, {
                    align: x.A.Align.END,
                    justify: x.A.Justify.END,
                    className: V.yu,
                    direction: x.A.Direction.VERTICAL,
                    children: [
                        e.hasMultipleCopies ? (0, i.jsx)("div", { children: this.renderGiftCodeCopiesLeft(e) }) : null,
                        e.redeemed || e.isClaimed || null != t || null == e.expiresAt
                            ? null
                            : (0, i.jsx)("div", {
                                  children: H.intl.format(H.t.nZBvUR, { hours: e.expiresAt.diff(o()(), "h") }),
                              }),
                    ],
                }),
            ],
        });
    }
    renderGiftCodeCopiesLeft(e) {
        let t = e.isSubscription ? H.t["4iHwKT"] : H.t.YeLq88;
        return H.intl.format(t, { remaining: e.remainingUses, total: e.maxUses });
    }
    renderButton(e) {
        let { libraryApplication: t, currentUser: n, isSelfGift: l } = this.props,
            a =
                (!e.isSubscription && null != t) ||
                (!e.isSelfRedeemable && l) ||
                (e.isExistingPremiumSubscriptionDisallowed && (0, O.TW)(n)),
            s = e.redeemed || a || e.isClaimed || !n.verified,
            r = e.redeemed
                ? H.intl.string(H.t.BTihou)
                : null != e.giftStyle
                  ? H.intl.string(H.t.TiZFqX)
                  : H.intl.string(H.t.bUvv1f);
        return (0, i.jsx)("div", {
            className: (0, f.hU)(e) ? V.UQ : void 0,
            children: (0, i.jsx)(m.$, {
                variant: "primary",
                size: "sm",
                text: r,
                onClick: this.handleAccept,
                disabled: s,
            }),
        });
    }
    isCustomGiftMessage() {
        let { type: e } = this.props;
        return e === B.lAJ.CUSTOM_GIFT;
    }
    renderTitle(e) {
        let { currentUser: t, isSelfGift: n, sku: i } = this.props;
        return this.isCustomGiftMessage() && !n
            ? H.intl.formatToPlainString(H.t.t1SOId, { recipientDisplayName: U.Ay.getName(t) })
            : null == i
              ? null
              : e.isSubscription
                ? n
                    ? H.intl.string(H.t["2PJ1NP"])
                    : H.intl.string(H.t.hrnGng)
                : n
                  ? H.intl.string(H.t.QLEMld)
                  : H.intl.string(H.t.W4DBcy);
    }
    renderBody(e) {
        let {
            libraryApplication: t,
            isSelfGift: n,
            sku: i,
            gifter: l,
            subscriptionPlan: a,
            currentUser: s,
        } = this.props;
        if (null == i) return H.intl.string(H.t.ZTNur7);
        if (!n && this.isCustomGiftMessage() && !e.redeemed) return (0, b.bF)(i) ? this.props.content : void 0;
        let r = i.isPreorder() ? H.intl.formatToPlainString(H.t.evinTd, { name: i.name }) : i.name;
        if (e.redeemed)
            return e.isSubscription || (0, f.hU)(e) || (0, b.bF)(i)
                ? H.intl.string(H.t.mVC3Cv)
                : H.intl.format(H.t["ss/L+/"], { skuName: r, onViewInLibrary: this.handleViewLibrary });
        if (!e.isSubscription && null != t)
            return H.intl.format(H.t.UdXO8P, { skuName: r, onViewInLibrary: this.handleViewLibrary });
        if (e.isClaimed) return H.intl.string(H.t.ARWFQX);
        if (!s.verified) return H.intl.format(H.t.GQxl7v, { onClick: this.handleVerificationClick });
        if (n)
            return e.isSelfRedeemable
                ? H.intl.string(H.t["lQI+cB"])
                : H.intl.formatToPlainString(H.t["A+etHx"], { skuName: r });
        if (e.isExistingPremiumSubscriptionDisallowed) return H.intl.string(H.t.UCIU9y);
        if (e.hasMultipleCopies)
            return null != l
                ? e.isSubscription
                    ? H.intl.format(H.t.l3VxgG, { username: U.Ay.getUserTag(l), maxUses: e.maxUses, skuName: r })
                    : H.intl.format(H.t["9cYrw5"], { username: U.Ay.getUserTag(l), totalCopies: e.maxUses, skuName: r })
                : e.isSubscription
                  ? H.intl.formatToPlainString(H.t.svrO3W, { maxUses: e.maxUses, skuName: r })
                  : H.intl.formatToPlainString(H.t["3AgAn3"], { totalCopies: e.maxUses, skuName: r });
        if (e.isSubscription) {
            if (null == a) return H.intl.string(H.t.ZTNur7);
            if (null != l) {
                let e = a.interval === F.WT.MONTH ? H.t["/RDIEA"] : H.t["3CX6Ev"];
                return H.intl.format(e, { username: U.Ay.getUserTag(l), skuName: r, intervalCount: a.intervalCount });
            }
            let e = a.interval === F.WT.MONTH ? H.t["2O4lo5"] : H.t["+XjmsR"];
            return H.intl.format(e, { skuName: r, intervalCount: a.intervalCount });
        }
        return null != l ? H.intl.format(H.t["3HsdQ/"], { username: U.Ay.getUserTag(l) }) : H.intl.string(H.t.Jdnjjj);
    }
    renderCustomGiftBox = (e) => {
        let { width: t } = this.props;
        if (null == e || null == e.giftStyle) return null;
        let n = F.Wx.includes(e.giftStyle),
            l = s()(V.gB, { [V.El]: n, [V.by]: t >= _.Tm }),
            a = s()({ [V.gc]: n, [V.Ei]: n && t >= _.Tm, [V.ww]: !n, [V.wy]: !n && t >= _.Tm });
        return (0, i.jsxs)("div", {
            className: l,
            children: [
                n && (0, i.jsx)(w.A, { className: V.nr }),
                null != e.giftStyle &&
                    (0, i.jsx)(I.A, {
                        defaultAnimationState: e.redeemed ? C.oA.LOOP : C.oA.IDLE,
                        giftStyle: e.giftStyle,
                        className: a,
                    }),
            ],
        });
    };
    renderPromotionActions() {
        return (0, i.jsx)(m.$, {
            variant: "primary",
            size: "sm",
            text: H.intl.string(H.t["71nuwc"]),
            onClick: this.handleClaimPromotion,
        });
    }
    renderEmbed() {
        let { giftCode: e, width: t, sku: n } = this.props;
        if (null == e) return null;
        let l = null != e.giftStyle && !(0, b.bF)(n);
        return (0, i.jsx)(G.k, {
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
        let { giftCode: e, resolved: t, resolveErrorCode: n, width: l, isSelfGift: a } = this.props;
        if (null != e && null != e.promotion)
            return (0, i.jsx)(G.k, {
                skuId: e.skuId,
                onEmbedClick: this.handleClaimPromotion,
                analyticsSection: B.JJy.GIFT_CODE_EMBED,
                renderCustomActions: () => this.renderPromotionActions(),
                renderCustomTitle: () => H.intl.string(H.t.X4p5uH),
                renderCustomTagline: () => H.intl.string(H.t.VIuwD7),
                width: l,
            });
        if (null == e || e.revoked)
            if (t) return (0, i.jsx)(W, { isSelfGift: a, width: l, resolveErrorCode: n });
            else return (0, i.jsx)(_.Wb, { isHorizontal: l >= _.Tm });
        return (0, f.hU)(e) ? (0, i.jsx)("div", { className: V.mp, children: this.renderEmbed() }) : this.renderEmbed();
    }
}
let Y = (0, p.A)((0, h.A)(z)),
    Q = function (e) {
        let { code: t, author: n } = e,
            {
                giftCode: l,
                resolved: a,
                resolveErrorCode: s,
            } = (0, d.cf)([j.A], () => {
                let e = j.A.getError(t);
                return { giftCode: j.A.get(t), resolved: j.A.getIsResolved(t), resolveErrorCode: e?.code ?? null };
            }),
            r = (0, d.bG)([R.default], () => (null != l && null != l.userId ? R.default.getUser(l.userId) : null)),
            o = (0, d.bG)([P.A], () => (null != l ? P.A.get(l.skuId) : null)),
            c = (0, d.bG)([L.A], () =>
                null != o && l?.entitlementBranches != null ? k.YI(l.entitlementBranches, o, L.A) : null,
            ),
            u = (0, A.h)(o?.applicationId),
            m = (0, M.zz)(l?.subscriptionPlanId),
            _ = (0, d.bG)([N.default], () => (null != l ? N.default.getId() === l.userId : N.default.getId() === n.id));
        return (0, i.jsx)(Y, {
            ...e,
            skuApplication: u,
            giftCode: l,
            resolved: a,
            resolveErrorCode: s,
            gifter: r,
            libraryApplication: c,
            subscriptionPlan: m,
            sku: o,
            isSelfGift: _,
        });
    };
