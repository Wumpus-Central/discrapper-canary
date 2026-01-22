n.d(t, {
    A: () => G,
});
var r = n(627968),
    i = n(64700),
    a = n(989349),
    s = n.n(a),
    o = n(607399),
    l = n(311907),
    c = n(397927),
    u = n(863574),
    d = n(793574),
    f = n(688810),
    p = n(888675),
    _ = n(532794),
    h = n(287809),
    m = n(166403),
    g = n(954571),
    E = n(405269),
    b = n(975571),
    y = n(927578),
    O = n(851746),
    A = n(727949),
    v = n(664654),
    S = n(303682),
    I = n(857586),
    T = n(378135),
    C = n(788868),
    N = n(652215),
    R = n(985018),
    w = n(26875),
    P = n(954457);

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
        g.default.track(N.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, {
            location_stack: t,
        }),
            (0, c.mMO)(async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 303682));
                return (t) =>
                    (0, r.jsx)(
                        e,
                        j(x({}, t), {
                            startingScreen: i,
                        }),
                    );
            });
    };
class U extends i.Component {
    getSystemMessageHeader() {
        let e = h.default.getUser(this.trialOffer.user_id);
        if (this.isSender)
            return R.intl.format(R.t["4/EMxl"], {
                receiver: null == e ? void 0 : e.username,
            });
        let t = h.default.getUser(this.trialOffer.referrer_id),
            n = (null == t ? void 0 : t.username) !== void 0 ? t.username : "";
        return R.intl.format(R.t.yisueA, {
            sender: n,
            helpdeskArticle: b.A.getArticleURL(N.MVz.REFERRAL_PROGRAM),
        });
    }
    getTitleText() {
        let e = h.default.getUser(this.trialOffer.user_id),
            t = null != e ? e.username : M,
            n = h.default.getUser(this.trialOffer.referrer_id),
            r = null != n ? n.username : M;
        return this.recipientHasNitro && void 0 === this.trialOffer.redeemed_at
            ? R.intl.formatToPlainString(R.t["Mptau/"], {
                  username: t,
              })
            : this.offerExpired
              ? this.isSender
                  ? R.intl.string(R.t["9SNdf4"])
                  : R.intl.formatToPlainString(R.t["H0+MxK"], {
                        userName: r,
                    })
              : R.intl.formatToPlainString(R.t.IiWKwg, {
                    senderUserName: r,
                    recipientUserName: t,
                });
    }
    getBodyText() {
        return this.recipientHasNitro && !this.isSender && void 0 === this.trialOffer.redeemed_at
            ? R.intl.format(R.t.LwCwT9, {
                  helpdeskArticle: b.A.getArticleURL(N.MVz.REFERRAL_PROGRAM),
              })
            : this.offerExpired
              ? null
              : R.intl.string(R.t.lQLlOb);
    }
    renderActions() {
        let e =
                this.currentUser.id !== this.trialOffer.user_id ||
                (0, y.TW)(this.currentUser) ||
                !this.currentUser.verified ||
                (0, T.P)(this.trialOffer),
            t = this.renderExpirationDate();
        return (0, r.jsxs)("div", {
            className: w.UD,
            children: [
                (0, r.jsx)("div", {
                    children: (0, r.jsx)(c.Button, {
                        variant: "primary",
                        disabled: e,
                        size: "sm",
                        text: R.intl.string(R.t.O0etsF),
                        onClick: () => {
                            (0, _.A)({
                                initialPlanId: null,
                                subscriptionTier: C.pe.TIER_2,
                                analyticsLocations: this.analyticsLocations,
                                trialId: this.trialOffer.trial_id,
                                referralTrialOfferId: this.trialOffer.id,
                            });
                        },
                    }),
                }),
                (0, r.jsx)("div", {
                    className: w.yu,
                    children: t,
                }),
            ],
        });
    }
    renderExpirationDate() {
        let { trialOffer: e, trialEndsAt: t } = this.props;
        if (void 0 !== e.redeemed_at && !this.isSender && null !== t)
            return R.intl.formatToPlainString(R.t.nP0ivR, {
                date: (0, E.i$)(s()(t), "LL"),
            });
        if (this.recipientHasNitro || void 0 === e.expires_at) return null;
        let n = s()(e.expires_at);
        return this.offerExpired
            ? R.intl.formatToPlainString(R.t.PuSHfU, {
                  date: (0, E.i$)(s()(n), "LL"),
              })
            : (0, A.GQ)(n.valueOf());
    }
    renderMedia() {
        return (0, r.jsx)("div", {
            className: w.Qj,
        });
    }
    render() {
        let e = () => {
                let e = h.default.getUser(this.trialOffer.user_id),
                    t = null != e ? e.username : M,
                    n = h.default.getUser(this.trialOffer.referrer_id),
                    r = null != n ? n.username : M;
                if (this.isSender)
                    if (this.recipientHasNitro && void 0 === this.trialOffer.redeemed_at)
                        return {
                            headerText: R.intl.formatToPlainString(R.t.qABVhL, {
                                recipient: t,
                            }),
                            bodyText: R.intl.formatToPlainString(R.t.u7hyDx, {
                                helpdeskArticle: b.A.getArticleURL(N.MVz.REFERRAL_PROGRAM),
                            }),
                        };
                    else
                        return {
                            headerText: R.intl.string(R.t.LAGZfq),
                            bodyText: R.intl.formatToPlainString(R.t["0gnFLC"], {
                                recipient: t,
                            }),
                        };
                return this.offerExpired
                    ? {
                          headerText: R.intl.string(R.t.nYvpUl),
                          bodyText: R.intl.formatToPlainString(R.t.wJdBEZ, {
                              sender: r,
                          }),
                      }
                    : {
                          headerText: R.intl.string(R.t.HtTvXA),
                          bodyText: R.intl.formatToPlainString(R.t.wOQByA, {
                              sender: r,
                          }),
                      };
            },
            t = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(I.A, {
                        subscriptionTier: C.pe.TIER_2,
                        buttonTextOverride: R.intl.string(R.t.O0etsF),
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
                            this.referralsSent.size === v.Z
                                ? S.SelectFriendsModalScreens.REMINDER
                                : S.SelectFriendsModalScreens.SELECT_FRIENDS,
                    }),
                text: R.intl.string(R.t.Lm2nFc),
            }),
            i = this.isSender ? n : t,
            a = (0, r.jsx)(c._V3, {
                src: P.A,
                height: 84,
                width: 144,
                className: w.ms,
            }),
            { headerText: s, bodyText: o } = e();
        return (0, r.jsxs)(p.A, {
            className: w.SB,
            iconNode: (0, r.jsx)(c.tvc, {
                size: "md",
                color: "currentColor",
            }),
            iconContainerClassName: w.J5,
            compact: this.compact,
            children: [
                (0, r.jsx)(c.Text, {
                    variant: "text-md/medium",
                    color: "text-strong",
                    children: this.getSystemMessageHeader(),
                }),
                (0, r.jsxs)("div", {
                    className: w.i2,
                    children: [
                        a,
                        (0, r.jsxs)("div", {
                            className: w.KX,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: w.xJ,
                                    children: [
                                        (0, r.jsx)(c.Heading, {
                                            variant: "heading-md/semibold",
                                            color: "text-strong",
                                            children: s,
                                        }),
                                        (0, r.jsx)(c.Text, {
                                            variant: "text-md/medium",
                                            color: "text-subtle",
                                            children: o,
                                        }),
                                    ],
                                }),
                                (0, r.jsx)("div", {
                                    className: w.ox,
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
            (this.offerExpired = (0, T.P)(this.trialOffer)),
            (this.isSender = this.currentUser.id === this.trialOffer.referrer_id);
    }
}

function G(e) {
    let { userTrialOfferId: t, canRenderReferralEmbed: n, compact: i } = e,
        {
            trialOffer: a,
            isResolving: s,
            referralsSent: c,
        } = (0, l.cf)(
            [O.A],
            () => ({
                trialOffer: n ? O.A.getRelevantUserTrialOffer(t) : null,
                isResolving: !!n && O.A.isResolving(t),
                referralsSent: O.A.getRecipientStatus(),
            }),
            [n, t],
        ),
        p = h.default.getCurrentUser(),
        _ = (0, l.bG)(
            [h.default],
            () => null != a && (0, y.TW)(void 0 !== p && a.user_id === p.id ? p : h.default.getUser(a.user_id)),
        ),
        g = (0, l.bG)([m.A], () => {
            var e;
            return _ ? (null == (e = m.A.getPremiumTypeSubscription()) ? void 0 : e.trialEndsAt) : null;
        }),
        { analyticsLocations: E } = (0, f.Ay)(d.A.SHARE_NITRO_EMBED);
    return s
        ? (0, r.jsx)(u.Wb, {
              isHorizontal: !o.Fr,
          })
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
                className: w.TU,
                children: (0, r.jsx)("div", {
                    className: w.Gq,
                }),
            });
}
