(n.d(t, { Z: () => w }), n(953529), n(388685));
var r = n(255367),
    i = n(73800),
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
    g = n(906732),
    h = n(963249),
    _ = n(594174),
    b = n(78839),
    E = n(55935),
    x = n(63063),
    v = n(74538),
    C = n(276444),
    y = n(93237),
    O = n(786397),
    j = n(474936),
    I = n(981631),
    S = n(388032),
    T = n(271818);
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
function P(e) {
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
                N(e, t, n[t]);
            }));
    }
    return e;
}
class A extends i.Component {
    renderTitle(e, t, n) {
        let { trialOffer: r } = this.props,
            i = _.default.getUser(r.user_id),
            l = null != i ? i.username : '???',
            a = _.default.getUser(r.referrer_id),
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
        return e && !n && void 0 === r.redeemed_at ? S.intl.format(S.t.LwCwT0, { helpdeskArticle: x.Z.getArticleURL(I.BhN.REFERRAL_PROGRAM) }) : t ? null : S.intl.string(S.t.lQLlOT);
    }
    renderActions(e, t, n) {
        var i, l;
        let { trialOffer: a, currentUser: o, analyticsLocations: s } = this.props,
            c = {
                onClick: () => {
                    this.handleStartTrial(a, s);
                },
                color: d.zx.Colors.BRAND
            },
            u = o.id !== a.user_id || (0, v.I5)(o) || !o.verified || (0, O.B)(a),
            p = this.renderExpirationDate(e, t, n);
        return (
            (c.disabled = u),
            (0, r.jsxs)('div', {
                className: T.buttonContainer,
                children: [
                    (0, r.jsx)('div', {
                        children: (0, r.jsx)(
                            d.zx,
                            ((i = P({}, c)),
                            (l = l =
                                {
                                    size: d.zx.Sizes.SMALL,
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
                        className: T.metadata,
                        children: p
                    })
                ]
            })
        );
    }
    renderExpirationDate(e, t, n) {
        let { trialOffer: r, trialEndsAt: i } = this.props;
        if (void 0 !== r.redeemed_at && !n && null !== i) return S.intl.formatToPlainString(S.t.nP0ivb, { date: (0, E.vc)(s()(i), 'LL') });
        if (e || void 0 === r.expires_at) return null;
        let l = s()(r.expires_at);
        return t ? S.intl.formatToPlainString(S.t.PuSHfX, { date: (0, E.vc)(s()(l), 'LL') }) : (0, y.F6)(l.valueOf());
    }
    renderMedia() {
        return (0, r.jsx)('div', { className: T.referral });
    }
    render() {
        let { trialOffer: e, currentUser: t, recipientHasNitro: n } = this.props,
            i = (0, O.B)(e),
            l = t.id === e.referrer_id;
        return (0, r.jsxs)('div', {
            className: a()(T.tile, T.container),
            children: [
                (0, r.jsx)('div', {
                    className: T.media,
                    children: this.renderMedia()
                }),
                (0, r.jsxs)('div', {
                    className: T.description,
                    children: [
                        (0, r.jsx)(p.H, {
                            className: T.title,
                            children: this.renderTitle(n, i, l)
                        }),
                        (0, r.jsx)('div', {
                            className: T.tagline,
                            children: this.renderBody(n, i, l)
                        }),
                        (0, r.jsx)('div', {
                            className: T.actions,
                            children: this.renderActions(n, i, l)
                        })
                    ]
                })
            ]
        });
    }
    constructor(...e) {
        (super(...e),
            N(this, 'handleStartTrial', (e, t) => {
                (0, h.Z)({
                    initialPlanId: null,
                    subscriptionTier: j.Si.TIER_2,
                    analyticsLocations: t,
                    trialId: e.trial_id
                });
            }));
    }
}
function w(e) {
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
        o = (0, u.e7)([_.default], () => null != i && (0, v.I5)(void 0 !== a && i.user_id === a.id ? a : _.default.getUser(i.user_id))),
        s = (0, u.e7)([b.Z], () => {
            var e;
            return o ? (null == (e = b.Z.getPremiumTypeSubscription()) ? void 0 : e.trialEndsAt) : null;
        }),
        { analyticsLocations: d } = (0, g.ZP)(f.Z.SHARE_NITRO_EMBED);
    return l
        ? (0, r.jsx)(m.OR, { isHorizontal: !c.tq })
        : n && null != i && void 0 !== a
          ? (0, r.jsx)(
                A,
                P(
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
                className: T.invalidWrapper,
                children: (0, r.jsx)('div', { className: T.invalid })
            });
}
