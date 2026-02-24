n.d(t, { A: () => L });
var i = n(627968),
    l = n(64700),
    a = n(989349),
    r = n.n(a),
    s = n(607399),
    o = n(311907),
    c = n(397927),
    d = n(863574),
    u = n(793574),
    m = n(688810),
    _ = n(888675),
    A = n(532794),
    h = n(287809),
    f = n(166403),
    E = n(954571),
    g = n(405269),
    p = n(975571),
    x = n(927578),
    C = n(851746),
    I = n(727949),
    T = n(664654),
    N = n(303682),
    S = n(857586),
    R = n(378135),
    v = n(788868),
    M = n(652215),
    j = n(985018),
    O = n(102205),
    b = n(954457);
class y extends l.Component {
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
            (this.offerExpired = (0, R.P)(this.trialOffer)),
            (this.isSender = this.currentUser.id === this.trialOffer.referrer_id);
    }
    getSystemMessageHeader() {
        let e = h.default.getUser(this.trialOffer.user_id);
        if (this.isSender) return j.intl.format(j.t["4/EMxl"], { receiver: e?.username });
        let t = h.default.getUser(this.trialOffer.referrer_id),
            n = t?.username !== void 0 ? t.username : "";
        return j.intl.format(j.t.yisueA, { sender: n, helpdeskArticle: p.A.getArticleURL(M.MVz.REFERRAL_PROGRAM) });
    }
    getTitleText() {
        let e = h.default.getUser(this.trialOffer.user_id),
            t = null != e ? e.username : "???",
            n = h.default.getUser(this.trialOffer.referrer_id),
            i = null != n ? n.username : "???";
        return this.recipientHasNitro && void 0 === this.trialOffer.redeemed_at
            ? j.intl.formatToPlainString(j.t["Mptau/"], { username: t })
            : this.offerExpired
              ? this.isSender
                  ? j.intl.string(j.t["9SNdf4"])
                  : j.intl.formatToPlainString(j.t["H0+MxK"], { userName: i })
              : j.intl.formatToPlainString(j.t.IiWKwg, { senderUserName: i, recipientUserName: t });
    }
    getBodyText() {
        return this.recipientHasNitro && !this.isSender && void 0 === this.trialOffer.redeemed_at
            ? j.intl.format(j.t.LwCwT9, { helpdeskArticle: p.A.getArticleURL(M.MVz.REFERRAL_PROGRAM) })
            : this.offerExpired
              ? null
              : j.intl.string(j.t.lQLlOb);
    }
    renderActions() {
        let e =
                this.currentUser.id !== this.trialOffer.user_id ||
                (0, x.TW)(this.currentUser) ||
                !this.currentUser.verified ||
                (0, R.P)(this.trialOffer),
            t = this.renderExpirationDate();
        return (0, i.jsxs)("div", {
            className: O.UD,
            children: [
                (0, i.jsx)("div", {
                    children: (0, i.jsx)(c.Button, {
                        variant: "primary",
                        disabled: e,
                        size: "sm",
                        text: j.intl.string(j.t.O0etsF),
                        onClick: () => {
                            (0, A.A)({
                                initialPlanId: null,
                                subscriptionTier: v.pe.TIER_2,
                                analyticsLocations: this.analyticsLocations,
                                trialId: this.trialOffer.trial_id,
                                referralTrialOfferId: this.trialOffer.id,
                            });
                        },
                    }),
                }),
                (0, i.jsx)("div", { className: O.yu, children: t }),
            ],
        });
    }
    renderExpirationDate() {
        let { trialOffer: e, trialEndsAt: t } = this.props;
        if (void 0 !== e.redeemed_at && !this.isSender && null !== t)
            return j.intl.formatToPlainString(j.t.nP0ivR, { date: (0, g.i$)(r()(t), "LL") });
        if (this.recipientHasNitro || void 0 === e.expires_at) return null;
        let n = r()(e.expires_at);
        return this.offerExpired
            ? j.intl.formatToPlainString(j.t.PuSHfU, { date: (0, g.i$)(r()(n), "LL") })
            : (0, I.GQ)(n.valueOf());
    }
    renderMedia() {
        return (0, i.jsx)("div", { className: O.Qj });
    }
    render() {
        let e = () => {
                let e = h.default.getUser(this.trialOffer.user_id),
                    t = null != e ? e.username : "???",
                    n = h.default.getUser(this.trialOffer.referrer_id),
                    i = null != n ? n.username : "???";
                if (this.isSender)
                    if (this.recipientHasNitro && void 0 === this.trialOffer.redeemed_at)
                        return {
                            headerText: j.intl.formatToPlainString(j.t.qABVhL, { recipient: t }),
                            bodyText: j.intl.formatToPlainString(j.t.u7hyDx, {
                                helpdeskArticle: p.A.getArticleURL(M.MVz.REFERRAL_PROGRAM),
                            }),
                        };
                    else
                        return {
                            headerText: j.intl.string(j.t.LAGZfq),
                            bodyText: j.intl.formatToPlainString(j.t["0gnFLC"], { recipient: t }),
                        };
                return this.offerExpired
                    ? {
                          headerText: j.intl.string(j.t.nYvpUl),
                          bodyText: j.intl.formatToPlainString(j.t.wJdBEZ, { sender: i }),
                      }
                    : {
                          headerText: j.intl.string(j.t.HtTvXA),
                          bodyText: j.intl.formatToPlainString(j.t.wOQByA, { sender: i }),
                      };
            },
            t = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(S.A, {
                        subscriptionTier: v.pe.TIER_2,
                        buttonTextOverride: j.intl.string(j.t.O0etsF),
                        size: "md",
                        variantOverride: "expressive",
                    }),
                    (0, i.jsx)(c.Text, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        children: this.renderExpirationDate(),
                    }),
                ],
            }),
            l = (0, i.jsx)(c.Button, {
                variant: "primary",
                disabled: !1,
                size: "md",
                onClick: () =>
                    ((e) => {
                        let { analyticsLocations: t, startingScreen: l } = e;
                        E.default.track(M.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, { location_stack: t }),
                            (0, c.mMO)(async () => {
                                let { default: e } = await Promise.resolve().then(n.bind(n, 303682));
                                return (t) => (0, i.jsx)(e, { ...t, startingScreen: l });
                            });
                    })({
                        analyticsLocations: [],
                        startingScreen:
                            this.referralsSent.size === T.Z
                                ? N.SelectFriendsModalScreens.REMINDER
                                : N.SelectFriendsModalScreens.SELECT_FRIENDS,
                    }),
                text: j.intl.string(j.t.Lm2nFc),
            }),
            a = this.isSender ? l : t,
            r = (0, i.jsx)(c._V3, { src: b.A, height: 84, width: 144, className: O.ms }),
            { headerText: s, bodyText: o } = e();
        return (0, i.jsxs)(_.A, {
            className: O.SB,
            iconNode: (0, i.jsx)(c.tvc, { size: "md", color: "currentColor" }),
            iconContainerClassName: O.J5,
            compact: this.compact,
            children: [
                (0, i.jsx)(c.Text, {
                    variant: "text-md/medium",
                    color: "text-strong",
                    children: this.getSystemMessageHeader(),
                }),
                (0, i.jsxs)("div", {
                    className: O.i2,
                    children: [
                        r,
                        (0, i.jsxs)("div", {
                            className: O.KX,
                            children: [
                                (0, i.jsxs)("div", {
                                    className: O.xJ,
                                    children: [
                                        (0, i.jsx)(c.Heading, {
                                            variant: "heading-md/semibold",
                                            color: "text-strong",
                                            children: s,
                                        }),
                                        (0, i.jsx)(c.Text, {
                                            variant: "text-md/medium",
                                            color: "text-subtle",
                                            children: o,
                                        }),
                                    ],
                                }),
                                (0, i.jsx)("div", { className: O.ox, children: a }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    }
}
function L(e) {
    let { userTrialOfferId: t, canRenderReferralEmbed: n, compact: l } = e,
        {
            trialOffer: a,
            isResolving: r,
            referralsSent: c,
        } = (0, o.cf)(
            [C.A],
            () => ({
                trialOffer: n ? C.A.getRelevantUserTrialOffer(t) : null,
                isResolving: !!n && C.A.isResolving(t),
                referralsSent: C.A.getRecipientStatus(),
            }),
            [n, t],
        ),
        _ = h.default.getCurrentUser(),
        A = (0, o.bG)(
            [h.default],
            () => null != a && (0, x.TW)(void 0 !== _ && a.user_id === _.id ? _ : h.default.getUser(a.user_id)),
        ),
        E = (0, o.bG)([f.A], () => (A ? f.A.getPremiumTypeSubscription()?.trialEndsAt : null)),
        { analyticsLocations: g } = (0, m.Ay)(u.A.SHARE_NITRO_EMBED);
    return r
        ? (0, i.jsx)(d.Wb, { isHorizontal: !s.Fr })
        : n && null != a && void 0 !== _
          ? (0, i.jsx)(y, {
                trialOffer: a,
                referralsSent: c,
                currentUser: _,
                recipientHasNitro: A,
                trialEndsAt: E,
                analyticsLocations: g,
                compact: l,
            })
          : (0, i.jsx)("div", { className: O.TU, children: (0, i.jsx)("div", { className: O.Gq }) });
}
