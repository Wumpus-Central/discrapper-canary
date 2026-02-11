n.d(t, { A: () => O });
var i = n(627968),
    l = n(64700),
    a = n(989349),
    r = n.n(a),
    s = n(607399),
    o = n(311907),
    d = n(397927),
    c = n(863574),
    u = n(793574),
    m = n(688810),
    _ = n(888675),
    h = n(532794),
    p = n(287809),
    g = n(166403),
    A = n(954571),
    f = n(405269),
    x = n(975571),
    E = n(927578),
    C = n(851746),
    I = n(727949),
    T = n(664654),
    v = n(303682),
    N = n(857586),
    S = n(378135),
    b = n(788868),
    j = n(652215),
    y = n(985018),
    R = n(102205),
    L = n(954457);
class M extends l.Component {
    trialOffer;
    referralsSent;
    currentUser;
    recipientHasNitro;
    trialEndsAt;
    analyticsLocations;
    offerExpired;
    isSender;
    compact;
    constructor(e) {
        super(e),
            (this.trialOffer = e.trialOffer),
            (this.referralsSent = e.referralsSent),
            (this.currentUser = e.currentUser),
            (this.recipientHasNitro = e.recipientHasNitro),
            (this.trialEndsAt = e.trialEndsAt),
            (this.analyticsLocations = e.analyticsLocations),
            (this.compact = !0 === e.compact),
            (this.offerExpired = (0, S.P)(this.trialOffer)),
            (this.isSender = this.currentUser.id === this.trialOffer.referrer_id);
    }
    getSystemMessageHeader() {
        let e = p.default.getUser(this.trialOffer.user_id);
        if (this.isSender) return y.intl.format(y.t["4/EMxl"], { receiver: e?.username });
        let t = p.default.getUser(this.trialOffer.referrer_id),
            n = t?.username !== void 0 ? t.username : "";
        return y.intl.format(y.t.yisueA, { sender: n, helpdeskArticle: x.A.getArticleURL(j.MVz.REFERRAL_PROGRAM) });
    }
    getTitleText() {
        let e = p.default.getUser(this.trialOffer.user_id),
            t = null != e ? e.username : "???",
            n = p.default.getUser(this.trialOffer.referrer_id),
            i = null != n ? n.username : "???";
        return this.recipientHasNitro && void 0 === this.trialOffer.redeemed_at
            ? y.intl.formatToPlainString(y.t["Mptau/"], { username: t })
            : this.offerExpired
              ? this.isSender
                  ? y.intl.string(y.t["9SNdf4"])
                  : y.intl.formatToPlainString(y.t["H0+MxK"], { userName: i })
              : y.intl.formatToPlainString(y.t.IiWKwg, { senderUserName: i, recipientUserName: t });
    }
    getBodyText() {
        return this.recipientHasNitro && !this.isSender && void 0 === this.trialOffer.redeemed_at
            ? y.intl.format(y.t.LwCwT9, { helpdeskArticle: x.A.getArticleURL(j.MVz.REFERRAL_PROGRAM) })
            : this.offerExpired
              ? null
              : y.intl.string(y.t.lQLlOb);
    }
    renderActions() {
        let e =
                this.currentUser.id !== this.trialOffer.user_id ||
                (0, E.TW)(this.currentUser) ||
                !this.currentUser.verified ||
                (0, S.P)(this.trialOffer),
            t = this.renderExpirationDate();
        return (0, i.jsxs)("div", {
            className: R.UD,
            children: [
                (0, i.jsx)("div", {
                    children: (0, i.jsx)(d.Button, {
                        variant: "primary",
                        disabled: e,
                        size: "sm",
                        text: y.intl.string(y.t.O0etsF),
                        onClick: () => {
                            (0, h.A)({
                                initialPlanId: null,
                                subscriptionTier: b.pe.TIER_2,
                                analyticsLocations: this.analyticsLocations,
                                trialId: this.trialOffer.trial_id,
                                referralTrialOfferId: this.trialOffer.id,
                            });
                        },
                    }),
                }),
                (0, i.jsx)("div", { className: R.yu, children: t }),
            ],
        });
    }
    renderExpirationDate() {
        let { trialOffer: e, trialEndsAt: t } = this.props;
        if (void 0 !== e.redeemed_at && !this.isSender && null !== t)
            return y.intl.formatToPlainString(y.t.nP0ivR, { date: (0, f.i$)(r()(t), "LL") });
        if (this.recipientHasNitro || void 0 === e.expires_at) return null;
        let n = r()(e.expires_at);
        return this.offerExpired
            ? y.intl.formatToPlainString(y.t.PuSHfU, { date: (0, f.i$)(r()(n), "LL") })
            : (0, I.GQ)(n.valueOf());
    }
    renderMedia() {
        return (0, i.jsx)("div", { className: R.Qj });
    }
    render() {
        let e = () => {
                let e = p.default.getUser(this.trialOffer.user_id),
                    t = null != e ? e.username : "???",
                    n = p.default.getUser(this.trialOffer.referrer_id),
                    i = null != n ? n.username : "???";
                if (this.isSender)
                    if (this.recipientHasNitro && void 0 === this.trialOffer.redeemed_at)
                        return {
                            headerText: y.intl.formatToPlainString(y.t.qABVhL, { recipient: t }),
                            bodyText: y.intl.formatToPlainString(y.t.u7hyDx, {
                                helpdeskArticle: x.A.getArticleURL(j.MVz.REFERRAL_PROGRAM),
                            }),
                        };
                    else
                        return {
                            headerText: y.intl.string(y.t.LAGZfq),
                            bodyText: y.intl.formatToPlainString(y.t["0gnFLC"], { recipient: t }),
                        };
                return this.offerExpired
                    ? {
                          headerText: y.intl.string(y.t.nYvpUl),
                          bodyText: y.intl.formatToPlainString(y.t.wJdBEZ, { sender: i }),
                      }
                    : {
                          headerText: y.intl.string(y.t.HtTvXA),
                          bodyText: y.intl.formatToPlainString(y.t.wOQByA, { sender: i }),
                      };
            },
            t = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(N.A, {
                        subscriptionTier: b.pe.TIER_2,
                        buttonTextOverride: y.intl.string(y.t.O0etsF),
                        size: "md",
                        variantOverride: "expressive",
                    }),
                    (0, i.jsx)(d.Text, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        children: this.renderExpirationDate(),
                    }),
                ],
            }),
            l = (0, i.jsx)(d.Button, {
                variant: "primary",
                disabled: !1,
                size: "md",
                onClick: () =>
                    ((e) => {
                        let { analyticsLocations: t, startingScreen: l } = e;
                        A.default.track(j.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, { location_stack: t }),
                            (0, d.mMO)(async () => {
                                let { default: e } = await Promise.resolve().then(n.bind(n, 303682));
                                return (t) => (0, i.jsx)(e, { ...t, startingScreen: l });
                            });
                    })({
                        analyticsLocations: [],
                        startingScreen:
                            this.referralsSent.size === T.Z
                                ? v.SelectFriendsModalScreens.REMINDER
                                : v.SelectFriendsModalScreens.SELECT_FRIENDS,
                    }),
                text: y.intl.string(y.t.Lm2nFc),
            }),
            a = this.isSender ? l : t,
            r = (0, i.jsx)(d._V3, { src: L.A, height: 84, width: 144, className: R.ms }),
            { headerText: s, bodyText: o } = e();
        return (0, i.jsxs)(_.A, {
            className: R.SB,
            iconNode: (0, i.jsx)(d.tvc, { size: "md", color: "currentColor" }),
            iconContainerClassName: R.J5,
            compact: this.compact,
            children: [
                (0, i.jsx)(d.Text, {
                    variant: "text-md/medium",
                    color: "text-strong",
                    children: this.getSystemMessageHeader(),
                }),
                (0, i.jsxs)("div", {
                    className: R.i2,
                    children: [
                        r,
                        (0, i.jsxs)("div", {
                            className: R.KX,
                            children: [
                                (0, i.jsxs)("div", {
                                    className: R.xJ,
                                    children: [
                                        (0, i.jsx)(d.Heading, {
                                            variant: "heading-md/semibold",
                                            color: "text-strong",
                                            children: s,
                                        }),
                                        (0, i.jsx)(d.Text, {
                                            variant: "text-md/medium",
                                            color: "text-subtle",
                                            children: o,
                                        }),
                                    ],
                                }),
                                (0, i.jsx)("div", { className: R.ox, children: a }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    }
}
function O(e) {
    let { userTrialOfferId: t, canRenderReferralEmbed: n, compact: l } = e,
        {
            trialOffer: a,
            isResolving: r,
            referralsSent: d,
        } = (0, o.cf)(
            [C.A],
            () => ({
                trialOffer: n ? C.A.getRelevantUserTrialOffer(t) : null,
                isResolving: !!n && C.A.isResolving(t),
                referralsSent: C.A.getRecipientStatus(),
            }),
            [n, t],
        ),
        _ = p.default.getCurrentUser(),
        h = (0, o.bG)(
            [p.default],
            () => null != a && (0, E.TW)(void 0 !== _ && a.user_id === _.id ? _ : p.default.getUser(a.user_id)),
        ),
        A = (0, o.bG)([g.A], () => (h ? g.A.getPremiumTypeSubscription()?.trialEndsAt : null)),
        { analyticsLocations: f } = (0, m.Ay)(u.A.SHARE_NITRO_EMBED);
    return r
        ? (0, i.jsx)(c.Wb, { isHorizontal: !s.Fr })
        : n && null != a && void 0 !== _
          ? (0, i.jsx)(M, {
                trialOffer: a,
                referralsSent: d,
                currentUser: _,
                recipientHasNitro: h,
                trialEndsAt: A,
                analyticsLocations: f,
                compact: l,
            })
          : (0, i.jsx)("div", { className: R.TU, children: (0, i.jsx)("div", { className: R.Gq }) });
}
