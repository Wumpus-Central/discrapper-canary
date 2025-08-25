n.d(t, { Z: () => F }), n(953529);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(913527),
    l = n.n(s),
    c = n(873546),
    u = n(442837),
    d = n(481060),
    f = n(568836),
    _ = n(100527),
    p = n(906732),
    h = n(834129),
    m = n(963249),
    g = n(594174),
    E = n(78839),
    b = n(626135),
    y = n(55935),
    O = n(63063),
    v = n(74538),
    I = n(276444),
    T = n(623879),
    S = n(93237),
    A = n(796634),
    C = n(656139),
    N = n(740594),
    R = n(786397),
    P = n(474936),
    w = n(981631),
    D = n(388032),
    x = n(269143),
    L = n(754761),
    j = n(295234);
function M(e, t, n) {
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
function k(e) {
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
                M(e, t, n[t]);
            });
    }
    return e;
}
function U(e, t) {
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
function G(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : U(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let B = "???",
    Z = (e) => {
        let { analyticsLocations: t, startingScreen: i } = e;
        b.default.track(w.rMx.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, { location_stack: t }),
            (0, d.ZDy)(async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 656139));
                return (t) => (0, r.jsx)(e, G(k({}, t), { startingScreen: i }));
            });
    };
class V extends i.Component {
    getSystemMessageHeader() {
        let e = g.default.getUser(this.trialOffer.user_id);
        if (this.isSender) return D.intl.format(D.t["4/EMxs"], { receiver: null == e ? void 0 : e.username });
        let t = g.default.getUser(this.trialOffer.referrer_id),
            n = (null == t ? void 0 : t.username) !== void 0 ? t.username : "";
        return D.intl.format(D.t.yisueH, {
            sender: n,
            helpdeskArticle: O.Z.getArticleURL(w.BhN.REFERRAL_PROGRAM),
        });
    }
    getTitleText() {
        let e = g.default.getUser(this.trialOffer.user_id),
            t = null != e ? e.username : B,
            n = g.default.getUser(this.trialOffer.referrer_id),
            r = null != n ? n.username : B;
        return this.recipientHasNitro && void 0 === this.trialOffer.redeemed_at
            ? D.intl.formatToPlainString(D.t.Mptau7, { username: t })
            : this.offerExpired
              ? this.isSender
                  ? D.intl.string(D.t["9SNdf3"])
                  : D.intl.formatToPlainString(D.t["H0+MxM"], { userName: r })
              : D.intl.formatToPlainString(D.t.IiWKws, {
                    senderUserName: r,
                    recipientUserName: t,
                });
    }
    getBodyText() {
        return this.recipientHasNitro && !this.isSender && void 0 === this.trialOffer.redeemed_at
            ? D.intl.format(D.t.LwCwT0, { helpdeskArticle: O.Z.getArticleURL(w.BhN.REFERRAL_PROGRAM) })
            : this.offerExpired
              ? null
              : D.intl.string(D.t.lQLlOT);
    }
    renderActions() {
        let e =
                this.currentUser.id !== this.trialOffer.user_id ||
                (0, v.I5)(this.currentUser) ||
                !this.currentUser.verified ||
                (0, R.B)(this.trialOffer),
            t = this.renderExpirationDate();
        return (0, r.jsxs)("div", {
            className: x.buttonContainer,
            children: [
                (0, r.jsx)("div", {
                    children: (0, r.jsx)(d.zxk, {
                        variant: "primary",
                        disabled: e,
                        size: "sm",
                        text: D.intl.string(D.t.O0etsL),
                        onClick: () => {
                            (0, m.Z)({
                                initialPlanId: null,
                                subscriptionTier: P.Si.TIER_2,
                                analyticsLocations: this.analyticsLocations,
                                trialId: this.trialOffer.trial_id,
                                referralTrialOfferId: this.trialOffer.id,
                            });
                        },
                    }),
                }),
                (0, r.jsx)("div", {
                    className: x.metadata,
                    children: t,
                }),
            ],
        });
    }
    renderExpirationDate() {
        let { trialOffer: e, trialEndsAt: t } = this.props;
        if (void 0 !== e.redeemed_at && !this.isSender && null !== t)
            return D.intl.formatToPlainString(D.t.nP0ivb, { date: (0, y.vc)(l()(t), "LL") });
        if (this.recipientHasNitro || void 0 === e.expires_at) return null;
        let n = l()(e.expires_at);
        return this.offerExpired
            ? D.intl.formatToPlainString(D.t.PuSHfX, { date: (0, y.vc)(l()(n), "LL") })
            : (0, S.F6)(n.valueOf());
    }
    renderMedia() {
        return (0, r.jsx)("div", { className: x.referral });
    }
    renderRefreshedDMEmbed(e) {
        let { emphasis: t } = e,
            n = () => {
                let e = g.default.getUser(this.trialOffer.user_id),
                    n = null != e ? e.username : B,
                    r = g.default.getUser(this.trialOffer.referrer_id),
                    i = null != r ? r.username : B;
                if (this.isSender)
                    if (this.recipientHasNitro && void 0 === this.trialOffer.redeemed_at)
                        return {
                            headerText: D.intl.formatToPlainString(D.t.qABVhI, { recipient: n }),
                            bodyText: D.intl.formatToPlainString(D.t.u7hyDw, {
                                helpdeskArticle: O.Z.getArticleURL(w.BhN.REFERRAL_PROGRAM),
                            }),
                        };
                    else
                        return {
                            headerText: D.intl.string(D.t.LAGZfn),
                            bodyText: D.intl.formatToPlainString(D.t["0gnFLC"], { recipient: n }),
                        };
                return this.offerExpired
                    ? {
                          headerText: D.intl.string(D.t.nYvpUl),
                          bodyText: D.intl.formatToPlainString(D.t.wJdBER, { sender: i }),
                      }
                    : "SOCIAL" === t
                      ? {
                            headerText: D.intl.string(D.t.HtTvXF),
                            bodyText: D.intl.formatToPlainString(D.t.wOQByM, { sender: i }),
                        }
                      : {
                            headerText: D.intl.string(D.t.VkcLSk),
                            bodyText: D.intl.string(D.t.JXMz5O),
                        };
            },
            i = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(N.Z, {
                        subscriptionTier: P.Si.TIER_2,
                        buttonTextOverride: D.intl.string(D.t.O0etsL),
                        size: "md",
                        variantOverride: "expressive",
                    }),
                    (0, r.jsx)(d.Text, {
                        variant: "text-md/medium",
                        color: "text-secondary",
                        children: this.renderExpirationDate(),
                    }),
                ],
            }),
            a = (0, r.jsx)(d.zxk, {
                variant: "primary",
                disabled: !1,
                size: "md",
                onClick: () =>
                    Z({
                        analyticsLocations: [],
                        startingScreen: this.referralsSent.size === A.Q ? C.K.REMINDER : C.K.SELECT_FRIENDS,
                    }),
                text: D.intl.string(D.t.Lm2nFR),
            }),
            o = this.isSender ? a : i,
            s =
                "SOCIAL" === t
                    ? (0, r.jsx)(d.Eep, {
                          src: j.Z,
                          height: 84,
                          width: 144,
                          className: x.imgDMEmbedXP,
                      })
                    : (0, r.jsx)(d.Eep, {
                          src: L.Z,
                          height: 137,
                          width: 144,
                          className: x.imgDMEmbedXP,
                      }),
            { headerText: l, bodyText: c } = n();
        return (0, r.jsxs)(h.Z, {
            className: x.systemMessageContainerDMEmbedXP,
            iconNode: (0, r.jsx)(d.SrA, {
                size: "md",
                color: "currentColor",
            }),
            iconContainerClassName: x.systemMessageContainerIcon,
            compact: this.compact,
            children: [
                (0, r.jsx)(d.Text, {
                    variant: "text-md/medium",
                    color: "text-primary",
                    children: this.getSystemMessageHeader(),
                }),
                (0, r.jsxs)("div", {
                    className: x.containerDMEmbedXP,
                    children: [
                        s,
                        (0, r.jsxs)("div", {
                            className: x.contentDMEmbedXP,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: x.contentTextDMEmbedXP,
                                    children: [
                                        (0, r.jsx)(d.X6q, {
                                            variant: "heading-md/semibold",
                                            color: "header-primary",
                                            children: l,
                                        }),
                                        (0, r.jsx)(d.Text, {
                                            variant: "text-md/medium",
                                            color: "text-secondary",
                                            children: c,
                                        }),
                                    ],
                                }),
                                (0, r.jsx)("div", {
                                    className: x.buttonContainerDMEmbedXP,
                                    children: o,
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    }
    render() {
        switch (this.dmRefreshXPCohort) {
            case T.FZ.Social:
                return this.renderRefreshedDMEmbed({ emphasis: "SOCIAL" });
            case T.FZ.Perks:
                return this.renderRefreshedDMEmbed({ emphasis: "PERKS" });
            default:
                return (0, r.jsxs)("div", {
                    className: o()(x.tile, x.container),
                    children: [
                        (0, r.jsx)("div", {
                            className: x.media,
                            children: this.renderMedia(),
                        }),
                        (0, r.jsxs)("div", {
                            className: x.description,
                            children: [
                                (0, r.jsx)(d.H, {
                                    className: x.title,
                                    children: this.getTitleText(),
                                }),
                                (0, r.jsx)("div", {
                                    className: x.tagline,
                                    children: this.getBodyText(),
                                }),
                                (0, r.jsx)("div", {
                                    className: x.actions,
                                    children: this.renderActions(),
                                }),
                            ],
                        }),
                    ],
                });
        }
    }
    constructor(e) {
        super(e),
            M(this, "trialOffer", void 0),
            M(this, "referralsSent", void 0),
            M(this, "currentUser", void 0),
            M(this, "recipientHasNitro", void 0),
            M(this, "trialEndsAt", void 0),
            M(this, "analyticsLocations", void 0),
            M(this, "offerExpired", void 0),
            M(this, "isSender", void 0),
            M(this, "dmRefreshXPCohort", void 0),
            M(this, "compact", void 0),
            (this.trialOffer = e.trialOffer),
            (this.referralsSent = e.referralsSent),
            (this.currentUser = e.currentUser),
            (this.recipientHasNitro = e.recipientHasNitro),
            (this.trialEndsAt = e.trialEndsAt),
            (this.analyticsLocations = e.analyticsLocations),
            (this.dmRefreshXPCohort = e.dmRefreshXPCohort),
            (this.compact = !0 === e.compact),
            (this.offerExpired = (0, R.B)(this.trialOffer)),
            (this.isSender = this.currentUser.id === this.trialOffer.referrer_id);
    }
}
function F(e) {
    let { userTrialOfferId: t, canRenderReferralEmbed: n, compact: i } = e,
        {
            trialOffer: a,
            isResolving: o,
            referralsSent: s,
        } = (0, u.cj)(
            [I.Z],
            () => ({
                trialOffer: n ? I.Z.getRelevantUserTrialOffer(t) : null,
                isResolving: !!n && I.Z.isResolving(t),
                referralsSent: I.Z.getRecipientStatus(),
            }),
            [n, t],
        ),
        l = g.default.getCurrentUser(),
        d = (0, u.e7)(
            [g.default],
            () => null != a && (0, v.I5)(void 0 !== l && a.user_id === l.id ? l : g.default.getUser(a.user_id)),
        ),
        h = (0, u.e7)([E.Z], () => {
            var e;
            return d ? (null == (e = E.Z.getPremiumTypeSubscription()) ? void 0 : e.trialEndsAt) : null;
        }),
        { analyticsLocations: m } = (0, p.ZP)(_.Z.SHARE_NITRO_EMBED),
        b = T.ZP.useExperiment({ location: "ConnectedReferralTrialEmbed" });
    return o
        ? (0, r.jsx)(f.OR, { isHorizontal: !c.tq })
        : n && null != a && void 0 !== l
          ? (0, r.jsx)(V, {
                trialOffer: a,
                referralsSent: s,
                currentUser: l,
                recipientHasNitro: d,
                trialEndsAt: h,
                analyticsLocations: m,
                dmRefreshXPCohort: b.cohort,
                compact: i,
            })
          : (0, r.jsx)("div", {
                className: x.invalidWrapper,
                children: (0, r.jsx)("div", { className: x.invalid }),
            });
}
