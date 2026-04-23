"use strict";
n.d(t, { A: () => w });
var i = n(627968),
    r = n(64700),
    l = n(989349),
    s = n.n(l),
    a = n(607399),
    o = n(311907),
    c = n(827734),
    u = n(192308),
    d = n(821609),
    _ = n(834730),
    E = n(673698),
    A = n(403581),
    m = n(534514),
    I = n(863574),
    T = n(793574),
    N = n(688810),
    g = n(888675),
    p = n(532794),
    C = n(287809),
    f = n(166403),
    R = n(954571),
    h = n(405269),
    S = n(975571),
    O = n(927578),
    x = n(851746),
    M = n(727949),
    D = n(664654),
    P = n(303682),
    U = n(465794),
    y = n(378135),
    L = n(788868),
    v = n(652215),
    j = n(985018),
    k = n(613444),
    b = n(954457);
class G extends r.Component {
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
            (this.offerExpired = (0, y.P)(this.trialOffer)),
            (this.isSender = this.currentUser.id === this.trialOffer.referrer_id);
    }
    getSystemMessageHeader() {
        let e = C.default.getUser(this.trialOffer.user_id);
        if (this.isSender) return j.intl.format(j.t["4/EMxl"], { receiver: e?.username });
        let t = C.default.getUser(this.trialOffer.referrer_id),
            n = t?.username !== void 0 ? t.username : "";
        return j.intl.format(j.t.yisueA, { sender: n, helpdeskArticle: S.A.getArticleURL(v.MVz.REFERRAL_PROGRAM) });
    }
    getTitleText() {
        let e = C.default.getUser(this.trialOffer.user_id),
            t = null != e ? e.username : "???",
            n = C.default.getUser(this.trialOffer.referrer_id),
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
            ? j.intl.format(j.t.LwCwT9, { helpdeskArticle: S.A.getArticleURL(v.MVz.REFERRAL_PROGRAM) })
            : this.offerExpired
              ? null
              : j.intl.string(j.t.lQLlOb);
    }
    renderActions() {
        let e =
                this.currentUser.id !== this.trialOffer.user_id ||
                (0, O.TW)(this.currentUser) ||
                !this.currentUser.verified ||
                (0, y.P)(this.trialOffer),
            t = this.renderExpirationDate();
        return (0, i.jsxs)("div", {
            className: k.UD,
            children: [
                (0, i.jsx)("div", {
                    children: (0, i.jsx)(d.$, {
                        variant: "primary",
                        disabled: e,
                        size: "sm",
                        text: j.intl.string(j.t.O0etsF),
                        onClick: () => {
                            (0, p.A)({
                                initialPlanId: null,
                                subscriptionTier: L.pe.TIER_2,
                                analyticsLocations: this.analyticsLocations,
                                trialId: this.trialOffer.trial_id,
                                referralTrialOfferId: this.trialOffer.id,
                            });
                        },
                    }),
                }),
                (0, i.jsx)("div", { className: k.yu, children: t }),
            ],
        });
    }
    renderExpirationDate() {
        let { trialOffer: e, trialEndsAt: t } = this.props;
        if (void 0 !== e.redeemed_at && !this.isSender && null !== t)
            return j.intl.formatToPlainString(j.t.nP0ivR, { date: (0, h.i$)(s()(t), "LL") });
        if (this.recipientHasNitro || void 0 === e.expires_at) return null;
        let n = s()(e.expires_at);
        return this.offerExpired
            ? j.intl.formatToPlainString(j.t.PuSHfU, { date: (0, h.i$)(s()(n), "LL") })
            : (0, M.GQ)(n.valueOf());
    }
    renderMedia() {
        return (0, i.jsx)("div", { className: k.Qj });
    }
    render() {
        let e = () => {
                let e = C.default.getUser(this.trialOffer.user_id),
                    t = null != e ? e.username : "???",
                    n = C.default.getUser(this.trialOffer.referrer_id),
                    i = null != n ? n.username : "???";
                if (this.isSender)
                    if (this.recipientHasNitro && void 0 === this.trialOffer.redeemed_at)
                        return {
                            headerText: j.intl.formatToPlainString(j.t.qABVhL, { recipient: t }),
                            bodyText: j.intl.formatToPlainString(j.t.u7hyDx, {
                                helpdeskArticle: S.A.getArticleURL(v.MVz.REFERRAL_PROGRAM),
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
                    (0, i.jsx)(U.A, {
                        subscriptionTier: L.pe.TIER_2,
                        buttonTextOverride: j.intl.string(j.t.O0etsF),
                        size: "md",
                        variantOverride: "expressive",
                    }),
                    (0, i.jsx)(_.E, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        children: this.renderExpirationDate(),
                    }),
                ],
            }),
            r = (0, i.jsx)(d.$, {
                variant: "primary",
                disabled: !1,
                size: "md",
                onClick: () =>
                    ((e) => {
                        let { analyticsLocations: t, startingScreen: r } = e;
                        R.default.track(v.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, { location_stack: t }),
                            (0, u.openModalLazy)(async () => {
                                let { default: e } = await Promise.resolve().then(n.bind(n, 303682));
                                return (t) => (0, i.jsx)(e, { ...t, startingScreen: r });
                            });
                    })({
                        analyticsLocations: [],
                        startingScreen:
                            this.referralsSent.size === D.Z
                                ? P.SelectFriendsModalScreens.REMINDER
                                : P.SelectFriendsModalScreens.SELECT_FRIENDS,
                    }),
                text: j.intl.string(j.t.Lm2nFc),
            }),
            l = this.isSender ? r : t,
            s = (0, i.jsx)(E._, { src: b.A, height: 84, width: 144, className: k.ms }),
            { headerText: a, bodyText: o } = e();
        return (0, i.jsxs)(g.A, {
            className: k.SB,
            iconNode: (0, i.jsx)(A.t, { size: "md", color: c.A.colors.ICON_STRONG }),
            iconContainerClassName: k.J5,
            compact: this.compact,
            children: [
                (0, i.jsx)(_.E, {
                    variant: "text-md/medium",
                    color: "text-strong",
                    children: this.getSystemMessageHeader(),
                }),
                (0, i.jsxs)("div", {
                    className: k.i2,
                    children: [
                        s,
                        (0, i.jsxs)("div", {
                            className: k.KX,
                            children: [
                                (0, i.jsxs)("div", {
                                    className: k.xJ,
                                    children: [
                                        (0, i.jsx)(m.D, {
                                            variant: "heading-md/semibold",
                                            color: "text-strong",
                                            children: a,
                                        }),
                                        (0, i.jsx)(_.E, {
                                            variant: "text-md/medium",
                                            color: "text-subtle",
                                            children: o,
                                        }),
                                    ],
                                }),
                                (0, i.jsx)("div", { className: k.ox, children: l }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    }
}
function w(e) {
    let { userTrialOfferId: t, canRenderReferralEmbed: n, compact: r } = e,
        {
            trialOffer: l,
            isResolving: s,
            referralsSent: c,
        } = (0, o.cf)(
            [x.A],
            () => ({
                trialOffer: n ? x.A.getRelevantUserTrialOffer(t) : null,
                isResolving: !!n && x.A.isResolving(t),
                referralsSent: x.A.getRecipientStatus(),
            }),
            [n, t],
        ),
        u = C.default.getCurrentUser(),
        d = (0, o.bG)(
            [C.default],
            () => null != l && (0, O.TW)(void 0 !== u && l.user_id === u.id ? u : C.default.getUser(l.user_id)),
        ),
        _ = (0, o.bG)([f.A], () => (d ? f.A.getPremiumTypeSubscription()?.trialEndsAt : null)),
        { analyticsLocations: E } = (0, N.Ay)(T.A.SHARE_NITRO_EMBED);
    return s
        ? (0, i.jsx)(I.Wb, { isHorizontal: !a.Fr })
        : n && null != l && void 0 !== u
          ? (0, i.jsx)(G, {
                trialOffer: l,
                referralsSent: c,
                currentUser: u,
                recipientHasNitro: d,
                trialEndsAt: _,
                analyticsLocations: E,
                compact: r,
            })
          : (0, i.jsx)("div", { className: k.TU, children: (0, i.jsx)("div", { className: k.Gq }) });
}
