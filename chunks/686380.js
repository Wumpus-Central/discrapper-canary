n.d(t, { Z: () => F }), n(953529);
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
    v = n(70956),
    I = n(63063),
    T = n(74538),
    S = n(276444),
    A = n(623879),
    N = n(857262),
    C = n(93237),
    R = n(740594),
    P = n(786397),
    w = n(474936),
    D = n(981631),
    L = n(388032),
    x = n(681782),
    M = n(754761),
    k = n(295234);
function j(e, t, n) {
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
function U(e) {
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
                j(e, t, n[t]);
            });
    }
    return e;
}
let G = "???",
    B = (e) => {
        let { analyticsLocations: t } = e;
        y.default.track(D.rMx.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, { location_stack: t }),
            (0, f.ZDy)(async () => {
                let { default: e } = await Promise.all([n.e("83667"), n.e("67825")]).then(n.bind(n, 656139));
                return (t) => (0, r.jsx)(e, U({}, t));
            });
    };
class Z extends i.Component {
    getTitleText() {
        let e = E.default.getUser(this.trialOffer.user_id),
            t = null != e ? e.username : G,
            n = E.default.getUser(this.trialOffer.referrer_id),
            r = null != n ? n.username : G;
        if (this.recipientHasNitro && void 0 === this.trialOffer.redeemed_at)
            return L.intl.formatToPlainString(L.t.Mptau7, { username: t });
        if (this.offerExpired)
            return this.isSender
                ? L.intl.string(L.t["9SNdf3"])
                : L.intl.formatToPlainString(L.t["H0+MxM"], { userName: r });
        switch (N.Z.getCurrentConfig({ location: "renderTitle" }, { autoTrackExposure: !1 }).treatmentGroup) {
            case 1:
                return L.intl.formatToPlainString(L.t["L/leCw"], { receiver: t });
            case 2:
                return L.intl.formatToPlainString(L.t.febG6u, { receiver: t });
            case 3:
                return L.intl.formatToPlainString(L.t.zz1MYm, {
                    sender: r,
                    receiver: t,
                });
            case 4:
                return L.intl.formatToPlainString(L.t.PVQOi4, { receiver: t });
            default:
                return L.intl.formatToPlainString(L.t.IiWKws, {
                    senderUserName: r,
                    recipientUserName: t,
                });
        }
    }
    getBodyText() {
        if (this.recipientHasNitro && !this.isSender && void 0 === this.trialOffer.redeemed_at)
            return L.intl.format(L.t.LwCwT0, { helpdeskArticle: I.Z.getArticleURL(D.BhN.REFERRAL_PROGRAM) });
        if (this.offerExpired) return null;
        let e = E.default.getUser(this.trialOffer.referrer_id),
            t = null != e ? e.username : G;
        switch (N.Z.getCurrentConfig({ location: "renderBody" }, { autoTrackExposure: !1 }).treatmentGroup) {
            case 1:
                return L.intl.format(L.t.Ylrdnp, { sender: t });
            case 2:
                return L.intl.format(L.t["8XzXzc"], { sender: t });
            case 3:
                return L.intl.string(L.t.Ym5LAw);
            case 4:
                let n = Date.now(),
                    r = Math.floor((Date.parse(this.trialOffer.expires_at) - n) / v.Z.Millis.HOUR / 24);
                return L.intl.formatToPlainString(L.t["/3ho7u"], {
                    sender: t,
                    nDaysRemaining: r,
                });
            default:
                return L.intl.string(L.t.lQLlOT);
        }
    }
    renderActions() {
        let e = N.Z.getCurrentConfig({ location: "renderActions" }, { autoTrackExposure: !1 }),
            t =
                this.currentUser.id !== this.trialOffer.user_id ||
                (0, T.I5)(this.currentUser) ||
                !this.currentUser.verified ||
                (0, P.B)(this.trialOffer),
            n = this.renderExpirationDate();
        return (0, r.jsxs)("div", {
            className: x.buttonContainer,
            children: [
                (0, r.jsx)("div", {
                    children: (0, r.jsx)(d.zx, {
                        "data-migration-pending": !0,
                        disabled: t,
                        color: d.zx.Colors.BRAND,
                        size: d.zx.Sizes.SMALL,
                        onClick: () => {
                            (0, g.Z)({
                                initialPlanId: null,
                                subscriptionTier: w.Si.TIER_2,
                                analyticsLocations: this.analyticsLocations,
                                trialId: this.trialOffer.trial_id,
                                referralTrialOfferId: this.trialOffer.id,
                            });
                        },
                        children: L.intl.string(L.t.O0etsL),
                    }),
                }),
                4 !== e.treatmentGroup &&
                    (0, r.jsx)("div", {
                        className: x.metadata,
                        children: n,
                    }),
            ],
        });
    }
    renderExpirationDate() {
        let { trialOffer: e, trialEndsAt: t } = this.props;
        if (void 0 !== e.redeemed_at && !this.isSender && null !== t)
            return L.intl.formatToPlainString(L.t.nP0ivb, { date: (0, O.vc)(l()(t), "LL") });
        if (this.recipientHasNitro || void 0 === e.expires_at) return null;
        let n = l()(e.expires_at);
        return this.offerExpired
            ? L.intl.formatToPlainString(L.t.PuSHfX, { date: (0, O.vc)(l()(n), "LL") })
            : (0, C.F6)(n.valueOf());
    }
    renderMedia() {
        return (0, r.jsx)("div", { className: x.referral });
    }
    renderRefreshedDMEmbed(e) {
        let { emphasis: t } = e,
            n = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(R.Z, {
                        subscriptionTier: w.Si.TIER_2,
                        buttonTextOverride: L.intl.string(L.t.O0etsL),
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
                onClick: () => B({ analyticsLocations: [] }),
                children: L.intl.string(L.t.Lm2nFR),
            }),
            o = this.isSender ? i : n,
            a =
                "SOCIAL" === t
                    ? (0, r.jsx)(f.Eep, {
                          src: k.Z,
                          height: 84,
                          width: 144,
                          className: x.imgDMEmbedXP,
                      })
                    : (0, r.jsx)(f.Eep, {
                          src: M.Z,
                          height: 137,
                          width: 144,
                          className: x.imgDMEmbedXP,
                      });
        return (0, r.jsxs)(m.Z, {
            compact: !1,
            contentClassName: x.containerDMEmbedXP,
            children: [
                a,
                (0, r.jsxs)("div", {
                    className: x.contentDMEmbedXP,
                    children: [
                        (0, r.jsxs)("div", {
                            className: x.contentTextDMEmbedXP,
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
                            className: x.buttonContainerDMEmbedXP,
                            children: o,
                        }),
                    ],
                }),
            ],
        });
    }
    render() {
        switch (this.dmRefreshXPCohort) {
            case A.FZ.Social:
                return this.renderRefreshedDMEmbed({ emphasis: "SOCIAL" });
            case A.FZ.Perks:
                return this.renderRefreshedDMEmbed({ emphasis: "PERKS" });
            default:
                return (0, r.jsxs)("div", {
                    className: a()(x.tile, x.container),
                    children: [
                        (0, r.jsx)("div", {
                            className: x.media,
                            children: this.renderMedia(),
                        }),
                        (0, r.jsxs)("div", {
                            className: x.description,
                            children: [
                                (0, r.jsx)(f.H, {
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
            j(this, "trialOffer", void 0),
            j(this, "currentUser", void 0),
            j(this, "recipientHasNitro", void 0),
            j(this, "trialEndsAt", void 0),
            j(this, "analyticsLocations", void 0),
            j(this, "offerExpired", void 0),
            j(this, "isSender", void 0),
            j(this, "dmRefreshXPCohort", void 0),
            (this.trialOffer = e.trialOffer),
            (this.currentUser = e.currentUser),
            (this.recipientHasNitro = e.recipientHasNitro),
            (this.trialEndsAt = e.trialEndsAt),
            (this.analyticsLocations = e.analyticsLocations),
            (this.dmRefreshXPCohort = e.dmRefreshXPCohort),
            (this.offerExpired = (0, P.B)(this.trialOffer)),
            (this.isSender = this.currentUser.id === this.trialOffer.referrer_id);
    }
}
function F(e) {
    let { userTrialOfferId: t, canRenderReferralEmbed: n } = e,
        { trialOffer: i, isResolving: o } = (0, u.cj)(
            [S.Z],
            () => ({
                trialOffer: n ? S.Z.getRelevantUserTrialOffer(t) : null,
                isResolving: !!n && S.Z.isResolving(t),
            }),
            [n, t],
        ),
        a = E.default.getCurrentUser(),
        s = (0, u.e7)(
            [E.default],
            () => null != i && (0, T.I5)(void 0 !== a && i.user_id === a.id ? a : E.default.getUser(i.user_id)),
        ),
        l = (0, u.e7)([b.Z], () => {
            var e;
            return s ? (null == (e = b.Z.getPremiumTypeSubscription()) ? void 0 : e.trialEndsAt) : null;
        }),
        { analyticsLocations: d } = (0, h.ZP)(p.Z.SHARE_NITRO_EMBED),
        f = A.ZP.useExperiment({ location: "ConnectedReferralTrialEmbed" });
    return o
        ? (0, r.jsx)(_.OR, { isHorizontal: !c.tq })
        : n && null != i && void 0 !== a
          ? (0, r.jsx)(Z, {
                trialOffer: i,
                currentUser: a,
                recipientHasNitro: s,
                trialEndsAt: l,
                analyticsLocations: d,
                dmRefreshXPCohort: f.cohort,
            })
          : (0, r.jsx)("div", {
                className: x.invalidWrapper,
                children: (0, r.jsx)("div", { className: x.invalid }),
            });
}
