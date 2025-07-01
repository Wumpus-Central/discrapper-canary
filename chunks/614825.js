(n.d(t, { Z: () => A }), n(953529), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(913527),
    s = n.n(o),
    c = n(873546),
    u = n(442837),
    d = n(481060),
    p = n(568836),
    m = n(100527),
    f = n(906732),
    g = n(963249),
    _ = n(594174),
    h = n(78839),
    b = n(55935),
    E = n(63063),
    y = n(74538),
    C = n(276444),
    x = n(93237),
    v = n(786397),
    O = n(474936),
    j = n(981631),
    I = n(388032),
    S = n(271818);
function T(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function N(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                T(e, t, n[t]);
            }));
    }
    return e;
}
class P extends i.Component {
    renderTitle(e, t, n) {
        let { trialOffer: r } = this.props,
            i = _.default.getUser(r.user_id),
            l = null != i ? i.username : '???',
            a = _.default.getUser(r.referrer_id),
            o = null != a ? a.username : '???';
        return e && void 0 === r.redeemed_at
            ? I.intl.formatToPlainString(I.t.Mptau7, { username: l })
            : t
              ? n
                  ? I.intl.string(I.t['9SNdf3'])
                  : I.intl.formatToPlainString(I.t['H0+MxM'], { userName: o })
              : I.intl.formatToPlainString(I.t.IiWKws, {
                    senderUserName: o,
                    recipientUserName: l
                });
    }
    renderBody(e, t, n) {
        let { trialOffer: r } = this.props;
        return e && !n && void 0 === r.redeemed_at ? I.intl.format(I.t.LwCwT0, { helpdeskArticle: E.Z.getArticleURL(j.BhN.REFERRAL_PROGRAM) }) : t ? null : I.intl.string(I.t.lQLlOT);
    }
    renderActions(e, t, n) {
        var i, l;
        let { trialOffer: a, currentUser: o, analyticsLocations: s } = this.props,
            c = {
                onClick: () => {
                    this.handleStartTrial(a, s);
                },
                color: d.zxk.Colors.BRAND
            },
            u = o.id !== a.user_id || (0, y.I5)(o) || !o.verified || (0, v.B)(a),
            p = this.renderExpirationDate(e, t, n);
        return (
            (c.disabled = u),
            (0, r.jsxs)('div', {
                className: S.buttonContainer,
                children: [
                    (0, r.jsx)('div', {
                        children: (0, r.jsx)(
                            d.zxk,
                            ((i = N({}, c)),
                            (l = l =
                                {
                                    size: d.zxk.Sizes.SMALL,
                                    onClick: () => {
                                        (0, g.Z)({
                                            initialPlanId: null,
                                            subscriptionTier: O.Si.TIER_2,
                                            analyticsLocations: s,
                                            trialId: a.trial_id,
                                            referralTrialOfferId: a.id
                                        });
                                    },
                                    children: I.intl.string(I.t.O0etsL)
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(l)).forEach(function (e) {
                                      Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                                  }),
                            i)
                        )
                    }),
                    (0, r.jsx)('div', {
                        className: S.metadata,
                        children: p
                    })
                ]
            })
        );
    }
    renderExpirationDate(e, t, n) {
        let { trialOffer: r, trialEndsAt: i } = this.props;
        if (void 0 !== r.redeemed_at && !n && null !== i) return I.intl.formatToPlainString(I.t.nP0ivb, { date: (0, b.vc)(s()(i), 'LL') });
        if (e || void 0 === r.expires_at) return null;
        let l = s()(r.expires_at);
        return t ? I.intl.formatToPlainString(I.t.PuSHfX, { date: (0, b.vc)(s()(l), 'LL') }) : (0, x.F6)(l.valueOf());
    }
    renderMedia() {
        return (0, r.jsx)('div', { className: S.referral });
    }
    render() {
        let { trialOffer: e, currentUser: t, recipientHasNitro: n } = this.props,
            i = (0, v.B)(e),
            l = t.id === e.referrer_id;
        return (0, r.jsxs)('div', {
            className: a()(S.tile, S.container),
            children: [
                (0, r.jsx)('div', {
                    className: S.media,
                    children: this.renderMedia()
                }),
                (0, r.jsxs)('div', {
                    className: S.description,
                    children: [
                        (0, r.jsx)(d.H, {
                            className: S.title,
                            children: this.renderTitle(n, i, l)
                        }),
                        (0, r.jsx)('div', {
                            className: S.tagline,
                            children: this.renderBody(n, i, l)
                        }),
                        (0, r.jsx)('div', {
                            className: S.actions,
                            children: this.renderActions(n, i, l)
                        })
                    ]
                })
            ]
        });
    }
    constructor(...e) {
        (super(...e),
            T(this, 'handleStartTrial', (e, t) => {
                (0, g.Z)({
                    initialPlanId: null,
                    subscriptionTier: O.Si.TIER_2,
                    analyticsLocations: t,
                    trialId: e.trial_id
                });
            }));
    }
}
function A(e) {
    let { userTrialOfferId: t, canRenderReferralEmbed: n } = e,
        { trialOffer: i, isResolving: l } = (0, u.cj)(
            [C.Z],
            () => ({
                trialOffer: n ? C.Z.getRelevantUserTrialOffer(t) : null,
                isResolving: !!n && C.Z.isResolving(t)
            }),
            [n, t]
        ),
        a = _.default.getCurrentUser(),
        o = (0, u.e7)([_.default], () => null != i && (0, y.I5)(void 0 !== a && i.user_id === a.id ? a : _.default.getUser(i.user_id))),
        s = (0, u.e7)([h.ZP], () => {
            var e;
            return o ? (null == (e = h.ZP.getPremiumTypeSubscription()) ? void 0 : e.trialEndsAt) : null;
        }),
        { analyticsLocations: d } = (0, f.ZP)(m.Z.SHARE_NITRO_EMBED);
    return l
        ? (0, r.jsx)(p.OR, { isHorizontal: !c.tq })
        : n && null != i && void 0 !== a
          ? (0, r.jsx)(
                P,
                N(
                    {
                        trialOffer: i,
                        currentUser: a,
                        recipientHasNitro: o,
                        trialEndsAt: s,
                        analyticsLocations: d
                    },
                    e
                )
            )
          : (0, r.jsx)('div', {
                className: S.invalidWrapper,
                children: (0, r.jsx)('div', { className: S.invalid })
            });
}
