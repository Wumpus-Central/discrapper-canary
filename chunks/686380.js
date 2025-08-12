n.d(t, { Z: () => B }), n(953529);
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(913527),
    l = n.n(s),
    c = n(873546),
    u = n(442837),
    d = n(755721),
    f = n(481060),
    _ = n(568836),
    p = n(100527),
    h = n(906732),
    m = n(834129),
    g = n(963249),
    E = n(594174),
    b = n(78839),
    y = n(626135),
    O = n(55935),
    v = n(63063),
    I = n(74538),
    T = n(276444),
    S = n(623879),
    A = n(93237),
    N = n(740594),
    C = n(786397),
    R = n(474936),
    P = n(981631),
    w = n(388032),
    D = n(681782),
    L = n(754761),
    x = n(295234);
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
let j = "???",
    U = (e) => {
        let { analyticsLocations: t } = e;
        y.default.track(P.rMx.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, { location_stack: t }),
            (0, f.ZDy)(async () => {
                let { default: e } = await Promise.all([n.e("83667"), n.e("67825")]).then(n.bind(n, 656139));
                return (t) => (0, r.jsx)(e, k({}, t));
            });
    };
class G extends i.Component {
    getTitleText() {
        let e = E.default.getUser(this.trialOffer.user_id),
            t = null != e ? e.username : j,
            n = E.default.getUser(this.trialOffer.referrer_id),
            r = null != n ? n.username : j;
        return this.recipientHasNitro && void 0 === this.trialOffer.redeemed_at
            ? w.intl.formatToPlainString(w.t.Mptau7, { username: t })
            : this.offerExpired
              ? this.isSender
                  ? w.intl.string(w.t["9SNdf3"])
                  : w.intl.formatToPlainString(w.t["H0+MxM"], { userName: r })
              : w.intl.formatToPlainString(w.t.IiWKws, {
                    senderUserName: r,
                    recipientUserName: t,
                });
    }
    getBodyText() {
        return this.recipientHasNitro && !this.isSender && void 0 === this.trialOffer.redeemed_at
            ? w.intl.format(w.t.LwCwT0, { helpdeskArticle: v.Z.getArticleURL(P.BhN.REFERRAL_PROGRAM) })
            : this.offerExpired
              ? null
              : w.intl.string(w.t.lQLlOT);
    }
    renderActions() {
        let e =
                this.currentUser.id !== this.trialOffer.user_id ||
                (0, I.I5)(this.currentUser) ||
                !this.currentUser.verified ||
                (0, C.B)(this.trialOffer),
            t = this.renderExpirationDate();
        return (0, r.jsxs)("div", {
            className: D.buttonContainer,
            children: [
                (0, r.jsx)("div", {
                    children: (0, r.jsx)(d.zx, {
                        "data-migration-pending": !0,
                        disabled: e,
                        color: d.zx.Colors.BRAND,
                        size: d.zx.Sizes.SMALL,
                        onClick: () => {
                            (0, g.Z)({
                                initialPlanId: null,
                                subscriptionTier: R.Si.TIER_2,
                                analyticsLocations: this.analyticsLocations,
                                trialId: this.trialOffer.trial_id,
                                referralTrialOfferId: this.trialOffer.id,
                            });
                        },
                        children: w.intl.string(w.t.O0etsL),
                    }),
                }),
                (0, r.jsx)("div", {
                    className: D.metadata,
                    children: t,
                }),
            ],
        });
    }
    renderExpirationDate() {
        let { trialOffer: e, trialEndsAt: t } = this.props;
        if (void 0 !== e.redeemed_at && !this.isSender && null !== t)
            return w.intl.formatToPlainString(w.t.nP0ivb, { date: (0, O.vc)(l()(t), "LL") });
        if (this.recipientHasNitro || void 0 === e.expires_at) return null;
        let n = l()(e.expires_at);
        return this.offerExpired
            ? w.intl.formatToPlainString(w.t.PuSHfX, { date: (0, O.vc)(l()(n), "LL") })
            : (0, A.F6)(n.valueOf());
    }
    renderMedia() {
        return (0, r.jsx)("div", { className: D.referral });
    }
    renderRefreshedDMEmbed(e) {
        let { emphasis: t } = e,
            n = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(N.Z, {
                        subscriptionTier: R.Si.TIER_2,
                        buttonTextOverride: w.intl.string(w.t.O0etsL),
                        size: "md",
                        variantOverride: "expressive",
                    }),
                    (0, r.jsx)(f.Text, {
                        variant: "text-md/medium",
                        color: "text-secondary",
                        children: this.renderExpirationDate(),
                    }),
                ],
            }),
            i = (0, r.jsx)(d.zx, {
                disabled: !1,
                color: d.zx.Colors.BRAND,
                size: d.zx.Sizes.MEDIUM,
                onClick: () => U({ analyticsLocations: [] }),
                children: w.intl.string(w.t.Lm2nFR),
            }),
            o = this.isSender ? i : n,
            a =
                "SOCIAL" === t
                    ? (0, r.jsx)(f.Eep, {
                          src: x.Z,
                          height: 84,
                          width: 144,
                          className: D.imgDMEmbedXP,
                      })
                    : (0, r.jsx)(f.Eep, {
                          src: L.Z,
                          height: 137,
                          width: 144,
                          className: D.imgDMEmbedXP,
                      });
        return (0, r.jsxs)(m.Z, {
            compact: !1,
            contentClassName: D.containerDMEmbedXP,
            children: [
                a,
                (0, r.jsxs)("div", {
                    className: D.contentDMEmbedXP,
                    children: [
                        (0, r.jsxs)("div", {
                            className: D.contentTextDMEmbedXP,
                            children: [
                                (0, r.jsx)(f.X6q, {
                                    variant: "heading-md/semibold",
                                    color: "header-primary",
                                    children: this.getTitleText(),
                                }),
                                (0, r.jsx)(f.Text, {
                                    variant: "text-md/medium",
                                    color: "text-secondary",
                                    children: this.getBodyText(),
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: D.buttonContainerDMEmbedXP,
                            children: o,
                        }),
                    ],
                }),
            ],
        });
    }
    render() {
        switch (this.dmRefreshXPCohort) {
            case S.FZ.Social:
                return this.renderRefreshedDMEmbed({ emphasis: "SOCIAL" });
            case S.FZ.Perks:
                return this.renderRefreshedDMEmbed({ emphasis: "PERKS" });
            default:
                return (0, r.jsxs)("div", {
                    className: a()(D.tile, D.container),
                    children: [
                        (0, r.jsx)("div", {
                            className: D.media,
                            children: this.renderMedia(),
                        }),
                        (0, r.jsxs)("div", {
                            className: D.description,
                            children: [
                                (0, r.jsx)(f.H, {
                                    className: D.title,
                                    children: this.getTitleText(),
                                }),
                                (0, r.jsx)("div", {
                                    className: D.tagline,
                                    children: this.getBodyText(),
                                }),
                                (0, r.jsx)("div", {
                                    className: D.actions,
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
            M(this, "currentUser", void 0),
            M(this, "recipientHasNitro", void 0),
            M(this, "trialEndsAt", void 0),
            M(this, "analyticsLocations", void 0),
            M(this, "offerExpired", void 0),
            M(this, "isSender", void 0),
            M(this, "dmRefreshXPCohort", void 0),
            (this.trialOffer = e.trialOffer),
            (this.currentUser = e.currentUser),
            (this.recipientHasNitro = e.recipientHasNitro),
            (this.trialEndsAt = e.trialEndsAt),
            (this.analyticsLocations = e.analyticsLocations),
            (this.dmRefreshXPCohort = e.dmRefreshXPCohort),
            (this.offerExpired = (0, C.B)(this.trialOffer)),
            (this.isSender = this.currentUser.id === this.trialOffer.referrer_id);
    }
}
function B(e) {
    let { userTrialOfferId: t, canRenderReferralEmbed: n } = e,
        { trialOffer: i, isResolving: o } = (0, u.cj)(
            [T.Z],
            () => ({
                trialOffer: n ? T.Z.getRelevantUserTrialOffer(t) : null,
                isResolving: !!n && T.Z.isResolving(t),
            }),
            [n, t],
        ),
        a = E.default.getCurrentUser(),
        s = (0, u.e7)(
            [E.default],
            () => null != i && (0, I.I5)(void 0 !== a && i.user_id === a.id ? a : E.default.getUser(i.user_id)),
        ),
        l = (0, u.e7)([b.Z], () => {
            var e;
            return s ? (null == (e = b.Z.getPremiumTypeSubscription()) ? void 0 : e.trialEndsAt) : null;
        }),
        { analyticsLocations: d } = (0, h.ZP)(p.Z.SHARE_NITRO_EMBED),
        f = S.ZP.useExperiment({ location: "ConnectedReferralTrialEmbed" });
    return o
        ? (0, r.jsx)(_.OR, { isHorizontal: !c.tq })
        : n && null != i && void 0 !== a
          ? (0, r.jsx)(G, {
                trialOffer: i,
                currentUser: a,
                recipientHasNitro: s,
                trialEndsAt: l,
                analyticsLocations: d,
                dmRefreshXPCohort: f.cohort,
            })
          : (0, r.jsx)("div", {
                className: D.invalidWrapper,
                children: (0, r.jsx)("div", { className: D.invalid }),
            });
}
