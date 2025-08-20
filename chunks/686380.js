n.d(t, { Z: () => G }), n(953529);
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
    A = n(740594),
    C = n(786397),
    N = n(474936),
    R = n(981631),
    P = n(388032),
    w = n(269143),
    D = n(754761),
    x = n(295234);
function L(e, t, n) {
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
function j(e) {
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
                L(e, t, n[t]);
            });
    }
    return e;
}
let M = "???",
    k = (e) => {
        let { analyticsLocations: t } = e;
        b.default.track(R.rMx.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, { location_stack: t }),
            (0, d.ZDy)(async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 656139));
                return (t) => (0, r.jsx)(e, j({}, t));
            });
    };
class U extends i.Component {
    getSystemMessageHeader() {
        let e = g.default.getUser(this.trialOffer.user_id);
        if (this.isSender) return P.intl.format(P.t["4/EMxs"], { receiver: null == e ? void 0 : e.username });
        let t = g.default.getUser(this.trialOffer.referrer_id),
            n = (null == t ? void 0 : t.username) !== void 0 ? t.username : "";
        return P.intl.format(P.t.yisueH, {
            sender: n,
            helpdeskArticle: O.Z.getArticleURL(R.BhN.REFERRAL_PROGRAM),
        });
    }
    getTitleText() {
        let e = g.default.getUser(this.trialOffer.user_id),
            t = null != e ? e.username : M,
            n = g.default.getUser(this.trialOffer.referrer_id),
            r = null != n ? n.username : M;
        return this.recipientHasNitro && void 0 === this.trialOffer.redeemed_at
            ? P.intl.formatToPlainString(P.t.Mptau7, { username: t })
            : this.offerExpired
              ? this.isSender
                  ? P.intl.string(P.t["9SNdf3"])
                  : P.intl.formatToPlainString(P.t["H0+MxM"], { userName: r })
              : P.intl.formatToPlainString(P.t.IiWKws, {
                    senderUserName: r,
                    recipientUserName: t,
                });
    }
    getBodyText() {
        return this.recipientHasNitro && !this.isSender && void 0 === this.trialOffer.redeemed_at
            ? P.intl.format(P.t.LwCwT0, { helpdeskArticle: O.Z.getArticleURL(R.BhN.REFERRAL_PROGRAM) })
            : this.offerExpired
              ? null
              : P.intl.string(P.t.lQLlOT);
    }
    renderActions() {
        let e =
                this.currentUser.id !== this.trialOffer.user_id ||
                (0, v.I5)(this.currentUser) ||
                !this.currentUser.verified ||
                (0, C.B)(this.trialOffer),
            t = this.renderExpirationDate();
        return (0, r.jsxs)("div", {
            className: w.buttonContainer,
            children: [
                (0, r.jsx)("div", {
                    children: (0, r.jsx)(d.zxk, {
                        variant: "primary",
                        disabled: e,
                        size: "sm",
                        text: P.intl.string(P.t.O0etsL),
                        onClick: () => {
                            (0, m.Z)({
                                initialPlanId: null,
                                subscriptionTier: N.Si.TIER_2,
                                analyticsLocations: this.analyticsLocations,
                                trialId: this.trialOffer.trial_id,
                                referralTrialOfferId: this.trialOffer.id,
                            });
                        },
                    }),
                }),
                (0, r.jsx)("div", {
                    className: w.metadata,
                    children: t,
                }),
            ],
        });
    }
    renderExpirationDate() {
        let { trialOffer: e, trialEndsAt: t } = this.props;
        if (void 0 !== e.redeemed_at && !this.isSender && null !== t)
            return P.intl.formatToPlainString(P.t.nP0ivb, { date: (0, y.vc)(l()(t), "LL") });
        if (this.recipientHasNitro || void 0 === e.expires_at) return null;
        let n = l()(e.expires_at);
        return this.offerExpired
            ? P.intl.formatToPlainString(P.t.PuSHfX, { date: (0, y.vc)(l()(n), "LL") })
            : (0, S.F6)(n.valueOf());
    }
    renderMedia() {
        return (0, r.jsx)("div", { className: w.referral });
    }
    renderRefreshedDMEmbed(e) {
        let { emphasis: t } = e,
            n = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(A.Z, {
                        subscriptionTier: N.Si.TIER_2,
                        buttonTextOverride: P.intl.string(P.t.O0etsL),
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
            i = (0, r.jsx)(d.zxk, {
                variant: "primary",
                disabled: !1,
                size: "md",
                onClick: () => k({ analyticsLocations: [] }),
                text: P.intl.string(P.t.Lm2nFR),
            }),
            a = this.isSender ? i : n,
            o =
                "SOCIAL" === t
                    ? (0, r.jsx)(d.Eep, {
                          src: x.Z,
                          height: 84,
                          width: 144,
                          className: w.imgDMEmbedXP,
                      })
                    : (0, r.jsx)(d.Eep, {
                          src: D.Z,
                          height: 137,
                          width: 144,
                          className: w.imgDMEmbedXP,
                      });
        return (0, r.jsxs)(h.Z, {
            className: w.systemMessageContainerDMEmbedXP,
            iconNode: (0, r.jsx)(d.SrA, {
                size: "md",
                color: "#E3E3E6",
            }),
            iconContainerClassName: w.systemMessageContainerIcon,
            compact: this.compact,
            children: [
                (0, r.jsx)(d.Text, {
                    variant: "text-md/medium",
                    color: "text-primary",
                    children: this.getSystemMessageHeader(),
                }),
                (0, r.jsxs)("div", {
                    className: w.containerDMEmbedXP,
                    children: [
                        o,
                        (0, r.jsxs)("div", {
                            className: w.contentDMEmbedXP,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: w.contentTextDMEmbedXP,
                                    children: [
                                        (0, r.jsx)(d.X6q, {
                                            variant: "heading-md/semibold",
                                            color: "header-primary",
                                            children: this.getTitleText(),
                                        }),
                                        (0, r.jsx)(d.Text, {
                                            variant: "text-md/medium",
                                            color: "text-secondary",
                                            children: this.getBodyText(),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)("div", {
                                    className: w.buttonContainerDMEmbedXP,
                                    children: a,
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
                    className: o()(w.tile, w.container),
                    children: [
                        (0, r.jsx)("div", {
                            className: w.media,
                            children: this.renderMedia(),
                        }),
                        (0, r.jsxs)("div", {
                            className: w.description,
                            children: [
                                (0, r.jsx)(d.H, {
                                    className: w.title,
                                    children: this.getTitleText(),
                                }),
                                (0, r.jsx)("div", {
                                    className: w.tagline,
                                    children: this.getBodyText(),
                                }),
                                (0, r.jsx)("div", {
                                    className: w.actions,
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
            L(this, "trialOffer", void 0),
            L(this, "currentUser", void 0),
            L(this, "recipientHasNitro", void 0),
            L(this, "trialEndsAt", void 0),
            L(this, "analyticsLocations", void 0),
            L(this, "offerExpired", void 0),
            L(this, "isSender", void 0),
            L(this, "dmRefreshXPCohort", void 0),
            L(this, "compact", void 0),
            (this.trialOffer = e.trialOffer),
            (this.currentUser = e.currentUser),
            (this.recipientHasNitro = e.recipientHasNitro),
            (this.trialEndsAt = e.trialEndsAt),
            (this.analyticsLocations = e.analyticsLocations),
            (this.dmRefreshXPCohort = e.dmRefreshXPCohort),
            (this.compact = !0 === e.compact),
            (this.offerExpired = (0, C.B)(this.trialOffer)),
            (this.isSender = this.currentUser.id === this.trialOffer.referrer_id);
    }
}
function G(e) {
    let { userTrialOfferId: t, canRenderReferralEmbed: n, compact: i } = e,
        { trialOffer: a, isResolving: o } = (0, u.cj)(
            [I.Z],
            () => ({
                trialOffer: n ? I.Z.getRelevantUserTrialOffer(t) : null,
                isResolving: !!n && I.Z.isResolving(t),
            }),
            [n, t],
        ),
        s = g.default.getCurrentUser(),
        l = (0, u.e7)(
            [g.default],
            () => null != a && (0, v.I5)(void 0 !== s && a.user_id === s.id ? s : g.default.getUser(a.user_id)),
        ),
        d = (0, u.e7)([E.Z], () => {
            var e;
            return l ? (null == (e = E.Z.getPremiumTypeSubscription()) ? void 0 : e.trialEndsAt) : null;
        }),
        { analyticsLocations: h } = (0, p.ZP)(_.Z.SHARE_NITRO_EMBED),
        m = T.ZP.useExperiment({ location: "ConnectedReferralTrialEmbed" });
    return o
        ? (0, r.jsx)(f.OR, { isHorizontal: !c.tq })
        : n && null != a && void 0 !== s
          ? (0, r.jsx)(U, {
                trialOffer: a,
                currentUser: s,
                recipientHasNitro: l,
                trialEndsAt: d,
                analyticsLocations: h,
                dmRefreshXPCohort: m.cohort,
                compact: i,
            })
          : (0, r.jsx)("div", {
                className: w.invalidWrapper,
                children: (0, r.jsx)("div", { className: w.invalid }),
            });
}
