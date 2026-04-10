n.d(t, { A: () => y });
var i = n(627968),
    l = n(64700),
    a = n(989349),
    r = n.n(a),
    s = n(607399),
    o = n(311907),
    c = n(827734),
    u = n(397927),
    d = n(863574),
    _ = n(793574),
    A = n(688810),
    m = n(888675),
    E = n(532794),
    T = n(287809),
    I = n(166403),
    g = n(954571),
    N = n(405269),
    f = n(975571),
    C = n(927578),
    h = n(851746),
    p = n(727949),
    S = n(664654),
    x = n(303682),
    R = n(465794),
    O = n(378135),
    M = n(788868),
    D = n(652215),
    L = n(985018),
    U = n(739636),
    P = n(954457);
class v extends l.Component {
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
            (this.offerExpired = (0, O.P)(this.trialOffer)),
            (this.isSender = this.currentUser.id === this.trialOffer.referrer_id);
    }
    getSystemMessageHeader() {
        let e = T.default.getUser(this.trialOffer.user_id);
        if (this.isSender) return L.intl.format(L.t["4/EMxl"], { receiver: e?.username });
        let t = T.default.getUser(this.trialOffer.referrer_id),
            n = t?.username !== void 0 ? t.username : "";
        return L.intl.format(L.t.yisueA, { sender: n, helpdeskArticle: f.A.getArticleURL(D.MVz.REFERRAL_PROGRAM) });
    }
    getTitleText() {
        let e = T.default.getUser(this.trialOffer.user_id),
            t = null != e ? e.username : "???",
            n = T.default.getUser(this.trialOffer.referrer_id),
            i = null != n ? n.username : "???";
        return this.recipientHasNitro && void 0 === this.trialOffer.redeemed_at
            ? L.intl.formatToPlainString(L.t["Mptau/"], { username: t })
            : this.offerExpired
              ? this.isSender
                  ? L.intl.string(L.t["9SNdf4"])
                  : L.intl.formatToPlainString(L.t["H0+MxK"], { userName: i })
              : L.intl.formatToPlainString(L.t.IiWKwg, { senderUserName: i, recipientUserName: t });
    }
    getBodyText() {
        return this.recipientHasNitro && !this.isSender && void 0 === this.trialOffer.redeemed_at
            ? L.intl.format(L.t.LwCwT9, { helpdeskArticle: f.A.getArticleURL(D.MVz.REFERRAL_PROGRAM) })
            : this.offerExpired
              ? null
              : L.intl.string(L.t.lQLlOb);
    }
    renderActions() {
        let e =
                this.currentUser.id !== this.trialOffer.user_id ||
                (0, C.TW)(this.currentUser) ||
                !this.currentUser.verified ||
                (0, O.P)(this.trialOffer),
            t = this.renderExpirationDate();
        return (0, i.jsxs)("div", {
            className: U.UD,
            children: [
                (0, i.jsx)("div", {
                    children: (0, i.jsx)(u.Button, {
                        variant: "primary",
                        disabled: e,
                        size: "sm",
                        text: L.intl.string(L.t.O0etsF),
                        onClick: () => {
                            (0, E.A)({
                                initialPlanId: null,
                                subscriptionTier: M.pe.TIER_2,
                                analyticsLocations: this.analyticsLocations,
                                trialId: this.trialOffer.trial_id,
                                referralTrialOfferId: this.trialOffer.id,
                            });
                        },
                    }),
                }),
                (0, i.jsx)("div", { className: U.yu, children: t }),
            ],
        });
    }
    renderExpirationDate() {
        let { trialOffer: e, trialEndsAt: t } = this.props;
        if (void 0 !== e.redeemed_at && !this.isSender && null !== t)
            return L.intl.formatToPlainString(L.t.nP0ivR, { date: (0, N.i$)(r()(t), "LL") });
        if (this.recipientHasNitro || void 0 === e.expires_at) return null;
        let n = r()(e.expires_at);
        return this.offerExpired
            ? L.intl.formatToPlainString(L.t.PuSHfU, { date: (0, N.i$)(r()(n), "LL") })
            : (0, p.GQ)(n.valueOf());
    }
    renderMedia() {
        return (0, i.jsx)("div", { className: U.Qj });
    }
    render() {
        let e = () => {
                let e = T.default.getUser(this.trialOffer.user_id),
                    t = null != e ? e.username : "???",
                    n = T.default.getUser(this.trialOffer.referrer_id),
                    i = null != n ? n.username : "???";
                if (this.isSender)
                    if (this.recipientHasNitro && void 0 === this.trialOffer.redeemed_at)
                        return {
                            headerText: L.intl.formatToPlainString(L.t.qABVhL, { recipient: t }),
                            bodyText: L.intl.formatToPlainString(L.t.u7hyDx, {
                                helpdeskArticle: f.A.getArticleURL(D.MVz.REFERRAL_PROGRAM),
                            }),
                        };
                    else
                        return {
                            headerText: L.intl.string(L.t.LAGZfq),
                            bodyText: L.intl.formatToPlainString(L.t["0gnFLC"], { recipient: t }),
                        };
                return this.offerExpired
                    ? {
                          headerText: L.intl.string(L.t.nYvpUl),
                          bodyText: L.intl.formatToPlainString(L.t.wJdBEZ, { sender: i }),
                      }
                    : {
                          headerText: L.intl.string(L.t.HtTvXA),
                          bodyText: L.intl.formatToPlainString(L.t.wOQByA, { sender: i }),
                      };
            },
            t = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(R.A, {
                        subscriptionTier: M.pe.TIER_2,
                        buttonTextOverride: L.intl.string(L.t.O0etsF),
                        size: "md",
                        variantOverride: "expressive",
                    }),
                    (0, i.jsx)(u.Text, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        children: this.renderExpirationDate(),
                    }),
                ],
            }),
            l = (0, i.jsx)(u.Button, {
                variant: "primary",
                disabled: !1,
                size: "md",
                onClick: () =>
                    ((e) => {
                        let { analyticsLocations: t, startingScreen: l } = e;
                        g.default.track(D.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, { location_stack: t }),
                            (0, u.mMO)(async () => {
                                let { default: e } = await Promise.resolve().then(n.bind(n, 303682));
                                return (t) => (0, i.jsx)(e, { ...t, startingScreen: l });
                            });
                    })({
                        analyticsLocations: [],
                        startingScreen:
                            this.referralsSent.size === S.Z
                                ? x.SelectFriendsModalScreens.REMINDER
                                : x.SelectFriendsModalScreens.SELECT_FRIENDS,
                    }),
                text: L.intl.string(L.t.Lm2nFc),
            }),
            a = this.isSender ? l : t,
            r = (0, i.jsx)(u._V3, { src: P.A, height: 84, width: 144, className: U.ms }),
            { headerText: s, bodyText: o } = e();
        return (0, i.jsxs)(m.A, {
            className: U.SB,
            iconNode: (0, i.jsx)(u.tvc, { size: "md", color: c.A.colors.ICON_STRONG }),
            iconContainerClassName: U.J5,
            compact: this.compact,
            children: [
                (0, i.jsx)(u.Text, {
                    variant: "text-md/medium",
                    color: "text-strong",
                    children: this.getSystemMessageHeader(),
                }),
                (0, i.jsxs)("div", {
                    className: U.i2,
                    children: [
                        r,
                        (0, i.jsxs)("div", {
                            className: U.KX,
                            children: [
                                (0, i.jsxs)("div", {
                                    className: U.xJ,
                                    children: [
                                        (0, i.jsx)(u.Heading, {
                                            variant: "heading-md/semibold",
                                            color: "text-strong",
                                            children: s,
                                        }),
                                        (0, i.jsx)(u.Text, {
                                            variant: "text-md/medium",
                                            color: "text-subtle",
                                            children: o,
                                        }),
                                    ],
                                }),
                                (0, i.jsx)("div", { className: U.ox, children: a }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    }
}
function y(e) {
    let { userTrialOfferId: t, canRenderReferralEmbed: n, compact: l } = e,
        {
            trialOffer: a,
            isResolving: r,
            referralsSent: c,
        } = (0, o.cf)(
            [h.A],
            () => ({
                trialOffer: n ? h.A.getRelevantUserTrialOffer(t) : null,
                isResolving: !!n && h.A.isResolving(t),
                referralsSent: h.A.getRecipientStatus(),
            }),
            [n, t],
        ),
        u = T.default.getCurrentUser(),
        m = (0, o.bG)(
            [T.default],
            () => null != a && (0, C.TW)(void 0 !== u && a.user_id === u.id ? u : T.default.getUser(a.user_id)),
        ),
        E = (0, o.bG)([I.A], () => (m ? I.A.getPremiumTypeSubscription()?.trialEndsAt : null)),
        { analyticsLocations: g } = (0, A.Ay)(_.A.SHARE_NITRO_EMBED);
    return r
        ? (0, i.jsx)(d.Wb, { isHorizontal: !s.Fr })
        : n && null != a && void 0 !== u
          ? (0, i.jsx)(v, {
                trialOffer: a,
                referralsSent: c,
                currentUser: u,
                recipientHasNitro: m,
                trialEndsAt: E,
                analyticsLocations: g,
                compact: l,
            })
          : (0, i.jsx)("div", { className: U.TU, children: (0, i.jsx)("div", { className: U.Gq }) });
}
