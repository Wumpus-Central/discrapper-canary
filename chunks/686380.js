n.d(t, { Z: () => M }), n(953529);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(913527),
    s = n.n(o),
    c = n(873546),
    u = n(442837),
    d = n(755721),
    p = n(481060),
    m = n(568836),
    f = n(100527),
    _ = n(906732),
    g = n(834129),
    h = n(963249),
    b = n(594174),
    E = n(78839),
    C = n(626135),
    v = n(55935),
    O = n(63063),
    y = n(74538),
    x = n(276444),
    j = n(623879),
    I = n(93237),
    S = n(740594),
    T = n(786397),
    P = n(474936),
    N = n(981631),
    A = n(388032),
    w = n(269143),
    Z = n(754761),
    R = n(295234);
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
class D extends i.Component {
    getTitleText() {
        let e = b.default.getUser(this.trialOffer.user_id),
            t = null != e ? e.username : "???",
            n = b.default.getUser(this.trialOffer.referrer_id),
            r = null != n ? n.username : "???";
        return this.recipientHasNitro && void 0 === this.trialOffer.redeemed_at
            ? A.intl.formatToPlainString(A.t.Mptau7, { username: t })
            : this.offerExpired
              ? this.isSender
                  ? A.intl.string(A.t["9SNdf3"])
                  : A.intl.formatToPlainString(A.t["H0+MxM"], { userName: r })
              : A.intl.formatToPlainString(A.t.IiWKws, {
                    senderUserName: r,
                    recipientUserName: t,
                });
    }
    getBodyText() {
        return this.recipientHasNitro && !this.isSender && void 0 === this.trialOffer.redeemed_at
            ? A.intl.format(A.t.LwCwT0, { helpdeskArticle: O.Z.getArticleURL(N.BhN.REFERRAL_PROGRAM) })
            : this.offerExpired
              ? null
              : A.intl.string(A.t.lQLlOT);
    }
    renderActions() {
        let e =
                this.currentUser.id !== this.trialOffer.user_id ||
                (0, y.I5)(this.currentUser) ||
                !this.currentUser.verified ||
                (0, T.B)(this.trialOffer),
            t = this.renderExpirationDate();
        return (0, r.jsxs)("div", {
            className: w.buttonContainer,
            children: [
                (0, r.jsx)("div", {
                    children: (0, r.jsx)(d.zx, {
                        "data-migration-pending": !0,
                        disabled: e,
                        color: d.zx.Colors.BRAND,
                        size: d.zx.Sizes.SMALL,
                        onClick: () => {
                            (0, h.Z)({
                                initialPlanId: null,
                                subscriptionTier: P.Si.TIER_2,
                                analyticsLocations: this.analyticsLocations,
                                trialId: this.trialOffer.trial_id,
                                referralTrialOfferId: this.trialOffer.id,
                            });
                        },
                        children: A.intl.string(A.t.O0etsL),
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
            return A.intl.formatToPlainString(A.t.nP0ivb, { date: (0, v.vc)(s()(t), "LL") });
        if (this.recipientHasNitro || void 0 === e.expires_at) return null;
        let n = s()(e.expires_at);
        return this.offerExpired
            ? A.intl.formatToPlainString(A.t.PuSHfX, { date: (0, v.vc)(s()(n), "LL") })
            : (0, I.F6)(n.valueOf());
    }
    renderMedia() {
        return (0, r.jsx)("div", { className: w.referral });
    }
    renderRefreshedDMEmbed(e) {
        let { emphasis: t } = e,
            i = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(S.Z, {
                        subscriptionTier: P.Si.TIER_2,
                        buttonTextOverride: A.intl.string(A.t.O0etsL),
                        size: "md",
                        variantOverride: "expressive",
                    }),
                    (0, r.jsx)(p.Text, {
                        variant: "text-md/medium",
                        color: "text-secondary",
                        children: this.renderExpirationDate(),
                    }),
                ],
            }),
            l = (0, r.jsx)(d.zx, {
                disabled: !1,
                color: d.zx.Colors.BRAND,
                size: d.zx.Sizes.MEDIUM,
                onClick: () =>
                    ((e) => {
                        let { analyticsLocations: t } = e;
                        C.default.track(N.rMx.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, { location_stack: t }),
                            (0, p.ZDy)(async () => {
                                let { default: e } = await Promise.all([n.e("83667"), n.e("84533"), n.e("83773")]).then(
                                    n.bind(n, 656139),
                                );
                                return (t) =>
                                    (0, r.jsx)(
                                        e,
                                        (function (e) {
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
                                        })({}, t),
                                    );
                            });
                    })({ analyticsLocations: [] }),
                children: A.intl.string(A.t.Lm2nFR),
            }),
            a = this.isSender ? l : i,
            o =
                "SOCIAL" === t
                    ? (0, r.jsx)(p.Eep, {
                          src: R.Z,
                          height: 84,
                          width: 144,
                          className: w.imgDMEmbedXP,
                      })
                    : (0, r.jsx)(p.Eep, {
                          src: Z.Z,
                          height: 137,
                          width: 144,
                          className: w.imgDMEmbedXP,
                      });
        return (0, r.jsxs)(g.Z, {
            compact: !1,
            contentClassName: w.containerDMEmbedXP,
            children: [
                o,
                (0, r.jsxs)("div", {
                    className: w.contentDMEmbedXP,
                    children: [
                        (0, r.jsxs)("div", {
                            className: w.contentTextDMEmbedXP,
                            children: [
                                (0, r.jsx)(p.X6q, {
                                    variant: "heading-md/semibold",
                                    color: "header-primary",
                                    children: this.getTitleText(),
                                }),
                                (0, r.jsx)(p.Text, {
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
        });
    }
    render() {
        switch (this.dmRefreshXPCohort) {
            case j.FZ.Social:
                return this.renderRefreshedDMEmbed({ emphasis: "SOCIAL" });
            case j.FZ.Perks:
                return this.renderRefreshedDMEmbed({ emphasis: "PERKS" });
            default:
                return (0, r.jsxs)("div", {
                    className: a()(w.tile, w.container),
                    children: [
                        (0, r.jsx)("div", {
                            className: w.media,
                            children: this.renderMedia(),
                        }),
                        (0, r.jsxs)("div", {
                            className: w.description,
                            children: [
                                (0, r.jsx)(p.H, {
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
            (this.trialOffer = e.trialOffer),
            (this.currentUser = e.currentUser),
            (this.recipientHasNitro = e.recipientHasNitro),
            (this.trialEndsAt = e.trialEndsAt),
            (this.analyticsLocations = e.analyticsLocations),
            (this.dmRefreshXPCohort = e.dmRefreshXPCohort),
            (this.offerExpired = (0, T.B)(this.trialOffer)),
            (this.isSender = this.currentUser.id === this.trialOffer.referrer_id);
    }
}
function M(e) {
    let { userTrialOfferId: t, canRenderReferralEmbed: n } = e,
        { trialOffer: i, isResolving: l } = (0, u.cj)(
            [x.Z],
            () => ({
                trialOffer: n ? x.Z.getRelevantUserTrialOffer(t) : null,
                isResolving: !!n && x.Z.isResolving(t),
            }),
            [n, t],
        ),
        a = b.default.getCurrentUser(),
        o = (0, u.e7)(
            [b.default],
            () => null != i && (0, y.I5)(void 0 !== a && i.user_id === a.id ? a : b.default.getUser(i.user_id)),
        ),
        s = (0, u.e7)([E.Z], () => {
            var e;
            return o ? (null == (e = E.Z.getPremiumTypeSubscription()) ? void 0 : e.trialEndsAt) : null;
        }),
        { analyticsLocations: d } = (0, _.ZP)(f.Z.SHARE_NITRO_EMBED),
        p = j.ZP.useExperiment({ location: "ConnectedReferralTrialEmbed" });
    return l
        ? (0, r.jsx)(m.OR, { isHorizontal: !c.tq })
        : n && null != i && void 0 !== a
          ? (0, r.jsx)(D, {
                trialOffer: i,
                currentUser: a,
                recipientHasNitro: o,
                trialEndsAt: s,
                analyticsLocations: d,
                dmRefreshXPCohort: p.cohort,
            })
          : (0, r.jsx)("div", {
                className: w.invalidWrapper,
                children: (0, r.jsx)("div", { className: w.invalid }),
            });
}
