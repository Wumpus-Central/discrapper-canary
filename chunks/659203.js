n.d(t, { A: () => k });
var i = n(627968),
    a = n(64700),
    l = n(989349),
    r = n.n(l),
    s = n(607399),
    o = n(465323),
    c = n(311907),
    d = n(827734),
    u = n(397927),
    _ = n(863574),
    m = n(793574),
    A = n(688810),
    E = n(888675),
    I = n(532794),
    T = n(287809),
    f = n(166403),
    N = n(954571),
    g = n(405269),
    C = n(975571),
    h = n(927578),
    p = n(580630),
    x = n(851746),
    R = n(259297),
    S = n(727949),
    O = n(664654),
    M = n(303682),
    D = n(857586),
    P = n(378135),
    U = n(788868),
    v = n(652215),
    L = n(985018),
    j = n(739636),
    y = n(954457);
class b extends a.Component {
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
            (this.offerExpired = (0, P.P)(this.trialOffer)),
            (this.isSender = this.currentUser.id === this.trialOffer.referrer_id);
    }
    getSystemMessageHeader() {
        let e = T.default.getUser(this.trialOffer.user_id);
        if (this.isSender) return L.intl.format(L.t["4/EMxl"], { receiver: e?.username });
        let t = T.default.getUser(this.trialOffer.referrer_id),
            n = t?.username !== void 0 ? t.username : "";
        return L.intl.format(L.t.yisueA, { sender: n, helpdeskArticle: C.A.getArticleURL(v.MVz.REFERRAL_PROGRAM) });
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
            ? L.intl.format(L.t.LwCwT9, { helpdeskArticle: C.A.getArticleURL(v.MVz.REFERRAL_PROGRAM) })
            : this.offerExpired
              ? null
              : L.intl.string(L.t.lQLlOb);
    }
    renderActions() {
        let e =
                this.currentUser.id !== this.trialOffer.user_id ||
                (0, h.TW)(this.currentUser) ||
                !this.currentUser.verified ||
                (0, P.P)(this.trialOffer),
            t = this.renderExpirationDate();
        return (0, i.jsxs)("div", {
            className: j.UD,
            children: [
                (0, i.jsx)("div", {
                    children: (0, i.jsx)(u.Button, {
                        variant: "primary",
                        disabled: e,
                        size: "sm",
                        text: L.intl.string(L.t.O0etsF),
                        onClick: () => {
                            (0, I.A)({
                                initialPlanId: null,
                                subscriptionTier: U.pe.TIER_2,
                                analyticsLocations: this.analyticsLocations,
                                trialId: this.trialOffer.trial_id,
                                referralTrialOfferId: this.trialOffer.id,
                            });
                        },
                    }),
                }),
                (0, i.jsx)("div", { className: j.yu, children: t }),
            ],
        });
    }
    renderExpirationDate() {
        let { trialOffer: e, trialEndsAt: t } = this.props;
        if (void 0 !== e.redeemed_at && !this.isSender && null !== t)
            return L.intl.formatToPlainString(L.t.nP0ivR, { date: (0, g.i$)(r()(t), "LL") });
        if (this.recipientHasNitro || void 0 === e.expires_at) return null;
        let n = r()(e.expires_at);
        return this.offerExpired
            ? L.intl.formatToPlainString(L.t.PuSHfU, { date: (0, g.i$)(r()(n), "LL") })
            : (0, S.GQ)(n.valueOf());
    }
    renderMedia() {
        return (0, i.jsx)("div", { className: j.Qj });
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
                                helpdeskArticle: C.A.getArticleURL(v.MVz.REFERRAL_PROGRAM),
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
                    (0, i.jsx)(D.A, {
                        subscriptionTier: U.pe.TIER_2,
                        buttonTextOverride: (() => {
                            switch (R.$.getConfig({ location: "ReferralTrialEmbed" }).variation) {
                                case R.Y.CONTROL:
                                    return L.intl.string(L.t.O0etsF);
                                case R.Y.VARIANT_1:
                                    return L.intl.string(L.t.m7EEMb);
                                case R.Y.VARIANT_2: {
                                    let e = (0, o.TW)(L.intl.currentLocale);
                                    return L.intl.format(L.t["+KbxV6"], { fixedTrialCost: (0, p.$g)(0, e) });
                                }
                                case R.Y.VARIANT_3:
                                    return L.intl.string(L.t["6TzrER"]);
                                case R.Y.VARIANT_4:
                                    return L.intl.string(L.t.UZe3YC);
                                case R.Y.VARIANT_5:
                                    return L.intl.string(L.t.cLVMi9);
                                case R.Y.VARIANT_6:
                                    return L.intl.string(L.t.ACQTfp);
                                case R.Y.VARIANT_7:
                                    return L.intl.string(L.t["2P1J0w"]);
                                case R.Y.VARIANT_8:
                                    return L.intl.string(L.t.dRoPcT);
                            }
                        })(),
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
            a = (0, i.jsx)(u.Button, {
                variant: "primary",
                disabled: !1,
                size: "md",
                onClick: () =>
                    ((e) => {
                        let { analyticsLocations: t, startingScreen: a } = e;
                        N.default.track(v.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, { location_stack: t }),
                            (0, u.mMO)(async () => {
                                let { default: e } = await Promise.resolve().then(n.bind(n, 303682));
                                return (t) => (0, i.jsx)(e, { ...t, startingScreen: a });
                            });
                    })({
                        analyticsLocations: [],
                        startingScreen:
                            this.referralsSent.size === O.Z
                                ? M.SelectFriendsModalScreens.REMINDER
                                : M.SelectFriendsModalScreens.SELECT_FRIENDS,
                    }),
                text: L.intl.string(L.t.Lm2nFc),
            }),
            l = this.isSender ? a : t,
            r = (0, i.jsx)(u._V3, { src: y.A, height: 84, width: 144, className: j.ms }),
            { headerText: s, bodyText: c } = e();
        return (0, i.jsxs)(E.A, {
            className: j.SB,
            iconNode: (0, i.jsx)(u.tvc, { size: "md", color: d.A.colors.ICON_STRONG }),
            iconContainerClassName: j.J5,
            compact: this.compact,
            children: [
                (0, i.jsx)(u.Text, {
                    variant: "text-md/medium",
                    color: "text-strong",
                    children: this.getSystemMessageHeader(),
                }),
                (0, i.jsxs)("div", {
                    className: j.i2,
                    children: [
                        r,
                        (0, i.jsxs)("div", {
                            className: j.KX,
                            children: [
                                (0, i.jsxs)("div", {
                                    className: j.xJ,
                                    children: [
                                        (0, i.jsx)(u.Heading, {
                                            variant: "heading-md/semibold",
                                            color: "text-strong",
                                            children: s,
                                        }),
                                        (0, i.jsx)(u.Text, {
                                            variant: "text-md/medium",
                                            color: "text-subtle",
                                            children: c,
                                        }),
                                    ],
                                }),
                                (0, i.jsx)("div", { className: j.ox, children: l }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    }
}
function k(e) {
    let { userTrialOfferId: t, canRenderReferralEmbed: n, compact: a } = e,
        {
            trialOffer: l,
            isResolving: r,
            referralsSent: o,
        } = (0, c.cf)(
            [x.A],
            () => ({
                trialOffer: n ? x.A.getRelevantUserTrialOffer(t) : null,
                isResolving: !!n && x.A.isResolving(t),
                referralsSent: x.A.getRecipientStatus(),
            }),
            [n, t],
        ),
        d = T.default.getCurrentUser(),
        u = (0, c.bG)(
            [T.default],
            () => null != l && (0, h.TW)(void 0 !== d && l.user_id === d.id ? d : T.default.getUser(l.user_id)),
        ),
        E = (0, c.bG)([f.A], () => (u ? f.A.getPremiumTypeSubscription()?.trialEndsAt : null)),
        { analyticsLocations: I } = (0, A.Ay)(m.A.SHARE_NITRO_EMBED);
    return r
        ? (0, i.jsx)(_.Wb, { isHorizontal: !s.Fr })
        : n && null != l && void 0 !== d
          ? (0, i.jsx)(b, {
                trialOffer: l,
                referralsSent: o,
                currentUser: d,
                recipientHasNitro: u,
                trialEndsAt: E,
                analyticsLocations: I,
                compact: a,
            })
          : (0, i.jsx)("div", { className: j.TU, children: (0, i.jsx)("div", { className: j.Gq }) });
}
