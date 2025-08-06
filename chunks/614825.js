(n.d(t, { Z: () => j }), n(953529), n(388685));
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
    m = n(963249),
    g = n(594174),
    E = n(78839),
    b = n(55935),
    y = n(70956),
    O = n(63063),
    v = n(74538),
    I = n(276444),
    T = n(857262),
    S = n(93237),
    A = n(786397),
    N = n(474936),
    C = n(981631),
    R = n(388032),
    P = n(271818);
function w(e, t, n) {
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
function D(e) {
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
                w(e, t, n[t]);
            }));
    }
    return e;
}
function L(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function x(e, t) {
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
let M = '???';
class k extends i.Component {
    renderTitle(e, t, n) {
        let { trialOffer: r } = this.props,
            i = g.default.getUser(r.user_id),
            o = null != i ? i.username : M,
            a = g.default.getUser(r.referrer_id),
            s = null != a ? a.username : M;
        if (e && void 0 === r.redeemed_at) return R.intl.formatToPlainString(R.t.Mptau7, { username: o });
        if (t) return n ? R.intl.string(R.t['9SNdf3']) : R.intl.formatToPlainString(R.t['H0+MxM'], { userName: s });
        switch (T.Z.getCurrentConfig({ location: 'renderTitle' }, { autoTrackExposure: !1 }).treatmentGroup) {
            case 1:
                return R.intl.formatToPlainString(R.t['L/leCw'], { receiver: o });
            case 2:
                return R.intl.formatToPlainString(R.t.febG6u, { receiver: o });
            case 3:
                return R.intl.formatToPlainString(R.t.zz1MYm, {
                    sender: s,
                    receiver: o
                });
            case 4:
                return R.intl.formatToPlainString(R.t.PVQOi4, { receiver: o });
            default:
                return R.intl.formatToPlainString(R.t.IiWKws, {
                    senderUserName: s,
                    recipientUserName: o
                });
        }
    }
    renderBody(e, t, n) {
        let { trialOffer: r } = this.props;
        if (e && !n && void 0 === r.redeemed_at) return R.intl.format(R.t.LwCwT0, { helpdeskArticle: O.Z.getArticleURL(C.BhN.REFERRAL_PROGRAM) });
        if (t) return null;
        let i = g.default.getUser(r.referrer_id),
            o = null != i ? i.username : M;
        switch (T.Z.getCurrentConfig({ location: 'renderBody' }, { autoTrackExposure: !1 }).treatmentGroup) {
            case 1:
                return R.intl.format(R.t.Ylrdnp, { sender: o });
            case 2:
                return R.intl.format(R.t['8XzXzc'], { sender: o });
            case 3:
                return R.intl.string(R.t.Ym5LAw);
            case 4:
                let a = Date.now(),
                    s = Math.floor((Date.parse(r.expires_at) - a) / y.Z.Millis.HOUR / 24);
                return R.intl.formatToPlainString(R.t['/3ho7u'], {
                    sender: o,
                    nDaysRemaining: s
                });
            default:
                return R.intl.string(R.t.lQLlOT);
        }
    }
    renderActions(e, t, n) {
        let { trialOffer: i, currentUser: o, analyticsLocations: a } = this.props,
            s = T.Z.getCurrentConfig({ location: 'renderActions' }, { autoTrackExposure: !1 }),
            l = {
                onClick: () => {
                    this.handleStartTrial(i, a);
                },
                color: d.zx.Colors.BRAND
            },
            c = o.id !== i.user_id || (0, v.I5)(o) || !o.verified || (0, A.B)(i),
            u = this.renderExpirationDate(e, t, n);
        return (
            (l.disabled = c),
            (0, r.jsxs)('div', {
                className: P.buttonContainer,
                children: [
                    (0, r.jsx)('div', {
                        children: (0, r.jsx)(
                            d.zx,
                            x(D({}, l), {
                                size: d.zx.Sizes.SMALL,
                                onClick: () => {
                                    (0, m.Z)({
                                        initialPlanId: null,
                                        subscriptionTier: N.Si.TIER_2,
                                        analyticsLocations: a,
                                        trialId: i.trial_id,
                                        referralTrialOfferId: i.id
                                    });
                                },
                                children: R.intl.string(R.t.O0etsL)
                            })
                        )
                    }),
                    4 !== s.treatmentGroup &&
                        (0, r.jsx)('div', {
                            className: P.metadata,
                            children: u
                        })
                ]
            })
        );
    }
    renderExpirationDate(e, t, n) {
        let { trialOffer: r, trialEndsAt: i } = this.props;
        if (void 0 !== r.redeemed_at && !n && null !== i) return R.intl.formatToPlainString(R.t.nP0ivb, { date: (0, b.vc)(l()(i), 'LL') });
        if (e || void 0 === r.expires_at) return null;
        let o = l()(r.expires_at);
        return t ? R.intl.formatToPlainString(R.t.PuSHfX, { date: (0, b.vc)(l()(o), 'LL') }) : (0, S.F6)(o.valueOf());
    }
    renderMedia() {
        return (0, r.jsx)('div', { className: P.referral });
    }
    render() {
        let { trialOffer: e, currentUser: t, recipientHasNitro: n } = this.props,
            i = (0, A.B)(e),
            o = t.id === e.referrer_id;
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
                        (0, r.jsx)(f.H, {
                            className: P.title,
                            children: this.renderTitle(n, i, o)
                        }),
                        (0, r.jsx)('div', {
                            className: P.tagline,
                            children: this.renderBody(n, i, o)
                        }),
                        (0, r.jsx)('div', {
                            className: P.actions,
                            children: this.renderActions(n, i, o)
                        })
                    ]
                })
            ]
        });
    }
    constructor(...e) {
        (super(...e),
            w(this, 'handleStartTrial', (e, t) => {
                (0, m.Z)({
                    initialPlanId: null,
                    subscriptionTier: N.Si.TIER_2,
                    analyticsLocations: t,
                    trialId: e.trial_id
                });
            }));
    }
}
function j(e) {
    let { userTrialOfferId: t, canRenderReferralEmbed: n } = e,
        { trialOffer: i, isResolving: o } = (0, u.cj)(
            [I.Z],
            () => ({
                trialOffer: n ? I.Z.getRelevantUserTrialOffer(t) : null,
                isResolving: !!n && I.Z.isResolving(t)
            }),
            [n, t]
        ),
        a = g.default.getCurrentUser(),
        s = (0, u.e7)([g.default], () => null != i && (0, v.I5)(void 0 !== a && i.user_id === a.id ? a : g.default.getUser(i.user_id))),
        l = (0, u.e7)([E.Z], () => {
            var e;
            return s ? (null == (e = E.Z.getPremiumTypeSubscription()) ? void 0 : e.trialEndsAt) : null;
        }),
        { analyticsLocations: d } = (0, h.ZP)(p.Z.SHARE_NITRO_EMBED);
    return o
        ? (0, r.jsx)(_.OR, { isHorizontal: !c.tq })
        : n && null != i && void 0 !== a
          ? (0, r.jsx)(
                k,
                D(
                    {
                        trialOffer: i,
                        currentUser: a,
                        recipientHasNitro: s,
                        trialEndsAt: l,
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
