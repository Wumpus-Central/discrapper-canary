n.d(t, { Z: () => L }), n(953529);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    o = n.n(l),
    a = n(913527),
    s = n.n(a),
    c = n(873546),
    u = n(442837),
    d = n(481060),
    p = n(568836),
    m = n(100527),
    f = n(906732),
    g = n(834129),
    _ = n(963249),
    h = n(594174),
    b = n(78839),
    E = n(626135),
    C = n(55935),
    v = n(63063),
    O = n(74538),
    y = n(276444),
    x = n(623879),
    j = n(93237),
    I = n(740594),
    S = n(786397),
    T = n(474936),
    P = n(981631),
    N = n(388032),
    A = n(269143),
    w = n(754761),
    Z = n(295234);
function R(e, t, n) {
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
    getSystemMessageHeader() {
        let e = h.default.getUser(this.trialOffer.user_id);
        if (this.isSender) return N.intl.format(N.t["4/EMxs"], { receiver: null == e ? void 0 : e.username });
        let t = h.default.getUser(this.trialOffer.referrer_id),
            n = (null == t ? void 0 : t.username) !== void 0 ? t.username : "";
        return N.intl.format(N.t.yisueH, {
            sender: n,
            helpdeskArticle: v.Z.getArticleURL(P.BhN.REFERRAL_PROGRAM),
        });
    }
    getTitleText() {
        let e = h.default.getUser(this.trialOffer.user_id),
            t = null != e ? e.username : "???",
            n = h.default.getUser(this.trialOffer.referrer_id),
            r = null != n ? n.username : "???";
        return this.recipientHasNitro && void 0 === this.trialOffer.redeemed_at
            ? N.intl.formatToPlainString(N.t.Mptau7, { username: t })
            : this.offerExpired
              ? this.isSender
                  ? N.intl.string(N.t["9SNdf3"])
                  : N.intl.formatToPlainString(N.t["H0+MxM"], { userName: r })
              : N.intl.formatToPlainString(N.t.IiWKws, {
                    senderUserName: r,
                    recipientUserName: t,
                });
    }
    getBodyText() {
        return this.recipientHasNitro && !this.isSender && void 0 === this.trialOffer.redeemed_at
            ? N.intl.format(N.t.LwCwT0, { helpdeskArticle: v.Z.getArticleURL(P.BhN.REFERRAL_PROGRAM) })
            : this.offerExpired
              ? null
              : N.intl.string(N.t.lQLlOT);
    }
    renderActions() {
        let e =
                this.currentUser.id !== this.trialOffer.user_id ||
                (0, O.I5)(this.currentUser) ||
                !this.currentUser.verified ||
                (0, S.B)(this.trialOffer),
            t = this.renderExpirationDate();
        return (0, r.jsxs)("div", {
            className: A.buttonContainer,
            children: [
                (0, r.jsx)("div", {
                    children: (0, r.jsx)(d.zxk, {
                        variant: "primary",
                        disabled: e,
                        size: "sm",
                        text: N.intl.string(N.t.O0etsL),
                        onClick: () => {
                            (0, _.Z)({
                                initialPlanId: null,
                                subscriptionTier: T.Si.TIER_2,
                                analyticsLocations: this.analyticsLocations,
                                trialId: this.trialOffer.trial_id,
                                referralTrialOfferId: this.trialOffer.id,
                            });
                        },
                    }),
                }),
                (0, r.jsx)("div", {
                    className: A.metadata,
                    children: t,
                }),
            ],
        });
    }
    renderExpirationDate() {
        let { trialOffer: e, trialEndsAt: t } = this.props;
        if (void 0 !== e.redeemed_at && !this.isSender && null !== t)
            return N.intl.formatToPlainString(N.t.nP0ivb, { date: (0, C.vc)(s()(t), "LL") });
        if (this.recipientHasNitro || void 0 === e.expires_at) return null;
        let n = s()(e.expires_at);
        return this.offerExpired
            ? N.intl.formatToPlainString(N.t.PuSHfX, { date: (0, C.vc)(s()(n), "LL") })
            : (0, j.F6)(n.valueOf());
    }
    renderMedia() {
        return (0, r.jsx)("div", { className: A.referral });
    }
    renderRefreshedDMEmbed(e) {
        let { emphasis: t } = e,
            i = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(I.Z, {
                        subscriptionTier: T.Si.TIER_2,
                        buttonTextOverride: N.intl.string(N.t.O0etsL),
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
            l = (0, r.jsx)(d.zxk, {
                variant: "primary",
                disabled: !1,
                size: "md",
                onClick: () =>
                    ((e) => {
                        let { analyticsLocations: t } = e;
                        E.default.track(P.rMx.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, { location_stack: t }),
                            (0, d.ZDy)(async () => {
                                let { default: e } = await Promise.all([n.e("84533"), n.e("83773")]).then(
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
                                                        R(e, t, n[t]);
                                                    });
                                            }
                                            return e;
                                        })({}, t),
                                    );
                            });
                    })({ analyticsLocations: [] }),
                text: N.intl.string(N.t.Lm2nFR),
            }),
            o = this.isSender ? l : i,
            a =
                "SOCIAL" === t
                    ? (0, r.jsx)(d.Eep, {
                          src: Z.Z,
                          height: 84,
                          width: 144,
                          className: A.imgDMEmbedXP,
                      })
                    : (0, r.jsx)(d.Eep, {
                          src: w.Z,
                          height: 137,
                          width: 144,
                          className: A.imgDMEmbedXP,
                      });
        return (0, r.jsxs)(g.Z, {
            className: A.systemMessageContainerDMEmbedXP,
            iconNode: (0, r.jsx)(d.SrA, {
                size: "md",
                color: "#E3E3E6",
            }),
            iconContainerClassName: A.systemMessageContainerIcon,
            compact: this.compact,
            children: [
                (0, r.jsx)(d.Text, {
                    variant: "text-md/medium",
                    color: "text-primary",
                    children: this.getSystemMessageHeader(),
                }),
                (0, r.jsxs)("div", {
                    className: A.containerDMEmbedXP,
                    children: [
                        a,
                        (0, r.jsxs)("div", {
                            className: A.contentDMEmbedXP,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: A.contentTextDMEmbedXP,
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
                                    className: A.buttonContainerDMEmbedXP,
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
            case x.FZ.Social:
                return this.renderRefreshedDMEmbed({ emphasis: "SOCIAL" });
            case x.FZ.Perks:
                return this.renderRefreshedDMEmbed({ emphasis: "PERKS" });
            default:
                return (0, r.jsxs)("div", {
                    className: o()(A.tile, A.container),
                    children: [
                        (0, r.jsx)("div", {
                            className: A.media,
                            children: this.renderMedia(),
                        }),
                        (0, r.jsxs)("div", {
                            className: A.description,
                            children: [
                                (0, r.jsx)(d.H, {
                                    className: A.title,
                                    children: this.getTitleText(),
                                }),
                                (0, r.jsx)("div", {
                                    className: A.tagline,
                                    children: this.getBodyText(),
                                }),
                                (0, r.jsx)("div", {
                                    className: A.actions,
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
            R(this, "trialOffer", void 0),
            R(this, "currentUser", void 0),
            R(this, "recipientHasNitro", void 0),
            R(this, "trialEndsAt", void 0),
            R(this, "analyticsLocations", void 0),
            R(this, "offerExpired", void 0),
            R(this, "isSender", void 0),
            R(this, "dmRefreshXPCohort", void 0),
            R(this, "compact", void 0),
            (this.trialOffer = e.trialOffer),
            (this.currentUser = e.currentUser),
            (this.recipientHasNitro = e.recipientHasNitro),
            (this.trialEndsAt = e.trialEndsAt),
            (this.analyticsLocations = e.analyticsLocations),
            (this.dmRefreshXPCohort = e.dmRefreshXPCohort),
            (this.compact = !0 === e.compact),
            (this.offerExpired = (0, S.B)(this.trialOffer)),
            (this.isSender = this.currentUser.id === this.trialOffer.referrer_id);
    }
}
function L(e) {
    let { userTrialOfferId: t, canRenderReferralEmbed: n, compact: i } = e,
        { trialOffer: l, isResolving: o } = (0, u.cj)(
            [y.Z],
            () => ({
                trialOffer: n ? y.Z.getRelevantUserTrialOffer(t) : null,
                isResolving: !!n && y.Z.isResolving(t),
            }),
            [n, t],
        ),
        a = h.default.getCurrentUser(),
        s = (0, u.e7)(
            [h.default],
            () => null != l && (0, O.I5)(void 0 !== a && l.user_id === a.id ? a : h.default.getUser(l.user_id)),
        ),
        d = (0, u.e7)([b.Z], () => {
            var e;
            return s ? (null == (e = b.Z.getPremiumTypeSubscription()) ? void 0 : e.trialEndsAt) : null;
        }),
        { analyticsLocations: g } = (0, f.ZP)(m.Z.SHARE_NITRO_EMBED),
        _ = x.ZP.useExperiment({ location: "ConnectedReferralTrialEmbed" });
    return o
        ? (0, r.jsx)(p.OR, { isHorizontal: !c.tq })
        : n && null != l && void 0 !== a
          ? (0, r.jsx)(D, {
                trialOffer: l,
                currentUser: a,
                recipientHasNitro: s,
                trialEndsAt: d,
                analyticsLocations: g,
                dmRefreshXPCohort: _.cohort,
                compact: i,
            })
          : (0, r.jsx)("div", {
                className: A.invalidWrapper,
                children: (0, r.jsx)("div", { className: A.invalid }),
            });
}
