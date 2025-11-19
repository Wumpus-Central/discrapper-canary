n.d(t, { Z: () => G });
var r = n(54381),
    i = n(473749),
    a = n(913527),
    o = n.n(a),
    s = n(873546),
    l = n(442837),
    c = n(481060),
    u = n(568836),
    d = n(100527),
    f = n(906732),
    _ = n(834129),
    p = n(963249),
    h = n(594174),
    m = n(78839),
    g = n(626135),
    E = n(55935),
    b = n(63063),
    y = n(74538),
    O = n(276444),
    v = n(93237),
    I = n(796634),
    T = n(656139),
    S = n(740594),
    A = n(786397),
    C = n(474936),
    N = n(981631),
    R = n(388032),
    P = n(524994),
    D = n(295234);
function w(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function L(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                w(e, t, n[t]);
            });
    }
    return e;
}
function x(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function M(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : x(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let j = "???",
    k = (e) => {
        let { analyticsLocations: t, startingScreen: i } = e;
        g.default.track(N.rMx.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, { location_stack: t }),
            (0, c.ZDy)(async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 656139));
                return (t) => (0, r.jsx)(e, M(L({}, t), { startingScreen: i }));
            });
    };
class U extends i.Component {
    getSystemMessageHeader() {
        let e = h.default.getUser(this.trialOffer.user_id);
        if (this.isSender) return R.intl.format(R.t["4/EMxl"], { receiver: null == e ? void 0 : e.username });
        let t = h.default.getUser(this.trialOffer.referrer_id),
            n = (null == t ? void 0 : t.username) !== void 0 ? t.username : "";
        return R.intl.format(R.t.yisueA, {
            sender: n,
            helpdeskArticle: b.Z.getArticleURL(N.BhN.REFERRAL_PROGRAM),
        });
    }
    getTitleText() {
        let e = h.default.getUser(this.trialOffer.user_id),
            t = null != e ? e.username : j,
            n = h.default.getUser(this.trialOffer.referrer_id),
            r = null != n ? n.username : j;
        return this.recipientHasNitro && void 0 === this.trialOffer.redeemed_at
            ? R.intl.formatToPlainString(R.t["Mptau/"], { username: t })
            : this.offerExpired
              ? this.isSender
                  ? R.intl.string(R.t["9SNdf4"])
                  : R.intl.formatToPlainString(R.t["H0+MxK"], { userName: r })
              : R.intl.formatToPlainString(R.t.IiWKwg, {
                    senderUserName: r,
                    recipientUserName: t,
                });
    }
    getBodyText() {
        return this.recipientHasNitro && !this.isSender && void 0 === this.trialOffer.redeemed_at
            ? R.intl.format(R.t.LwCwT9, { helpdeskArticle: b.Z.getArticleURL(N.BhN.REFERRAL_PROGRAM) })
            : this.offerExpired
              ? null
              : R.intl.string(R.t.lQLlOb);
    }
    renderActions() {
        let e =
                this.currentUser.id !== this.trialOffer.user_id ||
                (0, y.I5)(this.currentUser) ||
                !this.currentUser.verified ||
                (0, A.B)(this.trialOffer),
            t = this.renderExpirationDate();
        return (0, r.jsxs)("div", {
            className: P.buttonContainer,
            children: [
                (0, r.jsx)("div", {
                    children: (0, r.jsx)(c.Button, {
                        variant: "primary",
                        disabled: e,
                        size: "sm",
                        text: R.intl.string(R.t.O0etsF),
                        onClick: () => {
                            (0, p.Z)({
                                initialPlanId: null,
                                subscriptionTier: C.Si.TIER_2,
                                analyticsLocations: this.analyticsLocations,
                                trialId: this.trialOffer.trial_id,
                                referralTrialOfferId: this.trialOffer.id,
                            });
                        },
                    }),
                }),
                (0, r.jsx)("div", {
                    className: P.metadata,
                    children: t,
                }),
            ],
        });
    }
    renderExpirationDate() {
        let { trialOffer: e, trialEndsAt: t } = this.props;
        if (void 0 !== e.redeemed_at && !this.isSender && null !== t)
            return R.intl.formatToPlainString(R.t.nP0ivR, { date: (0, E.vc)(o()(t), "LL") });
        if (this.recipientHasNitro || void 0 === e.expires_at) return null;
        let n = o()(e.expires_at);
        return this.offerExpired
            ? R.intl.formatToPlainString(R.t.PuSHfU, { date: (0, E.vc)(o()(n), "LL") })
            : (0, v.F6)(n.valueOf());
    }
    renderMedia() {
        return (0, r.jsx)("div", { className: P.referral });
    }
    render() {
        let e = () => {
                let e = h.default.getUser(this.trialOffer.user_id),
                    t = null != e ? e.username : j,
                    n = h.default.getUser(this.trialOffer.referrer_id),
                    r = null != n ? n.username : j;
                if (this.isSender)
                    if (this.recipientHasNitro && void 0 === this.trialOffer.redeemed_at)
                        return {
                            headerText: R.intl.formatToPlainString(R.t.qABVhL, { recipient: t }),
                            bodyText: R.intl.formatToPlainString(R.t.u7hyDx, {
                                helpdeskArticle: b.Z.getArticleURL(N.BhN.REFERRAL_PROGRAM),
                            }),
                        };
                    else
                        return {
                            headerText: R.intl.string(R.t.LAGZfq),
                            bodyText: R.intl.formatToPlainString(R.t["0gnFLC"], { recipient: t }),
                        };
                return this.offerExpired
                    ? {
                          headerText: R.intl.string(R.t.nYvpUl),
                          bodyText: R.intl.formatToPlainString(R.t.wJdBEZ, { sender: r }),
                      }
                    : {
                          headerText: R.intl.string(R.t.HtTvXA),
                          bodyText: R.intl.formatToPlainString(R.t.wOQByA, { sender: r }),
                      };
            },
            t = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(S.Z, {
                        subscriptionTier: C.Si.TIER_2,
                        buttonTextOverride: R.intl.string(R.t.O0etsF),
                        size: "md",
                        variantOverride: "expressive",
                    }),
                    (0, r.jsx)(c.Text, {
                        variant: "text-md/medium",
                        color: "text-secondary",
                        children: this.renderExpirationDate(),
                    }),
                ],
            }),
            n = (0, r.jsx)(c.Button, {
                variant: "primary",
                disabled: !1,
                size: "md",
                onClick: () =>
                    k({
                        analyticsLocations: [],
                        startingScreen:
                            this.referralsSent.size === I.Q
                                ? T.SelectFriendsModalScreens.REMINDER
                                : T.SelectFriendsModalScreens.SELECT_FRIENDS,
                    }),
                text: R.intl.string(R.t.Lm2nFc),
            }),
            i = this.isSender ? n : t,
            a = (0, r.jsx)(c.Eep, {
                src: D.Z,
                height: 84,
                width: 144,
                className: P.imgDMEmbedXP,
            }),
            { headerText: o, bodyText: s } = e();
        return (0, r.jsxs)(_.Z, {
            className: P.systemMessageContainerDMEmbedXP,
            iconNode: (0, r.jsx)(c.SrA, {
                size: "md",
                color: "currentColor",
            }),
            iconContainerClassName: P.systemMessageContainerIcon,
            compact: this.compact,
            children: [
                (0, r.jsx)(c.Text, {
                    variant: "text-md/medium",
                    color: "text-primary",
                    children: this.getSystemMessageHeader(),
                }),
                (0, r.jsxs)("div", {
                    className: P.containerDMEmbedXP,
                    children: [
                        a,
                        (0, r.jsxs)("div", {
                            className: P.contentDMEmbedXP,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: P.contentTextDMEmbedXP,
                                    children: [
                                        (0, r.jsx)(c.Heading, {
                                            variant: "heading-md/semibold",
                                            color: "header-primary",
                                            children: o,
                                        }),
                                        (0, r.jsx)(c.Text, {
                                            variant: "text-md/medium",
                                            color: "text-secondary",
                                            children: s,
                                        }),
                                    ],
                                }),
                                (0, r.jsx)("div", {
                                    className: P.buttonContainerDMEmbedXP,
                                    children: i,
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    }
    constructor(e) {
        super(e),
            w(this, "trialOffer", void 0),
            w(this, "referralsSent", void 0),
            w(this, "currentUser", void 0),
            w(this, "recipientHasNitro", void 0),
            w(this, "trialEndsAt", void 0),
            w(this, "analyticsLocations", void 0),
            w(this, "offerExpired", void 0),
            w(this, "isSender", void 0),
            w(this, "compact", void 0),
            (this.trialOffer = e.trialOffer),
            (this.referralsSent = e.referralsSent),
            (this.currentUser = e.currentUser),
            (this.recipientHasNitro = e.recipientHasNitro),
            (this.trialEndsAt = e.trialEndsAt),
            (this.analyticsLocations = e.analyticsLocations),
            (this.compact = !0 === e.compact),
            (this.offerExpired = (0, A.B)(this.trialOffer)),
            (this.isSender = this.currentUser.id === this.trialOffer.referrer_id);
    }
}
function G(e) {
    let { userTrialOfferId: t, canRenderReferralEmbed: n, compact: i } = e,
        {
            trialOffer: a,
            isResolving: o,
            referralsSent: c,
        } = (0, l.cj)(
            [O.Z],
            () => ({
                trialOffer: n ? O.Z.getRelevantUserTrialOffer(t) : null,
                isResolving: !!n && O.Z.isResolving(t),
                referralsSent: O.Z.getRecipientStatus(),
            }),
            [n, t],
        ),
        _ = h.default.getCurrentUser(),
        p = (0, l.e7)(
            [h.default],
            () => null != a && (0, y.I5)(void 0 !== _ && a.user_id === _.id ? _ : h.default.getUser(a.user_id)),
        ),
        g = (0, l.e7)([m.Z], () => {
            var e;
            return p ? (null == (e = m.Z.getPremiumTypeSubscription()) ? void 0 : e.trialEndsAt) : null;
        }),
        { analyticsLocations: E } = (0, f.ZP)(d.Z.SHARE_NITRO_EMBED);
    return o
        ? (0, r.jsx)(u.OR, { isHorizontal: !s.tq })
        : n && null != a && void 0 !== _
          ? (0, r.jsx)(U, {
                trialOffer: a,
                referralsSent: c,
                currentUser: _,
                recipientHasNitro: p,
                trialEndsAt: g,
                analyticsLocations: E,
                compact: i,
            })
          : (0, r.jsx)("div", {
                className: P.invalidWrapper,
                children: (0, r.jsx)("div", { className: P.invalid }),
            });
}
