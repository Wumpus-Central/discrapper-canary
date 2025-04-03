n.d(t, { Z: () => A }), n(266796), n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    l = n.n(a),
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
    E = n(276444),
    v = n(93237),
    O = n(786397),
    N = n(474936),
    j = n(981631),
    C = n(388032),
    I = n(271818);
function S(e, t, n) {
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
                S(e, t, n[t]);
            });
    }
    return e;
}
class P extends i.Component {
    renderTitle(e, t, n) {
        let { trialOffer: r } = this.props,
            i = g.default.getUser(r.user_id),
            a = null != i ? i.username : '???',
            l = g.default.getUser(r.referrer_id),
            o = null != l ? l.username : '???';
        return e && void 0 === r.redeemed_at
            ? C.NW.formatToPlainString(C.t.Mptau7, { username: a })
            : t
              ? n
                  ? C.NW.string(C.t['9SNdf3'])
                  : C.NW.formatToPlainString(C.t['H0+MxM'], { userName: o })
              : C.NW.formatToPlainString(C.t.IiWKws, {
                    senderUserName: o,
                    recipientUserName: a
                });
    }
    renderBody(e, t, n) {
        let { trialOffer: r } = this.props;
        return e && !n && void 0 === r.redeemed_at ? C.NW.format(C.t.LwCwT0, { helpdeskArticle: x.Z.getArticleURL(j.BhN.REFERRAL_PROGRAM) }) : t ? null : C.NW.string(C.t.lQLlOT);
    }
    renderActions(e, t, n) {
        var i, a;
        let { trialOffer: l, currentUser: o, analyticsLocations: s } = this.props,
            c = {
                onClick: () => {
                    this.handleStartTrial(l, s);
                },
                color: d.zxk.Colors.BRAND
            },
            u = o.id !== l.user_id || (0, y.I5)(o) || !o.verified || (0, O.B)(l),
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
                            (a = a =
                                {
                                    size: d.zxk.Sizes.SMALL,
                                    onClick: () => {
                                        (0, h.Z)({
                                            initialPlanId: null,
                                            subscriptionTier: N.Si.TIER_2,
                                            analyticsLocations: s,
                                            trialId: l.trial_id,
                                            referralTrialOfferId: l.id
                                        });
                                    },
                                    children: C.NW.string(C.t.O0etsL)
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(a)).forEach(function (e) {
                                      Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(a, e));
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
        if (void 0 !== r.redeemed_at && !n && null !== i) return C.NW.formatToPlainString(C.t.nP0ivb, { date: (0, b.vc)(s()(i), 'LL') });
        if (e || void 0 === r.expires_at) return null;
        let a = new Date('2025-03-27T10:00:00.000-07:00');
        return t ? C.NW.formatToPlainString(C.t.PuSHfX, { date: (0, b.vc)(s()(a), 'LL') }) : (0, v.F)(a.valueOf());
    }
    renderMedia() {
        return (0, r.jsx)('div', { className: I.referral });
    }
    render() {
        let { trialOffer: e, currentUser: t, recipientHasNitro: n } = this.props,
            i = (0, O.B)(e),
            a = t.id === e.referrer_id;
        return (0, r.jsxs)('div', {
            className: l()(I.tile, I.container),
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
                            children: this.renderTitle(n, i, a)
                        }),
                        (0, r.jsx)('div', {
                            className: I.tagline,
                            children: this.renderBody(n, i, a)
                        }),
                        (0, r.jsx)('div', {
                            className: I.actions,
                            children: this.renderActions(n, i, a)
                        })
                    ]
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            S(this, 'handleStartTrial', (e, t) => {
                (0, h.Z)({
                    initialPlanId: null,
                    subscriptionTier: N.Si.TIER_2,
                    analyticsLocations: t,
                    trialId: e.trial_id
                });
            });
    }
}
function A(e) {
    let { userTrialOfferId: t, canRenderReferralEmbed: n } = e,
        { trialOffer: i, isResolving: a } = (0, u.cj)(
            [E.Z],
            () => ({
                trialOffer: n ? E.Z.getRelevantUserTrialOffer(t) : null,
                isResolving: !!n && E.Z.isResolving(t)
            }),
            [n, t]
        ),
        l = g.default.getCurrentUser(),
        o = (0, u.e7)([g.default], () => null != i && (0, y.I5)(void 0 !== l && i.user_id === l.id ? l : g.default.getUser(i.user_id))),
        s = (0, u.e7)([_.ZP], () => {
            var e;
            return o ? (null == (e = _.ZP.getPremiumTypeSubscription()) ? void 0 : e.trialEndsAt) : null;
        }),
        { analyticsLocations: d } = (0, f.ZP)(m.Z.SHARE_NITRO_EMBED);
    return a
        ? (0, r.jsx)(p.OR, { isHorizontal: !c.tq })
        : n && null != i && void 0 !== l
          ? (0, r.jsx)(
                P,
                T(
                    {
                        trialOffer: i,
                        currentUser: l,
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
