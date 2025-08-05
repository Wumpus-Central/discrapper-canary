(n.d(t, { Z: () => M }), n(953529), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
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
    w = n(388032),
    R = n(271818);
function P(e, t, n) {
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
                P(e, t, n[t]);
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
let k = '???';
class j extends i.Component {
    renderTitle(e, t, n) {
        let { trialOffer: r } = this.props,
            i = g.default.getUser(r.user_id),
            a = null != i ? i.username : k,
            o = g.default.getUser(r.referrer_id),
            s = null != o ? o.username : k;
        if (e && void 0 === r.redeemed_at) return w.intl.formatToPlainString(w.t.Mptau7, { username: a });
        if (t) return n ? w.intl.string(w.t['9SNdf3']) : w.intl.formatToPlainString(w.t['H0+MxM'], { userName: s });
        switch (T.Z.getCurrentConfig({ location: 'renderTitle' }, { autoTrackExposure: !1 }).treatmentGroup) {
            case 1:
                return w.intl.formatToPlainString(w.t['L/leCw'], { receiver: a });
            case 2:
                return w.intl.formatToPlainString(w.t.febG6u, { receiver: a });
            case 3:
                return w.intl.formatToPlainString(w.t.zz1MYm, {
                    sender: s,
                    receiver: a
                });
            case 4:
                return w.intl.formatToPlainString(w.t.PVQOi4, { receiver: a });
            default:
                return w.intl.formatToPlainString(w.t.IiWKws, {
                    senderUserName: s,
                    recipientUserName: a
                });
        }
    }
    renderBody(e, t, n) {
        let { trialOffer: r } = this.props;
        if (e && !n && void 0 === r.redeemed_at) return w.intl.format(w.t.LwCwT0, { helpdeskArticle: O.Z.getArticleURL(C.BhN.REFERRAL_PROGRAM) });
        if (t) return null;
        let i = g.default.getUser(r.referrer_id),
            a = null != i ? i.username : k;
        switch (T.Z.getCurrentConfig({ location: 'renderBody' }, { autoTrackExposure: !1 }).treatmentGroup) {
            case 1:
                return w.intl.format(w.t.Ylrdnp, { sender: a });
            case 2:
                return w.intl.format(w.t['8XzXzc'], { sender: a });
            case 3:
                return w.intl.string(w.t.Ym5LAw);
            case 4:
                let o = Date.now(),
                    s = Math.floor((Date.parse(r.expires_at) - o) / y.Z.Millis.HOUR / 24);
                return w.intl.formatToPlainString(w.t['/3ho7u'], {
                    sender: a,
                    nDaysRemaining: s
                });
            default:
                return w.intl.string(w.t.lQLlOT);
        }
    }
    renderActions(e, t, n) {
        let { trialOffer: i, currentUser: a, analyticsLocations: o } = this.props,
            s = T.Z.getCurrentConfig({ location: 'renderActions' }, { autoTrackExposure: !1 }),
            l = {
                onClick: () => {
                    this.handleStartTrial(i, o);
                },
                color: d.zx.Colors.BRAND
            },
            c = a.id !== i.user_id || (0, v.I5)(a) || !a.verified || (0, A.B)(i),
            u = this.renderExpirationDate(e, t, n);
        return (
            (l.disabled = c),
            (0, r.jsxs)('div', {
                className: R.buttonContainer,
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
                                        analyticsLocations: o,
                                        trialId: i.trial_id,
                                        referralTrialOfferId: i.id
                                    });
                                },
                                children: w.intl.string(w.t.O0etsL)
                            })
                        )
                    }),
                    4 !== s.treatmentGroup &&
                        (0, r.jsx)('div', {
                            className: R.metadata,
                            children: u
                        })
                ]
            })
        );
    }
    renderExpirationDate(e, t, n) {
        let { trialOffer: r, trialEndsAt: i } = this.props;
        if (void 0 !== r.redeemed_at && !n && null !== i) return w.intl.formatToPlainString(w.t.nP0ivb, { date: (0, b.vc)(l()(i), 'LL') });
        if (e || void 0 === r.expires_at) return null;
        let a = l()(r.expires_at);
        return t ? w.intl.formatToPlainString(w.t.PuSHfX, { date: (0, b.vc)(l()(a), 'LL') }) : (0, S.F6)(a.valueOf());
    }
    renderMedia() {
        return (0, r.jsx)('div', { className: R.referral });
    }
    render() {
        let { trialOffer: e, currentUser: t, recipientHasNitro: n } = this.props,
            i = (0, A.B)(e),
            a = t.id === e.referrer_id;
        return (0, r.jsxs)('div', {
            className: o()(R.tile, R.container),
            children: [
                (0, r.jsx)('div', {
                    className: R.media,
                    children: this.renderMedia()
                }),
                (0, r.jsxs)('div', {
                    className: R.description,
                    children: [
                        (0, r.jsx)(f.H, {
                            className: R.title,
                            children: this.renderTitle(n, i, a)
                        }),
                        (0, r.jsx)('div', {
                            className: R.tagline,
                            children: this.renderBody(n, i, a)
                        }),
                        (0, r.jsx)('div', {
                            className: R.actions,
                            children: this.renderActions(n, i, a)
                        })
                    ]
                })
            ]
        });
    }
    constructor(...e) {
        (super(...e),
            P(this, 'handleStartTrial', (e, t) => {
                (0, m.Z)({
                    initialPlanId: null,
                    subscriptionTier: N.Si.TIER_2,
                    analyticsLocations: t,
                    trialId: e.trial_id
                });
            }));
    }
}
function M(e) {
    let { userTrialOfferId: t, canRenderReferralEmbed: n } = e,
        { trialOffer: i, isResolving: a } = (0, u.cj)(
            [I.Z],
            () => ({
                trialOffer: n ? I.Z.getRelevantUserTrialOffer(t) : null,
                isResolving: !!n && I.Z.isResolving(t)
            }),
            [n, t]
        ),
        o = g.default.getCurrentUser(),
        s = (0, u.e7)([g.default], () => null != i && (0, v.I5)(void 0 !== o && i.user_id === o.id ? o : g.default.getUser(i.user_id))),
        l = (0, u.e7)([E.Z], () => {
            var e;
            return s ? (null == (e = E.Z.getPremiumTypeSubscription()) ? void 0 : e.trialEndsAt) : null;
        }),
        { analyticsLocations: d } = (0, h.ZP)(p.Z.SHARE_NITRO_EMBED);
    return a
        ? (0, r.jsx)(_.OR, { isHorizontal: !c.tq })
        : n && null != i && void 0 !== o
          ? (0, r.jsx)(
                j,
                D(
                    {
                        trialOffer: i,
                        currentUser: o,
                        recipientHasNitro: s,
                        trialEndsAt: l,
                        analyticsLocations: d
                    },
                    e
                )
            )
          : (0, r.jsx)('div', {
                className: R.invalidWrapper,
                children: (0, r.jsx)('div', { className: R.invalid })
            });
}
