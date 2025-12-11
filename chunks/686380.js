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
    p = n(834129),
    _ = n(963249),
    m = n(594174),
    h = n(78839),
    g = n(626135),
    E = n(55935),
    b = n(63063),
    y = n(74538),
    O = n(276444),
    v = n(93237),
    S = n(796634),
    I = n(656139),
    T = n(740594),
    C = n(786397),
    A = n(474936),
    N = n(981631),
    P = n(388032),
    R = n(218977),
    w = n(746838);
function D(e, t, n) {
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
function x(e) {
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
                D(e, t, n[t]);
            });
    }
    return e;
}
function L(e, t) {
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
function j(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : L(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let M = "???",
    k = (e) => {
        let { analyticsLocations: t, startingScreen: i } = e;
        g.default.track(N.rMx.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, { location_stack: t }),
            (0, c.ZDy)(async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 656139));
                return (t) => (0, r.jsx)(e, j(x({}, t), { startingScreen: i }));
            });
    };
class U extends i.Component {
    getSystemMessageHeader() {
        let e = m.default.getUser(this.trialOffer.user_id);
        if (this.isSender) return P.intl.format(P.t["4/EMxl"], { receiver: null == e ? void 0 : e.username });
        let t = m.default.getUser(this.trialOffer.referrer_id),
            n = (null == t ? void 0 : t.username) !== void 0 ? t.username : "";
        return P.intl.format(P.t.yisueA, {
            sender: n,
            helpdeskArticle: b.Z.getArticleURL(N.BhN.REFERRAL_PROGRAM),
        });
    }
    getTitleText() {
        let e = m.default.getUser(this.trialOffer.user_id),
            t = null != e ? e.username : M,
            n = m.default.getUser(this.trialOffer.referrer_id),
            r = null != n ? n.username : M;
        return this.recipientHasNitro && void 0 === this.trialOffer.redeemed_at
            ? P.intl.formatToPlainString(P.t["Mptau/"], { username: t })
            : this.offerExpired
              ? this.isSender
                  ? P.intl.string(P.t["9SNdf4"])
                  : P.intl.formatToPlainString(P.t["H0+MxK"], { userName: r })
              : P.intl.formatToPlainString(P.t.IiWKwg, {
                    senderUserName: r,
                    recipientUserName: t,
                });
    }
    getBodyText() {
        return this.recipientHasNitro && !this.isSender && void 0 === this.trialOffer.redeemed_at
            ? P.intl.format(P.t.LwCwT9, { helpdeskArticle: b.Z.getArticleURL(N.BhN.REFERRAL_PROGRAM) })
            : this.offerExpired
              ? null
              : P.intl.string(P.t.lQLlOb);
    }
    renderActions() {
        let e =
                this.currentUser.id !== this.trialOffer.user_id ||
                (0, y.I5)(this.currentUser) ||
                !this.currentUser.verified ||
                (0, C.B)(this.trialOffer),
            t = this.renderExpirationDate();
        return (0, r.jsxs)("div", {
            className: R.buttonContainer,
            children: [
                (0, r.jsx)("div", {
                    children: (0, r.jsx)(c.Button, {
                        variant: "primary",
                        disabled: e,
                        size: "sm",
                        text: P.intl.string(P.t.O0etsF),
                        onClick: () => {
                            (0, _.Z)({
                                initialPlanId: null,
                                subscriptionTier: A.Si.TIER_2,
                                analyticsLocations: this.analyticsLocations,
                                trialId: this.trialOffer.trial_id,
                                referralTrialOfferId: this.trialOffer.id,
                            });
                        },
                    }),
                }),
                (0, r.jsx)("div", {
                    className: R.metadata,
                    children: t,
                }),
            ],
        });
    }
    renderExpirationDate() {
        let { trialOffer: e, trialEndsAt: t } = this.props;
        if (void 0 !== e.redeemed_at && !this.isSender && null !== t)
            return P.intl.formatToPlainString(P.t.nP0ivR, { date: (0, E.vc)(o()(t), "LL") });
        if (this.recipientHasNitro || void 0 === e.expires_at) return null;
        let n = o()(e.expires_at);
        return this.offerExpired
            ? P.intl.formatToPlainString(P.t.PuSHfU, { date: (0, E.vc)(o()(n), "LL") })
            : (0, v.F6)(n.valueOf());
    }
    renderMedia() {
        return (0, r.jsx)("div", { className: R.referral });
    }
    render() {
        let e = () => {
                let e = m.default.getUser(this.trialOffer.user_id),
                    t = null != e ? e.username : M,
                    n = m.default.getUser(this.trialOffer.referrer_id),
                    r = null != n ? n.username : M;
                if (this.isSender)
                    if (this.recipientHasNitro && void 0 === this.trialOffer.redeemed_at)
                        return {
                            headerText: P.intl.formatToPlainString(P.t.qABVhL, { recipient: t }),
                            bodyText: P.intl.formatToPlainString(P.t.u7hyDx, {
                                helpdeskArticle: b.Z.getArticleURL(N.BhN.REFERRAL_PROGRAM),
                            }),
                        };
                    else
                        return {
                            headerText: P.intl.string(P.t.LAGZfq),
                            bodyText: P.intl.formatToPlainString(P.t["0gnFLC"], { recipient: t }),
                        };
                return this.offerExpired
                    ? {
                          headerText: P.intl.string(P.t.nYvpUl),
                          bodyText: P.intl.formatToPlainString(P.t.wJdBEZ, { sender: r }),
                      }
                    : {
                          headerText: P.intl.string(P.t.HtTvXA),
                          bodyText: P.intl.formatToPlainString(P.t.wOQByA, { sender: r }),
                      };
            },
            t = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(T.Z, {
                        subscriptionTier: A.Si.TIER_2,
                        buttonTextOverride: P.intl.string(P.t.O0etsF),
                        size: "md",
                        variantOverride: "expressive",
                    }),
                    (0, r.jsx)(c.Text, {
                        variant: "text-md/medium",
                        color: "text-subtle",
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
                            this.referralsSent.size === S.Q
                                ? I.SelectFriendsModalScreens.REMINDER
                                : I.SelectFriendsModalScreens.SELECT_FRIENDS,
                    }),
                text: P.intl.string(P.t.Lm2nFc),
            }),
            i = this.isSender ? n : t,
            a = (0, r.jsx)(c.Eep, {
                src: w.Z,
                height: 84,
                width: 144,
                className: R.imgDMEmbedXP,
            }),
            { headerText: o, bodyText: s } = e();
        return (0, r.jsxs)(p.Z, {
            className: R.systemMessageContainerDMEmbedXP,
            iconNode: (0, r.jsx)(c.SrA, {
                size: "md",
                color: "currentColor",
            }),
            iconContainerClassName: R.systemMessageContainerIcon,
            compact: this.compact,
            children: [
                (0, r.jsx)(c.Text, {
                    variant: "text-md/medium",
                    color: "text-strong",
                    children: this.getSystemMessageHeader(),
                }),
                (0, r.jsxs)("div", {
                    className: R.containerDMEmbedXP,
                    children: [
                        a,
                        (0, r.jsxs)("div", {
                            className: R.contentDMEmbedXP,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: R.contentTextDMEmbedXP,
                                    children: [
                                        (0, r.jsx)(c.Heading, {
                                            variant: "heading-md/semibold",
                                            color: "text-strong",
                                            children: o,
                                        }),
                                        (0, r.jsx)(c.Text, {
                                            variant: "text-md/medium",
                                            color: "text-subtle",
                                            children: s,
                                        }),
                                    ],
                                }),
                                (0, r.jsx)("div", {
                                    className: R.buttonContainerDMEmbedXP,
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
            D(this, "trialOffer", void 0),
            D(this, "referralsSent", void 0),
            D(this, "currentUser", void 0),
            D(this, "recipientHasNitro", void 0),
            D(this, "trialEndsAt", void 0),
            D(this, "analyticsLocations", void 0),
            D(this, "offerExpired", void 0),
            D(this, "isSender", void 0),
            D(this, "compact", void 0),
            (this.trialOffer = e.trialOffer),
            (this.referralsSent = e.referralsSent),
            (this.currentUser = e.currentUser),
            (this.recipientHasNitro = e.recipientHasNitro),
            (this.trialEndsAt = e.trialEndsAt),
            (this.analyticsLocations = e.analyticsLocations),
            (this.compact = !0 === e.compact),
            (this.offerExpired = (0, C.B)(this.trialOffer)),
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
        p = m.default.getCurrentUser(),
        _ = (0, l.e7)(
            [m.default],
            () => null != a && (0, y.I5)(void 0 !== p && a.user_id === p.id ? p : m.default.getUser(a.user_id)),
        ),
        g = (0, l.e7)([h.Z], () => {
            var e;
            return _ ? (null == (e = h.Z.getPremiumTypeSubscription()) ? void 0 : e.trialEndsAt) : null;
        }),
        { analyticsLocations: E } = (0, f.ZP)(d.Z.SHARE_NITRO_EMBED);
    return o
        ? (0, r.jsx)(u.OR, { isHorizontal: !s.tq })
        : n && null != a && void 0 !== p
          ? (0, r.jsx)(U, {
                trialOffer: a,
                referralsSent: c,
                currentUser: p,
                recipientHasNitro: _,
                trialEndsAt: g,
                analyticsLocations: E,
                compact: i,
            })
          : (0, r.jsx)("div", {
                className: R.invalidWrapper,
                children: (0, r.jsx)("div", { className: R.invalid }),
            });
}
