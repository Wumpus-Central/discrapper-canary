(n.d(t, { Z: () => R }), n(953529), n(388685));
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
    _ = n(963249),
    h = n(594174),
    b = n(78839),
    E = n(55935),
    C = n(70956),
    x = n(63063),
    v = n(74538),
    y = n(276444),
    O = n(857262),
    j = n(93237),
    I = n(786397),
    S = n(474936),
    T = n(981631),
    N = n(388032),
    P = n(271818);
function A(e, t, n) {
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
function w(e) {
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
                A(e, t, n[t]);
            }));
    }
    return e;
}
class Z extends i.Component {
    renderTitle(e, t, n) {
        let { trialOffer: r } = this.props,
            i = h.default.getUser(r.user_id),
            l = null != i ? i.username : '???',
            a = h.default.getUser(r.referrer_id),
            o = null != a ? a.username : '???';
        if (e && void 0 === r.redeemed_at) return N.intl.formatToPlainString(N.t.Mptau7, { username: l });
        if (t) return n ? N.intl.string(N.t['9SNdf3']) : N.intl.formatToPlainString(N.t['H0+MxM'], { userName: o });
        switch (O.Z.getCurrentConfig({ location: 'renderTitle' }, { autoTrackExposure: !1 }).treatmentGroup) {
            case 1:
                return N.intl.formatToPlainString(N.t['L/leCw'], { receiver: l });
            case 2:
                return N.intl.formatToPlainString(N.t.febG6u, { receiver: l });
            case 3:
                return N.intl.formatToPlainString(N.t.zz1MYm, {
                    sender: o,
                    receiver: l
                });
            case 4:
                return N.intl.formatToPlainString(N.t.PVQOi4, { receiver: l });
            default:
                return N.intl.formatToPlainString(N.t.IiWKws, {
                    senderUserName: o,
                    recipientUserName: l
                });
        }
    }
    renderBody(e, t, n) {
        let { trialOffer: r } = this.props;
        if (e && !n && void 0 === r.redeemed_at) return N.intl.format(N.t.LwCwT0, { helpdeskArticle: x.Z.getArticleURL(T.BhN.REFERRAL_PROGRAM) });
        if (t) return null;
        let i = h.default.getUser(r.referrer_id),
            l = null != i ? i.username : '???';
        switch (O.Z.getCurrentConfig({ location: 'renderBody' }, { autoTrackExposure: !1 }).treatmentGroup) {
            case 1:
                return N.intl.format(N.t.Ylrdnp, { sender: l });
            case 2:
                return N.intl.format(N.t['8XzXzc'], { sender: l });
            case 3:
                return N.intl.string(N.t.Ym5LAw);
            case 4:
                let a = Date.now(),
                    o = Math.floor((Date.parse(r.expires_at) - a) / C.Z.Millis.HOUR / 24);
                return N.intl.formatToPlainString(N.t['/3ho7u'], {
                    sender: l,
                    nDaysRemaining: o
                });
            default:
                return N.intl.string(N.t.lQLlOT);
        }
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
            u = o.id !== a.user_id || (0, v.I5)(o) || !o.verified || (0, I.B)(a),
            p = this.renderExpirationDate(e, t, n);
        return (
            (c.disabled = u),
            (0, r.jsxs)('div', {
                className: P.buttonContainer,
                children: [
                    (0, r.jsx)('div', {
                        children: (0, r.jsx)(
                            d.zx,
                            ((i = w({}, c)),
                            (l = l =
                                {
                                    size: d.zx.Sizes.SMALL,
                                    onClick: () => {
                                        (0, _.Z)({
                                            initialPlanId: null,
                                            subscriptionTier: S.Si.TIER_2,
                                            analyticsLocations: s,
                                            trialId: a.trial_id,
                                            referralTrialOfferId: a.id
                                        });
                                    },
                                    children: N.intl.string(N.t.O0etsL)
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
                        className: P.metadata,
                        children: p
                    })
                ]
            })
        );
    }
    renderExpirationDate(e, t, n) {
        let { trialOffer: r, trialEndsAt: i } = this.props;
        if (void 0 !== r.redeemed_at && !n && null !== i) return N.intl.formatToPlainString(N.t.nP0ivb, { date: (0, E.vc)(s()(i), 'LL') });
        if (e || void 0 === r.expires_at) return null;
        let l = s()(r.expires_at);
        return t ? N.intl.formatToPlainString(N.t.PuSHfX, { date: (0, E.vc)(s()(l), 'LL') }) : (0, j.F6)(l.valueOf());
    }
    renderMedia() {
        return (0, r.jsx)('div', { className: P.referral });
    }
    render() {
        let { trialOffer: e, currentUser: t, recipientHasNitro: n } = this.props,
            i = (0, I.B)(e),
            l = t.id === e.referrer_id;
        return (0, r.jsxs)('div', {
            className: a()(P.tile, P.container),
            children: [
                (0, r.jsx)('div', {
                    className: P.media,
                    children: this.renderMedia()
                }),
                (0, r.jsxs)('div', {
                    className: P.description,
                    children: [
                        (0, r.jsx)(p.H, {
                            className: P.title,
                            children: this.renderTitle(n, i, l)
                        }),
                        (0, r.jsx)('div', {
                            className: P.tagline,
                            children: this.renderBody(n, i, l)
                        }),
                        (0, r.jsx)('div', {
                            className: P.actions,
                            children: this.renderActions(n, i, l)
                        })
                    ]
                })
            ]
        });
    }
    constructor(...e) {
        (super(...e),
            A(this, 'handleStartTrial', (e, t) => {
                (0, _.Z)({
                    initialPlanId: null,
                    subscriptionTier: S.Si.TIER_2,
                    analyticsLocations: t,
                    trialId: e.trial_id
                });
            }));
    }
}
function R(e) {
    let { userTrialOfferId: t, canRenderReferralEmbed: n } = e,
        { trialOffer: i, isResolving: l } = (0, u.cj)(
            [y.Z],
            () => ({
                trialOffer: n ? y.Z.getRelevantUserTrialOffer(t) : null,
                isResolving: !!n && y.Z.isResolving(t)
            }),
            [n, t]
        ),
        a = h.default.getCurrentUser(),
        o = (0, u.e7)([h.default], () => null != i && (0, v.I5)(void 0 !== a && i.user_id === a.id ? a : h.default.getUser(i.user_id))),
        s = (0, u.e7)([b.Z], () => {
            var e;
            return o ? (null == (e = b.Z.getPremiumTypeSubscription()) ? void 0 : e.trialEndsAt) : null;
        }),
        { analyticsLocations: d } = (0, g.ZP)(f.Z.SHARE_NITRO_EMBED);
    return l
        ? (0, r.jsx)(m.OR, { isHorizontal: !c.tq })
        : n && null != i && void 0 !== a
          ? (0, r.jsx)(
                Z,
                w(
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
                className: P.invalidWrapper,
                children: (0, r.jsx)('div', { className: P.invalid })
            });
}
