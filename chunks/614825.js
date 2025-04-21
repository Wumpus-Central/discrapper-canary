n.d(t, { Z: () => A }), n(953529), n(388685);
var r = n(200651),
    i = n(192379),
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
    h = n(963249),
    g = n(594174),
    _ = n(78839),
    b = n(55935),
    x = n(63063),
    y = n(74538),
    v = n(276444),
    E = n(93237),
    O = n(786397),
    j = n(474936),
    C = n(981631),
    S = n(388032),
    I = n(271818);
function N(e, t, n) {
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
function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                N(e, t, n[t]);
            });
    }
    return e;
}
class P extends i.Component {
    renderTitle(e, t, n) {
        let { trialOffer: r } = this.props,
            i = g.default.getUser(r.user_id),
            l = null != i ? i.username : '???',
            a = g.default.getUser(r.referrer_id),
            o = null != a ? a.username : '???';
        return e && void 0 === r.redeemed_at
            ? S.intl.formatToPlainString(S.t.Mptau7, { username: l })
            : t
              ? n
                  ? S.intl.string(S.t['9SNdf3'])
                  : S.intl.formatToPlainString(S.t['H0+MxM'], { userName: o })
              : S.intl.formatToPlainString(S.t.IiWKws, {
                    senderUserName: o,
                    recipientUserName: l
                });
    }
    renderBody(e, t, n) {
        let { trialOffer: r } = this.props;
        return e && !n && void 0 === r.redeemed_at ? S.intl.format(S.t.LwCwT0, { helpdeskArticle: x.Z.getArticleURL(C.BhN.REFERRAL_PROGRAM) }) : t ? null : S.intl.string(S.t.lQLlOT);
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
            u = o.id !== a.user_id || (0, y.I5)(o) || !o.verified || (0, O.B)(a),
            p = this.renderExpirationDate(e, t, n);
        return (
            (c.disabled = u),
            (0, r.jsxs)('div', {
                className: I.buttonContainer,
                children: [
                    (0, r.jsx)('div', {
                        children: (0, r.jsx)(
                            d.zxk,
                            ((i = T({}, c)),
                            (l = l =
                                {
                                    size: d.zxk.Sizes.SMALL,
                                    onClick: () => {
                                        (0, h.Z)({
                                            initialPlanId: null,
                                            subscriptionTier: j.Si.TIER_2,
                                            analyticsLocations: s,
                                            trialId: a.trial_id,
                                            referralTrialOfferId: a.id
                                        });
                                    },
                                    children: S.intl.string(S.t.O0etsL)
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
                        className: I.metadata,
                        children: p
                    })
                ]
            })
        );
    }
    renderExpirationDate(e, t, n) {
        let { trialOffer: r, trialEndsAt: i } = this.props;
        if (void 0 !== r.redeemed_at && !n && null !== i) return S.intl.formatToPlainString(S.t.nP0ivb, { date: (0, b.vc)(s()(i), 'LL') });
        if (e || void 0 === r.expires_at) return null;
        let l = s()(r.expires_at);
        return t ? S.intl.formatToPlainString(S.t.PuSHfX, { date: (0, b.vc)(s()(l), 'LL') }) : (0, E.F)(l.valueOf());
    }
    renderMedia() {
        return (0, r.jsx)('div', { className: I.referral });
    }
    render() {
        let { trialOffer: e, currentUser: t, recipientHasNitro: n } = this.props,
            i = (0, O.B)(e),
            l = t.id === e.referrer_id;
        return (0, r.jsxs)('div', {
            className: a()(I.tile, I.container),
            children: [
                (0, r.jsx)('div', {
                    className: I.media,
                    children: this.renderMedia()
                }),
                (0, r.jsxs)('div', {
                    className: I.description,
                    children: [
                        (0, r.jsx)(d.H, {
                            className: I.title,
                            children: this.renderTitle(n, i, l)
                        }),
                        (0, r.jsx)('div', {
                            className: I.tagline,
                            children: this.renderBody(n, i, l)
                        }),
                        (0, r.jsx)('div', {
                            className: I.actions,
                            children: this.renderActions(n, i, l)
                        })
                    ]
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            N(this, 'handleStartTrial', (e, t) => {
                (0, h.Z)({
                    initialPlanId: null,
                    subscriptionTier: j.Si.TIER_2,
                    analyticsLocations: t,
                    trialId: e.trial_id
                });
            });
    }
}
function A(e) {
    let { userTrialOfferId: t, canRenderReferralEmbed: n } = e,
        { trialOffer: i, isResolving: l } = (0, u.cj)(
            [v.Z],
            () => ({
                trialOffer: n ? v.Z.getRelevantUserTrialOffer(t) : null,
                isResolving: !!n && v.Z.isResolving(t)
            }),
            [n, t]
        ),
        a = g.default.getCurrentUser(),
        o = (0, u.e7)([g.default], () => null != i && (0, y.I5)(void 0 !== a && i.user_id === a.id ? a : g.default.getUser(i.user_id))),
        s = (0, u.e7)([_.ZP], () => {
            var e;
            return o ? (null == (e = _.ZP.getPremiumTypeSubscription()) ? void 0 : e.trialEndsAt) : null;
        }),
        { analyticsLocations: d } = (0, f.ZP)(m.Z.SHARE_NITRO_EMBED);
    return l
        ? (0, r.jsx)(p.OR, { isHorizontal: !c.tq })
        : n && null != i && void 0 !== a
          ? (0, r.jsx)(
                P,
                T(
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
                className: I.invalidWrapper,
                children: (0, r.jsx)('div', { className: I.invalid })
            });
}
