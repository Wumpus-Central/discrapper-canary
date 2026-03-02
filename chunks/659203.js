n.d(t, { A: () => P });
var i = n(627968),
    l = n(64700),
    a = n(989349),
    r = n.n(a),
    s = n(607399),
    o = n(465323),
    c = n(311907),
    d = n(397927),
    u = n(863574),
    m = n(793574),
    _ = n(688810),
    A = n(888675),
    f = n(532794),
    E = n(287809),
    h = n(166403),
    g = n(954571),
    p = n(405269),
    x = n(975571),
    C = n(927578),
    I = n(580630),
    T = n(851746),
    N = n(259297),
    S = n(727949),
    R = n(664654),
    v = n(303682),
    M = n(857586),
    j = n(378135),
    O = n(788868),
    b = n(652215),
    y = n(985018),
    L = n(26875),
    D = n(954457);
class U extends l.Component {
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
            (this.offerExpired = (0, j.P)(this.trialOffer)),
            (this.isSender = this.currentUser.id === this.trialOffer.referrer_id);
    }
    getSystemMessageHeader() {
        let e = E.default.getUser(this.trialOffer.user_id);
        if (this.isSender) return y.intl.format(y.t["4/EMxl"], { receiver: e?.username });
        let t = E.default.getUser(this.trialOffer.referrer_id),
            n = t?.username !== void 0 ? t.username : "";
        return y.intl.format(y.t.yisueA, { sender: n, helpdeskArticle: x.A.getArticleURL(b.MVz.REFERRAL_PROGRAM) });
    }
    getTitleText() {
        let e = E.default.getUser(this.trialOffer.user_id),
            t = null != e ? e.username : "???",
            n = E.default.getUser(this.trialOffer.referrer_id),
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
            ? y.intl.format(y.t.LwCwT9, { helpdeskArticle: x.A.getArticleURL(b.MVz.REFERRAL_PROGRAM) })
            : this.offerExpired
              ? null
              : y.intl.string(y.t.lQLlOb);
    }
    renderActions() {
        let e =
                this.currentUser.id !== this.trialOffer.user_id ||
                (0, C.TW)(this.currentUser) ||
                !this.currentUser.verified ||
                (0, j.P)(this.trialOffer),
            t = this.renderExpirationDate();
        return (0, i.jsxs)("div", {
            className: L.UD,
            children: [
                (0, i.jsx)("div", {
                    children: (0, i.jsx)(d.Button, {
                        variant: "primary",
                        disabled: e,
                        size: "sm",
                        text: y.intl.string(y.t.O0etsF),
                        onClick: () => {
                            (0, f.A)({
                                initialPlanId: null,
                                subscriptionTier: O.pe.TIER_2,
                                analyticsLocations: this.analyticsLocations,
                                trialId: this.trialOffer.trial_id,
                                referralTrialOfferId: this.trialOffer.id,
                            });
                        },
                    }),
                }),
                (0, i.jsx)("div", { className: L.yu, children: t }),
            ],
        });
    }
    renderExpirationDate() {
        let { trialOffer: e, trialEndsAt: t } = this.props;
        if (void 0 !== e.redeemed_at && !this.isSender && null !== t)
            return y.intl.formatToPlainString(y.t.nP0ivR, { date: (0, p.i$)(r()(t), "LL") });
        if (this.recipientHasNitro || void 0 === e.expires_at) return null;
        let n = r()(e.expires_at);
        return this.offerExpired
            ? y.intl.formatToPlainString(y.t.PuSHfU, { date: (0, p.i$)(r()(n), "LL") })
            : (0, S.GQ)(n.valueOf());
    }
    renderMedia() {
        return (0, i.jsx)("div", { className: L.Qj });
    }
    render() {
        let e = () => {
                let e = E.default.getUser(this.trialOffer.user_id),
                    t = null != e ? e.username : "???",
                    n = E.default.getUser(this.trialOffer.referrer_id),
                    i = null != n ? n.username : "???";
                if (this.isSender)
                    if (this.recipientHasNitro && void 0 === this.trialOffer.redeemed_at)
                        return {
                            headerText: y.intl.formatToPlainString(y.t.qABVhL, { recipient: t }),
                            bodyText: y.intl.formatToPlainString(y.t.u7hyDx, {
                                helpdeskArticle: x.A.getArticleURL(b.MVz.REFERRAL_PROGRAM),
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
                    (0, i.jsx)(M.A, {
                        subscriptionTier: O.pe.TIER_2,
                        buttonTextOverride: (() => {
                            switch (N.$.getConfig({ location: "ReferralTrialEmbed" }).variation) {
                                case N.Y.CONTROL:
                                    return y.intl.string(y.t.O0etsF);
                                case N.Y.VARIANT_1:
                                    return y.intl.string(y.t.m7EEMb);
                                case N.Y.VARIANT_2: {
                                    let e = (0, o.TW)(y.intl.currentLocale);
                                    return y.intl.format(y.t["+KbxV6"], { fixedTrialCost: (0, I.$g)(0, e) });
                                }
                                case N.Y.VARIANT_3:
                                    return y.intl.string(y.t["6TzrER"]);
                                case N.Y.VARIANT_4:
                                    return y.intl.string(y.t.UZe3YC);
                                case N.Y.VARIANT_5:
                                    return y.intl.string(y.t.cLVMi9);
                                case N.Y.VARIANT_6:
                                    return y.intl.string(y.t.ACQTfp);
                                case N.Y.VARIANT_7:
                                    return y.intl.string(y.t["2P1J0w"]);
                                case N.Y.VARIANT_8:
                                    return y.intl.string(y.t.dRoPcT);
                            }
                        })(),
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
                        g.default.track(b.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, { location_stack: t }),
                            (0, d.mMO)(async () => {
                                let { default: e } = await Promise.resolve().then(n.bind(n, 303682));
                                return (t) => (0, i.jsx)(e, { ...t, startingScreen: l });
                            });
                    })({
                        analyticsLocations: [],
                        startingScreen:
                            this.referralsSent.size === R.Z
                                ? v.SelectFriendsModalScreens.REMINDER
                                : v.SelectFriendsModalScreens.SELECT_FRIENDS,
                    }),
                text: y.intl.string(y.t.Lm2nFc),
            }),
            a = this.isSender ? l : t,
            r = (0, i.jsx)(d._V3, { src: D.A, height: 84, width: 144, className: L.ms }),
            { headerText: s, bodyText: c } = e();
        return (0, i.jsxs)(A.A, {
            className: L.SB,
            iconNode: (0, i.jsx)(d.tvc, { size: "md", color: "currentColor" }),
            iconContainerClassName: L.J5,
            compact: this.compact,
            children: [
                (0, i.jsx)(d.Text, {
                    variant: "text-md/medium",
                    color: "text-strong",
                    children: this.getSystemMessageHeader(),
                }),
                (0, i.jsxs)("div", {
                    className: L.i2,
                    children: [
                        r,
                        (0, i.jsxs)("div", {
                            className: L.KX,
                            children: [
                                (0, i.jsxs)("div", {
                                    className: L.xJ,
                                    children: [
                                        (0, i.jsx)(d.Heading, {
                                            variant: "heading-md/semibold",
                                            color: "text-strong",
                                            children: s,
                                        }),
                                        (0, i.jsx)(d.Text, {
                                            variant: "text-md/medium",
                                            color: "text-subtle",
                                            children: c,
                                        }),
                                    ],
                                }),
                                (0, i.jsx)("div", { className: L.ox, children: a }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    }
}
function P(e) {
    let { userTrialOfferId: t, canRenderReferralEmbed: n, compact: l } = e,
        {
            trialOffer: a,
            isResolving: r,
            referralsSent: o,
        } = (0, c.cf)(
            [T.A],
            () => ({
                trialOffer: n ? T.A.getRelevantUserTrialOffer(t) : null,
                isResolving: !!n && T.A.isResolving(t),
                referralsSent: T.A.getRecipientStatus(),
            }),
            [n, t],
        ),
        d = E.default.getCurrentUser(),
        A = (0, c.bG)(
            [E.default],
            () => null != a && (0, C.TW)(void 0 !== d && a.user_id === d.id ? d : E.default.getUser(a.user_id)),
        ),
        f = (0, c.bG)([h.A], () => (A ? h.A.getPremiumTypeSubscription()?.trialEndsAt : null)),
        { analyticsLocations: g } = (0, _.Ay)(m.A.SHARE_NITRO_EMBED);
    return r
        ? (0, i.jsx)(u.Wb, { isHorizontal: !s.Fr })
        : n && null != a && void 0 !== d
          ? (0, i.jsx)(U, {
                trialOffer: a,
                referralsSent: o,
                currentUser: d,
                recipientHasNitro: A,
                trialEndsAt: f,
                analyticsLocations: g,
                compact: l,
            })
          : (0, i.jsx)("div", { className: L.TU, children: (0, i.jsx)("div", { className: L.Gq }) });
}
