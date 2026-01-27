n.d(t, {
    A: () => D,
});
var r = n(627968),
    i = n(64700),
    l = n(989349),
    a = n.n(l),
    s = n(607399),
    o = n(311907),
    c = n(397927),
    u = n(863574),
    d = n(793574),
    p = n(688810),
    m = n(888675),
    f = n(532794),
    g = n(287809),
    h = n(166403),
    _ = n(954571),
    b = n(405269),
    A = n(975571),
    y = n(927578),
    v = n(851746),
    x = n(727949),
    O = n(664654),
    E = n(303682),
    j = n(857586),
    C = n(378135),
    I = n(788868),
    S = n(652215),
    T = n(985018),
    N = n(26875),
    P = n(954457);

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
class R extends i.Component {
    getSystemMessageHeader() {
        let e = g.default.getUser(this.trialOffer.user_id);
        if (this.isSender)
            return T.intl.format(T.t["4/EMxl"], {
                receiver: null == e ? void 0 : e.username,
            });
        let t = g.default.getUser(this.trialOffer.referrer_id),
            n = (null == t ? void 0 : t.username) !== void 0 ? t.username : "";
        return T.intl.format(T.t.yisueA, {
            sender: n,
            helpdeskArticle: A.A.getArticleURL(S.MVz.REFERRAL_PROGRAM),
        });
    }
    getTitleText() {
        let e = g.default.getUser(this.trialOffer.user_id),
            t = null != e ? e.username : "???",
            n = g.default.getUser(this.trialOffer.referrer_id),
            r = null != n ? n.username : "???";
        return this.recipientHasNitro && void 0 === this.trialOffer.redeemed_at
            ? T.intl.formatToPlainString(T.t["Mptau/"], {
                  username: t,
              })
            : this.offerExpired
              ? this.isSender
                  ? T.intl.string(T.t["9SNdf4"])
                  : T.intl.formatToPlainString(T.t["H0+MxK"], {
                        userName: r,
                    })
              : T.intl.formatToPlainString(T.t.IiWKwg, {
                    senderUserName: r,
                    recipientUserName: t,
                });
    }
    getBodyText() {
        return this.recipientHasNitro && !this.isSender && void 0 === this.trialOffer.redeemed_at
            ? T.intl.format(T.t.LwCwT9, {
                  helpdeskArticle: A.A.getArticleURL(S.MVz.REFERRAL_PROGRAM),
              })
            : this.offerExpired
              ? null
              : T.intl.string(T.t.lQLlOb);
    }
    renderActions() {
        let e =
                this.currentUser.id !== this.trialOffer.user_id ||
                (0, y.TW)(this.currentUser) ||
                !this.currentUser.verified ||
                (0, C.P)(this.trialOffer),
            t = this.renderExpirationDate();
        return (0, r.jsxs)("div", {
            className: N.UD,
            children: [
                (0, r.jsx)("div", {
                    children: (0, r.jsx)(c.Button, {
                        variant: "primary",
                        disabled: e,
                        size: "sm",
                        text: T.intl.string(T.t.O0etsF),
                        onClick: () => {
                            (0, f.A)({
                                initialPlanId: null,
                                subscriptionTier: I.pe.TIER_2,
                                analyticsLocations: this.analyticsLocations,
                                trialId: this.trialOffer.trial_id,
                                referralTrialOfferId: this.trialOffer.id,
                            });
                        },
                    }),
                }),
                (0, r.jsx)("div", {
                    className: N.yu,
                    children: t,
                }),
            ],
        });
    }
    renderExpirationDate() {
        let { trialOffer: e, trialEndsAt: t } = this.props;
        if (void 0 !== e.redeemed_at && !this.isSender && null !== t)
            return T.intl.formatToPlainString(T.t.nP0ivR, {
                date: (0, b.i$)(a()(t), "LL"),
            });
        if (this.recipientHasNitro || void 0 === e.expires_at) return null;
        let n = a()(e.expires_at);
        return this.offerExpired
            ? T.intl.formatToPlainString(T.t.PuSHfU, {
                  date: (0, b.i$)(a()(n), "LL"),
              })
            : (0, x.GQ)(n.valueOf());
    }
    renderMedia() {
        return (0, r.jsx)("div", {
            className: N.Qj,
        });
    }
    render() {
        let e = () => {
                let e = g.default.getUser(this.trialOffer.user_id),
                    t = null != e ? e.username : "???",
                    n = g.default.getUser(this.trialOffer.referrer_id),
                    r = null != n ? n.username : "???";
                if (this.isSender)
                    if (this.recipientHasNitro && void 0 === this.trialOffer.redeemed_at)
                        return {
                            headerText: T.intl.formatToPlainString(T.t.qABVhL, {
                                recipient: t,
                            }),
                            bodyText: T.intl.formatToPlainString(T.t.u7hyDx, {
                                helpdeskArticle: A.A.getArticleURL(S.MVz.REFERRAL_PROGRAM),
                            }),
                        };
                    else
                        return {
                            headerText: T.intl.string(T.t.LAGZfq),
                            bodyText: T.intl.formatToPlainString(T.t["0gnFLC"], {
                                recipient: t,
                            }),
                        };
                return this.offerExpired
                    ? {
                          headerText: T.intl.string(T.t.nYvpUl),
                          bodyText: T.intl.formatToPlainString(T.t.wJdBEZ, {
                              sender: r,
                          }),
                      }
                    : {
                          headerText: T.intl.string(T.t.HtTvXA),
                          bodyText: T.intl.formatToPlainString(T.t.wOQByA, {
                              sender: r,
                          }),
                      };
            },
            t = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(j.A, {
                        subscriptionTier: I.pe.TIER_2,
                        buttonTextOverride: T.intl.string(T.t.O0etsF),
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
            i = (0, r.jsx)(c.Button, {
                variant: "primary",
                disabled: !1,
                size: "md",
                onClick: () =>
                    ((e) => {
                        let { analyticsLocations: t, startingScreen: i } = e;
                        _.default.track(S.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, {
                            location_stack: t,
                        }),
                            (0, c.mMO)(async () => {
                                let { default: e } = await Promise.resolve().then(n.bind(n, 303682));
                                return (t) => {
                                    var n, l;
                                    return (0, r.jsx)(
                                        e,
                                        ((n = (function (e) {
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
                                        })({}, t)),
                                        (l = l =
                                            {
                                                startingScreen: i,
                                            }),
                                        Object.getOwnPropertyDescriptors
                                            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l))
                                            : (function (e, t) {
                                                  var n = Object.keys(e);
                                                  if (Object.getOwnPropertySymbols) {
                                                      var r = Object.getOwnPropertySymbols(e);
                                                      n.push.apply(n, r);
                                                  }
                                                  return n;
                                              })(Object(l)).forEach(function (e) {
                                                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e));
                                              }),
                                        n),
                                    );
                                };
                            });
                    })({
                        analyticsLocations: [],
                        startingScreen:
                            this.referralsSent.size === O.Z
                                ? E.SelectFriendsModalScreens.REMINDER
                                : E.SelectFriendsModalScreens.SELECT_FRIENDS,
                    }),
                text: T.intl.string(T.t.Lm2nFc),
            }),
            l = this.isSender ? i : t,
            a = (0, r.jsx)(c._V3, {
                src: P.A,
                height: 84,
                width: 144,
                className: N.ms,
            }),
            { headerText: s, bodyText: o } = e();
        return (0, r.jsxs)(m.A, {
            className: N.SB,
            iconNode: (0, r.jsx)(c.tvc, {
                size: "md",
                color: "currentColor",
            }),
            iconContainerClassName: N.J5,
            compact: this.compact,
            children: [
                (0, r.jsx)(c.Text, {
                    variant: "text-md/medium",
                    color: "text-strong",
                    children: this.getSystemMessageHeader(),
                }),
                (0, r.jsxs)("div", {
                    className: N.i2,
                    children: [
                        a,
                        (0, r.jsxs)("div", {
                            className: N.KX,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: N.xJ,
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
                                    className: N.ox,
                                    children: l,
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
            (this.offerExpired = (0, C.P)(this.trialOffer)),
            (this.isSender = this.currentUser.id === this.trialOffer.referrer_id);
    }
}

function D(e) {
    let { userTrialOfferId: t, canRenderReferralEmbed: n, compact: i } = e,
        {
            trialOffer: l,
            isResolving: a,
            referralsSent: c,
        } = (0, o.cf)(
            [v.A],
            () => ({
                trialOffer: n ? v.A.getRelevantUserTrialOffer(t) : null,
                isResolving: !!n && v.A.isResolving(t),
                referralsSent: v.A.getRecipientStatus(),
            }),
            [n, t],
        ),
        m = g.default.getCurrentUser(),
        f = (0, o.bG)(
            [g.default],
            () => null != l && (0, y.TW)(void 0 !== m && l.user_id === m.id ? m : g.default.getUser(l.user_id)),
        ),
        _ = (0, o.bG)([h.A], () => {
            var e;
            return f ? (null == (e = h.A.getPremiumTypeSubscription()) ? void 0 : e.trialEndsAt) : null;
        }),
        { analyticsLocations: b } = (0, p.Ay)(d.A.SHARE_NITRO_EMBED);
    return a
        ? (0, r.jsx)(u.Wb, {
              isHorizontal: !s.Fr,
          })
        : n && null != l && void 0 !== m
          ? (0, r.jsx)(R, {
                trialOffer: l,
                referralsSent: c,
                currentUser: m,
                recipientHasNitro: f,
                trialEndsAt: _,
                analyticsLocations: b,
                compact: i,
            })
          : (0, r.jsx)("div", {
                className: N.TU,
                children: (0, r.jsx)("div", {
                    className: N.Gq,
                }),
            });
}
