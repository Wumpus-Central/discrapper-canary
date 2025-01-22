n.d(t, {
    Z: function () {
        return j;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(913527),
    s = n.n(o),
    c = n(873546),
    u = n(442837),
    d = n(481060),
    m = n(568836),
    h = n(100527),
    f = n(906732),
    p = n(963249),
    _ = n(594174),
    g = n(78839),
    E = n(55935),
    C = n(63063),
    I = n(74538),
    x = n(276444),
    N = n(786397),
    v = n(474936),
    T = n(981631),
    S = n(388032),
    A = n(806320);
class b extends r.Component {
    renderTitle(e, t, n) {
        let { trialOffer: i } = this.props,
            r = _.default.getUser(i.user_id),
            l = null != r ? r.username : '???',
            a = _.default.getUser(i.referrer_id),
            o = null != a ? a.username : '???';
        if (e && void 0 === i.redeemed_at) return S.intl.formatToPlainString(S.t.Mptau7, { username: l });
        if (t) return n ? S.intl.string(S.t['9SNdf3']) : S.intl.formatToPlainString(S.t['H0+MxM'], { userName: o });
        return S.intl.formatToPlainString(S.t.IiWKws, {
            senderUserName: o,
            recipientUserName: l
        });
    }
    renderBody(e, t, n) {
        let { trialOffer: i } = this.props;
        return e && !n && void 0 === i.redeemed_at ? S.intl.format(S.t.LwCwT0, { helpdeskArticle: C.Z.getArticleURL(T.BhN.REFERRAL_PROGRAM) }) : t ? null : S.intl.string(S.t.lQLlOT);
    }
    renderActions(e, t, n) {
        let { trialOffer: r, currentUser: l, analyticsLocations: a } = this.props,
            o = {
                onClick: () => {
                    this.handleStartTrial(r, a);
                },
                color: d.Button.Colors.BRAND
            },
            s = l.id !== r.user_id || (0, I.I5)(l) || !l.verified || (0, N.B)(r),
            c = this.renderExpirationDate(e, t, n);
        return (
            (o.disabled = s),
            (0, i.jsxs)('div', {
                className: A.buttonContainer,
                children: [
                    (0, i.jsx)('div', {
                        children: (0, i.jsx)(d.Button, {
                            ...o,
                            size: d.Button.Sizes.SMALL,
                            onClick: () => {
                                (0, p.Z)({
                                    initialPlanId: null,
                                    subscriptionTier: v.Si.TIER_2,
                                    analyticsLocations: a,
                                    trialId: r.trial_id,
                                    referralTrialOfferId: r.id
                                });
                            },
                            children: S.intl.string(S.t.O0etsL)
                        })
                    }),
                    (0, i.jsx)('div', {
                        className: A.metadata,
                        children: c
                    })
                ]
            })
        );
    }
    renderExpirationDate(e, t, n) {
        let { trialOffer: i, trialEndsAt: r } = this.props;
        if (void 0 !== i.redeemed_at && !n && null !== r) return S.intl.formatToPlainString(S.t.nP0ivb, { date: (0, E.vc)(s()(r), 'LL') });
        if (e || void 0 === i.expires_at) return null;
        let l = s()(i.expires_at);
        if (t) return S.intl.formatToPlainString(S.t.PuSHfX, { date: (0, E.vc)(s()(l), 'LL') });
        let a = l.diff(s()(), 'h');
        if (a > 48) {
            let e = l.diff(s()(), 'd');
            return S.intl.formatToPlainString(S.t['g9s+dH'], { numDays: e });
        }
        if (a > 1) return S.intl.formatToPlainString(S.t.k9v339, { numHours: a });
        let o = l.diff(s()(), 'minutes');
        return S.intl.formatToPlainString(S.t['/d0GmZ'], { numMinutes: o });
    }
    renderMedia() {
        return (0, i.jsx)('div', { className: A.referral });
    }
    render() {
        let { trialOffer: e, currentUser: t, recipientHasNitro: n } = this.props,
            r = (0, N.B)(e),
            l = t.id === e.referrer_id;
        return (0, i.jsxs)('div', {
            className: a()(A.tile, A.container),
            children: [
                (0, i.jsx)('div', {
                    className: A.media,
                    children: this.renderMedia()
                }),
                (0, i.jsxs)('div', {
                    className: A.description,
                    children: [
                        (0, i.jsx)(d.H, {
                            className: A.title,
                            children: this.renderTitle(n, r, l)
                        }),
                        (0, i.jsx)('div', {
                            className: A.tagline,
                            children: this.renderBody(n, r, l)
                        }),
                        (0, i.jsx)('div', {
                            className: A.actions,
                            children: this.renderActions(n, r, l)
                        })
                    ]
                })
            ]
        });
    }
    constructor(...e) {
        var t, n, i;
        super(...e),
            (t = this),
            (n = 'handleStartTrial'),
            (i = (e, t) => {
                (0, p.Z)({
                    initialPlanId: null,
                    subscriptionTier: v.Si.TIER_2,
                    analyticsLocations: t,
                    trialId: e.trial_id
                });
            }),
            n in t
                ? Object.defineProperty(t, n, {
                      value: i,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[n] = i);
    }
}
function j(e) {
    let { userTrialOfferId: t, canRenderReferralEmbed: n } = e,
        { trialOffer: r, isResolving: l } = (0, u.cj)(
            [x.Z],
            () => ({
                trialOffer: n ? x.Z.getRelevantUserTrialOffer(t) : null,
                isResolving: !!n && x.Z.isResolving(t)
            }),
            [n, t]
        ),
        a = _.default.getCurrentUser(),
        o = (0, u.e7)([_.default], () => null != r && (0, I.I5)(void 0 !== a && r.user_id === a.id ? a : _.default.getUser(r.user_id))),
        s = (0, u.e7)([g.ZP], () => {
            var e;
            return o ? (null === (e = g.ZP.getPremiumTypeSubscription()) || void 0 === e ? void 0 : e.trialEndsAt) : null;
        }),
        { analyticsLocations: d } = (0, f.ZP)(h.Z.SHARE_NITRO_EMBED);
    return l
        ? (0, i.jsx)(m.OR, { isHorizontal: !c.tq })
        : n && null != r && void 0 !== a
          ? (0, i.jsx)(b, {
                trialOffer: r,
                currentUser: a,
                recipientHasNitro: o,
                trialEndsAt: s,
                analyticsLocations: d,
                ...e
            })
          : (0, i.jsx)('div', {
                className: A.invalidWrapper,
                children: (0, i.jsx)('div', { className: A.invalid })
            });
}
